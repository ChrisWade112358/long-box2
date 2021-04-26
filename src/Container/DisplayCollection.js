import React, { Component } from 'react'
import { connect } from 'react-redux';
import ComicCard  from '../Component/card-components/ComicCard'

class DisplayCollection extends Component {
    render() {
        const {results} = this.props;
        return (
            <div>
                <div className="results-container">
                {results.map(comic => <ComicCard key={comic.id} comic={comic} action={this.props.AddComicToCollection} result={true} />)}    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        
        results: state.Collection,
        user: state.Users
    })
}

export default connect(mapStateToProps,)(DisplayCollection)

