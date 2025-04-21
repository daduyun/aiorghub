import * as React from "react";

export function Input({ placeholder, className = "" }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border rounded-xl px-4 py-2 w-full ${className}`}
    />
  );
}