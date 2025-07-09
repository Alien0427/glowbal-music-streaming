import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

export const SearchSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "App Store", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Advertise", href: "#" },
    { label: "News", href: "#" },
  ];

  return (
    <nav className="flex w-full items-center justify-between py-3">
      {/* Logo */}
      <img
        className="h-[50px] w-auto object-cover"
        alt="Hip Hop Boom Box Logo"
        src="/image-1-3.png"
      />

      {/* Navigation Menu */}
      <div className="flex items-center rounded-[7px] border border-solid border-[#4c4c4c]">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="inline-flex items-center justify-center px-7 py-3 rounded-[7px] hover:bg-[#2a2a2a] transition-colors"
          >
            <span className="font-['Lexend',Helvetica] text-lg text-[#cacaca] font-normal">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* Language Selection */}
      <div className="flex items-center gap-[7px]">
        <img className="w-7 h-5" alt="US Flag" src="/flags---us-1.svg" />
        <img className="w-7 h-5" alt="ES Flag" src="/flags---es-1.svg" />
      </div>

      {/* User Avatar */}
      <Avatar className="h-12 w-12">
        <AvatarImage src="/ellipse-4-1.png" alt="User Profile" />
      </Avatar>
    </nav>
  );
};
