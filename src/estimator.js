const covid19ImpactEstimator = (data) => {
  const {
    region, periodType, timeToElapse, reportedCases, population, totalHospitalBed
  } = data;

  let impact;
  let severeImpact;

  return {
    data: {
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
    },
    impact: {
      currentlyInfected: (reportedCases * 10),
      infectionByRequestTime: (impact.currentlyInfected * 514)

    },
    severeImpact: {
      currentlyInfected: (reportedCases * 10),
      infectionByRequestTime: (severeImpact.currentlyInfected * 514)
    }
  };
};
export default covid19ImpactEstimator;
