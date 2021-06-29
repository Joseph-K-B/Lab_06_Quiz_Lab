import { isNo, isYes } from '../utils.js';
const test = QUnit.test;

test('should return true for yes-y strings', assert =>{
    const yesString = isYes('yes');
    const yString = isYes('y');
    assert.equal(yesString, true);
    assert.equal(yString, true);
});
test('should return false for non yes-y string', assert =>{
    const noString = isYes ('no');
    assert.equal(noString, false);
});

test('should return true if no-y', assert =>{
    const yesString2 = isNo ('no');
    assert.equal(yesString2, true);
});

test ('should return false for non no-y', assert =>{
    const noString2 = isNo ('yes');
    assert.equal(noString2, false);
});
