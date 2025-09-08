var points;
var lives;
var easyMode=false;
var regularMode=false;
var hardMode=false;

function turnOnEasyMode(){
	easyMode=true;
	regularMode=false;
	hardMode=false;
	beginGame();
}

function turnOnRegularMode(){
	regularMode=true;
	easyMode=false;
	hardMode=false;
	beginGame();
}

function turnOnHardMode(){
	hardMode=true;
	easyMode=false;
	regularMode=false;
	beginGame();
}

function beginGame(){
	
	points = 0;
	lives = 3;
	
	clearAns();
    getDate();
	
	document.getElementById("game-over").style.display = "none";
	document.getElementById("game").style.display = "block";
	
	updateLives(lives);
	document.getElementById("points_num").innerHTML = points;
	
	if(regularMode || hardMode){
	document.getElementById("hint-button").style.display = "none";
	document.getElementById("lives").style.display = "block";
	
	} else if (easyMode){
		document.getElementById("exit_practice_mode").style.display = "block";
		document.getElementById("hint-button").style.display = "block";
		document.getElementById("lives").style.display = "none";
		document.getElementById("regular-incorrect").style.display = "none";
	}
	
	document.getElementById("start-menu").style.display = "none";
    document.getElementById("rules-button").style.display = "none";
    document.getElementById("start-button").style.display = "none";
	document.getElementById("options-menu").style.display = "none";

}


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

function generateYear(){
    return getRandomIntInclusive(1900,2050);
}

function generateMonth(){
    return getRandomIntInclusive(1,12);
}

function generateDay(month,year){
    if(month == 2){
        if(year % 4 !=0  || (year % 100 == 0 && year % 400 != 0)){ // non-leap year february!
            // years divisible by 100 but not by 400 are not leap years
            return getRandomIntInclusive(1,28);
        }
        else if (year % 4 ==0) { //leap year february!
            return getRandomIntInclusive(1,29);
        }
    }
    else if ([4, 6, 9, 11].includes(month)) { //months with 30 days!
        return getRandomIntInclusive(1,30);
    }
    else return getRandomIntInclusive(1,31); //months with 31 days!
}

function getEnglishMonth(month){
    const months = ["January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"];
        return months[month-1];
}

function getEnglishDay(day){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
}

let correctDayOfWeek = "";

function getDate(){
	
    let year = generateYear();
    let month = generateMonth();
    let day = generateDay(month,year);
    let englishMonth=getEnglishMonth(month);

    document.getElementById("randomMonth").innerHTML = englishMonth;
    document.getElementById("randomDay").innerHTML = day;
    document.getElementById("randomYear").innerHTML = year;

    correctDayOfWeek = getEnglishDay(calculateDay(month,day,year));

    updateLives(lives);
	
	document.getElementById("submit-button").style.display = "block";
	document.getElementById("new-date-button").style.display="none";
	document.getElementById("results").style.display="none";
}

function calculateDay(month,day,year){
    let string=year.toString();
    let XX=string.substring(0,2);
    let YY=string.substring(2,4);
    console.log("year:",year);
    console.log("XX: ", XX);
    console.log("YY: ", YY);
    let xx=Number(XX); //first two digits in year
    let yy=Number(YY); //last two dgits in year
    console.log("xx: ", xx);
    console.log("yy", yy);
    let century;
    if (xx == 20) century = 2;
    else if (xx == 19) century = 3;
    else if (xx == 18) century = 5;
    else if (xx == 17) century = 0;
    console.log("century: ", century);
    let d = Math.floor(yy / 12); // number of times 12 goes into yy
    let r = yy % 12; // remainder of yy / 12
    let s = Math.floor(r / 4); // number of times 4 goes into remainder
    console.log("d: ", d, " ,r: ", r, " ,s: ", s);
    let doomsday=(century+r+d+s) % 7; // obtain the year's doomsday
    console.log("doomsday: ", doomsday);
    //define month anchor
    let monthAnchor;
    const monthAnchors = [3,0,0,4,2,6,4,1,5,3,0,5];
    monthAnchor=monthAnchors[month-1];
    if(year % 4 == 0){
        if(month==1) monthAnchor = 4;
        else if(month==2) monthAnchor = 1;
    }
    if (month == 1) { // month anchor depends on whether or not it is a leap year
        if (year % 4 == 0) monthAnchor = 4;
        else monthAnchor = 3;
    }

    return (day-monthAnchor+doomsday) % 7;
}

function compareAns() {

    let ansList=document.getElementsByName('day_of_week');
    let userAns;

    for(i=0;i<ansList.length;i++){
        if (ansList[i].checked)
            userAns=ansList[i].value;
    }


    if(userAns == correctDayOfWeek){
		points++;
		document.getElementById("points_num").innerHTML = points;
        document.getElementById("incorrect").style.display = "none";
        document.getElementById("correct").style.display = "block";


    } else if (userAns != correctDayOfWeek){
		if(hardMode || regularMode){ lives--; }
        document.getElementById("ans").innerHTML = userAns;
        document.getElementById("realans").innerHTML = correctDayOfWeek;
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correct").style.display = "none";
    
    }

	if(hardMode || regularMode) {
    updateLives(lives);

    if(lives > 0){
        document.getElementById("getdate").style.display="block";
		document.getElementById("new-date-button").style.display="block";
    } else {
		document.getElementById("getdate").style.display="none";
		document.getElementById("new-date-button").style.display="none";
	}

    
	} else if (easyMode){
		document.getElementById("getdate").style.display="block";
		document.getElementById("new-date-button").style.display="block";
	}
	
	document.getElementById("submit-button").style.display = "none";
	//document.getElementById("new-date-button").style.display = "block";
	document.getElementById("results").style.display="block";

}

function updateLives(lives){
if (lives == 3){
        document.getElementById("livesleft").innerHTML = "<3 <3 <3";
    } else if (lives == 2){
        document.getElementById("livesleft").innerHTML = "<3 <3";
    } else if (lives == 1){
        document.getElementById("livesleft").innerHTML = "<3";
    } else if (lives == 0){
        document.getElementById("livesleft").innerHTML = "NO LIVES LEFT :(";
        setTimeout('gameOver()',4000);
    } else {
        document.getElementById("livesleft").innerHTML = "ERROR";
    }
}


function clearAns(){
    let ansList=document.getElementsByName('day_of_week');

    for(i=0;i<ansList.length;i++){
        if (ansList[i].checked)
            ansList[i].checked=false;
    }

}

function gameOver(){
	document.getElementById("game").style.display = "none";
	document.getElementById("game-over").style.display = "block";
	document.getElementById("final-score").innerHTML = points;
}

function toStartMenu(){
	document.getElementById("start-menu").style.display = "block";
	document.getElementById("game-over").style.display = "none";
	document.getElementById("rules-button").style.display = "inline-block";
	document.getElementById("start-button").style.display = "block";
}

function hintsOff(){
	document.getElementById("hint-button").style.display = "none";
}

function hintsOn() {
	document.getElementById("hint-button").style.display = "block";
}

function exitPracticeMode(){
	document.getElementById("game").style.display = "none";
	document.getElementById("exit_practice_mode").style.display="none";
	toStartMenu();
}
    
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("getdate").addEventListener("click", function() {
        getDate()
    });
});
