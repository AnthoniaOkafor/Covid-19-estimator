const covid19ImpactEstimator = (data) => {
  const {
    reportedCases
  } = data;

  let periodType;

  if (periodType === 'months') {
    periodType *= 30;
  } else if (periodType === 'weeks') {
    periodType *= 7;
  } else if (periodType === 'days') {
    return periodType;
  }

  return {

    impact: {
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(periodType / 3))
    },
    severeImpact: {
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(periodType / 3))
    }
  };
};


export default covid19ImpactEstimator;
