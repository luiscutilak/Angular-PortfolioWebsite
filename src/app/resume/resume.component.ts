import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;
  
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Luis Cutilak - Resume');

  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', 'blank');
    link.setAttribute('href', '../../assets/Resumepdf/Luís Cutilak Resume.pdf');
    link.setAttribute('download', 'Luís Cutilak Resume.pdf');
    link.click();
    link.remove();
  }
}
