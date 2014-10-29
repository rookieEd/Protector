#pragma strict
@ExecuteInEditMode
public static var Sat1: boolean = true;
public static var Sat2: boolean = false;
public static var Sat3: boolean = false;
public static var Sat4: boolean = false;
//public var menuMusic: AudioClip;// didnt use
var skin : GUISkin;

function Start () {
	//DontDestroyOnLoad(Menu.menuMusic);
}

function Update () {

}

function OnGUI(){
	GUI.skin = skin;
	var sat1Selected: boolean = false;
	var sat2Selected: boolean = false;
	var sat3Selected: boolean = false;
	var sat4Selected: boolean = false;
	var returnToMenu: boolean = false;
	GUI.backgroundColor = 0.5 *Color.cyan + 0.5 * Color.green ;
	GUI.Label(Rect(Screen.width/4, Screen.height/4 + 50, 100,100), "Satellite: " );
	sat1Selected = GUI.Button(Rect(Screen.width*3/8, Screen.height/4, 100,100),"Sat 1","Option");
	if(sat1Selected){// sets so sat 1 spawns
		Sat1 = true;
		Sat2 = false;
		Sat3 = false;
		Sat4 = false;
	}
	sat2Selected = GUI.Button(Rect(Screen.width*4/8, Screen.height/4, 100,100),"Sat 2","Option");
	if(sat2Selected){// sets so sat 2 spawns
		Sat1 = false;
		Sat2 = true;
		Sat3 = false;
		Sat4 = false;
	}
	sat3Selected = GUI.Button(Rect(Screen.width*5/8, Screen.height/4, 100,100),"Sat 3","Option");
	if(sat3Selected){// sets so sat 3 spawns
		Sat1 = false;
		Sat2 = false;
		Sat3 = true;
		Sat4 = false;
	}
	sat4Selected = GUI.Button(Rect(Screen.width*6/8, Screen.height/4, 100,100),"Sat 4","Option");
	if(sat4Selected){// sets so sat 4 spawns
		Sat1 = false;
		Sat2 = false;
		Sat3 = false;
		Sat4 = true;
	}
	
	returnToMenu = GUI.Button(Rect(Screen.width/2, Screen.height*6/8, 100,100),"Return","Button");
	if(returnToMenu){//return to menu
		Application.LoadLevel("MainMenu");
	}
}