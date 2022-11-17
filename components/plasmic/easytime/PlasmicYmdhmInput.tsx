// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: wYLwsz9PHx
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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

import projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import sty from "./PlasmicYmdhmInput.module.css"; // plasmic-import: wYLwsz9PHx/css

export type PlasmicYmdhmInput__VariantMembers = {};
export type PlasmicYmdhmInput__VariantsArgs = {};
type VariantPropType = keyof PlasmicYmdhmInput__VariantsArgs;
export const PlasmicYmdhmInput__VariantProps = new Array<VariantPropType>();

export type PlasmicYmdhmInput__ArgsType = {};
type ArgPropType = keyof PlasmicYmdhmInput__ArgsType;
export const PlasmicYmdhmInput__ArgProps = new Array<ArgPropType>();

export type PlasmicYmdhmInput__OverridesType = {
  root?: p.Flex<"div">;
  year?: p.Flex<"input">;
  month?: p.Flex<"input">;
  day?: p.Flex<"input">;
  hour?: p.Flex<"input">;
  minute?: p.Flex<"input">;
};

export interface DefaultYmdhmInputProps {
  className?: string;
}

function PlasmicYmdhmInput__RenderFunc(props: {
  variants: PlasmicYmdhmInput__VariantsArgs;
  args: PlasmicYmdhmInput__ArgsType;
  overrides: PlasmicYmdhmInput__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___3K9Gh)}>
        <input
          data-plasmic-name={"year"}
          data-plasmic-override={overrides.year}
          className={classNames(projectcss.all, projectcss.input, sty.year)}
          size={1 as const}
          type={"text" as const}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kdNt0
          )}
        >
          {"/"}
        </div>

        <input
          data-plasmic-name={"month"}
          data-plasmic-override={overrides.month}
          className={classNames(projectcss.all, projectcss.input, sty.month)}
          size={1 as const}
          type={"text" as const}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uaMt8
          )}
        >
          {"/"}
        </div>

        <input
          data-plasmic-name={"day"}
          data-plasmic-override={overrides.day}
          className={classNames(projectcss.all, projectcss.input, sty.day)}
          size={1 as const}
          type={"text" as const}
        />
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__gIiYa)}>
        <input
          data-plasmic-name={"hour"}
          data-plasmic-override={overrides.hour}
          className={classNames(projectcss.all, projectcss.input, sty.hour)}
          size={1 as const}
          type={"text" as const}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kYgnz
          )}
        >
          {":"}
        </div>

        <input
          data-plasmic-name={"minute"}
          data-plasmic-override={overrides.minute}
          className={classNames(projectcss.all, projectcss.input, sty.minute)}
          size={1 as const}
          type={"text" as const}
        />
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "year", "month", "day", "hour", "minute"],
  year: ["year"],
  month: ["month"],
  day: ["day"],
  hour: ["hour"],
  minute: ["minute"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  year: "input";
  month: "input";
  day: "input";
  hour: "input";
  minute: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicYmdhmInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicYmdhmInput__VariantsArgs;
    args?: PlasmicYmdhmInput__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicYmdhmInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicYmdhmInput__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicYmdhmInput__ArgProps,
          internalVariantPropNames: PlasmicYmdhmInput__VariantProps,
        }),
      [props, nodeName]
    );

    return PlasmicYmdhmInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicYmdhmInput";
  } else {
    func.displayName = `PlasmicYmdhmInput.${nodeName}`;
  }
  return func;
}

export const PlasmicYmdhmInput = Object.assign(
  // Top-level PlasmicYmdhmInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    year: makeNodeComponent("year"),
    month: makeNodeComponent("month"),
    day: makeNodeComponent("day"),
    hour: makeNodeComponent("hour"),
    minute: makeNodeComponent("minute"),

    // Metadata about props expected for PlasmicYmdhmInput
    internalVariantProps: PlasmicYmdhmInput__VariantProps,
    internalArgProps: PlasmicYmdhmInput__ArgProps,
  }
);

export default PlasmicYmdhmInput;
/* prettier-ignore-end */
