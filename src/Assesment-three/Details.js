import React from 'react'
import './style.css'
class Details extends React.Component {
  render() {
    return (
      <>
      <div id="center1">
      <h1 id="detailheadstyle">EMPLOYEE FEEDBACK DATA</h1>
      </div>
        <div id="flex">
        
          {this.props.details.map((value, index) => {

            return (

              <p id="details">
                Name: {value.name} || Department:{value.department} || Rating:{value.rating}
              </ p>

            )

          })}
        </div>

        <div class="back">
          <button id="back" onClick={() => this.props.back()}>
            Go Back
          </button>
        </div>

      </>

    )
  }
}

export default Details