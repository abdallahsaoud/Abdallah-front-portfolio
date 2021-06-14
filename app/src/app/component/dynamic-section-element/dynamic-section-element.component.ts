import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dynamic-section-element",
  templateUrl: "./dynamic-section-element.component.html",
  styleUrls: ["./dynamic-section-element.component.scss"],
})
export class DynamicSectionElementComponent implements OnInit {
  @Input() section;
  constructor() {}

  ngOnInit(): void {

  }
}
