<script>
  let currentIndex = 0;
    const slides = document.querySelector('.slidees');
    const totalSlides = slides.children.length;

    function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 250; 
    slides.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showNextSlide, 3000);
</script>
