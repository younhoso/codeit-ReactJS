import styled from "styled-components";

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

function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <ReviewItem>
      <ReviewItemImg src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </ReviewItem>
  );
}

function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <ReviewListItem item={item} onDelete={onDelete} />
            <input />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
