"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { TypewriterEffect } from "@/components/typewriter-effect";
export const UserNameTypewriterEffect = () => {
    const { user, isLoaded } = useUser();
    return (
        <div>
            {isLoaded && user ? (
                <TypewriterEffect
                    words={[
                        {
                            text: "Hi ",
                            className:
                                " text-[#60A5FA] text-3xl font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem] ",
                        },
                        {
                            text: `${user.fullName}`,
                            className:
                                "text-white text-3xl font-extrabold tracking-tight md:text-6xl md:leading-[3.5rem] ",
                        }
                    ]}
                />
            ) : (
                <></>
            )}
        </div>
    );
};
