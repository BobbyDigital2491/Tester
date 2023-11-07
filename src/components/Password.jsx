import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Button } from "@100mslive/react-ui";

const JoinForm = () => {
  const navigate = useNavigate();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = e => {
    setEnteredPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleJoinClick = () => {
    //API calls here
    if (enteredPassword === "Multi Millions") {
      navigate("/preview/638b82b2ea4ced3e8758a760/host");
    } else if (enteredPassword === "Focus and Dedication") {
      navigate("/preview/63e6cb21da7e7ca812840c51/host");
    } else if (enteredPassword === "dapp365347") {
      navigate("/preview/638b82b2ea4ced3e8758a760/guest");
    } else if (enteredPassword === "Less is more") {
      navigate("/preview/63e6cb21da7e7ca812840c51/guest");
      } else if (enteredPassword === "The Most High") {
      navigate("/preview/638cf929ea4ced3e8758b790/host");
        } else if (enteredPassword === "Big Family") {
      navigate("/preview/638cf929ea4ced3e8758b790/guest");
    } else {
      alert("Invalid password");
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleJoinClick();
    }
  };

  return (
    <div>
      <label>
        Enter Password:&nbsp;
        <input
          type={showPassword ? "text" : "password"}
          value={enteredPassword}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
          className="password-input"
        />
      </label>
      &nbsp;
      <button onClick={handleTogglePassword} className="password-toggle-button">
        {showPassword ? <BiHide /> : <BiShow />}
      </button>
      <br />
      <br />
      <center>
        <Button onClick={handleJoinClick}>Join</Button>
      </center>
    </div>
  );
};

export default JoinForm;

