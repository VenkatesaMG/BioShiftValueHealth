import AccountMenu from "./account_menu";
import Search from "./search";
import { useTypewriter } from "react-simple-typewriter";
import AppSearch from "./app_search_bar.jsx";
import SearchIcon from "@mui/icons-material/Search";
import UserMenu from "./user_menu.jsx";

export default function userpage() {
  const [text] = useTypewriter({
    words: ["Hi George"],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 80,
  });

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
            <div>
              <form action="" className="fetch-user-div">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="phone" placeholder="Phone" maxLength={10} />
                </div>
                <div>
                  <button id="userpage-search">
                    <SearchIcon style={{ fontSize: "1rem" }} />
                  </button>
                </div>
              </form>
              <div style={{ marginTop: "1rem" }}>
                <a
                  style={{ fontFamily: "Open Sans", fontSize: "0.9rem" }}
                  href="/demo"
                >
                  New Patient
                </a>
              </div>
            </div>
            {/* <div className="type-text">{text}</div> */}
            {/* <img src="src/assets/George.jpeg" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
