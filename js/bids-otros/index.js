const firebaseConfig = {
    apiKey: "AIzaSyDkynA61YF-49YQxmjMK7TtaxA3PGu7W4w",
    authDomain: "blackstonencweb-b5c95.firebaseapp.com",
    projectId: "blackstonencweb-b5c95",
    storageBucket: "blackstonencweb-b5c95.appspot.com",
    messagingSenderId: "939271003460",
    appId: "1:939271003460:web:32870e1d3b1ce2405bcb11"
};

// Generate Number Random
function generateRandomId() {
    return Math.floor(1000000 + Math.random() * 9000000);
}

// async function isIdUniqueRealtime(id) {
//     const snapshot = await bidsRDB.orderByChild("ProjectID").equalTo(id).once("value");
//     return !snapshot.exists();
//   }

// async function generateUniqueRandomIdRealtime() {
//     let id;
//     do {
//         id = generateRandomId();
//     } while (!(await isIdUniqueRealtime(id)));
//     return id;
// }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your Realtime Database
var bidsRDB = firebase.database().ref("Bids");

let projectID = null;

document.getElementById('submit-first-dates').addEventListener('click', function (e) {
    e.preventDefault();

    console.log("Formulario enviado");

    var address = getElementVal("validationCustom01");
    var city = getElementVal("validationCustom02");
    var state = getElementVal("validationCustom03");
    var zipCode = getElementVal("validationCustom04");
    var nameProject = getElementVal("validationCustom05");
    var typeProject = getElementVal("validationCustom06");
    var startDateProject = getElementVal("validationCustom07");

    projectID = generateRandomId();

    var newBidsFireDB = bidsRDB.push();

    newBidsFireDB.set({
        Location: `${address}, ${city}, ${state}, ${zipCode}`,
        NameProject: nameProject,
        TypeProject: typeProject,
        StartDateProject: startDateProject,
        ProjectID: projectID,
    });

    
 
});


// Reference your Firestore Database
var bidsFire = firebase.firestore();

var bidsCollection = bidsFire.collection("Bids");
var projectDocument = bidsCollection.doc("Projects")
var collectionResidential = projectDocument.collection('Residential');
var collectionCompany = projectDocument.collection('Company');

document.getElementById('submit-dates-residential').addEventListener('click', function (e) {
    e.preventDefault();
   
    const data = {
        FinishedBasament: getElementVal("validationCustom08"),
        UnifinishedBasament: getElementVal("validationCustom09"),
        Garage: getElementVal("validationCustom10"),
        FirstFloor: getElementVal("validationCustom11"),
        SecondFloor: getElementVal("validationCustom12"),
        ThirdFloor: getElementVal("validationCustom13"),
        FrontPorch: getElementVal("validationCustom14"),
        RearPorch: getElementVal("validationCustom15"),
        ThirdGarage: getElementVal("validationCustom16"),
        BonusRoom: getElementVal("validationCustom17"),
        CarpetStairs: getElementVal("validationCustom18"),
        OakStairs: getElementVal("validationCustom19"),
        TjiJoist: getElementVal("validationCustom20"),
        FloorTrusses: getElementVal("validationCustom21"),
        RoofTrusses: getElementVal("validationCustom22"),
        AcceptLogistic: getElementVal("invalidCheckResidential"),
        BookingBudget: firebase.firestore.FieldValue.serverTimestamp()
    }

    const docRef = collectionResidential.doc(`${projectID}`);

    docRef.set(data)
        .then(() => {
            console.log('Documento guardado con ID: ', projectID);
            sendPDFResidential();
        })
        .catch((error) => {
            console.error('Error al guardar el documento: ', error);
        });

});

document.getElementById('submit-dates-company').addEventListener('click', function(e) {
    e.preventDefault();

    const data = {
        FirsFloorCompany: getElementVal("validationCustom23"),
        SecondFloorCompany: getElementVal("validationCustom24"),
        ThirdFloorCompany: getElementVal("validationCustom25"),
        FourFloorCompany: getElementVal("validationCustom26"),
        GarageCompany: getElementVal("validationCustom27"),
        FrontPorchCompany: getElementVal("validationCustom28"),
        ExtraGarageCompany: getElementVal("validationCustom29"),
        ClubHouseCompany: getElementVal("validationCustom30"),
        PoolHouseCompany: getElementVal("validationCustom31"),
        MaintenanceCompany: getElementVal("validationCustom32"),
        PavilionCompany: getElementVal("validationCustom33"),
        DogRunPavilion: getElementVal("validationCustom34"),
        SmokingCompany: getElementVal("validationCustom35"),
        TrashCompactorCompany: getElementVal("validationCustom36"),
        KayakPavilionCompany: getElementVal("validationCustom37"),
        AcceptLogistic: getElementVal("invalidCheckCompany"),
        BookingBudget: firebase.firestore.FieldValue.serverTimestamp()
    }

    const docRef = collectionCompany.doc(`${projectID}`);

    docRef.set(data)
        .then(() => {
            console.log('Documento guardado con ID: ', projectID);
        })
        .catch((error) => {
            console.error('Error al guardar el documento: ', error);
        });

});

async function sendPDFResidential() {

    window:html2canvas = html2canvas;
    window.jsPDF = window.jspdf.jsPDF;

    if (typeof jsPDF !== 'undefined') {
        var doc = new jsPDF('p', 'pt', 'letter');
    var margin = 10;
    var scale = (doc.internal.pageSize.width - margin * 2) / document.getElementById('send-bids-residential').scrollWidth;
    doc.html(document.getElementById('send-bids-residential'), {
        x: margin,
        y: margin,
        html2canvas: {
            scale: scale,
        },
        callback: function(doc) {
            doc.output('dataurlnewwindow', {filename: `residential-bsnc-${projectID}.pdf`});
        }
    });  
    } else {
        console.error('jsPDF no está definido. Asegúrate de que jsPDF se haya cargado correctamente.');
    }
};


const getElementVal = (id) => { 
    return document.getElementById(id).value;
};