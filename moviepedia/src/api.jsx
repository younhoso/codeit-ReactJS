export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const res = await fetch(`https://learn.codeit.kr/2024/film-reviews?${query}`);
  if (!res.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다.");
  }
  const body = await res.json();
  return body;
}
