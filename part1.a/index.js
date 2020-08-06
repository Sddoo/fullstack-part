import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course: name }) => {
    return (
        <h1>{name}</h1>
    );
};

const Content = ({ parts }) => {
    parts = parts.map( (elem, i) => <p key={i}> {elem.name} {elem.exercises} </p>);
    return (<> {parts} </>);
};

const Total = ( {count: parts} ) => {
    return (
        <p>Number of exercises { parts.reduce((acc, cur) => acc + cur.exercises, 0) }</p>
    );
};

// const App = () => {
//     const course = {
//         name: 'Half Stack application development',
//         parts: [
//             {
//                 name: 'Fundamentals of React',
//                 exercises: 10
//             },
//             {
//                 name: 'Using props to pass data',
//                 exercises: 7,
//             },
//             {
//                 name: 'State of a component',
//                 exercises: 14
//             }
//         ]
//     };
//
//     return (
//         <div>
//             <Header course={course.name} />
//             <Content parts={course.parts} />
//             <Total count={course.parts} />
//         </div>
//     )
// };

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const App = (props) => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])

    const handleLeftClick = () => {
        setAllClicks(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAllClicks(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            <div>
                {left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {right}
                <History allClicks={allClicks}></History>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))