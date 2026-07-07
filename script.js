const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {

    
    if (entry.isIntersecting) {

      
      setTimeout(() => {
        entry.target.classList.add('visible'); 
      }, index * 100); 

      
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 
});

revealElements.forEach(el => revealObserver.observe(el));

const typedEl = document.getElementById('typed-role');

const roles = [
  'Frontend Developer',
  'UI Enthusiast',
  'Web Designer',
  'React Learner',
  'Creative Coder'
];

let roleIndex = 0;    
let charIndex = 0;    
let isDeleting = false; 

function typeEffect() {
  const currentRole = roles[roleIndex]; 

  if (!isDeleting) {
    
    typedEl.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;

    
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800); 
      return; 
    }

  } else {
    
    typedEl.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;

    
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; 
    }
  }

  
  
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

setTimeout(typeEffect, 1000);

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {

  
  if (window.scrollY > 50) {
    
    navbar.style.background = 'rgba(8,8,16,0.97)';
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
  } else {
    
    navbar.style.background = 'rgba(8,8,16,0.85)';
    navbar.style.boxShadow = 'none';
  }

  
  highlightActiveLink();
});

function highlightActiveLink() {
  
  const sections = ['home', 'about', 'skills', 'contact'];

  sections.forEach(id => {
    const section = document.getElementById(id);
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (!section || !link) return; 

    const rect = section.getBoundingClientRect(); 

    
    if (rect.top <= 120 && rect.bottom >= 120) {
      
      navLinks.forEach(l => l.classList.remove('active'));
      
      link.classList.add('active');
    }
  });
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open'); 

  
  const spans = hamburger.querySelectorAll('span');
  if (navMenu.classList.contains('open')) {
    
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    
    spans[1].style.opacity = '0';
    
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open'); 
    
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      
      const fills = entry.target.querySelectorAll('.skill-fill');

      fills.forEach(fill => {
        
        const targetWidth = fill.getAttribute('data-width');

        
        setTimeout(() => {
          fill.style.width = targetWidth + '%'; 
        }, 200);
      });

      
      skillObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3 
});

document.querySelectorAll('.skill-card').forEach(card => {
  skillObserver.observe(card);
});

const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent; 

  
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true; 

  
  setTimeout(() => {
    
    contactForm.reset();

    
    formSuccess.style.display = 'block';

    
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    
    setTimeout(() => {
      formSuccess.style.display = 'none';
    }, 5000);
  }, 1500);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault(); 

    const targetId = anchor.getAttribute('href'); 
    const targetEl = document.querySelector(targetId); 

    if (targetEl) {
      
      const offset = targetEl.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: 'smooth' 
      });
    }
  });
});