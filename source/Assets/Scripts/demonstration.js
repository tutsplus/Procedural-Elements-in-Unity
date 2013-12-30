#pragma strict

var treePrefab: GameObject;

var currentTrees: GameObject[];

function OnGUI()
{
	if(GUI.Button(Rect(10,10,200,100), "New Trees"))
		ReloadTrees();
}

function ReloadTrees()
{
	for each(var t: GameObject in currentTrees)
	{	
		Destroy(t.gameObject);
		t = Instantiate(treePrefab, t.transform.position, t.transform.rotation);
	}
}