var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

var headingElement = React.createElement('h1', {}, 'Heading content');
var secondHeadingElement = React.createElement('h2', {}, 'Heading content 2');
var headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);

root.render(headerElement);