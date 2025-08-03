document.querySelectorAll('.brain-svg a').forEach(link => {
  link.addEventListener('mouseover', () => link.querySelector('text').style.fill = '#ff00ff');
  link.addEventListener('mouseout', () => link.querySelector('text').style.fill = '#fff');
});