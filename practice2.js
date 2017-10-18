
let word=' apple';
function vowels(word){
  let bool=false;
    for(let i=0;i<word.length; i++){
         if(word[i]==='a' || word[i]=== 'e' ||word[1]=== 'i' || word[i]=== 'o' || word[i]==='u'){
           bool= true;
         }else{
             bool=false
         }
    }
    
return bool;
}
console.log(vowels(word));