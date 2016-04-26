//script allows you to inflict damage via the gun/weapon

//place the script inside GUNMECHANICS folder

//begin by delcaring variables

var DamageAmount : int = 5;
var TargetDistance : float;
var AllowedRange : float = 15;

function Update() {
	if (input.GetButtonDown("Fire1")) {
		var Shot : RaycastHit;
			if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), Shot)) {
				TargetDistance = Shot.distance;
					if (TargetDistance < AllowedRange) {
						Shot.transform.SendMessage("DeductPoints", DamageAmount);
					}
			}
	}
} 
// PLACE SCRIPT ON YOUR ENEMY