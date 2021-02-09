import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    state={
        city:""
    }

    componentDidMount(preProps,prevState){
        if(prevState !== this.state.city){
            this.setState({city:this.state.city})
        }
    }

    onSumbit = e =>{
        e.preventDefault();
        if(this.state.city === ''){
            alert("City can not be empty")
        }else{
            this.props.searchCity(this.state.city)
        }

        this.setState({city:''})
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});


    render() {
        return (
            <div className="SearchBar"> 
                <div className="SearchChilds">
                    <h5 className="text-white">
                        Search weather on your city
                    </h5>
                    <form onSubmit={this.onSumbit} className="formSearchCity">
                        <input type="text" name="city" id="inputSearchCity" onChange={this.onChange} placeholder="Search"   />
                        <button type="submit" className="btn btn-outline-info text-white">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
