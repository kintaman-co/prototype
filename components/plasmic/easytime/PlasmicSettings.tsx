// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBKHaRhjQbiZuznDyARcTS
// Component: t8VWzd7npn
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
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: aBQwDwBIQz/component
import Container from "../../Container"; // plasmic-import: SuzMD14H1M/component
import EditableBizItem from "../../EditableBizItem"; // plasmic-import: yqjHbDN1Sk/component
import Button from "../../Button"; // plasmic-import: CM9oqbJYK7/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import * as sty from "./PlasmicSettings.module.css"; // plasmic-import: t8VWzd7npn/css

export type PlasmicSettings__VariantMembers = {};

export type PlasmicSettings__VariantsArgs = {};
type VariantPropType = keyof PlasmicSettings__VariantsArgs;
export const PlasmicSettings__VariantProps = new Array<VariantPropType>();

export type PlasmicSettings__ArgsType = {
  bizList?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSettings__ArgsType;
export const PlasmicSettings__ArgProps = new Array<ArgPropType>("bizList");

export type PlasmicSettings__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  container?: p.Flex<typeof Container>;
  bizList?: p.Flex<"div">;
  addBiz?: p.Flex<typeof Button>;
};

export interface DefaultSettingsProps {
  dataFetches: PlasmicSettings__Fetches;
}

function PlasmicSettings__RenderFunc(props: {
  variants: PlasmicSettings__VariantsArgs;
  args: PlasmicSettings__ArgsType;
  overrides: PlasmicSettings__OverridesType;
  dataFetches?: PlasmicSettings__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
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
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__lBosZ)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__epnN0
                )}
              >
                {"会社リスト"}
              </div>

              <div
                data-plasmic-name={"bizList"}
                data-plasmic-override={overrides.bizList}
                className={classNames(defaultcss.all, sty.bizList)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <EditableBizItem
                      className={classNames(
                        "__wab_instance",
                        sty.editableBizItem__igcaB
                      )}
                    />
                  ),

                  value: args.bizList
                })}
              </div>

              <Button
                data-plasmic-name={"addBiz"}
                data-plasmic-override={overrides.addBiz}
                className={classNames("__wab_instance", sty.addBiz)}
              >
                {"会社を追加"}
              </Button>
            </p.Stack>
          </Container>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "container", "bizList", "addBiz"],
  header: ["header"],
  container: ["container", "bizList", "addBiz"],
  bizList: ["bizList"],
  addBiz: ["addBiz"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  container: typeof Container;
  bizList: "div";
  addBiz: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSettings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSettings__VariantsArgs;
    args?: PlasmicSettings__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSettings__Fetches;
  } & Omit<PlasmicSettings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSettings__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSettings__ArgProps,
      internalVariantPropNames: PlasmicSettings__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSettings__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSettings";
  } else {
    func.displayName = `PlasmicSettings.${nodeName}`;
  }
  return func;
}

export const PlasmicSettings = Object.assign(
  // Top-level PlasmicSettings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    container: makeNodeComponent("container"),
    bizList: makeNodeComponent("bizList"),
    addBiz: makeNodeComponent("addBiz"),

    // Metadata about props expected for PlasmicSettings
    internalVariantProps: PlasmicSettings__VariantProps,
    internalArgProps: PlasmicSettings__ArgProps
  }
);

export default PlasmicSettings;
/* prettier-ignore-end */
