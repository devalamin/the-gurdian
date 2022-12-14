const loadNews = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    return data.data.news_category;
}

const dsiplaycategories = async () => {
    const newsData = await loadNews();
    const menuUl = document.getElementById('menu-bar');


    newsData.forEach(element => {
        // console.log('for each', element);
        const { category_name, category_id } = element;
        const li = document.createElement('li');
        li.classList.add('nav-item', 'nav-link', 'list-group-item');
        li.addEventListener('click', function () {
            info(category_id);

        });
        li.innerHTML = category_name;
        menuUl.appendChild(li)

    })
}
dsiplaycategories();



// const info = async (id) => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
//     const data = await res.json();
//     console.log(data.data)
//     return data.data;
// }

// for (const category of newsData) {
//     // console.log(category.category_name)
//     const li = document.createElement('li');
//     li.setAttribute('onclick', "loadDetails(id)");
//     li.classList.add('list-group-item', 'border-3', 'bg-primary', 'text-white');
//     li.innerText = `${category.category_name}`
//     menuUl.appendChild(li)

// }



const info = (id) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.data))
}

const displayDetails = (details) => {

    const mainContainer = document.getElementById('main-container');
    mainContainer.textContent = '';
    // console.log(details)
    details.forEach(detail => {
        console.log(detail.author)

        const detailDiv = document.createElement('div');
        const modalBody = document.getElementById('modal-body')

        detailDiv.classList.add('card', 'my-4')

        modalBody.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${detail.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${detail.title}</h5>
                <p class="card-text">${detail.details.slice(0, 290) + '...'}</p>
                <div class="bottom">
                <div class="author">
                <img class="img-fluid author-img" src="${detail.image_url}">
               
                
                </div>
                <div class="views">
                <p>${detail.total_view}</p>
                </div>
                
                
                
                </div>
            </div>
        </div>
    </div>
        `
            ;

        // -----------------
        detailDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${detail.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${detail.title}</h5>
                <p class="card-text">${detail.details.slice(0, 290) + '...'}</p>
                <div class="bottom">
                <div class="author">
                <img class="img-fluid author-img" src="${detail.author.img}">
                
               
                
                </div>
                <p>${detail.author?.name}</p>
                <div class="views">
                <p>${detail.total_view}</p>
                </div>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
                
                
                </div>
            </div>
        </div>
    </div>
        `
        mainContainer.appendChild(detailDiv);
    })

}
displayDetails()

// displayDetails()
// info()



// dsiplaycategories()
// loadDetails()
