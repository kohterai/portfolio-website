// Design Projects

import Snake from './Projects/Design/Snake'
import hungrySnakeT from './Projects/Design/photos/hungrysnake-thumb.jpg'

import Audiloid from './Projects/Design/Audiloid'
import audiloidT from './Projects/Design/photos/audiloid-thumb.jpg'

import NYUVote from './Projects/Design/nyuvote'
import nyuvoteT from './Projects/Design/photos/nyuvote-thumb.jpg'

import Yalla from './Projects/Design/Yalla'
import yallaT from './Projects/Design/photos/yalla-thumb.jpg'

import CamelDict from './Projects/Design/CamelDict'
import cameldictT from './Projects/Design/photos/cameldict-thumb.jpg'

import Callscribe from './Projects/Design/Callscribe'
import callscribeT from './Projects/Design/photos/callscribe-thumb.jpg'

import CCSAD from './Projects/Design/CCSAD'
import ccsadT from './Projects/Design/photos/ccsad-thumb.jpg'


// Research Projects

import FocusEye from './Projects/Research/FocusEye'
import focuseyeT from './Projects/Research/photos/focuseye-thumb.jpg'

import Triangles from './Projects/Research/Triangles'
import TrianglesT from './Projects/Research/photos/triangles-thumb.jpg'

import Dental from './Projects/Research/Dental'
import DentalT from './Projects/Research/photos/dental-thumb.jpg'

import Architect from './Projects/Research/Architecture'
import ArchitectT from './Projects/Research/photos/Architect-thumb.jpg'


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

import Oryx from './Projects/Cinematography/Oryx'
import oryxT1 from './Projects/Cinematography/photos/oryx-thumb1.jpg'
import oryxT2 from './Projects/Cinematography/photos/oryx-thumb2.jpg'
import oryxT3 from './Projects/Cinematography/photos/oryx-thumb3.jpg'

import DRC from './Projects/Cinematography/DRC'
import drcT1 from './Projects/Cinematography/photos/drc-thumb1.jpg'
import drcT2 from './Projects/Cinematography/photos/drc-thumb2.jpg'
import drcT3 from './Projects/Cinematography/photos/drc-thumb3.jpg'

import Monarchs from './Projects/Cinematography/Monarchs'
import monarchsT1 from './Projects/Cinematography/photos/monarchs-thumb1.jpg'
import monarchsT2 from './Projects/Cinematography/photos/monarchs-thumb2.jpg'
import monarchsT3 from './Projects/Cinematography/photos/monarchs-thumb3.jpg'

import Ookami from './Projects/Cinematography/Ookami'
import ookamiT1 from './Projects/Cinematography/photos/ookami-thumb1.jpg'
import ookamiT2 from './Projects/Cinematography/photos/ookami-thumb2.jpg'
import ookamiT3 from './Projects/Cinematography/photos/ookami-thumb3.jpg'

import PenShikoku from './Projects/Cinematography/PenShikoku'
import penShikokuT1 from './Projects/Cinematography/photos/penshikoku-thumb1.jpg'
import penShikokuT2 from './Projects/Cinematography/photos/penshikoku-thumb2.jpg'
import penShikokuT3 from './Projects/Cinematography/photos/penshikoku-thumb3.jpg'

// ref is for reference for ID, since cant have space

