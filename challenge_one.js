let message = "There is no war in Ba Sing Se "
console.log (message);
let msg = " ";
let numberofword = 0 ;
for ( let i = 0 ; i < message.length ; i ++) {
    if ( message[i] !== " " ) {  
        msg=msg+message[i];
    }
    else{  
        numberofword ++ ; 
    }
} 
console.log ('there are  "' + numberofword + '" word(s) in this message');
