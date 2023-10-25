import React from "react";
import { Spotify } from "../consts";

export default function GetRecommendationsBtn({
  currentTrack,
  setRecommendations,
}: any) {
  async function hanldeGetRecommendation() {
    if (currentTrack) {
      const trackIds = currentTrack.map((track: any) => ({
        id: track.id,
      }));

      const trackIdsString = trackIds.reduce((result: any, item: any) => {
        return `${result}${item.id},`;
      }, "");

      const recommendationParamsConst = {
        limit: 10,
        seed_tracks: [trackIdsString],
      };

      const recommendationsResponse = await Spotify.recommendations.get(
        recommendationParamsConst
      );

      setRecommendations(
        recommendationsResponse.tracks.map((item) => ({
          artist: item.artists.at(0)?.name,
          name: item.name,
          cover: item.album.images.at(1)?.url,
          id: item.id,
          preview: item.preview_url,
        }))
      );
    } else {
      // error handling
    }

    console.log(currentTrack);
  }

  return (
    <button
      className="gap-2 z-20 rounded-3xl pl-1 text-left h-12 w-fit mr-1 items-center flex pl-4 pr-4 hover:bg-gray-100"
      onClick={hanldeGetRecommendation}
    >
      <svg
        strokeWidth={0.4}
        stroke="#000000"
        className="m-auto"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M20 4v9a4 4 0 0 1-4 4H6.914l2.5 2.5L8 20.914L3.086 16L8 11.086L9.414 12.5l-2.5 2.5H16a2 2 0 0 0 2-2V4h2Z"
        />
      </svg>
      <p className="font-medium">Get Recommendations</p>
    </button>
  );
}
