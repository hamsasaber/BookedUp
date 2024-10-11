"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9850/api/v1/users/", {
        name: name,
        email: email,
        password: pass,
      })
      .then((res) => {
        alert("Welcome added successfully");
        router.push("/home");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <div className="bg-[#feede5] h-screen p-5 flex justify-center items-center">
      <div className="w-[45%] bg-[#f4acb7] rounded h-screen p-1 ">
        <Header />
        <div className="text-white text-xl font-semibold m-2 text-center bg-[#f5cac3] rounded ">
          {" "}
          Welcome Back to Bookedup!! <br />
          Please Enter Credentials to Sign Up!
        </div>
        <div className="flex flex-col gap-3">
          <form
            onSubmit={(e) => {
              submit(e);
            }}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="text-l font-semibold ">
              Name *
              <input
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Name"
              />
            </div>
            <div className="text-l font-semibold ">
              Email *
              <input
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Email"
              />
            </div>
            <div className="text-l font-semibold my-7">
              Password*
              <input
                name="password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                value={pass}
                type="password"
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Password"
              />
            </div>
            <button
              type="submit"
              className="bg-transparent hover:bg-[#f5cac3] text-[#290d11] font-semibold hover:text-white py-2 px-4 border border-[#290d11] hover:border-transparent rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="text-white text-xl font-semibold m-2 text-center bg-[#f5cac3] rounded p-2">
          {" "}
          Already have an Account? <br />
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="bg-transparent hover:bg-[#f5cac3] text-[#290d11] font-semibold hover:text-white py-2 px-4 border border-[#290d11] hover:border-transparent rounded"
          >
            Log In
          </button>{" "}
          <br />
          Dive into a world of endless stories. Your next favorite book is just
          a click away!
        </div>
      </div>
    </div>
  );
};

export default Page;
