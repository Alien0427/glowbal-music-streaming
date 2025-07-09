import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const VideoPlayerSection = (): JSX.Element => {
  // Category data for the filter buttons
  const categories = [
    { name: "Entertainment", active: true },
    { name: "Eye Candy", active: false },
    { name: "Cheating", active: false },
    { name: "Fight", active: false },
    { name: "Comedy", active: false },
    { name: "Sports", active: false },
  ];

  return (
    <Card className="w-full bg-[#0000009c] rounded-[10px] p-5 space-y-[18px]">
      <CardContent className="p-0">
        <div className="flex items-center justify-between px-[30px] py-[17px] bg-[#272727] rounded-[7px] shadow-[0px_4px_44px_#00000024]">
          <div className="font-normal text-white text-lg">
            SearchIcon Videos
          </div>
          <SearchIcon className="w-[16.77px] h-[17.27px] text-[#00d6eb]" />
        </div>

        <div className="flex flex-wrap items-center gap-[18px] mt-[18px]">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`px-7 py-3 rounded-[7px] border-[0.75px] border-solid shadow-[0px_4px_44px_#00000024] ${
                category.active
                  ? "bg-[#ff6299] border-[#ff6299]"
                  : "bg-black border-[#ff6299]"
              }`}
            >
              <span
                className={`text-[15px] font-${category.active ? "semibold" : "normal"} ${
                  category.active ? "text-white" : "text-[#717171]"
                }`}
              >
                {category.name}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
