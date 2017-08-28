// Design Projects

import Snake from './Projects/Design/Snake'
import hungrySnakeT from './Projects/Design/photos/hungrysnake-thumb.jpg'

import Audiloid from './Projects/Design/Audiloid'
import audiloidT from './Projects/Design/photos/audiloid-thumb.jpg'

import NYUVote from './Projects/Design/nyuvote'
import nyuvoteT from './Projects/Design/photos/nyuvote-thumb.jpg'

import Yalla from './Projects/Design/Yalla'
import yallaT from './Projects/Design/photos/yalla-thumb.jpg'

// Research Projects

import FocusEye from './Projects/Research/FocusEye'
import focuseyeT from './Projects/Research/photos/focuseye-thumb.jpg'

import Triangles from './Projects/Research/Triangles'
import TrianglesT from './Projects/Research/photos/triangles-thumb.jpg'


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

import Burj from './Projects/Photography/Burj'
import burjT from './Projects/Photography/photos/burj-thumb.jpg'

// Cinematography Projects
import Amame from './Projects/Cinematography/Amame'
import AmameT1 from './Projects/Cinematography/photos/amame-thumb1.jpg'
import AmameT2 from './Projects/Cinematography/photos/amame-thumb2.jpg'
import AmameT3 from './Projects/Cinematography/photos/amame-thumb3.jpg'

import CinematographyWorkshop from './Projects/Cinematography/CinematographyWorkshop'
import workshopT1 from './Projects/Cinematography/photos/workshop-thumb1.jpg'
import workshopT2 from './Projects/Cinematography/photos/workshop-thumb2.jpg'
import workshopT3 from './Projects/Cinematography/photos/workshop-thumb3.jpg'

import Rescue from './Projects/Cinematography/Rescue'
import rescueT1 from './Projects/Cinematography/photos/rescue-thumb1.jpg'
import rescueT2 from './Projects/Cinematography/photos/rescue-thumb2.jpg'
import rescueT3 from './Projects/Cinematography/photos/rescue-thumb3.jpg'


const projectList = [

    { type: "Cinematography",
    longThumb: true,
    projects: [
                { title: "Workshops",
                  caption: "Cinematography Workshops at NYU Abu Dhabi",
                  thumbnail1: workshopT1,
                  thumbnail2: workshopT2,
                  thumbnail3: workshopT3,
                  path: '/projects/CinematographyWorkshop',
                  main: CinematographyWorkshop
                },
                { title: "Ámame",
                  caption: "Music Video",
                  thumbnail1: AmameT1,
                  thumbnail2: AmameT2,
                  thumbnail3: AmameT3,
                  path: '/projects/Amame',
                  main: Amame
                },
                { title: "Rescue",
                  caption: "Space Sci-Fi",
                  thumbnail1: rescueT1,
                  thumbnail2: rescueT2,
                  thumbnail3: rescueT3,
                  path: '/projects/Rescue',
                  main: Rescue
                }
                ]
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
                },
                {  title: "Burj Shadow",
                  caption: "Burj Khalifa Timelapse",
                  thumbnail: burjT,
                  path: '/projects/Burj',
                  main: Burj
                }]
  },
  { type: "Research",
    longThumb: false,
    projects: [  { title: "FocusEye",
                  caption: "Follow Focus Reimagined",
                  thumbnail: focuseyeT,
                  path: '/projects/FocusEye',
                  main: FocusEye 
                },
                  { title: "Triangles",
                  caption: "Wooden Sculpture",
                  thumbnail: TrianglesT,
                  path: '/projects/Triangles',
                  main: Triangles 
                }]
  },
  { type: "Design",
    longThumb: false,
    projects: [
                { title: "NYU Vote",
                  caption: "Voting platform for NYU",
                  thumbnail: nyuvoteT,
                  path: '/projects/nyuvote',
                  main: NYUVote 
                },
                { title: "Yalla",
                  caption: "Social Events Web App",
                  thumbnail: yallaT,
                  path: '/projects/Yalla',
                  main: Yalla 
                },
                {  title: "Hungry Snake",
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
                }
                ]
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