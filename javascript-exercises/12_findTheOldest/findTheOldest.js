const people = [
  {
    name: 'Carly',
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  const thisYear = new Date().getFullYear();
  let result;

  result = people.reduce(
    (res, person) => {
      const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
      return age > res.age ? { person, age } : res;
    },
    { person: null, age: 0 }
  );
  return result.person;
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
