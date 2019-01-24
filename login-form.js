$.validator.setDefaults( {
    submitHandler: function () {
        alert( "submitted!" );
    }
} );

$( document ).ready( function () {
    $( " #loginForm" ).validate( {
        rules: {
            logEmail: {
                required: true,
                email: true},
            logPassword: {
                    required: true,
                    minlength: 5
                },
                    
        },
        messages: {  
            logEmail: {
                required: "Please provide an Email",
                email: "Please insert a valid email"
            },
            logPassword: {
                required: "Please insert your password",
                minlength: "Minimum length is 5 letters"
            },          
        },
        errorPlacement: function ( error, element ) {
            error.addClass( "ui red pointing label testing" );
            error.insertAfter( element.parent() );
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".row" ).addClass( errorClass );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).parents( ".row" ).removeClass( errorClass );
        }
    } );

} );