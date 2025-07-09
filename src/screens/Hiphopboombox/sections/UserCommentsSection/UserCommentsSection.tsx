import { EyeIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const UserCommentsSection = (): JSX.Element => {
  // Video card data for mapping
  const videoCards = [
    {
      id: 1,
      title: "Pusha explains his travis scott dis",
      views: 33,
      backgroundImage: "url(..//frame-12-5.png)",
      playIconSrc: "/play-circle-15.png",
    },
    {
      id: 2,
      title: "Your 3rd what?",
      views: 33,
      backgroundImage: "url(..//frame-13-5.png)",
      playIconSrc: "/play-circle-16.png",
    },
    {
      id: 3,
      title: "He won't do that again",
      views: 33,
      backgroundImage: "url(..//frame-14-3.png)",
      playIconSrc: "/play-circle-17.png",
    },
  ];

  return (
    <div className="flex items-center gap-[35px]">
      {videoCards.map((card) => (
        <Card
          key={card.id}
          className="w-[358px] h-[264px] rounded-[10px] overflow-hidden border-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), ${card.backgroundImage} 50% 50% / cover`,
          }}
        >
          <CardContent className="flex flex-col h-full items-start justify-end gap-[5px] p-[15px]">
            <img
              className="relative w-[76.66px] h-[76.66px] ml-[-9.13px]"
              alt="Play circle"
              src={card.playIconSrc}
            />

            <div className="inline-flex items-center justify-center gap-2.5">
              <h3 className="font-bold text-white text-lg text-center tracking-[0] leading-normal font-['Lexend',Helvetica]">
                {card.title}
              </h3>
            </div>

            <div className="inline-flex items-center justify-center gap-[5px] px-[5px]">
              <EyeIcon className="w-5 h-5 text-white" />
              <div className="font-normal text-base text-center tracking-[0] leading-normal font-['Lexend',Helvetica]">
                <span className="text-[#ff6299]">Views</span>
                <span className="text-white"> {card.views}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
