import React from "react";
import Title from "./title";
import Preview from "./preview";

export default function Landing() {

    return (
        <div
        className="z-10 mt-[35vh] flex xl:gap-64 gap-20">
            <Title/>
            <Preview/>
        </div>
    )

}