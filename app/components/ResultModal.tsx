import React from "react";
import { IoCloseOutline } from "react-icons/io5";

type ResultModalProps = {
    onClose: () => void;
    finaldata: any;
};

export default function ResultModal({ onClose, finaldata }: ResultModalProps) {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-end md:justify-center bg-secondary bg-opacity-70">
            <div className="p-8 pb-16 rounded-lg rounded-b-none bg-primary md:w-4/6 md:pb-8 md:rounded-lg font-body">
                <div className="flex items-center justify-between gap-8 mb-4">
                    <h2 className="text-2xl font-semibold select-none">
                        Playlist Details
                    </h2>
                    <button
                        className="p-1 border-2 rounded-full text-text hover:border-secondary hover:text-secondary"
                        onClick={onClose}
                    >
                        <IoCloseOutline size={24} />
                    </button>
                </div>

                {finaldata && (
                    <div className="flex flex-col gap-2 mb-4 text-lg font-medium select-none">
                        <p className="hover:text-secondary">
                            No. of videos: {finaldata.noOfVideos}
                        </p>
                        <p className="hover:text-secondary">
                            Average length of video: {finaldata.avgLength}
                        </p>
                        <p className="hover:text-secondary">
                            Total length of playlist: {finaldata.totalLength}
                        </p>
                        <p className="hover:text-secondary">
                            At 1.25x: {finaldata["at1.25x"]}
                        </p>
                        <p className="hover:text-secondary">
                            At 1.50x: {finaldata["at1.50x"]}
                        </p>
                        <p className="hover:text-secondary">
                            At 1.75x: {finaldata["at1.75x"]}
                        </p>
                        <p className="hover:text-secondary">
                            At 2.00x: {finaldata["at2.00x"]}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
