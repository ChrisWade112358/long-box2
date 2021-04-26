import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComicCard  from '../Component/card-components/ComicCard'
import {AddComicToCollection} from '../Redux/Actions/Comic'

class SearchResults extends Component {
       
    render(){
        const {results} = this.props;
    
        return(
            <div className="results">
                <h3>Search Results</h3>
                <div className="results-container">
                {results.map(comic => <ComicCard key={comic.id} comic={comic} action={this.props.AddComicToCollection} result={true} />)}
                    
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        
        results: state.Search
    })
}






export default connect(mapStateToProps, { AddComicToCollection })(SearchResults)