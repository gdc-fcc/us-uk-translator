const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()

suite('Unit Tests', () => {
    suite('To British', () => {
        test('Mangoes are my favorite fruit.', () => {
            assert.equal(
                translator.toUK('Mangoes are my favorite fruit.'),
                'Mangoes are my <span class="highlight">favourite</span> fruit.'
            )
        })
        test('I ate yogurt for breakfast.', () => {
            assert.equal(
                translator.toUK('I ate yogurt for breakfast.'),
                'I ate <span class="highlight">yoghurt</span> for breakfast.'
            )
        })
        test('We had a party at my friend\'s condo.', () => {
            assert.equal(
                translator.toUK('We had a party at my friend\'s condo.'),
                'We had a party at my friend\'s <span class="highlight">flat</span>.'
            )
        })
        test('Can you toss this in the trashcan for me?', () => {
            assert.equal(
                translator.toUK('Can you toss this in the trashcan for me?'),
                'Can you toss this in the <span class="highlight">bin</span> for me?'
            )
        })
        test('The parking lot was full.', () => {
            assert.equal(
                translator.toUK('The parking lot was full.'),
                'The <span class="highlight">car park</span> was full.'
            )
        })
        test('Like a high tech Rube Goldberg machine.', () => {
            assert.equal(
                translator.toUK('Like a high tech Rube Goldberg machine.'),
                'Like a high tech <span class="highlight">Heath Robinson device</span>.'
            )
        })
        test('To play hooky means to skip class or work.', () => {
            assert.equal(
                translator.toUK('To play hooky means to skip class or work.'),
                'To <span class="highlight">bunk off</span> means to skip class or work.'
            )
        })
        test('No Mr. Bond, I expect you to die.', () => {
            assert.equal(
                translator.toUK('No Mr. Bond, I expect you to die.'),
                'No <span class="highlight">Mr</span> Bond, I expect you to die.'
            )
        })
        test('Dr. Grosh will see you now.', () => {
            assert.equal(
                translator.toUK('Dr. Grosh will see you now.'),
                '<span class="highlight">Dr</span> Grosh will see you now.'
            )
        })
        test('Lunch is at 12:15 today.', () => {
            assert.equal(
                translator.toUK('Lunch is at 12:15 today.'),
                'Lunch is at <span class="highlight">12.15</span> today.'
            )
        })
    })
    suite('To American', () => {
        test('We watched the footie match for a while.')
        test('Paracetamol takes up to an hour to work.')
        test('First, caramelise the onions.')
        test('I spent the bank holiday at the funfair.')
        test('I had a bicky then went to the chippy.')
        test('I\'ve just got bits and bobs in my bum bag.')
        test('The car boot sale at Boxted Airfield was called off.')
        test('Have you met Mrs Kalyani?')
        test('Prof Joyner of King\'s College, London.')
        test('Tea time is usually around 4 or 4.30.')
    })
    suite('highlight', () => {
        test('Mangoes are my favorite fruit.')
        test('I ate yogurt for breakfast.')
        test('We watched the footie match for a while.')
        test('Paracetamol takes up to an hour to work.')
    })
});
