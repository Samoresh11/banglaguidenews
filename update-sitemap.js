#!/usr/bin/env node

/**
 * Automatic Sitemap Generator for Bangla Guide News
 * 
 * This script automatically updates the sitemap.xml file
 * when new articles are added to the posts/ directory.
 * 
 * Usage: node update-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'http://banglaguidenewsonline.online/';
const POSTS_DIR = './posts';
const SITEMAP_FILE = './sitemap.xml';

// Static pages (non-articles)
const STATIC_PAGES = [
    { url: '/', priority: '1.0', changefreq: 'daily', lastmod: '2025-01-15' },
    { url: '/about.html', priority: '0.8', changefreq: 'monthly', lastmod: '2025-01-15' },
    { url: '/contact.html', priority: '0.8', changefreq: 'monthly', lastmod: '2025-01-15' }
];

// Article metadata (you can extend this)
const ARTICLE_METADATA = {
    'aadhaar-update.html': {
        title: 'আধার কার্ড আপডেটের সম্পূর্ণ গাইড - নতুন নিয়মাবলী সহ',
        keywords: 'আধার কার্ড, আপডেট, গাইড, সরকারি সেবা, অনলাইন আপডেট',
        stock_tickers: 'UIDAI',
        lastmod: '2025-01-15',
        priority: '0.9',
        changefreq: 'weekly'
    },
    'pan-guide.html': {
        title: 'PAN কার্ড আবেদনের সম্পূর্ণ গাইড - অনলাইন পদ্ধতি',
        keywords: 'PAN কার্ড, আবেদন, গাইড, অনলাইন আবেদন, সরকারি সেবা',
        stock_tickers: 'NSDL',
        lastmod: '2025-01-14',
        priority: '0.9',
        changefreq: 'weekly'
    }
};

/**
 * Generate XML sitemap content
 */
function generateSitemap() {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

`;

    // Add static pages
    STATIC_PAGES.forEach(page => {
        sitemap += `    <!-- ${page.url === '/' ? 'Homepage' : page.url} -->
    <url>
        <loc>${SITE_URL}${page.url}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>

`;
    });

    // Add articles
    const articleFiles = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.html'));
    
    articleFiles.forEach(file => {
        const metadata = ARTICLE_METADATA[file] || {
            title: file.replace('.html', '').replace(/-/g, ' '),
            keywords: '',
            stock_tickers: '',
            lastmod: new Date().toISOString().split('T')[0],
            priority: '0.8',
            changefreq: 'weekly'
        };

        sitemap += `    <!-- Article: ${metadata.title} -->
    <url>
        <loc>${SITE_URL}/posts/${file}</loc>
        <lastmod>${metadata.lastmod}</lastmod>
        <changefreq>${metadata.changefreq}</changefreq>
        <priority>${metadata.priority}</priority>
        <news:news>
            <news:publication>
                <news:name>বাংলা গাইড নিউজ</news:name>
                <news:language>bn</news:language>
            </news:publication>
            <news:publication_date>${metadata.lastmod}T10:00:00+05:30</news:publication_date>
            <news:title>${metadata.title}</news:title>
            <news:keywords>${metadata.keywords}</news:keywords>
            ${metadata.stock_tickers ? `<news:stock_tickers>${metadata.stock_tickers}</news:stock_tickers>` : ''}
        </news:news>
        <image:image>
            <image:loc>https://via.placeholder.com/800x400/ff4444/ffffff?text=${encodeURIComponent(metadata.title)}</image:loc>
            <image:title>${metadata.title}</image:title>
        </image:image>
    </url>

`;
    });

    sitemap += '</urlset>';

    return sitemap;
}

/**
 * Update the sitemap file
 */
function updateSitemap() {
    try {
        const sitemapContent = generateSitemap();
        fs.writeFileSync(SITEMAP_FILE, sitemapContent, 'utf8');
        
        console.log('✅ Sitemap updated successfully!');
        console.log(`📁 File: ${SITEMAP_FILE}`);
        console.log(`🌐 Site: ${SITE_URL}`);
        
        // Count URLs
        const urlCount = STATIC_PAGES.length + Object.keys(ARTICLE_METADATA).length;
        console.log(`📊 Total URLs: ${urlCount}`);
        
        // List articles
        console.log('\n📰 Articles in sitemap:');
        Object.keys(ARTICLE_METADATA).forEach(file => {
            console.log(`   - ${file}`);
        });
        
    } catch (error) {
        console.error('❌ Error updating sitemap:', error.message);
        process.exit(1);
    }
}

/**
 * Watch for changes in posts directory
 */
function watchPostsDirectory() {
    console.log('👀 Watching posts directory for changes...');
    console.log('Press Ctrl+C to stop watching');
    
    fs.watch(POSTS_DIR, (eventType, filename) => {
        if (filename && filename.endsWith('.html')) {
            console.log(`📝 Detected change: ${filename}`);
            updateSitemap();
        }
    });
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.includes('--watch') || args.includes('-w')) {
        updateSitemap();
        watchPostsDirectory();
    } else {
        updateSitemap();
    }
}

module.exports = { generateSitemap, updateSitemap }; 