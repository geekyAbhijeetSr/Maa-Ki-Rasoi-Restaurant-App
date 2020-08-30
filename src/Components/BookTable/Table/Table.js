import React from "react"
import './table.scss'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import CalenderIcon from '../../Icons/CalenderIcon'
import TimeIcon from '../../Icons/TimeIcon'
import PeopleIcon from '../../Icons/PersonIcon'
import plate2 from '../../img/plate2.webp'
import plate from '../../img/plate.webp'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: new Date(),
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(date) {
        this.setState({
            selectedDate: date
        });
    };

    render() {
        return (
            <div className="container formWrapper table">
                
                <div className="formContainer">
                    <img className='img1' src={plate2} alt=""/>
                    <img className='img2' src={plate} alt="" />
                    <h2>Find your table for any occasion</h2>
                    <form>
                        
                        <div className='datePicker inputForm'>
                            <span className="icon"><CalenderIcon /></span>
                            <DatePicker className='resto__input'
                                selected={this.state.selectedDate}
                                minDate={new Date()}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='time-slector-wrapper inputForm'>
                            <span className="icon"><TimeIcon /></span>
                            <select className='resto__select' aria-label="Time selector">
                                <option value="2000-02-01T00:00:00">12:00 AM</option><option value="2000-02-01T00:30:00">12:30 AM</option><option value="2000-02-01T01:00:00">1:00 AM</option><option value="2000-02-01T01:30:00">1:30 AM</option><option value="2000-02-01T02:00:00">2:00 AM</option><option value="2000-02-01T02:30:00">2:30 AM</option><option value="2000-02-01T03:00:00">3:00 AM</option><option value="2000-02-01T03:30:00">3:30 AM</option><option value="2000-02-01T04:00:00">4:00 AM</option><option value="2000-02-01T04:30:00">4:30 AM</option><option value="2000-02-01T05:00:00">5:00 AM</option><option value="2000-02-01T05:30:00">5:30 AM</option><option value="2000-02-01T06:00:00">6:00 AM</option><option value="2000-02-01T06:30:00">6:30 AM</option><option value="2000-02-01T07:00:00">7:00 AM</option><option value="2000-02-01T07:30:00">7:30 AM</option><option value="2000-02-01T08:00:00">8:00 AM</option><option value="2000-02-01T08:30:00">8:30 AM</option><option value="2000-02-01T09:00:00">9:00 AM</option><option value="2000-02-01T09:30:00">9:30 AM</option><option value="2000-02-01T10:00:00">10:00 AM</option><option value="2000-02-01T10:30:00">10:30 AM</option><option value="2000-02-01T11:00:00">11:00 AM</option><option value="2000-02-01T11:30:00">11:30 AM</option><option value="2000-02-01T12:00:00">12:00 PM</option><option value="2000-02-01T12:30:00">12:30 PM</option><option value="2000-02-01T13:00:00">1:00 PM</option><option value="2000-02-01T13:30:00">1:30 PM</option><option value="2000-02-01T14:00:00">2:00 PM</option><option value="2000-02-01T14:30:00">2:30 PM</option><option value="2000-02-01T15:00:00">3:00 PM</option><option value="2000-02-01T15:30:00">3:30 PM</option><option value="2000-02-01T16:00:00">4:00 PM</option><option value="2000-02-01T16:30:00">4:30 PM</option><option value="2000-02-01T17:00:00">5:00 PM</option><option value="2000-02-01T17:30:00">5:30 PM</option><option value="2000-02-01T18:00:00">6:00 PM</option><option value="2000-02-01T18:30:00">6:30 PM</option><option value="2000-02-01T19:00:00">7:00 PM</option><option value="2000-02-01T19:30:00">7:30 PM</option><option value="2000-02-01T20:00:00">8:00 PM</option><option value="2000-02-01T20:30:00">8:30 PM</option><option value="2000-02-01T21:00:00">9:00 PM</option><option value="2000-02-01T21:30:00">9:30 PM</option><option value="2000-02-01T22:00:00">10:00 PM</option><option value="2000-02-01T22:30:00">10:30 PM</option><option value="2000-02-01T23:00:00">11:00 PM</option><option value="2000-02-01T23:30:00">11:30 PM</option>
                            </select>
                        </div>
                        <div className='people-wrapper inputForm'>
                            <span className="icon"><PeopleIcon /></span>
                            <select className='resto__select' name='table'>
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5">5 People</option>
                                <option value="6">6 People</option>
                                <option value="7">7 People</option>
                                <option value="8">8 People</option>
                                <option value="9">9 People</option>
                                <option value="10">10 People</option>
                                <option value="10+">10+ People</option>
                                <option value="largerParty">Larger Party</option>
                            </select>
                        </div>

                        <button className="resto__btn">Let's go</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Table