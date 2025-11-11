"use client";

import { Button } from "@/components/ui/button";
import LoanCalculator from "./loan-calculator";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const scenarios = [
  {
    id: "wedding",
    title: "Wedding Season Survivor",
    emoji: "💍",
    amount: 75000,
    tenure: 12,
    description: "Shaadi ka season hai boss"
  },
  {
    id: "gadget",
    title: "Gadget Upgrade Warrior",
    emoji: "📱",
    amount: 50000,
    tenure: 6,
    description: "New iPhone who dis?"
  },
  {
    id: "emergency",
    title: "Emergency Fund Hero",
    emoji: "🚨",
    amount: 100000,
    tenure: 18,
    description: "Life happens, we got you"
  },
  {
    id: "celebration",
    title: "Celebration Champion",
    emoji: "🎉",
    amount: 40000,
    tenure: 9,
    description: "Party toh banti hai"
  }
];

export default function HeroSection({ onCtaClick }: HeroSectionProps = {}) {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  const handleScenarioClick = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    // Scroll to calculator
    setTimeout(() => {
      document.getElementById('calculator-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  };

  const selectedScenarioData = scenarios.find(s => s.id === selectedScenario);

  return (
    <section className="min-h-screen bg-[#121212] relative overflow-hidden pb-8">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CCA43B]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-10 space-y-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We're Not Your Rich Uncle.
              <br />
              <span className="text-[#CCA43B]">But We're Faster.</span>
            </h1>
            <p className="text-sm md:text-base text-[#B3B3B3] max-w-2xl mx-auto">
              No judgement. No lectures. Just money when you need it.
              <br />
              <span className="text-xs text-[#808080]">Faster than your friend replies to "lunch karega?"</span>
            </p>
          </div>

          {/* Scenario Cards */}
          <div className="mb-10">
            <h2 className="text-center text-[#B3B3B3] text-base mb-5 font-medium">
              Choose Your Financial Villain 👇
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {scenarios.map((scenario) => {
                const isSelected = selectedScenario === scenario.id;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => handleScenarioClick(scenario.id)}
                    className={`bg-[#1E1E1E] rounded-xl p-4 md:p-5 transition-all duration-300 hover:scale-105 hover:bg-[#252525] border-2 ${
                      isSelected 
                        ? 'border-[#CCA43B] shadow-lg shadow-[#CCA43B]/20' 
                        : 'border-transparent'
                    }`}
                  >
                    <div className="text-3xl mb-2">{scenario.emoji}</div>
                    <h3 className="text-white font-semibold text-xs md:text-sm mb-1">
                      {scenario.title}
                    </h3>
                    <p className="text-[#808080] text-xs">
                      {scenario.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calculator */}
          <div id="calculator-section" className="mb-10">
            <LoanCalculator 
              defaultAmount={selectedScenarioData?.amount}
              defaultTenure={selectedScenarioData?.tenure}
            />
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white font-semibold text-base px-10 py-5 h-auto rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#CCA43B]/20"
            >
              Let's Talk Numbers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-[#B3B3B3] text-xs mt-3">
              No impact on credit score • 100% secure • No hidden charges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}