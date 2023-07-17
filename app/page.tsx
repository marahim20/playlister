"use client";

import Hero from "./components/Hero";
import Util from "./components/Util";
import ResultModal from "./components/ResultModal";
import LoadingScreen from "./components/LoadingScreen";
import { Toaster } from "sonner";
import { useState } from "react";

export default function Home() {
    const [showResult, setShowResult] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const handleDataFetched = (finaldata: any) => {
        setData(finaldata); // Update the data state with fetched data
        setIsLoading(false); // Set isLoading to false after data is fetched
        setShowResult(true); // Show the result modal
    };
    return (
        <main className="flex flex-col items-center justify-between w-screen h-screen md:p-24 bg-background">
            {isloading && !showResult && <LoadingScreen />}
            {showResult && (
                <ResultModal
                    onClose={() => {
                        setShowResult(false);
                    }}
                    finaldata={data}
                />
            )}
            <Hero />
            <Util
                onClickSetLoading={() => setIsLoading(true)}
                onDataFetched={(finaldata) => handleDataFetched(finaldata)}
            />
            <Toaster richColors closeButton />
        </main>
    );
}
