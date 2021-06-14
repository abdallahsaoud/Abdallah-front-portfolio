import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, HostBinding, Input, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  projects; // TODO PROJECT INTERFACE ARRAY
  project; // TODO PROJECT INTERFACE
  windowWith;
  @Input() projectId;
  @HostBinding('style') transform: {};
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(!this.projectId){
      this.route.params.subscribe(params => {
        this.projectId = params['id']; 
        console.log(this.projectId);
        let projects = JSON.parse(localStorage.getItem("projects"));
        this.project = this.getProject(projects,this.projectId);
      });
    } else {
      let projects = JSON.parse(localStorage.getItem("projects"));
      this.project = this.getProject(projects,this.projectId);
    }
  }

  getProject(projects, projectId) {
    let project;
    projects.forEach(element => {
      if(element.id === projectId) {
        project =  element
      } else {
        console.log('project not found');
        return 'not found' 
      }
    });
    return project
  }


  ngOnChanges(changes: SimpleChanges) {
    let projects = JSON.parse(localStorage.getItem("projects"));
    this.transform = {
      'opacity' : '0',
      'transform': 'translateX(100vw)'
    }
    if(changes.projectId){
      console.log('change');
      this.project = this.getProject(projects,changes.projectId.currentValue)
     
      setTimeout(()=>{
        this.transform = {
          'opacity' : '1',
          'transition' : 'opacity 100ms ease 0s, transform 500ms ease',
          'transition-delay': '900ms',
          'transform': 'translateX(19.5vw)'
        }
      },10)
     
   
    }

    
  
  }

  onAnimationEvent( event ) {
  
  }
}
