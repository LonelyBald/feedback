import InputMask from "react-input-mask";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback } from "../redux";
export const Feedback = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const subscriber = useSelector((state) => state.feedback.feedbackData);
  const dispatch = useDispatch();

  const onChangeName = (event) => {
    setInputName(event.target.value);
  };
  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onChangeMessage = (event) => {
    setInputMessage(event.target.value);
  };
  const sendFeedback = () => {
    if (inputName && phoneNumber) {
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

  return (
    <div className="fb-container">
      <span>
        Name <span className="required-filed">*</span>
      </span>
      <input
        className="input-name"
        type="text"
        value={inputName}
        onChange={onChangeName}
        placeholder="Enter your name..."
      />
      <span>
        Phone number <span className="required-filed">*</span>
      </span>
      <InputMask
        className="input-phone"
        mask="+7 (999) 999-99-99"
        placeholder="+7 (999) 999-99-99"
        value={phoneNumber}
        onChange={onChangePhoneNumber}
      ></InputMask>
      <span>
        Message <span className="required-filed">*</span>
      </span>
      <textarea
        className="text-message"
        name="comments"
        value={inputMessage}
        onChange={onChangeMessage}
        placeholder="Enter message..."
      />
      <button className="send-button" onClick={sendFeedback}>
        SEND FEEDBACK
      </button>
      {subscriber
        ? subscriber.map((sub, index) => (
            <div key={index}>
              <span>{sub.name}</span>
              <span>{sub.phone}</span>
              <span>{sub.message}</span>
            </div>
          ))
        : null}
    </div>
  );
};
