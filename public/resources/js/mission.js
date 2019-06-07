//homunculus mission constructor

//import the data, or call the api functions

function Mission(level, duration, homunculus) {
    this.active = false;
    this.action;
    //the level of the mission. Should define what level actually means. Difficulty?
    this.level = level;
    // set the duration of the mission in turns. Dunno if this should be passed in or if this should be a method that takes the level parameter and... something.
    this.duration = duration;
    //pass in the homunculus object that is going on the mission
    this.homunculus = homunculus;
    //a method to trigger a random event where the player will make a choice

    //shows the user the difficulty based on the level and the properties of the homunculus being sent. This is actually called before the mission starts.
    this.showDifficulty = function (hom) {
        //this will perform some kind of math to show whether the mission is easy, normal, or hard for the selected homunculus.


    };

    

    

    this.gameEvent = function () {
        //roll 1 d100;
        let chance = Math.floor(Math.random * 100 + 1);
        if(chance > 75) {
            //run a random event
            let i = Math.floor(Math.random * 100 + 1);
            this.execute(gameEvents[i]);
        }

    };


    this.execute = function(gameEvent) {

        /*this is where a bunch of shit happens in the UI:
        - pause the current action & mission countdown and display the event modal
        - wait for the player to make a choice
        - resolve the player's choice and update the modal
        - when the player clicks ok, resume the current action, and the mission countdown.
        */

    };
    

    //adds loot to the homunculus inventory
    this.reward = function () {
        //roll a random number and select loot from the data. The prototype we can do with an array in a loot data object, but eventually this should be in a DB
    };

    this.punish = function () {
        //something bad happens
    }

    this.encounter = function() {
        //supply an encounter from the encounters data appropriate to the level. 

    }

    this.missionStart = function () {
        this.active = true;
        this.action = setInterval(missionLoop, 6000);

    };

    this.missionLoop = function () {
        //remove a turn from the duration
        this.duration--

        if( this.duration === 0) {
            this.missionEnd();
        } else {
            //resolve an encounter
        this.encounter();

        //check for event
        this.gameEvent();

        }

    }

    this.missionEnd = function () {
        clearInterval(this.action);
        this.active = false;
        this.reward();
    }

}

module.exports = Mission