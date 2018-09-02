function team(navdiv, div, teamname) {	//takes in an element and the name of the class to be added
	var current=document.getElementById("mainimage").getAttribute("src"); //gets current image

	if(teamname == 'gang'){

		if(current=='Images/gang.png'){
			document.getElementById('mainimage').src="Images/nugs.png"; //change image
			document.getElementById('mainimage').width='301'; //change image width
			document.getElementById('mainimage').height='301'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("pingTables").style.display="none";
			document.getElementById("gangTables").style.display="none";
			document.getElementById("naclTables").style.display="none";
			document.getElementById("mainText").style.display="block";
			document.getElementById("mainText").innerHTML ="Welcome to the Overwatch page! We currently have 3 teams of heroes competing together for honour and glory! These are: NaCl, PING and GANG. Click the respective team logos above to see details about each team!";
		}
		else{
			document.getElementById('mainimage').src="Images/gang.png"; //change image
			document.getElementById('mainimage').width='285'; //change image width
			document.getElementById('mainimage').height='385'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("gangTables").style.display="block";
			document.getElementById("pingTables").style.display="none";
			document.getElementById("naclTables").style.display="none";
			document.getElementById("mainText").innerHTML = "Currently, GANG is our Overwatch B Team being the lowest average SR of the three, Gold overall with an average SR of 2400. However, don't count them out! They have great teamwork and coordination, and Loz is a strong leader that can guide the team in the most intense of situations! They are quite adaptable as well, being able to play many different compositions of heroes. Despite being the lowest rank, they have some of the best team spirit in the competition!";
		
		}
	
	}
	
	if(teamname == 'nacl'){

		if(current=='Images/nacl.png'){
			document.getElementById('mainimage').src="Images/nugs.png"; //change image
			document.getElementById('mainimage').width='301'; //change image width
			document.getElementById('mainimage').height='301'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("pingTables").style.display="none";
			document.getElementById("gangTables").style.display="none";
			document.getElementById("naclTables").style.display="none";
			document.getElementById("mainText").style.display="block";
			document.getElementById("mainText").innerHTML ="Welcome to the Overwatch page! We currently have 3 teams of heroes competing together for honour and glory! These are: NaCl, PING and GANG. Click the respective team logos above to see details about each team!";
		}
		else{
			document.getElementById('mainimage').src="Images/nacl.png"; //change image
			document.getElementById('mainimage').width='375'; //change image width
			document.getElementById('mainimage').height='374'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("naclTables").style.display="block";
			document.getElementById("pingTables").style.display="none";
			document.getElementById("gangTables").style.display="none";
			document.getElementById("mainText").innerHTML = "NaCl is our Overwatch S Team, the highest in our society as of now. They've had great previous seasons in the NUEL League, scoring 10th twice in a row! Shovox is a great Tank for the team, while leading the team and keeping everyone on the right page. The team focuses on using compositions with multiple tanks and supports, with no damage heroes, and rush an objective to overwhelm the enemy. This is a fearsome strategy and one they use to great effect!";
		}
		
	
	}
	
	if(teamname == 'ping'){
		
		if(current=='Images/ping.png'){
			document.getElementById('mainimage').src="Images/nugs.png"; //change image
			document.getElementById('mainimage').width='301'; //change image width
			document.getElementById('mainimage').height='301'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("pingTables").style.display="none";
			document.getElementById("gangTables").style.display="none";
			document.getElementById("naclTables").style.display="none";
			document.getElementById("mainText").style.display="block";
			document.getElementById("mainText").innerHTML ="Welcome to the Overwatch page! We currently have 3 teams of heroes competing together for honour and glory! These are: NaCl, PING and GANG. Click the respective team logos above to see details about each team!";
		}
		
		else{
			document.getElementById('mainimage').src="Images/ping.png"; //change image
			document.getElementById('mainimage').width='300'; //change image width
			document.getElementById('mainimage').height='300'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("pingTables").style.display="block";
			document.getElementById("gangTables").style.display="none";
			document.getElementById("naclTables").style.display="none";
			document.getElementById("mainText").innerHTML = "PING is our Overwatch A Team, being in the middle of GANG and NaCl. Despite being a middle child, they perform quite well as a team! Lelito is a flexible leader who can play multiple roles, and lead the team on any of them. The team is known to play it quite safe with their compositions, but that doesn't mean they're ineffective! They have great DPS players that can tear a hole in many teams.";
		}
	
	}
	
	if(teamname == 'opncl'){
		
		if(current=='Images/opncl.png'){
			document.getElementById('mainimage').src="Images/nugs.png"; //change image
			document.getElementById('mainimage').width='301'; //change image width
			document.getElementById('mainimage').height='301'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("opnclTables").style.display="none";
			document.getElementById("mainText").style.display="block";
			document.getElementById("mainText").innerHTML ="Welcome to the CS:GO page! We currently have a single team competing and one team returning next season! These are: OP:NCL and Cavaliers. Click the respective team logos above to see details about each team!";
		}
		
		else{
			document.getElementById('mainimage').src="Images/opncl.png"; //change image
			document.getElementById('mainimage').width='320'; //change image width
			document.getElementById('mainimage').height='300'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("opnclTables").style.display="block";
			document.getElementById("mainText").innerHTML = "Overpowered Newcastle is a sharpened CS:GO team that strives to win and get their name out there. Holding the title of champions of the Belong Northern arena they intend to fight for new titles. ";
		}
	
	}
	
	if(teamname == 'cav'){
		
		if(current=='Images/cav.png'){
			document.getElementById('mainimage').src="Images/nugs.png"; //change image
			document.getElementById('mainimage').width='301'; //change image width
			document.getElementById('mainimage').height='301'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("opnclTables").style.display="none";
			document.getElementById("mainText").style.display="block";
			document.getElementById("mainText").innerHTML ="Welcome to the CS:GO page! We currently have a single team competing and one team returning next season! These are: OP:NCL and Cavaliers. Click the respective team logos above to see details about each team!";
		}
		
		else{
			document.getElementById('mainimage').src="Images/cav.png"; //change image
			document.getElementById('mainimage').width='300'; //change image width
			document.getElementById('mainimage').height='300'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("opnclTables").style.display="none";
			document.getElementById("mainText").innerHTML = "The Cavaliers have not been participating in the most recent seasons, but they are returning next season with a new set of players!";
		}
	
	}
	
	if(teamname == 'nude'){
		
		if(current=='Images/nude.png'){
			document.getElementById('mainimage').src="Images/nugs.png"; //change image
			document.getElementById('mainimage').width='301'; //change image width
			document.getElementById('mainimage').height='301'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("nudeTables").style.display="none";
			document.getElementById("mainText").style.display="block";
			document.getElementById("mainText").innerHTML ="Welcome to the League of Legends page! We currently have a one team competing, Newcastle University Dozy Elks! Click the team logo above to see details about the team!";
		}
		
		else{
			document.getElementById('mainimage').src="Images/nude.png"; //change image
			document.getElementById('mainimage').width='283'; //change image width
			document.getElementById('mainimage').height='356'; //change image height
			var property = document.getElementById(div);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			var property = document.getElementById(navdiv);	//sets a property variable to the element passed
			property.className = teamname == property.className ? '' : teamname;	//adds a class to the element
			document.getElementById("nudeTables").style.display="block";
			document.getElementById("mainText").innerHTML = "Newcastle University Dozy Elks is currently the only Newcastle League of Legends team, however we are always looking for new members and looking to expand. They have strong leadership under their captain Cheesy Jeeves, the former League Society president, and are on their way to becoming a formidable team. Please cheer them on during their NUEL games on Sundays!";
		}
	
	}
	
}

function hideExec(role, execTable) { /*method that makes the table of execs be hidden and a given exec appear, controllable by a button*/

    var currentExec = document.getElementById(role); /*getting the div to be made visible/invisible*/
	var execTables = document.getElementById(execTable); /*getting the table of execs*/

    if (execTables.style.display == "none") { /*if the table is currently invisible, make it visible*/
        execTables.style.display = "block";
    }

    else { /*else, make it invisible*/
        execTables.style.display = "none";
    }
	
	if (currentExec.style.display == "block") { /*if the div is currently visible, make it not visible*/
        currentExec.style.display = "none";
    }

    else { /*else, make it visible*/
        currentExec.style.display = "block";
    }
}