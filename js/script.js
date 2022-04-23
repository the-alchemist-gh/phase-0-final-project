const projectsContainer = document.getElementById('project-container');
let askName = prompt('Hi, Kindly Enter your name?');
let getName = document.getElementById('get-name');

getName.innerHTML = `Hello ${askName},` +"<br>"+`Welcome to my Portfolio Page`



function projectTemplate(allProject){
  const template = document.getElementById('project-card');
  const templateClone = template.content.cloneNode(true);
  templateClone.querySelector('.project-text-title').innerText = allProject.title;
  templateClone.querySelector('.project-text-desc').innerText = allProject.description;
  templateClone.querySelector('.project-img-real').src = `images/${allProject.image}`;
  templateClone.querySelector('.project-btn-text').innerText = allProject.date;
  console.log(templateClone);
  return templateClone;

}


function displayProjects(){

  for (let i=0; i < projects.length; i++){
    const allProject = projects[i];
    projectsContainer.appendChild(projectTemplate(allProject));
  }
}

displayProjects();