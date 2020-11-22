// ====================================ANIMATION ACCIDENT==================================
var check2 = 0;
function accident(){
    document.getElementById("carcrash").play();

    var a0 = document.querySelector("#whole1");
    var a1 = document.querySelector("#whole");
    var a2 = document.querySelector("#body");
    var a3 = document.querySelector("#legp");
    var a4 = document.querySelector("#leg");
    var a5 = document.querySelector("#head");
    var a6 = document.querySelector("#lefthand");
    var a7 = document.querySelector("#righthand1");
    var a8 = document.querySelector("#rightarm1");
    var a9 = document.querySelector("#boost_arm");
    var a10 = document.querySelector("#sign");
    var a11 = document.querySelector("#wheel1_inside");
    var a12 = document.querySelector("#wheel2_inside");
    var a13 = document.querySelector("#ball");
    var a14 = document.querySelector("#car");
        var but1 = document.getElementById("accidentbut");
    var but2 = document.getElementById("headbut");
    var but3 = document.getElementById("petbut");
    but1.style.display = "block";
    but2.style.display = "block";
    but3.style.display = "block";
    if((check2%2)==0){
    document.querySelector("#game").style.display="none"; 
    but3.style.display = "none";
    but2.style.display = "none";
        a0.className = "whole1";
        a1.className = "wholemove";
        a2.className = "bodydes";
        a3.className = "legp";
        a4.className = "legdes";
        a5.className = "headdes";
        a6.className = "lefthanddes";
        a7.className = "righthandsave";
        a8.className = "rightarmsave";
        a9.className = "boost_arm";
        a10.className = "sign";
        a11.className = "wheel_inside";
        a12.className = "wheel_inside";
        a13.className = "ball";
        a14.className = "car";
        check2++;
         document.getElementById("accidentbut").innerHTML = "FINISH ANIMATION";
          window.setTimeout(function () { 
      location.reload();
    }, 25 * 1000);
    }else{

    location.reload();
    }
}

// =======================================ANIMATION PET===================================
var check1 = 0;
function pet(){
    document.getElementById("lovedog").play();
    var m = document.querySelector('#leftarm');
    var n = document.querySelector('#rightarm1');
    var o = document.querySelector('#pos');
    var p = document.querySelector('#tail');
        var but1 = document.getElementById("accidentbut");
    var but2 = document.getElementById("headbut");
    var but3 = document.getElementById("petbut");
    but1.style.display = "block";
    but2.style.display = "block";
    but3.style.display = "block";
    if((check1%2)==0){
    but1.style.display = "none";
    but2.style.display = "none";
    document.querySelector("#game").style.display="none"; 
    m.className = "leftarm";
    n.className = "rightarm1pet";
    o.className = "pos";
    p.className = "tailani2";
    check1++;
    document.getElementById("petbut").innerHTML = "FINISH PETTING";
     window.setTimeout(function () { 
      location.reload();
    }, 11 * 1000);
    console.log(check1);
    }else{
    
    location.reload();
    }
}

// ================================ANIMATION HEAD OPEN===================================
var check = 0;
function openhead() {

    document.getElementById("headsound").play();
	var y = document.querySelector("#righthand1");
	var z = document.querySelector("#rightarm1");
    var x = document.querySelector("#head");
    var xx = document.querySelector("#headbefore");
    var a = document.querySelector("#phead");
    var ss0 = document.querySelector("#ss0");
    var ss1 = document.querySelector("#ss1");
    var ss2 = document.querySelector("#ss2");
    var ss3 = document.querySelector("#ss3");
    var ss4 = document.querySelector("#ss4");
    var ss5 = document.querySelector("#ss5");
    var ss6 = document.querySelector("#ss6");
    var ss7 = document.querySelector("#ss7");
    var ss8 = document.querySelector("#ss8");
    var ss9 = document.querySelector("#ss9");
        var but1 = document.getElementById("accidentbut");
    var but2 = document.getElementById("headbut");
    var but3 = document.getElementById("petbut");
    but1.style.display = "block";
    but2.style.display = "block";
    but3.style.display = "block";
    if((check%2)==0){
    document.querySelector("#game").style.display="none";    
    but1.style.display = "none";
    but3.style.display = "none";
    y.className = "righthandtohead";
    z.className = "rightarmtohead";
    x.className = "openhead";
    a.className = "movehead";
    xx.className = "eyecolour";
    ss0.className = "ss0";    
    ss1.className = "ss1";
    ss2.className = "ss2";    
    ss3.className = "ss3";
    ss4.className = "ss4";    
    ss5.className = "ss5";
    ss6.className = "ss6";    
    ss7.className = "ss7";
    ss8.className = "ss8";    
    ss9.className = "ss9";
    check++;
    document.getElementById("headbut").innerHTML = "FINISH ANIMATION";
     setTimeout(function () { 
      location.reload();
    }, 22 * 1000);
    console.log(x);
    }else{
    location.reload();
    }

	
}


