
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean'];
let characterDiv = $('#target-letter');
let startTime = Date.now()

let sentenceIndex = 0;
let characterIndex = 0;
let numberOfMistakes = 0;
let currentSentence = sentences[sentenceIndex];
let characterstart = currentSentence[0];
let currentCharacter = currentSentence.substring(characterIndex, characterIndex + 1);
characterDiv.text(characterstart);



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


function logEverything() {
    console.log({
        sentenceIndex,
        characterIndex,
        currentSentence,
        currentCharacter
    })
}





$('#sentence').text(currentSentence);
$('#target-letter').text(currentCharacter);

$(document).on("keypress", function (event) {
    let keyPressed = $("#" + event.which);
    $(keyPressed).css("background-color", 'orange');



    $(document).on("keyup", function () {
        $(keyPressed).css("background-color", 'whitesmoke');
    });

})

$('#sentence').text(currentSentence);
$('#target-letter').text(currentCharacter);

$(document).on('keypress', function (event) {
    if (event.which === sentences[sentenceIndex].charCodeAt(characterIndex)) {

        $('#yellow-block').css('left', '+=17.5px');

        $('#feedback').append('<span class ="glyphicon glyphicon-ok"></span>');

        characterIndex++;

        currentCharacter = currentSentence.substring(characterIndex, characterIndex + 1);
        $('#target-letter').text(currentCharacter);

        logEverything();

        console.log(0.1+0.2)


        if (characterIndex >= currentSentence.length) {

            sentenceIndex++;
            currentSentence = sentences[sentenceIndex];
            $('#sentence').text(currentSentence);
            $('target-letter').text(currentCharacter);

            if (sentenceIndex >= sentences.length) {
                let time = (Date.now() - startTime) / 60000;
                let minutes = time;
                let wpm = Math.round(54 / minutes - 2 * numberOfMistakes);
                $('#feedback').append('<div id="wpmDiv">You typed ' + wpm + 'words per minute!</div>');
                $('#wpmDiv').css({
                    'font-size': '24px',
                    'font-weight': 'bold'
                });

            }





           
            $('#target-letter').text(currentSentence);
            characterIndex = 0;
            currentCharacter = currentSentence.substring(characterIndex, characterIndex + 1);
            $('#target-letter').text(currentCharacter);
            $('#yellow-block').css('left', '15.5px');
            $('#feedback').empty();

        }
    }
    else {
        $('feedback').append('<span class ="glyphicon glyphicon-remove-sign">X</span>');
        numberOfMistakes++;



    }
})





