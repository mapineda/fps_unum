// import UnityEngine.UI
import UnityEngine.UI;

//define global and internal variables
static var CurrentAmmo : int;
var InternalAmmo : int;
var AmmoDisplay : GameObject;

// have internal variable equal global ammo variable
// change the display text to update
function Update () {
	InternalAmmo = CurrentAmmo;
	AmmoDisplay.GetComponent.<Text>().text = "" + InternalAmmo;
}