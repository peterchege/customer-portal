    // Question four
    
    $(function () {
        $('input[name="rad"]').on('click', function () {
            if ($(this).val() == 'yes') {
                $('#textboxes').show();
            } else {
                $('#textboxes').hide();
            }
        });
    });