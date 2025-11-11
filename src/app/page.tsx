"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProcessSteps from "@/components/process-steps";
import BenefitsGrid from "@/components/benefits-grid";
import Testimonials from "@/components/testimonials";
import ApplicationForm from "@/components/application-form";
import StickyCTA from "@/components/sticky-cta";

export default function Page() {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroSection onCtaClick={scrollToForm} />
        <ProcessSteps />
        <BenefitsGrid />
        <Testimonials />
        <ApplicationForm />
        <StickyCTA onCtaClick={scrollToForm} />
      </div>
    </div>
  );
}