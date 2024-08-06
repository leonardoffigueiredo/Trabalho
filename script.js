document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question h2");
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
  
        if (answer.style.display === "block" || answer.style.display === "") {
          answer.style.display = "none";
          answer.style.opacity = "0";
          answer.style.transition = "opacity 0.3sF ease";
        } else {
          answer.style.display = "block";
          setTimeout(() => {
            answer.style.opacity = "1";
            answer.style.transition = "opacity 0.3s ease";
          }, 10);
        }
      });
    });
  });
  