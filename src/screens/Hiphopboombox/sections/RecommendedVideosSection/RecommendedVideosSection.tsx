import { EyeIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const RecommendedVideosSection = (): JSX.Element => {
  // Video data for mapping
  const recommendedVideos = [
    {
      id: 1,
      title: "Pusha explains his travis scott dis",
      views: 33,
      backgroundImage: "url(..//frame-12-5.png)",
      playIcon: "/play-circle-6.png",
    },
    {
      id: 2,
      title: "Your 3rd what?",
      views: 33,
      backgroundImage: "url(..//frame-13-5.png)",
      playIcon: "/play-circle-7.png",
    },
    {
      id: 3,
      title: "He won't do that again",
      views: 33,
      backgroundImage: "url(..//frame-14-3.png)",
      playIcon: "/play-circle-8.png",
    },
  ];

  return (
    <div className="flex items-center gap-[35px] w-full">
      {recommendedVideos.map((video) => (
        <Card
          key={video.id}
          className={`w-[358px] h-[264px] rounded-[10px] overflow-hidden relative p-0 border-0`}
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), ${video.backgroundImage} 50% 50% / cover`,
          }}
        >
          <CardContent className="flex flex-col h-full items-start justify-end gap-[5px] p-[15px]">
            <img
              className="relative w-[76.66px] h-[76.66px] ml-[-9.13px]"
              alt="Play button"
              src={video.playIcon}
            />

            <div className="inline-flex items-center justify-center gap-2.5">
              <h3 className="font-bold text-white text-lg [font-family:'Lexend',Helvetica]">
                {video.title}
              </h3>
            </div>

            <div className="inline-flex items-center justify-center gap-[5px] px-[5px]">
              <EyeIcon className="w-5 h-5 text-white" />
              <div className="[font-family:'Lexend',Helvetica] font-normal text-base">
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
