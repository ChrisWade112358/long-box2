import React, { Component} from 'react';
import '../../Style/comicCard.css'

export default class ComicCard extends Component {
    
    buttonToggle = () => {
        if (this.props.result === true){
            return(
                <button onClick={this.props.action(this.props.comic)}>Add to Collection</button>
            )
        }
    }
    
    render(){
        return(
        <div className="comic-card">
            <div className="card-block">
                <h2>{`${this.props.comic.title}`}</h2>
                <img src={`${this.props.comic.images[0].path}/portrait_uncanny.jpg`} />
                <p>{`${this.props.comic.description}`}</p>
                {this.buttonToggle()}
                
            </div>
        </div>
        )
    }
} 
    
    

    



