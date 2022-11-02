import React, { useState, useEffect } from "react";
import classes from "./signup.module.css";
import upper_triangle from "../../public/assets/login_screen_assets/upper_triangle.png";
import lower_triangle from "../../public/assets/login_screen_assets/lower_triangle.png";
import logo from "../../public/assets/navbar_assets/logo.png";
import google_login_icon from "../../public/assets/login_screen_assets/google_login_icon.png";
import Link from "next/link";

function SignUp() {
  const [activeStep, setActiveStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);

  const handleNextStep = async () => {
    if (activeStep === 3) {
      if (!otpSent) {
        handleSendOpt();
      } else {
        setActiveStep(1);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSendOpt = async () => {
    setOtpSent(true);
  };

  console.log(activeStep);

  return (
    <div className={classes.login_screen_section}>
      <div className={classes.carousel_section}>
        <img src={upper_triangle.src} className={classes.upper_triangle} />
        <img src={lower_triangle.src} className={classes.lower_triangle} />
      </div>
      <div className={classes.content_section}>
        <Link href={"/"}>
          <img src={logo.src} className={classes.logo} />
        </Link>

        <div className={classes.content_container}>
          <p className={classes.bread_crumbs}>
            Welcome {">"} <Link href={"/login"}> Sign In </Link>
            {">"}
            <span> Sign Up</span>
          </p>
          <h2 className={classes.heading}>
            <span>Create</span> An Account
          </h2>

          <div className={classes.stepper_container}>
            <div
              style={{ marginLeft: "0px" }}
              className={
                activeStep > 1
                  ? classes.step_done
                  : activeStep === 1 && classes.step_active
              }
            >
              <p>1</p>
            </div>
            <div className={classes.dashed_line} />
            <div
              className={
                activeStep > 2
                  ? classes.step_done
                  : activeStep === 2
                  ? classes.step_active
                  : activeStep < 2 && classes.step_inactive
              }
            >
              <p>2</p>
            </div>
            <div className={classes.dashed_line} />

            <div
              className={
                activeStep > 3
                  ? classes.step_done
                  : activeStep === 3
                  ? classes.step_active
                  : activeStep < 3 && classes.step_inactive
              }
            >
              <p>3</p>
            </div>
          </div>

          {activeStep === 1 ? (
            <>
              <div className={classes.input_field_contaier}>
                <label>First Name</label>
                <input
                  placeholder="Enter your First Name"
                  type="email"
                  className={classes.input_field}
                />
              </div>
              <div className={classes.input_field_contaier}>
                <label>Last Name</label>
                <input
                  placeholder="Enter your Last Name"
                  type="email"
                  className={classes.input_field}
                />
              </div>

              <div onClick={handleNextStep} className="orange_btn">
                <p>PROCEED</p>
              </div>
            </>
          ) : activeStep === 2 ? (
            <>
              <div className={classes.input_field_contaier}>
                <label>Email Address</label>
                <input
                  placeholder="Enter your Email Address"
                  type="email"
                  className={classes.input_field}
                />
              </div>

              <div onClick={handleNextStep} className="orange_btn">
                <p>PROCEED</p>
              </div>
            </>
          ) : (
            activeStep === 3 && (
              <>
                {!otpSent ? (
                  <>
                    <div className={classes.input_field_contaier}>
                      <label>Phone Number</label>
                      <input
                        placeholder="Enter your Phone Number"
                        type="email"
                        className={classes.input_field}
                      />
                    </div>

                    <div onClick={handleNextStep} className="orange_btn">
                      <p>PROCEED</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={classes.input_field_contaier}>
                      <h2>03310 456123</h2>
                      <label>
                        Enter the 5-digit ITP code that has been sent from SMS
                        to complete your account registration.
                      </label>
                      <input
                        placeholder="Enter your Phone Number"
                        type="email"
                        className={classes.input_field}
                      />
                    </div>

                    <div onClick={handleNextStep} className="orange_btn">
                      <p>SUBMIT OTP</p>
                    </div>
                  </>
                )}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
