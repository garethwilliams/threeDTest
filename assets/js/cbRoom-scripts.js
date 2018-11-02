window.onload = function(){

// Turn Android around a random number of degrees - HTML btn to 3D scene
document.getElementById("btn-turnAndry").onclick = function() {
	turnAround()
};


function turnAround() {
		var number = Math.floor(Math.random() * 120) + 20;
		console.log(number);

		document.getElementById('android').object3D.rotation.set(
	  		THREE.Math.degToRad(0),
	  		THREE.Math.degToRad(number),
	  		THREE.Math.degToRad(0)
		);
	}



// Bounce Android 2 using animation - HTML btn to 3D scene
document.getElementById("btn-bounceAndry").onclick = function() {
	bounce()
};

function bounce() {
		document.querySelector('#androidTwo').emit('bounce');
	}



// Turn main light off - HTML btn to 3D scene
document.getElementById("btn-lightsOff").onclick = function() {
	lightsOff()
};

function lightsOff() {
	console.log('lightsOFF');
		document.querySelector('#mainLight').emit('mainLightOff');
	}


// Turn main light on - HTML btn to 3D scene
document.getElementById("btn-lightsOn").onclick = function() {
	lightsOn()
};

function lightsOn() {
	console.log('lightsOn');
		document.querySelector('#mainLight').emit('mainLightOn');
	}
	


// switch camera views - HTML btn to 3D scene
	document.getElementById("btn-cameraOne").onclick = function() {
		switchCameraOne()
	};

	
	function switchCameraOne() {
		document.querySelector("#first-camera").object3D.position.set(-1.1, 1.2, -0.6);
		document.querySelector("#first-camera").object3D.rotation.set(0, 100, 0);
	};


	document.getElementById("btn-cameraTwo").onclick = function() {
	switchCameraTwo()
	};

	function switchCameraTwo() {
		document.querySelector("#first-camera").object3D.position.set(2.4, 12, -2.4);
		document.querySelector("#first-camera").object3D.rotation.set(-20, 20, 0);
	};




// Turn Android around a random number of degrees - 3D scene to 3D scene
	document.getElementById("hotspotOne").onclick = function() {
		hotspotOne()
	};
	
	function hotspotOne() {
		console.log('gotit');

		document.getElementById("btn-turnAndry").style.backgroundColor = "#ff0000";
		setTimeout(function () {
  			document.getElementById("btn-turnAndry").style.backgroundColor = "#000000";
	}, 1000);

		var number = Math.floor(Math.random() * 120) + 20;
		console.log(number);

		document.getElementById('android').object3D.rotation.set(
	  		THREE.Math.degToRad(0),
	  		THREE.Math.degToRad(number),
	  		THREE.Math.degToRad(0)
		);
	};



// Hover on 3D scene interacting with html column

	document.getElementById("hotspotOne").onmouseenter = function() {
		hotspotHoverIn()
	};

	function hotspotHoverIn() {
		document.getElementById("btn-turnAndry").style.backgroundColor = "#979797";
	};


	document.getElementById("hotspotOne").onmouseleave = function() {
		hotspotHoverOut()
	};

	function hotspotHoverOut() {
		document.getElementById("btn-turnAndry").style.backgroundColor = "#000000";
	};
}




			



