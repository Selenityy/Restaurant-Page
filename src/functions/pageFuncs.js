const removeChildrenNodes = () => {
  const content = document.getElementById("bodyContent");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};

export { removeChildrenNodes };
