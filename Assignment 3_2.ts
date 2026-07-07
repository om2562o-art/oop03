enum CourseStatus {
    Open = "Open",
    Closed = "Closed",
    Full = "Full"
}

interface Student {
    id: number;
    name: string;
}

interface Course {
    title: string;
    code: string;
    status: CourseStatus;
    students: Student[];
}

function enroll(student: Student, course: Course): void {
    if (course.status === CourseStatus.Open) {
        course.students.push(student);
    } else {
        console.log("Cannot enroll: Course is not open.");
    }
}