let get_form = document.getElementById('resume_form')
get_form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Define Data
    const profile_picture = document.getElementById(
        "profile_picture"
      ) as HTMLInputElement;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const Skills = (document.getElementById('Skills') as HTMLInputElement).value;


    const profile_picture_file = profile_picture.files?.[0];
  const profile_picture_url = profile_picture_file
    ? URL.createObjectURL(profile_picture_file)
    : "";

    const resumeDisplay = document.getElementById('resume-display')!;
    resumeDisplay.innerHTML = `
    ${
          profile_picture_url
            ? `<img src="${profile_picture_url}" alt="profile_picture" class="profilePicture">`
            : ""
        }
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
