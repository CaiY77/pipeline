// let ranks = [3,4,3,0,2,2,3,0,0]
//
// function solution(ranks) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let counter = 0;
//
//     for (let i = 0; i < ranks.length; i++){
//        (ranks.includes(ranks[i]+1))
//        ? counter++
//        : null
//     }
//     return counter;
// }
//
// console.log(solution(ranks));


// function solution(N) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let answer = makeRandom(Math.floor(N/2));
//     (N%2 == 1)
//     ? answer.push(0)
//     : null
//     return answer;
// }
//
// function makeRandom(iteration){
//   let array = [];
//   let start = 0;
//   for (let i = 0 ; i < iteration; i++){
//     start += 1
//     array.push(start)
//     array.push(start*-1)
//   }
//   return array;
// }
//
// console.log(solution(21))

function solution(T) {
  let lengths = [];
  let counter = 1;

  split(T, counter, lengths);

}
function split(T, counter, lengths){
  (isValid(T,T.l,counter,lengths))
  ? split(T.l)
  : null

  (isValid(T,T.r,counter,lengths))
  ? split(T.r)
  : null
}

function isValid(T,direction,counter,lengths){
  if( direction != null && T.x > direction.x){
    counter++;
    return true
  } else {
    lengths.push(counter)
  }
}
