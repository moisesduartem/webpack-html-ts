const $helloWorldMessage: HTMLHeadingElement = document.querySelector('h1');
const $colorChangerButton: HTMLButtonElement = document.querySelector('#colorChanger');

$colorChangerButton.addEventListener('click', (e) => {
  $helloWorldMessage.style.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
});
