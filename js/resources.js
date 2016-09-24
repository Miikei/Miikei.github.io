$("#choppinetree").click(function(){
	choppinetree();
});
$("#chopbirchtree").click(function(){
	chopbirchtree();
});
$("#chopredwoodtree").click(function(){
	chopredwoodtree();
});
$("#minecoal").click(function(){
	minecoal();
});
$("#minetinore").click(function(){
	minetinore();
});
$("#minecopperore").click(function(){
	minecopperore();
});
$("#smelttinore").click(function(){
	smelttinore();
});
$("#smeltcopperore").click(function(){
	smeltcopperore();
});
$("#smeltbronzebar").click(function(){
	smeltbronzebar();
});

//WOODCUTTING
function choppinetree(){
	pinelogchange(1);
	gainwoodcutexp(30);
};
function chopbirchtree(){
	birchlogchange(1);
	gainwoodcutexp(30);
};
function chopredwoodtree(){
	if(lvl.woodcutlevel>lvlreq.redwoodtree - 1){
		redwoodlogchange(1);
		gainwoodcutexp(70);
	}
	else{
		console.log("No level req");
	}
};

//MINING
function minecoal(){
	if(lvl.mininglevel>lvlreq.coal - 1){
		coalchange(1);
		gainminingexp(70);
	}
	else{
		console.log("No level req");
	}
	
};
function minetinore(){
	tinorechange(1);
	gainminingexp(30);
};
function minecopperore(){
	copperorechange(1);
	gainminingexp(30);
};

//SMITHING
function smelttinore(){
	if(resources.coal>0 && resources.tinore>0){
		coalchange(-1);
		tinorechange(-1);
			if(rand()<chance(2/3)){
				tinbarchange(1);
				gainsmithingexp(50);
			}
			else{
				gainsmithingexp(25);
			}
	}
};

function smeltcopperore(){
	if(resources.coal>0 && resources.copperore>0){
		coalchange(-1);
		copperorechange(-1);
			if(rand()<chance(2/3)){
				copperbarchange(1);
				gainsmithingexp(50);
			}
			else{
				gainsmithingexp(25);
			}
	}
};

function smeltbronzebar(){
		if(resources.tinbar>0 && resources.copperbar>0 && resources.coal>1 && lvl.smithinglevel>lvlreq.bronzebar - 1){
			coalchange(-2);
			tinorechange(-1);
			copperorechange(-1);
			if(rand()<chance(9/10)){
				bronzebarchange(1);
				gainsmithingexp(75);
			}
			else{
				gainsmithingexp(35);
			}
		}
};