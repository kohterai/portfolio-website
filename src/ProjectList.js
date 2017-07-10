import snake1 from './Projects/Design/snake-1.png'
import audio1 from './Projects/Design/audio-1.png'
import oryx1 from './Projects/Cinematography/oryx-1.png'

const projectList = [
  { type: "Design",
    projects: [{  title: "Snake",
                  caption: "Snakes are cute",
                  thumbnail: snake1
                },
                { title: "Hippo",
                  caption: "Hippos are not cute",
                  thumbnail: audio1
                }]
  },
  { type: "Cinematography",
    projects: [{  title: "Rescue",
                  caption: "Desert Storms",
                  thumbnail: oryx1
                },
                { title: "Dive",
                  caption: "Great escape",
                  thumbnail: oryx1
                }]
  }
]

export default projectList