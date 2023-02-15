import useAuth from "../hooks/useAuth";
import { useState } from "react";
// import validateRegister from "../validators/validate-register";
// import Input from "../../components/input";

// const initialInput = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   address:""
// };

export default function ProfilePage() {
  const { authenticatedUser } = useAuth();

  // const [input, setInput] = useState(initialInput);
  // const [error, setError] = useState({});

  // const handleInput = e => {
  //   setInput({ ...Input, [e.target.name]: e.target.value });
  // };

  // const handleSubmitForm = async e => {
  //   try {
  //     e.preventDefault()
  //     // const result = 
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  return (
    <>
      <div className="px-2 sm:px-6 pt-6 ">
        <div className="flex justify-center font-Roboto font-light text-7xl">
          <p>PROFILE</p>
        </div>
        <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
        <div className="flex justify-center ">
          <form className="">
            <ul>
              <li>
                <label>First Name :</label>
                <input
                  className="border-black"
                  name="firstName"
                  value={authenticatedUser.firstName}
                />
              </li>
              <br />
              <li>
                <label>Last Name :</label>
                <input name="lastName" value={authenticatedUser.lastName} />
              </li>
              <br />
              <li>
                <span>Email :</span>
                <span>{authenticatedUser.email}</span>
              </li>
              <br />
              <li>
                <label>Phome :</label>
                <input name="mobile" value={authenticatedUser.mobile} />
              </li>
              <br />
              <li>
                <label>Address :</label>
                <input name="address" value={authenticatedUser.address} />
              </li>
              <br />
              <li className="flex justify-center">
                <button type="submit">Update Profile!</button>
              </li>
            </ul>
          </form>

          {/* <form>
            <div className="field1">
              <label> customer info </label>
              <input placeholder="Name" />
              <input placeholder="Phone 000-000-0000" />
              <input placeholder="E-mail" />
         
            </div>

            <button type="submit" id="submitBtn" className="submitBtn">
              {" "}
              submit
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
}
