const movies= require('../src/data.js');


// The `movies` array from the file `src/data.js`.



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  let directores= movies.map((film)=> film.director)
  return directores;

  

}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const pelis= movies.filter((peli)=>{
    return peli.genre.includes('Drama')  && peli.director==='Steven Spielberg'
  })
  
  return pelis.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length<=0) return 0;
  let longitud= movies.length
  

  const puntuacion = movies.reduce((total, peli)=>{
    return total+=peli.score ? peli.score : 0
  },0)
 
   return Number((puntuacion/longitud).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

    const pelisDrama= movies.filter((peli)=>{

      return peli.genre.includes('Drama')
    })

    if(pelisDrama.length<=0)return 0;

    let notas= pelisDrama.reduce((total, nota)=> {
      return total + nota.score},0)

   return Number((notas/pelisDrama.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const pelis=[...movies] ;  
     
    const order = pelis.sort(function(a,b){
      if(a.year===b.year){
        if(a.title>b.title){
          return 1
        }if(a.title<b.title){
          return -1
        }
        return 0
      }
      if(a.year>b.year){
        return  1
      }if(a.year<b.year){
        return -1
      }
    })
    
    console.log(order)
    return order


  

 




}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let pelis =[...movies]

  pelis.sort(function (a,b) {
    if(a.title<b.title)return -1;
    if(a.title>b.title)return 1;
    return 0
  
  })
 

  let tit=pelis.map((element)=>element.title)
    return tit.slice(0,20)
  }

  
  
  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  let h= movies.map((element)=>{
     return Number((element.duration.slice(0,1))*60)
  })



  let m=movies.map((element)=>{
   return Number(element.duration.slice(3).replace('min', ''))
  })

  /* console.log(m) */
  
  const time=[];
  for(let i=0; i<251; i++){
    time[i]=h[i]+m[i]
  }

  let mo=movies.map((peli, indice)=>{

    return {...peli,duration:time[indice]}
  })
  return mo
  
  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