const projectList = [
  { type: "Cinematography",
    longThumb: true,
    projects: [
                { title: "Shikoku",
                  ref: "penshikoku",
                  caption: "Short Film",
                  thumbnail1: penShikokuT1,
                  thumbnail2: penShikokuT2,
                  thumbnail3: penShikokuT3,
                  path: '/projects/PenShikoku',
                  main: PenShikoku
                },
                { title: "Monarcas",
                  ref: "monarchs",
                  caption: "Short Film",
                  thumbnail1: monarchsT1,
                  thumbnail2: monarchsT2,
                  thumbnail3: monarchsT3,
                  path: '/projects/Monarchs',
                  main: Monarchs
                },
                { title: "Insān",
                  ref: "insan",
                  caption: "Short Film",
                  thumbnail1: oryxT1,
                  thumbnail2: oryxT2,
                  thumbnail3: oryxT3,
                  path: '/projects/Oryx',
                  main: Oryx
                },
                { title: "Field Work DRC",
                  ref: "drc",
                  caption: "Documentary on social science research",
                  thumbnail1: drcT2,
                  thumbnail2: drcT1,
                  thumbnail3: drcT3,
                  path: '/projects/DRC',
                  main: DRC
                },
                { title: "Rescue",
                  ref: "rescue",
                  caption: "Space sci-Fi",
                  thumbnail1: rescueT1,
                  thumbnail2: rescueT2,
                  thumbnail3: rescueT3,
                  path: '/projects/Rescue',
                  main: Rescue
                },
                { title: "Ookami Shonen",
                  ref: "ookami",
                  caption: "Short Film",
                  thumbnail1: ookamiT1,
                  thumbnail2: ookamiT2,
                  thumbnail3: ookamiT3,
                  path: '/projects/Ookami',
                  main: Ookami
                },
                { title: "Ámame",
                  ref: "amame",
                  caption: "Music video",
                  thumbnail1: AmameT1,
                  thumbnail2: AmameT2,
                  thumbnail3: AmameT3,
                  path: '/projects/Amame',
                  main: Amame
                },
                { title: "Workshops",
                  ref: "workshops",
                  caption: "Cinematography workshops at NYU Abu Dhabi",
                  thumbnail1: workshopT1,
                  thumbnail2: workshopT2,
                  thumbnail3: workshopT3,
                  path: '/projects/CinematographyWorkshop',
                  main: CinematographyWorkshop
                }
                ]
  },
  { type: "Design",
    longThumb: false,
    projects: [
                { title: "NYU Vote",
                  ref: "nyuvote",
                  caption: "Voting platform for NYU",
                  thumbnail: nyuvoteT,
                  path: '/projects/nyuvote',
                  main: NYUVote 
                },
                { title: "Callscribe",
                  ref: "callscribe",
                  caption: "Call Transcription and Recording App",
                  thumbnail: callscribeT,
                  path: '/projects/callscribe',
                  main: Callscribe
                },
                { title: "Camel Dictionary",
                  ref: "cameldict",
                  caption: "Minimalist Arabic Dictionary",
                  thumbnail: cameldictT,
                  path: '/projects/cameldict',
                  main: CamelDict
                },
                { title: "Yalla",
                  ref: "yalla",
                  caption: "Social Events Web App",
                  thumbnail: yallaT,
                  path: '/projects/Yalla',
                  main: Yalla 
                },
                {  title: "Hungry Snake",
                  ref: "hungrysnake",
                  caption: "Kinetic sculpture",
                  thumbnail: hungrySnakeT,
                  path: '/projects/snake',
                  main: Snake
                },
                { title: "Audiloid",
                  ref: "audiloid",
                  caption: "Celluloid based audio player",
                  thumbnail: audiloidT,
                  path: '/projects/audiloid',
                  main: Audiloid 
                },
                { title: "FocusEye",
                  ref: "focuseye",
                  caption: "Follow focus reimagined",
                  thumbnail: focuseyeT,
                  path: '/projects/FocusEye',
                  main: FocusEye 
                },
                  { title: "Triangles",
                  ref: "triangles",
                  caption: "Wooden sculpture",
                  thumbnail: TrianglesT,
                  path: '/projects/Triangles',
                  main: Triangles 
                },
                  { title: "Haptic Simulator",
                  ref: "dental",
                  caption: "Haptic-based periodontal training",
                  thumbnail: DentalT,
                  path: '/projects/Dental',
                  main: Dental 
                }
                // { title: "Cyber Security",
                //   ref: "ccsad",
                //   caption: "Website Redesign Center for Cyber Security",
                //   thumbnail: ccsadT,
                //   path: '/projects/CCSAD',
                //   main: CCSAD 
                // }
                ]
  },
  { type: "Photography",
    longThumb: false,
    projects: [{ title: "Sports",
                  ref: "sports",
                  caption: "Sports photography",
                  thumbnail: sportT,
                  path: '/projects/Sports',
                  main: Sports
                },{ title: "Portraits",
                  ref: "portraits",
                  caption: "People Photos",
                  thumbnail: portraitsT,
                  path: '/projects/Portraits',
                  main: Portraits
                },
                { title: "Theater",
                  ref: "theater",
                  caption: "Stills from theater productions",
                  thumbnail: theaterT,
                  path: '/projects/Theater',
                  main: Theater
                },
                { title: "Commercial",
                  ref: "commercial",
                  caption: "Advertisements and posters",
                  thumbnail: commercialT,
                  path: '/projects/Commercial',
                  main: Commercial
                },
                {  title: "Georgia",
                  ref: "georgia",
                  caption: "Journey through Georgia",
                  thumbnail: georgiaT,
                  path: '/projects/Georgia',
                  main: Georgia
                },
                {  title: "Burj Shadow",
                  ref: "burj",
                  caption: "Burj Khalifa Timelapse",
                  thumbnail: burjT,
                  path: '/projects/Burj',
                  main: Burj
                }]
  }
]

export default projectList