export const EDUCATION_TYPES = ["BACHELOR", "MASTER", ""] as const;
export type EducationTypes = (typeof EDUCATION_TYPES)[number];

export type Education = {
  id: number;
  city: string;
  current: boolean;
  description: string;
  educationType: EducationTypes;
  fieldOfStudy: string;
  schoolName: string;
  from: number;
  to: number;
};

export type EducationForm = {
  city: string;
  description: string;
  educationType: EducationTypes;
  fieldOfStudy: string;
  schoolName: string;
  from: string;
  to: string;
};
