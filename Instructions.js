#pragma strict
var skin : GUISkin;
public var menuMusic: AudioClip;
function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin = skin;
	var returnToMenu: boolean = false;
	GUI.Label(Rect(Screen.width/2 -300, Screen.height/10 , 600,600), 
		"How To Play:\n Controls:" + 
		"\n\t Up Arrow: Moves Forward" + 
		"\n\t Left Arrow: Rotates Left" + 
		"\n\t Right Arrow: Rotates Right" +
		"\n\t Down Arrow: Moves Backwards" +
		"\n\t Space Or Left Mouse Button: Shoots" + 
		"\n You must protect the Satellite, if you shoot it you loose a point and if an asteroid hits it, it loses health " +
		"\nHealth / Lives:" +
		"\n\t The Satellite has health and if it runs out you lose the game" +
		"\n\t The Ship also has health but it also has lives if you run out of health you die and lose a life if you" +
		"\n\t lose your lives you lose the game" +
		"\n The levels in Protector have a time limit, when that is up the game ends" +
		"\n Asteroids have 2 types regular and strong" +
		"\n\t Regular: Take 1 shot to kill and deal one damage to the Satellite " +
		"\n\t Strong: Take 2 shots to kill and deal two damage to the Satellite if undamaged" +
		"\n Colliding with an Asteroid will take it out but you will lose health and if you die you lose valuable time"+
		"\n Power Ups these can be dropped by asteroids these include:"+
		"\n\t Life Up: Gives the player another life"+
		"\n\t Satellite Health Up: Gives the satellite health if not already full"+
		"\n\t Ship Health Up: Gives player another hit point"+
		"\n\t Shot Powerup: Makes the ship kill asteroids in one shot regardless of type"+
		"\n\t Shield: Protects the satellite for a peroid of time"+
		"\n\t 2x: Boosts score gained by shooting asteroids for a peroid of time"
		 ,"htp");//displayed text
	GUI.backgroundColor = 0.5 *Color.cyan + 0.5 * Color.green ;
	returnToMenu = GUI.Button(Rect(Screen.width/2, Screen.height*6/8, 100,100),"Return","Button");
	if(returnToMenu){// return to menu
		Application.LoadLevel("MainMenu");
	}
}