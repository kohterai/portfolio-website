import snake1 from './Projects/Design/snake-1.png'
import audio1 from './Projects/Design/audio-1.png'
import oryx1 from './Projects/Cinematography/oryx-1.png'


import Snake from './Projects/Design/Snake'
import Hippo from './Projects/Design/Hippo'

const projectList = [
  { type: "Design",
    projects: [{  title: "Hungry Snake",
                  caption: "Kinetic Sculpture",
                  thumbnail: snake1,
                  path: '/projects/snake',
                  main: Snake
                },
                { title: "Hippo",
                  caption: "Hippos are not cute",
                  thumbnail: audio1,
                  path: '/projects/Hippo',
                  main: Hippo 
                },
                { title: "Aligator",
                  caption: "Aligator are Beautiful",
                  thumbnail: audio1,
                  path: '/projects/Aligator',
                  main: Hippo 
                }]
  },
  { type: "Cinematography",
    projects: [{  title: "Rescue",
                  caption: "Desert Storms",
                  thumbnail: oryx1,
                  path: '/projects/Rescue',
                  main: Snake
                },
                { title: "Dive",
                  caption: "Great escape",
                  thumbnail: oryx1,
                  path: '/projects/Dive',
                  main: Snake
                },
                { title: "Boat ride",
                  caption: "Great escape",
                  thumbnail: oryx1,
                  path: '/projects/Dive',
                  main: Snake
                },
                {  title: "Rescue 2",
                  caption: "Desert Storms",
                  thumbnail: oryx1,
                  path: '/projects/Rescue',
                  main: Snake
                },
                { title: "Dive 2",
                  caption: "Great escape",
                  thumbnail: oryx1,
                  path: '/projects/Dive',
                  main: Snake
                },
                { title: "Boat ride 2",
                  caption: "Great escape",
                  thumbnail: oryx1,
                  path: '/projects/Dive',
                  main: Snake
                }]
  },
  { type: "Photography",
    projects: [{  title: "Portrait",
                  caption: "Portraits in the Snow",
                  thumbnail: oryx1,
                  path: '/projects/Portraits',
                  main: Snake
                },
                { title: "Sports",
                  caption: "Great escape",
                  thumbnail: oryx1,
                  path: '/projects/Sports',
                  main: Snake
                }]
  },
  { type: "Research",
    projects: [{  title: "Haptic",
                  caption: "Dental Simulator with Haptics",
                  thumbnail: oryx1,
                  path: '/projects/Haptic',
                  main: Snake
                },
                { title: "VR",
                  caption: "Escape into a rich persons house",
                  thumbnail: oryx1,
                  path: '/projects/VR',
                  main: Snake
                }]
  }
]

export default projectList