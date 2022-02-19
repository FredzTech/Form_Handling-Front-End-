import React, { useState, useEffect } from "react";
import Paragraph from "./Paragraph";
import Button from "./Button";
import axios from "../axios";

const Form = () => {
  const [data, setData] = useState("");
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  useEffect(() => {
    // const fetchData = async () => {
    //   let greetings = await axios.get("./");
    //   let data = await greetings.json();
    //   console.log(data);
    // };
    const fetchData = async () => {
      // let greetings = await fetch("http://localhost:3005/page1");
      let greetings = await axios.get("./");
      let data = await greetings.data;
      setData(data);
    };
    fetchData();
  }, []);

  console.log(data);

  // const handleOnClick = (e) => {
  //   alert(`This ${e.target.type} has been clicked`);
  // };

  // const handleOnHover = (e) => {
  //   console.log(e);
  //   alert(`This ${e.target.className} has been hovered upon`);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Your name is ${name} and your email is ${email}`);
  };
  return (
    <>
      <div className=" p-5 flex flex-col content-center items-center justify-center">
        <form class="w-full max-w-sm" onSubmit={handleSubmit}>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="eg Gichia Alfred Githinji"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Password
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="eg alfredgithinji87@gmail.com"
                required
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3"></div>
            <label class="md:w-2/3 block text-gray-500 font-bold">
              <input class="mr-2 leading-tight" type="checkbox" />
              <span class="text-sm">Send me your newsletter!</span>
            </label>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <div className="p-5">
                <Button type="button" text="Submit" />
              </div>
            </div>
          </div>
        </form>

        {/* <div className="p-5">
          <Paragraph />
        </div> */}
      </div>
    </>
  );
};

export default Form;