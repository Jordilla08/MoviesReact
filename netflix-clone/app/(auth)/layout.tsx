import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>HELLO </h1>
      {children}
    </div>
  );
}
