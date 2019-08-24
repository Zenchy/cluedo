// Characters

mrGreen = {
first_name:   'Jacob',
last_name:    'Green',
color:        'green',
description:  'He has a lot of connections',
age:          45,
image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur'
}

drOrchid = {
first_name:   'Doctor',
last_name:    'Orchid',
color:        'white',
description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age:          26,
image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
occupation:    'Scientist'
}

profPlum = {
first_name:   'Victor',
last_name:    'Plum',
color:        'purple',
description:  'Billionaire video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer'
}

missScarlet = {
first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor'
}

mrsPeacock = {
first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité'
}

mrMustard = {
first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player'
}

// Weapons

weapon1 = {name: 'rope'        ,   weight: 10}
weapon2 = {name: 'knife'       ,   weight: 8}
weapon3 = {name: 'candlestick' ,   weight: 2}
weapon4 = {name: 'dumbbell'    ,   weight: 30}
weapon5 = {name: 'poison'      ,   weight: 2}
weapon6 = {name: 'axe'         ,   weight: 15}
weapon7 = {name: 'bat'         ,   weight: 13}
weapon8 = {name: 'trophy'      ,   weight: 25}
weapon9 = {name: 'pistol'      ,   weight: 20}

// Rooms
room1 = {name: 'Dining Room'}
room2 = {name: 'Conservatory'}
room3 = {name: 'Kitchen'}
room4 = {name: 'Study'}
room5 = {name: 'Library'}
room6 = {name: 'Billiard Room'}
room7 = {name: 'Lounge'}
room8 = {name: 'Ballroom'}
room9 = {name: 'Hall'}
room10 = {name: 'Spa'}
room11 = {name: 'Living Room'}
room12 = {name: 'Observatory'}
room13 = {name: 'Theater'}
room14 = {name: 'Guest House'}
room15 = {name: 'Patio'}


// Characters Collection
const charactersArray = [ mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15 ];

// Weapons Collection
const weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9 ];

function randomSelector(arrayToChoose){
  const elementIndex = Math.floor(Math.random()*arrayToChoose.length)
  return arrayToChoose ? arrayToChoose[elementIndex]:undefined
}

function pickMystery(){
  const mysteryEnvelope = {suspect:randomSelector(charactersArray), weapon:randomSelector(weaponsArray), room:randomSelector(roomsArray)}
 return mysteryEnvelope
}

function revealMystery(mysteryEnvelope){
  return `${mysteryEnvelope.suspect.first_name} ${mysteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${mysteryEnvelope.weapon.name} in the ${mysteryEnvelope.room.name}!!!!`
}