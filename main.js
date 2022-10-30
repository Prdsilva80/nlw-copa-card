let isExplorer = true;

function changeCard(event){
  const card = event.currentTarget;
  if (isExplorer == true) {
    card.style.backgroundImage = 'url(assets/bg-explorer.svg)';
    isExplorer = !isExplorer;
    document.querySelector('.body').classList.remove('second');
  } else {
      card.style.backgroundImage = 'url(assets/bg-ignite.svg)';
      isExplorer = !isExplorer;
      document.querySelector('.body').classList.add('second');
  }
  
}
