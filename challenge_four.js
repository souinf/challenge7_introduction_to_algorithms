tabofmonth = ['january','february','march', 'april', 'mai','june', 'july','auguest', 'september','october' , 'november','december']

function checkSeason(month){
    switch(month) {
        case 'january' :
            console.log('this season is winter');
          break;
        case 'february':
            console.log('this season is winter');
          break;
        case 'march':
            console.log('this season is spring');
          break; 
        case 'april':
            console.log('this season is spring');
          break;           
        case 'mai':
            console.log('this season is spring');
          break;           
        case 'june':
            console.log('this season is summer');
          break;
        case 'july':
            console.log('this season is summer');
          break;   
        case 'auguest':
            console.log('this season is summer');
          break; 
        case 'september':
            console.log('this season is autumn')
          break;  
        case 'october':
            console.log('this season is autumn')
          break;   
        case 'november':
            console.log('this season is autumn')
          break;  
        case 'December':
            console.log('this season is winter');
          break;                                                      
        default:
            console.log('no season');
      }
}
checkSeason('mai')

