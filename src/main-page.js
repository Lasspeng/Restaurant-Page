const showHome = () => {
  const container = document.getElementById('content');
  const home = document.createElement('div');
  home.setAttribute('id', 'homePage');
  container.appendChild(home);

  const header1 = document.createElement('h1');
  header1.innerHTML = 'Very Cool Restaurant';
  home.appendChild(header1);

  const image = document.createElement('img');
  image.src = '../img/restaurant-img.jpeg';
  image.style.height = '400px';
  image.style.width = '700px';
  home.appendChild(image);

  const header3 = document.createElement('h3');
  header3.innerHTML = 'Welcome to our very cool restaurant!';
  home.appendChild(header3);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  home.appendChild(paragraph);

  const anotherHeader3 = document.createElement('h3');
  anotherHeader3.innerHTML = 'Location and Hours';
  home.appendChild(anotherHeader3);

  const address = document.createElement('p');
  address.innerHTML = '521 Wonderland Rd. <br/ > 12345 <br/ > Atlanta, GA <br/ >';
  home.appendChild(address);

  const times = document.createElement('p');
  times.innerHTML = 'Monday-Saturday <br/ > 9AM-11PM';
  home.appendChild(times);
}

export default showHome;