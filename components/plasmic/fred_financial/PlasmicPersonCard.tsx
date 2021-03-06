// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3EaMA65xrPs96BzDRgA4Kb
// Component: asufuhvKp2c9ej
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
import sty from "./PlasmicPersonCard.module.css"; // plasmic-import: asufuhvKp2c9ej/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: dvwEd_BkKtwJza/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: wi3VKWekO_oGyW/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: cbWCu6uJd49iyl/icon

export type PlasmicPersonCard__VariantMembers = {};

export type PlasmicPersonCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicPersonCard__VariantsArgs;
export const PlasmicPersonCard__VariantProps = new Array<VariantPropType>();

export type PlasmicPersonCard__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPersonCard__ArgsType;
export const PlasmicPersonCard__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "image",
  "slot2"
);

export type PlasmicPersonCard__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h1?: p.Flex<"h1">;
};

export interface DefaultPersonCardProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicPersonCard__RenderFunc(props: {
  variants: PlasmicPersonCard__VariantsArgs;
  args: PlasmicPersonCard__ArgsType;
  overrides: PlasmicPersonCard__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

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
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"336px" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"100%" as const}
        loading={"lazy" as const}
        src={
          args.image !== undefined
            ? args.image
            : {
                src: "/plasmic/fred_financial/images/team2Jpg2.jpeg",
                fullWidth: 400,
                fullHeight: 400,
                aspectRatio: undefined
              }
        }
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jJmSf)}
      >
        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(projectcss.all, projectcss.h1, sty.h1)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Becca Kingsman",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </h1>

        <div className={classNames(projectcss.all, sty.freeBox__fbE4)}>
          {p.renderPlasmicSlot({
            defaultContents: "Job title",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>

        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___7XFjc)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  {true ? (
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__v13I6
                      )}
                      component={Link}
                      href={"/home" as const}
                      platform={"nextjs"}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__cuH9D)}
                        href={"https://www.linkedin.com/" as const}
                        link={"https://www.linkedin.com/" as const}
                        role={"img"}
                      />
                    </p.PlasmicLink>
                  ) : null}

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__utRqq
                    )}
                    component={Link}
                    href={"/home" as const}
                    platform={"nextjs"}
                  >
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg___6IJui)}
                      role={"img"}
                    />
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__u8Wye
                    )}
                    component={Link}
                    href={"/home" as const}
                    platform={"nextjs"}
                  >
                    <Icon3Icon
                      className={classNames(projectcss.all, sty.svg___8TGcw)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                </React.Fragment>
              ),
              value: args.slot2
            })}
          </p.Stack>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h1"],
  img: ["img"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPersonCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPersonCard__VariantsArgs;
    args?: PlasmicPersonCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPersonCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPersonCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPersonCard__ArgProps,
      internalVariantPropNames: PlasmicPersonCard__VariantProps
    });

    return PlasmicPersonCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersonCard";
  } else {
    func.displayName = `PlasmicPersonCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPersonCard = Object.assign(
  // Top-level PlasmicPersonCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicPersonCard
    internalVariantProps: PlasmicPersonCard__VariantProps,
    internalArgProps: PlasmicPersonCard__ArgProps
  }
);

export default PlasmicPersonCard;
/* prettier-ignore-end */
