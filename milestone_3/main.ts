let get_form = document.getElementById('resume_form')
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
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>education:</strong> ${education}</p>
        <p><strong>experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${Skills}</p>
        
    `;

    console.log({
        name,
        email,
        phone,
        education,
        experience,
        Skills,
       
    });

    if(resumeDisplay){
        alert('Your data has been saved at console')
    }

});
