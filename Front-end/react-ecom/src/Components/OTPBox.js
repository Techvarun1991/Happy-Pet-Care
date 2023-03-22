//import { CardActions, CardContent } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";import { toast } from "react-toastify";
;

{
  /* <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
>
    •
</Box> */
}

export const OTPBox = () => {
  let navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  let navigatetoLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="container-fluid " style={{ height: "80vh" }}>
        <div className="row justify-content-center align-content-center hei">
          <div className="col-8 text-center mt-5">
            <Card className="mt-3" sx={{ minWidth: 275 }}>
              <h1 className="mt-3">Verify its you</h1>
              <p>
                To make sure your account is Safe PGFinder want's <br />
                to make sure its you
              </p>
              <div>
                {" "}
                {otp.map((data, index) => {
                  return (
                    <input
                      className="otp-field col-1 "
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      style={{ marginRight: "2vh" }}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
                <br></br>
                <p className="mt-5">OTP Entered - {otp.join("")}</p>
                <p>
                  <button
                    className="btn btn-secondary mr-2"
                    style={{ marginRight: "5vh" }}
                    onClick={(e) => setOtp([...otp.map((v) => "")])}
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={async (e) => {
                      if (otp.join("") > 10000) {
                        let url = "http://localhost:8080/verify-OTP";

                        let body = {
                          otp: otp.join(""),
                          email: JSON.parse(sessionStorage.getItem("USER"))
                            .email,
                        };
                        console.log(otp);
                        let status = await axios.post(url, body);
                        console.log(status);
                        if (status.data) {
                          let resp = await axios.post(
                            "http://localhost:8080/saveUser",
                            JSON.parse(sessionStorage.getItem("USER"))
                          );
                          console.log("Data response" + resp);
                          if (resp) {
                            toast.success(
                              "Succefuly Registred :)"
                            );

                            navigatetoLogin();
                          } else {
                            toast.error(
                              "Enter a valid OTP!! You will get it on your email."
                            );
                          }
                        } else {
                          console.log(
                            "Enter a valid OTP!! You will get it on your email."
                          );
                          toast.error(
                            "Enter a valid OTP!! You will get it on your email."
                          );
                        }
                      }
                    }}
                  >
                    Verify OTP
                  </button>
                </p>
              </div>

              <Button
                onClick={() => {
                  navigate("/usersignup");
                }}
                size="small"
              >
                Go back
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
