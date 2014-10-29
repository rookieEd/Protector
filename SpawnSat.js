#pragma strict
public var Sat1: GameObject;
public var Sat2: GameObject;
public var Sat3: GameObject;
public var Sat4: GameObject;
function Start () {// spawns based on settings picked
	if(Settings.Sat1){
		Instantiate(Sat1);
		//Debug.Log("Sat1" + Settings.Sat1);
	}
	if(Settings.Sat2){
		Instantiate(Sat2);
		//Debug.Log("Sat2" +Settings.Sat2);
	}
	if(Settings.Sat3){
		Instantiate(Sat3);
		//Debug.Log("Sat3" +Settings.Sat3);
	}
	if(Settings.Sat4){
		Instantiate(Sat4);
		//Debug.Log("Sat4" +Settings.Sat4);
	}

}

function Update () {
	
}