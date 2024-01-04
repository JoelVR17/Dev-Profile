import Image from "next/image";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";

interface Props {
  src: string;
  title: string;
  description: string;
  icons: string[];
  link: boolean;
}

const ProjectCard = ({ src, title, description, icons, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {!link ? (
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      ) : (
        <a href="https://github.com/JoelVR17/Favorite_Videos">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain h-full"
          />
        </a>
      )}

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white mb-5">{title}</h1>
        <p className="mt-2 text-gray-300 mb-5">{description}</p>
        <div className="flex justify-center gap-10 mb-3">
          {icons.map((icon, index) => (
            <SkillDataProvider
              key={index}
              src={icon}
              width={35}
              height={35}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
