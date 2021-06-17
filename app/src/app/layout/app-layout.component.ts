import { animate, state, style, transition, trigger } from "@angular/animations";
import { ViewportScroller } from "@angular/common";
import { Component, HostListener } from "@angular/core";


@Component({
  selector: "app-layout",
  templateUrl: "./app-layout.component.html",
  animations: [
    trigger('projectSelected', [
      // ...
      state('selected', style({
        opacity: 0,
      })),
      state('not-selected', style({
        opacity: 1, 
      })),
      transition('selected => not-selected', [
        animate('500ms 300ms ease')
      ]),
      transition('not-selected => selected', [
        animate('500ms 300ms ease')
      ]),
    ]),
  ],
  styleUrls: ["./app-layout.component.scss"],
})
export class AppLayoutComponent {
  pageYoffset: number;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }




  projectSelected = false;
  activeProject = '';
  descriptionAvailable;
  projectAvailable;
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  
  }

  updateView(projectId){
    console.log(projectId);
    this.activeProject = projectId;
    console.log(this.activeProject);
    
    if(projectId){
      this.projectSelected = true;
    } else {
      this.projectSelected = false;
    }
    this.scroll.scrollToPosition([0,0]);
    console.log('test');
    
  }

  updateDescAvailability($event){

    this.descriptionAvailable = true
  }

  updateProjectAvailability($event){

    this.projectAvailable = true
  }
 

}

