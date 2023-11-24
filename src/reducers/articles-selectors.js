export const getArticlesForHighlights = (state) => {
    const articles = state.articles.articles.slice(0, 4);
    return articles.map(article => {
        return {...article, text: article.text.split(".")[0]}
    });
}