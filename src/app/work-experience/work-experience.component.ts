import { Component } from '@angular/core';
import { WorkExperience } from '../model/workexperience.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  workExperiences: WorkExperience[] = [

    {
      role: 'Software Engineer',
      company: 'Cognizant Technologies Solution Pvt Limited.',
      type: 'Full Time',
      duration: '24 september 2022 -  present',
      descriptions: [
        'Worked with multiple teams to develop web applications',
        'Worked on technology such as (HTML , CSS , Java, Javascript , Typescript, Angular, Git, Rally)'
      ]
    },
    {
      role: 'Software Engineer Intern',
      company: 'Cognizant Technologies Solution Pvt Limited.',
      type: 'Interenship',
      duration: '1st January 2022 -  30th July 2022',
      descriptions: [
        'Worked with teams to develop andf design web applications',
        'Worked on technology such as (HTML , CSS , Java, Javascript , Typescript, Angular, Git, Rally)'
      ]
    },

  ]
}
