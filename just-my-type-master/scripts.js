$(document).ready(function () {

    $('#keyboard-upper-container').hide();

    $(document).on('keydown', function (event) {
        if (event.keyCode == 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    });
    $(document).on('keyup', function (event) {
        if (event.keyCode == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').toggle();
        }
    })


    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let characterDiv = $('#target-letter');




    let sentenceIndex = 0;
    let characterIndex = 0;
    let numberOfMistakes = 0;
    let currentSentence = sentences[sentenceIndex];
    let characterstart = currentSentence[0];
    let currentCharacter = currentSentence.substring(characterIndex, characterIndex + 1);
    characterDiv.text(characterstart);

    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentCharacter);

    $(document).on("keypress", function (event) {
        let keyPressed = $("#" + event.which);
        $(keyPressed).css("background-color", 'orange');



        $(document).on("keyup", function () {
            $(keyPressed).css("background-color", 'lightblue');
        });

    })

    $(document).on('keypress', function (event) {
        if (event.which === sentences[sentenceIndex].charCodeAt(characterIndex)) {

            $('#yellow-block').css('left', '+=17.5px');

            $('#feedback').append('<span class ="glyphicon glyphicon-ok"></span>');

            characterIndex++;

            currentCharacter = currentSentence.substring(characterIndex, characterIndex + 1);
            $('#target-letter').text(currentCharacter);

            if (characterIndex === currentSentence.length) {

                sentenceIndex++;
            }

            if (sentenceIndex === sentences.length) {
                let wpm = Math.round(54 / minutes - 2 * numberOfMistakes);
                $('#feedback').append('<div id="wpmDiv">You typed ' + wpm + 'words per minute!</div>');
                $('#wpmDiv').css({
                    'font-size': '24px',
                    'font-weight': 'bold'
                });





                currentSentence = sentences[sentenceIndex];
                $('#target-letter').text(currentSentence);
                characterIndex = 0;
                currentCharacter = currentSentence.substring(characterIndex, characterIndex + 1);
                $('#target-letter').text(currentCharacter);
                $('#yellow-block').css('left', '15.5px');
                $('#feedback').empty();

            }
        }
        else {
            $('feedback').append('<span class ="glyphicon glyphicon-remove"></span>');
            numberOfMistakes++;



        }
    })









})