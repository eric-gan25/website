'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export default function Hero() {
  const email = "e225li@uwaterloo.ca";

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-2">
                ELLA
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black">
                LI
              </h1>
            </div>
            <div className="flex items-center gap-2 text-black text-xl">
              <span >{email}</span>
              <Button 
                variant="ghost"
                size="icon"
                onClick={copyEmail}
                aria-label={copied ? "Copied" : "Copy email"}
              >
                {copied ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gray-300 mb-8 overflow-hidden">
              <img src="/images/profile.jpg" alt="Ella Li" className="w-full h-full object-cover" />
            </div>
            <p className="max-w-md text-lg md:text-xl text-black leading-relaxed text-right">
              Hello, I'm a Global Business and Digital Arts student at the University of Waterloo specializing in minimal design — based in the GTA area, working remote. Let's create!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

