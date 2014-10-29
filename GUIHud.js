#pragma strict
public static var score: float = 0f;// static keeps track of variable so they can be referenced in other methods
public static var lives: float = 4f;
public var timeLeft: float = 0.00f;
var timer: float = 0.00f;
public static var shipHealth: float = 2f;
public static var satHealth: float = 5f;
public static var satDead: boolean = false;
public var music: AudioClip;
var menu: boolean = false;
var skin : GUISkin;
function Start () {// reset values
	menu = false;
	Ship_Collision.dead = false;
	satDead = false;
	satHealth = 5f;
	lives = 4f;
	score = 0f;
	shipHealth = 2f;
	audio.PlayOneShot(music);
}

function Update () {

	timer -= Time.deltaTime;
	if(satHealth <= 0){
		satDead = true;
	}
	if(menu){
		Application.LoadLevel("MainMenu");
	}
	if(Input.GetKeyDown(KeyCode.Escape)){
		menu = true;
	}
}
function OnGUI(){// displays overlay
	GUI.skin = skin;
	//GUILayout.TextArea (" Time Remaining: " + (timer-timeLeft).ToString() + "Score: " + score.ToString(), 200);
	GUI.Label(Rect(Screen.width/8 - 75, 0, 100,100), "Ship Health:" );
	GUI.Label(Rect(Screen.width/8, 0, 100,100), shipHealth.ToString() + " / 2" );
	GUI.Label(Rect(Screen.width*7/8 - 100, 0, 100,100), "Sat Health:" );
	GUI.Label(Rect(Screen.width*7/8, 0, 100,100), satHealth.ToString() + " / 5" );
	GUI.Label(Rect(Screen.width/4 - 100, Screen.height - 20, 100,100), "Lives Remaining: " );
	GUI.Label(Rect(Screen.width/4, Screen.height - 20, 100,100), lives.ToString());
	GUI.Label(Rect(Screen.width/2 - 100, Screen.height - 20, 100,100), "Time Remaining: " );
	GUI.Label(Rect(Screen.width/2, Screen.height - 20, 100,100), (timer+timeLeft).ToString() );
	GUI.Label(Rect(Screen.width*3/4 - 100, Screen.height - 20, 100,100), "Score: " );
	GUI.Label(Rect(Screen.width*3/4, Screen.height - 20, 100,100), score.ToString() );
	GUI.backgroundColor = 0.4 *Color.cyan + 0.4 * Color.green ;
	if((timer+timeLeft <= 0) || (lives <= 0 && Ship_Collision.dead ==  true) || satDead){
		if(timer+timeLeft <= 0){// if time runs out
			GUI.Label(Rect(Screen.width/2-30, Screen.height/2 - 20, 100-20, 100),"Time Up!");
			menu = GUI.Button(Rect(Screen.width/2-100, Screen.height/2 , 200, 100),"Return To Menu","Button");
		}
		else{// player of sat is dead
			if(lives <= 0 && Ship_Collision.dead ==  true){// player dead
				GUI.Label(Rect(Screen.width/2-30, Screen.height/2 - 20, 100-20, 100),"Game Over");
				menu = GUI.Button(Rect(Screen.width/2-100, Screen.height/2 , 200, 100),"Return To Menu","Button");
			}
			else{
			if(satDead){//sat dead
				GUI.Label(Rect(Screen.width/2-30, Screen.height/2 - 20, 100-20, 100),"Sat Lost");
				menu = GUI.Button(Rect(Screen.width/2-100, Screen.height/2 , 200, 100),"Return To Menu","Button");
			}
		}
	}
	
}
	//GUILayout.TextArea(" Time Remaining: " + (timer-timeLeft).ToString(), 200);
}