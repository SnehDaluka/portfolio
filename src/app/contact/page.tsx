"use client";

import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [load, setLoad] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setData((oldData) => {
      const { name, value } = e.target;
      return { ...oldData, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoad(true);
      const response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      const data1 = await response.json();
      setLoad(false);
      if (response.ok) {
        setData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[100%]">
      <div className="w-[100%] h-[20%] animate-show">
        <h1 className="grey_gradient text-6xl font-bold text-center pt-5 pb-6 drop-shadow-[7px_-7px_5px_rgba(147,51,234,0.3)]">
          <span className="nav_heading">Contact</span>
        </h1>
        <p className="pb-3 text-center text-base text-gray-500 mb-7">
          Any question or remarks? Just write a message!
        </p>
      </div>
      <div className="w-[100%] h-[80%] flex items-center justify-center">
        <div className="max-lg:w[90%]  lg:w-[75%] h-[80%] lg:flex items-center my-7 justify-center rounded-lg">
          <div className=" lg:w-[40%] h-[100%] p-4 rounded-tl-lg rounded-bl-lg animate-show_left">
            <div className="my-4 text-lg flex items-center">
              <div className="contact_icons">
                <i className="fa-solid fa-phone text-purple-700"></i>
              </div>
              <div className="ml-4">
                <p className="text-base">Phone:</p>
                <p>+91 7544972548</p>
              </div>
            </div>
            <div className="my-4 text-lg flex items-center">
              <div className="contact_icons">
                <i className="fa-solid fa-envelope text-purple-700"></i>
              </div>
              <div className="ml-4">
                <p className="text-base">Email:</p>
                <p>snehdaluka@gmail.com</p>
              </div>
            </div>
            <div className="my-4 text-lg flex items-center">
              <div className="contact_icons">
                <i className="fa-solid fa-location-dot text-purple-700"></i>
              </div>
              <div className="ml-4">
                <p className="text-base">Location:</p>
                <p>Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
            <div className="px-3">
              <div className="flex justify-evenly my-7">
                <a
                  href="https://www.instagram.com/sneh_daluka/"
                  className="text-2xl mx-4 hover:text-purple-600 hover:drop-shadow-[4px_4px_5px_rgba(147,51,234,0.3)] hover:scale-110 transition-all duration-300"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/SnehDaluka"
                  className="text-2xl mx-4 hover:text-purple-600 hover:drop-shadow-[4px_4px_5px_rgba(147,51,234,0.3)] hover:scale-110 transition-all duration-300"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://twitter.com/Sneh_Daluka"
                  className="text-2xl mx-4 hover:text-purple-600 hover:drop-shadow-[4px_4px_5px_rgba(147,51,234,0.3)] hover:scale-110 transition-all duration-300"
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sneh-daluka-35904b249/"
                  className="text-2xl mx-4 hover:text-purple-600 hover:drop-shadow-[4px_4px_5px_rgba(147,51,234,0.3)] hover:scale-110 transition-all duration-300"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100069572833323"
                  className="text-2xl mx-4 hover:text-purple-600 hover:drop-shadow-[4px_4px_5px_rgba(147,51,234,0.3)] hover:scale-110 transition-all duration-300"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white text-black h-[100%] lg:w-[60%] m-4 rounded-lg animate-show_right p-5 py-8">
            <form
              className="min-h-[100%] w-[100%]"
              onSubmit={handleSubmit}
              onClick={() => setSent(false)}
            >
              {sent && (
                <div className="bg-sky-200 rounded-md px-5 p-2 mx-3 mt-2 mb-4 flex justify-between tracking-wide text-blue-900 font-medium">
                  <span>Message Sent</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setSent(false)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </div>
              )}
              <div className="flex flex-col">
                <label htmlFor="name" className=" mx-3 font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="contact_input"
                  required
                />
              </div>
              <div className="lg:flex">
                <div className="flex flex-col lg:w-[50%]">
                  <label htmlFor="email" className=" mx-3 font-semibold">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="contact_input"
                    required
                  />
                </div>
                <div className="flex flex-col lg:w-[50%]">
                  <label htmlFor="phone" className=" mx-3 font-semibold">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    className="contact_input"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className=" mx-3 font-semibold">
                  Message <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                  className="contact_input"
                  required
                />
              </div>
              <div className="flex flex-row-reverse">
                <button
                  type="submit"
                  className="bg-purple-700 text-white text-lg tracking-wide font-semibold rounded-lg p-3 hover:scale-105 hover:shadow-xl active:scale-100"
                >
                  {load ? <span>Sending...</span> : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
