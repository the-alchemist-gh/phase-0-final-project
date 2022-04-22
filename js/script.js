console.log(projects.length);

projectsContainer = document.getElementById('project-container');
bodyWidth = document.body.offsetWidth;

// console.log(project.title);

function projectTemplate(allProject){
  const template = document.getElementById('project-card');
  const templateClone = template.content.cloneNode(true);
  // projectTitle = allProject.title;
  // console.log(projectTitle)
  templateClone.querySelector('.project-text-title').innerText = allProject.title;
  templateClone.querySelector('.project-text-desc').innerText = allProject.description;
  templateClone.querySelector('.project-img-real').src = `images/${allProject.image}`;
  templateClone.querySelector('.project-btn-text').innerText = allProject.date;
  console.log(templateClone);
  return templateClone;

  // displayProjects();
}

// projectTemplate();


function displayProjects(){

  for (let i=0; i < projects.length; i++){
    const allProject = projects[i];
    projectsContainer.appendChild(projectTemplate(allProject));
    console.log(allProject);


  }
}

displayProjects();