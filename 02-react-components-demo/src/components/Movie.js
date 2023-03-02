

const Movie = (props) => {
    console.log(props.cast)
    return (
        <article>{props.title}</article>
    )
};

export default Movie;