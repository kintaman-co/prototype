import * as React from "react";
import {
  PlasmicSelect__Overlay,
  DefaultSelect__OverlayProps,
} from "./plasmic/easytime/PlasmicSelect__Overlay";
import { TriggeredOverlayRef } from "@plasmicapp/react-web";

interface Select__OverlayProps extends DefaultSelect__OverlayProps {}

function Select__Overlay_(
  props: Select__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicSelect__Overlay.useBehavior(props, ref);
  return <PlasmicSelect__Overlay {...plasmicProps} />;
}

const Select__Overlay = React.forwardRef(Select__Overlay_);

export default Object.assign(Select__Overlay, {
  __plumeType: "triggered-overlay",
});
