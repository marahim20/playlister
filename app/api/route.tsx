/*Use App Router to further develop APIs since the original codebase is in /app
Doc: https://nextjs.org/docs/app/building-your-application/routing/router-handlers

You can interact with the API by passing a parameter in the URL like https://yt.playlister.vercel.app/api?url=[URL of YouTube Playlist]
To get a response in the format of {
  "parsedData": {
    "noOfVideos": [number],
    "totalLength": [string] ,
    "avgLength": [string] ,
    "at1.25x": [string] ,
    "at1.50x": [string] ,
    "at1.75x": [string] ,
    "at2.00x": [string] ,
  }
}
The [string] will be in the format "[n] hours [n] minutes [n] seconds" where [n] is a [number]
*/

import { NextResponse, NextRequest } from 'next/server'
import fetchPlaylistDetails from "../functions/HandleRequest";

export async function GET(request: NextRequest) {
    //const mysearchparam = request.nextUrl.searchParams.get('mysearchparam')
    const url  = request.nextUrl.searchParams.get('url')
    const parsedData = await fetchPlaylistDetails(url)
    return NextResponse.json({parsedData})
}
