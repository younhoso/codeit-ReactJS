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

function ReviewListItem({ item }) {
  return (
    <ReviewItem>
      <ReviewItemImg src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </ReviewItem>
  );
}

function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ReviewListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
