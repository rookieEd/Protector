#pragma strict
public static var respawn: boolean = false;
public var Ship: GameObject;//player
public var respawnTime: float = 5f;
public var timer: float = 0f;	
static var spawnedShip: GameObject;
//public var test: boolean = false;
function Start () {
	respawn = false;
}

function Update () {// respawns ship
	//test = respawn;
	
	if(respawn && GUIHud.lives != 0){// if player has lives left
		timer += Time.deltaTime;
		if(timer > respawnTime){// delay spawn
			Ship_Collision.dead = false;
			spawnedShip = Instantiate(Ship, transform.position , transform.rotation);
			respawn = false;
			GUIHud.lives -= 1;
			GUIHud.shipHealth = 2;
			timer = 0f;
		}
	}
	
}