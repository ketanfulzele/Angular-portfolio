import { Component } from '@angular/core';
import { Skill } from '../model/skills.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills: Skill[] = [
    {
      name: 'HTML 5',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'CSS 3',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'Javascript',
      level: 'Intermidiate',
      rating: '80%'
    },
    {
      name: 'Typescript',
      level: 'Intermidiate',
      rating: '80%'
    },
    {
      name: 'Angular',
      level: 'Expert',
      rating: '95%'
    },
    {
      name: 'Java',
      level: 'Expert',
      rating: '80%'
    },
    {
      name: 'Spring Boot',
      level: 'Expert',
      rating: '95%'
    },
    {
      name: 'Spring Microservices',
      level: 'Intermidiate',
      rating: '60%'
    },
    {
      name: 'Git',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'Docker',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'AWS',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'Rally',
      level: 'Expert',
      rating: '95%'
    },
    {
      name: 'Soap Ui',
      level: 'Expert',
      rating: '95%'
    },
    {
      name: 'Postman',
      level: 'Expert',
      rating: '95%'
    },
    {
      name: 'Splunk',
      level: 'Moderate',
      rating: '70%'
    },
    {
      name: 'Dynatrace',
      level: 'Expert',
      rating: '95%'
    },
  ]
}
