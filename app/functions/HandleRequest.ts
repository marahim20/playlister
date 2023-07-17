import axios from "axios";
import { toast } from "sonner";

export default async function fetchPlaylistDetails(
    playlistUrl: string
): Promise<any> {
    const playlistId = extractPlaylistId(playlistUrl);
    if (!playlistId) {
        toast.error("Invalid playlist");
        return;
    }
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const videoIds = await extractVideoIds(playlistId, apiKey);
    const videoDetails = await Promise.all(
        videoIds.map(async (videoId) => {
            return await extractVideoDetails(videoId, apiKey);
        })
    );
    const totalDuration = videoDetails.reduce((acc, curr) => {
        if (curr) {
            return acc + convertDurationToSeconds(curr.duration);
        }
        return acc;
    }, 0);
    const videoCount = videoDetails.length;
    const parsedData = dataparser(videoCount, totalDuration);
    return parsedData;
}

const extractPlaylistId = (playlistUrl: string) => {
    if (playlistUrl) {
        const reg = /[&?]list=([^&]+)/i;
        const match = reg.exec(playlistUrl);
        if (match && match[1]) {
            return match[1];
        } else {
            toast.error("Invalid playlist URL");
        }
    }
};

const extractVideoIds = async (
    playlistId: string,
    apiKey: string | undefined
) => {
    let pageToken = "";
    let videoIDs: string[] = [];

    while (pageToken !== undefined) {
        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=50&part=contentDetails&pageToken=${pageToken}&playlistId=${playlistId}&key=${apiKey}`
        );
        if (response.status !== 200) {
            toast.error("Error fetching playlist details");
        } else {
            const { nextPageToken, items } = response.data;
            pageToken = nextPageToken;
            videoIDs = [
                ...videoIDs,
                ...items.map((item: any) => item.contentDetails.videoId),
            ];
        }
    }
    return videoIDs;
};

const extractVideoDetails = async (
    videoId: string,
    apiKey: string | undefined
) => {
    const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${apiKey}`
    );
    if (response.status !== 200) {
        toast.error("Error fetching video details");
    } else {
        const duration = response.data.items[0].contentDetails.duration;
        return {
            duration,
            videoId,
        };
    }
};

const convertDurationToSeconds = (duration: string) => {
    const reg = /PT(\d+H)?(\d+M)?(\d+S)?/i;
    const match = reg.exec(duration);
    if (match) {
        const hours = parseInt(match[1]) || 0;
        const minutes = parseInt(match[2]) || 0;
        const seconds = parseInt(match[3]) || 0;
        return hours * 3600 + minutes * 60 + seconds;
    }
    return 0;
};

const dataparser = (videoCount: number, totalDuration: number) => {
    const totalLength = timeParser(totalDuration);
    const avgLength = timeParser(Math.floor(totalDuration / videoCount));
    const speed125x = timeParser(Math.floor(totalDuration / 1.25));
    const speed15x = timeParser(Math.floor(totalDuration / 1.5));
    const speed175x = timeParser(Math.floor(totalDuration / 1.75));
    const speed2x = timeParser(Math.floor(totalDuration / 2));
    const parsedData = {
        noOfVideos: videoCount,
        totalLength: totalLength,
        avgLength: avgLength,
        "at1.25x": speed125x,
        "at1.50x": speed15x,
        "at1.75x": speed175x,
        "at2.00x": speed2x,
    };
    return parsedData;
};

const timeParser = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    const seconds = duration - hours * 3600 - minutes * 60;
    if (hours == 0 && minutes == 0) {
        return `${seconds} seconds`;
    }
    if (hours == 0) {
        return `${minutes} minutes ${seconds} seconds`;
    }
    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
};
