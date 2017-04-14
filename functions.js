/**
 * @author pammi
 */
/* array of colors */
var colors=["#4286f4","#bae098","#af3f95","#2f3438","#b74770","#b7a147","#561d08","#46b5b5"];
/*to generate random number.  Just call the function randNum(n), where n is the number passed, to get a random number generated with a certain value. Like for a random number between 1-100, the value of n will be 100 */ 
function randNum(n){
	num = Math.floor((Math.random() * n) + 1);
						return num;
	
}
/* shuffle() is for shuffling an array.  Just pass the array to be shuffled as a parameter in it. */
function shuffle(arr){
	console.log("arr before shuffling : "+arr);
	var l=arr.length;
	var shufArr=[];
	for(i=0;i<l;i++){
	num = Math.floor((Math.random() * arr.length));
	shufArr[i]=arr[num];
	arr.splice(num,1);					
	}
	arr=shufArr;
	console.log("arr after shuffling : "+arr);
	return arr;
				
}
/* centered(), is a function to center any DOM element.  Just pass the DOM element to be centered, as an argument. This is a jquery function, and you will need to include jquery file */
function centered(el){
	var w=el.width();		
	var h=el.height();
	var Ww=$(window).width();
	var Wh=$(window).height();
	el.css('top',(Wh/2)-(h/2)).css('left',(Ww/2)-(w/2));
}

/* this function highlights the element passed with yellow color */
function highlight(p){
	
		p.css("background-color","yellow");
		return;
	}
	
	
	/*to start a timer , with minutes and seconds use this function */
	function mmssTime() {
		var sec=0,min=0;
					if(sec==60){
						min+=1;
						sec=0;
					}
					if(sec<10 && min<10){				
					$("#clock").html("0"+min+" : 0" +sec);					
					}else if(sec<10){
						$("#clock").html(min+" : 0" +sec);
					}else if(min<10){
						$("#clock").html("0"+min+" : " +sec);
					}else{
						$("#clock").html(min+" : " +sec);
					}
				
					
					sec += 1;
				}
				timerOff = setInterval(mmssTime, 1000);	/*use this statement where ever you want to start the timer start the timer */
	

	
