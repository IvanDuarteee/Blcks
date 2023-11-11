/**
 * Variables
 */
let numFirstFloorCompany = null;
let calculatorFirstFloorCompany = null;
//
let numSecondFloorCompany = null;
let calculatorSecondFloorCompany = null;
//
let numThirdFloorCompany = null;
let calculatorThirdFloorCompany = null;
//
let numFourFloorCompany = null;
let calculatorFourFloorCompany = null;
//
let numGarageCompany = null;
let calculatorGarageCompany = null;
//
let numFrontPorchCompany = null;
let calculatorFrontPorchCompany = null;
//
let numExtraGarageCompany = null;
let calculatorExtraGarageCompany = null;
//
let numClubHouseCompany = null;
let calculatorClubHouseCompany = null;
//
let numPoolHouseCompany = null;
let calculatorPoolHouseCompany = null;
//
let numMaitenanceBuildingCompany = null;
let calculatorMaintenanceBuildingCompany = null;
//
let numPavillionCompany = null;
let calculatorPavillionCompany = null;
//
let numDogRunPavillionCompany = null;
let calculatorDogRunPavillionCompany = null;
//
let numSmokingPavillionCompany = null;
let calculatorSmokingPavillionCompany = null;
//
let numTrashCompactorCompany = null;
let calculatorTrashCompactorCompany = null;
//
let numKayakPavillionCompany = null;
let calculatorKayakPavillionCompany = null;

