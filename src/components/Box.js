import React, { Component } from 'react';

class Box extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: null,
    };
  }

  handleColorClick = (color) => {
    this.setState({ selectedColor: color });
  };
  handlePickColorClick = () => {
    if (this.state.selectedColor) {
      // You can perform an action with the selected color here
      // For now, we'll just alert the selected color
      alert(`Selected Color: ${this.state.selectedColor}`);
    } else {
      alert('Please select a color first.');
    }
  };

  render() {
    const boxStyle = {
      width: '500px',
      height: '500px',
      backgroundColor: '#CBC3E3',
      border: '2px solid black',
      borderRadius: '5px',
      margin: '40px',
      marginLeft:'35%',
      padding: '10px',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
    };
    
    const innerBoxStyle = {
      width: '300px',
      height: '300px',
      backgroundColor: '#FCD7DE',
      border: '2px solid black',
      borderRadius: '5px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    const buttonStyle = {
      backgroundColor: this.state.selectedColor || 'gray',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    };
    const head={
      color:'black',
      fontSize:'40px',
    }

    const colors = [
      '#FF5733',
      '#F760FF',
      '#33FF57',
      '#3366FF',
      '#FFFF33',
      'brown',
      '#ffe6e3',
      'purple',
      'orange',
      'aliceblue',
      
    ];

    return (
      <div style={boxStyle}>
        <p style={head}><strong>Color Picker</strong></p>
        <div style={innerBoxStyle}>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: color,
                border: '1px solid black',
                margin: '2px',
                paddingTop:'4px',
                marginTop:'30%',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={() => this.handleColorClick(color)}
            ></div>
          ))}
           <button style={buttonStyle} onClick={this.handlePickColorClick}>
          Pick a Color
        </button>
        </div>
       
      </div>
    );
  }
}

export default Box;
