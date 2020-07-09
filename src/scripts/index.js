require('../styles/index1.css')

const apikey = '336ba9abbcd34e049cba1ac37e785a53';

function getNews() {

    const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + apikey;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

            const length = data.articles.length;
            let output = '';


            for (let i = 0; i < length; i++) {

                let obj = data.articles;

                let titles = obj[i].title;
                let authors = obj[i].author;
                let descriptions = obj[i].description;
                let urls = obj[i].url;
                let image = obj[i].urlToImage;

             
                output +='<li class="article">'+
                    '<div class="card p-1" style="width: 15rem;display:none"><img src="'+image+'" class="article-img" alt="..."></div> '+ 
                    '<div class="card p-1" style="width: 15rem;"><img src="'+image+'" class="card-img-top article-img" alt="..."> '+
                    
                    '<div class="card-body">'+
                    '<h2 class="article-title">'+titles.substring(0,70)+'</h2>'+
                    '<p class="article-description">'+descriptions.substring(0,100)+'</p>'+
                    '<span class="article-author">'+authors+'</span><br>'+
                    '<a href="'+urls+'" class="article-link">know more</a>' +
                    '</div></div></li> ';

                document.getElementById('news-articles').innerHTML = output;
            }

        })
}

getNews();



function searchNews() {

    let query = document.getElementById('search').value;

    

   
    const url = 'https://newsapi.org/v2/everything?q=' + query + '&apiKey=' + apikey;
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => {


        const length = data.articles.length;
        const results = data.totalResults;
        let output = '';


        if(results != 0)
    {

        for(let i=0; i<length; i++){

            let obj = data.articles;


            let titles = obj[i].title;
            let authors = obj[i].author;
            let descriptions = obj[i].description;
            let urls = obj[i].url;
            let image = obj[i].urlToImage;

            output +='<li class="article">'+
                    '<div class="card p-1" style="width: 15rem;display:none"><img src="'+image+'" class="article-img" alt="..."></div> '+ //patch005
                    '<div class="card p-2" style="width: 17rem;"><img src="'+image+'" class="card-img-top article-img" alt="..."> '+
                    
                    '<div class="card-body">'+
                    '<h2 class="article-title">'+titles.substring(0,70)+'</h2>'+
                    '<p class="article-description">'+descriptions.substring(0,100)+'</p>'+
                    '<span class="article-author">'+authors+'</span><br>'+
                    '<a href="'+urls+'" class="article-link">know more</a>'
                    '</div></div></li> ';

                    document.getElementById('news-articles').innerHTML = output;

        }
    }
    else 
    {
        
        document.getElementById('news-articles').innerHTML = '';

        document.getElementById('notfound').innerHTML = 'No article was found based on the search.';
    }

    })
}

document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {

        let query = document.getElementById('search').value;

        query=='' ? getNews() : searchNews();

    }
}, false);