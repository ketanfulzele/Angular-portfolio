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
      name: 'Java 8',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'Spring Boot',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'Microservices',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'REST',
      level: 'Expert',
      rating: '90%'
    },
    {
      name: 'JUnit',
      level: 'Expert',
      rating: '95%'
    },
    {
      name: 'Mockito',
      level: 'Expert',
      rating: '80%'
    },
    {
      name: 'SQL',
      level: 'Expert',
      rating: '95%'
    },
    {
      name: 'Hibernate',
      level: 'Expert',
      rating: '95%'
    },
    {
      name: 'Git',
      level: 'Expert',
      rating: '90%'
    },
     {
      name: 'Gitlab',
      level: 'Intermidiate',
      rating: '70%'
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
      name: 'CI/CD',
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
