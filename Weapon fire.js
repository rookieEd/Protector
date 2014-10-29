#pragma strict

public var travelSpeed: float = 1f;
public var projectile: GameObject;
public var projectilePower: GameObject;
public var spawn_position;
private var count: float = 1f;
public var shotLife: float = 5f;
public var fireshot: AudioClip;

public var cannon1 : Transform;
public var cannon2 : Transform;
public var cannon3 : Transform;
public var cannon4 : Transform;

function Start () {
}

function Update () {// alot of redundant code commented out from testing

	if(Powerup.poweredShot){
		if(Input.GetKeyDown(KeyCode.Mouse0) || Input.GetKeyDown(KeyCode.Space)){
	    	audio.PlayOneShot(fireshot, 1);
	    	if(count > 2){
	            count = 1f;
	        }
	        if(count == 1){// fires first set of shots
	            var pShot: GameObject;//R
	            var pShot2: GameObject;//L
	            pShot = Instantiate(projectilePower, cannon1.position + cannon1.transform.up * 1f, Quaternion.identity);
	            pShot.rigidbody.AddForce(cannon1.transform.up * travelSpeed);
	            pShot.transform.rotation = Quaternion.LookRotation(cannon1.up) * Quaternion.Euler(90f, 0f, 0f);// transforms direcion pointing
	            pShot2 = Instantiate(projectilePower, cannon2.position + cannon2.transform.up * 1f, Quaternion.LookRotation(cannon2.up));
	            pShot2.rigidbody.AddForce(cannon2.transform.up * travelSpeed);
	            pShot2.transform.rotation = Quaternion.LookRotation(cannon1.up) * Quaternion.Euler(90f, 0f, 0f);
	            GameObject.Destroy(pShot.gameObject, shotLife);
	            GameObject.Destroy(pShot2.gameObject, shotLife);
	        }
	        if(count ==2){//fires second set of shots
	            var pShot3: GameObject;//R
	            var pShot4: GameObject;//L
	            pShot3 = Instantiate(projectilePower, cannon3.position + cannon3.transform.up * 1f, Quaternion.identity);
	            pShot3.rigidbody.AddForce(cannon3.transform.up * travelSpeed);
	            pShot3.transform.rotation = Quaternion.LookRotation(cannon1.up) * Quaternion.Euler(90f, 0f, 0f);
	            pShot4 = Instantiate(projectilePower, cannon4.position + cannon4.transform.up * 1f, Quaternion.identity);
	            pShot4.rigidbody.AddForce(cannon4.transform.up * travelSpeed);
	            pShot4.transform.rotation = Quaternion.LookRotation(cannon1.up) * Quaternion.Euler(90f, 0f, 0f);
	            GameObject.Destroy(pShot3.gameObject, shotLife);
	            GameObject.Destroy(pShot4.gameObject, shotLife);
	        }
			
			count++;
		}
	}
	else{
	    if(Input.GetKeyDown(KeyCode.Mouse0) || Input.GetKeyDown(KeyCode.Space)){
	    	audio.PlayOneShot(fireshot, 1);
	    	//audio.PlayOneShot(fireshot, 0.2);
	        if(count > 2){
	            count = 1f;
	        }
	        if(count == 1){// fires first set of powered shots
	            var shot: GameObject;//R
	            var shot2: GameObject;//L
	            
	            //Debug.DrawRay(transform.position, transform.forward, Color.yellow, 100);
	            
	            shot = Instantiate(projectile, cannon1.position + cannon1.transform.up * 1f, Quaternion.identity);
	            shot.rigidbody.AddForce(cannon1.transform.up * travelSpeed);
	            shot.transform.rotation = Quaternion.LookRotation(cannon1.up) * Quaternion.Euler(90f, 0f, 0f);
	            shot2 = Instantiate(projectile, cannon2.position + cannon2.transform.up * 1f, Quaternion.LookRotation(cannon2.up));
	            shot2.rigidbody.AddForce(cannon2.transform.up * travelSpeed);
	            shot2.transform.rotation = Quaternion.LookRotation(cannon1.up) * Quaternion.Euler(90f, 0f, 0f);
	            //shot = Instantiate(projectile, transform.position + transform.forward * 4 + transform.right *-1.75 + transform.up *3, Quaternion.LookRotation(transform.right));//right
	            //shot2 = Instantiate(projectile, transform.position + transform.forward * -1.75 + transform.right * -1.75 + transform.up *3, transform.rotation);// left
	            //shot.rigidbody.AddForce(shot.transform.forward * -travelSpeed);
	            //shot2.rigidbody.AddForce(shot2.transform.right * -travelSpeed);
	            //shot.transform.rotation= Quaternion.identity;
	            //shot.transform.rotation= Quaternion.Euler(0,0,90);
	            //var yRotation = Input.GetAxis("Vertical");
	            //shot2.transform.localEulerAngles= new Vector3 (0,0,90);            
	            //shot2.transform.Rotate(Vector3(0,0,90), 0, Space.Self);
	            //shot2.transform.rotation= Quaternion.Euler(0,0,90);
	            GameObject.Destroy(shot.gameObject, shotLife);
	            GameObject.Destroy(shot2.gameObject, shotLife);
	        }
	        if(count ==2){// firs second set of powered shots
	            var shot3: GameObject;//R
	            var shot4: GameObject;//L
	            shot3 = Instantiate(projectile, cannon3.position + cannon3.transform.up * 1f, Quaternion.identity);
	            shot3.rigidbody.AddForce(cannon3.transform.up * travelSpeed);
	            shot3.transform.rotation = Quaternion.LookRotation(cannon1.up) * Quaternion.Euler(90f, 0f, 0f);
	            shot4 = Instantiate(projectile, cannon4.position + cannon4.transform.up * 1f, Quaternion.identity);
	            shot4.rigidbody.AddForce(cannon4.transform.up * travelSpeed);
	            shot4.transform.rotation = Quaternion.LookRotation(cannon1.up) * Quaternion.Euler(90f, 0f, 0f);
	            //shot3 = Instantiate(projectile, transform.position + transform.forward * 3.5 + transform.right *-1.75 + transform.up *3, transform.rotation);//right
	            //shot4 = Instantiate(projectile, transform.position + transform.forward * -1.25 + transform.right * -1.75 + transform.up *3, transform.rotation);//left
	            //shot3.rigidbody.AddForce(shot3.transform.right * -travelSpeed);
	            //shot4.rigidbody.AddForce(shot4.transform.right * -travelSpeed);
	//            //shot3.transform.rotation= Quaternion.identity;
	//            shot3.transform.rotation= Quaternion.Euler(0,0,90);
	//            //shot4.transform.eulerAngles= new Vector3(0,0,90);
	//            shot4.transform.rotation= Quaternion.Euler(0,0,90);
	            GameObject.Destroy(shot3.gameObject, shotLife);
	            GameObject.Destroy(shot4.gameObject, shotLife);
	            }
			
			count++;
		}
	}

}

//function OnDrawGizmos() {
//	Gizmos.color = Color.yellow;
//	Gizmos.DrawRay(cannon1.position, cannon1.up);
//}

