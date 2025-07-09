import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Footer navigation links data
  const footerLinks = [
    { title: "Privacy", href: "#" },
    { title: "Terms", href: "#" },
    { title: "DMCA", href: "#" },
    { title: "EULA", href: "#" },
    { title: "Raffle T&C", href: "#" },
  ];

  // Social media icons data
  const socialIcons = [
    {
      icon: <FacebookIcon className="w-5 h-5" />,
      href: "#",
      label: "Facebook",
    },
    { icon: <YoutubeIcon className="w-5 h-5" />, href: "#", label: "Youtube" },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "#",
      label: "Linkedin",
    },
    { icon: <TwitterIcon className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="flex flex-col w-full items-start justify-center bg-black">
      <div className="flex items-center justify-between px-[69px] py-[31px] w-full">
        {/* Logo */}
        <div className="flex items-center">
          <div className="hiphop-logo">
            HIP HOP <span className="boombox">BOOM BOX</span>
          </div>
        </div>

        {/* Navigation and Social Links */}
        <div className="flex flex-col items-end justify-center gap-[19px]">
          {/* Footer Navigation Links */}
          <nav className="flex flex-col items-start gap-2">
            <ul className="flex items-start gap-[30px]">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="w-fit mt-[-1.00px] font-['Lexend',Helvetica] font-normal text-white text-base"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center">
            <div className="flex items-center gap-2.5">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator className="bg-[#272727]" />

      {/* Copyright */}
      <div className="flex items-center justify-center py-5 w-full">
        <p className="font-['Lexend',Helvetica] font-normal text-gray-300 text-sm text-center">
          All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;Hiphopboombox
        </p>
      </div>
    </footer>
  );
};
