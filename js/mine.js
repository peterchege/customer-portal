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


    // QUESTION SIX

        $(function () {
            $('input[name="radio_dwell"]').on('click', function () {
                if ($(this).val() == 'yes') {
                    $('#occupation').show();
                } else {
                    $('#occupation').hide();
                }
            });
        });
