import hungrySnakeT from './Projects/Design/hungrysnake-thumb.jpg'
import audiloidT from './Projects/Design/audiloid-thumb.jpg'

import Snake from './Projects/Design/Snake'
import Audiloid from './Projects/Design/Audiloid'

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
  // { type: "Photography",
  //   projects: [{  title: "Portrait",
  //                 caption: "Portraits in the Snow",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Portraits',
  //                 main: Snake
  //               },
  //               { title: "Sports",
  //                 caption: "Great escape",
  //                 thumbnail: oryx1,
  //                 path: '/projects/Sports',
  //                 main: Snake
  //               }]
  // },
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