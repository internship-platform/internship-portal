import { React, useState, useEffect } from "react";
import Applicant from "../components/ApplicantTracker/Applicant";
import { db, auth } from "../firebase/firebase";
import { useParams } from "react-router-dom";

const ApplicantTracker = ({ status, companyId, internshipId }) => {
  const [applicants, setApplicants] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserId(user.uid);
      }
    });

    return unsubscribe;
  }, []);
  console.log(currentUserId);
  useEffect(() => {
    const unsubscribe = db
      .collection("internships")
      .doc(id)
      .collection("applicants")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        const applicantsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplicants(applicantsData);
        console.log(applicants);
      });

    return () => {
      unsubscribe();
    };
  }, [companyId, internshipId]);

  return (
    <section className="p-8 bg-white flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-8">
      <section className="flex flex-col justify-center items-center md:w-1/5">
        <p className="text-lg text-gray-900 font-semibold">Applicants</p>
        {applicants.map((applicant) => (
          <Applicant
            onClick={() => window.open(applicant.resumeUrl, "_blank")}
            key={applicant.id}
            name={applicant.name}
            appliedTime={applicant.timestamp}
            position={applicant.title}
            description={applicant.description}
            status={applicant.status}
          />
        ))}
      </section>

      <>
        <section className="flex flex-col justify-center items-center md:w-1/5">
          <p className="text-lg text-gray-900 font-semibold">Interview Stage</p>
          {applicants
            .filter((applicant) => applicant.status === "interview")
            .map((applicant) => (
              <Applicant
                onClick={() => window.open(applicant.resumeUrl, "_blank")}
                key={applicant.id}
                name={applicant.name}
                appliedTime={applicant.timestamp}
                position={applicant.title}
                description={applicant.description}
                status={applicant.status}
              />
            ))}
        </section>
        <section className="flex flex-col justify-center items-center md:w-1/5">
          <p className="text-lg text-gray-900 font-semibold">Rejected</p>
          {applicants
            .filter((applicant) => applicant.status === "rejected")
            .map((applicant) => (
              <Applicant
                onClick={() => window.open(applicant.resumeUrl, "_blank")}
                key={applicant.id}
                name={applicant.name}
                appliedTime={applicant.timestamp}
                position={applicant.title}
                description={applicant.description}
                status={applicant.status}
              />
            ))}
        </section>
        <section className="flex flex-col justify-center items-center md:w-1/5">
          <p className="text-lg text-gray-900 font-semibold">Accepted</p>
          {applicants
            .filter((applicant) => applicant.status === "accepted")
            .map((applicant) => (
              <Applicant
                onClick={() => window.open(applicant.resumeUrl, "_blank")}
                key={applicant.id}
                name={applicant.name}
                appliedTime={applicant.timestamp}
                position={applicant.title}
                description={applicant.description}
                status={applicant.status}
              />
            ))}
        </section>
      </>
    </section>
  );
};

export default ApplicantTracker;
