import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchResults from '../../Container/SearchResults';
import { getComics } from '../../Redux/Actions/Search'
class searchComics extends Component {
    constructor(){
        super()
        this.state = {
            searchText: '',
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.getComics(this.state)
    }
    
    render(){
        return(
            <div className="wrapper">
                <div className="comic-search-wrapper">
                    <h1>getComics</h1>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            type="text" 
                            name="searchText" 
                            value={this.state.searchText} 
                            onChange={this.handleChange} 
                            placeholder="search" />
                        <button 
                            type="submit" 
                            className="btn-default" 
                            id="btn-comicSearch-form">Search</button>
                    </form>
                </div>
                <SearchResults />
            </div>
            

        )
    }
}

export default connect(null, {getComics})(searchComics)