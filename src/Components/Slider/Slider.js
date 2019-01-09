import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {

  constructor(props) {
    super();
    this.state = {
      images: props.images,
      currentIndex: 0,
      isCycleMode: false,
      canGoPrev: false,
      canGoNext: true
    };

    this.nextSlimHandler = this.nextSlimHandler.bind(this);
  }

  nextSlimHandler(event) {
    let newIndex = this.state.currentIndex;

    if (event.currentTarget.dataset.direction === "next") {
      if(this.state.currentIndex < this.state.images.length - 1) {
        newIndex = this.state.currentIndex + 1;
        this.setState({canGoPrev : true});
      }

      if(newIndex === this.state.images.length - 1){
        this.setState({canGoNext : false});
      }
    } else {
      if(this.state.currentIndex > 0) {
        newIndex = this.state.currentIndex - 1;
      this.setState({canGoNext : true});
    }

      if(newIndex === 0){
        this.setState({canGoPrev : false})
      }
    }
    this.setState({currentIndex: newIndex});
  }

  render() {
    return (
        <div className="slider">
          <div>
            <button disabled={!this.state.canGoPrev} data-direction="prev" onClick={this.nextSlimHandler}>PREV
            </button>
          </div>
          <div>
            {this.state.currentIndex}
            <img src={this.state.images[this.state.currentIndex]} alt=""/>
          </div>
          <div>
            <button disabled={!this.state.canGoNext} data-direction="next" onClick={this.nextSlimHandler}>NEXT
            </button>
          </div>
        </div>
    );
  }
}

export default Slider;
