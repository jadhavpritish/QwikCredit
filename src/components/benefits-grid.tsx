"use client";

import { Clock, Shield, Percent, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Instant Approval",
    description: "Get loan approval in just 5 minutes with our automated system",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-grade encryption ensures your data is always protected",
  },
  {
    icon: Percent,
    title: "Low Interest Rates",
    description: "Competitive rates starting from 18% per annum",
  },
  {
    icon: Smartphone,
    title: "Fully Digital",
    description: "Complete process online from application to disbursement",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Why Choose QwikCredit?
          </h2>
          <p className="text-[#B3B3B3] text-sm md:text-base max-w-2xl mx-auto">
            Experience the future of lending with our cutting-edge platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-xl p-5 border border-white/5 hover:border-[#CCA43B]/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-lg bg-[#CCA43B]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#CCA43B]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-[#B3B3B3] text-sm leading-relaxed">
                      {benefit.description}
                    </p>
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