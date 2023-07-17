import React from "react";
import { IoCloseOutline } from 'react-icons/io5';

type ResultModalProps = {
    onClose: () => void;
    finaldata: any;
};

export default function ResultModal({ onClose, finaldata }: ResultModalProps) {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-end md:justify-center bg-secondary bg-opacity-70">
            <div className="bg-primary p-8 md:w-4/6 pb-16 md:pb-8 rounded-lg rounded-b-none md:rounded-lg font-body">
                <div className="flex items-center justify-between mb-4 gap-8">
                    <h2 className="text-2xl font-semibold select-none">Playlist Details</h2>
                    <button
                        className="rounded-full p-1 border-2 text-text hover:border-secondary hover:text-secondary"
                        onClick={onClose}
                    >
                        <IoCloseOutline size={24} />
                    </button>
                </div>

                <div className="mb-4 flex flex-col gap-2 text-lg font-medium select-none">
                    <p className="hover:text-secondary">No. of videos: {finaldata.noOfVideos}</p>
                    <p className="hover:text-secondary">Average length of video: {finaldata.avgLength}</p>
                    <p className="hover:text-secondary">Total length of playlist: {finaldata.totalLength}</p>
                    <p className="hover:text-secondary">At 1.25x: {finaldata["at1.25x"]}</p>
                    <p className="hover:text-secondary">At 1.50x: {finaldata["at1.50x"]}</p>
                    <p className="hover:text-secondary">At 1.75x: {finaldata["at1.75x"]}</p>
                    <p className="hover:text-secondary">At 2.00x: {finaldata["at2.00x"]}</p>
                </div>
            </div>
        </div>
    );
}
