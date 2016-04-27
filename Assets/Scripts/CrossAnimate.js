// this script animates the cross hairs of the gun; once fired, the crosshairs animate
// define four crosshair variables

var UpCurs : GameObject;
var DwnCurs : GameObject;
var RgtCurs : GameObject;
var LftCurs : GameObject;

//if button is fired, enable animations
function Update() {
	if (Input.GetButtonDown("Fire1")) {
		UpCurs.GetComponent("Animator").enabled=true;
		DwnCurs.GetComponent("Animator").enabled=true;
		RgtCurs.GetComponent("Animator").enabled=true;
		LftCurs.GetComponent("Animator").enabled=true;
		WaitingAnim();
	}
}
// declare WaitingAnim function to yield animation for 0.1seconds and to end once it is fired
function WaitingAnim(){
	yield WaitForSeconds(0.1);
	UpCurs.GetComponent("Animator").enabled=false;
	DwnCurs.GetComponent("Animator").enabled=false;
	RgtCurs.GetComponent("Animator").enabled=false;
	LftCurs.GetComponent("Animator").enabled=false;

}