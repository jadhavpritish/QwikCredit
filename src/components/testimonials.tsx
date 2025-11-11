"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "Got my loan approved in just 4 minutes! The process was incredibly smooth and the customer service was excellent.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Best loan experience ever. No hidden charges, transparent process, and money was in my account within hours.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    name: "Amit Patel",
    location: "Bangalore",
    rating: 5,
    text: "QwikCredit saved me during an emergency. Quick, reliable, and hassle-free. Highly recommended!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "The interest rates are very competitive and the repayment options are flexible. Great service overall!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            What Our Customers Say
          </h2>
          <p className="text-[#B3B3B3] text-sm md:text-base max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust QwikCredit
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-[#1E1E1E] border-white/5 hover:border-[#CCA43B]/30 transition-all duration-300">
                      <CardContent className="p-5 space-y-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-11 h-11 rounded-full bg-[#CCA43B]/10"
                          />
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-[#B3B3B3] text-xs">
                              {testimonial.location}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 fill-[#CCA43B] text-[#CCA43B]"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-[#B3B3B3] text-sm leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#1E1E1E] border-white/10 text-white hover:bg-[#CCA43B] hover:text-white" />
            <CarouselNext className="bg-[#1E1E1E] border-white/10 text-white hover:bg-[#CCA43B] hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}