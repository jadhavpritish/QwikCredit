"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StickyCTAProps {
  onCtaClick?: () => void;
}

export default function StickyCTA({ onCtaClick }: StickyCTAProps = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#121212]/95 backdrop-blur-lg border-t border-white/10 p-4 shadow-2xl">
        <Button
          onClick={onCtaClick}
          variant="gradient"
          className="w-full font-semibold py-6 h-auto rounded-full"
        >
          Apply Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}