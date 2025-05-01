import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";

const ContactMe = () => {
     const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm("service_7x26uui", "template_xrsxfwe", form.current, {
            publicKey: "2h_c5gfyk3ytGdr8t",
          })
          .then(
            () => {
              console.log("SUCCESS!");
              e.target.reset();
              alert("Email Is Sent")
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      };
  return (
    <div id='contact' className="w-full h-screen flex justify-center items-center flex-col gap-5 p-5">
      <h1 className="font-semibold text-4xl lg:text-5xl ">Contact Me</h1>
      <span className="font-medium text-sm text-center lg:text-md ">
        Please fill out the form below to discuss any work opportunies
      </span>
      <div className="mt-5 w-full lg:w-1/2">
        <form
          ref={form}
          action=""
          className="flex flex-col justify-center items-center w-full gap-5"
          onSubmit={sendEmail}
        >
          <input
            className="px-5 py-2 bg-zinc-800 outline-none w-full "
            placeholder="Your Name"
            type="text"
            name="user_name"
          />
          <input
            className="px-5 py-2  bg-zinc-800 outline-none w-full"
            placeholder="Your Email"
            type="email"
            name="user_email"
          />
          <textarea
            className="h-40 w-full  px-5 py-2 bg-zinc-800 outline-none resize-none"
            placeholder="Your Message"
            name="message"
            id=""
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="px-10 py-2 font-medium text-xs bg-white text-black rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe