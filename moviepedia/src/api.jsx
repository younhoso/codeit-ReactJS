export async function getReviews() {
  const res = await fetch("https://learn.codeit.kr/2024/film-reviews");
  const body = await res.json();
  return body;
}
