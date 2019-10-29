import React from 'react';
import './reset.css';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.dropdown = React.createRef()
  }

toggleShow = () => {
  console.log(this.dropdown.current)
  let {current} =this.dropdown
  if(current.classList.contains('show-animation')) {
    current.classList.add('hide-animation')
    current.classList.remove('show-animation')
  } else {
    current.classList.add('show-animation')
    current.classList.remove('hide-animation')
  }
}

 render(){
  return (
    <div>
      <div id ='image-container'>
        <div className='header'>
          <div className='logo'>Potato insurance</div>
        <div id="button-container">
        </div>
        <div className ='dropdown' ref={this.dropdown}>
      <div className='dropdown-button'>Home</div>
        <div className='dropdown-button'>About</div>
        <div className='dropdown-button'>Services</div>
        <div className='dropdown-button'>Contact</div>
      </div>
          <div className='buttons-container'>
          <div className='button'>Farmers</div>
          <div className='button'>Famous potatoes who use us</div>
          <div className='button'>About</div>
          <div className='button'>Potatoes near you</div>
          <div className='button'>Asses your potato</div>
          </div>
          <i id="hamburger"className="fas fa-bars fa-2x" onClick={this.toggleShow}/>

        </div>
        <div className="center">
        <div className='welcome'>Welcome Potato Lovers!</div>
          <div className='insure'>Please Insure your Potato</div>
          <div className='clickhere'>
            <p>Click Here to Insure your Potato!</p></div>

          </div>
    

      </div> 
    </div>
  );
}
}

export default App;
