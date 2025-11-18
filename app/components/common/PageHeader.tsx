import { ReactNode } from "react";

const PageHeader = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-5xl font-bold">{children}</h1>;
};

export default PageHeader;
