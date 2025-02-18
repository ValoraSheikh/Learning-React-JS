function customRender(reactElement, container) {
    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domElem.setAttribute(prop, reactElement.props[prop])
        }
        container.append(domElem)
    }

const reactElement = {
    type: `a`, 
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)