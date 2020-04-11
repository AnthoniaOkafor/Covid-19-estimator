const covid19ImpactEstimator = (data) => {
  const {
    reportedCases
  } = data;

  if (data.periodType === 'months') {
    data.periodType *= 30;
  } else if (data.periodType === 'weeks') {
    data.periodType *= 7;
  } else if (data.periodType === 'days') {
    return data.periodType;
  }

  return {

    impact: {
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(data.periodType / 3))
    },
    severeImpact: {
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(data.periodType / 3))
    }
  };
};


export default covid19ImpactEstimator;
