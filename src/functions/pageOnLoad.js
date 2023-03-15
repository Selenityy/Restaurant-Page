const removeChildrenNodes = () => {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};

export { removeChildrenNodes };