// ==============================CHATBOX====================================
var checkChatbox = 0;
    function game(){
        if (checkChatbox%2==0) {
        document.getElementById("music").play(); 
         var but1 = document.getElementById("accidentbut");
    var but2 = document.getElementById("headbut");
    var but3 = document.getElementById("petbut");
    but1.style.display = "none";
    but2.style.display = "none";
    but3.style.display = "none";
    document.getElementById("game").innerHTML = "FINISH GAME";
    document.querySelector(".chatbox_initial").className = "chatbox";
        checkChatbox++;
        }else{
            location.reload();
        }
    }
    function speak(){
        document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'starting2.mp3');
        document.getElementById("music").load();
        document.getElementById("music").play();
        var name = document.getElementById('name').value;
        var a2 = document.getElementById('name');
        a2.style.display="none";

        var out = document.querySelector("#data").innerHTML = "Hello "+name+"! Let play a quick Game";
        var a1 = document.querySelector("#button");

        a1.style.display="none";
        var a3 = document.querySelector("#button2");
        a3.style.display = "block";

    }
    function music(){

        var text1 = document.getElementById("data").innerHTML = "Nice! This is the part where the music starts and I get to be the game host";
        document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.querySelector("#next").style.display = "block";
        document.querySelector("#button2").style.display = "none";

    }
    var nextNo = 0;
    function next(){
        nextNo++;
        var music = document.getElementById("music");
        if (nextNo==1) {
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio1.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.getElementById("data").innerHTML = "Welcome to Wizard of Age ";
        }
        if(nextNo==2){
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio2.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.getElementById("data").innerHTML = "No need to be afraid. It's just a game ";           
        }
        if(nextNo==3){
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio3.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.getElementById("data").innerHTML = "I am happy to say that I'll be your host today. So lets get started";        
        }
        if(nextNo==4){
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio4.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.getElementById("data").innerHTML = "I'll Guess your age. Please be honest";        
        }if(nextNo==5){
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio5.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.getElementById("data").innerHTML = "Multiply the 1st digit of your age by 5";        
        }if(nextNo==6){
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio6.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.getElementById("data").innerHTML = "Now add 4 to the value you just obtained";        
        }if(nextNo==7){
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio7.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.getElementById("data").innerHTML = "Now you have to double the value";        
        }if(nextNo==8){
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio8.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
        document.getElementById("data").innerHTML = "Add the 2nd digit of your age ";        
        }
        if (nextNo==9) {
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio9.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
            document.querySelector("#next").innerHTML = "CHECK AGE";

            document.getElementById("number").style.display = "block";
            document.getElementById("data").innerHTML = "Tell me the number you have with you now";        
        }
        if(nextNo==10){
            document.getElementById("music").pause();
        document.getElementById("music").setAttribute('src', 'audio10.wav');
        document.getElementById("music").load();
        document.getElementById("music").play();
            document.querySelector("#next").style.display = "none";
            var age = document.getElementById('number').value;
            age = age - 8;
            document.getElementById("number").style.display = "none";

            document.querySelector("#finish").style.display = "block";
            document.getElementById("data").innerHTML = "Your age is<h1>"+age+"</h1>";        

        }
        
        

    }
        function finish(){
            location.reload();

        }
        