$(document).ready(function () {
	
	 var copart = [{
                from: 0.01,
                to: 49.99,
                price: 25,
                internet: 0,
                gate: 79,
            }, {
                from: 50,
                to: 99.99,
                price: 25,
                internet: 0,
                gate: 79,
            }, {
                from: 100,
                to: 199.99,
                price: 50,
                internet: 39,
                gate: 79,
            }, {
                from: 200,
                to: 299.99,
                price: 75,
                internet: 39,
                gate: 79,
            }, {
                from: 300,
                to: 349.99,
                price: 100,
                internet: 39,
                gate: 79,
            }, {
                from: 350,
                to: 399.99,
                price: 125,
                internet: 39,
                gate: 79,
            }, {
                from: 400,
                to: 449.99,
                price: 125,
                internet: 39,
                gate: 79,
            }, {
                from: 450,
                to: 499.99,
                price: 125,
                internet: 39,
                gate: 79,
            }, {
                from: 500,
                to: 549.99,
                price: 125,
                internet: 49,
                gate: 79,
            }, {
                from: 550,
                to: 599.99,
                price: 125,
                internet: 49,
                gate: 79,
            }, {
                from: 600,
                to: 699.99,
                price: 150,
                internet: 49,
                gate: 79,
            }, {
                from: 700,
                to: 799.99,
                price: 175,
                internet: 49,
                gate: 79,
            }, {
                from: 800,
                to: 899.99,
                price: 200,
                internet: 49,
                gate: 79,
            }, {
                from: 900,
                to: 999.99,
                price: 225,
                internet: 49,
                gate: 79,
            }, {
                from: 1000,
                to: 1199.99,
                price: 250,
                internet: 59,
                gate: 79,
            }, {
                from: 1200,
                to: 1299.99,
                price: 250,
                internet: 59,
                gate: 79,
            }, {
                from: 1300,
                to: 1399.99,
                price: 250,
                internet: 69,
                gate: 79,
            }, {
                from: 1400,
                to: 1499.99,
                price: 250,
                internet: 79,
                gate: 79,
            }, {
                from: 1500,
                to: 1599.99,
                price: 250,
                internet: 79,
                gate: 79,
            }, {
                from: 1600,
                to: 1699.99,
                price: 275,
                internet: 79,
                gate: 79,
            }, {
                from: 1700,
                to: 1799.99,
                price: 300,
                internet: 79,
                gate: 79,
            }, {
                from: 1800,
                to: 1999.99,
                price: 325,
                internet: 79,
                gate: 79,
            }, {
                from: 2000,
                to: 2399.99,
                price: 350,
                internet: 89,
                gate: 79,
            }, {
                from: 2400,
                to: 2499.99,
                price: 375,
                internet: 89,
                gate: 79,
            }, {
                from: 2500,
                to: 2999.99,
                price: 400,
                internet: 89,
                gate: 79,
            }, {
                from: 3000,
                to: 3499.99,
                price: 425,
                internet: 89,
                gate: 79,
            }, {
                from: 3500,
                to: 3999.99,
                price: 475,
                internet: 89,
                gate: 79,
            }, {
                from: 4000,
                to: 4499.99,
                price: 600,
                internet: 99,
                gate: 79,
            }, {
                from: 4500,
                to: 4999.99,
                price: 625,
                internet: 99,
                gate: 79,
            }, {
                from: 5000,
                to: 5999.99,
                price: 650,
                internet: 99,
                gate: 79,
            }, {
                from: 6000,
                to: 6999.99,
                price: 675,
                internet: 119,
                gate: 79,
            }, {
                from: 7000,
                to: 7499.99,
                price: 675,
                internet: 119,
                gate: 79,
            }, {
                from: 7500,
                to: 7999.99,
                price: 700,
                internet: 119,
                gate: 79,
            }, {
                from: 8000,
                to: 9999.99,
                price: 700,
                internet: 129,
                gate: 79,
            }, {
                from: 10000,
                to: 14999.99,
                price: 725,
                internet: 129,
                gate: 79,
            }, ];
            var iaai = [{
                from: 0.01,
                to: 99.99,
                price: 45,
                internet: 0,
                gate: 94,
            }, {
                from: 100,
                to: 199.99,
                price: 80,
                internet: 39,
                gate: 94,
            }, {
                from: 200,
                to: 299.99,
                price: 120,
                internet: 39,
                gate: 94,
            }, {
                from: 300,
                to: 349.99,
                price: 120,
                internet: 39,
                gate: 94,
            }, {
                from: 350,
                to: 399.99,
                price: 120,
                internet: 39,
                gate: 94,
            }, {
                from: 400,
                to: 499.99,
                price: 170,
                internet: 39,
                gate: 94,
            }, {
                from: 500,
                to: 599.99,
                price: 195,
                internet: 49,
                gate: 94,
            }, {
                from: 600,
                to: 699.99,
                price: 225,
                internet: 49,
                gate: 94,
            }, {
                from: 700,
                to: 799.99,
                price: 245,
                internet: 49,
                gate: 94,
            }, {
                from: 800,
                to: 899.99,
                price: 265,
                internet: 49,
                gate: 94,
            }, {
                from: 900,
                to: 999.99,
                price: 290,
                internet: 49,
                gate: 94,
            }, {
                from: 1000,
                to: 1099.99,
                price: 340,
                internet: 69,
                gate: 94,
            }, {
                from: 1100,
                to: 1199.99,
                price: 355,
                internet: 69,
                gate: 94,
            }, {
                from: 1200,
                to: 1299.99,
                price: 370,
                internet: 69,
                gate: 94,
            }, {
                from: 1300,
                to: 1399.99,
                price: 385,
                internet: 69,
                gate: 94,
            }, {
                from: 1400,
                to: 1499.99,
                price: 400,
                internet: 69,
                gate: 94,
            }, {
                from: 1500,
                to: 1599.99,
                price: 415,
                internet: 79,
                gate: 94,
            }, {
                from: 1600,
                to: 1699.99,
                price: 430,
                internet: 79,
                gate: 94,
            }, {
                from: 1700,
                to: 1799.99,
                price: 445,
                internet: 79,
                gate: 94,
            }, {
                from: 1800,
                to: 1999.99,
                price: 460,
                internet: 79,
                gate: 94,
            }, {
                from: 2000,
                to: 2199.99,
                price: 480,
                internet: 89,
                gate: 94,
            }, {
                from: 2200,
                to: 2399.99,
                price: 495,
                internet: 89,
                gate: 94,
            }, {
                from: 2400,
                to: 2499.99,
                price: 510,
                internet: 89,
                gate: 94,
            }, {
                from: 2500,
                to: 2999.99,
                price: 550,
                internet: 89,
                gate: 94,
            }, {
                from: 3000,
                to: 3499.99,
                price: 650,
                internet: 89,
                gate: 94,
            }, {
                from: 3500,
                to: 3999.99,
                price: 700,
                internet: 89,
                gate: 94,
            }, {
                from: 4000,
                to: 4499.99,
                price: 725,
                internet: 99,
                gate: 94,
            }, {
                from: 4500,
                to: 4999.99,
                price: 750,
                internet: 99,
                gate: 94,
            }, {
                from: 5000,
                to: 5999.99,
                price: 775,
                internet: 99,
                gate: 94,
            }, {
                from: 6000,
                to: 6999.99,
                price: 800,
                internet: 119,
                gate: 94,
            }, {
                from: 7000,
                to: 7499.99,
                price: 825,
                internet: 119,
                gate: 94,
            }, {
                from: 7500,
                to: 7999.99,
                price: 825,
                internet: 119,
                gate: 94,
            }, {
                from: 8000,
                to: 8499.99,
                price: 850,
                internet: 129,
                gate: 94,
            }, {
                from: 8500,
                to: 8999.99,
                price: 850,
                internet: 129,
                gate: 94,
            }, {
                from: 9000,
                to: 9999.99,
                price: 850,
                internet: 129,
                gate: 94,
            }, {
                from: 10000,
                to: 14999.99,
                price: 900,
                internet: 129,
                gate: 94,
            }, ];
            var manheim = [{
                from: 0.01,
                to: 10000,
                price: 500,
            }, ];
	var koef = 1.1
    $('.customs-calculator button').on('click', function () {
        var volume = $('#calc_volume').val();
        var price = $('#calc_price').val();
		var priceUe = price;
		price = Math.round(price / koef);
		if( $('#calc_auction').lenght) 		
		{
		  var auction = $('#calc_auction').val();
		
		if (auction == "copart") {
            var fees = copart;
            plus = '';
            max = 15000;
            percent = 0.04;
            $('.costs-iaai').text('')
        } else if (auction = 'iaai') {
            var fees = iaai;
            plus = 7500;
            plus_gate = 94;
            plus_internet = 119;
            max = 20000;
            percent = 0.04;
            $('.costs-iaai').text('+ 10$ если есть отчет autochek')
        } else if (auction = 'manheim') {
            var fees = manheim;
            plus = '';
            max = 15000;
            percent = 0.07;
            $('.costs-iaai').text('')
        }

        if (priceUe >= max) {
            var fee = Math.round(priceUe * percent);
        } if (plus != '' && priceUe >= plus && priceUe <= max) {
            var fee = parseInt(Math.round(price * 0.01) + 500 + plus_gate + plus_internet);
            console.log(Math.round(priceUe * 0.01) + 500)
            console.log(plus_gate)
            console.log(plus_internet)			
            console.log('ds')
        } else {
            let i = 0;
            while (i < fees.length) { // выводит 0, затем 1, затем 2
                if (priceUe >= fees[i].from && priceUe <= fees[i].to) {
                    var fee = parseInt(fees[i].price + fees[i].gate + fees[i].internet);
                    break;
                }
                i++;
            }
			
        }	
			
		price = Math.round(+(price) + (fee/koef));
			console.log('123'+ price);	
				
		} else {
			
		}
		
		var age = $('#calc_age').children("option:selected").val();
        var duty;		
		
		
		if ($("#calc_auction").length)
		{
			 var auction = $('#calc_auction').val();
		
		if (auction == "copart") {
            var fees = copart;
            plus = '';
            max = 15000;
            percent = 0.04;
            $('.costs-iaai').text('')
        } else if (auction = 'iaai') {
            var fees = iaai;
            plus = 7500;
            plus_gate = 94;
            plus_internet = 119;
            max = 20000;
            percent = 0.04;
            $('.costs-iaai').text('+ 10$ если есть отчет autochek')
        } else if (auction = 'manheim') {
            var fees = manheim;
            plus = '';
            max = 15000;
            percent = 0.07;
            $('.costs-iaai').text('')
        }

        if (priceUe >= max) {
            var fee = Math.round(priceUe * percent);
        } if (plus != '' && priceUe >= plus && priceUe <= max) {
            var fee = parseInt(Math.round(price * 0.01) + 500 + plus_gate + plus_internet);
            console.log(Math.round(priceUe * 0.01) + 500)
            console.log(plus_gate)
            console.log(plus_internet)			
            console.log('ds')
        } else {
            let i = 0;
            while (i < fees.length) { // выводит 0, затем 1, затем 2
                if (priceUe >= fees[i].from && priceUe <= fees[i].to) {
                    var fee = parseInt(fees[i].price + fees[i].gate + fees[i].internet);
                    break;
                }
                i++;
            }
			
        }	
			price = Math.round(+(price) + (fee/koef));
			console.log('123'+ price);
			console.log('123'+ fee);
		}
		else
		{ 
			
		}
		
        switch (age) {
            case '1':
                switch (true) {
                    case price <= 8500:
                        if ((price * 0.54) < (volume * 2.5)) {
                            duty = (volume * 2.5);
                        } else {
                            duty = (price * 0.54);
                        }
                        break;
                    case price <= 16700:
                        if ((price * 0.48) < (volume * 3.5)) {
                            duty = (volume * 3.5);
                        } else {
                            duty = (price * 0.48);
                        }
                        break;
                    case price <= 42300:
                        if ((price * 0.48) < (volume * 5.5)) {
                            duty = (volume * 5.5);
                        } else {
                            duty = (price * 0.48);
                        }
                        break;
                    case price <= 84500:
                        if ((price * 0.48) < (volume * 7.5)) {
                            duty = (volume * 7.5);
                        } else {
                            duty = (price * 0.48);
                        }
                        break;
                    case price <= 169000:
                        if ((price * 0.48) < (volume * 15)) {
                            duty = (volume * 15);
                        } else {
                            duty = (price * 0.48);
                        }
                        break;
                    default:
                        if ((price * 0.48) < (volume * 20)) {
                            duty = (volume * 20);
                        } else {
                            duty = (price * 0.48);
                        }
                }
                break;
            case '2':
                switch (true) {
                    case volume <= 1000:
                        duty = volume * 1.5;
                        break;
                    case volume <= 1500:
                        duty = volume * 1.7;
                        break;
                    case volume <= 1800:
                        duty = volume * 2.5;
                        break;
                    case volume <= 2300:
                        duty = volume * 2.7;
                        break;
                    case volume <= 3000:
                        duty = volume * 3;
                        break;
                    default:
                        duty = volume * 3.6;
                }
                break;
            case '3':
                switch (true) {
                    case volume <= 1000:
                        duty = volume * 3;
                        break;
                    case volume <= 1500:
                        duty = volume * 3.2;
                        break;
                    case volume <= 1800:
                        duty = volume * 3.5;
                        break;
                    case volume <= 2300:
                        duty = volume * 4.8;
                        break;
                    case volume <= 3000:
                        duty = volume * 5;
                        break;
                    default:
                        duty = volume * 5.7;
                }
                break;
            default:
                duty = 'Неверно введенное значение';
        };

        if ($('#calc_engine').length) {
            let selElectroOpt = 1 * $('#calc_engine').children("option:selected").val();
            if (selElectroOpt)
                duty = duty;
            else
                duty = price * 0;
        }
        if ($('#calc_type').length) {
            if ($('#calc_type').find(':selected').data('type') == 'moto') {
                duty = price * 0.4;
            }
        }

        if ($('#calc_clearance').length) {
            duty = duty * $('#calc_clearance').children("option:selected").val();
        }

        $('.customs-result').text(Math.round(duty));
		
		
		
        
    })


    $delivery = $('#delivery');
    $klaipeda = $('#klaipeda');
    $final = $('#final');
    $minsk = $('#minsk');
    $total = $('#total');
    $total1 = $('#total1');

    var calcPlace = $('#calc_place').find(':selected').data('auto');
    var calcKlaipeda = $('#calc_place').find(':selected').data('klaipeda');
    var calcMinsk = $('#calc_place').find(':selected').data('minsk')  - calcKlaipeda;

    function calculator() {
        var calcType = $('#calc_type').find(':selected').data('type');
        var calcPlace = $('#calc_place').find(':selected').data('auto');
        var calcKlaipeda = $('#calc_place').find(':selected').data('klaipeda');
        var calcMinsk = $('#calc_place').find(':selected').data('minsk');
        var calcDestination = $('#calc_destination').find(':selected').data('destination');

        if (calcType == 'auto') {
            var calcPlace = $('#calc_place').find(':selected').data('auto');
            var calcKlaipeda = $('#calc_place').find(':selected').data('klaipeda');
            var calcMinsk = $('#calc_place').find(':selected').data('minsk')  - calcKlaipeda;
            $delivery.text(calcPlace);
            $klaipeda.text(calcKlaipeda);
            $minsk.text(calcMinsk);
            $final.text(calcMinsk + calcKlaipeda);
            $('span.delivery').text(calcPlace + ' $');
            $('span.klaipeda').text(calcKlaipeda + ' $');
            $('span.minsk').text(calcMinsk + ' $');
        } else if (calcType == 'moto') {
            var calcPlace = $('#calc_place').find(':selected').data('moto');
            calcKlaipeda = 550;
            calcMinsk = 1150;
            $delivery.text(calcPlace);
            $('span.delivery').text(calcPlace);
            $klaipeda.text(calcKlaipeda);
            $minsk.text(calcMinsk);
            $final.text(calcMinsk + calcKlaipeda);
            $('span.delivery').text(calcPlace + ' $');
            $('span.klaipeda').text(calcKlaipeda + ' $');
            $('span.minsk').text(calcMinsk + ' $');
        } else if (calcType == 'quad') {
            var calcPlace = $('#calc_place').find(':selected').data('moto')+100;
            calcKlaipeda = 550;
            calcMinsk = 1150;
            $delivery.text(calcPlace);
            $('span.delivery').text(calcPlace);
            $klaipeda.text(calcKlaipeda);
            $minsk.text(calcMinsk);
            $final.text(calcMinsk + calcKlaipeda);
            $('span.delivery').text(calcPlace + ' $');
            $('span.klaipeda').text(calcKlaipeda + ' $');
            $('span.minsk').text(calcMinsk + ' $');
        };

        /*if (calcDestination != 'minsk') {
            $('.to-minsk').hide();
            $('#map .total span').text(calcKlaipeda + calcPlace + ' $');
            $total.text(calcKlaipeda + calcPlace);
        } else {
            $('.to-minsk').show();
            $('#map .total span').text(calcMinsk + calcKlaipeda + calcPlace + ' $');
            $total.text(calcMinsk + calcKlaipeda + calcPlace);
        }*/
        
        if (calcType == 'moto' || calcType == 'quad') {
            $total.text(calcMinsk + calcKlaipeda + calcPlace + 50);
            $total1.text(calcMinsk + calcKlaipeda + calcPlace + 1450);
        } else {
            $total.text(calcMinsk + calcKlaipeda + calcPlace + 50);
            $total1.text(calcMinsk + calcKlaipeda + calcPlace + 1850);
        }
        
        /* $total.text(calcMinsk + calcKlaipeda + calcPlace + 50);
        $total1.text(calcMinsk + calcKlaipeda + calcPlace + 1850);*/
    };

    $('#calculator select').on('change', function() {
        calculator();
        if ($( window ).width() < 700) {
            $('html, body').animate({
                scrollTop: $(".calculator_right").offset().top
            }, 2000);
        }
    });

    $('#price-calculator .button').on('click', function() {
        calculator();
        $('.port__item strong').text($('#calc_place').val());
        $('.port__item').show();
        if ($( window ).width() < 700) {
            $('html, body').animate({
                scrollTop: $(".calculator_right").offset().top
            }, 2000);
        };
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 300}, 1500);
    });

    $('.port__item .remove').on('click', function() {
        $('.port__item').hide();
        $delivery.text('');
        $klaipeda.text('');
        $minsk.text('');
        $total.text('');
        $total1.text('');
    });

    $('#calc_type').on('change', function () {
        var calcType = $('#calc_type').find(':selected').data('type');

        if (calcType == 'moto') {
            $style = $('<style>' +
                '#map .baloon-moto {' +
                'display: block;' +
                '} ' +
                '#map ' +
                '.baloon-auto {' +
                'display: none;' +
                '}' +
                '#map ' +
                '.baloon-quad {' +
                'display: none;' +
                '}' +
                '</style>').appendTo('head');
        } else if (calcType == 'quad')  {
            $style = $('<style>' +
                '#map .baloon-quad {' +
                'display: block;' +
                '} ' +
                '#map ' +
                '.baloon-auto {' +
                'display: none;' +
                '}' +
                '#map ' +
                '.baloon-moto {' +
                'display: none;' +
                '}' +
                '</style>').appendTo('head');
        } else  {
            $style.remove();
        };
    });

    $('#calc_place').on('change', function () {
        $('.list li').each(function() {
            if ($(this).find('h4').text() == $('#calc_place').val()) {
                $(this).find('h4').trigger('click');
            }
        });
    });

    $('#calc_filter').on('change', function () {
        var isAscOrder = true;
        var $elements = $('.list li');
        var $target = $('.list ul');

        if ($(this).val() == 'По алфавиту') {
            $elements.sort(function (a, b) {
                var an = $(a).text(),
                    bn = $(b).text();

                if (an && bn) {
                    return an.toUpperCase().localeCompare(bn.toUpperCase());
                }

                return 0;
            });

            $elements.detach().appendTo($target);

        } else if ($(this).val() == 'По цене (по возрастанию)') {
            $target.find('li').sort(function (a, b) {
                return +a.dataset.price - +b.dataset.price;
            }).appendTo( $target );
        } else if ($(this).val() == 'По цене (по убыванию)') {
            $target.find('li').sort(function (a, b) {
                return +b.dataset.price - +a.dataset.price;
            }).appendTo( $target );
        }

    });

    $('.customs-calculator .button').on('click', function() {
        calculator();
    });

	
	var koef = 1.1
    $('.customs-calculator button').on('click', function () {
        var volume = $('#calc_volume').val();
        var price = $('#calc_price').val();
		var priceUe = price;
		price = Math.round(price / koef);
		if( $('#calc_auction').lenght) 		
		{
		  var auction = $('#calc_auction').val();
		
		if (auction == "copart") {
            var fees = copart;
            plus = '';
            max = 15000;
            percent = 0.04;
            $('.costs-iaai').text('')
        } else if (auction = 'iaai') {
            var fees = iaai;
            plus = 7500;
            plus_gate = 94;
            plus_internet = 119;
            max = 20000;
            percent = 0.04;
            $('.costs-iaai').text('+ 10$ если есть отчет autochek')
        } else if (auction = 'manheim') {
            var fees = manheim;
            plus = '';
            max = 15000;
            percent = 0.07;
            $('.costs-iaai').text('')
        }

        if (priceUe >= max) {
            var fee = Math.round(priceUe * percent);
        } if (plus != '' && priceUe >= plus && priceUe <= max) {
            var fee = parseInt(Math.round(price * 0.01) + 500 + plus_gate + plus_internet);
            console.log(Math.round(priceUe * 0.01) + 500)
            console.log(plus_gate)
            console.log(plus_internet)			
            console.log('ds')
        } else {
            let i = 0;
            while (i < fees.length) { // выводит 0, затем 1, затем 2
                if (priceUe >= fees[i].from && priceUe <= fees[i].to) {
                    var fee = parseInt(fees[i].price + fees[i].gate + fees[i].internet);
                    break;
                }
                i++;
            }
			
        }	
			
		price = Math.round(+(price) + (fee/koef));
			console.log('123'+ price);	
				
		} else {
			
		}
		
		var age = $('#calc_age').children("option:selected").val();
        var duty;		
		
		
		if ($("#calc_auction").length)
		{
			 var auction = $('#calc_auction').val();
		
		if (auction == "copart") {
            var fees = copart;
            plus = '';
            max = 15000;
            percent = 0.04;
            $('.costs-iaai').text('')
        } else if (auction = 'iaai') {
            var fees = iaai;
            plus = 7500;
            plus_gate = 94;
            plus_internet = 119;
            max = 20000;
            percent = 0.04;
            $('.costs-iaai').text('+ 10$ если есть отчет autochek')
        } else if (auction = 'manheim') {
            var fees = manheim;
            plus = '';
            max = 15000;
            percent = 0.07;
            $('.costs-iaai').text('')
        }

        if (priceUe >= max) {
            var fee = Math.round(priceUe * percent);
        } if (plus != '' && priceUe >= plus && priceUe <= max) {
            var fee = parseInt(Math.round(price * 0.01) + 500 + plus_gate + plus_internet);
            console.log(Math.round(priceUe * 0.01) + 500)
            console.log(plus_gate)
            console.log(plus_internet)			
            console.log('ds')
        } else {
            let i = 0;
            while (i < fees.length) { // выводит 0, затем 1, затем 2
                if (priceUe >= fees[i].from && priceUe <= fees[i].to) {
                    var fee = parseInt(fees[i].price + fees[i].gate + fees[i].internet);
                    break;
                }
                i++;
            }
			
        }	
			price = Math.round(+(price) + (fee/koef));
			console.log('123'+ price);
			console.log('123'+ fee);
		}
		else
		{ 
			
		}
		
        switch (age) {
            case '1':
                switch (true) {
                    case price <= 8500:
                        if ((price * 0.54) < (volume * 2.5)) {
                            duty = (volume * 2.5);
                        } else {
                            duty = (price * 0.54);
                        }
                        break;
                    case price <= 16700:
                        if ((price * 0.48) < (volume * 3.5)) {
                            duty = (volume * 3.5);
                        } else {
                            duty = (price * 0.48);
                        }
                        break;
                    case price <= 42300:
                        if ((price * 0.48) < (volume * 5.5)) {
                            duty = (volume * 5.5);
                        } else {
                            duty = (price * 0.48);
                        }
                        break;
                    case price <= 84500:
                        if ((price * 0.48) < (volume * 7.5)) {
                            duty = (volume * 7.5);
                        } else {
                            duty = (price * 0.48);
                        }
                        break;
                    case price <= 169000:
                        if ((price * 0.48) < (volume * 15)) {
                            duty = (volume * 15);
                        } else {
                            duty = (price * 0.48);
                        }
                        break;
                    default:
                        if ((price * 0.48) < (volume * 20)) {
                            duty = (volume * 20);
                        } else {
                            duty = (price * 0.48);
                        }
                }
                break;
            case '2':
                switch (true) {
                    case volume <= 1000:
                        duty = volume * 1.5;
                        break;
                    case volume <= 1500:
                        duty = volume * 1.7;
                        break;
                    case volume <= 1800:
                        duty = volume * 2.5;
                        break;
                    case volume <= 2300:
                        duty = volume * 2.7;
                        break;
                    case volume <= 3000:
                        duty = volume * 3;
                        break;
                    default:
                        duty = volume * 3.6;
                }
                break;
            case '3':
                switch (true) {
                    case volume <= 1000:
                        duty = volume * 3;
                        break;
                    case volume <= 1500:
                        duty = volume * 3.2;
                        break;
                    case volume <= 1800:
                        duty = volume * 3.5;
                        break;
                    case volume <= 2300:
                        duty = volume * 4.8;
                        break;
                    case volume <= 3000:
                        duty = volume * 5;
                        break;
                    default:
                        duty = volume * 5.7;
                }
                break;
            default:
                duty = 'Неверно введенное значение';
        };

        if ($('#calc_engine').length) {
            let selElectroOpt = 1 * $('#calc_engine').children("option:selected").val();
            if (selElectroOpt)
                duty = duty;
            else
                duty = price * 0;
        }
        if ($('#calc_type').length) {
            if ($('#calc_type').find(':selected').data('type') == 'moto') {
                duty = price * 0.4;
            }
        }

        if ($('#calc_clearance').length) {
            duty = duty * $('#calc_clearance').children("option:selected").val();
        }

        $('.customs-result').text(Math.round(duty));
		
		
		
        
    })
	console.log($('#calc_auction').val());

    var usdRate = 3.1;
