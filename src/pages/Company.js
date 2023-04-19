import React, { useEffect, useState } from "react";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import { db, auth } from "../firebase/firebase";
import EmptyInternship from "../components/MCard/EmptyInternship";
export const getAllInternships = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("companies")
      .doc(id)
      .collection("postedInternships")
      .get()
      .then((querySnapshot) => {
        const internships = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        });
        console.log(internships);
        resolve(internships);
        console.log(internships);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
const Company = () => {
  const [internships, setInternships] = useState([]);
  const [comapnyId, setCompanyId] = useState("i59XlbSJDbSyrf4udwedawez");
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        if (comapnyId) {
          // Fetch internships only when studentId is available
          const internshipsData = await getAllInternships(comapnyId);
          console.log(internshipsData);
          setInternships(internshipsData);
        }
      } catch (error) {
        console.error("Failed to fetch internships", error);
      }
    };
    fetchInternships();
  }, [comapnyId]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(comapnyId);
        setCompanyId("i59XlbSJDbSyrf4udwedawez"); // Update studentId when user is authenticated
      } else {
        setCompanyId(null); // Reset studentId when user is not authenticated
      }
    });

    return () => {
      unsubscribe(); // Clean up the listener on component unmount
    };
  }, []);
  return (
    <section className=" bg-white grid grid-cols-6 gap-4">
      {internships.length > 0 ? (
        // Render internships list
        internships.map((internship) => (
          <div key={internship.id}>
            <CompanyCard
              jobTitle={internship.data.title}
              description={internship.data.description}
              location={internship.data.city}
              timestamp={""}
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
  );
};

export default Company;
