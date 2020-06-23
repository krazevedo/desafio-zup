const {client} = require('nightwatch-api')
const {Given, When, Then} = require('cucumber')

Then('Eu deveria validar a acessibilidade da página', function() {
return client
    .initAccessibility()
    .assert.accessibility('#sc-retail-cart-container > div', {
                          verbose: true,
                          rules: {}
                          }
                      )
});