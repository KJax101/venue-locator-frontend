import React from "react";
import { fetchVenues } from "../../actions/search_actions";
import { connect } from "react-redux";
export class Query extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "pizza",
      zipCode: "94803",
      radius: "30"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("Change in Text");
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submit button clicked");
    // this.props.setTerms(this.state.keyword, this.state.zipCode, this.state.radius);
    console.log(this.state.keyword, this.state.zipCode, this.state.radius);
    this.props.fetchVenues(
      this.state.keyword,
      this.state.zipCode,
      this.state.radius
    );
  }

  render() {
    return (
      <div className="query-container">
        <div>
          <h1 className="panel-title">
            <strong>
              <i className="fa fa-newspaper-o" aria-hidden="true" /> Query
            </strong>
          </h1>
        </div>

        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Keyword</strong>
              </h4>
              <input
                type="text"
                className="form-control"
                id="keyword"
                value={this.state.term}
                onChange={this.handleChange}
                required
              />

              <h4>
                <strong>Zip Code</strong>
              </h4>
              <input
                type="number"
                value={this.state.start}
                className="form-control"
                id="zipCode"
                onChange={this.handleChange}
                required
              />

              <h4>
                <strong>Radius (miles)</strong>
              </h4>
              <select
                className="form-control select-radius"
                id="radius"
                value={this.state.radius}
                onChange={this.handleChange}
              >
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
          </form>
        </div> 


      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchVenues: function(keyword, zipcode, radius) {
    dispatch(fetchVenues(keyword, zipcode, radius));
  }
});
// export default Query;
export default connect(
  null,
  mapDispatchToProps
)(Query);
