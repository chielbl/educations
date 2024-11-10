import { Education, EducationForm } from "../_types/Education";

export const mapperEducationForm = (education: EducationForm):Education => {
  const { from, to } = education;
  // Easy way to generate a unique id
  const id = +new Date().getTime().toString().slice(4);
  const fromValue = new Date(from).getTime();
  const toValue = new Date(to).getTime();
  return {
    ...education,
    id,
    current: false,
    from: fromValue,
    to: toValue,
  };
};
