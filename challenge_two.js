let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']
for(let i = 0 ; i<countries.length ; i++){
   for(let j = 0 ; j< capital.length ; j++) {
    if( i == j){
        console.log(countries[i] + " has the capital named : " + capital[j] + " . ");
    }
   }
   
}

