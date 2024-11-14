"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "MGM",
        designation: "Software Engineer",
        image: "",
    },
    {
        id: 2,
        name: "AM",
        designation: "Product Manager",
        image: "",
    },
];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
