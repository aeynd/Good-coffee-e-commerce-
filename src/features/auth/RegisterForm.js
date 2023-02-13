import React, { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import validateRegister from "../../validators/validate-register";
import Input from "../../components/input";

import * as authApi from "../../apis/auth-api";
// import PacmanLoader from "react-spinners/PacmanLoader";
const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function RegisterForm({ show, onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);

        // <PacmanLoader color="#c5c5c5" size={25} speedMultiplier={1} />;
        setInput(initialInput);
        onClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmitForm}>
            <div
              className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-medium text-gray-900 ">Sign in</h3>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="First Name" value={input.firstName} /> */}
                </div>
                <Input
                  placeholder="First Name"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                  error={error.firstName}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="Last Name" value="Your Last Name" /> */}
                </div>
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChangeInput}
                  error={error.lastName}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="Email" value="Your Email" /> */}
                </div>
                <Input
                  placeholder="Email"
                  name="email"
                  value={input.email}
                  onChange={handleChangeInput}
                  error={error.email}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="Password" value="Your Password" /> */}
                </div>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                  error={error.password}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  {/* <Label htmlFor="Password" value="Confirm Your Password" /> */}
                </div>
                <Input
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChangeInput}
                  error={error.confirmPassword}
                />
              </div>

              <div className="flex justify-center w-full ">
                <Button type="submit">Sign up</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
