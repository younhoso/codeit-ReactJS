export async function getReviews({
  order = "createdAt",
  offset = 0,
  linit = 6,
}) {
  const query = `order=${order}&offset=${offset}&linit=${linit}`;
  const res = await fetch(`https://learn.codeit.kr/2024/film-reviews?${query}`);
  const body = await res.json();
  return body;
}
