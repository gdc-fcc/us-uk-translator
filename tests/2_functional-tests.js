const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

//let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite('Translation with...', () => {
        test('text and locale fields', (done) => {
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({ locale: 'american-to-british', text: 'Dr. Grosh will see you now.' })
                .end((_err, res) => {
                    assert.equal(res.status, 200)
                    assert.equal(
                        res.body.translation,
                        '<span class="highlight">Dr</span> Grosh will see you now.'
                    )
                    done()
                })
        })
        test('text and invalid locale field', (done) => {
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({ locale: 'american-to-german', text: 'Dr. Grosh will see you now.' })
                .end((_err, res) => {
                    assert.equal(
                        res.body.error,
                        'Invalid value for locale field'
                    )
                    done()
                })
        })
        test('missing text field', done => {
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({ locale: 'american-to-british' })
                .end((_err, res) => {
                    assert.equal(
                        res.body.error,
                        'Required field(s) missing'
                    )
                    done()
                })
        })
        test('missing locale field', (done) => {
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({ text: 'Dr. Grosh will see you now.' })
                .end((_err, res) => {
                    assert.equal(
                        res.body.error,
                        'Required field(s) missing'
                    )
                    done()
                })
        })
        test('empty text', (done) => {
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({ locale: 'american-to-british', text: '' })
                .end((_err, res) => {
                    assert.equal(
                        res.body.error,
                        'No text to translate'
                    )
                    done()
                })
        })
        test('text that needs no translation', (done) => {
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({ locale: 'american-to-british', text: 'Does not need tranlation' })
                .end((_err, res) => {
                    assert.equal(res.status, 200)
                    assert.equal(
                        res.body.translation,
                        'Everything looks good to me!'
                    )
                    done()
                })
        })
    })
});
