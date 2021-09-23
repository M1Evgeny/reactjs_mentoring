import React from 'react';
import './ModalWindow.css';
import stubs from '../movie-list-container/mockedMovies.json';

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id ? this.props.id : '',
            title: '',
            releseDate: '',
            movieUrl: '',
            rating: '',
            runtime: '',
            overview: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if(this.state.id !== ''){
            const movie = stubs.filter(movie => movie.id === this.props.id)[0];
            this.setState({
                title: movie.title,
                releseDate: movie.release_date,
                movieUrl: movie.movieUrl ? movie.movieUrl : '',
                rating: movie.vote_average,
                runtime: movie.runtime,
                overview: movie.overview
            });
            console.log(movie);
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    
    render(){
        return ( 
            <div hidden={!this.props.show} >
                <div className="modal-background" onClick={(e) => this.props.handleModalClose(e)} style={{height: this.props.modalHeight}}>
                    <div className="modal-card">
                        <div className="modal__close">
                            <button type="button" className="close" title="Close" >X</button>
                        </div>
                        <h1 className="modal-title">{this.props.modalTitle}</h1>
                        <form className="modal-form" onSubmit={this.handleSubmit}>
                            <fieldset className="modal-fieldset">
                                <label className="modal-label">
                                    Title
                                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} />
                                </label>
                                <label className="modal-label-second">
                                    RELEASE DATE
                                    <input type="date" name="releseDate" placeholder="yyyy-mm-dd" value={this.state.releseDate} onChange={this.handleInputChange} />
                                </label>
                            </fieldset>
                            <fieldset className="modal-fieldset">
                                <label className="modal-label">
                                    movie url
                                    <input type="url" name="movieUrl" placeholder="https:///" value={this.state.movieUrl} onChange={this.handleInputChange} />
                                </label>
                                <label className="modal-label-second">
                                    RATING
                                    <input type="number" name="rating" placeholder="7.8" value={this.state.rating} onChange={this.handleInputChange} />
                                </label>
                            </fieldset>
                            <fieldset className="modal-fieldset">
                                <label className="modal-label">
                                    genre
                                    <select multiple>
                                        <option value="crime" defaultValue>crime</option>
                                        <option value="horror" defaultValue>horror</option>
                                    </select>
                                </label>
                                <label className="modal-label-second">
                                    RUNTIME
                                    <input type="number" name="runtime" placeholder="minutes" value={this.state.runtime} onChange={this.handleInputChange} />
                                </label>
                            </fieldset>
                            <fieldset className="modal-fieldset">
                                <label className="modal-label">
                                    OVERVIEW
                                    <textarea className="overview-input" type="text" name="overview" placeholder="Movie description" value={this.state.overview}  onChange={this.handleInputChange} />
                                </label>
                            </fieldset>
                            <p className="modal-buttons">
                                <input className="modal-reset" type="reset" value="reset" />
                                <input className="modal-submit" type="submit" value="submit" />
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWindow;