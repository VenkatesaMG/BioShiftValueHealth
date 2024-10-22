import patientImg from "../src/assets/patient_img1.jpg";
import ToggleText from "./toggle_text";
import Record from "./record";
import AccountMenu from "./account_menu";
import UserMenu from "./user_menu";
import PatientTimeLine from "./timeline";
import OverScreen from "./overscreen";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

export default function client_info(props) {
  const [overscreen, setOverScreen] = useState(false);
  function handleOverScreen() {
    setOverScreen((prevState) => !prevState);
    console.log("In handle over screen");
  }

  return (
    <div className="client-info-outer">
      <div className="user-menu-outer">
        <div className="user-menu-bar">
          <div>
            <UserMenu
              menuIcons={props.icons}
              menuLabels={props.labels}
              listItem={props.listItem}
              handleChangeList={props.handleChangeList}
            />
          </div>
          <div style={{ margin: "0.5rem" }}>
            <AccountMenu />
          </div>
        </div>
      </div>
      {overscreen && <OverScreen handleOverScreen={handleOverScreen} />}
      <div
        className={overscreen ? "dimmed client-info-page" : "client-info-page"}
      >
        <div className="client-left-div">
          <div className="patient-outer-div">
            <div className="patient-img">
              <img src={patientImg} alt="" />
            </div>
            <div className="patient-details">
              <div className="patient-details-div">
                <div className="label-div">Name:</div>
                <div className="detail-fill">Kevin</div>
              </div>
              <div className="patient-details-div">
                <div className="label-div">Gender:</div>
                <div className="detail-fill">Male</div>
              </div>
              <div className="patient-details-div">
                <div className="label-div">Age:</div>
                <div className="detail-fill">30</div>
              </div>
            </div>
          </div>
          {/* <div className="client-allergies">
            <div>
              <div>
                <div>
                  <div style={{ letterSpacing: "2px" }}>Allergies</div>
                </div>
                <br />
                <div
                  style={{
                    fontFamily: "Roboto",
                  }}
                >
                  <div>Pencillin</div>
                  <div>IV Contrast </div>
                </div>
              </div>
              <br />
              <div>
                <div>
                  <div style={{ letterSpacing: "2px" }}>Conditions</div>
                </div>
                <br />
                <div style={{ fontFamily: "Roboto" }}>
                  <div>Diabetes</div>
                  <div>Hypertension</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="client-right-div">
          <div className="client-allergies">
            <div>
              <div>
                <div>
                  <div
                    style={{
                      letterSpacing: "2px",
                      borderBottom: "1px solid black",
                    }}
                  >
                    Allergies
                  </div>
                </div>
                <br />
                <div
                  style={{
                    fontFamily: "Roboto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                  }}
                >
                  <div className="allergies-inner-div">
                    <div>
                      <CircleIcon id="client-allergies-dot" />
                    </div>
                    <div>Pencillin</div>
                  </div>
                  <div className="allergies-inner-div">
                    <div>
                      <CircleIcon id="client-allergies-dot" />
                    </div>
                    <div>IV Contrast</div>
                  </div>
                </div>
              </div>
              <br />
              <div>
                <div>
                  <div
                    style={{
                      letterSpacing: "2px",
                      borderBottom: "1px solid black",
                    }}
                  >
                    Conditions
                  </div>
                </div>
                <br />
                <div
                  style={{
                    fontFamily: "Roboto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                  }}
                >
                  <div className="allergies-inner-div">
                    <div>
                      <CircleIcon id="client-allergies-dot" />
                    </div>
                    <div>Diabetes</div>
                  </div>
                  <div className="allergies-inner-div">
                    <div>
                      <CircleIcon id="client-allergies-dot" />
                    </div>
                    <div>Hypertension</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-right-div">
            <div>
              <div>
                <ToggleText handleToggle={props.handleToggleState} />
              </div>
            </div>
            <div style={{ width: "100%", height: "70vh", overflowY: "scroll" }}>
              {props.toggleState == 1 && (
                <Record handleOverScreen={handleOverScreen} />
              )}
              {props.toggleState == 0 && <PatientTimeLine />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
