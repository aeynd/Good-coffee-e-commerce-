import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const menuList = [
  {
    list: <p>HOME</p>,
    pathname: "/"
  },
  {
    list: <p>SHOP</p>,
    pathname: "/shop"
  },
  {
    list: <p>ROASTER</p>,
    pathname: "/roaster"
  },
  {
    list: <p>CONTACT</p>,
    pathname: "/contact"
  }
];

export default function Menu() {
  const location = useLocation();
  return (
    <div className="  items-center justify-between hidden w-full md:flex md:w-auto pr-36">
      <div className="flex mt-4  md:flex-row md:space-x-12 font-Roboto md:mt-0 md:text-sm md:font-medium md:border-0 " >
        {menuList.map(el => (
          <MenuItem
            key={el.pathname}
            to={el.pathname}
            active={location.pathname === el.pathname}
          >
            {el.list}
          </MenuItem>
        ))}
      </div>
    </div>
  );
}
