$(function () {
    const contexto = $('.content-buttons');
    const btn = $('.btn-green', contexto);

    // btn.first().css({
    //     color: 'red',
    //     fontSize: '25px',    
    // })
    btn.first().click(function (event) {
        // console.log(event)
        // $(this)
        //     .css({ position: 'absolute' })
        //     .animate({ left: '0' }, 1000)
        //     .animate({ left: '100px', top: '300px' }, 1000)
        //     .animate({ position: 'static' });

        $.ajax({
            url: "https://viacep.com.br/ws/04849270/json/",
            data: {},
            success: function( result ) {
                console.log(result.logradouro);
                let dados = $('.header-service').html()
                let alter = dados.replace('always', 'Sempre')

                $('.header-service').html(alter)

            }
        });    

    })

    const h2 = $(".h2", $('.header-service'));

    btn.each(function (i) {
        // $(this).click(function(){
        //     $(this).fadeOut(3000).fadeIn(1000)
        // })

        // $(this).on('click', function(){
        //     $(this).fadeOut(3000).fadeIn(1000)
        // })

        // $(this).on({
        //     'mouseout': function() {
        //         h2.slideDown(2000, function() {
        //         }).slideUp();
        //     },
        //     'mouseenter': function() {
        //         h2.slideUp();
        //     },
        // })
    })

    // console.log(btn);


    // btnNow.click(function() {
    //     console.log('Botão clicado')
    // });

    // const btnNow = document.querySelector('[data-cl-start="now"]');
    // btnNow.addEventListener('click',function(event) {
    //     console.log('Botão clicado')
    // })

    $('#recipient-cep').mask('00000-000')

});