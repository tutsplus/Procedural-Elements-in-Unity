#pragma strict

var treeMeshes: Mesh[];

function Start()
{
	transform.localEulerAngles.y = Random.Range(0, 360);
	
	transform.localEulerAngles.x = Random.Range(-10, 10);
	
	transform.localScale = transform.localScale * Random.Range(0.5, 1.5);
	
	gameObject.GetComponent(MeshFilter).mesh = treeMeshes[Random.Range(0, treeMeshes.Length)];
	
	renderer.materials[0].color = Color(Random.Range(0.8, 1.1), Random.Range(0.4, 0.6), Random.Range(0, 0.2));
	renderer.materials[1].color = Color(Random.Range(0, 0.4), Random.Range(0.6, 1.1), Random.Range(0, 0.4));
}