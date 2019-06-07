//homunculus mission constructor

function Mission(level, duration, homunculus) {
    this.active = false;
    //the level of the mission. Should define what level actually means.
    this.level = level;
    // set the duration of the mission in milliseconds. Dunno if this should be passed in or if this should be a method that takes the level parameter and... something.
    this.duration = duration;
    //pass in the homunculus object that is going on the mission
    this.homunculus = homunculus;
    //a method to trigger a random event where the player will make a choice
    event = function() {
        

    };

    reward = function() {

    };

    //shows the user the difficulty based on the level and the properties of the homunculus being sent. This is actually called before the mission starts.
    showDifficulty = function() {
        //this will perform some kind of math to show whether the mission is easy, normal, or hard for the selected homunculus. 

    };

    missionStart = function() {
        this.active = true;
        

    };
    
  }

module.exports = Mission