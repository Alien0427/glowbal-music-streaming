import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterLinksSection = (): JSX.Element => {
  // Footer navigation links
  const footerLinks = [
    { title: "Privacy", href: "#" },
    { title: "Terms", href: "#" },
    { title: "DMCA", href: "#" },
    { title: "EULA", href: "#" },
    { title: "Raffle T&C", href: "#" },
  ];

  // Social media icons with their respective links
  const socialIcons = [
    {
      icon: <FacebookIcon className="w-5 h-5" />,
      href: "#",
      label: "Facebook",
    },
    { icon: <YoutubeIcon className="w-5 h-5" />, href: "#", label: "YouTube" },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "#",
      label: "LinkedIn",
    },
    { icon: <TwitterIcon className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="flex flex-col w-full items-start justify-center bg-black">
      <div className="flex items-center justify-between px-[69px] py-[31px] relative self-stretch w-full">
        {/* Logo */}
        <div className="flex flex-col items-start gap-5">
          <img
            className="w-[347px] h-[50px] object-cover"
            alt="Hip Hop Boom Box Logo"
            src="/image-1-3.png"
          />
        </div>

        {/* Navigation and Social Links */}
        <div className="flex flex-col items-end justify-center gap-[19px]">
          {/* Footer Navigation Links */}
          <nav className="flex flex-col items-start gap-2">
            <div className="flex items-start gap-[30px]">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-fit mt-[-1.00px] font-['Lexend',Helvetica] font-normal text-white text-base"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center">
            <div className="flex items-start gap-[30px]">
              <div className="w-[140px] h-5">
                <div className="inline-flex items-center gap-2.5">
                  {socialIcons.map((social, index) => (
                    <a key={index} href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator line */}
      <Separator className="bg-[#272727]" />

      {/* Copyright section */}
      <div className="flex items-center justify-center gap-2.5 px-2.5 py-5 w-full bg-black">
        <p className="w-fit mt-[-1.00px] font-['Lexend',Helvetica] font-normal text-gray-300 text-sm text-center">
          All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;Hiphopboombox
        </p>
      </div>
    </footer>
  );
};
