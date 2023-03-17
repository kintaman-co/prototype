// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: SCY6plzZHs

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
import Select from "../../Select"; // plasmic-import: kz5Y7kNyM-O/component
import Select__Option from "../../Select__Option"; // plasmic-import: tmCSccuYm0e/component
import Skeleton from "../../Skeleton"; // plasmic-import: wYIaMxnRFr/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import sty from "./PlasmicBizSelect.module.css"; // plasmic-import: SCY6plzZHs/css

export type PlasmicBizSelect__VariantMembers = {
  loading: "loading";
  hasAll: "hasAll";
};
export type PlasmicBizSelect__VariantsArgs = {
  loading?: SingleBooleanChoiceArg<"loading">;
  hasAll?: SingleBooleanChoiceArg<"hasAll">;
};
type VariantPropType = keyof PlasmicBizSelect__VariantsArgs;
export const PlasmicBizSelect__VariantProps = new Array<VariantPropType>(
  "loading",
  "hasAll"
);

export type PlasmicBizSelect__ArgsType = {};
type ArgPropType = keyof PlasmicBizSelect__ArgsType;
export const PlasmicBizSelect__ArgProps = new Array<ArgPropType>();

export type PlasmicBizSelect__OverridesType = {
  root?: p.Flex<"div">;
  select?: p.Flex<typeof Select>;
  skeleton?: p.Flex<typeof Skeleton>;
};

export interface DefaultBizSelectProps {
  loading?: SingleBooleanChoiceArg<"loading">;
  hasAll?: SingleBooleanChoiceArg<"hasAll">;
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

function PlasmicBizSelect__RenderFunc(props: {
  variants: PlasmicBizSelect__VariantsArgs;
  args: PlasmicBizSelect__ArgsType;
  overrides: PlasmicBizSelect__OverridesType;
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "loading",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.loading
          : undefined,
      },
      {
        path: "hasAll",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.hasAll
          : undefined,
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined,
      },
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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
        sty.root,
        { [sty.rootloading]: hasVariant($state, "loading", "loading") }
      )}
    >
      {(hasVariant($state, "loading", "loading") ? true : true) ? (
        <Select
          data-plasmic-name={"select"}
          data-plasmic-override={overrides.select}
          className={classNames("__wab_instance", sty.select, {
            [sty.selecthasAll]: hasVariant($state, "hasAll", "hasAll"),
            [sty.selectloading]: hasVariant($state, "loading", "loading"),
          })}
          onChange={(...eventArgs) => {
            p.generateStateOnChangeProp($state, ["select", "value"])(
              eventArgs[0]
            );
          }}
          value={p.generateStateValueProp($state, ["select", "value"])}
        />
      ) : null}
      {(hasVariant($state, "loading", "loading") ? true : false) ? (
        <Skeleton
          data-plasmic-name={"skeleton"}
          data-plasmic-override={overrides.skeleton}
          className={classNames("__wab_instance", sty.skeleton, {
            [sty.skeletonloading]: hasVariant($state, "loading", "loading"),
          })}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "select", "skeleton"],
  select: ["select"],
  skeleton: ["skeleton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  select: typeof Select;
  skeleton: typeof Skeleton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBizSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBizSelect__VariantsArgs;
    args?: PlasmicBizSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBizSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBizSelect__ArgsType,
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
          internalArgPropNames: PlasmicBizSelect__ArgProps,
          internalVariantPropNames: PlasmicBizSelect__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicBizSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBizSelect";
  } else {
    func.displayName = `PlasmicBizSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicBizSelect = Object.assign(
  // Top-level PlasmicBizSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    select: makeNodeComponent("select"),
    skeleton: makeNodeComponent("skeleton"),

    // Metadata about props expected for PlasmicBizSelect
    internalVariantProps: PlasmicBizSelect__VariantProps,
    internalArgProps: PlasmicBizSelect__ArgProps,
  }
);

export default PlasmicBizSelect;
/* prettier-ignore-end */
