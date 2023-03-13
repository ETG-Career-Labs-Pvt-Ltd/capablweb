import { title, Software, Industry, Skills } from "./datascience_project";
import { Content } from "./datascience_project";

const ProjectminorMajors = [];

title.forEach((title, index) => {
  ProjectminorMajors.push({
    title: title,
    content: {
      project_title: title,
      project_description: Content[index],
      project_Softwares: Software[index],
      project_Industry: Industry[index],
      project_Skills: Skills[index],
    },
  });
});

export default ProjectminorMajors;
