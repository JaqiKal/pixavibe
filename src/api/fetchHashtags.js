export const fetchHashtags = async () => {
  const allHashtags = [];
  let url = "https://pixavibe-api-1b79caa01d4f.herokuapp.com/hashtags/";

  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    allHashtags.push(...data.results);
    url = data.next; // next page URL
  }

  return allHashtags;
};
