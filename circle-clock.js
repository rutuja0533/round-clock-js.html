var i,
    varNum,
    varNumDiv,
    varRot = 30;
for(i = 1; i <= 12; i++){
  varNum = document.querySelector(".num-" + i);
  varNumDiv = document.querySelector(".num-" + i + " div");
  varNum.style.transform = "rotate(" + varRot + "deg)";
  varNumDiv.style.transform = "rotate(-" + varRot + "deg)";
  varRot += 30;
  console.log(i);
}
var secHand = document.getElementById("sec-hand"),
   minHand = document.getElementById("min-hand"),
    hrsHand = document.getElementById("hrs-hand"),
    myTime,
    myHrs,
    myMin,
    mySec,
	AMPM = document.getElementById("am-pm");;
mySeconds();
myMinutes();
myHours();
function myDate(){
  myTime = new Date();
  myHrs = myTime.getHours();
  myMin = myTime.getMinutes();
  mySec = myTime.getSeconds();
}
function mySeconds(){
  myDate();
  secHand.style.transform = "rotate(" + mySec * 6+ "deg)";
  setTimeout(mySeconds, 1000);
}
function myMinutes(){
  myDate();
    minHand.style.transform = "rotate(" +  (myMin * 6 + mySec / 10) + "deg)";
  setTimeout(myMinutes,1000);
}
function myHours(){
  myDate();
    hrsHand.style.transform = "rotate(" +  (myHrs * 30 + myMin / 2) +"deg)";
  setTimeout(myHours,1000);
  if(myHrs > 12){
	AMPM.innerText = "PM";
  }
  else if(myHrs < 12){
	AMPM.innerText = "AM";
  }
}