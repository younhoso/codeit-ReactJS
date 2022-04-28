const BASE_URL = 'https://learn.codeit.kr/2024'

export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const res = await fetch(`${BASE_URL}/film-reviews?${query}`);
  if (!res.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다.");
  }
  const body = await res.json();
  return body;
}

export async function createReview(formData) {
  const res = await fetch(`${BASE_URL}/film-reviews`, {
    method: 'POST',
    body: formData
  });
  if (!res.ok) {
    throw new Error("리뷰를 생성하는데 실패했습니다.");
  }
  const body = await res.json();
  return body;
}

export async function updateReview(id, formData) {
  const res = await fetch(`${BASE_URL}/film-reviews/${id}`, {
    method: 'PUT',
    body: formData
  });
  if (!res.ok) {
    throw new Error("리뷰를 수정하는데 실패했습니다.");
  }
  const body = await res.json();
  return body;
}

