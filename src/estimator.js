const covid19ImpactEstimator = (data) => {
  const {
    reportedCases
  } = data;

  let impact;
  let severeImpact;
  let months;
  let weeks;
  let days;

  if (months) {
    days = months * 30;
  } else if (weeks) {
    days = weeks * 7;
  }

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
      infectionByRequestTime: (impact.currentlyInfected * (2 ** Math.floor(days / 3)))

    },
    severeImpact: {
      currentlyInfected: (reportedCases * 50),
      infectionByRequestTime: (severeImpact.currentlyInfected * (2 ** Math.floor(days / 3)))
    }
  };
};
export default covid19ImpactEstimator;
