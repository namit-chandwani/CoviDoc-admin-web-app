import React, { Component } from "react";
import PropTypes from "prop-types";

class PatientListItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id, name } = this.props.patient;
    return (
      <div style={this.getStyle()}>
        {name}
      </div>
    );
  }
}

// PropTypes
PatientListItem.propTypes = {
  patient: PropTypes.object.isRequired
};

export default PatientListItem;