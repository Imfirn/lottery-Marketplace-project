import React from "react";
import { Link } from "react-router-dom";
import { useLocation,useNavigate } from "react-router-dom";
import { global_url_token } from "../page/global_url_token";
import axios from "axios";

const Navbar = ({ toggle }) => {
  const location = useLocation();

  const navigate = useNavigate();

  function postLogout() {
    axios
      .post(global_url_token.url + "/logout", {
        token: localStorage.getItem("token"),
      })
      .then(function (response) {
        console.log(response);
        // console.log(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function logout() {
    postLogout();
    localStorage.clear();
    navigate("/login", { replace: true });
  }

  return (
    // white navbar - home ,buy , store
    <div className= {!localStorage.getItem("token") ?
    "hidden" : ""
  }>
    <nav
      class={`flex justify-between items-center h-16 
    ${
      location.pathname === "/home"
        ? "bg-white shadow-sm "
        : location.pathname === "/singlelotteryinfo"
        ? "bg-white shadow-sm "
        : location.pathname === "/packlotteryinfo"
        ? "bg-white shadow-sm "
        : location.pathname === "/store"
        ? "bg-white shadow-sm "
        : "bg-[#FFE5A3] "
    }  text-black relative font-prompt `}
      role="navigation"
      style={{ position: "fixed", width: "100%" }}
    >
      <Link to="/home" class="pl-8 text-[#E54E3D]">
        Lottery
      </Link>
      <div class="px-4 cusor-ponter md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div class="pr-8  md:block hidden ">
        <Link
          className={localStorage.getItem("role") === "customer" ? "p-4 hover:text-[#E54E3D] " : "hidden"}
          to="/home"
        >
          หน้าหลัก
        </Link>
        <Link
          className={localStorage.getItem("role") === "customer" ? "p-4 hover:text-[#E54E3D] " : "hidden"}
          to="/cart"
        >
          ตะกร้าสินค้า
        </Link>
        {/* <Link className="p-4 hover:text-[#E54E3D]" to="/orders">
          สินค้าที่จะได้รับ
        </Link> */}
        <Link
          className={localStorage.getItem("role") === "customer" ? "p-4 hover:text-[#E54E3D] " : "hidden"}
          to="/notification"
        >
          การแจ้งเตือน
        </Link>
        <Link
          className={localStorage.getItem("role") === "customer" ? "p-4 hover:text-[#E54E3D] " : "hidden"}
          to="/account"
        >
          บัญชีผู้ใช้
        </Link>
        <span class="border-l-2 border-red-200" />
        <button
          type="submit"
          onClick={() => logout()}
          class="p-10 py-1 px-1 ml-4 border-2 border-[#E54E3D] rounded text-[#E54E3D] hover:bg-[#E54E3D] hover:text-white transition duration-300"
        >
          ออกจากระบบ
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
