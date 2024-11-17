import { Component } from '@angular/core';
import { Education } from '../model/education.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  educations: Education[] = [
    {
      institute: 'Bhausaheb servey vidyalaya, Nagpur',
      course: 'SSC',
      duration: '2014-2016',
      score: '86%'
    },
    {
      institute: 'Vidharbha Buniyadi Secondary High school, Nagpur',
      course: 'HSC',
      duration: '2016-2018',
      score: '84%'
    },
    {
      institute: 'Yashwant Roa Chanvhan College Of Engineering, Nagpur',
      course: 'BE',
      duration: '2018-2022',
      score: '83.6%'
    }
  ]
}
