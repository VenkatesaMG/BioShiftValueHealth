import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigationType,
} from "react-router-dom";
import MainPage from "../components/main_page.jsx";
import SignUp from "../components/signup.jsx";
import Login from "../components/login.jsx";
import User from "../components/userpage.jsx";
import Client from "../components/client_info.jsx";
import Document from "../components/document_page.jsx";
import { useNavigate } from "react-router-dom";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HomeIcon from "@mui/icons-material/Home";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import CreatePatient from "../components/create_patient.jsx";
import OverScreen from "../components/overscreen.jsx";
const icons = [
  <HomeIcon />,
  <DescriptionOutlinedIcon />,
  <FolderOpenOutlinedIcon />,
];
const labels = ["Overview", "Notes", "Documents"];

function App() {
  const [toggle, setToggle] = useState(0);
  const [listItem, setListItem] = useState(0);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);

  const navigate = useNavigate();

  function handleChangeName(value) {
    setName((prevState) => value);
  }

  function handleChangePhone(value) {
    setPhone((prevState) => value);
  }

  function handleChangeList(index) {
    setListItem(index);
    console.log(index);
    if (index === 0) {
      navigate("/services");
    } else if (index === 2) {
      navigate("/documents");
    }
  }
  function handleToggle() {
    setToggle((prevState) => !prevState);
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/services"
          element={
            <Client
              handleToggleState={handleToggle}
              toggleState={toggle}
              listItem={listItem}
              handleChangeList={handleChangeList}
              icons={icons}
              labels={labels}
            />
          }
        ></Route>
        <Route
          path="/userpage"
          element={
            <User
              name={name}
              phone={phone}
              handleChangeName={handleChangeName}
              handleChangePhone={handleChangePhone}
            />
          }
        ></Route>
        <Route
          path="/documents"
          element={
            <Document
              listItem={listItem}
              handleChangeList={handleChangeList}
              icons={icons}
              labels={labels}
            />
          }
        ></Route>
        <Route path="/demo" element={<OverScreen />}></Route>
      </Routes>
    </div>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
