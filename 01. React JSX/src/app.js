const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const headingElement = React.createElement('h1', {}, 'Heading content');
const secondHeadingElement = React.createElement('h2', {}, 'Heading content 2');
const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);

root.render(headerElement);