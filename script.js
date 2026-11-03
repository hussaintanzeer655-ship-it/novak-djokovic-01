(() => {
  const themeBtn = document.getElementById('themeBtn');
  const root = document.documentElement;
  const stored = localStorage.getItem('djoko-theme');
  if (stored) apply(stored);
  themeBtn.addEventListener('click', ()=>{
    const next = (document.documentElement.style.getPropertyValue('--bg') || '') ? 'dark' : 'light';
    const mode = (localStorage.getItem('djoko-theme') === 'dark') ? 'light' : 'dark';
    apply(mode);
  });
  function apply(mode){
    if (mode === 'dark') {
      root.style.setProperty('--bg','#0b0f14');
      root.style.setProperty('--text','#e7f0f3');
      localStorage.setItem('djoko-theme','dark');
    } else {
      root.style.setProperty('--bg','#f7f7f7');
      root.style.setProperty('--text','#0a0a0a');
      localStorage.setItem('djoko-theme','light');
    }
  }
})();