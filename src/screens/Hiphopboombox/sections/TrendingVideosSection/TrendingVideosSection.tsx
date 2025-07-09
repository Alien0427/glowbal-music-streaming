import { EyeIcon, PlayCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TrendingVideosSection = (): JSX.Element => {
  // Video data for mapping
  const trendingVideos = [
    {
      id: 1,
      title: "Check out Jim Jones summer jam performance",
      views: 33,
      backgroundImage: "url(..//frame-12-4.png)",
      titleClassName: "flex-1", // Full width title
      titleAlign: "left",
    },
    {
      id: 2,
      title: "Powerslap",
      views: 33,
      backgroundImage: "url(..//frame-13-4.png)",
      titleClassName: "w-fit", // Width fits content
      titleAlign: "center",
    },
    {
      id: 3,
      title: "Pause",
      views: 33,
      backgroundImage: "url(..//frame-14-2.png)",
      titleClassName: "w-fit", // Width fits content
      titleAlign: "center",
    },
  ];

  return (
    <section className="flex items-center gap-[35px]">
      {trendingVideos.map((video) => (
        <Card
          key={video.id}
          className={`flex flex-col w-[358px] h-[264px] items-start justify-end gap-[5px] p-[15px] rounded-[10px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%),${video.backgroundImage}_50%_50%_/_cover] border-0`}
        >
          <CardContent className="p-0 flex flex-col gap-[5px] w-full">
            <div className="relative ml-[-9.13px]">
              <PlayCircleIcon className="w-[76.66px] h-[76.66px] text-white" />
            </div>

            <div
              className={`flex items-center gap-2.5 w-full ${video.titleAlign === "center" ? "justify-center" : ""}`}
            >
              <div
                className={`${video.titleClassName} mt-[-1.00px] font-['Lexend',Helvetica] font-bold text-white text-lg ${video.titleAlign === "center" ? "text-center" : ""} tracking-[0] leading-[normal]`}
              >
                {video.title}
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-[5px] px-[5px] py-0">
              <EyeIcon className="w-5 h-5 text-white" />
              <div className="w-fit mt-[-1.00px] font-['Lexend',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]">
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
