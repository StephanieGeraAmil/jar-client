import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteJar } from "../actions/JarsActions.js";
import {
  setJarSelected,
  settingFormPurpose,
  // settingFormPurposeToTransferMoneyToJar,
  // settingFormPurposeToDistributePercentagesOfJars,
} from "../actions/currentSelectionActions.js";
import { AvaiableOnJar } from "./AvaiableOnJar.js";

export const Jar = ({ jar }) => {
  const dispatch = useDispatch();
  const movements = useSelector((state) => state.movements);
  const transferences = useSelector((state) => state.transactions);
  const [validationMessage, setValidationMessage] = useState("");
  const [hideStyle, setHideStyle] = useState({ display: "none" });
  const handleDeleteJar = () => {
    const movementsWithThisJar = movements.filter((item) =>
      item.jar.find((element) => element.id === jar.id)
    );
    if (movementsWithThisJar.length !== 0) {
      setValidationMessage(
        "You can't delete this Jar because there are movements associated with this Jar"
      );
    } else {
      dispatch(deleteJar(jar.id));
    }
  };
  const edit = () => {
    dispatch(setJarSelected(jar));
    dispatch(settingFormPurpose("Edit Jar"));
  };

  return (
    <>
      {validationMessage != "" && (
        <div className="alert-pop-up">
          <span className="alert">{validationMessage}</span>
          <div
            className="div_img close-alert"
            style={{
              backgroundImage: `url("/imgs/delete.png")`,
            }}
            onClick={() => {
              setValidationMessage("");
            }}
          />
        </div>
      )}

      <div
        className="jar"
        onMouseLeave={(e) => setHideStyle({ display: "none" })}
        onMouseEnter={(e) => setHideStyle({ display: "flex" })}
      >
        <div className="top_of_jar">
          <h4 className="name_jar">{jar.name}</h4>
          <h5 className="percentace_jar">%{jar.percentage}</h5>
        </div>

        <div className="bottom_of_jar">
          <AvaiableOnJar jar={jar} />
          <div className="jar_actions_container" style={hideStyle}>
            <>
              <div
                className="jar_actions div_img"
                style={{
                  backgroundImage: `url("/imgs/edit.png")`,
                }}
                onClick={() => {
                  edit();
                }}
              ></div>

              <div
                className="jar_actions div_img"
                style={{
                  backgroundImage: `url("/imgs/delete.png")`,
                }}
                onClick={() => {
                  handleDeleteJar();
                }}
              ></div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};
