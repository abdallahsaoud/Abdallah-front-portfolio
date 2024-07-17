import { Component, OnInit, Input, HostBinding, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PortfolioService } from '../../service/portfolio.service';

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  projects: any[];
  project: any;
  windowWith: number;
  @Input() projectId: string;
  @HostBinding('style') transform: any;

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    if(!this.projectId){
      this.route.params.subscribe(params => {
        this.projectId = params['id']; 
        this.loadProject();
      });
    } else {
      this.loadProject();
    }
  }

  loadProject() {
    this.portfolioService.getProjectsById(this.projectId).subscribe(project => {
      this.project = project;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.projectId){
      this.loadProject();
      this.transform = {
        'opacity' : '0',
        'transform': 'translateX(100vw)'
      }
      setTimeout(()=>{
        this.transform = {
          'opacity' : '1',
          'transition' : 'opacity 500ms ease 1480ms, transform 500ms ease 1300ms',
          'transform': 'translateX(22vw)'
        }
      }, 10);
    }
  }
}
