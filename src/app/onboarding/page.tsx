"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Loader2, Sparkles, Trophy, Zap, CheckCircle2, X, Calendar as CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Form data
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [fullName, setFullName] = useState("");
  const [pan, setPan] = useState("");
  const [dob, setDob] = useState<Date>();
  const [employmentType, setEmploymentType] = useState("");
  const [income, setIncome] = useState("");

  // Mascot states
  const mascotEmojis = ["📱", "🔐", "🎯", "💰", "🎉"];
  const mascotMessages = [
    "Let's get you started!",
    "You're doing great!",
    "Almost there, champ!",
    "Show me the money!",
    "Boom! You're a star!"
  ];

  const handleAbandon = () => {
    router.push("/");
  };

  const handleMobileSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleOtpSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1000);
  };

  const handlePanSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1000);
  };

  const handleDetailsSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(5);
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    }, 3000);
  };

  const progressPercentage = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-[#121212] relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(circle at ${20 + step * 15}% 50%, rgba(204, 164, 59, ${0.05 + step * 0.02}), transparent 50%)`
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#CCA43B] rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Abandon Button */}
        {step < 5 && (
          <motion.div 
            className="absolute -top-12 right-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={handleAbandon}
              variant="ghost"
              className="text-[#808080] hover:text-white text-sm"
            >
              <X className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </motion.div>
        )}

        {/* Mascot & Progress Section */}
        {step < 5 && (
          <motion.div 
            className="text-center mb-6 space-y-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated Mascot */}
            <div className="relative inline-block">
              <motion.div 
                className="text-5xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {mascotEmojis[step - 1]}
              </motion.div>
            </div>

            {/* Mascot Message */}
            <motion.p 
              className="text-[#CCA43B] font-semibold text-base"
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {mascotMessages[step - 1]}
            </motion.p>

            {/* XP-Style Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[#B3B3B3]">
                <span>Progress</span>
                <motion.span 
                  className="text-[#CCA43B] font-bold"
                  key={progressPercentage}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                >
                  {Math.round(progressPercentage)}%
                </motion.span>
              </div>
              <div className="h-2 bg-[#1E1E1E] rounded-full overflow-hidden border border-[#2A2A2A]">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#CCA43B] to-[#FFD700] relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {[1, 2, 3, 4].map((s) => (
                  <motion.div 
                    key={s}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: s * 0.1, type: "spring" }}
                  >
                    {s < step ? (
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#2E7D32]" />
                      </motion.div>
                    ) : s === step ? (
                      <motion.div 
                        className="h-5 w-5 rounded-full border-2 border-[#CCA43B] bg-[#CCA43B]/20"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-[#2A2A2A]" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1: Mobile Number */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-6">
                <div className="text-center mb-6">
                  <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Create Your Account
                  </h1>
                  <p className="text-[#B3B3B3] text-sm">
                    Enter your mobile number to get started
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-[#B3B3B3] text-sm mb-2 block">
                      Mobile Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      maxLength={10}
                      className="bg-[#121212] border-[#2A2A2A] text-white text-sm focus:border-[#CCA43B] focus:ring-2 focus:ring-[#CCA43B]/20 transition-all"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleMobileSubmit}
                      disabled={mobile.length !== 10 || loading}
                      className="w-full bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white text-sm"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          Send OTP
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#808080]">
                    <Shield className="h-3 w-3" />
                    <span>Your data is 100% secure and encrypted</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-6">
                <div className="text-center mb-6">
                  <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Verify OTP
                  </h1>
                  <p className="text-[#B3B3B3] text-sm">
                    Enter the 6-digit code sent to {mobile}
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-[#B3B3B3] text-sm mb-2 block">
                      OTP Code
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      className="bg-[#121212] border-[#2A2A2A] text-white text-center text-xl tracking-widest focus:border-[#CCA43B] focus:ring-2 focus:ring-[#CCA43B]/20 transition-all"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleOtpSubmit}
                      disabled={otp.length !== 6 || loading}
                      className="w-full bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white text-sm"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          Verify
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <button className="w-full text-[#CCA43B] text-sm hover:underline">
                    Resend OTP
                  </button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Step 3: PAN & Name */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-6">
                <div className="text-center mb-6">
                  <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Let's Check Your Eligibility
                  </h1>
                  <p className="text-[#B3B3B3] text-sm">
                    We need a few details to verify your identity
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-[#B3B3B3] text-sm mb-2 block">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="As it appears on your PAN card"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-[#121212] border-[#2A2A2A] text-white text-sm focus:border-[#CCA43B] focus:ring-2 focus:ring-[#CCA43B]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[#B3B3B3] text-sm mb-2 block">
                      PAN Number
                    </label>
                    <Input
                      type="text"
                      placeholder="Your 10-digit Permanent Account Number"
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      maxLength={10}
                      className="bg-[#121212] border-[#2A2A2A] text-white text-sm uppercase focus:border-[#CCA43B] focus:ring-2 focus:ring-[#CCA43B]/20 transition-all"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handlePanSubmit}
                      disabled={!fullName || pan.length !== 10 || loading}
                      className="w-full bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white text-sm"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#808080]">
                    <Shield className="h-3 w-3" />
                    <span>Your data is 100% secure and encrypted</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Step 4: Personal & Financial Details */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-6">
                <div className="text-center mb-6">
                  <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
                    A Few More Details
                  </h1>
                  <p className="text-[#B3B3B3] text-sm">
                    This helps us find the best offer for you
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-[#B3B3B3] text-sm mb-2 block">
                      Date of Birth
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal bg-[#121212] border-[#2A2A2A] hover:bg-[#1E1E1E] hover:border-[#CCA43B] text-sm ${
                            !dob && "text-[#808080]"
                          }`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dob ? format(dob, "PPP") : "Pick your date of birth"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-[#1E1E1E] border-[#2A2A2A]" align="start">
                        <Calendar
                          mode="single"
                          selected={dob}
                          onSelect={setDob}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          captionLayout="dropdown"
                          fromYear={1950}
                          toYear={new Date().getFullYear()}
                          classNames={{
                            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                            month: "space-y-4",
                            caption: "flex justify-center pt-1 relative items-center",
                            caption_label: "text-sm font-medium text-white",
                            caption_dropdowns: "flex justify-center gap-1",
                            nav: "space-x-1 flex items-center",
                            nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white",
                            nav_button_previous: "absolute left-1",
                            nav_button_next: "absolute right-1",
                            table: "w-full border-collapse space-y-1",
                            head_row: "flex",
                            head_cell: "text-[#B3B3B3] rounded-md w-9 font-normal text-[0.8rem]",
                            row: "flex w-full mt-2",
                            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[#CCA43B]/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal text-white hover:bg-[#2A2A2A] rounded-md aria-selected:opacity-100",
                            day_selected: "bg-[#CCA43B] text-white hover:bg-[#CCA43B] hover:text-white focus:bg-[#CCA43B] focus:text-white",
                            day_today: "bg-[#2A2A2A] text-white",
                            day_outside: "text-[#808080] opacity-50",
                            day_disabled: "text-[#808080] opacity-50",
                            day_range_middle: "aria-selected:bg-[#CCA43B]/10 aria-selected:text-white",
                            day_hidden: "invisible",
                            dropdown: "bg-[#121212] border border-[#2A2A2A] text-white text-sm rounded-md px-2 py-1",
                            dropdown_month: "bg-[#121212] border border-[#2A2A2A] text-white",
                            dropdown_year: "bg-[#121212] border border-[#2A2A2A] text-white",
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="text-[#B3B3B3] text-sm mb-2 block">
                      Employment Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setEmploymentType("salaried")}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          employmentType === "salaried"
                            ? "border-[#CCA43B] bg-[#CCA43B]/10"
                            : "border-[#2A2A2A] hover:border-[#CCA43B]/50"
                        }`}
                      >
                        <span className="text-white font-medium text-sm">Salaried</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setEmploymentType("self-employed")}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          employmentType === "self-employed"
                            ? "border-[#CCA43B] bg-[#CCA43B]/10"
                            : "border-[#2A2A2A] hover:border-[#CCA43B]/50"
                        }`}
                      >
                        <span className="text-white font-medium text-sm">Self-Employed</span>
                      </motion.button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[#B3B3B3] text-sm mb-2 block">
                      Net Monthly Income (₹)
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter your monthly income"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      className="bg-[#121212] border-[#2A2A2A] text-white text-sm focus:border-[#CCA43B] focus:ring-2 focus:ring-[#CCA43B]/20 transition-all"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleDetailsSubmit}
                      disabled={!dob || !employmentType || !income || loading}
                      className="w-full bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white text-sm"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          Check Eligibility
                          <Zap className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Step 5: Processing Screen */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-6">
                <div className="text-center space-y-5">
                  <motion.div 
                    className="flex justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="relative">
                      <Loader2 className="h-14 w-14 text-[#CCA43B]" />
                      <motion.div
                        className="absolute top-0 right-0"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Sparkles className="h-6 w-6 text-[#FFD700]" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-white mb-3">
                      Finding the Best Offer for You...
                    </h1>
                    <div className="space-y-2 text-[#B3B3B3] text-sm">
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        🔍 Connecting to credit bureaus...
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        📊 Analyzing your financial profile...
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 }}
                      >
                        💰 Calculating your loan offer...
                      </motion.p>
                    </div>
                  </div>

                  <p className="text-xs text-[#808080]">
                    This usually takes less than 30 seconds
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}