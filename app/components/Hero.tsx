import React from "react";
import Image from "next/image";
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { PiYoutubeLogoFill } from 'react-icons/pi';

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center h-3/4">
            <Image src="/main_illustration.svg" width={400} height={400} alt="main_image" priority />
            <div className="flex flex-col gap-4">
                <h1 className="font-heading text-6xl text-primary">PlayLister</h1>
                <p className="font-body text-base max-w-xs text-text">
                    This app helps you to calculate the total length of any <PiYoutubeLogoFill size={20} className="inline-block" /> YouTube playlist. Just paste the URL of the playlist or any video from the playlist below and hit Go!
                </p>
                <div className="flex gap-4">
                    <div className="flex items-end group gap-1 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/marahim20/")}>
                        <HiOutlineArrowUpRight size={18} />
                        <div className="font-body text-lg font-medium group-hover:underline">built by</div>
                        <div className="font-body text-lg font-medium group-hover:underline">
                            Minhaj
                        </div>
                    </div>
                    <div className="flex items-end group gap-1 cursor-pointer" onClick={() => window.open("https://github.com/marahim20/playlister")}>
                        <HiOutlineArrowUpRight size={18} />
                        <div className="font-body text-lg font-medium group-hover:underline">
                            github
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
