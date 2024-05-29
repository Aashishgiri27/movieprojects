const options = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM3ZTEzM2QwNDQ3OTc0YzdmNTNkNDdhNGRlMWQ4MiIsInN1YiI6IjY2NTE3ZjljNTFjZGY4ZjViYTk2MDQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ie6A99CdaGdwXIvAviRtdMU2VbN-Zfa3fpRGQIGNGBw'
	}
  };




async function movieproject(userinput){
    const response= await fetch('https://api.themoviedb.org/3/search/movie?api_key=ed37e133d0447974c7f53d47a4de1d82&query='+userinput,options)
    const r=await response.json()
    console.log(r);



	    //movie id
	var idofmovie=r.results[0].id	;	
	
	// trailer of movie api
	const responseoftrailer= await fetch(`https://api.themoviedb.org/3/movie/${idofmovie}/videos?api_key=ed37e133d0447974c7f53d47a4de1d82&language=en-US`,options)
    const roftrailer=await responseoftrailer.json()
    console.log(roftrailer);






		//cast and crew image api

const responseofimage= await fetch(`https://api.themoviedb.org/3/movie/${idofmovie}/credits?api_key=ed37e133d0447974c7f53d47a4de1d82&language=en-US`,options)
const castofimage=await responseofimage.json()
console.log(castofimage);

//fuction of making container for take the photo of actors

castandcrewimage(castofimage.cast)
	     

	//link a movie trailer


if(roftrailer.results.length>0) 
{
	var trailerofmovie="Trailer"
    for(i=0;i<roftrailer.results.length;i++)
	   {
             if(roftrailer.results[i].type==trailerofmovie)
				{
                         var movietrailerkey=roftrailer.results[i].key
                       document.querySelector("iframe").src=`https://www.youtube.com/embed/${movietrailerkey}?`
	            }

        }
}
	
        //create a element base on movie get in api after search
	

create(r.results);
      

  
  

let elements = document.getElementsByClassName("trending");
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		console.log(r.results[i]); // Accessing the element at index i

		trailerandposterofspecific(r.results[i].id)

		var	image=r.results[i].poster_path
		var linkofimage=`https://image.tmdb.org/t/p/original/${image}`
	   document.querySelector(".mainimage").src=linkofimage;
		 
		  //link a overview ,title , date
		document.querySelector(".moviediscription p").innerHTML=r.results[i].overview;
		document.querySelector(".date").innerHTML=r.results[i].release_date;
		document.querySelector(".dateandlan h3").innerHTML=r.results[i].original_language;
		document.querySelector(".rating").innerHTML=r.results[i].vote_average;
		document.querySelector(".namerating h2").innerHTML=r.results[i].title;
		
	
		window.scrollTo({ top: 0, behavior: 'smooth' });


	});
}





	   // link of poster of movie
	var	image=r.results[0].poster_path
    var linkofimage=`https://image.tmdb.org/t/p/original/${image}`
   document.querySelector(".mainimage").src=linkofimage;
	 
      //link a overview ,title , date
	document.querySelector(".moviediscription p").innerHTML=r.results[0].overview;
	document.querySelector(".date").innerHTML=r.results[0].release_date;
	document.querySelector(".dateandlan h3").innerHTML=r.results[0].original_language;
	document.querySelector(".rating").innerHTML=r.results[0].vote_average;
	document.querySelector(".namerating h2").innerHTML=r.results[0].title;
	
    

                   

	


}

              //now playing api 
async function nowplaying(){
    const response= await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ed37e133d0447974c7f53d47a4de1d82',options)
    const r=await response.json()
    console.log(r);
genre();
create(r.results);

let elements = document.getElementsByClassName("trending");
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		console.log(r.results[i]); // Accessing the element at index i
		makebody();
		trailerandposterofspecific(r.results[i].id)

		var	image=r.results[i].poster_path
		var linkofimage=`https://image.tmdb.org/t/p/original/${image}`
	   document.querySelector(".mainimage").src=linkofimage;
		 
		  //link a overview ,title , date
		document.querySelector(".moviediscription p").innerHTML=r.results[i].overview;
		document.querySelector(".date").innerHTML=r.results[i].release_date;
		document.querySelector(".dateandlan h3").innerHTML=r.results[i].original_language;
		document.querySelector(".rating").innerHTML=r.results[i].vote_average;
		document.querySelector(".namerating h2").innerHTML=r.results[i].title;
		
	
       // Scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });


	});
}

}
nowplaying()











