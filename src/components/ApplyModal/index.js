import React, { useState } from "react";
import Swal from "sweetalert2";
import { auth, storage } from "../../firebase/firebase";
import { useEffect } from "react";
import {
  addApplicantToInternship,
  addApplicationToStudent,
} from "../../firebase/actions/dbActions";
import { useNavigate } from "react-router";

const applicationHandler = async (studentId, internshipId, resumeUrl) => {
  Promise.all([
    addApplicationToStudent(studentId, internshipId),
    addApplicantToInternship(internshipId, studentId, resumeUrl),
  ]);
};

//u need to pass the internshipId as a prop here
const ApplyModal = ({ internshipId }) => {
  const [file, setFile] = useState(null);
  const [studentId, setStudentId] = useState(
    auth.currentUser ? auth.currentUser.uid : null
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!file) return;
    const handleUpload = () => {
      const uploadTask = storage.ref(`resumes/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function
        },
        (error) => {
          // error function
          console.log(error);
        },
        () => {
          // complete function
          storage
            .ref("resumes")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              applicationHandler(studentId, internshipId, url);
            });
        }
      );
    };
    handleUpload();
  }, [file]);

  const showModal = () => {
    Swal.fire({
      title: "Submit your Resume",
      input: "file",
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your application has been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    // Add event listener to input element after it has been rendered
    setTimeout(() => {
      const fileInput = document.querySelector(".swal2-file");
      if (!fileInput) return;
      fileInput.addEventListener("change", (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
      });
    }, 500);
  };

  const onApply = () => {
    if (!studentId) navigate("/login");
    else showModal();
  };
  return (
    <button
      className="w-full mt-4 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-sm text-sm px-2 py-2.5 text-center"
      onClick={onApply}
    >
      Apply
    </button>
  );
};

export default ApplyModal;
