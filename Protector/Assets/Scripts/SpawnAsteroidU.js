#pragma strict
//public var spawn: Transform[];
public var Asteroid : GameObject;// asteroid
public var SpecialStrong: GameObject;//strong
public var spawnAmount: float = 0f;//how many spawned
public var specialSpawnAmount: float = 0f;
public var maxSpawn: float = 10f;
public var maxSpecial: float = 3f;// different type
public var ship: GameObject;//player
public var movementSpeed: float = 10f;
public var canSpawn: boolean = true;
public var canSpawnS: boolean = true;
public var timer: float = 0f;
public var asteroidLife: float = 25f;
var choose: float = 0f;
var spawnInTime = 0f;
function Start () {

}

function Update () {
	choose = Random.Range(0,2);
	spawnInTime = Random.Range(5, 20);
	if(spawnAmount > maxSpawn- 1){
		canSpawn = false;
	}
	if(specialSpawnAmount > maxSpecial - 1){
		canSpawnS = false;
	}
	//var spawns: Transform = spawn[Random.Range(0,spawn.length)];
	//Instantiate(Asteroid, spawns.position, spawns.rotation);
	if(canSpawn || canSpawnS){
		timer += Time.deltaTime;
		if (timer > spawnInTime){
			if(choose == 0 || (specialSpawnAmount == 0 && canSpawn)){
				Spawn();
			}
			if(choose == 1 || (spawnAmount == 0 && canSpawnS)){
				SpawnStrong();
			}
			timer = 0f;
		}
	}
}

function Spawn(){
	var spawnedAsteroid: GameObject;
	var position: Vector3 = Vector3(Random.Range(-50,50),0,0);// spawns for top side of map
	spawnedAsteroid = Instantiate(Asteroid, transform.position + position, transform.rotation);
	GameObject.Destroy(spawnedAsteroid.gameObject, asteroidLife);
	spawnedAsteroid.rigidbody.AddForce(Vector3.back * movementSpeed);
	spawnAmount ++;
}

function SpawnStrong(){
	var spawnedSpecialS: GameObject;
	var position: Vector3 = Vector3(Random.Range(-50,50),0,0);// spawns for top side of map
	spawnedSpecialS = Instantiate(SpecialStrong, transform.position + position, transform.rotation);
	GameObject.Destroy(spawnedSpecialS.gameObject, asteroidLife);
	spawnedSpecialS.rigidbody.AddForce(Vector3.back * movementSpeed);
	specialSpawnAmount ++;
}