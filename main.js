// Typing Animation for 'I am a ...'

const textArray = ["Data Analyst", "IT Support Specialist", "Digital Marketer", "Creative Designer"];
let typingElement = null;
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typingElement) {
    typingElement = document.querySelector(".typing");
    if (!typingElement) return;
  }

  const currentText = textArray[index];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textArray.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

// Start the typing animation once the page is loaded
document.addEventListener("DOMContentLoaded", type);
