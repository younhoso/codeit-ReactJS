export async function getReviews(order = "createdAt") {
  const query = `order=${order}`;
  const res = await fetch(`https://learn.codeit.kr/2024/film-reviews?${query}`);
  const body = await res.json();
  return body;
}
