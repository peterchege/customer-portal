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


    // QUESTION SIX -this is the trigger to question 7

        $(function () {
            $('input[name="radio_dwell"]').on('click', function () {
                if ($(this).val() == 'yes') {
                    $('#occupation').show();
                } else {
                    $('#occupation').hide();
                }
            });
        });
    
    // QUESTION EIGHT

    $(function () {
        $('input[name="radio_30"]').on('click', function () {
            if ($(this).val() == 'yes') {
                $('#textboxes1').show();
            } else {
                $('#textboxes1').hide();
            }
        });
    });