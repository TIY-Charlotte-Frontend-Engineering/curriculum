import test from 'ava';

// 1. Write our TESTS
// 2. Write our FUNCTION
test('Contains vowel', function (trial) {
    /**
     * 'Test driven development' is the current hotness in the testing world.
     * 
     * Write tests, then write the functions.
     */
    trial.is(containsVowel('hey'), true);
    trial.is(containsVowel('hz'), false);
    trial.is(containsVowel(''), false);
    trial.is(containsVowel(5), false); // weirdo
    trial.is(containsVowel('heeeeeeeeeeyyyyyyyyyya'), true);
});