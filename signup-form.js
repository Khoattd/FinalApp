/*$().ready(function(){
    $("#signupForm").validate(
    rules: {
        firstName: {
            required: true,
            minlength: 2},
        firstName: {
                required: true,
                minlength: 2},
        newPassword: {
                required: true,
                minlength: 8},
        confirmPassword: {
            required: true,
            equalTo: "#newPassword"},
    },
    messages: {
        firstName: {
            required: "please enter your first name",
            minlength: "this is not a name"

        },
        lastName: {
            required: "please enter your last name",
            minlength: "this is not a name"

        },
        newPassword: {
            required: "please provide a password",
            minlength: "minimum 8 word"

        }, 
        newPassword: {
            required: "please provide a password",
            equalTo: "Two pasword must match"

        },

    }
    )
    
}) */
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
            email: {
                required: true,
                email: true
            },
            agree: "required"
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
            
        },
        errorPlacement: function ( error, element ) {
            error.addClass( "ui red pointing label transition" );
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