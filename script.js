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
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
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
          // Form gönderme işlemi burada yapılacak
          alert('Mesajınız başarıyla gönderildi!');
          contactForm.reset();
      });
  }

  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  
  const nav = document.querySelector('.main-nav');
  nav.parentNode.insertBefore(mobileMenuBtn, nav);

  mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');
  });

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
          btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
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
              const lang = btn.getAttribute('data-lang');
              changeLang(lang);
          });
      });
  });
});

// Image Lazy Loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  let lazyImage = entry.target;
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.classList.remove("lazy");
                  lazyImageObserver.unobserve(lazyImage);
              }
          });
      });

      lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
      });
  }
});

// Animasyon için scroll eventi
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
      const position = element.getBoundingClientRect();
      if(position.top < window.innerHeight) {
          element.classList.add('animated');
      }
  });
});