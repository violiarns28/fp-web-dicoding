function toggleList(section) {
  var contents = document.querySelectorAll(`#content-${section}, #major-${section}, #gpa-${section}`);
  var arrow = document.getElementById(`arrow-${section}`);
  var text = document.getElementById(`text-${section}`);

  contents.forEach(content => {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  },);

  if (contents[0].style.display === 'block') {
    arrow.classList.remove('arrow-right');
    arrow.classList.add('arrow-down');
    text.textContent = 'Hide details';
  } else {
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    text.textContent = 'See details';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var sections = ['high-school', 'university']; 

  sections.forEach(section => {
    var contents = document.querySelectorAll(`#content-${section}, #major-${section}, #gpa-${section}`);
    contents.forEach(content => {
      content.style.display = 'none'; 
    });
  });
});

let slideIndex = 0;
let isFirstLoad = true; 

const projectDescriptions = [
  {
    title: "Employee Attendance Mobile App",
    description: "This project was my latest intern project at PT Bantu Pengusaha Bertumbuh as an IT Intern. Its is an apps that used to track the employee's presence in the office.I developed it with Flutter.",
    url:"https://github.com/violiarns28/bantu_pengusaha",
  },

  {
    title: "Dot Coaching Mobile App",
    description: "Dot Coaching is team project with my friend that we designed to enhance coaching effectiveness, helping coaches to manage their schedules and trainees more effectively. In this project, my jobdesc is to make UI/UX design and implemented the frontend. And also we developed it with Flutter.",
    url:"https://github.com/dot-coaching/mobile",
  },

  {
    title: "Zenta CV Website",
    description: "Zenta CV is a modern CV builder that allows users to create, customize, and download their professional resumes. This project also team project with my friend, but we have a different jobdesc. My jobdesc is to designed the UI/UX and implemented the frontend.",
    url:"https://cv.zenta.dev/"
  },

  {
    title: "Calculator Mobile App",
    description: "This is my first experience to developed mobile app using Flutter, and yeah I choose to developed a simply calculator. It has many features like substraction, multiplication, division, percent, etc.",
    url:"https://github.com/zenta-dev/calculator",
  },

  {
    title: "Sky Printing Mobile App",
    description: "This is my final project in final semester, exactly in 5th semesters. And also this is a team project, with my jobdesc is to design UI/UX and implemented the frontend, too. It is a platform to print the documents automatically connect in printers.",
    url:"https://github.com/zenta-dev/sky_printing",
  },

  {
    title: "Karya Lokal",
    description: "This is also the final project in 5th semester with my friends. This is a marketplace designed for local artists to showcase and sell their work online. My jobdesc is also to designed the UI.UX and implemented the frontend, too.",
    url:"https://github.com/zenta-dev/karya-lokal",
  },
  
  {
    title: "Leafy Lane",
    description: "Leafy lane is an e-commerce project focused on selling decorative plants. This one is my first experience to try Bootstrap. At this time, I just design the UI.",
    url:"https://github.com/zenta-dev/LeafyLane",
  }
];

function updateProjectContent(n) {
  let titleElement = document.getElementById("project-title");
  let descriptionElement = document.getElementById("project-description");
  let moreDetailsButton = document.querySelector(".project-description button");

  const currentProject = projectDescriptions[n];

  titleElement.textContent = currentProject.title;
  descriptionElement.textContent = currentProject.description;
  moreDetailsButton.setAttribute('onclick', `window.open('${currentProject.url}', '_blank')`);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (isFirstLoad) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.transition = "none";
      slides[i].style.display = "none"; 
    }
    slides[n].style.display = "block"; 
    isFirstLoad = false; 
  } else {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      slides[i].style.transition = "opacity 0.5s ease";
    }
  }

  slides[n].style.display = "block";
  dots[n].className += " active";

  updateProjectContent(n);
}

function currentSlide(n) {
  slideIndex = n - 1; 
  showSlides(slideIndex); 
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= projectDescriptions.length) {
    slideIndex = 0; 
  }
  showSlides(slideIndex);
}

function autoSlide() {
  slideIndex++;
  if (slideIndex >= projectDescriptions.length) {
    slideIndex = 0; 
  }
  showSlides(slideIndex);
  setTimeout(autoSlide, 5000); 
}

showSlides(slideIndex);

autoSlide();

