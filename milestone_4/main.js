var get_form = document.getElementById('resume_form');
get_form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Define Data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var Skills = document.getElementById('Skills').value;
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> <span id = \"email-edit\" class = \"editable\" >").concat(email, "</span> </p>\n        <p><strong>Phone:</strong> <span id = \"phone-edit\" class = \"editable\" > ").concat(phone, " </span> </p>\n        <p><strong>education:</strong> <span id = \"education-edit\" class = \"editable\" > ").concat(education, " </span> </p>\n        <p><strong>experience:</strong> <span id = \"experience-edit\" class = \"editable\" > ").concat(experience, " </span> </p>\n        <p><strong>Skills:</strong> <span id = \"skills-edit\" class = \"editable\" > ").concat(Skills, " </span> </p>\n    ");
    // Add event listeners to make fields editable
    document.querySelectorAll('.editable').forEach(function (element) {
        element.addEventListener('click', function () {
            var input = document.createElement('input');
            input.type = 'text';
            input.value = this.textContent;
            input.addEventListener('blur', function () {
                element.textContent = input.value;
            });
            this.replaceWith(input);
            input.focus();
        });
    });
    console.log({
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        Skills: Skills,
    });
});
