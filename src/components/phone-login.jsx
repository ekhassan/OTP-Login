import { useState } from "react";
import OtpInput from "./otp-input";
import "bootstrap/dist/css/bootstrap.min.css";

const PhoneOtpForm = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [showOtpInput, setshowOtpInput] = useState(false);
  const [otpComplete, setOtpComplete] = useState(false);

  const handlePhoneNumber = (event) => {
    setphoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Phone number validation

    const regex = /[^0-9]/g;

    if (regex.test(phoneNumber) || phoneNumber.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
    // Show OTP
    setshowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    alert("Login Successful", otp);
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text fs-6 fw-semibold">+92</span>
            <input
              className="form-control fs-6 fw-semibold"
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              maxLength='10'
              placeholder="Enter Phone Number"
              aria-describedby="input-group-left"
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary w-100 fs-6 fw-semibold" type="submit">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h5 className="h5 fw-bolder ">Mobile phone verification</h5>
          <p className="p fw-semibold text-break">Enter the code we just send on your mobile <br /> phone <span className="text-danger">+92{phoneNumber}</span> </p>
          <OtpInput
            length={4}
            onOtpSubmit={onOtpSubmit}
            otpComplete={otpComplete}
          />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
