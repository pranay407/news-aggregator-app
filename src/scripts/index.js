/*const APIKey= "40679c4975fd4e019400e887c84f0b4d";


var news_area=document.getElementById("news-articles");
//Initializing Function//
(function(){
    start();}
  )();
  
//Start Function
function  start() {
    document.getElementById("search").addEventListener('keypress',searchvalue);
    retreive();
}
//Retrive Function
async function retreive(searchValueText="")
{
     try{
   news_area.innerHTML= '<p class="load">News are Loading...</p>';
   if (searchValueText!="") {
       URL=`https://newsapi.org/v2/everything?q=${searchValueText}&apikey=${APIKey}`;
       //console.log("text type");
       
   }
   else{
       URL=`https://newsapi.org/v2/top-headlines?country=in&apikey=${APIKey}`;
      // console.log("no text type");
   }
   const response = await fetch(URL);
   
   const result = await response.json();
   //console.log(result);
   getNews(result);
}
catch(error){
    alert(error);
    console.log(error);
    
}
};
//getNew function
function getNews(news){
    try{
    let output="";
    if (news.totalResults>0) {
        news.articles.forEach(count => {
            output+=
            `
            <li class="article"><a class="article-link" href="${count.url}" target="_blank">
            
            <img src="${count.urlToImage}" class="article-img" alt="${count.title}"></img>
            
            <h2 class="article-title">${count.title}</h2>
            <p class="article-description">${count.description || "Description not available"}</p> <br>
            <span class="article-author">-${count.author? count.author: "Anon"}</span><br>
            </a>
            </li>
        
          `;
        });
       news_area.innerHTML=output;
       
    }
    else{
        news_area.innerHTML='<h3 class="not-found">No article was found based on the search.</h3>';
    }
    }//end try
    catch(error){
    alert(error);
    console.log(error);
    }
}
//keypress
async function searchvalue(e){  
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter")
     {
      retreive(e.target.value);
     // Console.log("keypress");
     }
};*/



const apikey="ae14e697b60f439a8e5945ac437fa2ae";
const article_area=document.getElementById("news-articles");
let output="";
function getNews(news)
{let output="";
    try{
   console.log(news.totalResults);
    if( news.totalResults > 0 )
    { 

    news.articles.forEach(ind=>{
     output+=
    ` <section class="container">
        <li class="article">
               
            <div>
            <img src="${ind.urlToImage}" class="article-img" alt="${ind.title}"></img>
            </div>
            <h2 class="article-title">${ind.title}</h2>
            <p class="article-description">${ind.description || "Description not available."}</p><br>
            <span class="article-author">${ind.author? ind.author: "unknown"}</span><br>
            <a class="article-link" href="${ind.url}" target="_blank">
            </a>
        </li>
    </section> 
    `;
});

article_area.innerHTML=output;

    

}
else{

    article_area.innerHTML=`<h3 class="not-found">No article was found based on the search.</h3>`;
}
    }//try enddd

    
catch(error){
    alert(error);
    console.log(error);
    }
}

async function reterieve(searchValueText="")
{
    try{
    article_area.innerHTML='<p class="load">News are  loading...</p>';
    
    if(searchValueText!="")
    {
        url=`https://newsapi.org/v2/everything?q=${searchValueText}&apikey=${apikey}`;
    }
    else{
        url=`https://newsapi.org/v2/top-headlines?country=in&apikey=${apikey}`;
    }
    const responce = await fetch(url);
    //console.log(url);
    const result = await responce.json();

    getNews(result);
    //console.log(result);
}
catch(error){
    alert(error);
    console.log(error);
    
}
};


//for passing value to retrive function

async function searchvalue(event){

    if(event.which===13 || event.keycode===13 ||  event.key==="Enter")
    {
        console.log(event);
        console.log(event.which);
        console.log(event.key);
        console.log(event.keycode);
        console.log(event.target.value);

        reterieve(event.target.value);


        
    }
};


//let article=document.getElementById("news-articles");


function start()
{
    console.log("onload")//comment to onload start function
    document.getElementById("search").addEventListener('keypress',searchvalue);
    reterieve();

}

(function(){
    start();
  })();
