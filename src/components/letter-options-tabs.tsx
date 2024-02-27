"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function LetterOptionsTabs() {
    const tabs = [
        {
            title: "Note",
            value: "Note",
            content: (
                <div className="w-11/12 lg:w-full overflow-hidden relative h-full rounded-md font-sans p-4 text-lg md:text-2xl font-bold text-blue-500 bg-white  ">
                    <p>Write a note for your future self</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Video",
            value: "Video",
            content: (
                <div className="w-11/12 lg:w-full overflow-hidden relative h-full rounded-md font-sans p-4 text-lg md:text-2xl  font-bold text-blue-500 bg-white ">
                    <p>Record a video for your future self</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Audio",
            value: "Audio",
            content: (
                <div className="w-11/12  lg:w-full overflow-hidden relative h-full rounded-md font-sans p-4 text-lg md:text-2xl font-bold text-blue-500 bg-white  ">
                    <p>Record a audio for your future self</p>
                    <DummyContent />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
            <Tabs tabs={tabs} tabClassName="font-semibold  font-sans bg-white" />
        </div>
    );
}

const DummyContent = () => {
    return (
        <Image
            src="/linear.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[90%]  absolute -bottom-10 inset-x-0 w-[90%]  mx-auto"
        />
    );
};
