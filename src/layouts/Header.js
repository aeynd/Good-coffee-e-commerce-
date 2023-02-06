import { useState } from "react";
import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";

import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="px-2 sm:px-6 pt-6 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <a href="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1675255971/personal%20project/logo_hezhxg.svg"
              className="h-6 mr-3 sm:h-20 "
              alt="Logo"
            />
            <span className="self-center text-xl font-Roboto font-medium whitespace-nowrap">
              GOOD COFFEE !
            </span>
          </a>

          <div>
            <ul>
              <li>
                <Menu />
              </li>
            </ul>
          </div>
          <div className="flex pr-4 gap-4">
            <button onClick={() => setOpen(true)}>
              <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/null/external-user-back-to-school-kmg-design-basic-outline-kmg-design.png" />
            </button>

            <button>
              <a href="#">
                <img src="https://img.icons8.com/pulsar-line/32/null/experimental-shopping-cart-pulsar-line.png" />
              </a>
            </button>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </nav>
      <div onClick={() => setOpen(false)} onClose={() => setOpen(false)}>
        <RegisterForm show={open} onClose={() => setOpen(false)} />
        {/* <LoginForm show={open} onClose={() => setOpen(false)} /> */}
      </div>
    </>
  );
}
