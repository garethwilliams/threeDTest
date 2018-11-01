window.onload = function(){
document.getElementById("btn-turnAndry").onclick = function() {
	turnAround()
};

document.getElementById("btn-cameraOne").onclick = function() {
	switchCameraOne()
};

document.getElementById("btn-cameraTwo").onclick = function() {
	switchCameraTwo()
};

document.getElementById("hotspotOne").onclick = function() {
	hotspotOne()
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

	function switchCameraOne() {
		document.querySelector("#first-camera").object3D.position.set(0, 1.6, 2);
		document.querySelector("#first-camera").object3D.rotation.set(0, 0, 0);

	};

	function switchCameraTwo() {
		document.querySelector("#first-camera").object3D.position.set(7, 1.6, 0);
		document.querySelector("#first-camera").object3D.rotation.set(0, 20, 0);
	};


	function hotspotOne() {
		console.log('gotit');

		var number = Math.floor(Math.random() * 120) + 20;
		console.log(number);

		document.getElementById('android').object3D.rotation.set(
	  		THREE.Math.degToRad(0),
	  		THREE.Math.degToRad(number),
	  		THREE.Math.degToRad(0)
		);
	};


}




			



