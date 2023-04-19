import { db } from "../firebase";

export const addStudent = (student) => {
  return db.collection("students").add(student);
};

export const getAllStudents = () => {
  return db.collection("students").get();
};

export const getStudentById = (id) => {
  return db.collection("students").doc(id).get();
};

export const addCompany = (company) => {
  return db.collection("companies").add(company);
};

export const getAllCompanies = () => {
  return db.collection("companies").get();
};

export const getCompanyById = (id) => {
  return db.collection("companies").doc(id).get();
};

export const addInternship = (internship) => {
  return db.collection("internships").add(internship);
};

export const getAllInternships = () => {
  return db.collection("internships").get();
};
export const getAllInternshipsByStudent = () => {
  return db.collection("students").applications().get();
};

export const getInternshipById = (id) => {
  return db.collection("internships").doc(id).get();
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

export const getInternshipsByTag = (tags) => {
  return db
    .collection("internships")
    .where("tags", "array-contains-any", tags)
    .get();
};

export const addApplicationToStudent = (studentId, internshipId) => {
  return new Promise((resolve, reject) => {
    db.collection("internships")
      .doc(internshipId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const internshipData = doc.data();
          db.collection("students")
            .doc(studentId)
            .collection("applications")
            .add({
              ...internshipData,
              status: "Applied",
              timestamp: new Date(Date.now()).toString(),
            })
            .then((docRef) => {
              console.log("Application added with ID: ", docRef.id);
              resolve(docRef.id);
            })
            .catch((error) => {
              console.error("Error adding application: ", error);
              reject(error);
            });
        } else {
          console.error("Internship not found");
          reject(new Error("Internship not found"));
        }
      })
      .catch((error) => {
        console.error("Error getting internship: ", error);
        reject(error);
      });
  });
};

export const addApplicantToInternship = (
  internshipId,
  studentId,
  resumeUrl
) => {
  return new Promise((resolve, reject) => {
    db.collection("students")
      .doc(studentId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const studentData = doc.data();
          db.collection("internships")
            .doc(internshipId)
            .collection("applicants")
            .add({
              ...studentData,
              resumeUrl,
              status: "Applied",
              timestamp: new Date(Date.now()).toString(),
            })
            .then((docRef) => {
              console.log("Applicant added with ID: ", docRef.id);
              resolve(docRef.id);
            })
            .catch((error) => {
              console.error("Error adding applicant: ", error);
              reject(error);
            });
        } else {
          console.error("Student not found");
          reject(new Error("Student not found"));
        }
      });
  });
};
