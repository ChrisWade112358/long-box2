import React, { Component} from 'react';


export default class ComicCard extends Component {
    
    checkBoxToggle = () => {
        if(this.props.comic.likes === 0){
            return(
                <div className="like-box">
                <h3>Like this Comic</h3>
                <input type="checkbox"onChange={this.props.likeComic} value={this.props.comic.id} />
                </div>
            )
            
        }

        else{
            return(
                <div className="like-box">
                <h3 style={{color: 'red'}}>I LOVE THIS COMIC!!!!!!</h3>
                <input type="checkbox" checked= {true} onChange={this.props.dislikeComic} />
                </div>
            )
            
        }     
    }
    
    render(){
        return(
        <div className="comic-card">
            <div className="card-block">
                <h2>{`${this.props.comic.title}`}</h2>
                <img src={`${this.props.comic.images[0].path}/portrait_uncanny.jpg`} alt="Comic" />
                <p>{`${this.props.comic.description}`}</p>
                {this.checkBoxToggle()}
                
            </div>
        </div>
        )
    }
} 
    
    

    



