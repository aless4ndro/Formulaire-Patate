document.querySelector('.txt-name').addEventListener('input', function(e) {
    document.querySelector('.name').innerHTML = 'M. ' + e.target.value;
});


// Détectez lorsque le bouton radio sélectionné associé aux yeux change. Récupérez ensuite sa valeur et remplacer l'URL de l'image des yeux 👀 par https://ex.smnarnold.com/formulaires/patate/ suivi de la valeur sélectionnée.
document.querySelectorAll('input[type="radio"][name="eyes"]').forEach(function(radio) {
    radio.addEventListener('change', function(e) {
        document.querySelector('#yeuxImg').src = 'https://ex.smnarnold.com/formulaires/patate/' + e.target.value;
    });
});

// Détectez lorsque la boite à cocher associée à la moustache change. Récupérez sa valeur et selon si la boite est cochée ou non, ajoutez ou enlevez la classe .is-visible à l'image de moustache.
document.querySelector('.chb-mustache').addEventListener('change', function(e) {
    if (e.target.checked) {
        document.querySelector('#moustacheImg').classList.add('is-visible');
    } else {
        document.querySelector('#moustacheImg').classList.remove('is-visible');
    }
});

// Détectez lorsque la liste déroulante associée aux bouches change. Récupérez ensuite la valeur sélectionnée et remplacez l'URL de l'image de bouche par https://ex.smnarnold.com/formulaires/patate/ suivi de la valeur sélectionnée.
document.querySelector('#sel-mouth').addEventListener('change', function(e) {
    document.querySelector('#bouchesImg').src = 'https://ex.smnarnold.com/formulaires/patate/' + e.target.value;
});

// Détectez lorsque la pastille de couleur change. Récupérez sa nouvelle valeur et attribuez-là comme couleur de fond à l'élément ayant la classe .potato.
document.querySelector('.col-shoes').addEventListener('change', function(e) {
    document.querySelector('.potato').style.backgroundColor = e.target.value;
});
