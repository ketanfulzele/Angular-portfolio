import { Component } from '@angular/core';
import { Project } from '../model/project.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Recipe book application',
      technologies: 'HTML5 , CSS3 , javascript , Typescript, Angular 14+ , Firebase',
      descriptions: [
        'Application with login authentication use to manage list of recipe',
        'Used firebase to store the user related data and list of recipe',
        'Having functionality to delete, edit and add recipes to shopping list'
      ]
    },
    {
      title: 'Nutrition App',
      technologies: 'HTML5 , CSS3 , Java, Spring Boot , Thymeleaf , spring JPA ',
      descriptions: [
        'Application having many restfull endpoints wo create , read , updates and delete nutrition plans',
        'which can use by many user to see defferent nutrition plan base on their need',
        
      ]
    },
    {
      title: 'Portfolio',
      technologies: 'HTML5 , CSS3 , javascript , Typescript, Angular 14+',
      descriptions: [
        'Build this application to showcase my skills, personal info , work experience and projects',
        
      ]
    }
  ]
}
