const covid19ImpactEstimator = (data) => {
  const {
    reportedCases, periodType
  } = data;

  let months;
  let weeks;
  let days;

  if (periodType === 'months') {
    days = months * 30;
  } else if (periodType === 'weeks') {
    days = weeks * 7;
  } else {
    return days;
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
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(periodType / 3))

    },
    severeImpact: {
      currentlyInfected: () => reportedCases * 50,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(periodType / 3))
    }
  };
};


export default covid19ImpactEstimator;
