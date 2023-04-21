// task 1

class Person {
  constructor(firstName, lastName, gender, maritalStatus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
  }

  toLocaleString() {
    let title = '';

    if (this.gender === 'male') {
      title = 'Mr.';
    } else if (this.maritalStatus === 'married') {
      title = 'Mrs.';
    } else if (this.maritalStatus === 'single') {
      title = 'Miss.';
    }

    return `${title} ${this.lastName}`;
  }
}
const person1 = new Person('Tom', 'Helf', 'male', 'married');
console.log(person1.toLocaleString());

const person2 = new Person('Maria', 'Davis', 'female', 'single');
console.log(person2.toLocaleString()); 

const person3 = new Person('Max', 'Lucas', 'male', 'single');
console.log(person3.toLocaleString());

// task 2

function convertToThaiNumeral(number) {
  const numerals = {
    0: '๐',
    1: '๑',
    2: '๒',
    3: '๓',
    4: '๔',
    5: '๕',
    6: '๖',
    7: '๗',
    8: '๘',
    9: '๙',
  };

  return number.toString().replace(/\d/g, digit => numerals[digit]);
}

function convertToArabicNumeral(number) {
  const numerals = {
    0: '٠',
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
  };

  return number.toString().replace(/\d/g, digit => numerals[digit]);
}

function convertToEnglishNumeral(number) {
  return number;
}

function printNumberInDifferentNumerals(number) {
  console.log('English Numeral:', convertToEnglishNumeral(number));
  console.log('Arabic Numeral:', convertToArabicNumeral(number));
  console.log('Thai Numeral:', convertToThaiNumeral(number));
}
printNumberInDifferentNumerals(12345);

// task 3

