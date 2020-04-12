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
    reportedCases, periodType, timeToElapse, totalHospitalBeds
  } = data;


  let numOfInfected;

  if (periodType === 'months') {
    numOfInfected = timeToElapse * 30;
  } else if (periodType === 'weeks') {
    numOfInfected = timeToElapse * 7;
  } else if (periodType === 'days') {
    numOfInfected = timeToElapse;
  }

  const impact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0,
    severeCasesByRequestedTime: 0,
    hospitalBedsByRequestedTime: 0
  };

  const severeImpact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0,
    severeCasesByRequestedTime: 0,
    hospitalBedsByRequestedTime: 0
  };


  // challenge 1 - working on currentlyInfected and infectionsByRequestedTime
  const getDetails = (details, figures) => details * figures;
  const factorOfTwo = 2 ** Math.trunc(numOfInfected / 3);

  impact.currentlyInfected = getDetails(reportedCases, 10);
  impact.infectionsByRequestedTime = getDetails(impact.currentlyInfected, factorOfTwo);

  severeImpact.currentlyInfected = getDetails(reportedCases, 50);
  severeImpact.infectionsByRequestedTime = getDetails(severeImpact.currentlyInfected, factorOfTwo);


  // challenge 2 - working on severeCasesByRequestedTime and hospitalBedsByRequestedTime
  const p15 = 0.15;
  const findImpactSevereCases = getDetails(impact.infectionsByRequestedTime, p15);
  const findSevereImpactSevereCases = getDetails(severeImpact.infectionsByRequestedTime, p15);
  impact.severeCasesByRequestedTime = Math.trunc(findImpactSevereCases);
  severeImpact.severeCasesByRequestedTime = Math.trunc(findSevereImpactSevereCases);

  const numAvailBeds = getDetails(totalHospitalBeds, 0.35);
  const findSevImpactHospitalBeds = numAvailBeds - severeImpact.severeCasesByRequestedTime;
  impact.hospitalBedsByRequestedTime = Math.trunc(numAvailBeds - impact.severeCasesByRequestedTime);
  severeImpact.hospitalBedsByRequestedTime = Math.trunc(findSevImpactHospitalBeds);

  return {
    data,
    impact,
    severeImpact
  };
};

covid19ImpactEstimator(dataInput);
export default covid19ImpactEstimator;
