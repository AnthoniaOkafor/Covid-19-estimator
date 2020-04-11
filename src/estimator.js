const dataInput = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data) => {
  const {
    reportedCases
  } = data;


  let numOfInfected;

  if (data.periodType === 'months') {
    numOfInfected = data.timeToElapse * 30;
  } else if (data.periodType === 'weeks') {
    numOfInfected = data.timeToElapse * 7;
  } else if (data.periodType === 'days') {
    numOfInfected = data.timeToElapse;
  }

  const impact = {
    currentlyInfected: 0,
    infectionByRequestTime: 0
  };

  const severeImpact = {
    currentlyInfected: 0,
    infectionByRequestTime: 0
  };


  // challenge 1 - working on impact and severeImpact objects
  const getDetails = (details, figures) => details * figures;
  const factorOfTwo = 2 ** Math.floor(numOfInfected / 3);

  impact.currentlyInfected = getDetails(reportedCases, 10);
  impact.infectionByRequestTime = getDetails(impact.currentlyInfected, factorOfTwo);

  severeImpact.currentlyInfected = getDetails(reportedCases, 50);
  severeImpact.infectionByRequestTime = getDetails(severeImpact.currentlyInfected, factorOfTwo);

  return {
    data,
    impact,
    severeImpact
  };
};

covid19ImpactEstimator(dataInput);
export default covid19ImpactEstimator;
