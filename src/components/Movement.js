import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovement } from "../actions/MovementsActions.js";
import {
  setMovementSelected,
  settingFormPurpose,
} from "../actions/currentSelectionActions.js";

const Movement = ({ movement }) => {
  const [style, setStyle] = useState({ display: "none" });
  const dispatch = useDispatch();
  const sign = movement.amount > 0 ? "+" : "-";

  const edit = () => {
    dispatch(setMovementSelected(movement));
    dispatch(settingFormPurpose("Edit Movement"));
  };
  const handlingDelete = () => {
    dispatch(deleteMovement(movement.id));
  };

  return (
    <div
      className="movement"
      onMouseEnter={(e) => setStyle({ display: "flex" })}
      onMouseLeave={(e) => setStyle({ display: "none" })}
    >
      <h4 className="movement_column_concept ">{movement.concept}</h4>
      <h4 className="movement_column ">
        {sign}${Math.abs(movement.amount)}
      </h4>

      <h4 className="movement_column_jars">
        {movement.jar
          .reduce((acc, curr) => curr.name + ", " + acc, "")
          .slice(0, -2)}
      </h4>

      <div className="movement_column movement_actions_container" style={style}>
        <div
          className="movement_actions div_img"
          style={{
            backgroundImage: `url("/imgs/edit.png")`,
          }}
          onClick={() => {
            edit();
          }}
        ></div>
        <div
          className="movement_actions div_img"
          style={{
            backgroundImage: `url("/imgs/delete.png")`,
          }}
          onClick={() => {
            handlingDelete();
          }}
        ></div>
      </div>
    </div>
  );
};
export default Movement;
