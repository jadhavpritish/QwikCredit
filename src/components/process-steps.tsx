"use client";

import { FileText, CheckCircle, Banknote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description: "Fill simple form in 2 minutes with basic details",
  },
  {
    icon: CheckCircle,
    title: "Instant Approval",
    description: "Get approved within 5 minutes with our AI-powered system",
  },
  {
    icon: Banknote,
    title: "Receive Money",
    description: "Amount credited directly to your bank account instantly",
  },
];

export default function ProcessSteps() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            How It Works
          </h2>
          <p className="text-[#B3B3B3] text-sm md:text-base max-w-2xl mx-auto">
            Get your loan in three simple steps. Fast, secure, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`bg-[#1E1E1E] rounded-2xl p-6 border border-white/5 hover:border-[#CCA43B]/30 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#CCA43B]/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#CCA43B]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-[#B3B3B3] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-[#CCA43B]/40 text-4xl font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}