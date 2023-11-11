/**
 * Variables
 */
let numFinishedBasament = null;
let calculatorFinished = null;
//
let numUnifinishedBasament = null;
let calculatorUnifinished = null;
//
let numGarage = null;
let calculatorGarage = null;
//
let numFirstFloor = null;
let calculatorFirstFloor = null;
//
let numSecondFloor = null;
let calculatorSecondFloor = null;
//
let numThirdFloor = null;
let calculatorThirdFloor = null;
//
let numFrontPorch = null;
let calculatorFrontPorch = null;
//
let numRearPorch = null;
let calculatorRearPorch = null;
//
let numThirdGarage = null;
let calculatorThirdGarage = null;
//
let numBonusRoom = null;
let calculatorBonusRoom = null;
//
let numCarpetStairs = null;
let calculatorCarpetStairs = null;
//
let numOakStairs = null;
let calculatorOakStairs = null;
//
let numTjiJoist = null;
let calculatorTjiJoist = null;
//
let numFloorTrusses = null;
let calculatorFloorTrusses = null;
//
let numRoofTrusses = null;
let calculatorRoofTrusses = null;

function residentialCalculator() {

  // Presupuesto para Blackstone NC ® - Residencial

  /**
   * Precio Finished Basament - ValidationCustom08
   */
  try {
    numFinishedBasament = (document.getElementById("validationCustom08").value);

    if (numFinishedBasament == null || numFinishedBasament == 0) {
      numFinishedBasament == 0
      
      calculatorFinished = (numFinishedBasament*4.75);

      document.getElementById("finished-basament").innerHTML = calculatorFinished;

      // document.getElementById("sq-finished-basament").innerHTML = numFinishedBasament;
    } else {
      calculatorFinished = (numFinishedBasament*4.75);

      document.getElementById("finished-basament").innerHTML = calculatorFinished;

      // document.getElementById("sq-finished-basament").innerHTML = numFinishedBasament;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de Finished Basament', error);
  };

  /**
   * Precio Unifinished Basament - ValidationCustom09
   */
  try {

    numUnifinishedBasament = (document.getElementById("validationCustom09").value);

    if (numUnifinishedBasament == null || numUnifinishedBasament == 0) {
      numUnifinishedBasament == 0
      
      calculatorUnifinished = (numUnifinishedBasament*4.75);

      document.getElementById("unifinished-basament").innerHTML = calculatorUnifinished;

      // document.getElementById("sq-unifinished-basament").innerHTML = numUnifinishedBasament;
    } else {
      calculatorUnifinished = (numUnifinishedBasament*4.75);

      document.getElementById("unifinished-basament").innerHTML = calculatorUnifinished;

      // document.getElementById("sq-unifinished-basament").innerHTML = numUnifinishedBasament;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de Unifinished Basament', error);
  };

  /**
   * Price Garage - ValidationCustom10
   */
  try {

    numGarage = (document.getElementById("validationCustom10").value);

    if (numGarage == null || numGarage == 0) {
      numGarage == 0
      
      calculatorGarage = (numGarage*4.75);

      document.getElementById("garage").innerHTML = calculatorGarage;

      // document.getElementById("sq-garage").innerHTML = numGarage;
    } else {
      calculatorGarage = (numGarage*4.75);

      document.getElementById("garage").innerHTML = calculatorGarage;

      // document.getElementById("sq-garage").innerHTML = numGarage;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de Garage', error);
  };

  /**
   * Price 1st Floor - ValidationCustom11
   */
  try {

    numFirstFloor = (document.getElementById("validationCustom11").value);

    if (numFirstFloor == null || numFirstFloor == 0) {
      numFirstFloor == 0
      
      calculatorFirstFloor = (numFirstFloor*4.75);

      document.getElementById("sq-foot-1").innerHTML = calculatorFirstFloor;

      // document.getElementById("sq-first-floor").innerHTML = numFirstFloor;
    } else {
      calculatorFirstFloor = (numFirstFloor*4.75);

      document.getElementById("sq-foot-1").innerHTML = calculatorFirstFloor;

      // document.getElementById("sq-first-floor").innerHTML = numFirstFloor;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de FirstFloor', error);
  };

  /**
   * Price 2nd Floor - ValidationCustom12
   */
  try {

    numSecondFloor = (document.getElementById("validationCustom12").value);

    if (numSecondFloor == null || numSecondFloor == 0) {
      numSecondFloor == 0
      
      calculatorSecondFloor = (numSecondFloor*4.75);

      document.getElementById("sq-foot-2").innerHTML = calculatorSecondFloor;

      // document.getElementById("sq-second-floor").innerHTML = numSecondFloor;
    } else {
      calculatorSecondFloor = (numSecondFloor*4.75);

      document.getElementById("sq-foot-2").innerHTML = calculatorSecondFloor;

      // document.getElementById("sq-second-floor").innerHTML = numSecondFloor;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de SecondFloor', error);
  };

  /**
   * Price 3rd Floor - ValidationCustom13
   */
  try {

    numThirdFloor = (document.getElementById("validationCustom13").value);

    if (numThirdFloor == null || numThirdFloor == 0) {
      numThirdFloor == 0
      
      calculatorThirdFloor = (numThirdFloor*4.75);

      document.getElementById("sq-foot-3").innerHTML = calculatorThirdFloor;

      // document.getElementById("sq-third-floor").innerHTML = numThirdFloor;
    } else {
      calculatorThirdFloor = (numThirdFloor*4.75);

      document.getElementById("sq-foot-3").innerHTML = calculatorThirdFloor;

      // document.getElementById("sq-third-floor").innerHTML = numThirdFloor;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de ThirdFloor', error);
  };

  /**
   * Price Front Porch - ValidationCustom14
   */
  try {

    numFrontPorch = (document.getElementById("validationCustom14").value);

    if (numFrontPorch == null || numFrontPorch == 0) {
      numFrontPorch == 0
      
      calculatorFrontPorch = (numFrontPorch*4.75);

      document.getElementById("front-porch").innerHTML = calculatorFrontPorch;

      // document.getElementById("sq-front-porch").innerHTML = numFrontPorch;
    } else {
      calculatorFrontPorch = (numFrontPorch*4.75);

      document.getElementById("front-porch").innerHTML = calculatorFrontPorch;

      // document.getElementById("sq-front-porch").innerHTML = numFrontPorch;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de FrontPorch', error);
  };

  /**
   * Price Rear Porch - ValidationCustom15
   */
  try {

    numRearPorch = (document.getElementById("validationCustom15").value);

    if (numRearPorch == null || numRearPorch == 0) {
      numRearPorch == 0
      
      calculatorRearPorch = (numRearPorch*4.75);

      document.getElementById("rear-porch").innerHTML = calculatorRearPorch;

      // document.getElementById("sq-rear-porch").innerHTML = numRearPorch;
    } else {
      calculatorRearPorch = (numRearPorch*4.75);

      document.getElementById("rear-porch").innerHTML = calculatorRearPorch;

      // document.getElementById("sq-rear-porch").innerHTML = numRearPorch;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de RearPorch', error);
  };

  /**
   * Price Third Garage - ValidationCustom16
   */
  try {

    numThirdGarage = (document.getElementById("validationCustom16").value);

    if (numThirdGarage == null || numThirdGarage == 0) {
      numThirdGarage == 0
      
      calculatorThirdGarage = (numThirdGarage*4.75);

      document.getElementById("third-garage").innerHTML = calculatorThirdGarage;

      // document.getElementById("sq-third-garage").innerHTML = numThirdGarage;
    } else {
      calculatorThirdGarage = (numThirdGarage*4.75);

      document.getElementById("third-garage").innerHTML = calculatorThirdGarage;

      // document.getElementById("sq-third-garage").innerHTML = numThirdGarage;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de ThirdGarage', error);
  };

  /**
   * Price Bonus Room - ValidationCustom17
   */
  try {

    numBonusRoom = (document.getElementById("validationCustom17").value);

    if (numBonusRoom == null || numBonusRoom == 0) {
      numBonusRoom == 0
      
      calculatorBonusRoom = (numBonusRoom*4.75);

      document.getElementById("bonus-room").innerHTML = calculatorBonusRoom;

      // document.getElementById("sq-bonus-room").innerHTML = numBonusRoom;
    } else {
      calculatorBonusRoom = (numBonusRoom*4.75);

      document.getElementById("bonus-room").innerHTML = calculatorBonusRoom;

      // document.getElementById("sq-bonus-room").innerHTML = numBonusRoom;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de BonusRoom', error);
  };

  /**
   * Price Carpet Stairs - ValidationCustom18
   */
  try {

    numCarpetStairs = (document.getElementById("validationCustom18").value);

    if (numCarpetStairs == null || numCarpetStairs == 0) {
      numCarpetStairs == 0
      
      calculatorCarpetStairs = (numCarpetStairs*4.75);

      document.getElementById("carpet-stairs").innerHTML = calculatorCarpetStairs;

      // document.getElementById("sq-carpet-stairs").innerHTML = numCarpetStairs;
    } else {
      calculatorCarpetStairs = (numCarpetStairs*4.75);

      document.getElementById("carpet-stairs").innerHTML = calculatorCarpetStairs;

      // document.getElementById("sq-carpet-stairs").innerHTML = numCarpetStairs;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de CarpetStairs', error);
  };

  /**
   * Price OAK Stairs - ValidationCustom19
   */
  try {

    numOakStairs = (document.getElementById("validationCustom19").value);

    if (numOakStairs == null || numOakStairs == 0) {
      numOakStairs == 0
      
      calculatorOakStairs = (numOakStairs*4.75);

      document.getElementById("oak-stairs").innerHTML = calculatorOakStairs;

      // document.getElementById("sq-oak-stairs").innerHTML = numOakStairs;
    } else {
      calculatorOakStairs = (numOakStairs*4.75);

      document.getElementById("oak-stairs").innerHTML = calculatorOakStairs;

      // document.getElementById("sq-oak-stairs").innerHTML = numOakStairs;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de OAKStairs', error);
  };

  /**
   * Price TJI Stairs - ValidationCustom20
   */
  try {

    numTjiJoist = (document.getElementById("validationCustom20").value);

    if (numTjiJoist == null) {
      numTjiJoist == 0

      calculatorTjiJoist = (numTjiJoist*4.75);

      document.getElementById("tji-joist").innerHTML = calculatorTjiJoist;

      // document.getElementById("sq-tji-stairs").innerHTML = numTjiJoist;
    } else {
      calculatorTjiJoist = (numTjiJoist*4.75);

      document.getElementById("tji-joist").innerHTML = calculatorTjiJoist;

      // document.getElementById("sq-tji-stairs").innerHTML = numTjiJoist;
    }
  } catch (error) {
    console.error('Error al realizar el calculo de TJIJoist', error);
  };

  /**
   * Price Floor Trusses - ValidationCustom21
   */
  try {

  numFloorTrusses = (document.getElementById("validationCustom21").value);

  

  if (numFloorTrusses == null || numFloorTrusses == 0) {
    numFloorTrusses == 0
    
    calculatorFloorTrusses = (numFloorTrusses*4.75);

    document.getElementById("floor-trusses").innerHTML = calculatorFloorTrusses;

    // document.getElementById("sq-floor-trusses").innerHTML = numFloorTrusses;

  } else {
    calculatorFloorTrusses = (numFloorTrusses*4.75);

    document.getElementById("floor-trusses").innerHTML = calculatorFloorTrusses;
   
    // document.getElementById("sq-floor-trusses").innerHTML = numFloorTrusses;
  }
  } catch (error) {
    console.error('Error al realizar el calculo de FloorTrusses', error);
  };

  /**
   * Price Roof Trusses - ValidationCustom22
   */
  try {

    numRoofTrusses = (document.getElementById("validationCustom22").value);

    if (numRoofTrusses == null || numRoofTrusses == 0) {
      numRoofTrusses == 0
      
      calculatorRoofTrusses = (numRoofTrusses*4.75);

      document.getElementById("roof-trusses").innerHTML = calculatorRoofTrusses;

      // document.getElementById("sq-roof-trusses").innerHTML = numRoofTrusses;

    } else {
      calculatorRoofTrusses = (numRoofTrusses*4.75);
  
      document.getElementById("roof-trusses").innerHTML = calculatorRoofTrusses;

      // document.getElementById("sq-roof-trusses").innerHTML = numRoofTrusses;

    }
  } catch (error) {
    console.error('Error al realizar el calculo de RoofTrusses', error);
  };


  // Suma Total Residencial
  
  var sumaTotalResidential = (
    calculatorFinished + 
    calculatorUnifinished + 
    calculatorGarage + 
    calculatorFirstFloor + 
    calculatorSecondFloor + 
    calculatorThirdFloor + 
    calculatorFrontPorch +
    calculatorRearPorch + 
    calculatorThirdGarage +
    calculatorBonusRoom +
    calculatorCarpetStairs +
    calculatorOakStairs +
    calculatorTjiJoist +
    calculatorFloorTrusses +
    calculatorRoofTrusses);

  document.getElementById("residential-total").innerHTML = sumaTotalResidential;
   
  // Suma Total Residencial
  
  // var sumaTotalSquareFoot = (
  // parseInt(numFinishedBasament) +
  // parseInt(numUnifinishedBasament) +
  // parseInt(numGarage) +
  // parseInt(numFirstFloor) +
  // parseInt(numSecondFloor) +
  // parseInt(numThirdFloor) +
  // parseInt(numFrontPorch) +
  // parseInt(numRearPorch) +
  // parseInt(numThirdFloor) +
  // parseInt(numBonusRoom) +
  // parseInt(numCarpetStairs) +
  // parseInt(numOakStairs) +
  // parseInt(numTjiJoist) +
  // parseInt(numFloorTrusses) +
  // parseInt(numRoofTrusses)
  // );

  // document.getElementById("sq-total-residential").innerHTML = sumaTotalSquareFoot;
  // console.log('La suma total de los inputs es: ', sumaTotalSquareFoot);

};
  
    



  