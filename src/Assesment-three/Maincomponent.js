import React from 'react'
import './style.css'
import Details from './Details'

class Maincomponent extends React.Component {
    state = {
        name: "",
        department: "",
        rating: "",
        showdetails: true,
        empdetails: []
    }
    updateinput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onsubmit = (event) => {
        event.preventDefault()

        const Objtemp = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating,
            showdetails: this.state.showdetails

        }

        const arraytemp = this.state.empdetails;
        arraytemp.push(Objtemp);
        this.setState({ empdetails: arraytemp, showdetails: !this.state.showdetails });
    }

    onback = () => {
        this.setState({
            showdetails: !this.state.showdetails
        })

    }

    render() {
        return (
            <>
                {this.state.showdetails ? (
                    <div>
                        <div id="center">
                            <h1 id="headstyle">EMPLOYEE FEEDBACK FORM</h1>
                        </div><br />
                        <div id="containerform">
                            <form onSubmit={this.onsubmit}>
                                <br /><br />
                                &nbsp;&nbsp; <label for="name" id="namestyle">Name</label><br /><br />
                                &nbsp;&nbsp;<input type="text" id='name' name='name' onChange={this.updateinput} placeholder='Enter Name ' value={this.state.name} required /><br /><br />
                                &nbsp;&nbsp;<label for="dept" id="deptstyle">Department</label><br /><br />
                                &nbsp;&nbsp;<input type="text" id='dept' name='department' onChange={this.updateinput} placeholder='Enter Department' value={this.state.department} required /><br /><br />
                                &nbsp;&nbsp;<label for="rating" id="ratestyle">Rating</label><br /><br />
                                &nbsp;&nbsp;<input type="number" id='rating' name='rating' onChange={this.updateinput} placeholder='Enter Rating' value={this.state.rating} required /><br /><br />
                                &nbsp;&nbsp;<button id="sub" type="submit" >Submit</button><br /><br />

                            </form>
                        </div>

                    </div>) : (

                    <Details details={this.state.empdetails} back={this.onback} />

                )}



            </>
        )
    }
}

export default Maincomponent