

const Movie = (props) => {
    console.log(props.cast)
    return (
        <article>
            <h3>{props.title}</h3>
            <h5>Year: {props.year}</h5>
            <ul type="none"> Cast: 
                <li>{props.cast[0]}</li>
                <li>{props.cast[1]}</li>
            </ul>
        </article>
    )
};

export default Movie;