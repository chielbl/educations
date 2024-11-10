import { Component, Input } from "@angular/core";
import { Education } from "../../../../_types/Education";

@Component({
  selector: "app-education",
  standalone: true,
  imports: [],
  templateUrl: "./education.component.html",
  styleUrl: "./education.component.css",
})
export class EducationComponent {
  @Input() education?: Education;

  fromYear: number = 0;
  toYear: number = 0;
  totalYears: number = 0;

  constructor() {}

  ngOnInit() {
    const from = this.education?.from ? new Date(this.education.from).getFullYear() : 0;
    const to = this.education?.to ? new Date(this.education.to).getFullYear() : 0;
    
    this.fromYear = from
    this.toYear = to
    this.totalYears = to - from;
  }
}
