$(window).load(function() {
  $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
});

$(function results(){
	var q1=$("#input[name=question1]:checked").val();
	var q2=$("#input[name=question2]:checked").val();
	var q3=$("#input[name=question3]:checked").val();
	var q4=$("#input[name=question4]:checked").val();
	var q5=$("#input[name=question5]:checked").val();
	var q6=$("#input[name=question6]:checked").val();
});
var n=0;
var movement=0;

function scrollWin(x,y)

{ window.scroll(x,y); }

function next(){



var ant=document.getElementById('question'+n);
var sig=document.getElementById('question'+(n+1));
if (n==0 || movement<=-2400) {
	// Scroll until the end

	scrollWin(0,340);
	// document.getElementById('main').setAttribute('style','top:-679px;');
	document.getElementsByClassName('hero-overlay')[0].setAttribute('style','display:none;');
	n=n+1;
	sig.classList.add('active'); 

	//after 2400 submit() and give results
}
else{
	n=n+1;
	console.log("forward to", "question"+n);
	movement=movement-400;
	document.getElementById('timeline').setAttribute('style','left:'+movement+'px;');
	ant.classList.remove('active');
	sig.classList.add('active');
}

}

function prev(){

console.log("back to", "question"+(n-1));

if (n==0 || n==1) {
	
}
else{
	n=n-1;
	movement=movement+400;
	document.getElementById('timeline').setAttribute('style','left:'+movement+'px;');
	var ant=document.getElementById('question'+(n+1));
	var sig=document.getElementById('question'+n);
	ant.classList.remove('active');
	sig.classList.add('active');
}

}


function abutton(){
	console.log("looking for", "radio"+n+"a");
	document.getElementById("radio"+n+"a").checked = true;
}

function bbutton(){
	document.getElementById("radio"+n+"b").checked = true;
}

function cbutton(){
	document.getElementById("radio"+n+"c").checked = true;
}

function dbutton(){
	document.getElementById("radio"+n+"d").checked = true;
}

function submit(){
	results();
	leading=q1+q2+q3+q4+q5+q6;
	document.getElementsByClassName('resultado').innerHTML="10%";
}