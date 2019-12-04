

//button1

  window.addEventListener("load", function() {  
    document.querySelector("#button1").addEventListener("click", function(){PlaySample("kick.mp3"); } );
    });


//button2

window.addEventListener("load", function() {  
  document.querySelector("#button2").addEventListener("click", function(){PlaySample("snare.mp3"); } );
  });

//button3

window.addEventListener("load", function() {  
  document.querySelector("#button3").addEventListener("click", function(){PlaySample("hihat.mp3"); } );
  });


//button4

window.addEventListener("load", function() {  
  document.querySelector("#button4").addEventListener("click", function(){PlaySample("F.mp3"); } );
  });  

//button5

window.addEventListener("load", function() {  
  document.querySelector("#button5").addEventListener("click", function(){PlaySample("G.mp3"); } );
  });


//button6

window.addEventListener("load", function() {  
  document.querySelector("#button6").addEventListener("click", function(){PlaySample("A.mp3"); } );
  });  


//button7

window.addEventListener("load", function() {  
  document.querySelector("#button7").addEventListener("click", function(){PlaySample("C.mp3"); } );
  });


//button8

window.addEventListener("load", function() {  
  document.querySelector("#button8").addEventListener("click", function(){PlaySample("laugh-1.mp3"); } );
  }); 

//button9

window.addEventListener("load", function() {  
  document.querySelector("#button9").addEventListener("click", function(){PlaySample("laugh-2.mp3"); } );
  });



//PlaySample    

    function PlaySample(tone) {
      var sound: HTMLAudioElement = new Audio("./assets/" + tone);
      sound.play();
  
    }
  


//playbutton

window.addEventListener("load", function(){
  document.querySelector("#playbutton").addEventListener("click", Beat1);
});

//PlayBeat

function Beat1(){
  var tones1 = ["assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3"];
  var index = 0;
  var interval = setInterval(PlayBeat,250)
 
function PlayBeat(){
      var Beat2:HTMLAudioElement = new Audio(tones1 [index]);
      Beat2.play();
      index += 1;
      if (index>7) index=0;
     
  }
}
