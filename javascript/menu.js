
const panels = document.querySelectorAll('.menu-panel');

panels.forEach(panel => {
  const tab = panel.querySelector('.menu-panel__tab');

  tab.addEventListener('click', () => {
    // Remember whether this panel was already open
    const wasOpen = panel.classList.contains('is-open');


    panels.forEach(p => {
      p.classList.remove('is-open');
      p.querySelector('.menu-panel__tab').setAttribute('aria-expanded', 'false');
    });

    if (!wasOpen) {
      panel.classList.add('is-open');
      tab.setAttribute('aria-expanded', 'true');
    }
  });
});