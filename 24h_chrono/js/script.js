let d = document.querySelector(".text1");
let f = document.querySelector(".text2");
let t = document.querySelector(".text3");
let x = document.querySelector(".sidebar");
let y = document.querySelector(".images");
const imageCont = document.querySelectorAll(".images img")
var play = document.getElementById("myAudio"); 


function start(){

    let date1 = new Date("October 16, 2019 " + d.value)
    let date2 = new Date("October 16, 2019 " + f.value)
    let secD1 = trouverSecondes(date1);
    let secD2 = trouverSecondes(date2);
    let totalSEC = (secD2 - secD1);

    let x = setInterval(function() {
      
        // convert into second,minutes and hours
        let hours =  Math.floor(totalSEC/3600);
        let rest = totalSEC%3600;
        let minutes = Math.floor(rest/60);
        let seconds = (rest%60);
      
        // displaying hour
        /*document.getElementById("content").innerHTML = addZero(hours) + "h " + addZero(minutes) + "m " + addZero(seconds) + "s "*/

        let tempsR = addZero(hours).toString() + addZero(minutes).toString() + addZero(seconds).toString()
        console.log(tempsR[2]);
        for(let i = 0; i < imageCont.length; i++){
            imageCont[i].src = "chronoNumber/num" + tempsR[i] + ".jpg"
        }
        totalSEC--

        playAudio()

        // If the count down is finished, write some text
        if (totalSEC < 0) {
          clearInterval(x);
          document.getElementById("content").innerHTML = "EXPIRED";
        }
    }, 1000);
}

//finding seconds    
function trouverSecondes(date){
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    return ((hour * 3600) + (min * 60) + sec)
    
}
function addZero(number){
    return number < 10 ? ("0"+number) : number;
}

function playAudio() { 
  play.play(); 
} 

/*function Convertion(time){
    let hour = Math.floor(time/3600);
    let rest = time%3600;
    let min = Math.floor(rest/60);
    let sec = (rest%60);

    let timeString = (hour+":"+min+":"+sec)
    let datetime = new Date("October 16, 2019 " + timeString + 'Z')
    return datetime;
    
}*/
