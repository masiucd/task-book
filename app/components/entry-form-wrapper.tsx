import type { PropsWithChildren } from "react";

export function EntryFormWrapper({ children }: PropsWithChildren) {
  return (
    <div className="mx-1 mb-5 rounded-lg bg-gray-900  p-2 sm:mx-0">
      {children}
    </div>
  );
}
