import { Component } from "@angular/core";
import { EducationListComponent } from "./components/education-list/education-list.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [EducationListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor() {}

  ngOnInit() {
    console.log("HomeComponent initialized");
  }
}
