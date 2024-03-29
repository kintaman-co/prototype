// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: aBQwDwBIQz

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import HeaderButton from "../../HeaderButton"; // plasmic-import: 8PUOayqXwP/component
import Time from "../../Time"; // plasmic-import: tOmxC_Hwcz/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: aBQwDwBIQz/css

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  left?: p.Flex<"div">;
  text?: p.Flex<"div">;
  right?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  time?: p.Flex<typeof Time>;
};

export interface DefaultHeaderProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"left"}
        data-plasmic-override={overrides.left}
        className={classNames(projectcss.all, sty.left)}
      >
        <HeaderButton
          className={classNames("__wab_instance", sty.headerButton__xQogy)}
          to={`/`}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Tamaki"}
          </div>
        </HeaderButton>
      </div>

      <div
        data-plasmic-name={"right"}
        data-plasmic-override={overrides.right}
        className={classNames(projectcss.all, sty.right)}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <Time
            data-plasmic-name={"time"}
            data-plasmic-override={overrides.time}
            type={"inHeader" as const}
          />
        </div>

        <HeaderButton
          className={classNames("__wab_instance", sty.headerButton__rEl)}
          to={`/`}
        >
          {"勤怠管理"}
        </HeaderButton>

        <HeaderButton
          className={classNames("__wab_instance", sty.headerButton__nNgE)}
          to={`/log`}
        >
          {"ログ"}
        </HeaderButton>

        <HeaderButton
          className={classNames("__wab_instance", sty.headerButton__nLq9E)}
          to={`/invoice`}
        >
          {"請求書"}
        </HeaderButton>

        <HeaderButton
          className={classNames("__wab_instance", sty.headerButton___5LMdS)}
          to={`/settings`}
        >
          {"設定"}
        </HeaderButton>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "left", "text", "right", "freeBox", "time"],
  left: ["left", "text"],
  text: ["text"],
  right: ["right", "freeBox", "time"],
  freeBox: ["freeBox", "time"],
  time: ["time"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  left: "div";
  text: "div";
  right: "div";
  freeBox: "div";
  time: typeof Time;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    left: makeNodeComponent("left"),
    text: makeNodeComponent("text"),
    right: makeNodeComponent("right"),
    freeBox: makeNodeComponent("freeBox"),
    time: makeNodeComponent("time"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
