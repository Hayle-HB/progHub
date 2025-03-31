const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const createSound = (type, frequency = 200, duration = 0.1) => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    audioContext.currentTime + duration
  );

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
};

export const playCardFlip = () => createSound("sine", 300, 0.1);
export const playMatchSuccess = () => {
  createSound("sine", 500, 0.1);
  setTimeout(() => createSound("sine", 800, 0.1), 100);
};
export const playMatchFail = () => {
  createSound("square", 200, 0.1);
  setTimeout(() => createSound("square", 150, 0.1), 100);
};
export const playGameStart = () => {
  createSound("sine", 400, 0.1);
  setTimeout(() => createSound("sine", 600, 0.1), 100);
  setTimeout(() => createSound("sine", 800, 0.1), 200);
};
export const playGameWin = () => {
  [600, 800, 1000].forEach((freq, i) => {
    setTimeout(() => createSound("sine", freq, 0.15), i * 150);
  });
};
export const playGameLose = () => {
  [400, 300, 200].forEach((freq, i) => {
    setTimeout(() => createSound("square", freq, 0.15), i * 150);
  });
};
