"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const ContactUs = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const sendEmail = () => {
    const templateParams = {
      from_name: Name,
      email: Email,
      message: Message,
    };

    emailjs
      .send(
        "service_m0idxfb",
        "template_2y7q8du",
        templateParams,
        "fYw4Ynaw7srWGmG2J"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Thank you for your message!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {" "}
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Contact Us</SheetTitle>
          <SheetDescription>
            Make change. Click save when you're done.
            <div className="border-b border-gray-400 py-2">
              <p className="mt-4 font-semibold">0638619542</p>
              <p className="font-semibold">mgmgroupconnect@gmail.com</p>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 items-center justify-center gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Pedro Duarte"
              className="col-span-3"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              email
            </Label>
            <Input
              id="email"
              placeholder="kWZpX@example.com"
              className="col-span-3"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Message" className="text-right">
              Message
            </Label>
            <Input
              type="textarea"
              id="Message"
              placeholder="Enquire a message"
              className="col-span-3 h-24"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" variant="default" onClick={sendEmail}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </>
  );
};

// <div>
//   <label>Name</label>
//   <input
//     type="text"
//     name="user_name"
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//   />
//   <label>Email</label>
//   <input
//     type="email"
//     name="user_email"
//     value={email}
//     onChange={(e) => {
//       setEmail(e.target.value);
//     }}
//   />
//   <label>Message</label>
//   <textarea
//     name="message"
//     value={message}
//     onChange={(e) => setMessage(e.target.value)}
//   />
//   <input type="submit" value="Send" onClick={sendEmail} />
// </div>
