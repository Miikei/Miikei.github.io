var qual = {
	pcoal:10,
	rcoal:5,
	icoal:1
};
var furnace = {
	efficiency:1,
	capacity:1000,
	fuelusage:0,
	fuelamount:0,
	heat:0
};
var coalamount = 1;


setInterval(function(){ //HEAT UPDATER
	fuelamount();
	heat();
},1000);

function addfuel(n){
	furnace.fuelamount = furnace.fuelamount + n * coalamount;
	heat();
};
function heat(){
	furnace.heat = furnace.fuelamount * furnace.efficiency;
	updateHTML();
};
function coalamountset(n){
	coalamount = n;
	updateHTML();
};
function fuelamount(){
	furnace.fuelamount = Math.floor(furnace.fuelamount - (furnace.heat)/(furnace.efficiency * 75));
	updateHTML();
};

$("#addpcoal").click(function(){
	addfuel(qual.pcoal);
});
$("#addrcoal").click(function(){
	addfuel(qual.rcoal);
});
$("#addicoal").click(function(){
	addfuel(qual.icoal);
});

$("#onecoal").click(function(){
	coalamountset(1);
});
$("#tencoal").click(function(){
	coalamountset(10);
});
$("#centcoal").click(function(){
	coalamountset(100);
});