import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {input: ''};
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }    

    update(e){
        this.setState({input: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push(`/videos/search?query=${this.state.input}`)
        this.setState({input:''});
    }

    render() {
        return (
            <div className = 'search-bar'>
                <form  onSubmit = {this.handleSubmit}>
                    <input 
                        type = "text"
                        onChange = {this.update}
                        placeholder="Search" />
                    <button type='submit'>
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;