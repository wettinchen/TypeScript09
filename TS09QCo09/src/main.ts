// Utility Types

type LetterGrades = "A" | "B" | "C" | "D" | "U"

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">