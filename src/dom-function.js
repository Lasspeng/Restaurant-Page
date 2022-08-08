const domFunction = () => {
  const container = document.getElementById('content');

  const header1 = document.createElement('h1');
  header1.innerHTML = 'Very Cool Restaurant';
  container.appendChild(header1);

  const image = document.createElement('img');
  image.src = '../img/restaurant-img.jpeg';
  container.appendChild(image);

  const header3 = document.createElement('h3');
  header3.innerHTML = 'Welcome to our very cool restaurant!';
  container.appendChild(header3);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  container.appendChild(paragraph);

  const anotherHeader3 = document.createElement('h3');
  anotherHeader3.innerHTML = 'Location and Hours';
  container.appendChild(anotherHeader3);

  const address = document.createElement('p');
  address.innerHTML = '521 Wonderland Rd. <br/ > 12345 <br/ > Atlanta, GA <br/ >';
  container.appendChild(address);

  const times = document.createElement('p');
  times.innerHTML = 'Monday-Saturday <br/ > 9AM-11PM';
  container.appendChild(times);
}

export default domFunction;