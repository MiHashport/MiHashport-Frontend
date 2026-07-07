import { env } from "@/config/env";

export class ApiError extends Error {
  status: number;
  statusText: string;
  body: unknown;

  constructor(status: number, statusText: string, body: unknown, message?: string) {
    super(message || `API Error: ${status} ${statusText}`);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

interface RequestOptions extends Omit<RequestInit, "body"> {
  params?: Record<string, string | number | boolean | undefined | null>;
  body?: unknown;
}

async function apiFetch<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, headers, body, ...init } = options;

  let url = `${env.apiBaseUrl}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        searchParams.append(key, String(val));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += url.includes("?") ? `&${queryString}` : `?${queryString}`;
    }
  }

  const defaultHeaders: Record<string, string> = {};

  let requestBody: BodyInit | null | undefined = undefined;
  if (body !== undefined) {
    if (body instanceof FormData) {
      requestBody = body;
    } else {
      defaultHeaders["Content-Type"] = "application/json";
      requestBody = JSON.stringify(body);
    }
  }

  const mergedHeaders = {
    ...defaultHeaders,
    ...headers,
  };

  const response = await fetch(url, {
    ...init,
    headers: mergedHeaders,
    body: requestBody,
  });

  if (!response.ok) {
    let errorBody: unknown;
    try {
      errorBody = await response.json();
    } catch {
      try {
        errorBody = await response.text();
      } catch {
        errorBody = null;
      }
    }
    
    let message = response.statusText;
    if (errorBody && typeof errorBody === "object") {
      const errObj = errorBody as Record<string, unknown>;
      if (typeof errObj.message === "string") {
        message = errObj.message;
      } else if (typeof errObj.error === "string") {
        message = errObj.error;
      }
    }
    throw new ApiError(response.status, response.statusText, errorBody, message);
  }

  if (response.status === 204) {
    return {} as T;
  }

  try {
    return (await response.json()) as T;
  } catch {
    const text = await response.text();
    return text as unknown as T;
  }
}

export const apiClient = {
  get: <T>(endpoint: string, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(endpoint, { ...options, method: "GET" }),
  post: <T>(endpoint: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(endpoint, { ...options, method: "POST", body }),
  put: <T>(endpoint: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(endpoint, { ...options, method: "PUT", body }),
  patch: <T>(endpoint: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(endpoint, { ...options, method: "PATCH", body }),
  delete: <T>(endpoint: string, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(endpoint, { ...options, method: "DELETE" }),
};
