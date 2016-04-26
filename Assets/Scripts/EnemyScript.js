//this script is for our enemy object
// declare enemy variable health

var EnemyHealth : int = 10;
// every time the enemy is hit or damaged deduct health points
function DeductPoints (DamageAmount : int) {
	EnemyHealth -= DamageAmount;
}
//once enemyhealth -=0, destroy the gameobject
function Update () {
	if (EnemyHealth <= 0) {
		Destroy(gameObject);
	}
}
