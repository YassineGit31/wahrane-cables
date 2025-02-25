let isLoading = true;
    const minimumLoadTime = 1000; // 1 second minimum
    const startTime = Date.now();

    // Show loading state initially
    document.body.classList.add('loading');

    window.addEventListener('load', () => {
      const remainingTime = minimumLoadTime - (Date.now() - startTime);
      if (remainingTime > 0) {
        setTimeout(hideLoader, remainingTime);
      } else {
        hideLoader();
      }
    });

    function hideLoader() {
      if (!isLoading) return;
      isLoading = false;
      const overlay = document.getElementById('loading-overlay');
      
      // Immediately disable interactions
      overlay.style.pointerEvents = 'none';
      overlay.style.opacity = '0';
      
      // Cleanup after transition
      setTimeout(() => {
        overlay.hidden = true;
        document.body.classList.remove('loading');
      }, 300);
    }

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const navItems = document.querySelectorAll(".nav-links li:not(:last-child) a"); // Exclude the last <a>

// Open menu
menuIcon.addEventListener("click", () => {
  navLinks.classList.add("show");
  overlay.classList.add("show");
  menuIcon.style.display = "none"; // Hide menu icon
  closeIcon.style.display = "block"; // Show close icon
});

// Close menu function
function closeMenu() {
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
  menuIcon.style.display = "block"; // Show menu icon
  closeIcon.style.display = "none"; // Hide close icon
}

// Close menu when clicking close icon
closeIcon.addEventListener("click", closeMenu);

// Close menu when clicking outside (overlay)
overlay.addEventListener("click", closeMenu);

// Close menu when clicking any nav link (except "Produits")
navItems.forEach(link => {
  link.addEventListener("click", closeMenu);
});



function toggleSubList() {
    var subList = document.getElementById("subList");
    const products = document.getElementById("produits-item");
    products.classList.toggle("open");

    if (subList.style.display === "none" || subList.style.display === "") {
        subList.style.display = "block";
        
        setTimeout(() => {
            subList.style.opacity = "1";
        }, 10); // Small delay for animation
    } else {
        subList.style.opacity = "0";
        setTimeout(() => {
            subList.style.display = "none";
        }, 300); // Wait for animation before hiding
    }
}
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('blockquote');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
});

let currentSlide = 0; // Track the current slide
const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll("#carousel > div"); // All slides

// Update the carousel position
function updateCarousel() {
  const slideWidth = slides[0].offsetWidth; // Width of one slide
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // Move to the current slide
}

// Move to the previous slide
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--; // Decrement the slide index
    updateCarousel();
  }
}

// Move to the next slide
function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++; // Increment the slide index
    updateCarousel();
  }
}

// Recalculate the slide width on window resize
window.addEventListener("resize", updateCarousel);

var swiper = new Swiper(".mySwiper", {
  loop: true, // Permet un défilement infini
  autoplay: {
      delay: 2200, // Changement d'image toutes les 2,2 secondes
      disableOnInteraction: false,
  },
  effect: "fade",
 // Effet fondu entre les images
});


document.addEventListener("DOMContentLoaded", function() {
  const shortText = document.getElementById('short-text');
  const fullText = document.getElementById('full-text');
  const seeMoreBtn = document.getElementById('see-more-btn');
  const seeLessBtn = document.getElementById('see-less-btn');

  // Afficher le texte long et cacher le court
  seeMoreBtn.addEventListener('click', function() {
      shortText.classList.add('hidden');
      fullText.classList.remove('hidden');
      fullText.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Optional smooth scroll
  });

  // Revenir au texte court
  seeLessBtn.addEventListener('click', function() {
      fullText.classList.add('hidden');
      shortText.classList.remove('hidden');
      shortText.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Optional smooth scroll
  });
});




