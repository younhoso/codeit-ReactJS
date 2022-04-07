import { useState } from "react";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
      />
      <input
        name="rating"
        type="number"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">전송</button>
    </form>
  );
}

export default ReviewForm;
