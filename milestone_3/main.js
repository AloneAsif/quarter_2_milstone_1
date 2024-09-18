var get_form = document.getElementById('resume_form');
get_form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Define Data
    var profile_picture = document.getElementById("profile_picture");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var Skills = document.getElementById('Skills').value;
    var profile_picture_file = (_a = profile_picture.files) === null || _a === void 0 ? void 0 : _a[0];
    var profile_picture_url = profile_picture_file
        ? URL.createObjectURL(profile_picture_file)
        : "";
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = "\n    ".concat(profile_picture_url
        ? "<img src=\"".concat(profile_picture_url, "\" alt=\"profile_picture\" class=\"profilePicture\">")
        : "", "\n        <h2>").concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>education:</strong> ").concat(education, "</p>\n        <p><strong>experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(Skills, "</p>\n        \n    ");
    console.log({
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        Skills: Skills,
    });
    if (resumeDisplay) {
        alert('Your data has been saved at console');
    }
});
