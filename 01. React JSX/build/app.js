

var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Heading content');
// const secondHeadingElement = React.createElement('h2', {}, 'Heading content 2');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);

var headerElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Heading One'
    ),
    React.createElement(
        'h2',
        null,
        'Heading Two'
    )
);

root.render(headerElement);