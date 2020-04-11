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
    estimate: {
      impact: {
        currentlyInfected: () => reportedCases * 10,
        infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(periodType / 3))
      },
      severeImpact: {
        currentlyInfected: () => reportedCases * 50,
        infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(periodType / 3))
      }
    }
  };
};


export default covid19ImpactEstimator;
