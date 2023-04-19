import React, { useEffect, useState } from "react";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import { db, auth } from "../firebase/firebase";
import EmptyInernshipAlert from "../components/MCard/EmptyInernshipAlert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const navigate = useNavigate();
  const [internships, setInternships] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  function handlePostInternshipClick() {
    navigate("/internship");
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserId(user.uid);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUserId) {
      // Check that currentUserId is not null
      const unsubscribe = db
        .collection("companies")
        .doc(currentUserId)
        .collection("postedInternships")
        .onSnapshot((snapshot) => {
          console.log(snapshot.docs);
          const applicantsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setInternships(applicantsData);
          console.log(internships);
        });

      return () => {
        unsubscribe();
      };
    }
  }, [currentUserId]);

  return (
    <section className="p-8 bg-gray-100 h-screen flex flex-col">
      <div className="flex flex-row justify-between">
        <p className="text-base m-4">Open Internship Positions</p>
        <button
          onClick={handlePostInternshipClick}
          type="button"
          className="mr-16 text-white bg-[#1d2633] hover:bg-[#4285F4]/90  focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
        >
          Post Internship
        </button>
      </div>

      <div className="py-8 grid grid-cols-6 gap-4">
        {internships.length > 0 ? (
          // Render internships list

          internships.map((internship) => (
            <div key={internship.id}>
              <Link to={`/applications/${internship.id}`}>
                <CompanyCard internship={internship} />
              </Link>
              {/* Render other internship data as needed */}
            </div>
          ))
        ) : (
          // Render message when internships array is empty
          <EmptyInernshipAlert />
        )}
      </div>
    </section>
  );
};

export default Company;
