#pragma strict

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Asteroid" || other.tag == "Satellite")
	{
		Destroy(gameObject);
		if(other.tag == "Asteroid"){// applies score * relative multipler
			GUIHud.score+= 1 * Powerup.multipler;
		}
		if(other.tag == "Satellite"){// penalty
			GUIHud.score-= 1;
		}
	}
	if(other.tag == "Shield"){// stops shot hitting sat
		Destroy(gameObject);
	}
}