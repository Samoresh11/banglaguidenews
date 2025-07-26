# 📸 Image Guide for Bangla Guide News

## 🎯 Overview
This guide explains how to add images to your Bengali news articles in different ways.

## 📁 **Image File Structure**

### **Recommended Directory Structure:**
```
your-website/
├── assets/
│   ├── images/
│   │   ├── articles/
│   │   │   ├── aadhaar-update/
│   │   │   │   ├── main-image.jpg
│   │   │   │   ├── step1.png
│   │   │   │   └── step2.png
│   │   │   └── pan-guide/
│   │   │       ├── main-image.jpg
│   │   │       └── process.png
│   │   ├── logo.png
│   │   └── favicon.ico
│   ├── style.css
│   └── script.js
├── posts/
│   ├── aadhaar-update.html
│   └── pan-guide.html
└── index.html
```

## 🖼️ **Methods to Add Images**

### **Method 1: Featured Image (Article Header)**

```html
<!-- In article header -->
<div class="article-image">
    <img src="https://via.placeholder.com/800x400/ff4444/ffffff?text=Your+Image" 
         alt="Your image description" 
         class="featured-image">
</div>
```

### **Method 2: Inline Content Image**

```html
<!-- Within article content -->
<div class="content-image">
    <img src="assets/images/articles/your-article/your-image.jpg" 
         alt="Your image description" 
         class="article-image-inline">
    <p class="image-caption">চিত্র: Your image caption in Bengali</p>
</div>
```

### **Method 3: Side-by-Side Images**

```html
<!-- Two images side by side -->
<div class="image-gallery">
    <div class="image-item">
        <img src="assets/images/articles/your-article/image1.jpg" 
             alt="First image description" 
             class="gallery-image">
        <p class="image-caption">চিত্র ১: First image caption</p>
    </div>
    <div class="image-item">
        <img src="assets/images/articles/your-article/image2.jpg" 
             alt="Second image description" 
             class="gallery-image">
        <p class="image-caption">চিত্র ২: Second image caption</p>
    </div>
</div>
```

### **Method 4: Logo in Article**

```html
<!-- Article logo section -->
<div class="article-logo">
    <img src="../assets/logo.png" alt="বাংলা গাইড নিউজ লোগো" class="article-logo-img">
    <div class="logo-text">
        <span class="bengali-text">বাংলা</span>
        <div class="english-text">
            <span class="text-line">BANGLA</span>
            <span class="text-line guide">GUIDE</span>
            <span class="text-line news">NEWS</span>
        </div>
    </div>
</div>
```

## 🎨 **Image Sources**

### **1. Local Images (Recommended)**
```html
<!-- Store images in your assets folder -->
<img src="../assets/images/articles/aadhaar-update/process.jpg" alt="Process">
```

### **2. External URLs**
```html
<!-- Use external image URLs -->
<img src="https://example.com/your-image.jpg" alt="External image">
```

### **3. Placeholder Images (Development)**
```html
<!-- Use placeholder for development -->
<img src="https://via.placeholder.com/600x300/ff4444/ffffff?text=Your+Text" alt="Placeholder">
```

### **4. Base64 Images (Small images only)**
```html
<!-- For very small images like icons -->
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." alt="Base64 image">
```

## 📏 **Image Sizes & Optimization**

### **Recommended Image Sizes:**
- **Featured Image**: 800x400px (16:9 ratio)
- **Inline Content**: 600x300px (2:1 ratio)
- **Logo**: 200x200px (1:1 ratio)
- **Thumbnail**: 300x200px (3:2 ratio)
- **Gallery**: 400x300px (4:3 ratio)

### **File Formats:**
- **JPG**: For photographs and complex images
- **PNG**: For images with transparency
- **WebP**: For better compression (modern browsers)
- **SVG**: For icons and simple graphics

## 🔧 **CSS Classes for Different Image Types**

### **Featured Image:**
```css
.featured-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}
```

### **Inline Content Image:**
```css
.article-image-inline {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: 2px solid #ff4444;
}
```

### **Gallery Images:**
```css
.gallery-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.gallery-image:hover {
    transform: scale(1.05);
}
```

## 📱 **Responsive Images**

### **Responsive Image with Multiple Sources:**
```html
<picture>
    <source media="(min-width: 768px)" srcset="assets/images/large-image.jpg">
    <source media="(min-width: 480px)" srcset="assets/images/medium-image.jpg">
    <img src="assets/images/small-image.jpg" alt="Responsive image" class="responsive-image">
</picture>
```

### **CSS for Responsive Images:**
```css
.responsive-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}
```

## 🎯 **Best Practices**

### **1. Alt Text (Always Required)**
```html
<!-- Good alt text -->
<img src="aadhaar-card.jpg" alt="আধার কার্ড আপডেটের অনলাইন ফর্ম">

<!-- Bad alt text -->
<img src="aadhaar-card.jpg" alt="image">
```

### **2. Image Optimization**
- **Compress images** before uploading
- **Use appropriate formats** (JPG for photos, PNG for graphics)
- **Optimize for web** (72 DPI for web)
- **Keep file sizes** under 500KB for better loading

### **3. SEO Optimization**
```html
<!-- Add structured data for images -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://banglaguidenews.com/assets/images/aadhaar-card.jpg",
    "description": "আধার কার্ড আপডেটের অনলাইন প্রক্রিয়া",
    "name": "আধার কার্ড আপডেট"
}
</script>
```

### **4. Accessibility**
```html
<!-- Add ARIA labels for complex images -->
<img src="chart.png" alt="আয়কর হার চার্ট" aria-describedby="chart-description">
<div id="chart-description">
    এই চার্টে বিভিন্ন আয় স্তরের আয়কর হার দেখানো হয়েছে
</div>
```

## 🚀 **Quick Examples**

### **Example 1: Simple Inline Image**
```html
<div class="content-image">
    <img src="../assets/images/aadhaar-process.jpg" 
         alt="আধার কার্ড আপডেট প্রক্রিয়া" 
         class="article-image-inline">
    <p class="image-caption">চিত্র: অনলাইনে আধার কার্ড আপডেটের ধাপগুলি</p>
</div>
```

### **Example 2: Image Gallery**
```html
<div class="image-gallery">
    <div class="image-item">
        <img src="../assets/images/step1.jpg" alt="ধাপ ১" class="gallery-image">
        <p class="image-caption">ধাপ ১: ওয়েবসাইটে যাওয়া</p>
    </div>
    <div class="image-item">
        <img src="../assets/images/step2.jpg" alt="ধাপ ২" class="gallery-image">
        <p class="image-caption">ধাপ ২: লগইন করা</p>
    </div>
</div>
```

### **Example 3: Responsive Image**
```html
<div class="content-image">
    <picture>
        <source media="(min-width: 768px)" srcset="../assets/images/large-aadhaar.jpg">
        <source media="(min-width: 480px)" srcset="../assets/images/medium-aadhaar.jpg">
        <img src="../assets/images/small-aadhaar.jpg" 
             alt="আধার কার্ড" 
             class="article-image-inline">
    </picture>
    <p class="image-caption">চিত্র: আধার কার্ডের নমুনা</p>
</div>
```

## 🔄 **Updating Sitemap for Images**

When you add new images, update your sitemap:

```bash
# Run the sitemap generator
npm run sitemap
```

This will automatically include new images in your XML sitemap for better SEO.

---

## 📞 **Need Help?**

If you need assistance with:
- Image optimization
- CSS styling
- SEO for images
- Responsive design

Check the main README.md file or contact the developer.

**Remember**: Always use descriptive alt text in Bengali for better accessibility and SEO! 🎯 