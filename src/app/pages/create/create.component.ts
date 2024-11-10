import { Component } from "@angular/core";
import { EducationFormComponent } from "../../components/education-form/education-form.component";

@Component({
  selector: "app-create",
  standalone: true,
  imports: [EducationFormComponent],
  templateUrl: "./create.component.html",
  styleUrl: "./create.component.css",
})
export class CreateComponent {}
