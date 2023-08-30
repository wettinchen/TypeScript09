// Utility Types

// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>