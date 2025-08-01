import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const breakingNews = [
  "প্রধানমন্ত্রী আজ গুরুত্বপূর্ণ ঘোষণা দেবেন",
  "আইপিএল ২০২৪: কলকাতা নাইট রাইডার্স জয়ী",
  "নতুন প্রযুক্তি নীতি অনুমোদন",
  "বাংলাদেশ-ভারত সম্পর্ক আরও দৃঢ় হবে"
];

export const BreakingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-breaking-news text-breaking-news-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="bg-white text-breaking-news font-bengali font-semibold px-3 py-1 whitespace-nowrap">
            ব্রেকিং নিউজ
          </Badge>
          <div className="overflow-hidden flex-1">
            <div 
              className="font-bengali transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {breakingNews.map((news, index) => (
                  <div key={index} className="min-w-full">
                    <span className="text-sm md:text-base">{news}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};