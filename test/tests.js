import { isYes } from '../utils.js';
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