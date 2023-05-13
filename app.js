const hiTextContainer = document.querySelector(".hiText-container");
const profilePicContainer = document.querySelector(".image-container");
const myName = document.querySelector(".imOnTai");
const jobTitleContainer = document.querySelectorAll(".job-title-container");
const jobTitle1 = document.querySelector(".front-end-developer-title");
const jobTitle2 = document.querySelector(".web-designer-title");
window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  hiTextContainer.style.transform = `translate(${-offsetY * 0.2}px,${
    -offsetY * 0.1
  }px)`;
  profilePicContainer.style.transform = `translate(${offsetY * 0.1}px,${
    offsetY * 0.2
  }px)`;
  myName.style.transform = `translateX(${offsetY * 0.2}px)`;
  jobTitleContainer[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
  jobTitleContainer[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
  jobTitle1.style.transform = `translateX(${offsetY * 0.09}px)`;
  jobTitle2.style.transform = `translateX(${-offsetY * 0.2}px)`;
});
