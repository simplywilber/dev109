const images = [
  {
    src: "images/kyoto.jpg",
    alt: "A beautiful view of Kyoto",
    desc: "A beautiful view of Kyoto."
  },
  {
    src: "images/tokyo.jpg",
    alt: "A view of Tokyo's city",
    desc: "A view of Tokyo's wonderful city."
  },
  {
    src: "images/fukuoka.jpg",
    alt: "Fukuoka bridge",
    desc: "A romantic view from Fukuoka's famous bridge."
  },
  {
    src: "images/sapporo.jpg",
    alt: "Sapporo in winter",
    desc: "A high view of Sapporo's snowy city."
  },
  {
    src: "images/yokohama.jpg",
    alt: "Yokohama skyline",
    desc: "A view of Yokohama's rich city."
  }
];

let currentIndex = 0;
let countdown = 4;
let countdownTimer;
let autoAdvance = false;

const imgElement = document.getElementById("carousel-img");
const descElement = document.getElementById("image-description");
const timerDisplay = document.getElementById("timer");
const autoBtn = document.getElementById("autoBtn");

function showImage(index) {
  const image = images[index];
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  descElement.textContent = image.desc;
}

function updateTimerDisplay() {
  timerDisplay.textContent = autoAdvance ? countdown : "-";
}

function startCountdown() {
  clearInterval(countdownTimer);
  countdown = 4;
  updateTimerDisplay();

  countdownTimer = setInterval(() => {
    countdown--;
    updateTimerDisplay();

    if (countdown === 0) {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
      countdown = 4;
      updateTimerDisplay();
    }
  }, 1000);
}

function startAuto() {
  autoAdvance = true;
  autoBtn.textContent = "Stop Auto";
  startCountdown();
}

function stopAuto() {
  autoAdvance = false;
  autoBtn.textContent = "Start Auto";
  clearInterval(countdownTimer);
  updateTimerDisplay();
}

function toggleAuto() {
  autoAdvance ? stopAuto() : startAuto();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  if (autoAdvance) startCountdown();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  if (autoAdvance) startCountdown();
}

document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);
autoBtn.addEventListener("click", toggleAuto);

showImage(currentIndex);
updateTimerDisplay();
