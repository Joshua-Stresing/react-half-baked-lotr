export async function fetchFilms() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/films?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  console.log(resp);
  const data = await resp.json();
  console.log(data);
  return data;
}
