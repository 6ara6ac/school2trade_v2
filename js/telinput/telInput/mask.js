const mask = (selector) => {
    function setMask( el, event_name ) {
        let matrix = '+###############';
        
        var tel_input_param = false;
        
        maskList.forEach(item => {
            let code = item.code.replace(/[\s#]/g, ''),
                phone = el.value.replace(/[\s#-)(]/g, '');

            if (phone.includes(code)) {
                //console.log(phone, code, item.code, item.code.length);
                matrix = item.code;
                
                //el.setAttribute( 'minlength', item.code.length );
                if ( event_name == 'blur' ) {
                    
                    if ( el.value.length < item.code.length ) {
                        //el.value = item.code;
                        //el.dataset.complete = "false";
                    }
                    else {
                        //el.dataset.complete = "ture";
                        tel_input_param = true;
                    }
                }
            }
            
            
        });
        
        if ( tel_input_param == true ) {
            el.dataset.complete = "ture";
        }
        else {
            el.dataset.complete = "false";
        }

        let i = 0,
            val = el.value.replace(/\D/g, '');

        el.value = matrix.replace(/(?!\+)./g, function(a) {
            return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        if (!input.value) {
            //input.value = '+';
        }
		setMask( input, 'blur' );
        input.addEventListener('input', function() {
            setMask( this, 'input' );
        });
        input.addEventListener('focus', function() {
            setMask( this, 'focus' );
        });
        input.addEventListener('blur', function() {
            setMask( this, 'blur' );
        });
    });
};