const covid19ImpactEstimator = (data) => {
  const {
    reportedCases
  } = data;


  let numOfinfected;

  if (data.periodType === 'months') {
    numOfinfected = data.timeToElapse * 30;
  } else if (data.periodType === 'weeks') {
    numOfinfected = data.timeToElapse * 7;
  } else if (data.periodType === 'days') {
    numOfinfected = data.timeToElapse;
  }

  return {

    impact: {
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(numOfinfected / 3))
    },
    severeImpact: {
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(numOfinfected / 3))
    }
  };
};


export default covid19ImpactEstimator;
