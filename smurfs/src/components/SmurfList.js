import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "./actions";

import Smurf from "./Smurf";

const SmurfList = props => {
  console.log("smurfList", props);
  return (
    <div>
        <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="ThreeDots" color="#aa71b5" height="15" width="100" />
        ) : (
          "Load Smurf List"
        )}
      </button>
      {props.smurfs &&
        props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
      isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);
