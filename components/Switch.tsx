import * as React from "react";
import {
  PlasmicSwitch,
  DefaultSwitchProps,
} from "./plasmic/easytime/PlasmicSwitch";
import { SwitchRef } from "@plasmicapp/react-web";

interface SwitchProps extends DefaultSwitchProps {}

function Switch_(props: SwitchProps, ref: SwitchRef) {
  const { plasmicProps, state } = PlasmicSwitch.useBehavior<SwitchProps>(
    props,
    ref
  );
  return <PlasmicSwitch {...plasmicProps} />;
}

const Switch = React.forwardRef(Switch_);

export default Object.assign(Switch, {
  __plumeType: "switch",
});
