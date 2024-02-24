"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { getDate } from "@/lib/getDate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen my-6">
      <h1 className="text-2xl font-semibold mb-4 mx-10">{`A letter from ${getDate()}`}</h1>
      <div className="flex flex-col md:flex-row px-8 space-x-4">
        <div className="w-full md:w-4/5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="letter"
            className={`w-full h-[100vh] p-6 rounded-md text-black text-lg`}
            placeholder="Write your letter here..."
            style={{ lineHeight: "1.5" }}
          ></textarea>
        </div>
        <div className="w-full md:w-1/5 gap-y-4 flex sm:flex-row md:flex-col  ">
          <div className="flex space-y-1 flex-col justify-center items-start">
            <h3 className="font-semibold text-sm text-white font-sans">
              Deliver in
            </h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border bg-white text-blue-600"
            />
          </div>
          <div className="flex flex-col space-y-0.5 justify-center items-start">
            <h3 className="font-semibold text-sm text-white font-sans">
              Make sure you get your letter
            </h3>
            <Input
              type="email"
              placeholder="Email"
              className="bg-white text-black"
            />
          </div>
          <div className="flex w-full space-x-4">
            <Button className="bg-white text-blue-600 hover:bg-slate-100">
              Preview
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-slate-100">
              Save Draft
            </Button>
          </div>
          <div className="flex flex-col space-y-3 w-full">
            <p className="text-xs text-white font-sans">
              {`You will receive a confirmation email , please ensure your email address is correct By clicking the 'Send to Future' button  you are agreeing to our `}
              <span className="text-blue-300 cursor-pointer text-xs font-sans hover:underline">
                Terms of Use.
              </span>
            </p>
            <button className="w-full text-center p-2.5 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-md text-lg font-semibold font-sans">
              Send to the Future
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
