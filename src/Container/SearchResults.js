import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchResults extends Component {

    render(){
        return(
            <div className="results">
                <h3>Search Results</h3>
                <div className="results-container">
                    
                </div>

            </div>
        )
    }
}

mapStateToProps = state => {
    results: state.result
}
export default connect(mapStateToProps)(SearchResults)