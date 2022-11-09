import { useState } from 'react';

const TestComponent = (props) => {

    const [index, setIndex] = useState(0);
    console.log('Test Component');

    function handleClick(event) {
        console.log(event);
        event.target.InnerHTML = 'New text';
        setIndex(index +1);


    }
    return (
        <div>
            <h1>{props.message}</h1>
            {index}
            <div>
                <button onClick={handleClick}>Add 1</button>
            </div>
        </div>
    );
};
TestComponent.defaultProps = {
    message: "Defaul Message",
}

const ArrowComponent = (props) => {

    const array = [
        'Test 1',
        'Test 2',
        'TEst 3',
    ];
    const [count, setCount] = useState(0);
    // console.log('Arrow render');
    return (
        <div>
            <div>{props.message}<b>{count}</b></div>
            <small>{props.text}</small>
            <div><button onClick={() => setCount(count + 1)}>Add index 1</button>
            </div>
            <TestComponent count={count} />
            {array.map (a => {
                return (<div key ={a}>{a}</div>);
            })}
        </div>
    );
};
export default ArrowComponent;