import { db } from "../firebase";

export const addStudent = (student) => {
  return db.collection("students").add(student);
};

export const getAllStudents = () => {
  return db.collection("students").get();
};

export const getStudentById = (id) => {
  return db.collection("students").where("studentId", "==", id).get();
};

export const addCompany = (company) => {
  return db.collection("companies").add(company);
};

export const getAllCompanies = () => {
  return db.collection("companies").get();
};

export const getCompanyById = (id) => {
  return db.collection("companies").where("companyId", "==", id).get();
};

export const addInternship = (internship) => {
  return db.collection("internships").add(internship);
};

export const getAllInternships = () => {
  return db.collection("internships").get();
};

export const getInternshipById = (id) => {
  return db.collection("internships").where("internshipId", "==", id).get();
};

export const getInternshipsByCompanyId = (companyId) => {
  return getCompanyById(companyId).then((querySnapshot) => {
    let company = querySnapshot.docs[0].data();
    return company.postedInternships;
  });
};

export const getInternshipsByTitle = (title) => {
  return db.collection("internships").where("title", "==", title).get();
};

export const getInternshipsByTags = (tags) => {
  return db
    .collection("internships")
    .where("tags", "array-contains-any", tags)
    .get();
};
