"use client";

import React from "react";
import SkillDataProvider from "./SkillDataProvider";

const Experience = () => {
  return (
    <div>
      <section className="text-gray-400 bg-[#030014] body-font overflow-hidden">
        <h1 className="text-[50px] text-white font-bold mt-[10px] text-center mb-5">
          Educational History
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            {/* EDUCATION */}
            <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Fidélitas University
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  June 2020 - December 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Engineer Systems Degree
                </h2>
                <p className="leading-relaxed">
                  I obtained my Systems Engineering degree from Fidélitas
                  University, where I acquired specialized skills in the design,
                  development and maintenance of computer systems. Participating
                  in hands-on projects that gave me hands-on experience and
                  application of knowledge in real-world settings
                </p>
                <a
                  className="text-purple-400 inline-flex items-center mt-4"
                  href="https://www.linkedin.com/school/ufidelitas/"
                  target="_blank"
                >
                  University
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Centro Cultural Costarricense Norteamericano
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  January 2024 - June 2025
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  B2 Intensive English
                </h2>
                <p className="leading-relaxed">
                  Currently improving my English language skills to enhance my
                  communication abilities in a professional setting.
                </p>
                <a
                  className="text-purple-400 inline-flex items-center mt-4"
                  href="https://www.centrocultural.cr"
                  target="_blank"
                >
                  Academy
                  <svg
                    className="w-4 h-4 ml-2 mb-10"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <h1 className="text-[50px] text-white font-bold mt-[30px] text-center mb-5">
              Work Experience
            </h1>
            {/* Trustless Work */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Trustless Work
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  July 2024 - Present
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Co-Founder & Tech Lead | Frontend Developer | Developer
                  Experience Engineer
                </h2>
                <p className="leading-relaxed">
                  • Lead strategic growth, engaging investors and clients,
                  driving partnerships, and shaping the go-to-market strategy to
                  scale adoption. <br />• Define product vision, aligning
                  business goals with technical execution across frontend,
                  backend, and smart contract layers. <br />
                  • Build responsive and high-performance interfaces, ensuring
                  smooth UX, accessibility, and scalability. <br />• Develop
                  SDKs to abstract integration complexity, enabling faster and
                  cleaner adoption for developers.
                </p>
                <div className="text-purple-400 inline-flex items-center mt-10">
                  Tools
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <div className="mx-10 flex gap-5">
                    <SkillDataProvider
                      src="/next.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/ts.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/stellar.svg"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/tailwind.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/firebase.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* GrantFox */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  GrantFox
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  March 2025 - Present
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Founder | Full-Stack Developer
                </h2>
                <p className="leading-relaxed">
                  • Launched and led GrantFox, an OSS hub for contributions and
                  UX testing bounties before market release. <br />
                  • Defined product vision, built the core team, and drove early
                  growth and partnerships. <br />• Built and maintained core
                  features across the stack, iterating rapidly based on user and
                  contributor feedback.
                </p>
                <div className="text-purple-400 inline-flex items-center mt-10">
                  Tools
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <div className="mx-10 flex gap-5">
                    <SkillDataProvider
                      src="/next.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/node-js.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/supabase.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/ts.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Only Dust */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Only Dust
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  June 2024 - October 2025
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Maintainer & Open Source Contributor
                </h2>
                <p className="leading-relaxed">
                  • Managed contributions and reviewed code through structured
                  workflows to ensure quality and consistency across projects.{" "}
                  <br />
                  • Implemented new features and resolved issues in Next.js
                  applications, including Web3 integrations. <br />• Applied
                  code standards and review processes to improve maintainability
                  and collaboration.
                </p>
                <div className="text-purple-400 inline-flex items-center mt-10">
                  Tools
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <div className="mx-10 flex gap-5">
                    <SkillDataProvider
                      src="/next.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/react.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/tailwind.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Agora Partnerships */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Agora Partnerships
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  September 2024 - December 2024
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Frontend Semi Senior
                </h2>
                <p className="leading-relaxed">
                  • Developed React-based web applications with a focus on
                  performance and scalability. <br />• Designed responsive and
                  user-centric interfaces using Figma. <br />• Collaborated
                  effectively within teams, ensuring clear communication and
                  timely delivery.
                </p>
                <div className="text-purple-400 inline-flex items-center mt-10">
                  Tools
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <div className="mx-10 flex gap-5">
                    <SkillDataProvider
                      src="/react.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/ts.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/figma.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ROLOSA */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  ROLOSA
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  October 2022 - July 2024
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Full-Stack Developer
                </h2>
                <p className="leading-relaxed">
                  • Developed new features based on client requirements. <br />•
                  Integrated APIs and external services to enhance platform
                  functionality.
                </p>
                <div className="text-purple-400 inline-flex items-center mt-10">
                  Tools
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <div className="mx-10 flex gap-5">
                    <SkillDataProvider
                      src="/react.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="/js.png"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/html5/html5-original.svg"
                      width={33}
                      height={33}
                      index={0}
                    />
                    <SkillDataProvider
                      src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/css3/css3-original.svg"
                      width={33}
                      height={33}
                      index={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
