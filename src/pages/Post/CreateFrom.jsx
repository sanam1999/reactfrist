import React from "react";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { authantication } from "../../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import PATHS from "../../constants/pathConstants";

export const CreateForm = () => {
  const [user, isLoading, error] = useAuthState(authantication);
  const navegate = useNavigate();

  // Define the validation schema using yup
  const schema = yup.object().shape({
    Title: yup
      .string()
      .required("Title is required")
      .max(50, "Title must be at most 50 characters"),
    Description: yup
      .string()
      .required("Description is required"),
  });
if(error){
    console.log(error)
}
  // Initialize react-hook-form with yupResolver
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "post");

  const submit = async (data) => {
    if (user) {
      // If the user is logged in, add the document to Firestore
      await addDoc(postRef, {
        title: data.Title,
        Description: data.Description,
        username: user.displayName,
        userId: user.uid,  // Use uid instead of id
      });
      reset();  // Reset the form after successful submission
      navegate(PATHS.STATE)
    } else {
      alert("You need to be logged in to post!");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h4>Create Post</h4>

        <input
          type="text"
          placeholder="Title"
          {...register("Title")}
          style={{ borderColor: errors.Title ? 'red' : '' }}
        />
        {errors.Title && <p className="error">{errors.Title.message}</p>} {/* Show error for Title */}

        <textarea
          name="Description"
          cols={30}
          rows={5}
          placeholder="Description"
          {...register("Description")}
          style={{ borderColor: errors.Description ? 'red' : '' }}
        />
        {errors.Description && <p className="error">{errors.Description.message}</p>} {/* Show error for Description */}

        <button type="submit" disabled={isLoading}>Post</button>
      </form>
    </>
  );
};
