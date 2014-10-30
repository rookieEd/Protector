#pragma strict
public var effect : GameObject;
public var explodeLife: float = 1f;
public static var dead: boolean = false;

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Finish")
	{		
		var explosion: GameObject;
		explosion = Instantiate (effect, transform.position, transform.rotation);
		GameObject.Destroy(explosion.gameObject, explodeLife);
		GameObject.Destroy(gameObject);
		dead = true;
		Respawn.respawn = true;
		
	}
	
}