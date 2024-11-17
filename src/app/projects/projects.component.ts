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
      title: 'Recipe book application',
      technologies: 'HTML5 , CSS3 , javascript , Typescript, Angular 14+ , Firebase',
      descriptions: [
        'Application with login authentication use to manage list of recipe',
        'Used firebase to store the user related data and list of recipe',
        'Having functionality to delete, edit and add recipes to shopping list'
      ]
    },
    {
      title: 'Recipe book application',
      technologies: 'HTML5 , CSS3 , javascript , Typescript, Angular 14+ , Firebase',
      descriptions: [
        'Application with login authentication use to manage list of recipe',
        'Used firebase to store the user related data and list of recipe',
        'Having functionality to delete, edit and add recipes to shopping list'
      ]
    }
  ]
}
