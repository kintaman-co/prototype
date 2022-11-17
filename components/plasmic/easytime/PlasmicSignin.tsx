// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: nOkcrTTsdU
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
import Header from "../../Header"; // plasmic-import: aBQwDwBIQz/component
import Container from "../../Container"; // plasmic-import: SuzMD14H1M/component
import Button from "../../Button"; // plasmic-import: CM9oqbJYK7/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import sty from "./PlasmicSignin.module.css"; // plasmic-import: nOkcrTTsdU/css

export type PlasmicSignin__VariantMembers = {};
export type PlasmicSignin__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignin__VariantsArgs;
export const PlasmicSignin__VariantProps = new Array<VariantPropType>();

export type PlasmicSignin__ArgsType = {};
type ArgPropType = keyof PlasmicSignin__ArgsType;
export const PlasmicSignin__ArgProps = new Array<ArgPropType>();

export type PlasmicSignin__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  container?: p.Flex<typeof Container>;
  text?: p.Flex<"div">;
  google?: p.Flex<typeof Button>;
  github?: p.Flex<typeof Button>;
  anonymous?: p.Flex<typeof Button>;
};

export interface DefaultSigninProps {}

function PlasmicSignin__RenderFunc(props: {
  variants: PlasmicSignin__VariantsArgs;
  args: PlasmicSignin__ArgsType;
  overrides: PlasmicSignin__OverridesType;

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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Container
            data-plasmic-name={"container"}
            data-plasmic-override={overrides.container}
            className={classNames("__wab_instance", sty.container)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__r2XL)}>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"ログインしてみましょう"}
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__meYeN)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__cnkjL)}
                >
                  <Button
                    data-plasmic-name={"google"}
                    data-plasmic-override={overrides.google}
                    type={"primary" as const}
                  >
                    {"Googleでログイン"}
                  </Button>

                  <Button
                    data-plasmic-name={"github"}
                    data-plasmic-override={overrides.github}
                    type={"primary" as const}
                  >
                    {"GitHubでログイン"}
                  </Button>

                  <Button
                    data-plasmic-name={"anonymous"}
                    data-plasmic-override={overrides.anonymous}
                    type={"text" as const}
                  >
                    {"ログインせずに使う"}
                  </Button>
                </p.Stack>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "container",
    "text",
    "google",
    "github",
    "anonymous",
  ],
  header: ["header"],
  container: ["container", "text", "google", "github", "anonymous"],
  text: ["text"],
  google: ["google"],
  github: ["github"],
  anonymous: ["anonymous"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  container: typeof Container;
  text: "div";
  google: typeof Button;
  github: typeof Button;
  anonymous: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignin__VariantsArgs;
    args?: PlasmicSignin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignin__ArgsType,
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
          internalArgPropNames: PlasmicSignin__ArgProps,
          internalVariantPropNames: PlasmicSignin__VariantProps,
        }),
      [props, nodeName]
    );

    return PlasmicSignin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignin";
  } else {
    func.displayName = `PlasmicSignin.${nodeName}`;
  }
  return func;
}

export const PlasmicSignin = Object.assign(
  // Top-level PlasmicSignin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    container: makeNodeComponent("container"),
    text: makeNodeComponent("text"),
    google: makeNodeComponent("google"),
    github: makeNodeComponent("github"),
    anonymous: makeNodeComponent("anonymous"),

    // Metadata about props expected for PlasmicSignin
    internalVariantProps: PlasmicSignin__VariantProps,
    internalArgProps: PlasmicSignin__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
);

export default PlasmicSignin;
/* prettier-ignore-end */
