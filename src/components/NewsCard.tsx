import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  featured?: boolean;
}

export const NewsCard = ({ 
  title, 
  excerpt, 
  category, 
  author, 
  publishedAt, 
  imageUrl, 
  featured = false 
}: NewsCardProps) => {
  return (
    <Card className={`shadow-news-card hover:shadow-elevated transition-shadow duration-300 ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <img 
            src={imageUrl} 
            alt={title}
            className={`w-full object-cover rounded-t-lg ${featured ? 'md:rounded-l-lg md:rounded-tr-none h-64 md:h-full' : 'h-48'}`}
          />
        </div>
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-news-category text-news-category-foreground text-xs font-bengali">
                {category}
              </Badge>
            </div>
            <h3 className={`font-bengali font-semibold mb-2 line-clamp-2 ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
              {title}
            </h3>
            <p className={`text-muted-foreground font-bengali-content mb-3 line-clamp-3 ${featured ? 'text-base' : 'text-sm'}`}>
              {excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <User size={12} />
                <span className="font-bengali">{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>{publishedAt}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};