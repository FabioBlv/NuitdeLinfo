
let currentDroppable = null;

ball.onmousedown = function(event) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    ball.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    ball.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('#citron');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null lorsque nous étions sur un élément déposable avant cet évènement
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null si nous ne n'atterrissions pas sur un élément déposable maintenant
        // (peut être a juste quitte l'objet déposable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
  alert('Vous avez gagné !');
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

ball.ondragstart = function() {
  return false;
};
