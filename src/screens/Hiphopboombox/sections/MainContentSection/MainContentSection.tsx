import { EyeIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Video card data for mapping
  const videoCards = [
    {
      id: 1,
      title: "Destroyed Him",
      backgroundImage: "url(..//frame-12-3.png)",
      playButtonSrc: "/play-circle.png",
      viewCount: 33,
    },
    {
      id: 2,
      title: "Does she have a point?",
      backgroundImage: "url(..//frame-13-3.png)",
      playButtonSrc: "/play-circle-1.png",
      viewCount: 33,
    },
    {
      id: 3,
      title: "Was he wrong?",
      backgroundImage: "url(..//different-colour-please-1.png)",
      playButtonSrc: "/play-circle-2.png",
      viewCount: 33,
    },
  ];

  return (
    <section className="flex items-center gap-[35px]">
      {videoCards.map((card) => (
        <Card
          key={card.id}
          className="flex flex-col w-[358px] h-[264px] items-start justify-end gap-[5px] p-[15px] rounded-[10px] overflow-hidden"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), ${card.backgroundImage} 50% 50% / cover`,
          }}
        >
          <CardContent className="p-0 flex flex-col gap-[5px] w-full">
            <img
              className="w-[76.66px] h-[76.66px] ml-[-9.13px]"
              alt="Play button"
              src={card.playButtonSrc}
            />

            <div className="flex items-center justify-center gap-2.5">
              <h3 className="w-fit mt-[-1.00px] font-['Lexend',Helvetica] font-bold text-white text-lg text-center leading-normal">
                {card.title}
              </h3>
            </div>

            <div className="flex items-center justify-center gap-[5px] px-[5px]">
              <EyeIcon className="w-5 h-5 text-white" />
              <p className="w-fit mt-[-1.00px] font-['Lexend',Helvetica] font-normal text-base text-center leading-normal">
                <span className="text-[#ff6299]">Views</span>
                <span className="text-white"> {card.viewCount}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
