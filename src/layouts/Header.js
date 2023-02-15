import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";
import useAuth from "../hooks/useAuth";
import DropdownUser from "./DropdownUser";

import Menu from "./Menu";

export default function Header() {

  const [openRegis, setOpenRegis] = useState(false);
  const { authenticatedUser,open,setOpen } = useAuth();

  return (
    <>
      <nav className="px-2 sm:px-6 pt-6 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1675255971/personal%20project/logo_hezhxg.svg"
              className="h-6 mr-3 sm:h-20 "
              alt="Logo"
            />
            <span className="self-center text-xl font-Roboto font-medium whitespace-nowrap">
              GOOD COFFEE !
            </span>
          </Link>

          <div>
            <ul>
              <li>
                <Menu />
              </li>
            </ul>
          </div>
          <div className="flex pr-4 gap-4">
            {authenticatedUser ? (
              <DropdownUser />
            ) : (
              <button onClick={() => setOpen(true)}>
                <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/null/external-user-back-to-school-kmg-design-basic-outline-kmg-design.png" />
              </button>
            )}

            <button>
              <Link to="/cart">
                <img className="w-1/2" src="https://img.icons8.com/laces/64/null/shopping-basket.png" />
              </Link>
            </button>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </nav>
      <div onClick={() => setOpen(false)} onClose={() => setOpen(false)}>
        <RegisterForm show={openRegis} onClose={() => setOpenRegis(false)} />
        <LoginForm
          show={open}
          onClose={() => setOpen(false)}
          setOpenRegis={setOpenRegis}
        />
      </div>
    </>
  );
}
