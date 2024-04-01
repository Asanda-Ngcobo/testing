const section1 = document.querySelector(".section1");
const overlay = document.querySelector(".overlay");

const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const section5 = document.querySelector(".section5");
const section6 = document.querySelector(".section6");
const section7 = document.querySelector(".section7");
const section8 = document.querySelector(".section8");
const section9 = document.querySelector(".section9");
const section10 = document.querySelector(".section10");
const section11 = document.querySelector(".section11");

//The Lessons Array
let lessons = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
];

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("#ytplayer", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
//Section Click functionality
const section = document.querySelectorAll("#section");
const expandMore = document.querySelectorAll(".material-icons.expand_more");

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("click", () => {
    lessons[i].classList.remove("hide");
    

    section[i].style.height = "0vh";
    for (let i = 0; i < expandMore.length; i++) {
      expandMore[i].classList.add("hide");
    }
  });
}

//Feedback functionality
const thumbsUp = document.querySelectorAll(".thumb_up");
const increment = document.querySelectorAll(".upcount");
const subject = document.querySelectorAll("#subject");
for (let i = 0; i < thumbsUp.length; i++) {
  thumbsUp[i].addEventListener("click", (e) => {
    thumbsUp[i].style.color = "green";
    console.log(e.target);
  });
}
const thumbsDown = document.querySelectorAll(".thumb_down");
const decrement = document.querySelectorAll(".downcount");
const feedback = document.querySelectorAll(".feedback");
let body = subject;

for (let i = 0; i < thumbsDown.length; i++) {
  thumbsDown[i].addEventListener("click", (e) => {
    thumbsDown[i].style.color = "orangered";
    feedback.forEach(function (feed) {
      feed.classList.remove("hide");
    });
    for (i = 0; i < subject.length; i++) {
      subject[i].value = e.target.id;
    }

    overlay.classList.remove("hide");
  });
}

const escapeFeedBack = document.querySelectorAll(".escapefeedback");

for (let i = 0; i < escapeFeedBack.length; i++) {
  escapeFeedBack[i].addEventListener("click", () => {
    feedback.forEach(function (feed) {
      feed.classList.add("hide");
    });

    overlay.classList.add("hide");
  });
}

//Notes functionality

const notes = document.querySelectorAll(".hidden");

const notesBtn = document.querySelectorAll(".notes-btn");

const notesEscape = document.querySelectorAll(".notesescape");

for (let i = 0; i < notesBtn.length; i++) {
  notesBtn[i].addEventListener("click", function () {
    notes.forEach(function (note) {
      note.classList.remove("hidden");
    });

    overlay.classList.remove("hide");
  });
}
for (let i = 0; i < notesEscape.length; i++) {
  notesEscape[i].addEventListener("click", function () {
    notes.forEach(function (note) {
      note.classList.add("hidden");
    });
    overlay.classList.add("hide");
  });
}

const check = document.querySelectorAll(".check");
const cross = document.querySelectorAll(".cross");

//Add
const correctCheck = function(){
  check.forEach(function(ch){

    ch.classList.remove("hide");
    ch.style.backgroundColor = "#60b347";
  });
 
}

//Remove
const remove = function(){
  check.forEach(function(ch){

    ch.classList.add("hide");
    
  });

  cross.forEach(function(cr){
    cr.classList.add("hide");
 

  });
}



const incorrectCheck = function(){
  cross.forEach(function(cr){
    cr.classList.remove("hide");
  cr.style.backgroundColor = "orange";

  });

    
}
const correctRemove = function(){

  cross.forEach(function(cr){
    cr.classList.add("hide");
 

  });
}

const getout = document.querySelectorAll(".getout");
const question = document.querySelector(".quiz");
const question2 = document.querySelector(".quiz2");
const question3 = document.querySelector(".quiz3");
const question4 = document.querySelector(".quiz4");
const question5 = document.querySelector(".quiz5");
const question6 = document.querySelector(".quiz6");
const question7 = document.querySelector(".quiz7");
const question8 = document.querySelector(".quiz8");
const question9 = document.querySelector(".quiz9");
const question10 = document.querySelector(".quiz10");
const question11 = document.querySelector(".quiz11");
const question12 = document.querySelector(".quiz12");
const question13 = document.querySelector(".quiz13");
const question14 = document.querySelector(".quiz14");
const question15 = document.querySelector(".quiz15");


const questions = [
  question,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
];

