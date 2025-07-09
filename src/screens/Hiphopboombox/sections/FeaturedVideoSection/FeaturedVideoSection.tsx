import { EyeIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedVideoSection = (): JSX.Element => {
  // Video data for mapping
  const featuredVideos = [
    {
      id: 1,
      title: "Check out Jim Jones summer jam performance",
      background: "url(..//frame-12-4.png)",
      playIcon: "/play-circle-3.png",
      views: 33,
      titleFullWidth: true,
    },
    {
      id: 2,
      title: "Powerslap",
      background: "url(..//frame-13-4.png)",
      playIcon: "/play-circle-4.png",
      views: 33,
      titleFullWidth: false,
    },
    {
      id: 3,
      title: "Pause",
      background: "url(..//frame-14-2.png)",
      playIcon: "/play-circle-5.png",
      views: 33,
      titleFullWidth: false,
    },
  ];

  return (
    <section className="flex flex-row items-center gap-[35px] w-full">
      {featuredVideos.map((video) => (
        <Card
          key={video.id}
          className={`flex flex-col w-[358px] h-[264px] items-start justify-end gap-[5px] p-[15px] rounded-[10px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%),${video.background}_50%_50%_/_cover] border-0`}
        >
          <CardContent className="p-0 flex flex-col gap-[5px] w-full">
            <img
              className="relative w-[76.66px] h-[76.66px] ml-[-9.13px]"
              alt="Play button"
              src={video.playIcon}
            />

            <div
              className={`flex items-center gap-2.5 ${video.titleFullWidth ? "w-full" : ""}`}
            >
              <h3
                className={`[font-family:'Lexend',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal] ${video.titleFullWidth ? "flex-1" : "w-fit"}`}
              >
                {video.title}
              </h3>
            </div>

            <div className="flex items-center gap-[5px] px-[5px]">
              <EyeIcon className="w-5 h-5 text-white" />
              <div className="[font-family:'Lexend',Helvetica] font-normal text-base">
                <span className="text-[#ff6299]">Views</span>
                <span className="text-white"> {video.views}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
