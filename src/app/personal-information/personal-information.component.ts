import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {

  userData: string[][] = [
    ['Name', 'Ketan Fulzele'],
    ['DOB', '08/24/2001'],
    ['Work Experinece', '2.1+ years'],
    ['Education', 'B.Tech'],
    ['Interest', 'Cricket']
  ];

  aboutMe: string[] = [
    'Hi, I am software engineer with 2.1+ year of experience in IT industry.',
    'Worked as software engineer in Cognizant Technology Solutions for various technologies (HTML , CSS , Javascript,TYpescrit, JQuery, Bootstrap, Angular , Git , Rally , Splunk, SoapUI, Postman, Dynatrace)',
    'Delivered all work within deadline. Always eager to learn new technologies.',
    'Currently working as Software Engineer at Cognizant technology solutions.'
  ]

}
