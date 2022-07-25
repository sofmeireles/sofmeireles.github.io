let slideIndexNEI = 1;
let slideIndexCNAFF = 1;

function startSlide() {
  showSlidesNEI(1);
  showSlidesCNAFF(1);
}

// Next/previous controls
function plusSlidesNEI(n) {
  showSlidesNEI(slideIndexNEI += n);
}

// Thumbnail image controls
function currentSlideNEI(n) {
  showSlidesNEI(slideIndexNEI = n);
}

function showSlidesNEI(n) {
  let i;
  let slides = document.getElementsByClassName("SlidesNEI");
  if (n > slides.length) { slideIndexNEI = 1 }
  if (n < 1) { slideIndexNEI = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexNEI - 1].style.display = "block";
}



// Next/previous controls
function plusSlidesCNAFF(n) {
  showSlidesCNAFF(slideIndexCNAFF += n);
}

// Thumbnail image controls
function currentSlideCNAFF(n) {
  showSlidesCNAFF(slideIndexCNAFF = n);
}

function showSlidesCNAFF(n) {
  let i;
  let slides = document.getElementsByClassName("SlidesCNAFF");
  if (n > slides.length) { slideIndexCNAFF = 1 }
  if (n < 1) { slideIndexCNAFF = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexCNAFF - 1].style.display = "block";
}