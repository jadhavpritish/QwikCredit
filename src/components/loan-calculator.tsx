"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

interface LoanCalculatorProps {
  defaultAmount?: number;
  defaultTenure?: number;
}

export default function LoanCalculator({
  defaultAmount = 50000,
  defaultTenure = 6,
}: LoanCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(defaultAmount);
  const [tenure, setTenure] = useState(defaultTenure);

  useEffect(() => {
    if (defaultAmount) setLoanAmount(defaultAmount);
    if (defaultTenure) setTenure(defaultTenure);
  }, [defaultAmount, defaultTenure]);

  // Simple EMI calculation (2% monthly rate = 24% annual)
  const calculateEMI = (principal: number, months: number) => {
    const monthlyRate = 0.02;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI(loanAmount, tenure);

  return (
    <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-6 md:p-8 max-w-3xl mx-auto">
      <div className="space-y-8">
        {/* Loan Amount */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[#B3B3B3] text-sm font-medium">
              Loan Amount
            </label>
            <span className="text-white text-2xl font-bold">
              ₹{loanAmount.toLocaleString("en-IN")}
            </span>
          </div>
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            min={10000}
            max={200000}
            step={5000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-[#808080]">
            <span>₹10,000</span>
            <span>₹2,00,000</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[#B3B3B3] text-sm font-medium">
              Tenure
            </label>
            <span className="text-white text-2xl font-bold">
              {tenure} months
            </span>
          </div>
          <Slider
            value={[tenure]}
            onValueChange={(value) => setTenure(value[0])}
            min={3}
            max={24}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-[#808080]">
            <span>3 months</span>
            <span>24 months</span>
          </div>
        </div>

        {/* EMI Display */}
        <div className="bg-[#121212] rounded-xl p-6 border-2 border-[#CCA43B]/30">
          <div className="text-center">
            <p className="text-[#B3B3B3] text-sm mb-2">Monthly EMI</p>
            <p className="text-4xl md:text-5xl font-bold text-[#CCA43B]">
              ₹{emi.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}