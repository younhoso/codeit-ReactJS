import { useState } from "react";
import { createReview } from "../api";
import FileInput from "./FileInput";
import RatingInput from './RatingInput';

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
}


function ReviewForm({ initalValues = INITIAL_VALUES, initialPreview, onSubmitSuccess, onCancel }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(initalValues);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', values.title)
    formData.append('rating', values.rating)
    formData.append('content', values.content)
    formData.append('imgFile', values.imgFile)

    let result;
    try{
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await createReview(formData);
    } catch(error) {
      setSubmittingError(error);
    } finally {
      setIsSubmitting(false);
    }
    const { review } = result;
    onSubmitSuccess(review);
    setValues(INITIAL_VALUES);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        initialPreview={initialPreview}
        onChange={handleChange}
      />
      <input
        name="title"
        type="text"
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      {onCancel && <button onClick={onCancel}>취소</button>}
      <button type="submit" disabled={isSubmitting}>전송</button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
