import snake1 from './Projects/Design/snake-1.png'
import audio1 from './Projects/Design/audio-1.png'
import oryx1 from './Projects/Cinematography/oryx-1.png'


import Snake from './Projects/Design/Snake'
import Hippo from './Projects/Design/Hippo'

const projectList = [
  { type: "Design",
    projects: [{  title: "Snake",
                  caption: "Snakes are cute",
                  thumbnail: snake1,
                  path: '/projects/snake',
                  main: Snake
                },
                { title: "Hippo",
                  caption: "Hippos are not cute",
                  thumbnail: audio1,
                  path: '/projects/Hippo',
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
                }]
  }
]

export default projectList