Sub = function(name, master) {
    this.name = name;
    this.master = master;
    this.level = 0;
    this.age = 0;

    //array of key:value pairs for relevant stats. Generated.
    this.stats = [
        {
            //base offensive stat
            attk: 0,
            //base defensive stat
            def: 0,
            //base mental stat, also for determining resistance to coersion
            will: 0,
            //devotion to the master
            loyalty: 0,

        }
    ]

    //contains objects, or at least references to objects, that the sub posesses.
    this.inv = [];

    //buffs that the wizard has cast on the sub. This is an array of... functions?
    this.buffs = [];

    levelUp = function() {
        this.level++;
        //increase stats by some amount based on level, or let the wizard choose;
    }

};



class Homunculus extends Sub {
    constructor(name, master, disad) {
        super(name, master);
        this.disad = disad;
    }
    




    
}


class Apprentice extends Sub {
    constructor(name, master, bones, fatigue) {
        super(name, master);
        this.bones = bones;
        this.fatigue = fatigue;
    }
    




    
}

module.exports = Homunculus, Apprentice, Sub;