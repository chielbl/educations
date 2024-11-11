import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  returnUrl: string;

  constructor(
    private educationService: EducationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get("id");
    this.educationId = id;
    if (!id) return;
    this.education = this.educationService.get(+id);
  }

  deleteEducation() {
    const result = confirm("Are you sure you want to delete this education?");
    if (!this.educationId || !result) return;
    this.educationService.delete(+this.educationId).subscribe({
      next: (response) => {
        console.log("Response:", response);
        // Success
        this.router.navigate([this.returnUrl]);
      },
      error: (error) => {
        console.error("Error:", error);
      },
    });
  }
}
