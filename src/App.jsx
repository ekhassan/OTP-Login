import "./App.css";
import PhoneOtpForm from "./components/phone-login";

function App() {
  return (
    <div className="container-fluid bg-grad ">
      <div className="d-flex align-items-center justify-content-center vh-100 w-100">
        <div className="card border-0 shadow-lg">
          <div className="card-header bg-transparent">
            <h4 className="h4 text-center fw-bolder  py-2">
              Login with Phone
            </h4>
          </div>
          <div className="card-body p-5">
              <PhoneOtpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