//     $.getJSON('https://www.nbrb.by/api/exrates/rates/145', function(usd) {
//         usdRate = usd.Cur_OfficialRate;
//     });

    var eurRate = 3.5;
//     $.getJSON('https://www.nbrb.by/api/exrates/rates/292', function(eur) {
//         eurRate = eur.Cur_OfficialRate;
//     });

    function prettify (num) {
        var n = num.toString();
        var separator = " ";
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
    }
	console.log(usdRate);
	console.log(eurRate);

    $('#calc_type').on('change', function () {
        if ($(this).find(':selected').data('type') == 'moto') {
            $('#calc_engine').prop('disabled', true);
            $('#calc_age').prop('disabled', true);
        } else {
            $('#calc_engine').prop('disabled', false);
            $('#calc_age').prop('disabled', false);
        }
    })

    $('#calc_engine').on('change', function () {
        if ($(this).find(':selected').val() == 0) {
            $('#calc_volume').prop('disabled', true);
        } else {
            $('#calc_volume').prop('disabled', false);
        }
    })

    $('.customs-calculator button').on('click', function () {
        var price = parseInt($('#calc_price').val());
        var auction = $('#calc_auction').val();
		var EuroPrice = price / (eurRate / usdRate);
        var type = $('#calc_type').find(':selected').data('type');
		
		
        if (auction == 'copart') {
            var fees = copart;
            plus = '';
            max = 15000;
            percent = 0.0675;
            $('.costs-iaai').text('')
        } else if (auction = 'iaai') {
            var fees = iaai;
            plus = '';
            max = 15000;
            percent = 0.073;
            $('.costs-iaai').text('+ 15$ Premium Vehichle Report Fee')
        } else if (auction = 'manheim') {
            var fees = manheim;
            plus = '';
            max = 15000;
            percent = 0.055;
            $('.costs-iaai').text('')
        }

        if (price >= max) {
            var fee = Math.round(price * percent);
        } if (plus != '' && price >= plus && price <= max) {
            var fee = parseInt(Math.round(price * 0.01) + 500 + plus_gate + plus_internet);
            console.log(Math.round(price * 0.01) + 500)
            console.log(plus_gate)
            console.log(plus_internet)			
            console.log('ds')
        } else {
            let i = 0;
            while (i < fees.length) { // выводит 0, затем 1, затем 2
                if (price >= fees[i].from && price <= fees[i].to) {
                    var fee = parseInt(fees[i].price + fees[i].gate + fees[i].internet);
                    break;
                }
                i++;
            }
        }
		
        $('.calculator__body').show();

        $('.costs-auto').text(prettify(price))
        $('.costs-auction').text(prettify(fee))

        var deliveryToPort = parseInt($('#delivery').text());
        var deliveryToMinsk = parseInt($('#final').text());
        
        var customs = Math.round(parseInt($('.customs-result').text()) * 1.1);
        var customsCosts = Math.round(parseInt($('.costs-customs').text()) / usdRate);
				
        var customsTotal = 0;

        if (type == 'moto') {
            var recycling = 0;
            customsTotal = Math.round(customs + (fee * $('#calc_clearance').find(':selected').val() * 0.4));
            $('.customs-result').text(Math.round(customsTotal * 1.1))
        } else {
            var recycling = $('#calc_age').find(':selected').data('recycling');
            customsTotal = customs
        }

        $('.costs-recycling').text(prettify(recycling))

        var recycling = Math.round(parseInt($('.costs-recycling').text()) / usdRate);
        var declarant = Math.round(parseInt($('#calc_type').find(':selected').data('declarant')) / usdRate);

        $('.customs-declarant').text($('#calc_type').find(':selected').data('declarant'))
        
         if (type == 'moto' || type == 'quad') {
            var final = price + fee + deliveryToPort + deliveryToMinsk + customsTotal + customsCosts + recycling + declarant + 350;
            var final1 = price + fee + deliveryToPort + deliveryToMinsk  + customsTotal + customsCosts + recycling + declarant  + 1750;
        } else {
            var final = price + fee + deliveryToPort + deliveryToMinsk + customsTotal + customsCosts + recycling + declarant  + 350;
            var final1 = price + fee + deliveryToPort + deliveryToMinsk  + customsTotal + customsCosts + recycling + declarant  + 2150;
        }

        

        console.log(price, fee, deliveryToPort, deliveryToMinsk, customsTotal, customsCosts, recycling, declarant)

//         $('.costs-total').text(prettify(final));
			$('.costs-total').text(final);
			$('.costs-total1').text(final1);

        /*console.log('price ' + price);
        console.log('fee ' + fee);
        console.log('deliveryToPort ' + deliveryToPort);
        console.log('deliveryToMinsk ' + deliveryToMinsk);
        console.log('customs ' + customsTotal);
        console.log('customsCosts ' + customsCosts);
        console.log('recycling ' + recycling);
        console.log('declarant ' + declarant);
        console.log('service ' + service);*/


        $('html, body').animate({
            scrollTop: $(".calculator__body-costs").offset().top - 150
        }, 1000);
    });

});
