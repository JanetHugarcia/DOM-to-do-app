function ObtenerValorTextarea(){
	var inputTarea = document.getElementById("inputWork").value;
	return inputTarea;

}
function AdicionarTarea(){
	var inputTareaValue = ObtenerValorTextarea();
	if(inputTareaValue !== ""){
		HacerTarea(inputTareaValue);
		clean();
	}
	
}

function HacerTarea(tareatext){
	var tarea = document.getElementById("tareaStock");

	var itemTarea=document.createElement("div");
	itemTarea.id="item";

	var elemento0=document.createElement("br");
	
	var elemento1 = document.createElement("input");
	elemento1.setAttribute("type","checkbox");
	elemento1.setAttribute("id","i-tarea");
	elemento1.onchange =function(){
		elemento2.innerHTML=tareatext.strike();
	}
	
	var elemento2 =  document.createElement("div");
	elemento2.id="descrip";
	elemento2.innerHTML=tareatext;
	var elemento3 = document.createElement("span");
	elemento3.setAttribute("id","icon");
	elemento3.setAttribute("class","icon-trash");
	elemento3.onclick = function(){
		tarea.removeChild(itemTarea);
	}


	
	tarea.appendChild(itemTarea);
	itemTarea.appendChild(elemento1);
	itemTarea.appendChild(elemento2);
	itemTarea.appendChild(elemento3);
	

}

function clean() {
	var inputTarea = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}

