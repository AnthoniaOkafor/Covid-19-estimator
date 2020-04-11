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

    impact: {
      get currentlyInfected() {
        return reportedCases * 10;
      },
      get infectionByRequestTime() {
        return this.currentlyInfected * (2 ** Math.floor(periodType / 3));
      }
    },
    severeImpact: {
      get currentlyInfected() {
        return data.reportedCases * 50;
      },
      get infectionByRequestTime() {
        return this.currentlyInfected * (2 ** Math.floor(periodType / 3));
      }
    }
  };
};


export default covid19ImpactEstimator;
