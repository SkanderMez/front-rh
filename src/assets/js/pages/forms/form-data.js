'use strict';
$(function () {

    $('select').formSelect();

    //Dropzone
    Dropzone.options.frmFileUpload = {
        paramName: "file",
        maxFilesize: 10
    };

    $('.datepicker').bootstrapMaterialDatePicker({
        format: 'MM-DD-YYYY',
        clearButton: true,
        weekStart: 1,
        time: false
    });
    $('.datepicker2').bootstrapMaterialDatePicker({
        format: 'MM-DD-YYYY',
        clearButton: true,
        weekStart: 1,
        time: false
    });
    $('.timepicker').bootstrapMaterialDatePicker({
        format: 'HH:mm',
        clearButton: true,
        date: false
    });

});
