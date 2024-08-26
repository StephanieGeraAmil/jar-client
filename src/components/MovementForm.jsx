import React, { useState, useEffect } from "react";
import * as movementActions from "../actions/MovementsActions.js";
import * as jarActions from "../actions/JarsActions.js";
import * as selectionActions from "../actions/currentSelectionActions.js";
import { useDispatch, useSelector } from "react-redux";
import { RxCrossCircled } from "react-icons/rx";

const MovementForm = () => {
  const dispatch = useDispatch();

  const jars = useSelector((state) => (state.jars ? state.jars : null));
  const user = useSelector((state) => (state.currentSelection.user ? state.currentSelection.user : null));
  const selectorMovementSelected = (state) =>
    state.currentSelection.movement ? state.currentSelection.movement : null;
  const movementSelected = useSelector(selectorMovementSelected);

  const selectorFormPurpose = (state) =>
    state.currentSelection.formPurpose
      ? state.currentSelection.formPurpose
      : null;
  const actionBeingPerformed = useSelector(selectorFormPurpose);

  const [movementData, setMovementData] = useState({
    amount: "",
    concept: "",
    jar: [],
    id: "",
  });
  const [validationMessage, setValidationMessage] = useState("");
  const [isNegative, setIsNegative] = useState(actionBeingPerformed === "Add Expense");


  useEffect(() => {
    if (movementSelected != null) {
      setMovementData({
        concept: movementSelected.concept,
        amount: movementSelected.amount,
        jar: movementSelected.jar,
      });
    } else {
      setMovementData({
        ...movementData,
        id: "",
        concept: "",
        amount: "",
        jar: [],
      });
      if (actionBeingPerformed == "Add Income") {
        setMovementData({ ...movementData, jar: jars });
      }
    }
  }, [movementSelected]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //  if(actionBeingPerformed=="Add Expense" && movementData.amount>0){
  //   //     setValidationMessage("Expenses should be < 0");
  //   //  }else
  //   if (
  //     actionBeingPerformed == "Add Income" &&
  //     movementData.jar.length != jars.length
  //   ) {
  //     setValidationMessage("Incomes should be applied to all jars");
  //   } else if (
  //     actionBeingPerformed == "Edit Movement" &&
  //     movementData.amount > 0 &&
  //     movementData.jar.length != jars.length
  //   ) {
  //     setValidationMessage("Incomes should be applied to all jars");
  //   } else {
  //     if (movementSelected) {
  //       dispatch(
  //         movementActions.updateMovement({
  //           id: movementSelected.id,
  //           ...movementData,
  //         })
  //       );
  //       dispatch(selectionActions.clearMovementSelected());
  //       dispatch(selectionActions.clearFormPurpose());
  //     } else {
  //       if (actionBeingPerformed == "Add Expense")
  //         setMovementData({
  //           ...movementData,
  //           amount: -Math.abs(movementData.amount),
  //         });
  //       dispatch(movementActions.createMovement(movementData));
  //       setMovementData({ ...movementData, concept: "", amount: "", jar: [] });
  //       dispatch(selectionActions.clearFormPurpose());
  //     }
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      actionBeingPerformed === "Add Income" &&
      movementData.jar.length !== jars.length
    ) {
      setValidationMessage("Incomes should be applied to all jars");
    } else if (
      actionBeingPerformed === "Edit Movement" &&
      !isNegative &&
      movementData.jar.length !== jars.length
    ) {
      setValidationMessage("Incomes should be applied to all jars");
    } else {
      let mvData = { ...movementData };
  
      // Adjust the amount if it's an expense
      if (actionBeingPerformed === "Add Expense") {
        mvData.amount = -Math.abs(movementData.amount);
      }
  
      if (movementSelected) {
        dispatch(
          movementActions.updateMovement({
            id: movementSelected.id,
            ...mvData,
          })
        );
        dispatch(selectionActions.clearMovementSelected());
      } else {
        dispatch(movementActions.createMovement(mvData));
      }
  
      setMovementData({ ...movementData, concept: "", amount: "", jar: [] });
      dispatch(selectionActions.clearFormPurpose());
    }
  };
  
  const handleCheck = (e) => {
    let updatedList = [...movementData.jar];

    if (e.target.checked) {
      updatedList = [
        ...movementData.jar,
        jars.find((item) => item.id == e.target.value),
      ];
      setMovementData({ ...movementData, jar: updatedList });
    } else {
      setMovementData({
        ...movementData,
        jar: updatedList.filter((item) => item.id != e.target.value),
      });
    }
  };
  // const signCheck = (e) => {
  //   // let value = e.target.value;
  //   // const amountRegex = /^\d*\.?\d{0,2}$/;

  //   // if (amountRegex.test(value) || value === "") {
  //   //   setMovementData({ ...movementData, amount: value });
  //   // }
  //   let value = e.target.value;


  //   value = value.replace(/[^0-9.]/g, "");

  //   const parts = value.split(".");
  //   if (parts.length > 2) {
  //     value = parts[0] + "." + parts.slice(1).join(""); 
  //   }


  //   if (parts[1] && parts[1].length > 2) {
  //     value = parts[0] + "." + parts[1].substring(0, 2);
  //   }

  //   setMovementData({ ...movementData, amount: value });
  // };
  const handleAmountChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9.]/g, "");

    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    if (parts[1] && parts[1].length > 2) {
      value = parts[0] + "." + parts[1].substring(0, 2);
    }

    setMovementData({ ...movementData, amount: value });
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
          <label className="m-2">Concept: </label>
          <input
            type="text"
            required
            className="form-control"
            value={movementData.concept}
            onChange={(e) =>
              setMovementData({
                ...movementData,
                concept: e.target.value.toUpperCase(),
                creator: user?._id
              })
            }
          />
        </div>
        {/* <div className="form-group">
          <label className="m-2">Amount: </label>
          <input
             type="text"
             className="form-control"
             value={
               actionBeingPerformed === "Add Expense"
                 ? `-${Math.abs(movementData.amount || "")}`
                 : movementData.amount || ""
             }
             onChange={signCheck}
          />
        </div> */}
        <div className="form-group">
          <label className="m-2">Amount: </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={movementData.amount}
            onChange={(e) => handleAmountChange(e)}
          />
        </div>
        <div className="form-group">
          <label className="m-2">Jar: </label>

          <div className="checkbox_list">
            {jars.map((item) => (
              <div key={item.id} className="checkbox_item">
                <input
                  value={item.id}
                  type="checkbox"
                  onChange={(e) => handleCheck(e)}
                  checked={
                    movementData.jar
                      .map((jarInMovementData) => jarInMovementData.id)
                      .indexOf(item.id) != -1
                      ? true
                      : false
                  }
                />
                <span>{item.name} </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom mt-5">
          {/* <input className="submitButton cancel" readOnly value="x" onClick={()=>{ dispatch(selectionActions.clearFormPurpose());}}/> */}
          {/* <button   onClick={() =>dispatch(selectionActions.clearFormPurpose())}>
                  <RxCrossCircled style={{ color: "darKblue", fontSize: "2.5vh" }} />
                
                </button> */}
          <div
            className="close-alert div_img"
            style={{
              backgroundImage: `url("/imgs/delete.png")`,
            }}
            onClick={() => {
              dispatch(selectionActions.clearFormPurpose());
            }}
          />
          <input
            type="submit"
            value={actionBeingPerformed ? actionBeingPerformed : "Button"}
            className="submitButton"
          />
        </div>
      </form>
    </div>
  );
};
export default MovementForm;
