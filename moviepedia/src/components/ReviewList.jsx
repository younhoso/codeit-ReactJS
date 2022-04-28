import { useState } from "react";
import styled from "styled-components";
import Rating from "./Rating"
import ReviewForm from "./ReviewForm"

const ReviewItem = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const ReviewItemImg = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-right: 20px;
`;

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  const handleDeleteClick = () => onDelete(item.id);

  const handleEditClick = () => {
    onEdit(item.id)
  }

  return (
    <ReviewItem>
      <ReviewItemImg src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating}/>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
        <button onClick={handleEditClick}>수정</button>
      </div>
    </ReviewItem>
  );
}

function ReviewList({ items, onDelete }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);
  
  return (
    <ul>
      {items.map((item) => {
        if(item.id === editingId){
          const {imgUrl, title, rating, content} = item;
          const initalValues = {title, rating, content}
          return (
            <li key={item.id}>
              <ReviewForm initalValues={initalValues} initialPreview={imgUrl} onCancel={handleCancel}/>
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} onEdit={setEditingId}/>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
