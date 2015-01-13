$ = require('jquery')

class Naming

    filename = 'AAA-BB-Description_of_the_file-YYYYMMDD-VXX.fileExtension'
    description = ''
    $tool_area = $('.naming')
    $filename = $('.filename')
    $deptarea = $('#deptarea')
    $doctype = $('#doctype')
    $status = $('#status')
    $desc = $('#desc')
    $date = $('#date')
    $ver = $('#ver')
    $ext = $('#ext')
    section_separator = '-'
    word_separator = '_'

    init: ->
        # Empty the filename and generate it dynamically
        $filename.empty().append(@generateFilename())
        # On any change, re-generate the filename
        $tool_area.on "change", (e) =>
            $filename.empty().append(@generateFilename())
            return

    generateFilename: ->
        return $deptarea.val() + section_separator + $doctype.val() + section_separator + $status.val() + section_separator + @generateDescription($desc.val()) + section_separator + $date.val() + section_separator + @generateVersion() + $ext.val()

    generateDescription: ->
        return $desc.val().replace(/\s+/g, '_')

    generateVersion: ->
        return 'v' + $ver.val()


module.exports = new Naming
