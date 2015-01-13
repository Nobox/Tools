$ = require('jquery')

class Naming

    init: ->
        console.log 'naming convention tool JS init complete...'

        $filename = $('.filename')
        $filename.empty()


module.exports = new Naming
