import { MountCount } from "./_client";

export default function Template(props: React.PropsWithChildren) {
  return (
    <div className="border p-2">
      <MountCount name="template.tsx" />
      {props.children}
    </div>
  );
}
