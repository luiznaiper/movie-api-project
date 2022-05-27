let maxPage
let page = 1
let infiniteScroll 

searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value
})

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
})

arrowBtn.addEventListener('click', () => {
    history.back()
})

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)
window.addEventListener('scroll', infiniteScroll, false)

function navigator () {
    //console.log({ location })

    if (infiniteScroll) {
        window.removeEventListener('scroll', infiniteScroll, { passive: false });
        infiniteScroll = undefined;
      }

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
    //location.hash

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    if (infiniteScroll){
        window.addEventListener('scroll', infiniteScroll, { passive: false })
    }

}

const homePage = () => {
    console.log('Home')

     headerSection.classList.remove('header-container--long')
     headerSection.style.background = ''
     arrowBtn.classList.add('inactive')
     arrowBtn.classList.remove('header-arrow--white')
     headerTitle.classList.remove('inactive')
     headerCategoryTitle.classList.add('inactive')
     searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    likedMoviesSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getTrendingMoviesPreview()
    getCategoriesPreview()
    getLikedMovies()
}

const trendsPage = () => {
    console.log('trends')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove ('header-arrow--white')
    headerTitle.classList.add('inactive') 
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

   trendingPreviewSection.classList.add('inactive')
   categoriesPreviewSection.classList.add('inactive')
   likedMoviesSection.classList.add('inactive')
   genericSection.classList.remove('inactive')
   movieDetailSection.classList.add('inactive')

   headerCategoryTitle.innerHTML = 'Trends'

   getTrendingMovies()
   infiniteScroll = getPaginatedTrendingMovies

}

const searchPage = () => {
    console.log('search')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove ('header-arrow--white')
    headerTitle.classList.add('inactive') 
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')
   trendingPreviewSection.classList.add('inactive')
   categoriesPreviewSection.classList.add('inactive')
   likedMoviesSection.classList.add('inactive')
   genericSection.classList.remove('inactive')
   movieDetailSection.classList.add('inactive')

   const [__, query] = location.hash.split('=') // ['#search', 'searched']
    getMoviesBySearch(query)

    infiniteScroll = getPaginatedMoviesBySearch(query)
}

const moviesPage = () => {
    console.log('movies')

    headerSection.classList.add('header-container--long')
   // headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive') 
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    likedMoviesSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

    const [__, movieId] = location.hash.split('=') // ['#movie', 'movieId']
    getMovieById(movieId)

}

const categoriesPage = () => {
    console.log('categories')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove ('header-arrow--white')
    headerTitle.classList.add('inactive') 
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

   trendingPreviewSection.classList.add('inactive')
   categoriesPreviewSection.classList.add('inactive')
   likedMoviesSection.classList.add('inactive')
   genericSection.classList.remove('inactive')
   movieDetailSection.classList.add('inactive')

    const [__, categoryData] = location.hash.split('=') // ['#category', 'id-name']
    
    const [categoryId, categoryName] = categoryData.split('-')
    const newCategoryName =  decodeURI(categoryName)
    headerCategoryTitle.innerText = newCategoryName

    getMoviesByCategory(categoryId)

    infiniteScroll = getPaginatedMoviesByCategory(categoryId)


}

