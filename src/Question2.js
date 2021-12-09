import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Question2 = () => {

    const [digit, setDigit] = useState(0);

    const inputHandler = event => {
        setDigit(event.target.value)
    }



    const numbers = (event) => {

        event.preventDefault();
        if (digit % 14 === 0) {
            alert("foobar");
        }
        else if (digit % 7 === 0) {
            alert("bar");
        }
        else if (digit % 2 === 0) {
            alert("foo");
        }
        else {
            alert(digit);
        }

    }
    return (

        <div>

            <form onSubmit={numbers}>
                <label>
                    <input type="text" name="name" value={digit} placeholder="City" onChange={inputHandler} />
                </label>
                <input type="submit" value="Submit" />

            </form>
        </div>

    )
}

export default Question2;