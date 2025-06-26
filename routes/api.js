'use strict';

const Translator = require('../components/translator.js');
const locales = ["american-to-british", "british-to-american"]

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;
      if (text===undefined || locale === undefined) {
        res.json({ error: 'Required field(s) missing' })
      } else if (typeof text !== "string" || text.length === 0) {
        res.json({ error: 'No text to translate' })
      } else if (typeof locale !== "string" || !locales.includes(locale)) {
        res.json({ error: 'Invalid value for locale field' })
      } else {
        const translated = locale === locales[0] ? translator.toUK(text) : translator.toUS(text)
        if (translated === text) {
          res.json({text, translation: "Everything looks good to me!"})
        } else {
          res.json({text, translation: translated})
        }
      }
    });
};
