import AccountMenu from "./account_menu";
import Search from "./search";
import { useTypewriter } from "react-simple-typewriter";
import AppSearch from "./app_search_bar.jsx";
import SearchIcon from "@mui/icons-material/Search";
import PatientImg from "../src/assets/userpage_bg.png";
import UserMenu from "./user_menu.jsx";
import { typographyClasses } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function userpage(props) {
  const [text] = useTypewriter({
    words: ["Hi George"],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 80,
  });
  const navgiate = useNavigate();

  // const fetchPatient = (name, phone_number) => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/", {
  //       params: {
  //         name: name,
  //         phone: phone_number,
  //       },
  //     })
  //     .then((res) => {
  //       console.log("Reponse : ", response.status);
  //     })
  //     .catch((error) => {
  //       console.log("There is an error!", error);
  //     });
  // };

  const fetchPatient = (event) => {
    event.preventDefault();
    console.log(`Name : ${props.name}, Phone : ${props.phone}`);
    axios
      .get("http://127.0.0.1:5000/searchpatient", {
        params: {
          name: props.name,
          phone: props.phone,
        },
      })
      .then((response) => {
        console.log(response.data);
        navgiate("/services");
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  return (
    <div className="user-div">
      <div className="user-menu-outer">
        <div className="user-menu-bar">
          <div>
            <UserMenu />
          </div>
          <div style={{ margin: "0.5rem" }}>
            <AccountMenu />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="components-outer-div">
            <div className="type-text">{text}</div>
            <div>
              <form onSubmit={fetchPatient} className="fetch-user-div">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={props.name}
                    onChange={(e) => props.handleChangeName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    maxLength={10}
                    value={props.phone}
                    onChange={(e) => props.handleChangePhone(e.target.value)}
                  />
                </div>
                <div>
                  <button id="userpage-search" type="submit">
                    <SearchIcon style={{ fontSize: "1rem" }} />
                  </button>
                </div>
              </form>
              <div style={{ marginTop: "1rem" }}>
                <a
                  style={{
                    fontFamily: "Open Sans",
                    fontSize: "0.9rem",
                    color: "black",
                  }}
                  href="/demo"
                >
                  New Patient ?
                </a>
              </div>
            </div>
            {/* <img src="src/assets/George.jpeg" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
