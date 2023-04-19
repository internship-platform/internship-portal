import { db, auth } from "../firebase";

export const signUp = async (formValues) => {
  try {
    const { email, password, firstName, lastName, major, university, country } =
      formValues;

    // Create a new user account
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const { uid } = userCredential.user;

    // Create a new document in Firestore with the user's information
    await db.collection("students").doc(uid).set({
      firstName,
      lastName,
      major,
      university,
      country,
      email,
      studentId: uid,
    });

    console.log("User signed up successfully:", userCredential.user);
    // Redirect to the home page
    return true;
  } catch (error) {
    console.error("Error signing up:", error);
    return false;
    // Handle the error as necessary, such as displaying an error message to the user
  }
};
export const login = async (formValues) => {
  try {
    const { email, password } = formValues;
    await auth.signInWithEmailAndPassword(email, password);
    // User is now logged in
    return true;
  } catch (error) {
    console.error(error);
    // Handle login error
    return false;
  }
};

export const logout = () => {
  auth.signOut();
};
