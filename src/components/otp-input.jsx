import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./timer";

const OtpInput = ({ length = 4, onOtpSubmit, otpComplete }) => {
  const [Otp, setOtp] = useState(new Array(length).fill(""));
  const [completeOtp, setCompleteOtp] = useState(false);

  const InputRefs = useRef([]);

  useEffect(() => {
    if (InputRefs.current[0]) {
      InputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...Otp];

    // allow only one Input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Submit Trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      console.log("combining...");
      setTimeout(() => {
        onOtpSubmit(combinedOtp);
      }, 2000);
    }

    const nonEmptyCount = newOtp.filter((value) => value !== "").length;
    setCompleteOtp(nonEmptyCount === length);

    // Move to next input if current field is filled

    if (value && index < length - 1 && InputRefs.current[index + 1]) {
      InputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    InputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !Otp[index - 1]) {
      InputRefs.current[Otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !Otp[index] &&
      index > 0 &&
      InputRefs.current[index - 1]
    ) {
      InputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      <div className="mb-3">
        <div className="d-flex align-items-center justify-content-between">
          {Otp.map((value, index) => {
            return (
              <input
                key={index}
                type="text"
                ref={(input) => (InputRefs.current[index] = input)}
                value={value}
                onChange={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="otpInput form-control fs-6 fw-bolder"
                disabled={otpComplete}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-3">
        <button
          className="btn btn-primary w-100 fs-6 fw-semibold"
          disabled={!completeOtp}
          onClick={() => onOtpSubmit(Otp)}
        >
          Submit
        </button>
      </div>
      <div className="mb-3 d-flex flex-column align-items-center justify-content-center ">
        <div className="">
          <h6 className="h6 text-center fw-bold">
            <Timer />
          </h6>
        </div>
        <div className="">
        <p className="p text-center text-muted fw-semibold ">
          Don't receive the code?
        </p>
        </div>
        <div className="">
        <a className="text-danger text-center fw-semibold " href="#">Resend</a>
        </div>
      </div>
    </div>
  );
};

export default OtpInput;
