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



$('#pullBtn').on('click', function () {
    var pull = $("#pullNum").val();
    //console.log(pull);
    var pullBones = getRandomArrayElements(bones, pull);
    console.log(pullBones);
    addBones(pullBones); 
});


function getRandomArrayElements(arr, count) {
    var randoms = [], clone = arr.slice(0);
    for (var i = 0, index; i < count; ++i) {
        index = Math.floor(Math.random() * clone.length);
        randoms.push(clone[index]);
        clone[index] = clone.pop();
    }
    console.log(randoms);
    return randoms;
}



function addBones(pullBones) {
    for (i = 0; i < pullBones.length; i++) {
       var top = pullBones[i].slice(1);
       //var a = pullBones.slice(0);
       //console.log(a);
       //var top = a.slice(0);
       //var bottom = a.slice(1);
        console.log(top);
       var bottom = pullBones[i][0];
        console.log(bottom);
        // create a new bone 
        var newBone = $("<div>");
        newBone.addClass("dragme bone ui-draggable ui-draggable-handle");
        var newTop = $("<div class='top'>");
        newTop.attr("data-top", top);
        newTop.text(bottom);
        var newBottom = $("<div class='bottom'>");
        newBottom.attr("data-bottom", bottom);
        newBottom.text(top);
        newBone.append(newTop);
        newBone.append(newBottom);
        $("#bonefield").append(newBone);

    }


}










