$ = require('jquery')

$(document).ready ->
    $body  = $('body')
    assets = $body.data('assets')
    lang   = $('html').attr('lang')
    route  = $body.data('route')

    # views =
    #    index: require('app/index')

    # Run view module for current route
    #if views[route]?
    #    views[route].init()
