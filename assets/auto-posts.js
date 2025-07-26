// ===== AUTO POSTS SYSTEM - BANGLA GUIDE NEWS =====

class AutoPostsSystem {
    constructor() {
        this.posts = [];
        this.currentIndex = 0;
        this.autoRotateInterval = null;
        this.init();
    }

    init() {
        this.loadPosts();
        this.setupAutoRotation();
        this.setupEventListeners();
    }

    // Load posts data
    loadPosts() {
        this.posts = [
            {
                title: "ফটোশপে ছবি ফিল করার সম্পূর্ণ গাইড",
                description: "ফটোশপে ছবি ফিল করার সম্পূর্ণ গাইড। কীভাবে ছবির খালি জায়গা ফিল করবেন, কালার যোগ করবেন এবং প্রফেশনাল ইমেজ এডিটিং শিখবেন।",
                image: "https://via.placeholder.com/400x250/ff4444/ffffff?text=ফটোশপ+গাইড",
                category: "টেক গাইড",
                date: "১৬ জানুয়ারি, ২০২৫",
                url: "posts/photoshop-image-guide.html",
                tags: ["ফটোশপ", "ইমেজ এডিটিং", "ছবি ফিল"]
            },
            {
                title: "আধার কার্ড আপডেটের সম্পূর্ণ গাইড - নতুন নিয়মাবলী সহ",
                description: "আধার কার্ড আপডেটের জন্য নতুন নিয়মাবলী প্রকাশিত হয়েছে। এই গাইডে জানুন কীভাবে সহজে আপডেট করতে পারেন আপনার আধার কার্ড।",
                image: "https://via.placeholder.com/400x250/ff4444/ffffff?text=আধার+কার্ড",
                category: "গাইড",
                date: "১৫ জানুয়ারি, ২০২৫",
                url: "posts/aadhaar-update.html",
                tags: ["আধার কার্ড", "আপডেট", "গাইড"]
            },
            {
                title: "PAN কার্ড আবেদনের সম্পূর্ণ গাইড - অনলাইন পদ্ধতি",
                description: "PAN কার্ড আবেদন করার জন্য সম্পূর্ণ গাইড। অনলাইনে কীভাবে আবেদন করবেন, প্রয়োজনীয় কাগজপত্র, ফি এবং প্রক্রিয়া সম্পর্কে বিস্তারিত তথ্য।",
                image: "https://via.placeholder.com/400x250/ff4444/ffffff?text=PAN+কার্ড",
                category: "গাইড",
                date: "১৪ জানুয়ারি, ২০২৫",
                url: "posts/pan-guide.html",
                tags: ["PAN কার্ড", "আবেদন", "গাইড"]
            },
            {
                title: "ভোটার আইডি কার্ড আবেদন গাইড",
                description: "ভোটার আইডি কার্ড আবেদন করার জন্য সম্পূর্ণ গাইড। অনলাইনে কীভাবে আবেদন করবেন এবং প্রয়োজনীয় কাগজপত্র সম্পর্কে জানুন।",
                image: "https://via.placeholder.com/400x250/ff4444/ffffff?text=ভোটার+আইডি",
                category: "সরকারি সেবা",
                date: "১৩ জানুয়ারি, ২০২৫",
                url: "posts/voter-id-guide.html",
                tags: ["ভোটার আইডি", "আবেদন", "সরকারি সেবা"]
            },
            {
                title: "পাসপোর্ট আবেদনের সম্পূর্ণ গাইড",
                description: "পাসপোর্ট আবেদন করার জন্য সম্পূর্ণ গাইড। অনলাইনে আবেদন পদ্ধতি, প্রয়োজনীয় কাগজপত্র এবং ফি সম্পর্কে বিস্তারিত তথ্য।",
                image: "https://via.placeholder.com/400x250/ff4444/ffffff?text=পাসপোর্ট",
                category: "সরকারি সেবা",
                date: "১২ জানুয়ারি, ২০২৫",
                url: "posts/passport-guide.html",
                tags: ["পাসপোর্ট", "আবেদন", "সরকারি সেবা"]
            },
            {
                title: "ডিজিটাল পেমেন্টের গাইড",
                description: "ডিজিটাল পেমেন্ট সম্পর্কে সম্পূর্ণ গাইড। UPI, ডেবিট কার্ড, ক্রেডিট কার্ড এবং অন্যান্য ডিজিটাল পেমেন্ট পদ্ধতি সম্পর্কে জানুন।",
                image: "https://via.placeholder.com/400x250/ff4444/ffffff?text=ডিজিটাল+পেমেন্ট",
                category: "টেক গাইড",
                date: "১১ জানুয়ারি, ২০২৫",
                url: "posts/digital-payment-guide.html",
                tags: ["ডিজিটাল পেমেন্ট", "UPI", "টেক গাইড"]
            }
        ];
    }

    // Setup auto rotation
    setupAutoRotation() {
        // Auto rotate featured posts every 5 seconds
        this.autoRotateInterval = setInterval(() => {
            this.rotateFeaturedPosts();
        }, 5000);

        // Auto update breaking news
        this.updateBreakingNews();
        setInterval(() => {
            this.updateBreakingNews();
        }, 10000);
    }

