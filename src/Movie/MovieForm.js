import React from 'react';

// Black Panther
// King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda
// http://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDescChange(event) {
    this.setState({ description: event.target.value });
  }

  handleImageChange(event) {
    this.setState({ image: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddMovie(
      this.state.title,
      this.state.description,
      this.state.image
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>
          Movie Title:{' '}
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </span>
        <span>
          Movie Description:{' '}
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleDescChange}
          />
        </span>
        <span>
          Image:{' '}
          <input
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
        </span>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MovieForm;
