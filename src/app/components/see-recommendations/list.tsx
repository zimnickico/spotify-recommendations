import React from "react";
import SeeRecommendationsPreview from "./preview";

export default function SeeRecommendationsList({ recommendations }: any) {
  const audioRef = React.useRef(recommendations.at(0)?.preview_url);

  return recommendations?.map((item: any) => (
    <div key={item?.id} className="flex w-[40vw] m-auto pb-4">
      <div className="p-2 border-[1px] flex rounded-lg items-center w-[40vw] gap-4 bg-black text-white pr-4">
        <img className="w-32 rounded-md" src={item?.cover}></img>
        <audio ref={audioRef} src={item?.preview}></audio>
        <div className="flex flex-col grow">
          <ul>{item?.name}</ul>
          <ul className="text-white/50">{item?.artist}</ul>
        </div>
        <SeeRecommendationsPreview
          item={item}
          recommendations={recommendations}
          audioRef={audioRef}
        />
      </div>
    </div>
  ));
}
