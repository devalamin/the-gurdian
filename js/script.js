const loadNews = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return data.data.news_category;
}

const dsiplaycategories = async () => {
    const newsData = await loadNews();
    const menuUl = document.getElementById('menu-bar');

    for (const category of newsData) {
        // console.log(category.category_name)
        const li = document.createElement('li');
        li.setAttribute('onclick', true);
        li.classList.add('list-group-item', 'border-0');
        li.innerText = `${category.category_name}`
        menuUl.appendChild(li)

    }

}
dsiplaycategories()
