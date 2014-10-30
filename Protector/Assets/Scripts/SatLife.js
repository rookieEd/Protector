#pragma strict
public var effect: GameObject;
public var explodeLife: float = 1f;

function Start () {

}

function Update () {
	if(GUIHud.satDead){// blows up sat
	 	var boom: GameObject;
	 	boom = Instantiate (effect, transform.position, transform.rotation);
		GameObject.Destroy(boom.gameObject, explodeLife);
	 	GameObject.Destroy(gameObject);
	}
}