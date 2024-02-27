"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Emily D.",
    quote:
      "Express emotions effortlessly. Beyond Letter connects me with my future self—simple, powerful, recommended!",
  },
  {
    name: "Alex P.",
    quote:
      "Secure, intuitive, personal. Beyond Letter is my time capsule, sending messages to my future self with just a few clicks.",
  },
  {
    name: "Sophia M.",
    quote:
      "Beyond Letter adds depth to self-reflection. Emotional messages, an inspirational vibe—a must-have for self-expression and growth.",
  },
  {
    name: "Nathan H.",
    quote:
      "Exceptional blend of emotion and inspiration. Beyond Letter is therapeutic, with surprises in every message from my past self.",
  },
  {
    name: "Olivia G.",
    quote:
      "Beyond Letter: a journey through time and emotions. My go-to for expressing gratitude, setting goals, and sending love to my future self.",
  },
  {
    name: "Matthew S.",
    quote:
      "Beyond Letter: a daily ritual for reflection and goal-setting. A beautifully designed space for creating timeless messages of inspiration.",
  },
];
