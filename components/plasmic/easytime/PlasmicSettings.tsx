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
import Header from "../../Header"; // plasmic-import: aBQwDwBIQz/component
import Container from "../../Container"; // plasmic-import: SuzMD14H1M/component
import RecordItem from "../../RecordItem"; // plasmic-import: _XArBkddKd/component
import BizItem from "../../BizItem"; // plasmic-import: WrlNulxyIS/component
import Button from "../../Button"; // plasmic-import: CM9oqbJYK7/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_easytime.module.css"; // plasmic-import: mBKHaRhjQbiZuznDyARcTS/projectcss
import sty from "./PlasmicSettings.module.css"; // plasmic-import: t8VWzd7npn/css

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
  linkToGoogle?: p.Flex<typeof Button>;
  linkToGitHub?: p.Flex<typeof Button>;
  name?: p.Flex<"input">;
  zipcode?: p.Flex<"input">;
  address?: p.Flex<"textarea">;
  bank?: p.Flex<"textarea">;
  signOut?: p.Flex<typeof Button>;
};

export interface DefaultSettingsProps {}

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

function PlasmicSettings__RenderFunc(props: {
  variants: PlasmicSettings__VariantsArgs;
  args: PlasmicSettings__ArgsType;
  overrides: PlasmicSettings__OverridesType;
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
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___3R5W5)}
            >
              <RecordItem
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__epnN0
                    )}
                  >
                    {"会社リスト"}
                  </div>
                }
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lBosZ)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"bizList"}
                    data-plasmic-override={overrides.bizList}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.bizList)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: (
                        <React.Fragment>
                          <BizItem
                            className={classNames(
                              "__wab_instance",
                              sty.bizItem__cXsxG
                            )}
                          />

                          <BizItem
                            className={classNames(
                              "__wab_instance",
                              sty.bizItem__ockkh
                            )}
                          />

                          <BizItem
                            className={classNames(
                              "__wab_instance",
                              sty.bizItem__hePt1
                            )}
                          />
                        </React.Fragment>
                      ),
                      value: args.bizList,
                    })}
                  </p.Stack>

                  <Button
                    data-plasmic-name={"addBiz"}
                    data-plasmic-override={overrides.addBiz}
                    className={classNames("__wab_instance", sty.addBiz)}
                    type={"text" as const}
                  >
                    {"会社を追加"}
                  </Button>
                </p.Stack>
              </RecordItem>

              <RecordItem
                className={classNames("__wab_instance", sty.recordItem__b0EXk)}
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7IbCz
                    )}
                  >
                    {"別のアカウントと連携"}
                  </div>
                }
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__svdSp)}
                >
                  <Button
                    data-plasmic-name={"linkToGoogle"}
                    data-plasmic-override={overrides.linkToGoogle}
                  >
                    {"Google"}
                  </Button>

                  <Button
                    data-plasmic-name={"linkToGitHub"}
                    data-plasmic-override={overrides.linkToGitHub}
                    className={classNames("__wab_instance", sty.linkToGitHub)}
                  >
                    {"GitHub"}
                  </Button>
                </p.Stack>
              </RecordItem>

              <RecordItem
                className={classNames("__wab_instance", sty.recordItem___5AzV5)}
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Gzrx
                    )}
                  >
                    {"名前"}
                  </div>
                }
              >
                <input
                  data-plasmic-name={"name"}
                  data-plasmic-override={overrides.name}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.name
                  )}
                  placeholder={"請求書に記載されます" as const}
                  ref={(ref) => {
                    $refs["name"] = ref;
                  }}
                  size={1 as const}
                  type={"text" as const}
                  value={"" as const}
                />
              </RecordItem>

              <RecordItem
                className={classNames("__wab_instance", sty.recordItem__tc6AB)}
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iNcVp
                    )}
                  >
                    {"請求書に記載する住所"}
                  </div>
                }
              >
                <div className={classNames(projectcss.all, sty.freeBox__znbZg)}>
                  <RecordItem
                    className={classNames(
                      "__wab_instance",
                      sty.recordItem___1Cl4F
                    )}
                    title={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fuKyX
                        )}
                      >
                        {"郵便番号"}
                      </div>
                    }
                  >
                    <input
                      data-plasmic-name={"zipcode"}
                      data-plasmic-override={overrides.zipcode}
                      className={classNames(
                        projectcss.all,
                        projectcss.input,
                        sty.zipcode
                      )}
                      placeholder={"114-1919" as const}
                      ref={(ref) => {
                        $refs["zipcode"] = ref;
                      }}
                      size={1 as const}
                      type={"text" as const}
                      value={"" as const}
                    />
                  </RecordItem>

                  <RecordItem
                    className={classNames(
                      "__wab_instance",
                      sty.recordItem__ubXsy
                    )}
                    title={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ruFa
                        )}
                      >
                        {"住所"}
                      </div>
                    }
                  >
                    <textarea
                      data-plasmic-name={"address"}
                      data-plasmic-override={overrides.address}
                      className={classNames(
                        projectcss.all,
                        projectcss.textarea,
                        sty.address
                      )}
                      placeholder={"千葉県松戸市六高台2-78-3" as const}
                      ref={(ref) => {
                        $refs["address"] = ref;
                      }}
                      value={"" as const}
                    />
                  </RecordItem>
                </div>
              </RecordItem>

              <RecordItem
                className={classNames("__wab_instance", sty.recordItem__crxkR)}
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uYk
                    )}
                  >
                    {"請求書に記載する振込先"}
                  </div>
                }
              >
                <textarea
                  data-plasmic-name={"bank"}
                  data-plasmic-override={overrides.bank}
                  className={classNames(
                    projectcss.all,
                    projectcss.textarea,
                    sty.bank
                  )}
                  placeholder={"チンコ銀行 マンコ支店 普通 1145141919" as const}
                  ref={(ref) => {
                    $refs["bank"] = ref;
                  }}
                  value={"" as const}
                />
              </RecordItem>

              <RecordItem
                className={classNames("__wab_instance", sty.recordItem__wenbB)}
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ykzP
                    )}
                  >
                    {"ログアウトする"}
                  </div>
                }
              >
                <Button
                  data-plasmic-name={"signOut"}
                  data-plasmic-override={overrides.signOut}
                  className={classNames("__wab_instance", sty.signOut)}
                >
                  {"ログアウト"}
                </Button>
              </RecordItem>
            </p.Stack>
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
    "bizList",
    "addBiz",
    "linkToGoogle",
    "linkToGitHub",
    "name",
    "zipcode",
    "address",
    "bank",
    "signOut",
  ],
  header: ["header"],
  container: [
    "container",
    "bizList",
    "addBiz",
    "linkToGoogle",
    "linkToGitHub",
    "name",
    "zipcode",
    "address",
    "bank",
    "signOut",
  ],
  bizList: ["bizList"],
  addBiz: ["addBiz"],
  linkToGoogle: ["linkToGoogle"],
  linkToGitHub: ["linkToGitHub"],
  name: ["name"],
  zipcode: ["zipcode"],
  address: ["address"],
  bank: ["bank"],
  signOut: ["signOut"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  container: typeof Container;
  bizList: "div";
  addBiz: typeof Button;
  linkToGoogle: typeof Button;
  linkToGitHub: typeof Button;
  name: "input";
  zipcode: "input";
  address: "textarea";
  bank: "textarea";
  signOut: typeof Button;
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
  } & Omit<PlasmicSettings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSettings__ArgsType,
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
          internalArgPropNames: PlasmicSettings__ArgProps,
          internalVariantPropNames: PlasmicSettings__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicSettings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
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
    linkToGoogle: makeNodeComponent("linkToGoogle"),
    linkToGitHub: makeNodeComponent("linkToGitHub"),
    _name: makeNodeComponent("name"),
    zipcode: makeNodeComponent("zipcode"),
    address: makeNodeComponent("address"),
    bank: makeNodeComponent("bank"),
    signOut: makeNodeComponent("signOut"),

    // Metadata about props expected for PlasmicSettings
    internalVariantProps: PlasmicSettings__VariantProps,
    internalArgProps: PlasmicSettings__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
);

export default PlasmicSettings;
/* prettier-ignore-end */
