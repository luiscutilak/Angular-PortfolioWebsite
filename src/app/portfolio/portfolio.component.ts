import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projects: Project[] = [
    {id: 0, name: "BuzzFeed Project", pictures: [], projectLink: "https://github.com/luiscutilak/DIO-Angular-BuzzFeed", summary: "Fullstack web app developed using CSS, HTML, Angular and Typescript", description: "Project developed for a question and answer quizz, carried out by the technology school. Digital Inovation One, hardSkills such as CSS, HTML, Angular and TypeScript were used in the project.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS]},
    {id: 1, name: "TodoList Project", pictures: [], projectLink: 'https://github.com/luiscutilak/ToDoList_SpringBoot', summary: "Backend developed using Java, SpringBoot, Docker", description: "Project developed together with RocketSeat, a technology school, using CRUD methodology, aimed at backend simulating databases.", tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.DOCKER]},
    {id: 2, name: "CashCardFamily Project", pictures: [], projectLink: "https://github.com/luiscutilak/CashCardFamily", summary: "Backend project, APIs REST, Spring Security, data persistence, and modern applicatioin development", description: "In this project, an application was created for families to manage their expenses in the form of digital cards. A great lesson from the same configuration of realistic project to build software and prepare to solve realistic problems. Developed together with the official springboot academy. Implementing tests TDD", tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.TDD, Tag.SQL]},
    {id: 3, name: "Pokedex Project", pictures: [], projectLink: "https://github.com/luiscutilak/pokedex", summary: "Fullstack web app developed using CSS, HTML and JavaScript", description: "Project developed using PokeAPI, with asynchronous operations and a lot of javascript.", tags: [Tag.JAVASCRIPT, Tag.HTML, Tag.CSS]},
    {id: 4, name: "Vacancy Management Project", pictures: [], projectLink: "https://github.com/luiscutilak/projeto-gestao-de-vagas", summary: "Backend app developed using Java and Docker", description: "This is a Spring Boot application that allows the management of Human Resources (HR) vacancies.", tags: [Tag.JAVA, Tag.DOCKER, Tag.SPRINGBOOT]},
    {id: 5, name: "Marvel-Blog Project", pictures: [], projectLink: "https://github.com/luiscutilak/angular-blog", summary: "Fullstack web app developed using CSS, HTML, Angular and Typescript", description: "Blog with fictional news about the main Marvel characters", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS]},
    {id: 6, name: "Pro-WayComputers e-commerce Project", pictures: [], projectLink: "https://github.com/luiscutilak/angular-blog", summary: "Fullstack web app developed using CSS, HTML, Angular and Typescript", description: "Blog with fictional news about the main Marvel characters", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS]},
  ];
    
    


  constructor(private titleService: Title){
    this.titleService.setTitle('Luis Cutilak - Portfolio');

  }
}
