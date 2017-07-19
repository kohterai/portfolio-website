// Design Projects

import Snake from './Projects/Design/Snake'
import hungrySnakeT from './Projects/Design/hungrysnake-thumb.jpg'

import Audiloid from './Projects/Design/Audiloid'
import audiloidT from './Projects/Design/audiloid-thumb.jpg'

import NYUVote from './Projects/Design/nyuvote'
import nyuvoteT from './Projects/Design/nyuvote-thumb.jpg'


// Photography Projects
import Georgia from './Projects/Photography/Georgia'
import georgiaT from './Projects/Photography/photos/georgia-thumb.jpg'

import Sports from './Projects/Photography/Sports'
import sportT from './Projects/Photography/photos/sport-thumb.jpg'

import Theater from './Projects/Photography/Theater'
import theaterT from './Projects/Photography/photos/theater-thumb.jpg'

import Commercial from './Projects/Photography/Commercial'
import commercialT from './Projects/Photography/photos/commercial-thumb.jpg'

import Portraits from './Projects/Photography/Portraits'
import portraitsT from './Projects/Photography/photos/portrait-thumb.jpg'

// Cinematography Projects
import Amame from './Projects/Cinematography/Amame'
import AmameT1 from './Projects/Cinematography/photos/amame-thumb1.jpg'
import AmameT2 from './Projects/Cinematography/photos/amame-thumb2.jpg'
import AmameT3 from './Projects/Cinematography/photos/amame-thumb3.jpg'


const projectList = [
  { type: "Design",
    longThumb: false,
    projects: [{  title: "Hungry Snake",
                  caption: "Kinetic sculpture",
                  thumbnail: hungrySnakeT,
                  path: '/projects/snake',
                  main: Snake
                },
                { title: "Audiloid",
                  caption: "Celluloid based audio player",
                  thumbnail: audiloidT,
                  path: '/projects/audiloid',
                  main: Audiloid 
                },
                { title: "NYU Vote",
                  caption: "Voting platform for NYU",
                  thumbnail: nyuvoteT,
                  path: '/projects/nyuvote',
                  main: NYUVote 
                }]
  },
  { type: "Photography",
    longThumb: false,
    projects: [{ title: "Sports",
                  caption: "Sports photography",
                  thumbnail: sportT,
                  path: '/projects/Sports',
                  main: Sports
                },{ title: "Portraits",
                  caption: "People Photos",
                  thumbnail: portraitsT,
                  path: '/projects/Portraits',
                  main: Portraits
                },
                { title: "Theater",
                  caption: "Stills from theater productions",
                  thumbnail: theaterT,
                  path: '/projects/Theater',
                  main: Theater
                },
                { title: "Commercial",
                  caption: "Advertisements and posters",
                  thumbnail: commercialT,
                  path: '/projects/Commercial',
                  main: Commercial
                },
                {  title: "Georgia",
                  caption: "Journey through Georgia",
                  thumbnail: georgiaT,
                  path: '/projects/Georgia',
                  main: Georgia
                }]
  },
  { type: "Cinematography",
    longThumb: true,
    projects: [{ title: "Ámame como Amas",
                  caption: "Music Video",
                  thumbnail1: AmameT1,
                  thumbnail2: AmameT2,
                  thumbnail3: AmameT3,
                  path: '/projects/Amame',
                  main: Amame
                }]
  },
  // { type: "Research",
  //   projects: [{  title: "Haptic",
  //                 caption: "Dental Simulator with Haptics",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Haptic',
  //                 main: Snake
  //               },
  //               { title: "VR",
  //                 caption: "Escape into a rich persons house",
  //                 thumbnail: oryx1,
  //                 path: '/projects/VR',
  //                 main: Snake
  //               }]
  // }
]

export default projectList