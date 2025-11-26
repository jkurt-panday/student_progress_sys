
export type Teacher = {
    teacherid: string;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    specialization: string;
}


export type TeacherForm = {
    teacherid: string;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    specialization: string;
}

export type GradeLevel = {
    gradeid: string;
    gradename: string;
    assignedteacher: string;
    firstname: string;
    middlename: string;
    lastname: string;
}
// TODO change the sex to 'male' | 'female'
export type Student = {
    studentid: string;
    studentnum: number;
    lrn: number;
    firstname: string;
    middlename: string;
    lastname: string;
    sex: string;
    gradename: string;
    age: number;
    dateofbirth: string;
    guardianname: string;
    guardiancontact: string;
}