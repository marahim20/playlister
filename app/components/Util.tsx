import React from "react";
import fetchPlaylistDetails from "../functions/HandleRequest";

type UtilProps = {
    onClickSetLoading: () => void;
    onDataFetched: (data: any) => void;
};

export default function Util({ onClickSetLoading, onDataFetched }: UtilProps) {
    const [playlistLink, setPlaylistLink] = React.useState("");
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlaylistLink(event.target.value);
    };
    const handleClick = async () => {
        onClickSetLoading();
        const data = await fetchPlaylistDetails(playlistLink);
        onDataFetched(data);
    };
    return (
        <div className="h-1/4 w-full flex items-center justify-center p-12">
            <div className="w-full max-w-2xl flex gap-1">
                <input type="text" name="playlistLink" id="playlistLink"
                    onChange={handleInput}
                    className="
                        p-2 bg-secondary w-full h-12 font-body 
                        border-2 border-primary rounded-xl 
                        rounded-r-none focus:border-transparent focus:outline-none 
                        placeholder:text-text placeholder:text-opacity-50"
                    placeholder="https://www.youtube.com/playlist?list=PLu4wnki9NI_8VmJ7Qz_byhKwCquXcy6u9" />
                <button
                    className="bg-primary font-body font-medium rounded-lg rounded-l-none p-3 px-6 text-secondary"
                    onClick={handleClick}>Go!</button>
            </div>
        </div>
    );
}