const createMenuItem = (itemName, price, imageSrc) => {
  const menu = document.querySelector('#menuPage');
  const item = document.createElement('div');
  menu.appendChild(item);

  const itemTitle = document.createElement('h3');
  itemTitle.innerHTML = itemName + ' ($' + price + ')';
  item.appendChild(itemTitle);

  const itemImage = document.createElement('img');
  itemImage.src = imageSrc;
  item.appendChild(itemImage);
  itemImage.style.height = '300px';
  itemImage.style.width = '300px';
}

const showMenu = () => {
  const container = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.setAttribute('id', 'menuPage');
  container.appendChild(menu);

  const mainHeader = document.createElement('h1');
  mainHeader.innerHTML = 'Menu';
  menu.appendChild(mainHeader);

  const foodHeader = document.createElement('h2');
  foodHeader.innerHTML = 'Food';
  menu.appendChild(foodHeader);

  createMenuItem('Fried Mozzarella Cheese Sticks', '8.99', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F04%2F07%2F23596-fried-mozzarella-cheese-sticks-3x2-252.jpg');
}

export { showMenu };