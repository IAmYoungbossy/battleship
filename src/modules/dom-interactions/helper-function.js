function createDomElement(type, attributes) {
  const newElement = document.createElement(`${type}`);
  if (attributes == null) return newElement;
  setAttributes(newElement, attributes);
  return newElement;
}

function setAttributes(element, attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export {createDomElement};
