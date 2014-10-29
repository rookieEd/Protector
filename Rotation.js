#pragma strict
public var rotSpeed: float = 10f;
function Start () {

}

function Update () {// adds rotation for objects such as sats and planet
	transform.Rotate(Vector3.left * rotSpeed *Time.deltaTime);
}