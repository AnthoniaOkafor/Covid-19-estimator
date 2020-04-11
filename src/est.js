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

  return {

    impact: {
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(numOfInfected / 3))
    },
    severeImpact: {
      currentlyInfected: () => reportedCases * 10,
      infectionByRequestTime: () => this.currentlyInfected * (2 ** Math.floor(numOfInfected / 3))
    }
  };
};


export default covid19ImpactEstimator;
