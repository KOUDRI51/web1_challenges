//Function to count the number of people by city in an array of people objects:

function countPeopleByCity(people) {
    return people.reduce((cityCount, person) => {
        cityCount[person.city] = (cityCount[person.city] || 0) + 1;
        return cityCount;
    }, {});
}
