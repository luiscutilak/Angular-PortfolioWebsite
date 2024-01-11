import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  
  projects = {} as Project[];

  isCollapsed: boolean = true;

  typescript: boolean = false;
  javascript: boolean = false;
  angular: boolean = false;
  java: boolean = false;
  tdd: boolean = false;
  springboot: boolean = false;
  sql: boolean = false;
  css: boolean = false;
  html: boolean = false;
  docker: boolean = false;  
  filtering: boolean = false;  


  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Luis Cutilak - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if(this.java) {
      filterTags.push(Tag.JAVA);
    }
    if(this.tdd) {
      filterTags.push(Tag.TDD);
    }
    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if(this.springboot) {
      filterTags.push(Tag.SPRINGBOOT);
    }
    if(this.sql) {
      filterTags.push(Tag.SQL);
    }
    if(this.css) {
      filterTags.push(Tag.CSS);
    }
    if(this.html) {
      filterTags.push(Tag.HTML);
    }
    if(this.docker) {
      filterTags.push(Tag.DOCKER);
    }

    if (this.typescript || this.angular || this.css || this.docker || this.html || this.java || this.javascript || this.springboot || this.sql || this.tdd) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
  this.typescript = false;
  this.javascript = false;
  this.angular = false;
  this.java = false;
  this.tdd = false;
  this.springboot = false;
  this.sql = false;
  this.css = false;
  this.html = false;
  this.docker = false;  
  this.filtering = false;
  
  this.projects = this.projectService.GetProjects();
  }
}
