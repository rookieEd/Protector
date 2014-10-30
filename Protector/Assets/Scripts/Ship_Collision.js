#pragma strict 
public var effect : GameObject;
public var explodeLife: float = 1f;
public static var dead: boolean = false;

var _lastCollision : GameObject = null;

function OnTriggerEnter(other : Collider)
{
	if (other.gameObject == _lastCollision) {
		return;
	}
	
	if(other.tag == "Asteroid"){// stops from having minus score
		GUIHud.shipHealth = Mathf.Clamp(GUIHud.shipHealth - 1,  0, int.MaxValue);
	}
	
	if(other.tag == "Asteroid" && GUIHud.shipHealth <= 0)// destroys ship
	{		
		var explosion: GameObject;
		explosion = Instantiate (effect, transform.position, transform.rotation);
		GameObject.Destroy(explosion.gameObject, explodeLife);
		GameObject.Destroy(gameObject);
		dead = true;
		Respawn.respawn = true;
		
	}
	
	_lastCollision = other.gameObject;
	
	
}