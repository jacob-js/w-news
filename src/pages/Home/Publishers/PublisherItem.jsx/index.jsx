import { useRef } from 'react'

function PublisherItem({id, name, description, url}) {
    const descriptionRef = useRef();

  return (
    <div className={`p-5 border rounded-md group transition-all`}>
        <span className="">{name}</span>
        <div ref={descriptionRef} className="hidden transition-all overflow-hidden max-w-md group-hoveranimate-maximize">{description}</div>
    </div>
  )
}

export default PublisherItem