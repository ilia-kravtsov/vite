export const useCircularText = () => {
  const text = document.querySelector('.about-hero__get-in-touch-text');
  text.innerHTML = text.innerText
    .split('')
    .map(
      (char, i) =>
        `<span style='transform:rotate(${i * 9.2}deg)'>${char}</span>`,
    )
    .join('');
};
