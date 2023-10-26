import React from "react";
import Title from "./title";
import Preview from "./preview";

export default function Landing() {

    return (
        <div
        className="z-10 relative lg:mt-[35vh] mt-12 mx-12 lg:mx-auto flex xl:gap-64 gap-20">
            <Title/>
            <Preview/>
        </div>
    )

}