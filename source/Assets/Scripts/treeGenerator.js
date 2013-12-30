#pragma strict

var treePrefab: GameObject;

var numberOfTrees: int = 20;

function Start() 
{
	for(var i: int = 0; i < numberOfTrees; i++)
		Instantiate(treePrefab, Vector3(transform.localPosition.x + Random.Range(-40.0, 40.0), transform.localPosition.y, transform.localPosition.z + Random.Range(-40.0, 40.0)), transform.rotation);
}
