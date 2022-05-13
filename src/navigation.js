
const navigator = () => {
    console.log({ location })

    if (location.hash.startsWith('#trends')){
        trendsPage()
    } else if(location.hash.startsWith('#search=')){
        searchPage()
    } else if(location.hash.startsWith('#movie=')){
        moviesPage()
    }  else if(location.hash.startsWith('#category=')){
        categoriesPage()
    } else {
        homePage()
    }
    location.hash
}
window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

const homePage = () => {
    console.log('Home')
    getTrendingMoviesPreview()
    getCategoriesPreview()
}

const trendsPage = () => {
    console.log('trends')
}

const searchPage = () => {
    console.log('search')
}

const moviesPage = () => {
    console.log('movies')
}

const categoriesPage = () => {
    console.log('categories')
}