import React, { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";

import { Link } from "react-router-dom";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

export default function LoginForm({ show, onClose, setOpenRegis }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(email, password);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setEmail("")
    setPassword("")
  },[show])



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
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required={true}
                />
              </div>
              <div className="flex justify-between"></div>
              <div className="w-full">
                <Button type="submit" onClick={onClose}>
                  Log in
                </Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href=" "
                  className="text-blue-700 hover:underline dark:text-blue-500"
                  onClick={e => {
                    e.preventDefault();
                    onClose();
                    setOpenRegis(true);
                  }}
                >
                  Create account
                </a>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
