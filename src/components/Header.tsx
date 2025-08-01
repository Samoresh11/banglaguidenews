import { useState } from "react";
import { Search, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const categories = [
  { name: "জাতীয়", slug: "national" },
  { name: "আন্তর্জাতিক", slug: "international" },
  { name: "খেলা", slug: "sports" },
  { name: "বিনোদন", slug: "entertainment" },
  { name: "প্রযুক্তি", slug: "tech" },
  { name: "জীবনধারা", slug: "lifestyle" },
  { name: "স্বাস্থ্য", slug: "health" },
  { name: "মতামত", slug: "opinion" }
];

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-border bg-muted/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="font-bengali text-muted-foreground">
              আজ: {new Date().toLocaleDateString('bn-BD', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="h-8 w-8 p-0"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold font-bengali bg-gradient-primary bg-clip-text text-transparent">
              বাংলা গাইড নিউজ
            </h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center max-w-md mx-4 flex-1">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="সংবাদ খুঁজুন..." 
                className="pl-10 font-bengali"
              />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="py-4">
                  {/* Mobile Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input 
                        placeholder="সংবাদ খুঁজুন..." 
                        className="pl-10 font-bengali"
                      />
                    </div>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.slug}
                        variant="ghost"
                        className="w-full justify-start font-bengali"
                      >
                        {category.name}
                      </Button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block border-t border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center space-x-1 py-2">
            {categories.map((category) => (
              <Button
                key={category.slug}
                variant="ghost"
                className="font-bengali text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};