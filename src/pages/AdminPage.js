import jwtDecode from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as authApi from "../apis/auth-api";
import * as cartApi from "../apis/cart-api";
import useAuth from "../hooks/useAuth";

const initialInput = {
  title: "",
  price: "",
  catagoryTitle: "",
  roasterTitle: ""
};

export default function AdminPage() {
  const [file, setFile] = useState(null);
  const [slipImage, setSlipImage] = useState([]);
  const [statusClickChange, setStatusClickChange] = useState("");
  const [productInput, setProductInput] = useState(initialInput);
  const inputEl = useRef();
  const navigate = useNavigate();
  const { authenticatedUser } = useAuth();
  const { productId } = useParams();

  // const checkRole = async () => {
  //   const token = localStorage.getItem("ACCESS_TOKEN");
  //   const decode = await jwtDecode(token);

  //   if (decode.role !== "ADMIN") {
  //     return navigate("/");
  //   }
  // };
  // useEffect(() => {
  //   if (authenticatedUser) {
  //     checkRole();
  //   }
  // }, []);
  function refreshPage() {
    window.location.reload(false);
  }

  const handleChangeInput = e => {
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const handleSubmitProduct = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", productInput.title);
      formData.append("price", productInput.price);
      formData.append("catagoryTitle", productInput.catagoryTitle);
      formData.append("roasterTitle", productInput.roasterTitle);
      await authApi.createProduct(formData);
      setProductInput(initialInput);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSlip = async () => {
    try {
      const res = await cartApi.getSlipImg();
      setSlipImage(res.data.slip);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSlip();
  }, []);

  const fetchStatus = async () => {
    try {
      const res = await authApi.statusChange();
      setStatusClickChange(res.data.confirm);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStatus();
  }, []);

  const handleSuccess = async input => {
    console.log(input);
    await authApi.statusChange(input);
    fetchStatus();

    refreshPage();

    // setStatusClickChange("SUCCESS");
  };

  const handleReject = async (status, id) => {
    await authApi.statusChange(status, id);
    console.log("status", status);

    fetchStatus();
    refreshPage();
    // setStatusClickChange("REJECT");
  };

  return (
    <>
      <div className="px-2 sm:px-6 pt-6 ">
        <div className="flex justify-center font-Roboto font-light text-7xl">
          <p>ADMIN PAGE</p>
        </div>
      </div>
      <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
      <div className="flex justify-center ">
        <div className="flex p-2 bg-gray-600 rounded-md">
          <form
            className="flex  gap-2 text-lg font-Roboto text-white m-5"
            onSubmit={handleSubmitProduct}
          >
            <div className="flex flex-col" onClick={e => e.stopPropagation()}>
              <label>Product name</label>
              <input
                className="rounded-md text-black p-1 "
                name="title"
                value={productInput.title}
                onChange={handleChangeInput}
              ></input>
              <label>Price</label>
              <input
                className="rounded-md text-black p-1"
                name="price"
                value={productInput.price}
                onChange={handleChangeInput}
              ></input>
              <label>Roaster</label>
              <input
                className="rounded-md text-black p-1"
                name="roasterTitle"
                value={productInput.roasterTitle}
                onChange={handleChangeInput}
              ></input>
              <label>Roast level</label>
              <input
                className="rounded-md text-black p-1"
                name="catagoryTitle"
                value={productInput.catagoryTitle}
                onChange={handleChangeInput}
              ></input>
              <label>Coffee image</label>
              <input
                type="file"
                ref={inputEl}
                onChange={e => {
                  setFile(e.target.files[0]);
                }}
              />
              <button
                type="submit"
                className="text-white h-12 text-sm m-1 bg-black rounded-lg p-1 "
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between px-64 font-semibold">
          <p>User id</p>
          <p>Slip image</p>
          <p>Status</p>
          <p>Approve</p>
        </div>
        <div className="mt-5">
          {slipImage &&
            slipImage.map(el => (
              <div className="flex justify-between px-64 items-center p-2">
                <p>{el.userId}</p>
                <img className="w-20 h-20" src={el?.paymentImg} />
                <p>{el.status}</p>

                <div className="text-sm flex ">
                  <button onClick={() => handleSuccess({ id: el.id, status: "SUCCESS" })}>
                    Success
                  </button>
                  <button onClick={() => handleReject({ id: el.id, status: "REJECT" })}>
                    Reject
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
