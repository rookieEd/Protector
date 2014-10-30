#pragma strict
public var shipHealthGain: float = 0f;
public var satHealthGain: float = 0f;
public static var satShield: boolean = false;
public var isShieldPickup: boolean = false;
public var scoreMultipler: boolean = false;
public static var multipler: float = 1f;
public var isShotPowerup: boolean = false;
public static var poweredShot: boolean = false;
public var shipGainLife: float = 0f;
public static var timerSat:float  = 0f;
public static var timerPow:float  = 0f;
public static var timerMul:float  = 0f;
public var countingS: boolean = false;
public var countingP: boolean = false;
public var countingM: boolean = false;
var _lastCollision : GameObject = null;
function Start () {

}

function Update () {

	if(satShield){//starts time to effect stops
		countingS = true;
	}
	if(poweredShot){//starts time to effect stops
		countingP = true;
	}
	
	if(multipler){//starts time to effect stops
	 	countingM = true;
	}
	
	if(countingS){//for sat
		timerSat += Time.deltaTime;
	}
	if(countingP){// for powered shot
		timerPow += Time.deltaTime;
	}
	if(countingM){// multiplier
		timerMul += Time.deltaTime;
	}
	/*if(timer){
		counting = false;
		timer = 0;
		satShield = false;
		poweredShot = false;
		multipler = 1;
	}*/
	
	if(timerSat >= 20){// stops effect
		countingS = false;
		timerSat = 0;
		satShield = false;
	}
	if(timerPow >= 20){// stops effect
		countingP = false;
		timerPow = 0;
		poweredShot = false;
	}
	
	if(timerMul >= 20){// stops effect
		countingM = false;
		timerMul = 0;
		multipler = 1;
	}

}

function OnTriggerEnter(other : Collider){

	if (other.gameObject == _lastCollision) {// stops having mutliple effects applied by 1 powerup
		return;
	}
	
	if(other.tag == "Ship"){
		Destroy(gameObject);
		if(GUIHud.shipHealth < 2 && shipHealthGain > 0){// for health ship pickup
			GUIHud.shipHealth += shipHealthGain;
		}
		
		if(GUIHud.satHealth < 5 && satHealthGain >0){// for health sat pickup
			GUIHud.satHealth += satHealthGain;
		}
		
		GUIHud.lives += shipGainLife;
		
		if(isShieldPickup){// starts timer
			satShield = true;
			timerSat = 0f;
		}
		
		if(isShotPowerup){// starts timer
			poweredShot = true;
			timerPow = 0f;
		}
		
		if(scoreMultipler){// starts timer
			multipler = 2;
			timerMul = 0f;
		}
		
		
	}
	
	_lastCollision = other.gameObject;
}