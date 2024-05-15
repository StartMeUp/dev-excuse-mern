import type { ComponentPropsWithoutRef } from "react";
import type { Excuse } from "./schemas";

// components types
export type DivNativeProps = ComponentPropsWithoutRef<"div">;
export type H1NativeProps = ComponentPropsWithoutRef<"h1">;
export type ButtonNativeProps = ComponentPropsWithoutRef<"button">;
export type DialogNativeProps = ComponentPropsWithoutRef<"dialog">;

// excuses types
export { Excuse };
export type Excuses = Excuse[];

// request types
export type ReqMethod = "GET" | "POST" | "PUT" | "DELETE";
