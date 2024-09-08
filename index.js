document.getElementById("resume").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("resumeName").textContent = document.getElementById("name").value;
    document.getElementById("resumeAbout").textContent = document.getElementById("aboutTextarea").value;
    document.getElementById("resumeEmail").textContent = document.getElementById("email").value;
    document.getElementById("resumePhone").textContent = document.getElementById("phone").value;
    document.getElementById("resumeEducation").textContent = document.getElementById("Education").value;
    document.getElementById("resumeExperience").textContent = document.getElementById("work-experience").value;
    document.getElementById("resumeSkills").textContent = document.getElementById("skills").value;

    document.getElementById("resume-build").classList.remove("hidden");
});
