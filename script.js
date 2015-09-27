$(function() {
    // Ensure first barcode text box has focus
    $('[autofocus]:not(:focus)').eq(0).focus();
  
    // Set a few default text messages
    var msg1 = 'Scan the first barcode...';
    var msg2 = 'Scan the second barcode...';
    var msgok = 'Match!';
    var msgno = 'Barcodes don\'t match. Try scanning the second barcode again...';

    // Get a few elements
    var $textboxes = $('input.barcodeInput');
    var $Instructions = $('#Instructions');
  
    $Instructions.text(msg1);
  
    $textboxes.keypress(function(event) {
        // Capture Enter/Return key
        if(event.keyCode == 13) { 
            currentBoxNumber = $textboxes.index(this);
            
            // Wait until a value has been added to the last
            // barcode text box before giving results.
            if ($textboxes[currentBoxNumber + 1] != null) {
                nextBox = $textboxes[currentBoxNumber + 1];
                nextBox.focus();
                nextBox.select();
                $Instructions.removeClass('StatusMatch')
                    .removeClass('StatusError')
                    .addClass('StatusDefault')
                    .text(msg2);
                event.preventDefault();
                return false;
            } else {
                if ($('#barcode1').val() === $('#barcode2').val()) {
                    $Instructions.text(msgok)
                        .removeClass('StatusDefault')
                        .removeClass('StatusError')
                        .addClass('StatusMatch');        
                    $(this).select();    
                }
                else {
                    $Instructions.text(msgno)
                        .removeClass('StatusDefault')
                        .removeClass('StatusMatch')
                        .addClass('StatusError');;
                    $(this).select();    
                }
            }
        }
    });
});

