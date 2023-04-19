import React, { useState } from "react";
import Swal from "sweetalert2";
import { auth, storage } from "../../firebase/firebase";
import { useEffect } from "react";
import {
  addApplicantToInternship,
  addApplicationToStudent,
} from "../../firebase/actions/dbActions";

const applicationHandler = async (studentId, internshipId, resumeUrl) => {
  // for testing
  // const studentId = "eecEU6a6Wk44K31RsPms";
  // const internshipId = "i59XlbSJDbSyrf4uawez";

  Promise.all([
    addApplicationToStudent(studentId, internshipId),
    addApplicantToInternship(internshipId, studentId, resumeUrl),
  ]);
};

//u need to pass the internshipId as a prop here
const ApplyModal = ({ internshipId }) => {
  const [file, setFile] = useState(null);
  const studentId = auth?.currentUser?.uid;

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
    showModal();
  };
  return (
    <button
      className="
        btn btn-primary btn-lg bg-blue-500 hover:bg-blue-700 text-white py-1 px-8 rounded
      "
      onClick={onApply}
    >
      Apply
    </button>
  );
};

export default ApplyModal;
