"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/onboarding");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-[#CCA43B]">
              QwikCredit
            </h1>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleLoginClick}
            variant="gradient"
            className="transition-all duration-300"
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}