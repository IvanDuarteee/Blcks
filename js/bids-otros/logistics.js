/**
 * Variables
 */
let selectedOption = null;

function geocodeLocation() {

    // Change Selector
    document.getElementById("validationCustom06").addEventListener('change', function () {
        selectedOption = this.value;
    
        // Oculta todos los elementos de contenido al cambiar la selección
        const contentProjectsElements = document.querySelectorAll('.form-floating');
        contentProjectsElements.forEach((element) => {
            element.style.display = 'none';
        });
    });

    document.getElementById("submit-first-dates").addEventListener('click', function () {
        event.preventDefault();

        selectedOption = document.getElementById("validationCustom06").value;

        if (selectedOption === 'Residential') {
            calculateLogisticResidential();
            document.getElementById("bids-content").style.display = 'none';
            document.getElementById("project-residential").style.display = 'block';
        } else if (selectedOption === 'Company') {
            calculateLogisticCompany();
            document.getElementById("bids-content").style.display = 'none';
            document.getElementById("project-company").style.display = 'block';
        } else {
            alert('Seleccione un tipo de proyecto');
        }
    });
};


function calculateLogisticResidential() {
    // Name Residential
    const nameResidential = (document.getElementById("validationCustom05").value);

    // Logistic Residential
    const direction = (document.getElementById("validationCustom01").value);
    const city = (document.getElementById("validationCustom02").value);
    const state = (document.getElementById("validationCustom03").value);
    const zipCode = (document.getElementById("validationCustom04").value);

    const directionComplete = `${direction}, ${city}, ${state}, ${zipCode}`;

    const geocoder = L.Control.Geocoder.nominatim();

    const pointReferenceLat = 36.10560;
    const pointReferenceLng = -80.00418;

    geocoder.geocode(directionComplete, function (results) {
        if (results.length > 0) {
            const latitude = results[0].center.lat;
            const longitude = results[0].center.lng;

            const reference = L.latLng(pointReferenceLat, pointReferenceLng);
            const distanceInMiles = reference.distanceTo(L.latLng(latitude, longitude)) * 0.000621371;

            const priceLogisticResidential = (distanceInMiles.toFixed(1) * 0.45);

            document.getElementById('name-residential').innerHTML = nameResidential;

            document.getElementById('direction-residential').innerHTML = directionComplete;

            document.getElementById('logistic-residential').innerHTML = priceLogisticResidential;

            // const resultElemet = document.getElementById('result');
            // resultElemet.innerHTML = `Distancia desde el punto de referencia: ${distanceInMiles.toFixed(1)} millas`;
        } else {
            // document.getElementById('result').innerHTML = 'No se pudo encontrar la ubicación';

            document.getElementById('logistic-residential').innerHTML = '';

            alert('No se pudo encontrar la ubicación.');
        }
    });
};

function calculateLogisticCompany() {
    // Name Company
    const nameCompany = (document.getElementById("validationCustom05").value);

    // Logistic Company
    const direction = (document.getElementById("validationCustom01").value);
    const city = (document.getElementById("validationCustom02").value);
    const state = (document.getElementById("validationCustom03").value);
    const zipCode = (document.getElementById("validationCustom04").value);

    const directionComplete = `${direction}, ${city}, ${state}, ${zipCode}`;

    const geocoder = L.Control.Geocoder.nominatim();

    const pointReferenceLat = 36.10560;
    const pointReferenceLng = -80.00418;

    geocoder.geocode(directionComplete, function (results) {
        if (results.length > 0) {
            const latitude = results[0].center.lat;
            const longitude = results[0].center.lng;

            const reference = L.latLng(pointReferenceLat, pointReferenceLng);
            const distanceInMiles = reference.distanceTo(L.latLng(latitude, longitude)) * 0.000621371;

            const priceLogisticCompany = (distanceInMiles.toFixed(1) * 0.45);

            document.getElementById('name-company').innerHTML = nameCompany;

            document.getElementById('direction-company').innerHTML = directionComplete;

            document.getElementById('logistics-company').innerHTML = priceLogisticCompany;

            // const resultElemet = document.getElementById('result');
            // resultElemet.innerHTML = `Distancia desde el punto de referencia: ${distanceInMiles.toFixed(1)} millas`;
        } else {
            // document.getElementById('result').innerHTML = 'No se pudo encontrar la ubicación';

            document.getElementById('logistics-company').innerHTML = '';

            alert('No se pudo encontrar la ubicación.');
        }
    });
};