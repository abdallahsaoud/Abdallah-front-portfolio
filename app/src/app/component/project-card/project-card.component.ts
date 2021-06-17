import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent implements OnInit {
  @Input() project; // PROJECT INTERFACE
  @Input() index;
  @Input() activeProject;
  @Input() projectNumbers;
  @Output() onCardSelect = new EventEmitter();
  @HostBinding("style") transform: {};
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getTransform();
  }

  cardClick(type) {
    if (type === "project") {
      if (window.innerWidth > 1025) {
        this.onCardSelect.emit({
          index: this.index,
          projectId: this.project.id,
        });
      } else {
        this.router.navigate([`project/${this.project.id}`]);
      }
    } else {
      this.onCardSelect.emit({ index: "", projectId: "" });
    }
  }

  getTransform() {
    if (!this.activeProject) {
      this.transform = {
        transform: `translateX(calc(350% + 5vw))`,
        transition: "transform 300ms ease",
      };
    } else if (this.index === this.activeProject) {
      let transformPosition = -100 * (this.activeProject - 1);
      let padding = 1.5 * (this.index - 1);
      this.transform = {
        transform: `translateX(calc((${transformPosition}%) - ${padding}vw))`,
        transition: "transform 300ms ease",
        "transition-delay": "600ms",
      };
    } else if (this.index < this.activeProject) {
      let projectDiff = this.activeProject - this.index;
      let transformPosition = -100 * this.index + (projectDiff - 1) * -50;
      let padding = 1.5 * this.index;
      this.transform = {
        transform: `translateX(calc(${transformPosition}% - ${padding}vw))`,
        transition: "transform 300ms ease",
        "transition-delay": "600ms",
      };
    } else if (this.index > this.activeProject) {
      if (this.index > 2 && this.activeProject === this.index - 1) {
        let transformPosition = 100 * (this.index - 2);
        let padding = 5 - (1.5 * this.index - 3);
        this.transform = {
          transform: `translateX(calc( (350% - ${transformPosition}%) + ${padding}vw))`,
          transition: "transform 300ms ease",
          "transition-delay": "600ms",
        };
      } else {
        let diff =
          this.projectNumbers - (this.projectNumbers - this.activeProject);
        let padding;
        if (this.index === 2) {
          padding = 5;
        } else {
          padding = 5 - 1.5 * (this.index - 3);
        }

        let transformPosition = 100 * (diff - 1);
        this.transform = {
          transform: `translateX(calc( (350% - ${transformPosition}%) + ${padding}vw ) ) `,
          transition: "transform 300ms ease",
          "transition-delay": "600ms",
        };
      }
    } else {
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.activeProject.firstChange && changes.activeProject) {
      this.activeProject = changes.activeProject.currentValue;
      this.getTransform();
    }
  }
}
