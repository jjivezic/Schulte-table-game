(function() {
    console.log('=========================Random number to guess==================================');
    var getRandomNumber = function() {
        var randomArr = []
        for (var i = 1; i <= 25; i++) {
            var random = (Math.floor(Math.random() * 25) + 1);
            if (randomArr.indexOf(random) < 0) {
                randomArr.push(random);
            } else {
                i = i - 1;
            }
        }
        return randomArr;
    }

    let randomNumbersArray = getRandomNumber();
    console.log('Random number in table', randomNumbersArray);
    console.log('===========================================================');
    //prikazuje random brojeve u tabeli
    function getrandomNumberPosition() {
        $('button[class*="btnNum"]').each(function(index, obj) {
            for (var i = 0; i <= 25; i++) {
                $('.btnNum' + (i + 1)).text(randomNumbersArray[i]);
            }
        });
    }
    getrandomNumberPosition();


    //random brojevi iz funkcije dodeljeni novoj varijabli da bi se izbacivao minimalni element iz niza
    let cuttedArray = randomNumbersArray;
    //pronalazi najmanji broj i brise ga iz niza
    function  remove_smallest(cuttedArray) {
        let min = Math.min.apply(null, cuttedArray);
        return  cuttedArray.filter(function(element) { 
            return  element !=  min;
        })
    }
    //najmanji element u nizu - pocetna vrednost
    let cuttedArrayMin = 1;
    console.log('min1', cuttedArrayMin);

    //stoperica se pokrece kada kliknemo na start input
    function startGame() {
        $('.endGame').hide();
        $('.start input').on("click", function() {
            $('.start').hide();
            startStopwatch();
        });
    }


    //kada je poslednji element kliknut zapocni novu igru
    function lastElementClicked() {
        if (cuttedArrayMin == 25) {
            console.log('empty');
            stopStopwatch();
            $('.start').show();
            $('.endGame').show();
            $('.endGame span').text(h1.textContent);
            clearStopwatch();
            $('.start').on("click", function() {
                startGame();
                $('button[class*="btnNum"]').prop({
                    disabled: false
                });
                cuttedArrayMin = 1;
                cuttedArray = randomNumbersArray;//puni niz sa novim brojevima
            });
        }

    }

    // kliktanje brojeva  po tabeli
    function gessingNumbers() {
        startGame();
        $('button[class*="btnNum"]').on('click', function() {
            cuttedArrayMin; //najmanji element
            lastElementClicked();

            var clickedBtn = $(this).text();
            let clickedBtnToNumber = parseInt(clickedBtn);
            console.log('clicked button', clickedBtnToNumber);


            if (clickedBtnToNumber === cuttedArrayMin) {
                cuttedArray = remove_smallest(cuttedArray);
                cuttedArrayMin = Math.min(...cuttedArray);
                console.log('Min element');
                console.log(cuttedArrayMin);
                console.log('is equal to min element in array');
                $(this).prop({
                    disabled: true
                });

            } else {
                console.log('is biger then min element in array');
                $(this).prop({
                    disabled: false
                });
            }
        });

    }
    gessingNumbers();

    //stopwatch
    var h1 = document.querySelector('#stopwatch'),
        ms = 0,
        seconds = 0,
        minutes = 0,
        t;
    //start stoperice
    function startStopwatch() {
        function add() {
            ms++;
            if (ms >= 10) { //100
                ms = 0;
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                }
            }

            h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (ms > 9 ? ms : "0" + ms);
            // console.log(h1.textContent);
            timer();
        }

        function timer() {
            t = setTimeout(add, 100); //10
        }
        timer();


    }
    //https://www.ostraining.com/blog/coding/stopwatch/
    //http://jsfiddle.net/oukjfavu/
    //Resetovanje stoperica 
    function clearStopwatch() {
        h1.textContent = "00:00:00";
        ms = 0;
        seconds = 0;
        minutes = 0;
    }
    //zaustavljanje stoperice
    function stopStopwatch() {
        clearTimeout(t);
    }



}());