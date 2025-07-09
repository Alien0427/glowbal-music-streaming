import { EyeIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const VideoGridSection = (): JSX.Element => {
  // Video data for mapping
  const videos = [
    {
      id: 1,
      title: "Destroyed Him",
      views: 33,
      backgroundImage: "url(..//frame-12-3.png)",
      playIcon: "/play-circle-9.png",
    },
    {
      id: 2,
      title: "Does she have a point?",
      views: 33,
      backgroundImage: "url(..//frame-13-3.png)",
      playIcon: "/play-circle-10.png",
    },
    {
      id: 3,
      title: "Was he wrong?",
      views: 33,
      backgroundImage: "url(..//different-colour-please-1.png)",
      playIcon: "/play-circle-11.png",
    },
  ];

  return (
    <div className="flex items-center gap-[35px]">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="w-[358px] h-[264px] rounded-[10px] overflow-hidden border-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), ${video.backgroundImage} 50% 50% / cover`,
          }}
        >
          <CardContent className="flex flex-col h-full items-start justify-end gap-[5px] p-[15px]">
            <img
              className="w-[76.66px] h-[76.66px] ml-[-9.13px]"
              alt="Play button"
              src={video.playIcon}
            />

            <div className="inline-flex items-center justify-center gap-2.5">
              <div className="w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-[normal]">
                {video.title}
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-[5px] px-[5px] py-0">
              <EyeIcon className="w-5 h-5 text-white" />
              <div className="w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]">
                <span className="text-[#ff6299]">Views</span>
                <span className="text-white"> {video.views}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
