import { useAuthState } from "react-firebase-hooks/auth";
import { useList } from "react-firebase-hooks/database";
import React from "react";
import {
  PlasmicBizSelect,
  DefaultBizSelectProps,
} from "./plasmic/easytime/PlasmicBizSelect";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import Select from "./Select";
import { getAuth } from "@firebase/auth";
import { getDatabase, ref as dbRef } from "firebase/database";
type Props = {
  /**
   * bizId
   */
  value: string | null;
  /**
   * onChange
   */
  onChange: (value: string | null) => void;
  /**
   * whether showing all or not
   */
  hasAll?: boolean;
};

function BizSelect_(
  { onChange, value, hasAll }: Props,
  ref: HTMLElementRefOf<"div">
) {
  const [user] = useAuthState(getAuth());
  const bizRef = user
    ? dbRef(getDatabase(), `users/${user.uid}/businesses`)
    : null;

  const [snapshots, loading, error] = useList(bizRef);

  const options = snapshots
    ?.filter((a) => !a.val().deleted)
    .map((snapshot) => (
      <Select.Option
        key={snapshot.key}
        value={snapshot.key}
        isDisabled={snapshot.val().deleted}
      >
        {snapshot.val().name}
      </Select.Option>
    ));
  if (hasAll) {
    options?.unshift(<Select.Option value={"all"}>All</Select.Option>);
  }
  return (
    <PlasmicBizSelect
      root={{ ref }}
      loading={loading}
      select={{
        onChange,
        value,
        children: options,
      }}
    />
  );
}

const BizSelect = React.forwardRef(BizSelect_);
export default BizSelect;
