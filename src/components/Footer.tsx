import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold font-bengali text-lg mb-4">বাংলা গাইড নিউজ</h3>
            <p className="text-sm text-muted-foreground font-bengali mb-4">
              বাংলাদেশ ও ভারতের সর্বশেষ সংবাদ এবং তথ্যের নির্ভরযোগ্য উৎস। 
              আমরা সত্য ও নিরপেক্ষ সংবাদ পরিবেশনে প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Facebook size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Youtube size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Instagram size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-bengali mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">যোগাযোগ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">গোপনীয়তার নীতি</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">ব্যবহারের শর্তাবলী</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">বিজ্ঞাপন দিন</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold font-bengali mb-4">বিভাগসমূহ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">জাতীয়</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">আন্তর্জাতিক</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">খেলা</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">বিনোদন</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground font-bengali">প্রযুক্তি</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-bengali mb-4">যোগাযোগ</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={14} />
                <span>info@banglaguidenews.online</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={14} />
                <span>+৮৮০ ১৭৪৪ ৫৫৫ ১২৩</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={14} className="mt-0.5" />
                <span className="font-bengali">ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground font-bengali">
            © ২০২৪ বাংলা গাইড নিউজ। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};