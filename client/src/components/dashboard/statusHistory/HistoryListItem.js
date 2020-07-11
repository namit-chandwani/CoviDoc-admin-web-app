import React, { Component } from "react";
import PropTypes from "prop-types";

class HistoryListItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id, date , covidPatientCount, totalPatientCount, PPELevel, acceptingCovidPatients, acceptingNonCovidPatients, testsAvailableCount, offersFullMedicalCare} = this.props.historyEntry;
    return (
      <div style={this.getStyle()}>
        {date}
        {covidPatientCount}
        {totalPatientCount}
        {PPELevel}
        {acceptingCovidPatients}
        {acceptingNonCovidPatients}
        {testsAvailableCount}
        {offersFullMedicalCare}
      </div>
    );
  }
}

// PropTypes
HistoryListItem.propTypes = {
  historyEntry: PropTypes.object.isRequired
};

export default HistoryListItem;