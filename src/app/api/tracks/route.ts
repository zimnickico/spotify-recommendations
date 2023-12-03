import { NextResponse, type NextRequest } from "next/server";
import { Spotify } from "@/app/consts";

export async function GET(request: NextRequest) {
  const TracksParamsSearch = request.nextUrl.searchParams;
  const TrackParams = TracksParamsSearch.get("share") as string;

  try {
    const Tracks = await Spotify.tracks.get([TrackParams]);

    console.log(Tracks)

    return new Response(JSON.stringify(Tracks));
  } catch (error) {

    return new Response(JSON.stringify("Error"));
  }
}
