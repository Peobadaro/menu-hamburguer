$(document).ready(function() {
    // Configuração do Menu Hamburguer com animação suave
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.menu').slideToggle(300);
    });

    // Adicionar classe active ao link do menu quando clicado
    $('.menu a').click(function() {
        $('.menu a').removeClass('active');
        $(this).addClass('active');
        
        if ($(window).width() <= 768) {
            $('.menu').slideUp(300);
            $('.hamburger').removeClass('active');
        }
    });

    // Configuração do Carrossel com melhor performance
    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 10,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Máscara para telefone com feedback visual
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: "(__) _____-____"
    });

    // Validação do formulário com feedback em tempo real
    $('#contactForm').validate({
        errorElement: 'span',
        errorClass: 'error-message',
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, insira seu email",
                email: "Por favor, insira um email válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone"
            }
        },
        highlight: function(element) {
            $(element).addClass('error');
        },
        unhighlight: function(element) {
            $(element).removeClass('error');
        },
        submitHandler: function(form) {
            // Aqui você pode adicionar o código para enviar o formulário
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });

    // Scroll suave para as âncoras
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
}); 