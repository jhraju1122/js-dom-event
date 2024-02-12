console.log('this is separate js file');

//option-2
function makeRed(){
    document.body.style.backgroundColor = 'black';
        }

        // option-3
        const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

        
        // option-4
        const makeGreenButton = document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor = 'green';
        })