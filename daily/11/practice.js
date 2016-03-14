/*
Write a function phoneNum(string) that accepts a phone number and converts it into a standard syntax. Provided phone numbers will always have either seven (no area code) or ten (area code) numeric characters, and may include parenthesis, dashes, spaces, etc.

  // Example inputs and their corresponding outputs
  phoneNum('8126713221') => (812) 671-3221
  phoneNum('(910)8756789') => (910) 875-6789
  phoneNum('565 987 6880') => (565) 987-6880

  0. (optional) convert to array
  1. Get rid of non-number items in `rough`
  2. Add parentheses around the first three
  3. Add a space and a dash and all that phone number stuff.
  4. Return that.
*/

function numbersOnly(char) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return numbers.indexOf(char) > -1;
}

function phoneNum(rough) {
    var roughArr = rough.split('');
    // Delete all non-numeric characters.
    // Version 1: named function
    //    roughArr = roughArr.filter(numbersOnly);
    // Version 2: anonymous function
    roughArr = roughArr.filter(function (char) {
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        return numbers.indexOf(char) > -1;
    });

    var shiny = '';
    for (var i = 0; i < roughArr.length; i++) {
        if (i === 0) {
            shiny += '(';
        }
        if (i === 3) {
            shiny = shiny + ') ';
        }
        if (i === 6) {
            shiny = shiny + '-';
        }

        shiny = shiny + roughArr[i];
    }

    return shiny;
}