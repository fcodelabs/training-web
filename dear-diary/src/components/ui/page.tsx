import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Page(props: Props) {
  return <div>{props.children}</div>;
}

export default Page;
