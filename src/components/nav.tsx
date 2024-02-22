"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
export const Nav = () => {
    const { user, isLoaded } = useUser();
    return (
        <nav
            className="flex justify-between px-3 md:px-6 py-2"
            style={{ borderBottom: "1px solid #FFFFFF" }}
        >
            <div className="flex flex-row justify-center items-center space-x-1.5">
                <div className="flex flex-col justify-center items-center space-y-0.5">
                    <div className="h-2.5 w-7 rounded-full bg-blue-400"></div>
                    <div className="h-1.5 w-4 rounded-full bg-white"></div>
                </div>
                <h1 className="font-semibold font-sans">
                    Beyond<span>Letter</span>
                </h1>
            </div>
            {/* <div>
                <img src={NejireHado.src} className="h-9 w-9 rounded-full" />
            </div> */}
            {isLoaded && user && (
                <UserButton afterMultiSessionSingleSignOutUrl="/" />
            )}
        </nav>
    );
};
