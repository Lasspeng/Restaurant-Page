const showContact = () => {
  const container = document.querySelector('#content');
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  container.appendChild(contact);

  const anotherHeader3 = document.createElement('h3');
  anotherHeader3.innerHTML = 'Location and Hours';
  contact.appendChild(anotherHeader3);

  const address = document.createElement('p');
  address.innerHTML = '521 Wonderland Rd. <br/ > 12345 <br/ > Atlanta, GA <br/ >';
  contact.appendChild(address);

  const times = document.createElement('p');
  times.innerHTML = 'Monday-Saturday <br/ > 9AM-11PM';
  contact.appendChild(times);
}

export { showContact };