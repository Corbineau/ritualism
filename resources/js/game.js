//establish variables
var totalFatigue = 0;
var fatigue = 0;
var bones = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [3, 3], [3, 4], [3, 5], [3, 6], [4, 4], [4, 5], [4, 6], [5, 5], [5, 6], [6, 6]];

//set fatigue
$("#fatigueBtn").on("click", function () {
    var totalFatigue = $("#userFatigue").val();
    console.log(totalFatigue);
    if (totalFatigue > 25 || totalFatigue < 0) {
        alert("please enter a number less than 25 and greater than 0"); //make sure fatigue is a number under 25
    } else {
        var fatigue = totalFatigue;
        console.log(fatigue, totalFatigue);
    }
})



//****bone visual element behaviour****

//drag the bones anywhere
$(".dragme").draggable();
//rotate bones
$(".bone").on('click', function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    $(this).toggleClass('rotated');
});

//***** actual functionality behaviour ******/



$('#pullBtn').on('click', function(){

});



function getRandomArrayElements(arr, count) {
    var randoms = [], clone = arr.slice(0);
    for (var i = 0, index; i < count; ++i) {
        index = Math.floor(Math.random() * clone.length);
        randoms.push(clone[index]);
        clone[index] = clone.pop();
    }
    return randoms;
}



function addBone() {
    var pullBones = getRandomArrayElements(bones, fatigue);
    for (i = 0; i < pullBones; i++) {
        var top = pullBones[i.slice(0)];
        console.log(top);
        var bottom = pullBones[i.slice(1)];
        console.log(bottom);
        // create a new bone - this needs to work up to the remaining fatigue.
        var newBone = $("<div class='bone'>").append(`<div class="top">${top}</div>`).append(`<div class='bottom'>${bottom}</div>`);

    }


}










