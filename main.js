document.getElementById('mainInput').oninput = main;
document.getElementById('groupSelector').onchange = main;

function main(){
	console.log('running');
	let tableOutput = document.getElementById('outputTable');
	
	let input = document.getElementById('mainInput').value;
	let inputSplit = input.split('\n');

	let groups = Number(document.getElementById('groupSelector').value);
	let minNumberPerGroup = Math.floor(inputSplit.length/groups);
	let maxNumberPerGroup = Math.ceil(inputSplit.length/groups);

	var teams = Array(groups).fill(0).map(() => new Array(0))
	let teamIter = 0;
	console.log(teams);
	while(inputSplit.length > 0){
		let index = Math.floor(Math.random()*inputSplit.length);
		teams[teamIter%groups].push(inputSplit.splice(index, 1)[0]);
		teamIter++;
	}
	console.log(teams);
	var mytable = "<table><tr>";
	for(var i = 0; i < groups; i++) {
		mytable += "<td>Team " + (i+1) + "</td>"; 
		for(var string of teams[i]) {  
			mytable += "<td>" + string + "</td>"; 
			}
		mytable += "</tr>";
	}
	mytable += "</table>";
	document.getElementById("outputTable").innerHTML = mytable;
}