    // Setup event listeners
    setupEventListeners() {
        // Pause auto rotation on hover
        const featuredSection = document.querySelector('.featured-posts');
        if (featuredSection) {
            featuredSection.addEventListener('mouseenter', () => {
                this.pauseAutoRotation();
            });
            
            featuredSection.addEventListener('mouseleave', () => {
                this.resumeAutoRotation();
            });
        }

        // Manual navigation buttons
        const prevBtn = document.querySelector('.prev-post');
        const nextBtn = document.querySelector('.next-post');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.showPreviousPost();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.showNextPost();
            });
        }
    }

    // Rotate featured posts
    rotateFeaturedPosts() {
        const featuredContainer = document.querySelector('.featured-posts-container');
        if (!featuredContainer) return;

        this.currentIndex = (this.currentIndex + 1) % this.posts.length;
        this.displayFeaturedPost(this.posts[this.currentIndex]);
    }

    // Display featured post
    displayFeaturedPost(post) {
        const featuredContainer = document.querySelector('.featured-posts-container');
        if (!featuredContainer) return;

        featuredContainer.innerHTML = `
            <div class="featured-post active" data-post-url="${post.url}">
                <div class="featured-image">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="featured-overlay">
                        <span class="featured-category">${post.category}</span>
                    </div>
                </div>
                <div class="featured-content">
                    <h2 class="featured-title">${post.title}</h2>
                    <p class="featured-description">${post.description}</p>
                    <div class="featured-meta">
                        <span class="featured-date">${post.date}</span>
                        <div class="featured-tags">
                            ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <a href="${post.url}" class="read-more-btn">আরও পড়ুন</a>
                </div>
            </div>
        `;
    }

    // Show previous post
    showPreviousPost() {
        this.currentIndex = (this.currentIndex - 1 + this.posts.length) % this.posts.length;
        this.displayFeaturedPost(this.posts[this.currentIndex]);
    }

    // Show next post
    showNextPost() {
        this.currentIndex = (this.currentIndex + 1) % this.posts.length;
        this.displayFeaturedPost(this.posts[this.currentIndex]);
    }

    // Pause auto rotation
    pauseAutoRotation() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
    }

    // Resume auto rotation
    resumeAutoRotation() {
        if (!this.autoRotateInterval) {
            this.autoRotateInterval = setInterval(() => {
                this.rotateFeaturedPosts();
            }, 5000);
        }
    }

    // Update breaking news
    updateBreakingNews() {
        const breakingNewsText = document.querySelector('.breaking-text');
        if (!breakingNewsText) return;

        const newsItems = [
            "আধার কার্ড আপডেটের নতুন নিয়মাবলী প্রকাশিত হয়েছে। জানুন কীভাবে আপডেট করবেন আপনার আধার কার্ড।",
            "PAN কার্ড আবেদনের জন্য নতুন অনলাইন পদ্ধতি চালু হয়েছে। সহজে আবেদন করুন।",
            "ভোটার আইডি কার্ড আবেদনের জন্য নতুন গাইড প্রকাশিত হয়েছে।",
            "ডিজিটাল পেমেন্টের জন্য নতুন নিরাপত্তা গাইড প্রকাশিত হয়েছে।",
            "ফটোশপে ছবি এডিটিং সম্পর্কে নতুন টিউটোরিয়াল প্রকাশিত হয়েছে।"
        ];

        const randomNews = newsItems[Math.floor(Math.random() * newsItems.length)];
        
        // Smooth transition
        breakingNewsText.style.opacity = '0';
        setTimeout(() => {
            breakingNewsText.textContent = randomNews;
            breakingNewsText.style.opacity = '1';
        }, 300);
    }

    // Load latest posts
    loadLatestPosts() {
        const latestPostsContainer = document.querySelector('.latest-posts');
        if (!latestPostsContainer) return;

        const latestPosts = this.posts.slice(0, 4); // Show latest 4 posts
        
        latestPostsContainer.innerHTML = latestPosts.map(post => `
            <article class="article-card" data-post-url="${post.url}">
                <div class="article-image">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="article-overlay">
                        <span class="article-category">${post.category}</span>
                    </div>
                </div>
                <div class="article-content">
                    <div class="article-meta">
                        <span class="article-date">${post.date}</span>
                    </div>
                    <h3 class="article-title">
                        <a href="${post.url}">${post.title}</a>
                    </h3>
                    <p class="article-excerpt">${post.description}</p>
                    <div class="article-tags">
                        ${post.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `).join('');
    }

    // Load popular posts
    loadPopularPosts() {
        const popularPostsContainer = document.querySelector('.popular-posts');
        if (!popularPostsContainer) return;

        const popularPosts = this.posts.slice(0, 3); // Show top 3 popular posts
        
        popularPostsContainer.innerHTML = popularPosts.map(post => `
            <div class="popular-article">
                <h4><a href="${post.url}">${post.title}</a></h4>
                <span class="popular-date">${post.date}</span>
            </div>
        `).join('');
    }

    // Initialize all components
    initializeAll() {
        this.displayFeaturedPost(this.posts[0]);
        this.loadLatestPosts();
        this.loadPopularPosts();
        this.updateBreakingNews();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const autoPosts = new AutoPostsSystem();
    autoPosts.initializeAll();
    
    console.log('Auto Posts System initialized successfully!');
}); 