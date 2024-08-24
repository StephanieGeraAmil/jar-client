import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJar, updateJar,updateArrayOfJars } from "../actions/JarsActions.js";
import { clearFormPurpose,clearJarSelected } from "../actions/currentSelectionActions.js";

export const DistributionForm = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const jars = useSelector((state) => (state.jars ? state.jars : null));
  const jarSelected = useSelector((state) =>
    state.currentSelection.jar ? state.currentSelection.jar : null
  );
  const [changedJars, setChangedJars] = useState(jars);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let reducer = (acc, item) => acc + parseFloat(item.percentage);

    if (changedJars.reduce(reducer, 0) !== 100) {
      setValidationMessage(" All the Percentages shoud Add up to 100%");
    } else {
      setValidationMessage("");
      dispatch(updateArrayOfJars(changedJars));
        dispatch(clearJarSelected());
      dispatch(clearFormPurpose());
    }
  };

  const handleCancel = () => {
    dispatch(clearFormPurpose());
  };

  const handleChange = (e, jar) => {
    setChangedJars(
      changedJars.map((j) =>
        jar.name == j.name ? { ...j, percentage: e.target.value } : j
      )
     
    );
  };
  useEffect(() => {
    if (jarSelected != null) {
      setChangedJars([...jars, jarSelected]);
    }
  }, []);
  return (
    <div className="form">
      {validationMessage != "" && (
        <div className="alert-pop-up alert-pop-up-big">
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
         <h3 className="m-2">Jar percentages </h3>
        {changedJars.map((jar) => (
          <div className="form-group" key={jar.name}>
            <label className="m-2">{jar.name} </label>
            <input
              type="text"
              required
              className="form-control"
              value={jar.percentage}
              onChange={(e) => handleChange(e, jar)}
            />
          </div>
        ))}

        <div className="bottom mt-5">
          <div
            className="close-alert div_img"
            style={{
              backgroundImage: `url("/imgs/delete.png")`,
            }}
            onClick={() => {
              handleCancel();
            }}
          />
          <input type="submit" value="Save" className="submitButton" />
        </div>
      </form>
    </div>
  );
};
