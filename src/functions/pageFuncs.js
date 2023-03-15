const removeChildrenNodes = () => {
  const content = document.getElementById("allChildren");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};

export { removeChildrenNodes };
