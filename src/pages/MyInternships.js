import React, { useEffect, useState } from "react";
import EmptyInternship from "../components/MCard/EmptyInternship";
import MCard from "../components/MCard/MCard";
import Navbar from "../components/Navbar";
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
  const [studentId, setStudentId] = useState(null); // Use state to store studentId

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        if (studentId) {
          // Fetch internships only when studentId is available
          const internshipsData = await getAllInternshipsByStudent(studentId);
          setInternships(internshipsData);
        }
      } catch (error) {
        console.error("Failed to fetch internships", error);
      }
    };
    fetchInternships();
  }, [studentId]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setStudentId(user.uid); // Update studentId when user is authenticated
      } else {
        setStudentId(null); // Reset studentId when user is not authenticated
      }
    });

    return () => {
      unsubscribe(); // Clean up the listener on component unmount
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white">
        {internships.length > 0 ? (
          // Render internships list
          internships.map((internship) => (
            <div key={internship.id}>
              <MCard
                imageUrl={internship.data.logo}
                title={internship.data.title}
                company={internship.data.company}
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
      </section>
    </>
  );
};
