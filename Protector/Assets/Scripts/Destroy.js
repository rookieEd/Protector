#pragma strict
public var particle : GameObject;
public var explodeLife: float = 1f;
public var asteroidHP: float = 1f;
private var damageCaused: float = 1f;
public var spawnDrop: float = 0f;
public var lifeUp : GameObject;
public var satHealth : GameObject;
public var shipHealth : GameObject;
public var shotPower : GameObject;
public var shield : GameObject;
public var twoTimes : GameObject;

function Start(){
	spawnDrop = Random.Range(0,200);// generates a random number between 0-200
}
 function Update (){
 
 	if(Powerup.poweredShot){// if power up enabled will cause 2 damage
 		damageCaused = 2;
 	}
 	else{// will cause standard damage
 		damageCaused = 1;
 	}
 	
 
 }

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Shot" || other.tag == "Satellite"){
		if(asteroidHP == 2 && Powerup.poweredShot){
 			GUIHud.score+= 1 * Powerup.multipler;
 		}
		asteroidHP -= damageCaused;
	}
	
	if(other.tag == "Ship"){// destroys asteroid
		asteroidHP = 0;
	}
	
	if((other.tag == "Shot" || other.tag == "Ship" || other.tag == "Shield") && asteroidHP <= 0)
	{
		var smoke: GameObject;		
		smoke = Instantiate (particle, transform.position, transform.rotation);
		GameObject.Destroy(smoke.gameObject, explodeLife);
		GameObject.Destroy(gameObject);
		//Debug.Log("shot");
		if(spawnDrop < 60){// only enteres if below 60
			spawn();
		}
		
	}
	if(other.tag == "Satellite"){
		var smoke2: GameObject;		
		smoke2 = Instantiate (particle, transform.position, transform.rotation);
		GameObject.Destroy(smoke2.gameObject, explodeLife);
		GameObject.Destroy(gameObject);
		GUIHud.satHealth -=1;
		if(asteroidHP >0){// strong does 2 damage if hp is 2
			GUIHud.satHealth -=1;
		}
		//Debug.Log("Sat");
	}
	//Instantiate (particle);
	//GameObject.Destroy(particle.gameObject, 1f);
	
}

function spawn(){
	if(spawnDrop <= 5){// if number generated below 5 will drop lifeUp
		var life: GameObject;
		life = Instantiate (lifeUp, transform.position, transform.rotation);
		GameObject.Destroy(life,20f);
	}
	if(spawnDrop > 5 && spawnDrop <= 15){// if number generated above 5 and below 15 will drop satHealth
		var satH: GameObject;
		satH = Instantiate (satHealth, transform.position, transform.rotation);
		GameObject.Destroy(satH,20f);
	}
	if(spawnDrop > 15 && spawnDrop <= 25){// if number generated above 15 and below 25 will drop shipHealth
		var shipH: GameObject;
		shipH = Instantiate (shipHealth, transform.position, transform.rotation);
		GameObject.Destroy(shipH,20f);
	}
	if(spawnDrop > 25 && spawnDrop <= 35){// if number generated above 25 and below 35 will drop shotPower
		var power: GameObject;
		power = Instantiate (shotPower, transform.position, transform.rotation);
		GameObject.Destroy(power,20f);
	}
	if(spawnDrop > 35 && spawnDrop <= 45){// if number generated above 35 and below 45 will drop shield
		var shielding: GameObject;
		shielding = Instantiate (shield, transform.position, transform.rotation);
		GameObject.Destroy(shielding,20f);
	}
	if(spawnDrop > 45){// if number generated above 45 will drop twoTimes
		var two: GameObject;
		two = Instantiate (twoTimes, transform.position, transform.rotation);
		GameObject.Destroy(two,20f);
	}
}