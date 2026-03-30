"use client";

import Image from "next/image";
import React from "react";

function HonorBrandRow({
  logoSrc,
  logoAlt,
  title,
}: {
  logoSrc: string;
  logoAlt: string;
  title: string;
}) {
  return (
    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex items-center gap-4">
      <div className="relative h-[52px] w-[52px] shrink-0 rounded-xl overflow-hidden bg-[#0a0618] ring-1 ring-[#7042f861] shadow-[0_0_28px_-10px_rgba(112,66,248,0.45)]">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={52}
          height={52}
          className="h-full w-full object-cover"
        />
      </div>
      <span className="font-semibold title-font text-white leading-snug">
        {title}
      </span>
    </div>
  );
}

const HonorsAwards = () => {
  return (
    <section
      className="text-gray-400 bg-[#030014] body-font overflow-hidden"
      id="honors"
    >
      <h1 className="text-[50px] text-white font-bold mt-[10px] text-center mb-5">
        Honors &amp; Awards
      </h1>
      <div className="container px-5 py-12 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          {/* Trustless Work */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <HonorBrandRow
              logoSrc="/tw.ico"
              logoAlt="Trustless Work"
              title="Trustless Work"
            />
            <div className="md:flex-grow">
              <p className="leading-relaxed">
                • Co-Founder and Tech Lead, securing $220K in milestone-based
                funding at a $2M valuation after validating product vision,
                go-to-market strategy, and ecosystem impact.
                <br />
                • Reached final stage at 500 LatAm Silicon Valley and Berkeley
                SkyDeck, ranking among the top ~1%–3% of startups in highly
                competitive global selection processes.
                <br />
                • Participated in Draper x Stellar incubation and Astro Hacker
                House (Silicon Valley), collaborating with founders, investors,
                and engineers.
                <br />• Led a multidisciplinary team of 18+ professionals for
                Corporación Interactuar, delivering outcomes aligned with
                organizational goals.
              </p>
            </div>
          </div>

          {/* GrantFox */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <HonorBrandRow
              logoSrc="/gf.png"
              logoAlt="GrantFox"
              title="GrantFox"
            />
            <div className="md:flex-grow">
              <p className="leading-relaxed">
                • Founder and Tech Lead, securing $90K in milestone-based
                funding after validating product vision, go-to-market strategy,
                and ecosystem impact.
                <br />
                • Led platform architecture and development using Next.js,
                NestJS, Supabase, Prisma, and PostgreSQL, building systems
                connecting open-source contributors with projects and
                maintainers in the Stellar ecosystem.
                <br />
                • Represented GrantFox internationally (Mexico, Colombia,
                Brazil), engaging with ecosystem stakeholders, developers, and
                mentors to refine product and strategy.
                <br />• Led a cross-functional team to launch a beta product,
                reaching 600+ users and onboarding 150+ GitHub organizations,
                validating early product-market fit.
              </p>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                Awards &amp; Recognition
              </span>
            </div>
            <div className="md:flex-grow">
              <p className="leading-relaxed">
                • Mentor at Hackathon Alebrije (Mexico), supporting teams in
                product, technical direction, and go-to-market strategy.
                <br />
                • 1st place winner at a major hackathon in Mexico for
                innovation and execution.
                <br />• Top winner at Meridian Hackathon 2025 (Brazil),
                competing against international Web3 teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonorsAwards;
