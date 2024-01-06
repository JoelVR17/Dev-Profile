"use client";

import Image from "next/image";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";

interface Props {
  src: string;
  title: string;
  description: string;
  icons: string[];
  link: boolean;
  url: string;
  urlGithub: string;
  twoRepos: boolean;
  urlGithub2: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  icons,
  link,
  url,
  urlGithub,
  twoRepos,
  urlGithub2,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white mb-5">{title}</h1>
        <p className="mt-2 text-gray-300 mb-5">{description}</p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 px-5 my-2 place-items-center">
          {icons.map((icon, index) => (
            <React.Fragment key={index}>
              <SkillDataProvider
                key={index}
                src={icon}
                width={35}
                height={35}
                index={index}
              />
            </React.Fragment>
          ))}
          {link && (
            <div className="relative z-10">
              <a href={url} target="_blank">
                <span className="text-white inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-8 h-8 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </span>
              </a>
            </div>
          )}
          <div className="relative z-10">
            <a href={urlGithub} target="_blank">
              <SkillDataProvider
                src="/gitwhite.png"
                width={33}
                height={33}
                index={0}
              />
            </a>
          </div>
          {twoRepos && (
            <div className="relative z-10">
              <a href={urlGithub2} target="_blank">
                <SkillDataProvider
                  src="/gitwhite.png"
                  width={33}
                  height={33}
                  index={0}
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
