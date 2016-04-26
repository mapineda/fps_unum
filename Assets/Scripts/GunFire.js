
// every time a script is called it calls the update function
function Update() {
//if mouse button is down then fire gun sound through var gunsound
//define var gunsound and play gunsound.
// At the same time, play animation for gun
	if (Input.GetButtonDown("Fire1")) {
		var gunsound : AudioSource = GetComponent.<AudioSource>();
		gunsound.Play();
		GetComponent.<Animation>().Play("gunShot");
	}
}