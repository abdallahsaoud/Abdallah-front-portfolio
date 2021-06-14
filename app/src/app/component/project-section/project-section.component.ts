import { Component, OnInit, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { PortfolioService } from '@app/service/portfolio.service';


@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {

  projects;
  activeProject: string;
  activeIndex: number;
  projectNumbers;
  @Output() projectsAvailable = new EventEmitter();
  @Output() projectChange = new EventEmitter();

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
      // GET Projects from strapi
      this.portfolioService.getProjects().subscribe((results) => {
        this.projects = results;
        this.projectNumbers = this.projects.length
        localStorage.setItem('projects', JSON.stringify(this.projects));
        this.projectsAvailable.emit('true')
      });
  }

  changeProject($event){
    this.activeProject = $event.projectId
    this.activeIndex = $event.index
    this.projectChange.emit(this.activeProject) 
  }
  

}
