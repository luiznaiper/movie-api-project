
searchFormBtn.addEventListener('click', () => {
    location.hash = '#search='
})

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
})

arrowBtn.addEventListener('click', () => {
    location.hash = '#home'
})

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

     headerSection.classList.remove('header-container--long')
     headerSection.style.background = ''
     arrowBtn.classList.add('inactive')
     arrowBtn.classList.remove('header--arrow-white')
     headerTitle.classList.remove('inactive')
     headerCategoryTitle.classList.add('inactive')
     searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getTrendingMoviesPreview()
    getCategoriesPreview()
}

const trendsPage = () => {
    console.log('trends')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove ('header--arrow-white')
    headerTitle.classList.add('inactive') 
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

   trendingPreviewSection.classList.add('inactive')
   categoriesPreviewSection.classList.add('inactive')
   genericSection.classList.remove('inactive')
   movieDetailSection.classList.add('inactive')
}

const searchPage = () => {
    console.log('search')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove ('header--arrow-white')
    headerTitle.classList.add('inactive') 
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')

   trendingPreviewSection.classList.add('inactive')
   categoriesPreviewSection.classList.add('inactive')
   genericSection.classList.remove('inactive')
   movieDetailSection.classList.add('inactive')

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
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')
}

const categoriesPage = () => {
    console.log('categories')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove ('header--arrow-white')
    headerTitle.classList.add('inactive') 
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

   trendingPreviewSection.classList.add('inactive')
   categoriesPreviewSection.classList.add('inactive')
   genericSection.classList.remove('inactive')
   movieDetailSection.classList.add('inactive')

    const [categoryHash, categoryData] = location.hash.split('=') // ['#category', 'id-name']
    
    const [categoryId, categoryName] = categoryData.split('-')
    const newCategoryName =  decodeURI(categoryName)
    headerCategoryTitle.innerText = newCategoryName

    getMoviesByCategory(categoryId)

}