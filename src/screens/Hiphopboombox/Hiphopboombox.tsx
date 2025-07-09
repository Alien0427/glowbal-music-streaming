import React, { useState } from "react";
import { SearchIcon, PlayIcon, EyeIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarImage } from "../../components/ui/avatar";

export const Hiphopboombox = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("Entertainment");
  const [currentPage, setCurrentPage] = useState(1);

  // Navigation menu items
  const navItems = [
    { label: "App Store", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Advertise", href: "#" },
    { label: "News", href: "#" },
  ];

  // Category buttons
  const categories = [
    "Entertainment",
    "Eye Candy", 
    "Cheating",
    "Fight",
    "Comedy",
    "Sports"
  ];

  // Video data with exact titles from the image
  const videos = [
    {
      id: 1,
      title: "Destroyed Him",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
    {
      id: 2,
      title: "Does she have a point?",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
    {
      id: 3,
      title: "Was he wrong?",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
    {
      id: 4,
      title: "Check out Jim Jones summer jam performance",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
    {
      id: 5,
      title: "Powerslap",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/163403/boxing-boxer-sports-163403.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
    {
      id: 6,
      title: "Pause",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
    {
      id: 7,
      title: "Pusha explains his travis scott dis",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
    {
      id: 8,
      title: "Your 3rd what?",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
    {
      id: 9,
      title: "He won't do that again",
      views: 33,
      thumbnail: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=358&h=264&fit=crop",
    },
  ];

  const handleVideoClick = (videoId: number) => {
    console.log(`Playing video ${videoId}`);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-['Lexend',Helvetica] overflow-x-hidden">
      {/* Background gradients - positioned exactly as in Frame 22 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[771px] h-[732px] top-[120px] left-0 rounded-[385.5px/366px] opacity-29" 
             style={{
               background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,98,153,0.29) 0%, rgba(255,255,255,0) 100%)'
             }} />
        <div className="absolute w-[771px] h-[732px] top-0 left-[323px] rounded-[385.5px/366px] opacity-29"
             style={{
               background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,214,235,0.29) 0%, rgba(255,255,255,0) 100%)'
             }} />
      </div>

      <div className="relative z-10 w-full max-w-[1148px] mx-auto px-4">
        {/* Header Navigation - exact Frame 22 layout */}
        <header className="flex items-center justify-between py-4 mb-6">
          {/* Logo - using text version to match Frame 22 exactly */}
          <div className="flex items-center">
            <div className="hiphop-logo">
              HIP HOP <span className="boombox">BOOM BOX</span>
            </div>
          </div>

          {/* Navigation Menu - exact styling from Frame 22 */}
          <div className="flex items-center border border-[#4c4c4c] rounded-[7px] bg-[#1a1a1a]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="inline-flex items-center justify-center px-6 py-2 text-sm text-[#cacaca] font-normal hover:text-white hover:bg-[#2a2a2a] transition-colors first:rounded-l-[7px] last:rounded-r-[7px]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Flags - Frame 22 style */}
          <div className="flex items-center gap-[7px]">
            <div className="w-6 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-sm flex items-center justify-center text-[8px] font-bold text-white">US</div>
            <div className="w-6 h-4 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 rounded-sm flex items-center justify-center text-[8px] font-bold text-white">ES</div>
          </div>

          {/* User Avatar */}
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" alt="User" />
          </Avatar>
        </header>

        {/* Search and Filter Section - Frame 22 exact styling */}
        <div className="mb-8">
          <div className="w-full bg-[rgba(0,0,0,0.61)] rounded-[10px] p-4 space-y-4">
            {/* Search Bar with "1148 x 50 Hug" indicator */}
            <div className="relative">
              <div className="flex items-center justify-between px-6 py-3 bg-[#272727] rounded-[7px] shadow-[0px_4px_44px_rgba(0,0,0,0.14)]">
                <span className="text-white text-base font-normal">Search Videos</span>
                <SearchIcon className="w-4 h-4 text-[#00d6eb]" />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-5 py-2 rounded-[7px] border-[0.75px] border-solid border-[#ff6299] text-sm font-['Lexend',Helvetica] shadow-[0px_4px_44px_rgba(0,0,0,0.14)] transition-all hover:scale-105 ${
                    activeCategory === category
                      ? "bg-[#ff6299] text-white font-semibold"
                      : "bg-black text-[#717171] font-normal hover:bg-[#ff6299] hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Entertainment Section Header */}
        <div className="flex flex-col items-start mb-6">
          <h2 className="text-2xl font-semibold text-white tracking-[0] leading-normal">
            Entertainment
          </h2>
          <p className="text-base font-normal text-[#ff6299] tracking-[0] leading-normal">
            475 Videos
          </p>
        </div>

        {/* Video Grid - exact 3x3 layout from Frame 22 */}
        <div className="grid grid-cols-3 gap-[35px] mb-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col w-full aspect-[358/264] items-start justify-end gap-[5px] p-4 rounded-[10px] cursor-pointer group relative overflow-hidden"
              onClick={() => handleVideoClick(video.id)}
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), url(${video.thumbnail}) 50% 50% / cover`,
              }}
            >
              {/* Hover Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <PlayIcon className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[5px] w-full relative z-10">
                {/* Play Icon */}
                <div className="w-16 h-16 mb-2">
                  <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <PlayIcon className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-center justify-center">
                  <h3 className="font-bold text-white text-base text-center tracking-[0] leading-normal">
                    {video.title}
                  </h3>
                </div>

                {/* Views */}
                <div className="flex items-center justify-center gap-[5px]">
                  <EyeIcon className="w-4 h-4 text-white" />
                  <div className="font-normal text-sm text-center tracking-[0] leading-normal">
                    <span className="text-[#ff6299]">Views</span>
                    <span className="text-white"> {video.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - exact styling from Frame 22 */}
        <div className="flex justify-center py-6">
          <div className="flex items-center gap-[5px]">
            {/* Pagination dots matching Frame 22 */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-[#00d6eb] rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Footer - exact styling from Frame 22 */}
        <footer className="flex flex-col w-full items-start justify-center bg-black rounded-t-lg mt-8">
          <div className="flex items-center justify-between px-12 py-6 w-full">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <div className="text-2xl font-bold leading-none">
                <span className="bg-gradient-to-r from-[#ff1493] via-[#ff6299] to-[#ff1493] bg-clip-text text-transparent">HIP HOP</span>
                <span className="bg-gradient-to-r from-[#00bfff] via-[#00d6eb] to-[#00bfff] bg-clip-text text-transparent ml-2">BOOM BOX</span>
              </div>
            </div>

            {/* Navigation and Social Links */}
            <div className="flex flex-col items-end justify-center gap-4">
              {/* Footer Navigation Links */}
              <nav className="flex items-center gap-6">
                {["Privacy", "Terms", "DMCA", "EULA", "Raffle T&C"].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-['Lexend',Helvetica] font-normal text-white text-sm hover:text-[#ff6299] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {["📘", "📺", "📷", "💼", "🐦"].map((icon, index) => (
                  <a key={index} href="#" className="text-white text-lg hover:text-[#00d6eb] transition-colors">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Separator line */}
          <div className="w-full h-px bg-[#272727]" />

          {/* Copyright section */}
          <div className="flex items-center justify-center py-4 w-full bg-black">
            <p className="font-['Lexend',Helvetica] font-normal text-gray-300 text-sm text-center">
              All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;Hiphopboombox
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};