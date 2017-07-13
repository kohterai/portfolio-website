// Design Projects

import Snake from './Projects/Design/Snake'
import hungrySnakeT from './Projects/Design/hungrysnake-thumb.jpg'

import Audiloid from './Projects/Design/Audiloid'
import audiloidT from './Projects/Design/audiloid-thumb.jpg'

import NYUVote from './Projects/Design/nyuvote'
import nyuvoteT from './Projects/Design/nyuvote-thumb.jpg'


// Photography Projects
import Georgia from './Projects/Photography/Georgia'
import georgiaT from './Projects/Photography/georgia-thumb.jpg'



const projectList = [
  { type: "Design",
    projects: [{  title: "Hungry Snake",
                  caption: "Kinetic Sculpture",
                  thumbnail: hungrySnakeT,
                  path: '/projects/snake',
                  main: Snake
                },
                { title: "Audiloid",
                  caption: "Celluloid based Audio Player",
                  thumbnail: audiloidT,
                  path: '/projects/audiloid',
                  main: Audiloid 
                },
                { title: "NYU Vote",
                  caption: "Voting Platform for NYU",
                  thumbnail: nyuvoteT,
                  path: '/projects/nyuvote',
                  main: NYUVote 
                }]
  },
  // { type: "Cinematography",
  //   projects: [{  title: "Rescue",
  //                 caption: "Desert Storms",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Rescue',
  //                 main: Snake
  //               },
  //               { title: "Dive",
  //                 caption: "Great escape",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Dive',
  //                 main: Snake
  //               },
  //               { title: "Boat ride",
  //                 caption: "Great escape",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Dive',
  //                 main: Snake
  //               },
  //               {  title: "Rescue 2",
  //                 caption: "Desert Storms",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Rescue',
  //                 main: Snake
  //               },
  //               { title: "Dive 2",
  //                 caption: "Great escape",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Dive',
  //                 main: Snake
  //               },
  //               { title: "Boat ride 2",
  //                 caption: "Great escape",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Dive',
  //                 main: Snake
  //               }]
  // },
  { type: "Photography",
    projects: [{  title: "Georgia",
                  caption: "Portraits in the Snow",
                  thumbnail: georgiaT,
                  path: '/projects/Georgia',
                  main: Georgia
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