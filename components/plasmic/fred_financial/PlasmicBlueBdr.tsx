// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3EaMA65xrPs96BzDRgA4Kb
// Component: ZAq_6YLf-wrCFi
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
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fred_financial.module.css"; // plasmic-import: 3EaMA65xrPs96BzDRgA4Kb/projectcss
import sty from "./PlasmicBlueBdr.module.css"; // plasmic-import: ZAq_6YLf-wrCFi/css

export type PlasmicBlueBdr__VariantMembers = {};

export type PlasmicBlueBdr__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlueBdr__VariantsArgs;
export const PlasmicBlueBdr__VariantProps = new Array<VariantPropType>();

export type PlasmicBlueBdr__ArgsType = {};
type ArgPropType = keyof PlasmicBlueBdr__ArgsType;
export const PlasmicBlueBdr__ArgProps = new Array<ArgPropType>();

export type PlasmicBlueBdr__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultBlueBdrProps {
  className?: string;
}

function PlasmicBlueBdr__RenderFunc(props: {
  variants: PlasmicBlueBdr__VariantsArgs;
  args: PlasmicBlueBdr__ArgsType;
  overrides: PlasmicBlueBdr__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    true ? (
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
      />
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlueBdr__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlueBdr__VariantsArgs;
    args?: PlasmicBlueBdr__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlueBdr__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBlueBdr__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBlueBdr__ArgProps,
      internalVariantPropNames: PlasmicBlueBdr__VariantProps
    });

    return PlasmicBlueBdr__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlueBdr";
  } else {
    func.displayName = `PlasmicBlueBdr.${nodeName}`;
  }
  return func;
}

export const PlasmicBlueBdr = Object.assign(
  // Top-level PlasmicBlueBdr renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBlueBdr
    internalVariantProps: PlasmicBlueBdr__VariantProps,
    internalArgProps: PlasmicBlueBdr__ArgProps
  }
);

export default PlasmicBlueBdr;
/* prettier-ignore-end */