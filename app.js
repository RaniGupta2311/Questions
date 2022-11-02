// console.log("Welcome to Q&A");
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const quest=e.currentTarget.parentElement.parentElement;
//         quest.classList.toggle("showAnswer");
//     });
// })


const questionContainer=document.querySelectorAll(".questions_container");
questionContainer.forEach(function(currElement){
    // console.log(currElement);
    const btn=currElement.querySelector(".question-btn");
    // console.log(btn);

    btn.addEventListener("click",function(){

        questionContainer.forEach(function(item){
            if(item!==currElement){
                item.classList.remove("showAnswer");
            }
        });
        currElement.classList.toggle("showAnswer");
    })
})