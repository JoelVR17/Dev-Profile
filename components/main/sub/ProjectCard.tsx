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

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M19.5 3h-6m6 0v6m0-6L10 14.25"
      />
    </svg>
  );
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

      <div className="relative p-4 flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
          <p className="text-gray-300 text-[15px] leading-relaxed">{description}</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400/80 mb-3">
            Stack
          </p>
          <ul className="flex flex-wrap gap-2" role="list">
            {icons.map((icon, index) => (
              <li
                key={`${icon}-${index}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0c0518]/90 ring-1 ring-inset ring-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
              >
                <SkillDataProvider
                  src={icon}
                  width={28}
                  height={28}
                  index={index}
                />
              </li>
            ))}
          </ul>
        </div>

        {(link || urlGithub || twoRepos) && (
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/[0.08]">
            {link && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-violet-500/35 bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-100 transition hover:border-violet-400/50 hover:bg-violet-500/20"
              >
                <ExternalLinkIcon className="h-4 w-4 shrink-0 opacity-90" />
                <span>Live</span>
              </a>
            )}
            {urlGithub && (
              <a
                href={urlGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="relative flex h-7 w-7 shrink-0 items-center justify-center">
                  <SkillDataProvider
                    src="/gitwhite.png"
                    width={24}
                    height={24}
                    index={0}
                  />
                </span>
                <span>Source</span>
              </a>
            )}
            {twoRepos && (
              <a
                href={urlGithub2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="relative flex h-7 w-7 shrink-0 items-center justify-center">
                  <SkillDataProvider
                    src="/gitwhite.png"
                    width={24}
                    height={24}
                    index={0}
                  />
                </span>
                <span>Source 2</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
