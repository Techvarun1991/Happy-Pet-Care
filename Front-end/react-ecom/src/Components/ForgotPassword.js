import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const ForgotPassword = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [cpass, setCpass] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
    } else if (values.password !== cpass) {
      toast.error('Passwords do not match')
    }else{
        console.log(values);
        sessionStorage.setItem("FORGOT", JSON.stringify(values));
        let res;
        if (
          (res = (await axios.get("http://localhost:8080/home/sendOTP/" + values.email))
            .data)
        ) {
          console.log(res);
          navigate("/ForgotOTP");
        } else toast.error("Enter Valid Details", "Error");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleCpassChange = (event) => {
    console.log("hello" + event.target.value);
    setCpass(event.target.value);
  };
  return (
    <>
      <>
        <form onSubmit={handleSubmit}>
          <div
            className="card col-5 mx-auto mt-4 mb-4"

          >
            <div className="card-header text-center h5 text-white bg-primary">
              Password Reset
            </div>
            <div className="card-body px-5">
              <p className="card-text py-2">
                Enter your email address and we'll send you an email with
                instructions to reset your password.
              </p>
              <div className="form-outline">
                <label className="form-label fs-6 " htmlFor="typeEmail">
                  Enter your Email
                </label>
                <input
                  type="email"
                  id="typeEmail"
                  name="email"
                  className="form-control my-3"
                  onChange={onChange}
                />

                <label className="form-label fs-6 " htmlFor="typeEmail">
                  Enter New Password
                </label>
                <input
                  type="password"
                  id="typePass"
                  name="password"
                  className="form-control my-3"
                  onChange={onChange}
                />

                <label className="form-label fs-6 " htmlFor="typeEmail">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="typePassword"
                  onChange={handleCpassChange}
                  value={cpass}
                  className="form-control my-3"
                />
              </div>
              <Button type="submit" className="btn btn-primary w-100">
                Reset password
              </Button>
              <div className="d-flex justify-content-between mt-4">
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
              </div>
            </div>
          </div>
        </form>
      </>
    </>
  );
};
