import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, Hash, Users, Mail } from "lucide-react";

const popularPosts = [
  {
    id: 1,
    title: "দেশের অর্থনীতিতে নতুন দিগন্ত",
    views: "১২,৫৪৩"
  },
  {
    id: 2,
    title: "আন্তর্জাতিক ক্রিকেটে বাংলাদেশের সাফল্য",
    views: "৮,৭৬৫"
  },
  {
    id: 3,
    title: "প্রযুক্তি খাতে নতুন বিনিয়োগ",
    views: "৬,৪৩২"
  },
  {
    id: 4,
    title: "স্বাস্থ্য সেবায় আধুনিকায়ন",
    views: "৫,৮৯০"
  },
  {
    id: 5,
    title: "শিক্ষা ব্যবস্থায় সংস্কার",
    views: "৪,৫৬৭"
  }
];

const categories = [
  { name: "জাতীয়", count: "১২৩" },
  { name: "আন্তর্জাতিক", count: "৮৯" },
  { name: "খেলা", count: "৬৭" },
  { name: "বিনোদন", count: "৫৪" },
  { name: "প্রযুক্তি", count: "৪৩" },
  { name: "জীবনধারা", count: "৩৮" },
  { name: "স্বাস্থ্য", count: "২৯" },
  { name: "মতামত", count: "১৮" }
];

const popularTags = [
  "বাংলাদেশ", "রাজনীতি", "ক্রিকেট", "প্রযুক্তি", "শিক্ষা", 
  "স্বাস্থ্য", "অর্থনীতি", "বিনোদন", "খেলা", "আন্তর্জাতিক"
];

export const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-bengali text-lg">
            <TrendingUp size={20} className="text-primary" />
            জনপ্রিয় সংবাদ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularPosts.map((post, index) => (
            <div key={post.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className="font-bengali text-sm font-medium line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users size={12} />
                  <span className="font-bengali">{post.views} দর্শক</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-bengali text-lg">
            <Hash size={20} className="text-primary" />
            বিভাগসমূহ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <span className="font-bengali text-sm">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-bengali text-lg">
            <Hash size={20} className="text-primary" />
            জনপ্রিয় ট্যাগ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="font-bengali text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-bengali text-lg">
            <Mail size={20} className="text-primary" />
            নিউজলেটার
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground font-bengali">
            সর্বশেষ সংবাদ ইমেইলে পেতে সাবস্ক্রাইব করুন
          </p>
          <div className="space-y-2">
            <Input 
              placeholder="আপনার ইমেইল" 
              type="email"
              className="font-bengali"
            />
            <Button className="w-full font-bengali">
              সাবস্ক্রাইব করুন
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};