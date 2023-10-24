import React from "react";

export default function Navigation() {

    return (
        <div
        className="absolute z-20 flex gap-20 mt-0 pt-8 w-[100vw]">
            <div
            className="items-end flex flex-col w-[60vw] m-auto">
                <div
                className="flex gap-10">
                <button
                className="font-medium">Home</button>
                <button
                className="font-medium">About</button>
                <button
                className="font-medium">GitHub</button>
                </div>
            </div>
        </div>
    )

}