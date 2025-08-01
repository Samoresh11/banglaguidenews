import { Header } from "@/components/Header";
import { BreakingNews } from "@/components/BreakingNews";
import { NewsCard } from "@/components/NewsCard";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

// Import news images
import breakingNewsImg from "@/assets/breaking-news.jpg";
import internationalNewsImg from "@/assets/international-news.jpg";
import sportsNewsImg from "@/assets/sports-news.jpg";
import techNewsImg from "@/assets/tech-news.jpg";
import nationalNewsImg from "@/assets/national-news.jpg";
import entertainmentNewsImg from "@/assets/entertainment-news.jpg";

const newsData = [
  {
    id: 1,
    title: "প্রধানমন্ত্রী নতুন উন্নয়ন প্রকল্পের উদ্বোধন করলেন",
    excerpt: "আজ সকালে প্রধানমন্ত্রী একটি গুরুত্বপূর্ণ উন্নয়ন প্রকল্পের উদ্বোধন করেছেন যা দেশের অর্থনৈতিক প্রবৃদ্ধিতে সহায়ক হবে।",
    category: "জাতীয়",
    author: "মো. রফিকুল ইসলাম",
    publishedAt: "২ ঘন্টা আগে",
    imageUrl: nationalNewsImg,
    featured: true
  },
  {
    id: 2,
    title: "আন্তর্জাতিক ক্রিকেটে বাংলাদেশের নতুন রেকর্ড",
    excerpt: "টি-২০ বিশ্বকাপে বাংলাদেশ দল অসাধারণ পারফরমেন্স দেখিয়ে নতুন মাইলফলক স্থাপন করেছে।",
    category: "খেলা",
    author: "সাকিব আল হাসান",
    publishedAt: "৪ ঘন্টা আগে",
    imageUrl: sportsNewsImg
  },
  {
    id: 3,
    title: "নতুন প্রযুক্তি নীতি অনুমোদন",
    excerpt: "সরকার দেশের ডিজিটাল রূপান্তর ত্বরান্বিত করতে নতুন প্রযুক্তি নীতি অনুমোদন দিয়েছে।",
    category: "প্রযুক্তি",
    author: "ড. আহমেদ হোসেন",
    publishedAt: "৬ ঘন্টা আগে",
    imageUrl: techNewsImg
  },
  {
    id: 4,
    title: "বিশ্ব অর্থনীতিতে নতুন পরিবর্তন",
    excerpt: "আন্তর্জাতিক বাজারে তেলের দাম বৃদ্ধি পেয়েছে, যা বিশ্ব অর্থনীতিতে প্রভাব ফেলবে।",
    category: "আন্তর্জাতিক",
    author: "ফারহানা খাতুন",
    publishedAt: "৮ ঘন্টা আগে",
    imageUrl: internationalNewsImg
  },
  {
    id: 5,
    title: "নতুন চলচ্চিত্র উৎসবের ঘোষণা",
    excerpt: "আগামী মাসে ঢাকায় আন্তর্জাতিক চলচ্চিত্র উৎসব অনুষ্ঠিত হবে।",
    category: "বিনোদন",
    author: "রিয়া চৌধুরী",
    publishedAt: "১০ ঘন্টা আগে",
    imageUrl: entertainmentNewsImg
  },
  {
    id: 6,
    title: "শিক্ষা ব্যবস্থায় নতুন সংস্কার",
    excerpt: "শিক্ষা মন্ত্রণালয় প্রাথমিক শিক্ষায় নতুন পাঠ্যক্রম চালু করার ঘোষণা দিয়েছে।",
    category: "জাতীয়",
    author: "প্রফেসর মাহবুব আলম",
    publishedAt: "১২ ঘন্টা আগে",
    imageUrl: nationalNewsImg
  }
];

const Index = () => {
  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = newsData.filter(news => !news.featured);

  return (
    <div className="min-h-screen bg-background font-bengali">
      <Header />
      <BreakingNews />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News */}
            {featuredNews.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold font-bengali mb-6 pb-2 border-b-2 border-primary">
                  প্রধান সংবাদ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredNews.map((news) => (
                    <NewsCard key={news.id} {...news} />
                  ))}
                </div>
              </section>
            )}

            {/* Latest News */}
            <section>
              <h2 className="text-2xl font-bold font-bengali mb-6 pb-2 border-b-2 border-primary">
                সর্বশেষ সংবাদ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularNews.map((news) => (
                  <NewsCard key={news.id} {...news} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
