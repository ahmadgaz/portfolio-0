const ascii = fetch('profile-pic-ascii.json')
  .then((response) => response.json())
  .then((data) => setAsciiFrames(data.ascii));

const setAsciiFrames = (ascii) => {
  const asciiFrames = ascii.split('=');
  const asciiElement = document.getElementById('profile-pic-ascii');
  let iteration = 0;
  setInterval(() => {
    asciiElement.textContent = asciiFrames[iteration];
    iteration = iteration === asciiFrames.length - 3 ? 0 : iteration + 1;
  }, 100);
};

const trailer = document.getElementById('profile-pic-trailer');
const profilePic = document.getElementsByClassName('profile-pic')[0];

let animationDone = true;
window.onmousemove = (e) => {
  if (!animationDone) {
    return;
  }
  const x = e.clientX,
    y = e.clientY;

  const boundingRect = profilePic.getBoundingClientRect();
  const width = boundingRect.width;
  const height = boundingRect.height;
  const offsetLeft = boundingRect.left;
  const offsetTop = boundingRect.top;

  if (
    x > offsetLeft &&
    x < offsetLeft + width &&
    y > offsetTop &&
    y < offsetTop + height
  ) {
    trailer.setAttribute('cx', x - offsetLeft);
    trailer.setAttribute('cy', y - offsetTop);
  }
};

const duration = 60;
let isMouseOverPic = false;

profilePic.onmouseleave = async () => {
  isMouseOverPic = false;
  if (!animationDone) {
    return;
  }
  animationDone = false;
  const boundingRect = profilePic.getBoundingClientRect();
  const width = boundingRect.width;
  const height = boundingRect.height;

  let rCur = Number(trailer.getAttribute('r'));
  const rDiff = (155 - rCur) / duration;

  let cxCur = Number(trailer.getAttribute('cx'));
  const cxDiff = (width / 2 - cxCur) / duration;

  let cyCur = Number(trailer.getAttribute('cy'));
  const cyDiff = (height / 2 - cyCur) / duration;

  for (let i = 0; i < duration; i++) {
    if (isMouseOverPic) {
      return;
    }
    rCur += rDiff;
    trailer.setAttribute('r', rCur);
    cxCur += cxDiff;
    trailer.setAttribute('cx', cxCur);
    cyCur += cyDiff;
    trailer.setAttribute('cy', cyCur);
    await new Promise((resolve) =>
      setTimeout(resolve, (Math.pow(i - duration / 2, 2) + 1) / duration),
    );
  }
  animationDone = true;
};

profilePic.onmousemove = async () => {
  if (!animationDone) {
    return;
  }
  if (isMouseOverPic) {
    return;
  }
  isMouseOverPic = true;

  let rCur = Number(trailer.getAttribute('r'));
  const rDiff = (40 - rCur) / duration;

  for (let i = 0; i < duration; i++) {
    if (!isMouseOverPic) {
      return;
    }
    if (!animationDone) {
      return;
    }
    rCur += rDiff;
    trailer.setAttribute('r', rCur);
    await new Promise((resolve) =>
      setTimeout(resolve, (Math.pow(i - duration / 2, 2) + 1) / duration),
    );
  }
};
