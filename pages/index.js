import Layout from '../components/MainLayout.js'
import SmallThumbnail from '../components/ProjectThumbnail.js'
import Markdown from 'react-markdown'
import Link from 'next/link'

export default (props) => (
  <Layout>
   <h1>Welcome to Kohs Website</h1>
   <h3>Cinematography Works</h3>
    <Link prefetch href="/rescue"><a>Rescue</a></Link>
    <SmallThumbnail link="hungrysnake" title="Hungry Snake" image="../static/design/hungrySnake.jpg"></SmallThumbnail>

   <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
)