function trending(){

async function trending(){

    const response= await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ed37e133d0447974c7f53d47a4de1d82',options)
    const r=await response.json()
    console.log(r);

    create(r.results);
    let elements = document.getElementsByClassName("trending");

for (let i = 0; i < elements.length; i++) {
elements[i].addEventListener("click", () => {
    console.log(r.results[i]); // Accessing the element at index i
    makebody();
    trailerandposterofspecific(r.results[i].id)

    var	image=r.results[i].poster_path
    var linkofimage=`https://image.tmdb.org/t/p/original/${image}`
   document.querySelector(".mainimage").src=linkofimage;
     
      //link a overview ,title , date
    document.querySelector(".moviediscription p").innerHTML=r.results[i].overview;
    document.querySelector(".date").innerHTML=r.results[i].release_date;
    document.querySelector(".dateandlan h3").innerHTML=r.results[i].original_language;
    document.querySelector(".rating").innerHTML=r.results[i].vote_average;
    document.querySelector(".namerating h2").innerHTML=r.results[i].title;
    // Scroll to the top
	window.scrollTo({ top: 0, behavior: 'smooth' });

});
}
}
trending();

}
     
//main function call

function takethedata(){
	var searchdata=document.querySelector('input').value;
	document.querySelector('button').style.backgroundColor="white"
	document.querySelector('button').style.color="black"
	makebody();
	movieproject(searchdata);
	

}







function create(data)
{
	

	document.querySelector('.trendingcontainer').innerHTML="";
  
	for(var i=0;i<data.length;i++)
		{
         if(data.length>=1)
			{
		     var nameofmovie=data[i].title
			 var round=data[i].vote_average
			 var roundoff=round.toFixed(2);
		     const movielement=document.createElement('div')
		     movielement.classList.add('trending')
		     movielement.innerHTML=`

		    <img src='https://image.tmdb.org/t/p/original/${data[i].poster_path}' alt="">
		    <div class="movieinformation">
			       <h3>${nameofmovie}</h3>
			       <div class="rating1">${roundoff}</div>
	        </div>`
             
			document.querySelector('.trendingcontainer').appendChild(movielement);
		    }
		
	    }	

}



function castandcrewimage(dataofactres)
{
	

	document.querySelector('.actorsnameandphoto').innerHTML="";
  
	for(var i=0;i<dataofactres.length;i++)
		{
         
		    var nameofmovie=dataofactres[i].name
		    var imagepath=`https://image.tmdb.org/t/p/original/${dataofactres[i].profile_path}`
        
		    const movielementforimage=document.createElement('div')
		    movielementforimage.classList.add('cast')
		    movielementforimage.innerHTML=`
		        <img src="${imagepath}" alt="" class="imageofcast">
		        <div class="nameofcast">${nameofmovie}</div>`   
		     document.querySelector('.actorsnameandphoto').appendChild(movielementforimage);
		
	    }
}





// trailer  and  poster of  specific function




async function trailerandposterofspecific(idofmovie){

	
	const responseoftrailer= await fetch(`https://api.themoviedb.org/3/movie/${idofmovie}/videos?api_key=ed37e133d0447974c7f53d47a4de1d82&language=en-US`,options)
    const roftrailer=await responseoftrailer.json()
    console.log(roftrailer);


		//cast and crew image api

const responseofimage= await fetch(`https://api.themoviedb.org/3/movie/${idofmovie}/credits?api_key=ed37e133d0447974c7f53d47a4de1d82&language=en-US`,options)
const castofimage=await responseofimage.json()
console.log(castofimage);

//fuction of making container for take the photo of actors
castandcrewimage(castofimage.cast)
	     

	//link a movie trailer


if(roftrailer.results.length>0) 
{
	var trailerofmovie="Trailer"
    for(i=0;i<roftrailer.results.length;i++)
	   {
             if(roftrailer.results[i].type==trailerofmovie )
				{
                         var movietrailerkey=roftrailer.results[i].key
                       document.querySelector("iframe").src=`https://www.youtube.com/embed/${movietrailerkey}?`
	            }
				
        }
}
else{
	document.querySelector("iframe").src=''
}
}




