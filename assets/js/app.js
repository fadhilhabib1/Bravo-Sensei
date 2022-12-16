$(document).ready(function () {
    $("#pembelajarans").hide();
    $('form[id="login"]').validate({
        rules: {
            username: 'required',
            password: {
                required: true,
                minlength: 8,
            }
        },
        messages: {
            username: 'username harus di isi.',
            password: {
                required: 'password harus di isi.',
                minlength: 'password harus berisi 8 karakter.'
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    $('form[id="register"]').validate({
        rules: {
            full_name: 'required',
            username: 'required',
            kelas: 'required',
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
            },
            notelp: {
                required: true,
                minlength: 10,
                maxlength: 13
            }
        },
        messages: {
            full_name: 'full name harus di isi.',
            username: 'username harus di isi.',
            kelas: 'kelas harus di isi.',
            email: {
                required: 'email harus di isi.',
                email: 'email tidak valid.'
            },
            password: {
                required: 'password harus di isi.',
                minlength: 'password harus berisi 8 karakter.'
            },
            notelp: {
                required: 'notelp harus di isi.',
                minlength: 'notelp harus berisi 10 karakter.',
                maxlength: 'notelp melebihi 13 karakter.'
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    $('form[id="pass_rec"]').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: {
                required: 'email harus di isi.',
                email: 'email tidak valid.'
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    $(function () {
        enable_cb();
        $("#cb").click(enable_cb);
    });

    function enable_cb() {
        if (this.checked) {
            $("input.form").removeAttr("disabled");
        } else {
            $("input.form").attr("disabled", 'disabled');
        }
    }
    $("#pemblajarans").hide();
    $("#latihans").hide();
    $("#pertanyans").hide();
    $("#pembelajaran").click(function (event) {
        event.preventDefault();
        $("#main").hide("slow");
        $("#pemblajarans").show("fast");
    });
    $("#latihan").click(function (event) {
        event.preventDefault();
        $("#main").hide("slow");
        $("#latihans").show("fast");
    });
    $("#pertanyan").click(function (event) {
        event.preventDefault();
        $("#main").hide("slow");
        $("#pertanyans").show("fast");
    });
});
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})
