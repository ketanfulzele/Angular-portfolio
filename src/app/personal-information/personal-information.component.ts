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
    ['Work Experinece', '4+ years'],
    ['Education', 'B.Tech'],
    ['Interest', 'Cricket']
  ];

  aboutMe: string[] = [
    `Java Spring Boot Developer with 4+ years of experience in designing, developing, and 
    deploying enterprise-grade microservices for banking and financial services clients 
    including Broadridge Financial and Truist Bank.` , `Strong expertise in Java 8, Spring Boot 3, 
    Microservices, AWS, Docker, CI/CD, and distributed systems patterns such as Saga, CQRS, 
    and Event-Driven Architecture. Proven experience in cards domain, e-commerce platforms, 
    REST/SOAP APIs, and cloud-native applications.` , ` AWS & Azure certified professional with 
    hands-on experience in production monitoring and performance optimization.`
  ]

}