function makebody(){
	document.querySelector('#main').innerHTML="";
	const movielement=document.createElement('div')
		     movielement.classList.add('.movieinfo')
		     movielement.innerHTML=`
			 
			 <div class="header">
                    <div class="differentsection"><a href="index.html">Now-Playing</a></div>
					<div class="differentsection" onclick="trending()">Trending</div>
					
					<div>
					<input type="search" placeholder="Search Movie ">
					<button onclick="takethedata()">search</button>
				 </div>
             </div>
			 <div class="movieinfo">
             <div class="movieposter">
                <img src="" alt="" class="mainimage">
                <div class="namerating">
                    <h2></h2>
                
                    <div class="rating"></div>
                </div>
             </div>



             <div class="moviediscription">
                <h1>DECRIPTION</h1>
                <p> </p>
                <div class="dateandlan">
                    <div class="date">DATE:- </div>
                    <h3>LANGUAGE:-</h3>
                </div>
               <h1>TRAILER</h1>
                <div class="trailer">
                    <iframe width="400" height="250" src=""  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
				<h1>ACTORS</h1>
                <div class="actorsnameandphoto"> 
                    <div class="cast">
                        <img src="" alt="" class="imageofcast">
                        <div class="nameofcast"></div>
                    </div>
                    
                </div>
             </div>


        </div>
		`
		document.querySelector('#main').appendChild(movielement);
}



// //                         Genre api

function genre(){
	async function genre(){
		    const response= await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ed37e133d0447974c7f53d47a4de1d82',options)
		    const genre=await response.json()
		    // console.log(genre);
 
			creategenre(genre.genres);


			let elements = document.getElementsByClassName("genre");
			for (let i = 0; i < elements.length; i++) {
				elements[i].addEventListener("click", () => {
					console.log(genre.genres[i].id); // Accessing the element at index i
                    makingagenrebody(genre.genres[i].id)
					
			
				});
			}

	}
	genre()


	
}


function creategenre(data)
{
	

	document.querySelector('.genrecontainer').innerHTML="";
  
	for(var i=0;i<data.length;i++)
		{
         if(data.length>=1)
			{
		    //  var genreid=data[i].id;
			 var genrename=data[i].name
		     const movielement=document.createElement('div')
		     movielement.classList.add('genre')
		     movielement.innerHTML=`${genrename}`
             
			document.querySelector('.genrecontainer').appendChild(movielement);
		    }
		
	    }	

}




async function makingagenrebody(idofgenre){
	const response= await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ed37e133d0447974c7f53d47a4de1d82&with_genres=${idofgenre} `,options)
	const r=await response.json()
	console.log(r);
	create(r.results);

let elements = document.getElementsByClassName("trending");
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		console.log(r.results[i]); // Accessing the element at index i
		makebody();
		trailerandposterofspecific(r.results[i].id)

		var	image=r.results[i].poster_path
		var linkofimage=`https://image.tmdb.org/t/p/original/${image}`
	   document.querySelector(".mainimage").src=linkofimage;
		 
		  //link a overview ,title , date
		document.querySelector(".moviediscription p").innerHTML=r.results[i].overview;
		document.querySelector(".date").innerHTML=r.results[i].release_date;
		document.querySelector(".dateandlan h3").innerHTML=r.results[i].original_language;
		document.querySelector(".rating").innerHTML=r.results[i].vote_average;
		document.querySelector(".namerating h2").innerHTML=r.results[i].title;
// Scroll to the top
window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}
}