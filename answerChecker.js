'use strict';
var allAnswers = {
  1: "norman joseph woodland",
  2: "a55a",
  3: "greatjobyougotit",
  4: "orange",
  5: "answer4",
  6: "hamlet"
};
exports.check = function(qno, answer){
  if(allAnswers[qno]==answer){
    return true;

  }
else {
  return false
}
}



 /*query => {
    let question = Object.keys(query)[0],
        answer = query[question],
        allQuestions = Object.keys(allAnswers);

    let index = allQuestions.indexOf(question);
    if (index!==-1){
        if(allAnswers[allQuestions[index]]=== answer)
        return true;
    }

        return false;


}*/
