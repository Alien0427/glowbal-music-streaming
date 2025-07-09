import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const NavigationSection = (): JSX.Element => {
  // Category data for mapping
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
          <span className="font-normal text-white text-lg font-['Lexend',Helvetica]">
            SearchIcon Videos
          </span>
          <SearchIcon className="w-[16.77px] h-[17.27px] text-[#00d6eb]" />
        </div>
      </CardContent>

      <CardContent className="p-0">
        <div className="flex flex-wrap items-center gap-[18px]">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className={`px-7 py-3 rounded-[7px] border-[0.75px] border-solid ${
                category.active
                  ? "bg-[#ff6299] text-white font-semibold border-[#ff6299]"
                  : "bg-black text-[#717171] font-normal border-[#ff6299]"
              } shadow-[0px_4px_44px_#00000024]`}
            >
              <span className="text-[15px] font-['Lexend',Helvetica]">
                {category.name}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
