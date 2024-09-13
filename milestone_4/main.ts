let get_form =  document.getElementById('resume_form')
get_form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Define Data
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const Skills = (document.getElementById('Skills') as HTMLInputElement).value;


    const resumeDisplay = document.getElementById('resume-display')!;
    resumeDisplay.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> <span id = "email-edit" class = "editable" >${email}</span> </p>
        <p><strong>Phone:</strong> <span id = "phone-edit" class = "editable" > ${phone} </span> </p>
        <p><strong>education:</strong> <span id = "education-edit" class = "editable" > ${education} </span> </p>
        <p><strong>experience:</strong> <span id = "experience-edit" class = "editable" > ${experience} </span> </p>
        <p><strong>Skills:</strong> <span id = "skills-edit" class = "editable" > ${Skills} </span> </p>
    `;
    // Add event listeners to make fields editable
    document.querySelectorAll('.editable').forEach((element) => {
        element.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = this.textContent!;
            input.addEventListener('blur', function() {
                element.textContent = input.value;
            });
            this.replaceWith(input);
            input.focus();
        });
    });

    console.log({
        name,
        email,
        phone,
        education,
        experience,
        Skills,
    });
});

