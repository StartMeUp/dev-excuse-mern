import { z } from "zod";
import {
  excuseResponseSchema,
  excusesResponseSchema,
  type Excuse,
} from "@/types/schemas";

export const fetchAllExcuses = () =>
  fetchClient("/excuses/", { zodSchema: excusesResponseSchema });

export const fetchOneExcuse = (http_code: Excuse["http_code"]) =>
  fetchClient(`/excuses/${http_code}`, { zodSchema: excuseResponseSchema });

export const fetchCreateOneExcuse = (newExcuse: Excuse) =>
  fetchClient(`/excuses/createOne`, {
    zodSchema: excuseResponseSchema,
    data: JSON.stringify(newExcuse),
  });

export const fetchSeedDB = () =>
  fetchClient("/excuses/seed", { zodSchema: excusesResponseSchema });

// generic client to fetch data from the server

export type ClientConfig<T> = {
  data?: unknown;
  zodSchema?: z.ZodSchema<T>;
  method?: "DELETE" | "GET" | "OPTIONS" | "PATCH" | "POST" | "PUT";
  headers?: HeadersInit;
  customConfig?: RequestInit;
  signal?: AbortSignal;
};

export async function fetchClient<T>(
  path: string,
  {
    data,
    zodSchema,
    method,
    headers: customHeaders,
    signal,
    customConfig,
  }: ClientConfig<T> = {},
): Promise<T> {
  const config: RequestInit = {
    method: method ?? (data ? "POST" : "GET"),
    body: data ? JSON.stringify(data) : null,
    headers: {
      "Content-Type": data ? "application/json" : "",
      Accept: "application/json",
      ...customHeaders,
    },
    signal,
    ...customConfig,
  };

  return fetch("http://localhost:3001" + path, config).then(
    async (response) => {
      // on gère le status 401
      if (response.status === 401) {
        return Promise.reject(new Error("You're not authenticated"));
      }

      let result = null;
      try {
        result = response.status === 204 ? null : await response.json();
      } catch (error: unknown) {
        return Promise.reject(error);
      }

      if (response.ok) {
        return zodSchema && result ? zodSchema.parse(result) : result;
      } else {
        return Promise.reject(result);
      }
    },
  );
}
