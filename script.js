var projects = document.querySelectorAll('.project');
var windowHeight = window.innerHeight;

function checkPosition() {
  for (var i = 0; i < projects.length; i++) {
    var projectPosition = projects[i].getBoundingClientRect().top;
    if (projectPosition - windowHeight <= 0) {
      projects[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', checkPosition);


window.addEventListener("scroll", function() {
    let resumeSection = document.getElementById("resume");
    let resumeItems = resumeSection.querySelectorAll(".timeline li");
    let offset = resumeSection.offsetTop - window.innerHeight + 150;
    if (window.pageYOffset > offset) {
      resumeItems.forEach(function(item, index) {
        setTimeout(function() {
          item.classList.add("animate");
        }, index * 200);
      });
    }
  });
  