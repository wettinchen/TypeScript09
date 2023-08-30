// Utility Types

interface Assignment {
    studentId: string
    title: string
    grade: number
    verified?: boolean
}

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85
}