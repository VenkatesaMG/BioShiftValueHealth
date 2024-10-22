import { useState } from "react";
import axios from "axios";
import signUpImg from "../src/assets/signUp.png";

function CreatePatientForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [contact, setContact] = useState("");

  const handleCreatePatient = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:5000/create", {
        firstname: firstname,
        lastname: lastname,
        birthdate: birthdate,
        sex: sex,
        contact: contact,
      })
      .then((res) => {
        console.log("Patient created successfully:", res.data);
      })
      .catch((error) => {
        console.error("Error creating patient:", error);
      });
  };

  return (
    <div className="create-patient-outer">
      <div className="signup-img">
        <img src={signUpImg} alt="" />
      </div>
      <div className="create-patient-div">
        <div style={{ fontSize: "0.8rem" }}>Patient Details</div>
        <form onSubmit={handleCreatePatient}>
          <div className="patient-input-div patient-name-div">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="patient-input-div patient-other-div">
            <div className="patient-age-div">
              <label htmlFor="birthdate">Date of Birth</label>
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
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
                    checked={sex === "male"}
                    onChange={(e) => setSex(e.target.value)}
                    required
                  />
                  <label htmlFor="male-sex">Male</label>
                </div>
                <div className="sex-categories">
                  <input
                    type="radio"
                    name="sex"
                    id="female-sex"
                    value="female"
                    checked={sex === "female"}
                    onChange={(e) => setSex(e.target.value)}
                    required
                  />
                  <label htmlFor="female-sex">Female</label>
                </div>
                <div className="sex-categories">
                  <input
                    type="radio"
                    name="sex"
                    id="others"
                    value="others"
                    checked={sex === "others"}
                    onChange={(e) => setSex(e.target.value)}
                    required
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
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
          </div>
          <div style={{ margin: "1rem 0rem" }}>
            <button type="submit" id="patient-create-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePatientForm;
