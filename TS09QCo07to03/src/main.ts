// Utility Types

// Record
type Students = "Sara" | "Kelly"

interface Grades {
    assign1: number
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 }
}