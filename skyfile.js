'use strict'
/* global sneaky */
sneaky('dev', function () {
this.description = 'Deploy to dev-21 environment'
this.path = 'node-swagger-tookit-21-env'

this.user = 'node4'
this.host = ''
this.port = 22

this.filter = [
    '+ dist**',
    '+ config**',
    '+ app.js',
    '+ package.json',
    '+ locales**',
    '+ secrets**',
    '+ pm2**',
    '+ scripts**',
    '- **'
    ].join('\n')

    this.after([
    'npm i --production',
    ''
    ].join(' && '))

    this.overwrite = true
    this.nochdir = true
})

sneaky('ga', function () {
    this.description = 'Deploy to pre-ga environment'
    this.user = 'builder'
    this.port =
    this.host = ''
    this.path = 'node-swagger-tookit-ga-env'
    this.filter = `
    '+ dist**',
    '+ config**',
    '+ app.js',
    '+ package.json',
    '+ locales**',
    '+ secrets**',
    '+ pm2**',
    '+ scripts**',
    '- **'
    `

    this.after([
    'npm i --production',
    'cd dist && pm2 start ../pm2/ga.json'
    ]
    .join(' && '))
    this.overwrite = true
    this.nochdir = true
})

sneaky('release', function () {
    this.description = 'Deploy to pre-release environment'
    this.user = 'builder'
    this.port =
    this.host = ''
    this.path = 'node-swagger-tookit-release-env'
    this.filter = `
    '+ dist**',
    '+ config**',
    '+ app.js',
    '+ package.json',
    '+ locales**',
    '+ secrets**',
    '+ pm2**',
    '+ scripts**',
    '- **'
    `

    this.after([
    'npm i --production',
    ''
    ].join(' && '))
    this.overwrite = true
    this.nochdir = true
})
