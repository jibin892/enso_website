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
