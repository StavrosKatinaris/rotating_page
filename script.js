// JavaScript to handle the scrolling and rotation
const rotatingObject = document.getElementById('rotatingObject');
const rightSection = document.getElementById('right-section');

rightSection.addEventListener('scroll', () => {
    const scrollPercentage = (rightSection.scrollTop / (rightSection.scrollHeight - rightSection.clientHeight)) * 100;
    const rotation = `rotate(${scrollPercentage}deg)`;
    rotatingObject.style.transform = rotation;
});
