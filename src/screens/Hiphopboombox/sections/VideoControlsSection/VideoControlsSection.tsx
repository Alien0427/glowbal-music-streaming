import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const VideoControlsSection = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { label: "App Store", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Advertise", href: "#" },
    { label: "News", href: "#" },
  ];

  // Language flags data
  const languageFlags = [
    { code: "US", src: "/flags---us.png", alt: "Flags US" },
    { code: "ES", src: "/flags---es.png", alt: "Flags ES" },
  ];

  return (
    <nav className="flex w-full items-center justify-between py-2">
      {/* Logo */}
      <img
        className="h-[50px] w-auto object-cover"
        alt="Hip Hop Boom Box Logo"
        src="/image-1-3.png"
      />

      {/* Navigation Menu */}
      <div className="flex items-center rounded-[7px] border border-solid border-[#4c4c4c]">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="rounded-[7px] px-7 py-3 font-normal text-lg text-[#cacaca] hover:text-white"
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Language Selection */}
      <div className="flex items-center gap-[7px]">
        {languageFlags.map((flag, index) => (
          <img key={index} className="h-5 w-7" alt={flag.alt} src={flag.src} />
        ))}
      </div>

      {/* User Avatar */}
      <Avatar className="h-12 w-12">
        <AvatarImage src="/ellipse-4-1.png" alt="User Profile" />
      </Avatar>
    </nav>
  );
};
