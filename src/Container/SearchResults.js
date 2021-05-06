import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComicCard  from '../Component/card-components/ComicCard'
import {likeComic} from '../Redux/Actions/Comic'
import {dislikeComic} from '../Redux/Actions/Comic'



class SearchResults extends Component {


    likeComic = (event) => {
        let comicId = event.target.value
        if(comicId !== undefined){
            this.props.likeComic(comicId)
        }
        else{
            return
        }
        
        
    }

    dislikeComic = (event) => {
        let comicId = event.target.value
        if(comicId !== undefined){
            this.props.dislikeComic(comicId)
        }
        else{
            return
        }
        
        
    }
       
    render(){
        const {results} = this.props;

        
    
        return(
            <div className="results">
                {results.length > 0 ? <h3>Search Results</h3>: ""}
                <div className="results-container">
                {results.map(comic => <ComicCard
                                            key={comic.id}  
                                            comic={comic}  
                                            likeComic={this.likeComic}
                                            dislikeComic={this.dislikeComic} 
                                             />
                    )
                }
                    
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        
        results: state.Comics
    })
}






export default connect(mapStateToProps, { likeComic, dislikeComic })(SearchResults)