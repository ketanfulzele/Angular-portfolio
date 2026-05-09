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
      title: 'Truist Bank ',
      technologies: 'java8 , Spring Boot , Microservices , REST , SQL , JUnit, Mockito, Hibernate, AWS, Docker , Git , Ci/Cd , Splunk , Dynatrace',
      descriptions: [
        'Debugged software identified root causes, and proposed solutions to software issues.',
        'Developed and maintained scalable java based microservices for high-traffic banking applications. ',
        'Enhanced code maintainability by implementing efficient AWS & GitHub branching strategies, allowing for 20+ developers to work simultaneously without conflicts. ' ,
        'Collaborate with cross-functional team to integrate RESTful APIs and improving the scalability of the clients in digital infrastructure.' ,
        'Championed the Agile SCRUM methodology, reducing the product time to market by 15% by maintaining the high-quality code.',
        'Pioneered adoption of AWS, GitHub, Rally, and GIT within the development process, improving project tracking and cross-team communication by 50%. ',
        'Developed modules using core java APIs, Collections, Java 1.8(Streams), Stream API, Collection API, Exception Handling and object-oriented design pattern'
      ]
    },
    {
      title: 'Broadridge Financial Organization',
      technologies: 'java8 , Spring Boot , Microservices , REST , SQL , JUnit, Mockito, Hibernate, AWS, Docker , Git , Ci/Cd , Splunk , Dynatrace',
      descriptions: [
        'Implementing and Exposing Microservices Architecture with Spring Boot based services interacting through a combination of REST. ',
        'Developed business component by using Spring Boot, Spring Cloud, Spring security, Spring Annotations and Persistence layer by using JPA along with web services (RESTful). ',
        'Developed modules using core java APIs, Collections, Java 1.8(Streams), Stream API, Collection API, Exception Handling and object-oriented design pattern. ',
        'Followed Agile methodology and involved in daily SCRUM meeting, sprint planning, showcases and retrospective.',
        'Worked on AWS auto scaling for providing high availability of application and EC2 instance based on applications load using cloud watch in AWS. '
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
