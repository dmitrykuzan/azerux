export async function fetchArticles(page = 1, perPage = 4) {
  const response = await fetch(`https://azerux.com/api/articles?page=${page}&perPage=${perPage}`);
  if (!response.ok) {
    throw new Error('Empty');
  }
  return response.json();
}


export async function fetchArticleById(articleId) {
  const response = await fetch(`https://azerux.com/api/articles/${articleId}`);
  if (!response.ok) {
    throw new Error('Loading article error');
  }
  return response.json();
}
