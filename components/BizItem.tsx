import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { PlasmicBizItem } from "./plasmic/easytime/PlasmicBizItem";

type Props = {
  children: ReactNode;
  /**
   * biz id
   */
  id: string;
};

function BizItem({ id, children }: Props) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/biz/${id}`);
  };

  return <PlasmicBizItem onClick={handleClick}>{children}</PlasmicBizItem>;
}

export default BizItem;
