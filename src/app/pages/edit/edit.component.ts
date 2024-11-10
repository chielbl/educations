import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Education } from "../../_types/Education";
import { EducationFormComponent } from "../../components/education-form/education-form.component";
import { EducationService } from "../../services/education.service";

@Component({
  selector: "app-edit",
  standalone: true,
  imports: [CommonModule, EducationFormComponent],
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.css",
})
export class EditComponent {
  education: Observable<Education> = new Observable<Education>();
  educationId?: string | null;

  constructor(
    private educationService: EducationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get("id");
    this.educationId = id;
    if (!id) return;
    this.education = this.educationService.get(+id);
  }
}
