$('.nav a').click(function(){
    $('.nav li').removeClass('active');
});
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
//LEVEL CALCULATIONS
function getmininglevel(){ //MINING
	var n = exp.miningexp;
	lvl.mininglevel = Math.dolevel(n);
	updateHTML();
};
function getsmithinglevel(){ //SMITHING
	var n = exp.smithingexp;
	lvl.smithinglevel = Math.dolevel(n);
	updateHTML();
};
function getwoodcutlevel(){ //WOODCUTTING
	var n = exp.woodcutexp;
	lvl.woodcutlevel = Math.dolevel(n);
	updateHTML();
};

//EXPERIENCE CALCULATIONS
function gainminingexp(n){ //MINING
	exp.miningexp = exp.miningexp + n;
	getmininglevel();
};
function gainsmithingexp(n){ //SMITHING
	exp.smithingexp = exp.smithingexp + n;
	getsmithinglevel();
};
function gainwoodcutexp(n){ //SMITHING
	exp.woodcutexp = exp.woodcutexp + n;
	getwoodcutlevel();
};

//RESOURCE CALCULATIONS
function pinelogchange(n){
	resources.pinelog = resources.pinelog + n;
};
function birchlogchange(n){
	resources.birchlog = resources.birchlog + n;
};
function redwoodlogchange(n){
	resources.redwoodlog = resources.redwoodlog + n;
};
function coalchange(n){
	resources.coal = resources.coal + n;
};
function tinorechange(n){
	resources.tinore = resources.tinore + n;
};
function copperorechange(n){
	resources.copperore = resources.copperore + n;
};
function tinbarchange(n){
	resources.tinbar = resources.tinbar + n;
};
function copperbarchange(n){
	resources.copperbar = resources.copperbar + n;
};
function bronzebarchange(n){
	resources.bronzebar = resources.bronzebar + n;
};
//UPDATES
function updateHTML(){
	document.getElementById('tinbarcount').innerHTML = resources.tinbar;
	document.getElementById('coalcount').innerHTML = resources.coal;
	document.getElementById('tinorecount').innerHTML = resources.tinore;
	document.getElementById('copperorecount').innerHTML = resources.copperore;
	document.getElementById('copperbarcount').innerHTML = resources.copperbar;
	document.getElementById('bronzebarcount').innerHTML = resources.bronzebar;
	document.getElementById('pinelogcount').innerHTML = resources.pinelog;
	document.getElementById('birchlogcount').innerHTML = resources.birchlog;
	document.getElementById('redwoodlogcount').innerHTML = resources.redwoodlog;
	document.getElementById('mininglevel').innerHTML = "Mining Level: " + lvl.mininglevel;
	document.getElementById('miningexp').innerHTML = "Mining Experience: " + exp.miningexp;
	document.getElementById('smithinglevel').innerHTML = "Smithing Level: " + lvl.smithinglevel;
	document.getElementById('smithingexp').innerHTML = "Smithing Experience: " + exp.smithingexp;
	document.getElementById('woodcutlevel').innerHTML = "Woodcutting Level: " + lvl.woodcutlevel;
	document.getElementById('woodcutexp').innerHTML = "Woodcutting Experience: " + exp.woodcutexp;
	document.getElementById('coalincrement').innerHTML = coalamount;
	document.getElementById('heat').innerHTML = "Heat: " + furnace.heat;
	document.getElementById('fuelamount').innerHTML = furnace.fuelamount;
};

function update(){
	updateHTML();
	console.log("Update Complete :D");
};

//MATH FUNCTIONS
function rand(){
	return Math.floor(Math.random()*100);
};
function chance(n){ //n=Chance of success
	return 100 * n + 1;
};
function getlvlreq(n){ //n=The level requirment.
	var m = n - 1;
	return m;
};
Math.nthroot = function(n, m){ //n=The root m=The number you're finding the nthroot of.
	if(m>0){
		return Math.pow(m, 1/n);
	}
	else{
		console.log("NTHROOT ERROR");
	}
};
Math.dolevel = function(n){ //n=The exp amount to be converted into the level
	return Math.floor(Math.nthroot(3, n/50));
};