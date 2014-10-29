#pragma strict
@ExecuteInEditMode

var skin : GUISkin;
public static var menuMusic: AudioClip;
public var music: AudioClip;

function Start () {
	menuMusic = music;
	audio.PlayOneShot(menuMusic);
	
}
/*function awake (){
	DontDestroyOnLoad(Menu.menuMusic);
}*/

function Update () {
	//DontDestroyOnLoad(menuMusic);
}

function OnGUI(){
	GUI.skin = skin;
	var game: boolean = false; 
	var settings: boolean = false; 
	var hTP: boolean = false;
	var quit: boolean = false;
	//GUI.Label(Rect(Screen.width/2 - Screen.width/14, Screen.height/6, 100,100), "PROTECTOR", "mainTitle");
	GUI.Label(Rect(2f, 37f, Screen.width, 100f), "PROTECTOR", "mainTitleShadow");// adds under other for efect
	GUI.Label(Rect(0f, 35f, Screen.width, 100f), "PROTECTOR", "mainTitle");
	GUI.backgroundColor = 0.5 *Color.cyan + 0.5 * Color.green ;// mixes colour
	game = GUI.Button(Rect(Screen.width/2 -150, Screen.height*8/32, 300, 75),"Start Game","Button");
	if(game){// first menu option
		Application.LoadLevel("Test map");
	}
	hTP = GUI.Button(Rect(Screen.width/2-150, Screen.height*13/32, 300, 75),"How To Play","Button");
	if(hTP){// second menu option
		Application.LoadLevel("Instructions");
	}
	settings = GUI.Button(Rect(Screen.width/2 -150 , Screen.height*18/32, 300, 75),"Settings","Button");
	if(settings){// third menu option
		Application.LoadLevel("Settings");
	}
	quit = GUI.Button(Rect(Screen.width/2 -150, Screen.height*3/4, 300, 100),"Quit","Button");
	if(quit){// last menu option
		Application.Quit();
	}
}