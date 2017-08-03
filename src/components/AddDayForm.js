import {PropTypes, Component} from 'react'
//was originally an es6 class but then became stateless
export const AddDayForm = ({resort, date, powder, backcountry, onNewDay}) => {
    /*
    export class AddDayForm extends Component {
        constructor(props){
            super(props);
            this.submit = this.submit.bind(this)
        }
    submit(e){
            e.preventDefault()
            console.log('resort', this.refs.resort.value);
            console.log('date', this.refs.date.value);
            console.log('powder', this.refs.powder.checked);
            console.log('backcountry', this.refs.resort.checked);
        }
     //let's us use the default props values
        const { resort, date, powder, backcountry} = this.props;


     //   render() {

     refs when in ES6 are ref="resort"
     */
    let _resort, _date, _powder, _backcountry;

    const submit = (e) => {
        e.preventDefault()
        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked
        });
        //cleanup resetting form after submission
        _resort.value = "";
        _date.value = "";
        _powder.checked = false;
        _backcountry.checked = false;
    }


    return (
        <form onSubmit={submit} className="add-day-form">
            <label htmlFor="resort">Resort Name</label>

            {/*<input id="resort"
                   type="text"
                   required
                   defaultValue={resort}
                   ref={input => _resort = input}
            />*/}

            <Autocomplete options={tahoeResorts}
                          ref={input => _resort = input}
           />

            <label htmlFor="date">Date</label>
            <input id="date"
                   type="date"
                   required
                   defaultValue={date}
                   ref={input => _date = input}
            />

            <div>
                <input id="powder"
                       type="checkbox"
                       defaultChecked={powder}
                       ref={input => _powder = input}
                />
                <label htmlFor="powder">Powder</label>
            </div>

            <div>
                <input id="backcountry"
                       type="checkbox"
                       defaultChecked={backcountry}
                       ref={input => _backcountry = input}
                />
                <label htmlFor="backcountry">Backcountry</label>

            </div>
            <button>Add Day</button>
        </form>
    )
}


AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
};


//Autocomplete options
const tahoeResorts = [
    "Alpine Meadows",
    "Nottingham Castle",
    "Sherwood Forest",
    "University Lake",
    "WestB",
    "Per Cay SO!"
]

class Autocomplete extends Component {

    get value() {
        return this.refs.inputResort.value
    }

    set value(inputValue){
        this.refs.inputResort.value = inputValue
    }

    render(){
        return(
            <div>
                <input ref ="inputResort"
                       type="text"
                       list="tahoe-resorts"/>
                <datalist id="tahoe-resorts">
                    {this.props.options.map(
                        (opt, i) =>
                            <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
}