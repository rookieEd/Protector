#pragma strict
public var movementSpeed : float = 1f;
public var turningspeed: float= 1f;

function Start () {

}

function Update () {



	if (Input.GetKey(KeyCode.UpArrow)) {


	     transform.Translate(Vector3.forward * movementSpeed * Time.deltaTime);


	}

	if (Input.GetKey(KeyCode.DownArrow)) {


	     transform.Translate(Vector3.back * movementSpeed * Time.deltaTime);


	}

	if(Input.GetKey(KeyCode.LeftArrow)){


	     transform.Rotate(Vector3.down * turningspeed  * Time.deltaTime);


	}


	if(Input.GetKey(KeyCode.RightArrow)){

		transform.Rotate(Vector3.up * turningspeed  * Time.deltaTime);

	}
	
}

