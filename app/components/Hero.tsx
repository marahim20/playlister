import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center h-3/4">
            <Image src="/main_illustration.svg" width={400} height={400} alt="main_image" priority />
            <div className="flex flex-col gap-4">
                <h1 className="font-heading text-6xl text-primary">PlayLister</h1>
                <p className="font-body text-lg max-w-xs text-text">This app helps you to calculate the total duration of a YouTube playlist. Just paste the URL below and hit Go!</p>
            </div>
        </section>
    );
}