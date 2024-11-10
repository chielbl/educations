import { CommonModule } from "@angular/common";
import { Component, Input, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  EDUCATION_TYPES,
  Education,
  EducationForm,
} from "../../_types/Education";
import { mapperEducationForm } from "../../_utils/mapper-education-form";
import { EducationService } from "../../services/education.service";

@Component({
  selector: "app-education-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./education-form.component.html",
  styleUrl: "./education-form.component.css",
})
export class EducationFormComponent {
  @Input() education?: Education;

  @ViewChild("educationForm") educationForm?: NgForm;

  educationDetails: EducationForm = {
    city: "",
    description: "",
    educationType: "",
    fieldOfStudy: "",
    schoolName: "",
    from: "",
    to: "",
  };
  educationTypes = EDUCATION_TYPES.filter((t) => t !== "");
  returnUrl: string;

  constructor(
    private educationService: EducationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  ngOnInit() {
    console.log("Education:", this.education);
    if (this.education) {
      this.educationDetails = {
        ...this.education,
        from: this.education.from.toString(),
        to: this.education.to.toString(),
      };
    }
  }

  submitForm(): void {
    if (!this.educationForm || !this.educationForm.valid) return;
    if (this.education) {
      return this.updateEducation(this.education.id, this.educationDetails);
    }

    this.createEducation(this.educationDetails);
  }

  createEducation(educationDetails: EducationForm) {
    const mappedEducation = mapperEducationForm(educationDetails);
    this.educationService.create(mappedEducation).subscribe({
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

  updateEducation(educationId: number, educationDetails: EducationForm) {
    const mappedEducation = mapperEducationForm(educationDetails);
    const updatedEducation = {
      ...mappedEducation,
      id: educationId,
    };
    console.log("updated Education:", updatedEducation);
    this.educationService.update(updatedEducation).subscribe({
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
