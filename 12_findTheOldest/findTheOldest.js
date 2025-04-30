const findTheOldest = function(people) {

    console.log(people);

    // Given an array of objects representing people with a birth and death year, return the oldest person's name.
    // Account for undefined year of death. (JavaScript's Date function - persons birth year)

      const oldestPerson = people.reduce((oldest, currentPerson) => {
        let age = 0;
        let currentOldestAge = 0;

        //get current evaluating persons age.
        if(currentPerson.yearOfDeath == undefined) {
            
            age = new Date().getFullYear() - currentPerson.yearOfBirth;

        } else {
            age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }


        //get the currently found oldest persons age
        if(oldest.yearOfDeath == undefined) {
            
            currentOldestAge = new Date().getFullYear() - oldest.yearOfBirth;

        } else {
            currentOldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        //return the oldest, and then evaluate next person.
        if (age > currentOldestAge) {
            return currentPerson;
        } else {
            return oldest;
        }
      }, people[0]);

      return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
