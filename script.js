// Minor interactions + theme toggle + year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toggle = document.getElementById('modeToggle');
let forced = null;
if (toggle){
  toggle.addEventListener('click', ()=>{
    if (forced === 'light'){
      forced = 'dark';
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.background = 'radial-gradient(1200px 600px at 10% -10%, #1b1b2a 0%, #0b0b10 60%)';
    } else {
      forced = 'light';
      document.documentElement.style.colorScheme = 'light';
      document.body.style.background = 'radial-gradient(1200px 600px at 10% -10%, #f1f3ff 0%, #ffffff 60%)';
    }
  });
}
// Mobile menu toggle
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.textContent = nav.classList.contains('show') ? "✖" : "☰";
  });

  // Auto-dismiss when clicking a link
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menuBtn.textContent = "☰"; // reset back to hamburger
    });
  });
}
