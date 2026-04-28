"use client";

import React, { useState } from "react";
import { workExperiences } from "./works-data";


export default function WorkExperienceTimeline() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <>
            <style>{`
        

        /* Vertical timeline line */
        .timeline-track::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 10px;
          bottom: 10px;
          width: 1px;
          background: linear-gradient(to bottom, #3a3532, #2a2725 80%, transparent);
        }

        /* Dot center fill */
        .dot-core::after {
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: #555;
          transition: background 0.3s ease;
        }
        .dot-core.is-active::after { background: #c9b99a; }

        /* Collapse transition */
        .collapse-panel {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          margin-top: 0;
          transition:
            max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            opacity    0.35s ease,
            margin-top 0.35s ease;
        }
        .collapse-panel.open {
          max-height: 500px;
          opacity: 1;
          margin-top: 18px;
        }

        /* Chevron flip */
        .chevron-icon {
          display: inline-block;
          transition: transform 0.35s ease;
        }
        .chevron-icon.open { transform: rotate(180deg); }
      `}</style>

            <section className="min-h-screen  px-6 py-20 sm:px-8">
                <div className="mx-auto max-w-2xl ">

                    {/* ── Header ── */}
                    <div className="mb-16">
                        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#6b6b6b]">
                            Career &amp; Experience
                        </p>
                        <h1 className="font-fraunces text-[clamp(36px,6vw,54px)] font-black leading-[1.1] tracking-[-0.02em] text-foreground">
                            My <em className="italic text-blue-700/60">Work</em>
                            <br />Trip
                        </h1>
                    </div>

                    {/* ── Timeline ── */}
                    <div className="timeline-track relative pl-7">
                        {workExperiences.map((exp, index) => {
                            const isActive = activeId === index;
                            const isLast = index === workExperiences.length - 1;

                            return (
                                <div
                                    key={index}
                                    className={`relative cursor-pointer ${isLast ? "" : "mb-1"}`}
                                    onClick={() => setActiveId(isActive ? null : index)}
                                >
                                    {/* Dot */}
                                    <div
                                        className={`
                      dot-core ${isActive ? "is-active" : ""}
                      absolute -left-7 top-5
                      flex h-[14px] w-[14px] items-center justify-center
                      rounded-full border bg-[#0e0e0e]
                      transition-[border-color] duration-300
                      ${isActive ? "border-[#c9b99a]" : "border-[#3a3532]"}
                    `}
                                    />

                                    {/* Card */}
                                    <div
                                        className={`bg-background-second! 
                      mb-3 rounded-xl border px-6 py-6
                      transition-[border-color,background-color] duration-300
                      ${isActive
                                                ? ""
                                                : ""}
                    `}
                                    >
                                        {/* Company + Period */}
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <span className=" text-[18px] font-normal leading-snug tracking-[-0.01em] text-foreground">
                                                {exp.company}
                                            </span>
                                            <span className="flex-shrink-0 rounded-full border border-[#252525] bg-footer px-2.5 py-1 text-[11px] text-always-foreground">
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Position + Location */}
                                        <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                            <span className="text-[13px] font-medium tracking-wide text-blue-700">
                                                {exp.position}
                                            </span>
                                            <span className="text-[12px] text-foreground">·</span>
                                            <span className="text-[12px] text-foreground/60">
                                                {exp.location}
                                            </span>
                                        </div>

                                        {/* Skills — collapse */}
                                        <div className={`collapse-panel ${isActive ? "open" : ""}`}>
                                            <div className="mb-4 h-px bg-[#1e1e1e]" />
                                            <ul className="flex flex-col gap-2.5">
                                                {exp.skills.map((skill, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-2.5 text-[13px] font-light leading-relaxed text-foreground/70"
                                                    >
                                                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-blue-700" />
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Expand hint */}
                                        <div
                                            className={`
                        mt-3.5 flex select-none items-center gap-1.5
                        text-[11px] tracking-[0.05em]
                        transition-colors duration-200
                        ${isActive ? "text-foreground/60!" : "text-foreground/60!"}
                      `}
                                        >
                                            <span className={`chevron-icon ${isActive ? "open" : ""} text-[10px] text-foreground/60`}>
                                                ▾
                                            </span>
                                            {isActive
                                                ? "Close details"
                                                : `${exp.skills.length} skill · View details`}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ── Footer ── */}
                    <footer className="mt-10 flex items-center gap-4">
                        <div className="h-px flex-1 bg-background-second" />
                        <span className="text-[11px] uppercase tracking-[0.12em] text-foregorund">
                            {workExperiences.length} Perusahaan
                        </span>
                        <div className="h-px flex-1 bg-background-second" />
                    </footer>

                </div>
            </section>
        </>
    );
}