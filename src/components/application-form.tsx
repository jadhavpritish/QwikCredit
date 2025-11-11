"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, CheckCircle2 } from "lucide-react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^[6-9]\d{9}$/.test(value)) return "Enter valid 10-digit mobile number";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter valid email address";
        return "";
      case "amount":
        if (!value.trim()) return "Loan amount is required";
        const amount = parseInt(value);
        if (isNaN(amount) || amount < 10000) return "Minimum loan amount is ₹10,000";
        if (amount > 200000) return "Maximum loan amount is ₹2,00,000";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      amount: true,
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  if (isSubmitted) {
    return (
      <section id="apply-form" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-[#1E1E1E] rounded-2xl p-12 text-center border border-[#CCA43B]/20">
            <div className="w-20 h-20 rounded-full bg-[#2E7D32]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#2E7D32]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Application Submitted!
            </h2>
            <p className="text-[#B3B3B3] text-lg mb-8">
              Thank you for applying. Our team will review your application and get back to you within 5 minutes.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white font-semibold"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply-form" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apply for Your Loan
            </h2>
            <p className="text-[#B3B3B3] text-lg">
              Fill in your details and get instant approval
            </p>
          </div>

          <div className="bg-[#1E1E1E] rounded-2xl p-8 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-[#121212] border-white/10 text-white focus:border-[#CCA43B] ${
                    errors.name && touched.name
                      ? "border-[#C62828]"
                      : touched.name && !errors.name
                      ? "border-[#2E7D32]"
                      : ""
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && touched.name && (
                  <p className="text-[#C62828] text-sm">{errors.name}</p>
                )}
                {!errors.name && touched.name && formData.name && (
                  <p className="text-[#2E7D32] text-sm">✓ Looks good</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Mobile Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-[#121212] border-white/10 text-white focus:border-[#CCA43B] ${
                    errors.phone && touched.phone
                      ? "border-[#C62828]"
                      : touched.phone && !errors.phone
                      ? "border-[#2E7D32]"
                      : ""
                  }`}
                  placeholder="10-digit mobile number"
                />
                {errors.phone && touched.phone && (
                  <p className="text-[#C62828] text-sm">{errors.phone}</p>
                )}
                {!errors.phone && touched.phone && formData.phone && (
                  <p className="text-[#2E7D32] text-sm">✓ Looks good</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-[#121212] border-white/10 text-white focus:border-[#CCA43B] ${
                    errors.email && touched.email
                      ? "border-[#C62828]"
                      : touched.email && !errors.email
                      ? "border-[#2E7D32]"
                      : ""
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && touched.email && (
                  <p className="text-[#C62828] text-sm">{errors.email}</p>
                )}
                {!errors.email && touched.email && formData.email && (
                  <p className="text-[#2E7D32] text-sm">✓ Looks good</p>
                )}
              </div>

              {/* Amount Field */}
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-white">
                  Loan Amount (₹) *
                </Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`bg-[#121212] border-white/10 text-white focus:border-[#CCA43B] ${
                    errors.amount && touched.amount
                      ? "border-[#C62828]"
                      : touched.amount && !errors.amount
                      ? "border-[#2E7D32]"
                      : ""
                  }`}
                  placeholder="Enter amount (₹10,000 - ₹2,00,000)"
                />
                {errors.amount && touched.amount && (
                  <p className="text-[#C62828] text-sm">{errors.amount}</p>
                )}
                {!errors.amount && touched.amount && formData.amount && (
                  <p className="text-[#2E7D32] text-sm">✓ Looks good</p>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-2 text-[#B3B3B3] text-sm bg-[#121212] p-4 rounded-lg">
                <Shield className="w-5 h-5 text-[#CCA43B]" />
                <span>Your information is encrypted and secure</span>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white font-semibold text-lg py-6 h-auto rounded-full transition-all duration-300 hover:scale-105"
              >
                Submit Application
              </Button>

              <p className="text-[#B3B3B3] text-xs text-center">
                By submitting, you agree to our Terms & Conditions and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}