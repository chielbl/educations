import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Education } from "../../../../_types/Education";
import { EducationService } from "../../../../services/education.service";
import { EducationComponent } from "../education/education.component";

@Component({
  selector: "app-education-list",
  standalone: true,
  imports: [CommonModule, EducationComponent],
  templateUrl: "./education-list.component.html",
  styleUrl: "./education-list.component.css",
})
export class EducationListComponent {
  educations: Education[] | null = null;

  constructor(private educationService: EducationService) {}

  ngOnInit() {
    this.fetchEducations();
  }

  fetchEducations() {
    this.educationService
      .getAll()
      .subscribe((data) => (this.educations = data || []));
  }
}

/*
DUMMY DATA
{
  id: 1,
  city: "Antwerpen",
  current: true,
  description:
    "Een grote hogeschool met opleidingen in diverse domeinen zoals economie, gezondheid, onderwijs, en technologie.",
  educationType: "",
  fieldOfStudy: "test",
  schoolName: "Karel de Grote Hogeschool (KdG)",
  from: 1143380745884,
  to: 1269611145884,
},
{
  id: 2,
  city: "Vlaanderen",
  current: true,
  description:
    "De grootste hogeschool in Vlaanderen, met een breed aanbod van opleidingen in technologie, gezondheidszorg, onderwijs, en meer.",
  educationType: "",
  fieldOfStudy: "test",
  schoolName: "Thomas More",
  from: 1143380745884,
  to: 1269611145884,
},
{
  id: 3,
  city: "Gent",
  current: true,
  description:
    "Een van de grootste hogescholen in Vlaanderen, met opleidingen in kunst, onderwijs, technologie, en gezondheidszorg.",
  educationType: "",
  fieldOfStudy: "test",
  schoolName: "Hogeschool Gent (HoGent)",
  from: 1143380745884,
  to: 1269611145884,
},
{
  id: 4,
  city: "city",
  current: true,
  description:
    "Een diverse hogeschool met een breed aanbod van opleidingen, van business en technologie tot kunst en communicatie.",
  educationType: "",
  fieldOfStudy: "test",
  schoolName: "Erasmushogeschool Brussel (EhB) ",
  from: 1143380745884,
  to: 1269611145884,
}
*/
