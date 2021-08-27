import * as React from "react";
import {
  PlasmicSelect,
  DefaultSelectProps,
} from "./plasmic/easytime/PlasmicSelect";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./Select__Option";
import OptionGroup from "./Select__OptionGroup";

interface SelectProps extends DefaultSelectProps {}

function Select_(props: SelectProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicSelect.useBehavior(props, ref);
  return <PlasmicSelect {...plasmicProps} />;
}

const Select = React.forwardRef(Select_);

export default Object.assign(Select, {
  Option,
  OptionGroup,
  __plumeType: "select",
});
