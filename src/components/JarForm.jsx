import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCrossCircled } from "react-icons/rx";
import { updateJar } from "../actions/JarsActions.js";
import {
  setJarSelected,
  clearJarSelected,
  clearFormPurpose,
  settingFormPurpose,
} from "../actions/currentSelectionActions.js";

const JarForm = () => {
  const [jarData, setJarData] = useState({
    percentage: 0,
    name: "",
  });

  const [validationMessage, setValidationMessage] = useState("");
  const dispatch = useDispatch();

  const jars = useSelector((state) => (state.jars ? state.jars : null));

  const user = useSelector((state) => (state.currentSelection.user ? state.currentSelection.user : null));
  const jarSelected = useSelector((state) =>
    state.currentSelection.jar ? state.currentSelection.jar : null
  );

  useEffect(() => {
    if (jarSelected !== null) {
      setJarData({
        percentage: jarSelected.percentage,

        name: jarSelected.name,
    //    creator:jarSelected.creator?jarSelected.creator:null,
      });
    } 
  }, [jarSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      jars.find((jar) => jar.name == jarData.name) != null &&
      jarSelected == null
    ) {
      setValidationMessage(
        "There already is a Jar  with that name, please choose another one"
      );
    } else {
      setValidationMessage("");

      if (jarSelected) {
        dispatch(updateJar({ id: jarSelected.id, ...jarData }));
        dispatch(clearJarSelected());
        dispatch(clearFormPurpose());
      } else {
        dispatch(setJarSelected(jarData));
        dispatch(settingFormPurpose("Distribute Percentage"));
      }
    }
  };
  const handleCancel = () => {
    dispatch(clearFormPurpose());
    dispatch(clearJarSelected());
  };

  return (
    <div className="form">
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="m-2">Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={jarData.name}
            onChange={(e) =>
              setJarData({ ...jarData, name: e.target.value.toUpperCase(), creator: user?._id })
            }
          />
        </div>
        {/* {jarSelected == null && (
          <div className="form-group">
            <label className="m-2">Percentage: </label>
            <input
              type="text"
              className="form-control"
              value={jarData.percentage}
              onChange={(e) =>
                setJarData({ ...jarData, percentage: e.target.value })
              }
            />
          </div>
        )} */}

        <div className="bottom mt-5">
          {/* <button   onClick={() =>handleCancel()}>
                  <RxCrossCircled style={{ color: "darKblue", fontSize: "2.5vh" }} />
                </button> */}
          {/* <input className="submitButton cancel" readOnly value="X" onClick={()=>{handleCancel() }}/> */}
          <div
            className="close-alert div_img"
            style={{
              backgroundImage: `url("/imgs/delete.png")`,
            }}
            onClick={() => {
              handleCancel();
            }}
          />
          <input
            type="submit"
            value={jarSelected == null ? "Add Category" : "Edit"}
            className="submitButton"
          />
        </div>
      </form>
    </div>
  );
};
export default JarForm;
