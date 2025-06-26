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
        test('We watched the footie match for a while.', () => {
            assert.equal(
                translator.toUS('We watched the footie match for a while.'),
                'We watched the <span class="highlight">soccer</span> match for a while.'
            )
        })
        test('Paracetamol takes up to an hour to work.', () => {
            assert.equal(
                translator.toUS('Paracetamol takes up to an hour to work.'),
                '<span class="highlight">Tylenol</span> takes up to an hour to work.'
            )
        })
        test('First, caramelise the onions.', () => {
            assert.equal(
                translator.toUS('First, caramelise the onions.'),
                'First, <span class="highlight">caramelize</span> the onions.'
            )
        })
        test('I spent the bank holiday at the funfair.', () => {
            assert.equal(
                translator.toUS('I spent the bank holiday at the funfair.'),
                'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
            )
        })
        test('I had a bicky then went to the chippy.', () => {
            assert.equal(
                translator.toUS('I had a bicky then went to the chippy.'),
                'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
            )
        })
        test('I\'ve just got bits and bobs in my bum bag.', () => {
            assert.equal(
                translator.toUS('I\'ve just got bits and bobs in my bum bag.'),
                'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
            )
        })
        test('The car boot sale at Boxted Airfield was called off.', () => {
            assert.equal(
                translator.toUS(''),
                ''
            )
        })
        test('Have you met Mrs Kalyani?', () => {
            assert.equal(
                translator.toUS('Have you met Mrs Kalyani?'),
                'Have you met <span class="highlight">Mrs.</span> Kalyani?'
            )
        })
        test('Prof Joyner of King\'s College, London.', () => {
            assert.equal(
                translator.toUS('Prof Joyner of King\'s College, London.'),
                '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
            )
        })
        test('Tea time is usually around 4 or 4.30.', () => {
            assert.equal(
                translator.toUS('Tea time is usually around 4 or 4.30.'),
                'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
            )
        })
    })
    suite('highlight', () => {
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
        test('We watched the footie match for a while.', () => {
            assert.equal(
                translator.toUS('We watched the footie match for a while.'),
                'We watched the <span class="highlight">soccer</span> match for a while.'
            )
        })
        test('Paracetamol takes up to an hour to work.', () => {
            assert.equal(
                translator.toUS('Paracetamol takes up to an hour to work.'),
                '<span class="highlight">Tylenol</span> takes up to an hour to work.'
            )
        })
    })
});
