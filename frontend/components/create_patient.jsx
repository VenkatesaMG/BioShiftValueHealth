import * as React from "react";
import Button from "@mui/material/Button";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
export default function createPatient() {
  return (
    <div className="create-patient-outer">
      <div className="create-patient-div">
        <div style={{ fontSize: "0.8rem" }}>Patient Details</div>
        <form action="">
          <div className="patient-input-div patient-name-div">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              required="true"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              required="true"
            />
          </div>
          <div className="patient-input-div patient-other-div">
            <div className="patient-age-div">
              <label htmlFor="birthdate">Date of Birth</label>
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                required="true"
              />
            </div>
            <div className="patient-sex-div">
              <label htmlFor="sex">Sex</label>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="sex-categories">
                  <input
                    type="radio"
                    name="sex"
                    id="male-sex"
                    value="male"
                    required="true"
                  />
                  <label htmlFor="male-sex">Male</label>
                </div>
                <div className="sex-categories">
                  <input
                    type="radio"
                    name="sex"
                    id="female-sex"
                    value="female"
                    required="true"
                  />
                  <label htmlFor="female-sex">Female</label>
                </div>
                <div className="sex-categories">
                  <input
                    type="radio"
                    name="sex"
                    id="others"
                    value="others"
                    required="true"
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>
            <div className="patient-input-div patient-contact">
              <label htmlFor="patient-contact">Contact</label>
              <input
                type="phone"
                placeholder="Contact"
                id="patient-contact"
                required="true"
              />
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
