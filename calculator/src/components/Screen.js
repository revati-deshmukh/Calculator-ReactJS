import { Textfit } from "react-textfit";
import './Screen.css';

const Screen = ({ value }) => {
    console.log(value)
    return <Textfit className="screen" mode="single" max={30}>
        {value}
    </Textfit>;
}

export default Screen