// Clickable scroll dots for articles
const scrollContainer = document.querySelector('.articles-scroll');
const dots = document.querySelectorAll('.scroll-dots .dot');

dots.forEach((dot, index) => {
    dot.style.cursor = 'pointer';
    dot.addEventListener('click', () => {
        const itemWidth = scrollContainer.querySelector('.article-item').offsetWidth + 24;
        scrollContainer.scrollTo({
            left: itemWidth * index,
            behavior: 'smooth'
        });
    });
});

// Update active dot on scroll
scrollContainer.addEventListener('scroll', () => {
    const itemWidth = scrollContainer.querySelector('.article-item').offsetWidth + 24;
    const activeIndex = Math.round(scrollContainer.scrollLeft / itemWidth);
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
});

// Set first dot active on load
if (dots.length > 0) dots[0].classList.add('active');


// Rotating title animation
const titles = [
    "Blockchain Developer",
    "Smart Contract Engineer",
    "Token Launch Specialist",
    "Web3 Consultant"
];

let currentIndex = 0;

setInterval(() => {
    const rotatingTitle = document.getElementById('rotating-title');
    rotatingTitle.style.transition = 'opacity 0.5s ease';
    rotatingTitle.style.opacity = '0';
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % titles.length;
        rotatingTitle.textContent = titles[currentIndex];
        rotatingTitle.style.opacity = '1';
    }, 500);
}, 3000);


// Video carousel dots
const videoScroll = document.getElementById('videoScroll');
const videoDots = document.querySelectorAll('#videoDots .dot');

videoDots.forEach((dot, index) => {
    dot.style.cursor = 'pointer';
    dot.addEventListener('click', () => {
        const itemWidth = videoScroll.querySelector('.video-item').offsetWidth;
        videoScroll.scrollTo({
            left: itemWidth * index,
            behavior: 'smooth'
        });
    });
});

videoScroll.addEventListener('scroll', () => {
    const itemWidth = videoScroll.querySelector('.video-item').offsetWidth;
    const activeIndex = Math.round(videoScroll.scrollLeft / itemWidth);
    videoDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
});