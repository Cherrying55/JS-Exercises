/* Given an array of objects representing people with a birth and death year, return the oldest person. */

const people = [
    {
      name: "Julia",
      birth: "1946",
      deathyear: "2000" 
    },
    {
       name: "John",
       birth: "1946",
       deathyear: "2000"
    },
    {
      name: "Jake",
      birth: "1970",
      deathyear: "2002",  
    }
]

function oldest(people){
    let ages = [];
    let oldest = [];
    for(const i of people){
        ages.push(Number(i.deathyear) - Number(i.birth));
    }
    for(const j of people){
        if(Number(j.deathyear) - Number(j.birth) === ages[0]){
            oldest.push(j.name);
        }
    };
    return oldest;
};