function companyCalculator() {

  // Presupuesto para Blackstone NC ® - Company

  //  First Floor - validationCustom23
  try {
    numFirstFloorCompany = (document.getElementById("validationCustom23").value);

    if (numFirstFloorCompany == null || numFirstFloorCompany == 0) {
      numFirstFloorCompany == 0

      calculatorFirstFloorCompany = (numFirstFloorCompany*6.0)

      document.getElementById("first-floor-company").innerHTML = calculatorFirstFloorCompany;

      // document.getElementById("sq-ff-company").innerHTML = numFirstFloorCompany;
    } else {
      calculatorFirstFloorCompany = (numFirstFloorCompany*6.0);

      document.getElementById("first-floor-company").innerHTML = calculatorFirstFloorCompany;

      // document.getElementById("sq-ff-company").innerHTML = numFirstFloorCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de FirstFloorCompany: ", error);
  }

  // Second Floor - validationCustom24
  try {
    numSecondFloorCompany = (document.getElementById("validationCustom24").value);

    if (numSecondFloorCompany == null || numSecondFloorCompany == 0) {
      numSecondFloorCompany == 0

      calculatorSecondFloorCompany = (numSecondFloorCompany*6.0);

      document.getElementById("second-floor-company").innerHTML = calculatorSecondFloorCompany;

      // document.getElementById("sq-sf-company").innerHTML = numSecondFloorCompany;
    } else {
      calculatorSecondFloorCompany = (numSecondFloorCompany*6.0);

      document.getElementById("second-floor-company").innerHTML = calculatorSecondFloorCompany;

      // document.getElementById("sq-sf-company").innerHTML = numSecondFloorCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de SecondFloorCompany: ", error);
  }

  // Third Floor - validationCustom25
  try {
    numThirdFloorCompany = (document.getElementById("validationCustom25").value);

    if (numThirdFloorCompany == null || numThirdFloorCompany == 0) {
      numThirdFloorCompany == 0

      calculatorThirdFloorCompany = (numThirdFloorCompany*6.0);

      document.getElementById("third-floor-company").innerHTML = calculatorThirdFloorCompany;

      // document.getElementById("sq-tf-company").innerHTML = numThirdFloorCompany;
    } else {
      calculatorThirdFloorCompany = (numThirdFloorCompany*6.0);

      document.getElementById("third-floor-company").innerHTML = calculatorThirdFloorCompany;

      // document.getElementById("sq-tf-company").innerHTML = numThirdFloorCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de ThirdFloorCompany: ", error);
  }

  // Four Floor - validationCustom26
  try {
    numFourFloorCompany = (document.getElementById("validationCustom26").value);

    if (numFourFloorCompany == null || numFourFloorCompany == 0) {
      numFourFloorCompany == 0

      calculatorFourFloorCompany = (numFourFloorCompany*6.0);

      document.getElementById("four-floor-company").innerHTML = calculatorFourFloorCompany;

      // document.getElementById("sq-fourfloor-company").innerHTML = numFourFloorCompany;
    } else {
      calculatorFourFloorCompany = (numFourFloorCompany*6.0);

      document.getElementById("four-floor-company").innerHTML = calculatorFourFloorCompany;

      // document.getElementById("sq-fourfloor-company").innerHTML = numFourFloorCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de FourFloorCompany: ", error);
  }

  // Garage - validationCustom27
  try {
    numGarageCompany = (document.getElementById("validationCustom27").value);

    if (numGarageCompany == null || numGarageCompany == 0) {
      numGarageCompany == 0

      calculatorGarageCompany = (numGarageCompany*6.0);

      document.getElementById("garage-company").innerHTML = calculatorGarageCompany;

      // document.getElementById("sq-garage-company").innerHTML = numGarageCompany;
    } else {
      calculatorGarageCompany = (numGarageCompany*6.0);

      document.getElementById("garage-company").innerHTML = calculatorGarageCompany;

      // document.getElementById("sq-garage-company").innerHTML = numGarageCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de GarageCompany: ", error);
  }
  
  // Front Porch - validationCustom28
  try {
    numFrontPorchCompany = (document.getElementById("validationCustom28").value);

    if (numFrontPorchCompany == null || numFrontPorchCompany == 0) {
      numFrontPorchCompany == 0

      calculatorFrontPorchCompany = (numFrontPorchCompany*6.0);

      document.getElementById("frontporch-company").innerHTML = calculatorFrontPorchCompany;

      // document.getElementById("sq-frontporch-company").innerHTML = numFrontPorchCompany;
    } else {
      calculatorFrontPorchCompany = (numFrontPorchCompany*6.0);

      document.getElementById("frontporch-company").innerHTML = calculatorFrontPorchCompany;

      // document.getElementById("sq-frontporch-company").innerHTML = numFrontPorchCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de FrontPorchCompany: ", error);
  }

  // Extra Garage - validationCustom29
  try {
    numExtraGarageCompany = (document.getElementById("validationCustom29").value);

    if (numExtraGarageCompany == null || numExtraGarageCompany == 0) {
      numExtraGarageCompany == 0

      calculatorExtraGarageCompany = (numExtraGarageCompany*6.0);

      document.getElementById("extragarage-company").innerHTML = calculatorExtraGarageCompany;

      // document.getElementById("sq-extragarage-company").innerHTML = numExtraGarageCompany;
    } else {
      calculatorExtraGarageCompany = (numExtraGarageCompany*6.0);

      document.getElementById("extragarage-company").innerHTML = calculatorExtraGarageCompany;

      // document.getElementById("sq-extragarage-company").innerHTML = numExtraGarageCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de ExtraGarageCompany: ", error);
  }

  // Club House - validationCustom30
  try {
    numClubHouseCompany = (document.getElementById("validationCustom30").value);

    if (numClubHouseCompany == null || numClubHouseCompany == 0) {
      numClubHouseCompany == 0

      calculatorClubHouseCompany = (numClubHouseCompany*6.0);

      document.getElementById("clubhouse-company").innerHTML = calculatorClubHouseCompany;

      // document.getElementById("sq-clubhouse-company").innerHTML = numClubHouseCompany;
    } else {
      calculatorClubHouseCompany = (numClubHouseCompany*6.0);

      document.getElementById("clubhouse-company").innerHTML = calculatorClubHouseCompany;

      // document.getElementById("sq-clubhouse-company").innerHTML = numClubHouseCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de ClubHouseCompany: ", error);
  }

  // Pool House - validationCustom31
  try {
    numPoolHouseCompany = (document.getElementById("validationCustom31").value);

    if (numPoolHouseCompany == null || numPoolHouseCompany == 0) {
      numPoolHouseCompany == 0

      calculatorPoolHouseCompany = (numPoolHouseCompany*6.0);

      document.getElementById("poolhouse-company").innerHTML = calculatorPoolHouseCompany;

      // document.getElementById("sq-poolhouse-company").innerHTML = numPoolHouseCompany;
    } else {
      calculatorPoolHouseCompany = (numPoolHouseCompany*6.0);

      document.getElementById("poolhouse-company").innerHTML = calculatorPoolHouseCompany;

      // document.getElementById("sq-poolhouse-company").innerHTML = numPoolHouseCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de PoolHouseCompany: ", error);
  }

  // Maintenance Building - validationCustom32
  try {
    numMaitenanceBuildingCompany = (document.getElementById("validationCustom32").value);

    if (numMaitenanceBuildingCompany == null || numMaitenanceBuildingCompany == 0) {
      numMaitenanceBuildingCompany == 0

      calculatorMaintenanceBuildingCompany = (numMaitenanceBuildingCompany*6.0);

      document.getElementById("maintenancebuilding-company").innerHTML = calculatorMaintenanceBuildingCompany;

      // document.getElementById("sq-maintenanceb-company").innerHTML = numMaitenanceBuildingCompany;
    } else {
      calculatorMaintenanceBuildingCompany = (numMaitenanceBuildingCompany*6.0);

      document.getElementById("maintenancebuilding-company").innerHTML = calculatorMaintenanceBuildingCompany;

      // document.getElementById("sq-maintenanceb-company").innerHTML = numMaitenanceBuildingCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de MaintenanceBuildingCompany: ", error);
  }

  // Pavilion - validationCustom33
  try {
    numPavillionCompany = (document.getElementById("validationCustom33").value);

    if (numPavillionCompany == null || numPavillionCompany == 0) {
      numPavillionCompany == 0

      calculatorPavillionCompany = (numPavillionCompany*6.0);

      document.getElementById("pavilion-company").innerHTML = calculatorPavillionCompany;

      // document.getElementById("sq-pavilion-company").innerHTML = numPavillionCompany;
    } else {
      calculatorPavillionCompany = (numPavillionCompany*6.0);

      document.getElementById("pavilion-company").innerHTML = calculatorPavillionCompany;

      // document.getElementById("sq-pavilion-company").innerHTML = numPavillionCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de PavillionCompany: ", error);
  }

  // Dog Run Pavillion - validationCustom34
  try {
    numDogRunPavillionCompany = (document.getElementById("validationCustom34").value);

    if (numDogRunPavillionCompany == null || numDogRunPavillionCompany == 0) {
      numDogRunPavillionCompany == 0

      calculatorDogRunPavillionCompany = (numDogRunPavillionCompany*6.0);

      document.getElementById("dogrunpavilion-company").innerHTML = calculatorDogRunPavillionCompany;

      // document.getElementById("sq-dogrunp-company").innerHTML = numDogRunPavillionCompany;
    } else {
      calculatorDogRunPavillionCompany = (numDogRunPavillionCompany*6.0);

      document.getElementById("dogrunpavilion-company").innerHTML = calculatorDogRunPavillionCompany;

      // document.getElementById("sq-dogrunp-company").innerHTML = numDogRunPavillionCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de DogRunPavilionCompany: ", error);
  }

  // Smoking Pavillion - validationCustom35
  try {
    numSmokingPavillionCompany = (document.getElementById("validationCustom35").value);

    if (numSmokingPavillionCompany == null || numSmokingPavillionCompany == 0) {
      numSmokingPavillionCompany == 0

      calculatorSmokingPavillionCompany = (numSmokingPavillionCompany*6.0);

      document.getElementById("smokingpavilion-company").innerHTML = calculatorSmokingPavillionCompany;

      // document.getElementById("sq-smokingp-company").innerHTML = numSmokingPavillionCompany;
    } else {
      calculatorSmokingPavillionCompany = (numSmokingPavillionCompany*6.0);

      document.getElementById("smokingpavilion-company").innerHTML = calculatorSmokingPavillionCompany;

      // document.getElementById("sq-smokingp-company").innerHTML = numSmokingPavillionCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de SmokingPavilionCompany: ", error);
  }

  // Trash Compactor - validationCustom36
  try {
    numTrashCompactorCompany = (document.getElementById("validationCustom36").value);

    if (numTrashCompactorCompany == null || numTrashCompactorCompany == 0) {
      numTrashCompactorCompany == 0

      calculatorTrashCompactorCompany = (numTrashCompactorCompany*6.0);

      document.getElementById("trashcompactor-company").innerHTML = calculatorTrashCompactorCompany;

      // document.getElementById("sq-trashcompactor-company").innerHTML = numTrashCompactorCompany;
    } else {
      calculatorTrashCompactorCompany = (numTrashCompactorCompany*6.0);

      document.getElementById("trashcompactor-company").innerHTML = calculatorTrashCompactorCompany;

      // document.getElementById("sq-trashcompactor-company").innerHTML = numTrashCompactorCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de TrashCompactorCompany: ", error);
  }

  // Kayak Pavillion - validationCustom37
  try {
    numKayakPavillionCompany = (document.getElementById("validationCustom37").value);

    if (numKayakPavillionCompany == null || numKayakPavillionCompany == 0) {
      numKayakPavillionCompany == 0

      calculatorKayakPavillionCompany = (numKayakPavillionCompany*6.0);

      document.getElementById("kayakpavilion-company").innerHTML = calculatorKayakPavillionCompany;

      // document.getElementById("sq-kayakpavilion-company").innerHTML = numKayakPavillionCompany;
    } else {
      calculatorKayakPavillionCompany = (numKayakPavillionCompany*6.0);

      document.getElementById("kayakpavilion-company").innerHTML = calculatorKayakPavillionCompany;

      // document.getElementById("sq-kayakpavilion-company").innerHTML = numKayakPavillionCompany;
    } 

  } catch (error) {
    console.error("Error al realizar el calculo de KayakPavilionCompany: ", error);
  }



  // Suma Total Company Price

  var sumaTotalCompany = (
    calculatorFirstFloorCompany +
    calculatorSecondFloorCompany +
    calculatorThirdFloorCompany +
    calculatorFourFloorCompany +
    calculatorGarageCompany +
    calculatorFrontPorchCompany +
    calculatorExtraGarageCompany +
    calculatorClubHouseCompany +
    calculatorPoolHouseCompany +
    calculatorMaintenanceBuildingCompany +
    calculatorPavillionCompany +
    calculatorDogRunPavillionCompany +
    calculatorSmokingPavillionCompany +
    calculatorTrashCompactorCompany +
    calculatorKayakPavillionCompany
  );

  document.getElementById("company-total").innerHTML = sumaTotalCompany;


  // var sumaTotalSqCompany = (
  //   numFirstFloorCompany +
  //   numSecondFloorCompany +
  //   numThirdFloorCompany +
  //   numFourFloorCompany +
  //   numGarageCompany +
  //   numFrontPorchCompany +
  //   numExtraGarageCompany +
  //   numClubHouseCompany +
  //   numPoolHouseCompany +
  //   numMaitenanceBuildingCompany +
  //   numPavillionCompany +
  //   numDogRunPavillionCompany +
  //   numSmokingPavillionCompany +
  //   numTrashCompactorCompany +
  //   numKayakPavillionCompany
  // );

  // document.getElementById("sq-company-total").innerHTML = sumaTotalSqCompany;
    

}