import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const [user] = useAuthState(auth);
  // const [user] = useCreateUserWithEmailAndPassword(auth);

  const handleNameBlur = (e) => setName(e.target.value);
  const handleAddressBlur = (e) => setAddress(e.target.value);
  const handlePhoneBlur = (e) => setPhone(e.target.value);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, address, phone };
    console.log(shipping);
  };

  return (
    <div>
      <div className="mx-auto">
        <form
          onSubmit={handleCreateUser}
          className=" border-2 p-11 mt-14 w-1/4 mb-4 mx-auto text-center"
        >
          <h1 className=" mb-8 text-3xl">Shipment Information</h1>
          <div className=" text-left">
            <p>Your Name</p>
            <input
              onBlur={handleNameBlur}
              required
              type="text"
              className="form-input px-4 py-3 rounded w-full border-2 my-2"
              placeholder="Your Name"
            />
          </div>
          <div className=" text-left">
            <p>Email</p>
            <input
              value={user?.email}
              readOnly
              required
              type="email"
              className="form-input px-4 py-3 rounded w-full border-2 my-2"
            />
          </div>
          <br />
          <div className=" text-left">
            <p>Address</p>
            <input
              onBlur={handleAddressBlur}
              required
              type="text"
              className="form-input px-4 py-3 rounded w-full border-2 my-2"
              placeholder="Enter your Address"
            />
          </div>
          <br />
          <div className=" text-left">
            <p>Phone</p>
            <input
              onBlur={handlePhoneBlur}
              required
              type="text"
              className="form-input px-4 py-3 rounded w-full border-2 my-2"
              placeholder=""
            />
          </div>
          <br />
          <p className=" text-red-600">{error}</p>
          <input
            type="submit"
            className=" w-full bg-orange-400 rounded mt-6 mb-5 text-white  px-5 py-2 text-xl font-semibold"
            value="Add to Shipment"
          />
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Emazon shopping. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Shipment;
