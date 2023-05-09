const dots = document.querySelectorAll('.tour__dot');

dots.forEach(dot => {
  dot.addEventListener('mouseenter', () => {
    const images = dot.querySelectorAll('.tour__hover');

    images.forEach(image => {
      image.style.display = 'block';
    });
  });

  dot.addEventListener('mouseleave', () => {
    const images = dot.querySelectorAll('.tour__hover');

    images.forEach(image => {
      image.style.display = 'none';
    });
  });
});


