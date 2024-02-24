"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { getDate } from "@/lib/getDate";
import { Input } from "@/components/ui/input";

const Page = () => {
    const [text, setText] = useState<string>("");
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-semibold my-6 mx-10">{`A letter from ${getDate()}`}</h1>
            <div className="flex  px-8 space-x-4">
                <div className="w-4/5">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        id="letter"
                        className={`w-full h-[80vh] p-6 rounded-2xl text-black text-lg`}
                        placeholder="Write your letter here..."
                        style={{ lineHeight: "1.5" }}
                    ></textarea>
                </div>
                <div className="w-1/5 gap-y-4 flex flex-col  ">
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
                </div>
            </div>
        </div>
    );
};

export default Page;
