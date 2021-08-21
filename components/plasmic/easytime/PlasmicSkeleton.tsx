// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: wYIaMxnRFr
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import * as sty from "./PlasmicSkeleton.module.css"; // plasmic-import: wYIaMxnRFr/css

export type PlasmicSkeleton__VariantMembers = {};

export type PlasmicSkeleton__VariantsArgs = {};
type VariantPropType = keyof PlasmicSkeleton__VariantsArgs;
export const PlasmicSkeleton__VariantProps = new Array<VariantPropType>();

export type PlasmicSkeleton__ArgsType = {};
type ArgPropType = keyof PlasmicSkeleton__ArgsType;
export const PlasmicSkeleton__ArgProps = new Array<ArgPropType>();

export type PlasmicSkeleton__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSkeletonProps {
  className?: string;
}

function PlasmicSkeleton__RenderFunc(props: {
  variants: PlasmicSkeleton__VariantsArgs;
  args: PlasmicSkeleton__ArgsType;
  overrides: PlasmicSkeleton__OverridesType;
  dataFetches?: PlasmicSkeleton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSkeleton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSkeleton__VariantsArgs;
    args?: PlasmicSkeleton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSkeleton__Fetches;
  } & Omit<PlasmicSkeleton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSkeleton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSkeleton__ArgProps,
      internalVariantPropNames: PlasmicSkeleton__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicSkeleton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSkeleton";
  } else {
    func.displayName = `PlasmicSkeleton.${nodeName}`;
  }
  return func;
}

export const PlasmicSkeleton = Object.assign(
  // Top-level PlasmicSkeleton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSkeleton
    internalVariantProps: PlasmicSkeleton__VariantProps,
    internalArgProps: PlasmicSkeleton__ArgProps,
  }
);

export default PlasmicSkeleton;
/* prettier-ignore-end */
