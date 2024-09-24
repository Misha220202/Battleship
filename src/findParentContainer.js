export const findParentContainerByClass = (target, className) => {
  if (target.classList.contains(className)) {
    return target;
  }
  if (target == document.body) {
    return null;
  }
  return findParentContainerByClass(target.parentElement, className);
};
