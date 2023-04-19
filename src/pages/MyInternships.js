import React, { useEffect, useState } from "react";
import EmptyInternship from "../components/MCard/EmptyInternship";
import MCard from "../components/MCard/MCard";
import { db, auth } from "../firebase/firebase";
export const getAllInternshipsByStudent = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("students")
      .doc(id)
      .collection("applications")
      .get()
      .then((querySnapshot) => {
        const internships = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        });
        resolve(internships);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const MyInternships = () => {
  const [internships, setInternships] = useState([]);
  const studentId = auth.currentUser.uid;
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const internshipsData = await getAllInternshipsByStudent(studentId);
        setInternships(internshipsData);
      } catch (error) {
        console.error("Failed to fetch internships", error);
      }
    };
    fetchInternships();
  }, [studentId]);
  console.log(internships);

  return (
    <div>
      {internships.length > 0 ? (
        // Render internships list
        internships.map((internship) => (
          <div key={internship.id}>
            <MCard
              imageUrl={internship.data.logo}
              title={internship.data.title}
              category={""}
              description={internship.data.description}
              location={internship.data.city}
              timeAgo={""}
              status={internship.data.status}
            />
            {/* Render other internship data as needed */}
          </div>
        ))
      ) : (
        // Render message when internships array is empty
        <EmptyInternship />
      )}
    </div>
  );
};
