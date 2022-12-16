'use strict';

let timer;
const newYorkTime = document.querySelector('.new__york');
const laTime = document.querySelector('.los__angeles');
const londonTime = document.querySelector('.london');
const japanTime = document.querySelector('.japan');

const newYork = {
  name: 'New York',
  timeZone: 'America/New_York',
  elName: newYorkTime,
};

const losAngeles = {
  name: 'Los Angeles',
  timeZone: 'America/Los_Angeles',
  elName: laTime,
};

const london = {
  name: 'London',
  timeZone: 'Europe/London',
  elName: londonTime,
};

const japan = {
  name: 'Japan',
  timeZone: 'Japan',
  elName: japanTime,
};

function displayTimeZone(place) {
  setInterval(function () {
    timer = new Intl.DateTimeFormat(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: place.timeZone,
    }).format(new Date());

    place.elName.textContent = `${place.name} : ${timer}`;
  }, 0);
}

const places = [newYork, losAngeles, london, japan].forEach(place =>
  displayTimeZone(place)
);
