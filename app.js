const hiTextContainer = document.querySelector(".hiText-container");
const profilePicContainer = document.querySelector(".image-container");
const myName = document.querySelector(".imOnTai");
const jobTitleContainer = document.querySelectorAll(".job-title-container");
const jobTitle1 = document.querySelector(".front-end-developer-title");
const jobTitle2 = document.querySelector(".web-designer-title");
const projectTitle = document.querySelectorAll(".project-title");
const projectDetail = document.querySelectorAll(".project-detail");
const appShowcase = document.querySelectorAll(".app-showcase");
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
  jobTitle1.style.transform = `translateX(calc(200vh - ${offsetY}px))`;
  jobTitle2.style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
  projectTitle[0].style.transform = `translateY(calc(400vh - ${offsetY}px))`;
  projectDetail[0].style.transform = `translateY(calc(400vh - ${
    offsetY * 0.9
  }px))`;
  appShowcase[0].style.transform = `translateX(calc(500vh - ${
    offsetY * 1.1
  }px))`;
});
