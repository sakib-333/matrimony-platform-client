import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { IoMdSend } from "react-icons/io";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <PageTitle title={"Contact"} />
      <div className="my-4">
        <h1 className="heading">Contact</h1>
        <p className="max-w-xl paragraph">
          Please feel free to post your questions, comments and suggestions. We
          are eager to assist you and serve you better.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="md:col-span-2">
            <label htmlFor="name" className="block mb-2 text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Snow"
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john.snow@gmail.com"
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm">
              Email Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="I can not sign up."
              className="w-full px-3 py-2 border rounded-md bg-black"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              type="text"
              name="subject"
              placeholder="Hello! I am trying to sign up but fatching some issues."
              className="w-full px-3 py-2 border rounded-md bg-black"
              rows={5}
            ></textarea>
          </div>
          <button className="btn-primary py-3 rounded-md flex items-center justify-center gap-2 md:col-span-2">
            <span>Send</span>
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
