import InputMask from "react-input-mask";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../redux";
export const Feedback = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [phoneNumberDirty, setPhoneNumberDirty] = useState(false);
  const [inputNameDirty, setInputNameDirty] = useState(false);
  const [inputMessageDirty, setInputMessageDirty] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(
    "Phone number can't be empty"
  );
  const [inputNameError, setInputNameError] = useState(
    "Name field  can't be empty"
  );
  const [inputMessageError, setInputMessageError] = useState(
    "Message field  can't be empty"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (inputMessageError || inputNameError || phoneNumberError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [inputMessageError, phoneNumberError, inputNameError]);

  const dispatch = useDispatch();

  const result = /^[a-zA-Z ]+$/;

  const onChangeName = (event) => {
    setInputName(event.target.value);

    if (!result.test(event.target.value)) {
      setInputNameError("Incorrect name");
    } else {
      setInputNameError("");
    }
  };
  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    if (event.target.value) {
      setPhoneNumberError("");
    } else {
      setPhoneNumberError("Phone number can't be empty");
    }
  };

  const onChangeMessage = (event) => {
    setInputMessage(event.target.value);
    const re = /^[a-zA-Z0-9!@\s.'",?$%^&*)(]{6,}$/g;
    if (!re.test(event.target.value)) {
      setInputMessageError("Incorrect message");
    } else {
      setInputMessageError("");
    }
  };
  const sendFeedback = () => {
    if (inputName && phoneNumber && inputMessage) {
      dispatch(
        addFeedback({
          name: inputName,
          id: Date.now().toString(),
          phone: phoneNumber,
          message: inputMessage,
        })
      );
    } else {
      alert("Pls fill data!");
    }
    setInputName("");
    setInputMessage("");
    setPhoneNumber("");
  };

  const blurHandler = (e) => {
    switch (e.target.className) {
      case "input-name":
        setInputNameDirty(true);
        break;
      case "input-phone":
        setPhoneNumberDirty(true);
        break;
      case "text-message":
        setInputMessageDirty(true);
        break;
    }
  };

  return (
    <div className="fb-container">
      <span>
        Name <span className="required-filed">*</span>
      </span>
      {inputNameDirty && inputNameError && (
        <div style={{ color: "red" }}>{inputNameError}</div>
      )}
      <input
        className="input-name"
        type="text"
        value={inputName}
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => onChangeName(e)}
        placeholder="Enter your name..."
      />
      <span>
        Phone number <span className="required-filed">*</span>
      </span>
      {phoneNumberDirty && phoneNumberError && (
        <div style={{ color: "red" }}>{phoneNumberError}</div>
      )}
      <InputMask
        className="input-phone"
        onBlur={(e) => blurHandler(e)}
        mask="+7(999) 999-99-99"
        placeholder="+7(999) 999-99-99"
        value={phoneNumber}
        onChange={(e) => onChangePhoneNumber(e)}
      ></InputMask>
      <span>
        Message <span className="required-filed">*</span>
      </span>
      {inputMessageDirty && inputMessageError && (
        <div style={{ color: "red" }}>{inputMessageError}</div>
      )}
      <textarea
        className="text-message"
        onBlur={(e) => blurHandler(e)}
        name="comments"
        value={inputMessage}
        onChange={(e) => onChangeMessage(e)}
        placeholder="Enter message..."
      />
      <button
        disabled={!formValid}
        className="send-button"
        onClick={sendFeedback}
      >
        SEND FEEDBACK
      </button>
    </div>
  );
};
