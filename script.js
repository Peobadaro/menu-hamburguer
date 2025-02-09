$(document).ready(function() {
    // Configuração do Menu Hamburguer
    $('.hamburger').click(function() {
        $('.menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Configuração do Carrossel
    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Configuração das máscaras
    $('#telefone').mask('(00) 00000-0000');

    // Configuração da validação do formulário
    $('#contactForm').validate({
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
        }
    });
}); 