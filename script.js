// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

  // Navbar Scroll Effect
  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  // Form Submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          // Form validation
          const formData = new FormData(this);
          let isValid = true;
          formData.forEach((value, key) => {
              if (!value.trim()) {
                  isValid = false;
              }
          });

          if (isValid) {
              alert('Mesajınız başarıyla gönderildi!');
              this.reset();
          } else {
              alert('Lütfen tüm alanları doldurun.');
          }
      });
  }

  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  
  const nav = document.querySelector('.main-nav');
  if (nav) {
      nav.parentNode.insertBefore(mobileMenuBtn, nav);

      mobileMenuBtn.addEventListener('click', function() {
          nav.classList.toggle('active');
          this.classList.toggle('active');
      });
  }

  // Dil çevirileri
  const translations = {
      'tr': {
          'home': 'ANASAYFA',
          'projects': 'PROJELER',
          'about': 'HAKKIMIZDA',
          'vision': 'VİZYON & MİSYON',
          'contact': 'İLETİŞİM',
          'address': 'AYŞE HAFSA SULTAN ERKEK ÖĞRENCİ YURDU',
          'copyright': '© 2024 Yaldız İnşaat. Tüm hakları saklıdır.',
          // ... diğer çeviriler
      },
      'en': {
          'home': 'HOME',
          'projects': 'PROJECTS',
          'about': 'ABOUT US',
          'vision': 'VISION & MISSION',
          'contact': 'CONTACT',
          'address': 'AYŞE HAFSA SULTAN MALE STUDENT DORMITORY',
          'copyright': '© 2024 Yaldız Construction. All rights reserved.',
          // ... diğer çeviriler
      },
      'ru': {
          'home': 'ГЛАВНАЯ',
          'projects': 'ПРОЕКТЫ',
          'about': 'О НАС',
          'vision': 'ВИДЕНИЕ И МИССИЯ',
          'contact': 'КОНТАКТЫ',
          'address': 'МУЖСКОЕ ОБЩЕЖИТИЕ АЙШЕ ХАФСА СУЛТАН',
          'copyright': '© 2024 Yaldız Construction. Все права защищены.',
          // ... diğer çeviriler
      }
  };

  // Dil değiştirme fonksiyonu
  function changeLang(lang) {
      // Tüm çevrilebilir elementleri bul
      document.querySelectorAll('[data-translate]').forEach(element => {
          const key = element.getAttribute('data-translate');
          if (translations[lang] && translations[lang][key]) {
              element.textContent = translations[lang][key];
          }
      });

      // Aktif dili güncelle
      document.documentElement.lang = lang;
      
      // Dil seçici butonlarını güncelle
      document.querySelectorAll('.language-selector a').forEach(btn => {
          btn.classList.toggle('active', btn.textContent === lang);
      });

      // URL'i güncelle (opsiyonel)
      // window.history.pushState({}, '', `?lang=${lang}`);
  }

  // Sayfa yüklendiğinde
  document.addEventListener('DOMContentLoaded', () => {
      // Dil seçici butonlarına event listener ekle
      document.querySelectorAll('.language-selector a').forEach(btn => {
          btn.addEventListener('click', (e) => {
              e.preventDefault();
              changeLang(btn.textContent);
          });
      });
  });

  // Project Filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');

          const filterValue = button.getAttribute('data-filter');

          projectCards.forEach(card => {
              if (filterValue === 'all') {
                  card.style.display = 'block';
              } else {
                  if (card.querySelector('.project-status').classList.contains(filterValue)) {
                      card.style.display = 'block';
                  } else {
                      card.style.display = 'none';
                  }
              }
          });
      });
  });

  // Image Lazy Loading
  if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                  observer.unobserve(img);
              }
          });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
  }

  // Scroll Animation
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  if (animateElements.length > 0) {
      const elementObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animated');
              }
          });
      }, { threshold: 0.1 });

      animateElements.forEach(element => elementObserver.observe(element));
  }
});