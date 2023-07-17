import React from "react";
import { RiLoader4Line } from "react-icons/ri";

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-secondary bg-opacity-70">
            <div className="p-8 rounded-lg flex items-center justify-center">
                <RiLoader4Line className="animate-spin text-primary text-4xl" />
            </div>
        </div>
    );
};

export default LoadingScreen;
