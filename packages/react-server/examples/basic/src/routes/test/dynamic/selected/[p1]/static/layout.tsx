import type { LayoutProps } from "@hiogawa/react-server/server";
import { Selected } from "../../_client";

export default function Page(props: LayoutProps) {
  return (
    <>
      <pre>
        /[p1]/static/layout.tsx: <Selected />
      </pre>
      {props.children}
    </>
  );
}
