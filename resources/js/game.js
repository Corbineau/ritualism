//establish variables

var totalFatigue = prompt("How much fatigue do you have?"); //set fatigue
var bones = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [3, 3], [3, 4], [3, 5], [3, 6], [4, 4], [4, 5], [4, 6], [5, 5], [5, 6], [6, 6]];


if (isNaN(totalFatigue)){
    totalFatigue = prompt("please enter a number"); //make sure fatigue is a number
} else if( totalFatigue > 25 || totalFatigue < 0) {
    totalFatigue = prompt("please enter a number less than 25 and greater than 0"); //make sure fatigue is a number under 25
} else {
    fatigue = totalFatigue;
  }

//****bone visual element behaviour****

//drag the bones anywhere
var dragme = document.getElementsByClassName("dragme");
		for (var i = 0; i < dragme.length; i++) {
			$(dragme[i]).draggable();
        }        
//rotate with a click
$(".bone").on('click', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    $(this).toggleClass('rotated');
});

//***** actual functionality behaviour ******/

$('#pull').on('click', addElement(), function(){

}); 

function getRandomArrayElements(arr, count) {
    var randoms = [], clone = arr.slice(0);
    for (var i = 0, index; i < count; ++i) {
        index = Math.floor(Math.random() * clone.length);
        randoms.push(clone[index]);
        clone[index] = clone.pop();
    }
    console.log(randoms);
}

function addElement () { 
    // create a new bone - this needs to work up to the remaining fatigue.
    var newBone = document.createElement("div", { is : bone }); 
    // and give it some content 
    var newValue = document.createTextNode("1:4"); //change this to load the a value generated from the bones array
    // add the text node to the newly created div
    newBone.appendChild(newValue);  
  
    // add the newly created element and its content into the DOM 
    var currentBone = document.getElementById("div1"); 
    document.body.insertBefore(newBone, currentBone); 

// Create a class for the element
class Bone extends HTMLDivElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // constructor definition left out for brevity
      
    }
  }
  
  // Define the new element
  customElements.define('bone', Bone, { extends: div });

  }