//Leave the questions
getout.forEach(function(go){
go.addEventListener('click', ()=>{
  overlay.classList.add("hide");
  location.reload();
  questions.forEach(function(que){
    
    que.classList.add("notshown");
  });
  
 
})
});

const generated = document.querySelectorAll(".interger");
let generated1 = document.querySelectorAll(".interger1");
let generated2 = document.querySelectorAll(".interger2");
let generated3= document.querySelectorAll(".interger3");
let generated4 = document.querySelectorAll(".interger4");
let generated5 = document.querySelectorAll(".interger5");
let generated6 = document.querySelectorAll(".interger6");
let generated7= document.querySelectorAll(".interger7");
let generated8 = document.querySelectorAll(".interger8");
let generated9 = document.querySelectorAll(".interger9");
let generated10 = document.querySelectorAll(".interger10");
let generated11 = document.querySelectorAll(".interger11");
let generated12 = document.querySelectorAll(".interger12");
let generated13 = document.querySelectorAll(".interger13");


//Normal background

const backgroundColor = function(){
  
  for (let i = 0; i < generated.length; i++) {
    generated[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated1.length; i++) {
    generated1[i].style.backgroundColor = "black";
  }

  for (let i = 0; i < generated2.length; i++) {
    generated2[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated3.length; i++) {
    generated3[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated4.length; i++) {
    generated4[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated5.length; i++) {
    generated5[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated6.length; i++) {
    generated6[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated7.length; i++) {
    generated7[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated8.length; i++) {
    generated8[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated9.length; i++) {
    generated9[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated10.length; i++) {
    generated10[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated11.length; i++) {
    generated11[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated12.length; i++) {
    generated12[i].style.backgroundColor = "black";
  }
  for (let i = 0; i < generated13.length; i++) {
    generated13[i].style.backgroundColor = "black";
  }
  getout.forEach(function(go){
      go.style.backgroundColor = "black";
  });

};

//Correct integer background color change
const correctBackground = function () {
  for (let i = 0; i < generated.length; i++) {
    generated[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated1.length; i++) {
    generated1[i].style.backgroundColor = "#60b347";
  }

  for (let i = 0; i < generated2.length; i++) {
    generated2[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated3.length; i++) {
    generated3[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated4.length; i++) {
    generated4[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated5.length; i++) {
    generated5[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated6.length; i++) {
    generated6[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated7.length; i++) {
    generated7[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated8.length; i++) {
    generated8[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated9.length; i++) {
    generated9[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated10.length; i++) {
    generated10[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated11.length; i++) {
    generated11[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated12.length; i++) {
    generated12[i].style.backgroundColor = "#60b347";
  }
  for (let i = 0; i < generated13.length; i++) {
    generated13[i].style.backgroundColor = "#60b347";
  }
  getout.forEach(function(go){
      go.style.backgroundColor = "#60b347";
  });
};

//Greater than 1 chances background
const chancesGreaterThan1 = function () {
  for (let i = 0; i < generated.length; i++) {
    generated[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated1.length; i++) {
    generated1[i].style.backgroundColor = "orange";
  }

  for (let i = 0; i < generated2.length; i++) {
    generated2[i].style.backgroundColor = "orange";
  }
   for (let i = 0; i < generated3.length; i++) {
    generated3[i].style.backgroundColor = "orange";
  }
   for (let i = 0; i < generated4.length; i++) {
    generated4[i].style.backgroundColor = "orange";
  }
   for (let i = 0; i < generated5.length; i++) {
    generated5[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated6.length; i++) {
    generated6[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated7.length; i++) {
    generated7[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated8.length; i++) {
    generated8[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated9.length; i++) {
    generated9[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated10.length; i++) {
    generated10[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated11.length; i++) {
    generated11[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated12.length; i++) {
    generated12[i].style.backgroundColor = "orange";
  }
  for (let i = 0; i < generated13.length; i++) {
    generated13[i].style.backgroundColor = "orange";
  }
  getout.forEach(function(go){
      go.style.backgroundColor = "orange";
  });
};

//Chances less than 1 background

const chancesLessThan1 = function () {
  for (let i = 0; i < generated.length; i++) {
    generated[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated1.length; i++) {
    generated1[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < generated2.length; i++) {
    generated2[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated3.length; i++) {
    generated3[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated4.length; i++) {
    generated4[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated5.length; i++) {
    generated5[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated6.length; i++) {
    generated6[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated7.length; i++) {
    generated7[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated8.length; i++) {
    generated8[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated9.length; i++) {
    generated9[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated10.length; i++) {
    generated10[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated11.length; i++) {
    generated11[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated12.length; i++) {
    generated12[i].style.backgroundColor = "red";
  }
  for (let i = 0; i < generated13.length; i++) {
    generated13[i].style.backgroundColor = "red";
  }
  getout.forEach(function(go){
      go.style.backgroundColor = "red";
  });
};

const normalColor = function(){
  question.style.backgroundColor = "black";
  document.querySelector(".question").style.backgroundColor = "#black";
  document.querySelector(".label-score").style.backgroundColor = "black";
  document.querySelector(".message").style.backgroundColor = "#black";
   mark1.textContent = chances;

   document.querySelector(".chances").style.backgroundColor = "black";
   question2.style.backgroundColor = "black";
   document.querySelector(".question2").style.backgroundColor = "black";
   document.querySelector(".label-score2").style.backgroundColor = "black";
   document.querySelector(".message2").style.backgroundColor = "black";
   mark2.style.backgroundColor = "black";

   question3.style.backgroundColor = "black";
    document.querySelector(".question3").style.backgroundColor = "black";
    document.querySelector(".label-score3").style.backgroundColor = "black";
    document.querySelector(".message3").style.backgroundColor = "black";
    mark3.style.backgroundColor = "black";

    question4.style.backgroundColor = "black";
    document.querySelector(".question4").style.backgroundColor = "black";
    document.querySelector(".label-score4").style.backgroundColor = "black";
    document.querySelector(".message4").style.backgroundColor = "black";
    document.querySelector(".next4").classList.remove("notshown");
    mark4.style.backgroundColor = "black";
   

   question5.style.backgroundColor = "black";
    document.querySelector(".question5").style.backgroundColor = "black";
    document.querySelector(".label-score5").style.backgroundColor = "black";
    document.querySelector(".message5").style.backgroundColor = "black";
    document.querySelector(".chances5").style.backgroundColor = "black";

    question6.style.backgroundColor = "black";
    document.querySelector(".question6").style.backgroundColor = "black";
    document.querySelector(".label-score6").style.backgroundColor = "black";
    document.querySelector(".message6").style.backgroundColor = "black";
    document.querySelector(".chances6").style.backgroundColor = "black";

    question7.style.backgroundColor = "black";
    document.querySelector(".question7").style.backgroundColor = "black";
    document.querySelector(".label-score7").style.backgroundColor = "black";
    document.querySelector(".message7").style.backgroundColor = "black";
    document.querySelector(".chances7").style.backgroundColor = "black";

    question8.style.backgroundColor = 'black';
           document.querySelector('.question8').style.backgroundColor = 'black';
             document.querySelector('.label-score8').style.backgroundColor = 'black';
             document.querySelector('.message8').style.backgroundColor = 'black';
             document.querySelector('.chances8').style.backgroundColor = 'black';

             question9.style.backgroundColor = 'black';
             document.querySelector('.question9').style.backgroundColor = 'black';
               document.querySelector('.label-score9').style.backgroundColor = 'black';
               document.querySelector('.message9').style.backgroundColor = 'black';
               document.querySelector('.chances9').style.backgroundColor = 'black';
          
             //   question10.style.backgroundColor = 'black';
             // document.querySelector('.question10').style.backgroundColor = 'black';
             //   document.querySelector('.label-score10').style.backgroundColor = 'black';
             //   document.querySelector('.message10').style.backgroundColor = 'black';
             //   document.querySelector('.chances10').style.backgroundColor = 'black';

             //   question11.style.backgroundColor = 'black';
             //   document.querySelector('.question11').style.backgroundColor = 'black';
             //     document.querySelector('.label-score11').style.backgroundColor = 'black';
             //     document.querySelector('.message11').style.backgroundColor = 'black';
             //     document.querySelector('.chances11').style.backgroundColor = 'black';

             //     question12.style.backgroundColor = 'black';
             //     document.querySelector('.question12').style.backgroundColor = 'black';
             //       document.querySelector('.label-score12').style.backgroundColor = 'black';
             //       document.querySelector('.message12').style.backgroundColor = 'black';
             //       document.querySelector('.chances12').style.backgroundColor = 'black';
          
             //       question13.style.backgroundColor = 'black';
             //       document.querySelector('.question13').style.backgroundColor = 'black';
             //         document.querySelector('.label-score13').style.backgroundColor = 'black';
             //         document.querySelector('.message13').style.backgroundColor = 'black';
             //         document.querySelector('.chances13').style.backgroundColor = 'black';
}
const quizcorrect = function (){
  question.style.backgroundColor = "#60b347";
  document.querySelector(".question").style.backgroundColor = "#60b347";
  document.querySelector(".label-score").style.backgroundColor = "#60b347";
  document.querySelector(".message").style.backgroundColor = "#60b347";
   document.querySelector(".chances").style.backgroundColor = "#60b347";

   question2.style.backgroundColor = "#60b347";
   document.querySelector(".question2").style.backgroundColor = "#60b347";
   document.querySelector(".label-score2").style.backgroundColor = "#60b347";
   document.querySelector(".message2").style.backgroundColor = "#60b347";
  
   mark2.style.backgroundColor = "#60b347";
   question3.style.backgroundColor = "#60b347";
    document.querySelector(".question3").style.backgroundColor = "#60b347";
    document.querySelector(".label-score3").style.backgroundColor = "#60b347";
    document.querySelector(".message3").style.backgroundColor = "#60b347";
    

    question4.style.backgroundColor = "#60b347";
    document.querySelector(".question4").style.backgroundColor = "#60b347";
    document.querySelector(".label-score4").style.backgroundColor = "#60b347";
    document.querySelector(".message4").style.backgroundColor = "#60b347";
    mark4.style.backgroundColor = "#60b347";
   mark3.style.backgroundColor = "#60b347";

   question5.style.backgroundColor = "#60b347";
    document.querySelector(".question5").style.backgroundColor = "#60b347";
    document.querySelector(".label-score5").style.backgroundColor = "#60b347";
    document.querySelector(".message5").style.backgroundColor = "#60b347";
    document.querySelector(".chances5").style.backgroundColor = "#60b347";

    question6.style.backgroundColor = "#60b347";
    document.querySelector(".question6").style.backgroundColor = "#60b347";
    document.querySelector(".label-score6").style.backgroundColor = "#60b347";
    document.querySelector(".message6").style.backgroundColor = "#60b347";
    document.querySelector(".chances6").style.backgroundColor = "#60b347";

    question7.style.backgroundColor = "#60b347";
    document.querySelector(".question7").style.backgroundColor = "#60b347";
    document.querySelector(".label-score7").style.backgroundColor = "#60b347";
    document.querySelector(".message7").style.backgroundColor = "#60b347";
    document.querySelector(".chances7").style.backgroundColor = "#60b347";

    question8.style.backgroundColor = '#60b347';
           document.querySelector('.question8').style.backgroundColor = '#60b347';
             document.querySelector('.label-score8').style.backgroundColor = '#60b347';
             document.querySelector('.message8').style.backgroundColor = '#60b347';
             document.querySelector('.chances8').style.backgroundColor = '#60b347';

             question9.style.backgroundColor = '#60b347';
             document.querySelector('.question9').style.backgroundColor = '#60b347';
               document.querySelector('.label-score9').style.backgroundColor = '#60b347';
               document.querySelector('.message9').style.backgroundColor = '#60b347';
               document.querySelector('.chances9').style.backgroundColor = '#60b347';
         
               // question10.style.backgroundColor = 'black';
               // document.querySelector('.question10').style.backgroundColor = '#60b347';
               //   document.querySelector('.label-score10').style.backgroundColor = '#60b347';
               //   document.querySelector('.message10').style.backgroundColor = '#60b347';
               //   document.querySelector('.chances10').style.backgroundColor = '#60b347';
  
               //   question11.style.backgroundColor = 'black';
               //   document.querySelector('.question11').style.backgroundColor = '#60b347';
               //     document.querySelector('.label-score11').style.backgroundColor = '#60b347';
               //     document.querySelector('.message11').style.backgroundColor = '#60b347';
               //     document.querySelector('.chances11').style.backgroundColor = '#60b347';
  
               //     question12.style.backgroundColor = 'black';
               //     document.querySelector('.question12').style.backgroundColor = '#60b347';
               //       document.querySelector('.label-score12').style.backgroundColor = '#60b347';
               //       document.querySelector('.message12').style.backgroundColor = '#60b347';
               //       document.querySelector('.chances12').style.backgroundColor = '#60b347';
            
               //       question13.style.backgroundColor = '#60b347';
               //       document.querySelector('.question13').style.backgroundColor = '#60b347';
               //         document.querySelector('.label-score13').style.backgroundColor = '#60b347';
               //         document.querySelector('.message13').style.backgroundColor = '#60b347';
               //         document.querySelector('.chances13').style.backgroundColor = '#60b347';
  correctBackground();
  correctCheck();
  correctRemove();
}


const quizwrong = function (){
  question.style.backgroundColor = "orange";

  document.querySelector(".question").style.backgroundColor = "orange";
  document.querySelector(".label-score").style.backgroundColor = "orange";
  document.querySelector(".message").style.backgroundColor = "orange";
  document.querySelector(".chances").style.backgroundColor = "orange";
  mark1.style.backgroundColor = "orange";
 
  question2.style.backgroundColor = "orange";
    document.querySelector(".question2").style.backgroundColor = "orange";
    document.querySelector(".label-score2").style.backgroundColor = "orange";
    document.querySelector(".message2").style.backgroundColor = "orange";
  mark2.style.backgroundColor = "orange";

  question3.style.backgroundColor = "orange";
  document.querySelector(".question3").style.backgroundColor = "orange";
  document.querySelector(".label-score3").style.backgroundColor = "orange";
  document.querySelector(".message3").style.backgroundColor = "orange";
 mark3.style.backgroundColor = "orange";

 question4.style.backgroundColor = "orange";
 document.querySelector(".question4").style.backgroundColor = "orange";
 document.querySelector(".label-score4").style.backgroundColor = "orange";
 document.querySelector(".message4").style.backgroundColor = "orange";
mark4.style.backgroundColor = "orange";

question5.style.backgroundColor = "orange";
      document.querySelector(".question5").style.backgroundColor = "orange";
      document.querySelector(".label-score5").style.backgroundColor = "orange";
      document.querySelector(".message5").style.backgroundColor = "orange";
      mark5.style.backgroundColor = "orange";

      question6.style.backgroundColor = "orange";
      document.querySelector(".question6").style.backgroundColor = "orange";
      document.querySelector(".label-score6").style.backgroundColor = "orange";
      document.querySelector(".message6").style.backgroundColor = "orange";
     mark6.style.backgroundColor = "orange";

     question7.style.backgroundColor = "orange";
      document.querySelector(".question7").style.backgroundColor = "orange";
      document.querySelector(".label-score7").style.backgroundColor = "orange";
      document.querySelector(".message7").style.backgroundColor = "orange";
      mark7.style.backgroundColor = "orange";

      question8.style.backgroundColor = "orange";
      document.querySelector(".question8").style.backgroundColor = "orange";
      document.querySelector(".label-score8").style.backgroundColor = "orange";
      document.querySelector(".message8").style.backgroundColor = "orange";
      mark8.style.backgroundColor = "orange";

      question9.style.backgroundColor = "orange";
      document.querySelector(".question9").style.backgroundColor = "orange";
      document.querySelector(".label-score9").style.backgroundColor = "orange";
      document.querySelector(".message9").style.backgroundColor = "orange";
      mark9.style.backgroundColor = "orange";

      // question10.style.backgroundColor = 'orange';
      //          document.querySelector('.question10').style.backgroundColor = 'orange';
      //            document.querySelector('.label-score10').style.backgroundColor = 'orange';
      //            document.querySelector('.message10').style.backgroundColor = 'orange';
      //            document.querySelector('.chances10').style.backgroundColor = 'orange';
  
      //            question11.style.backgroundColor = 'black';
      //            document.querySelector('.question11').style.backgroundColor = 'orange';
      //              document.querySelector('.label-score11').style.backgroundColor = 'orange';
      //              document.querySelector('.message11').style.backgroundColor = 'orange';
      //              document.querySelector('.chances11').style.backgroundColor = 'orange';
  
      //              question12.style.backgroundColor = 'black';
      //              document.querySelector('.question12').style.backgroundColor = 'orange';
      //                document.querySelector('.label-score12').style.backgroundColor = 'orange';
      //                document.querySelector('.message12').style.backgroundColor = 'orange';
      //                document.querySelector('.chances12').style.backgroundColor = 'orange';
            
      //                question13.style.backgroundColor = 'orange';
      //                document.querySelector('.question13').style.backgroundColor = 'orange';
      //                  document.querySelector('.label-score13').style.backgroundColor = 'orange';
      //                  document.querySelector('.message13').style.backgroundColor = 'orange';
      //                  document.querySelector('.chances13').style.backgroundColor = 'orange';
 
  chancesGreaterThan1();
  incorrectCheck();

}

const quizzero = function (){
  document.querySelector(".chances").style.backgroundColor = "red";
    question.style.backgroundColor = "red";
    document.querySelector(".question").style.backgroundColor = "red";
    document.querySelector(".label-score").style.backgroundColor = "red";
    document.querySelector(".message").style.backgroundColor = "red";
  

  question2.style.backgroundColor = "red";
  document.querySelector(".question2").style.backgroundColor = "red";
mark2.style.backgroundColor = "red";
  document.querySelector(".label-score2").style.backgroundColor = "red";
  document.querySelector(".message2").style.backgroundColor = "red";

  question3.style.backgroundColor = "red";
  document.querySelector(".question3").style.backgroundColor = "red";
 mark3.style.backgroundColor = "red";
  document.querySelector(".label-score3").style.backgroundColor = "red";
  document.querySelector(".message3").style.backgroundColor = "red";


  document.querySelector(".chances4").style.backgroundColor = "red";
  question4.style.backgroundColor = "red";
  document.querySelector(".question4").style.backgroundColor = "red";
  document.querySelector(".label-score4").style.backgroundColor = "red";
  document.querySelector(".message4").style.backgroundColor = "red";


  document.querySelector(".chances5").style.backgroundColor = "red";
  question5.style.backgroundColor = "red";
  document.querySelector(".question5").style.backgroundColor = "red";
  document.querySelector(".label-score5").style.backgroundColor = "red";
  document.querySelector(".message5").style.backgroundColor = "red";


  document.querySelector(".chances6").style.backgroundColor = "red";
  question6.style.backgroundColor = "red";
  document.querySelector(".question6").style.backgroundColor = "red";
  document.querySelector(".label-score6").style.backgroundColor = "red";
  document.querySelector(".message6").style.backgroundColor = "red";
  

  mark7.style.backgroundColor = "red";
  question7.style.backgroundColor = "red";
  document.querySelector(".question7").style.backgroundColor = "red";
  document.querySelector(".label-score7").style.backgroundColor = "red";
  document.querySelector(".message7").style.backgroundColor = "red";
  

  document.querySelector('.chances8').style.backgroundColor = 'red';
        question8.style.backgroundColor = 'red';
           document.querySelector('.question8').style.backgroundColor = 'red';
             document.querySelector('.label-score8').style.backgroundColor = 'red';
             document.querySelector('.message8').style.backgroundColor = 'red';
        

  document.querySelector('.chances9').style.backgroundColor = 'red';
  question9.style.backgroundColor = 'red';
     document.querySelector('.question9').style.backgroundColor = 'red';
       document.querySelector('.label-score9').style.backgroundColor = 'red';
       document.querySelector('.message9').style.backgroundColor = 'red';
  
       question10.style.backgroundColor = 'red';
       document.querySelector('.question10').style.backgroundColor = 'red';
         document.querySelector('.label-score10').style.backgroundColor = 'red';
         document.querySelector('.message10').style.backgroundColor = 'red';
         document.querySelector('.chances10').style.backgroundColor = 'orange';

         question11.style.backgroundColor = 'black';
         document.querySelector('.question11').style.backgroundColor = 'red';
           document.querySelector('.label-score11').style.backgroundColor = 'red';
           document.querySelector('.message11').style.backgroundColor = 'red';
           document.querySelector('.chances11').style.backgroundColor = 'orange';

           question12.style.backgroundColor = 'red';
           document.querySelector('.question12').style.backgroundColor = 'red';
             document.querySelector('.label-score12').style.backgroundColor = 'red';
             document.querySelector('.message12').style.backgroundColor = 'red';
             document.querySelector('.chances12').style.backgroundColor = 'red';
    
             question13.style.backgroundColor = 'red';
             document.querySelector('.question13').style.backgroundColor = 'red';
               document.querySelector('.label-score13').style.backgroundColor = 'red';
               document.querySelector('.message13').style.backgroundColor = 'red';
               document.querySelector('.chances13').style.backgroundColor = 'red';
  chancesLessThan1();

}
