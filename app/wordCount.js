module.exports = function (str){
 var wordObj = {};
 var words = str.replace(/[\n\t]/gi,' ')
                .replace(/ {2,}/g," ").split(' '); 
 words.forEach (function (word){
   if (Object.hasOwnProperty.call(wordObj, word)){
     wordObj[word]+=1;
   }
   else {
     wordObj[word] = 1;
   }
 });

 return wordObj;
}