import Layout from '../components/MainLayout.js'
import Markdown from 'react-markdown'

export default () => (
    <Layout>
        <Markdown source={`
### Hungry Snake
I am hungry
     `}/>
    </Layout>
)
