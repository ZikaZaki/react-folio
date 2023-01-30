import { createElement } from "react";
import content from "../Content";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { contact } = content;
  const form = useRef();

  // Send email using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    // Keys can be added in .env file
    emailjs.sendForm('service_phbgp7r', 'template_m9h2a3d', form.current, 'xaV03xq87RMgKgmkQ')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        toast.success("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        toast.error("Something went wrong!");
      });
  };

  return (
    <section id="contact" className="bg-dark_primary text-white">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white">{contact.title}</h2>
        <h4 className="subtitle">{contact.subtitle}</h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Name" 
              required 
              className="border border-slate-600 p-3 rounded" 
            />
            <input 
              type="email" 
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded" 
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="border border-slate-600 p-3 rounded h-44"
            ></textarea>
            <button type="submit" className="btn self-start bg-white text-dark_primary">Submit</button>
          </form>
          <div className="flex flex-col flex-1 gap-5">
            {
              contact.social_media.map((content, i) => (
                <div key={i} className="flex items-center gap-2">
                  <h4 className="text-white">{createElement(content.icon)}</h4>
                  <a 
                    className="font-Poppins" 
                    href={content.link} 
                    target="_blank"
                  >
                    {content.text}
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
