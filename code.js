var pathList = document.getElementsByClassName("path");

// console.log(pathList)
// console.log("Hello")

for(i = 0; i < pathList.length; i++){
	var pathLength = pathList[i].getTotalLength();
	pathList[i].style.strokeDasharray = pathLength;
	pathList[i].style.strokeDashoffset = pathLength;
}

var shuffleList = document.getElementsByClassName("title");
var shufList = []
for(i = 0; i < shuffleList.length; i++){
	var text = new ShuffleText(shuffleList[i]);
	text.start()
	shufList[i] = text
}



// var keepLooping = true;
// (function ontimeout(){
// 	if(keepLooping){
// 	    // shufList[Math.floor((Math.random() * shufList.length))].start()
// 	    // console.log("hello")
// 	    for(i = 0; i < shuffleList.length; i++){
// 			shufList[i].start()
// 		}
// 	    setTimeout(ontimeout, Math.random() * 6000);
//     }
// })();