function speedDetector(){
    let speed = parseInt(prompt("Enter speed of car"));
    if (speed < 70){
        console.log("ok")
        return;
    }

let demeritPoints = Math.floor((speed-70)/5);

if (demeritPoints>12){
    console.log("License suspended");
}else{
    console.log("Points: " + demeritPoints);
}


}
speedDetector();