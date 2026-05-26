export interface Question {
  id: string,
  type: "single-choice" | "multiple-choice",
  question: string,
  options: {
    value: string,
    label: string,
    icon: string,
  }[],
}