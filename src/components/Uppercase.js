const Uppercase = (props) => {
    return (
        <div>
            <p>Original: {props.word}</p>
            <p>Capitalized: {props.word.toUpperCase()}</p>
        </div>
    );
}

export default Uppercase;
