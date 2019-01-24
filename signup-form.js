
$.validator.setDefaults( {
    submitHandler: function () {
        alert( "submitted!" );
    }
} );

$( document ).ready( function () {
    $( "#signupForm" ).validate( {
        rules: {
            firstName: {
                required: true,
                minlength: 2},
         lastName: {
                    required: true,
                    minlength: 2},
         
            password: {
                required: true,
                minlength: 5
            },
            passwordConfirmation: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
          
            logEmail: {
                required: true,
                email: true},
            logPassword: {
                    required: true,
                    minlength: 5
                },
                
            
            
        },
        messages: {
           
            fistName: {
                required: "Please enter your firstname",
                minlength: "Your username must consist of at least 2 characters"
            },
            lastName: {
                required: "Please enter your lastname",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            passwordConfirmation: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
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