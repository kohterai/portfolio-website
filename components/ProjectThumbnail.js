import Link from 'next/link'

const ProjectThumbnail = (props) => (
    <div>
        <img src={props.image} />
        <Link prefetch href={props.link}><a>{props.title}</a></Link>
        <style jsx global>{`
            img {
                width: 300px;
            }
        `}</style>
    </div>
)

export default ProjectThumbnail
