"use client";

import React, { useState } from "react";
import { workExperiences } from "./works-data";

export default function WorkExperienceTimeline() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="min-h-screen px-6 py-20 sm:px-8">
            <div className="mx-auto max-w-2xl">

                {/* ── Header ── */}
                <div className="mb-16">
                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
                        Career &amp; Experience
                    </p>
                    <h1 className="font-fraunces text-[clamp(36px,6vw,54px)] font-black leading-[1.1] tracking-[-0.02em] text-foreground">
                        My <em className="italic text-blue-700/60">Work</em>
                        <br />Trip
                    </h1>
                </div>

                {/* ── Timeline ── */}
                <div className="relative pl-7 before:absolute before:left-[6px] before:top-[10px] before:bottom-[10px] before:w-px before:bg-gradient-to-b before:from-foreground/20 before:via-foreground/10 before:to-transparent">
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
                                        absolute -left-7 top-5
                                        flex h-[14px] w-[14px] items-center justify-center
                                        rounded-full border bg-background
                                        transition-[border-color] duration-300
                                        ${isActive ? "border-always-foreground/60" : "border-foreground/20"}
                                    `}
                                >
                                    <span
                                        className={`
                                            block h-[5px] w-[5px] rounded-full
                                            transition-colors duration-300
                                            ${isActive ? "bg-always-foreground/60" : "bg-foreground/30"}
                                        `}
                                    />
                                </div>

                                {/* Card */}
                                <div className="bg-background-second mb-3 rounded-xl border border-foreground/10 px-6 py-6">

                                    {/* Company + Period */}
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <span className="text-[18px] font-normal leading-snug tracking-[-0.01em] text-foreground">
                                            {exp.company}
                                        </span>
                                        <span className="flex-shrink-0 rounded-full border border-foreground/10 bg-footer px-2.5 py-1 text-[11px] text-always-foreground">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Position + Location */}
                                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                        <span className="text-[13px] font-medium tracking-wide text-blue-700">
                                            {exp.position}
                                        </span>
                                        <span className="text-[12px] text-foreground/40">·</span>
                                        <span className="text-[12px] text-foreground/60">
                                            {exp.location}
                                        </span>
                                    </div>

                                    {/* Skills — grid-rows collapse (GPU-friendly, no layout thrash) */}
                                    <div
                                        className={`
                                            grid transition-[grid-template-rows,opacity] duration-300 ease-in-out
                                            ${isActive ? "grid-rows-[1fr] opacity-100 mt-[18px]" : "grid-rows-[0fr] opacity-0 mt-0"}
                                        `}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="mb-4 h-px bg-foreground/10" />
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
                                    </div>

                                    {/* Expand hint */}
                                    <div className="mt-3.5 flex select-none items-center gap-1.5 text-[11px] tracking-[0.05em] text-foreground/60">
                                        <span
                                            className={`
                                                inline-block text-[10px] text-foreground/60
                                                transition-transform duration-300 ease-in-out
                                                ${isActive ? "rotate-180" : "rotate-0"}
                                            `}
                                        >
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
                    <span className="text-[11px] uppercase tracking-[0.12em] text-foreground/40">
                        {workExperiences.length} Perusahaan
                    </span>
                    <div className="h-px flex-1 bg-background-second" />
                </footer>

            </div>
        </section>
    );
}