#pragma strict
public var shield: GameObject;
public var shield2: GameObject;
public var shield3: GameObject;
public var shield4: GameObject;
public static var damageTaken: float = 0f;
var damage: float=0f;
public var shieldHp: float = 10;
private var shields: GameObject;
private var shields2: GameObject;
private var shields3: GameObject;
private var shields4: GameObject;
private static var spawned: boolean = false;
public var timer: float = 0f;
public var waitForTimeout: boolean = false; 

function Start () {
	damageTaken = 0f;
	timer = 0f;

}


function Update () {
	if(waitForTimeout){
		timer += Time.deltaTime;
	}
	if(waitForTimeout && timer > 20){// makes sure shield goes off
		spawned = false;
		waitForTimeout = false;
		Powerup.satShield = false;
		timer = 0f;
	}
	if(Settings.Sat1){// for sat 1
		if(Powerup.satShield && !spawned){// if picked up and not already spawned
			spawned = true;
			shields = Instantiate(shield, transform.position, transform.rotation);
			Destroy(shields, 20f);
			waitForTimeout = true;
		}
		if(!Powerup.satShield){// if pick out timed out
			spawned = false;
			Destroy(shields);
			waitForTimeout = false;
			timer = 0f;
		}
		
		if((shieldHp - damageTaken) < 0){// if shiled health ran out
			Destroy(shields);
			spawned = false;
			damageTaken = 0f;
			waitForTimeout = false;
			timer = 0f;
		}
	}
	
	if(Settings.Sat2){// for sat 2
		if(Powerup.satShield && !spawned){// if picked up and not already spawned
			spawned = true;
			shields2 = Instantiate(shield2, transform.position, transform.rotation);
			Destroy(shields2, 20f);
		}
		if(!Powerup.satShield){// if pick out timed out
			spawned = false;
			Destroy(shields2);
		}
		
		if((shieldHp - damageTaken) < 0){// if shield health ran out
			Destroy(shields2);
			damageTaken = 0f;
		}
	}
	
	if(Settings.Sat3){// for sat 3
		if(Powerup.satShield && !spawned){// if picked up and not already spawned
			spawned = true;
			shields3 = Instantiate(shield3, transform.position, transform.rotation);
			Destroy(shields3, 20f);
		}
		if(!Powerup.satShield){// if pick out timed out
			spawned = false;
			Destroy(shields3);
		}
		
		if((shieldHp - damageTaken) < 0){// if shield health ran out
			Destroy(shields3);
			damageTaken = 0f;
		}
	}
	
	if(Settings.Sat4){// for sat 4
		if(Powerup.satShield && !spawned){// if picked up and not already spawned
			spawned = true;
			shields4 = Instantiate(shield4, transform.position, transform.rotation);
			Destroy(shields, 20f);
		}
		if(!Powerup.satShield){// if pick out timed out
			spawned = false;
			Destroy(shields4);
		}
		
		if((shieldHp - damageTaken) < 0){// if shield health ran out
			Destroy(shields4);
			damageTaken = 0f;
		}
	}
	
	
}

function OnTriggerEnter(other : Collider){
	if(other.tag == "Asteroid" ){
		damageTaken++;
	}
}