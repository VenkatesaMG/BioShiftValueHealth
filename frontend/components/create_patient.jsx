import * as React from "react";
import Button from "@mui/material/Button";
export default function createPatient() {
  return (
    <div className="create-patient-outer">
      <div className="create-patient-div">
        <div style={{ fontSize: "0.8rem" }}>Patient Details</div>
        <form action="">
          <div className="patient-input-div patient-name-div">
            <input type="text" placeholder="First Name" name="firstname" />
            <input type="text" placeholder="Last Name" name="lastname" />
          </div>
          <div className="patient-input-div patient-other-div">
            <div className="patient-age-div">
              <label htmlFor="birthdate">Date of Birth</label>
              <input type="date" name="birthdate" id="birthdate" />
            </div>
            <div className="patient-sex-div">
              <label htmlFor="sex">Sex</label>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="sex-categories">
                  <input type="radio" name="sex" id="male-sex" value="male" />
                  <label htmlFor="male-sex">Male</label>
                </div>
                <div className="sex-categories">
                  <input
                    type="radio"
                    name="sex"
                    id="female-sex"
                    value="female"
                  />
                  <label htmlFor="female-sex">Female</label>
                </div>
                <div className="sex-categories">
                  <input type="radio" name="sex" id="others" value="others" />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>
            <div className="patient-input-div patient-contact">
              <label htmlFor="patient-contact">Contact</label>
              <input type="phone" placeholder="Contact" id="patient-contact" />
            </div>
          </div>
          <div style={{ margin: "1rem 0rem" }}>
            <button id="patient-create-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
