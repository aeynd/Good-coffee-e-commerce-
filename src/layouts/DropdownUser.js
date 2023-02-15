import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function DropdownUser() {
  const { logout, authenticatedUser } = useAuth();
  // console.log(authenticatedUser);
  return (
    <>
      <Dropdown
        arrowIcon={false}
        inline={true}
        dismissOnClick={false}
        label={
          <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/null/external-user-back-to-school-kmg-design-basic-outline-kmg-design.png" />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">
            {authenticatedUser.firstName} {authenticatedUser.lastName}
          </span>
          <span className="block text-sm font-medium truncate">
            {authenticatedUser.email}
          </span>
        </Dropdown.Header>
        {/* <Link to="/profile">
          <Dropdown.Item>Profile</Dropdown.Item>
        </Link> */}
        <Dropdown.Divider />
        <Link to="/">
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Link>
      </Dropdown>
    </>
  );
}

// {
/* <Dropdown.Item icon={<i class="fa-regular fa-mug-hot"></i>}>
  Profile
</Dropdown.Item>; */
// }
// <Dropdown.Item icon={<i class="fa-regular fa-person-to-portal"></i>}>Sign out</Dropdown.Item>
