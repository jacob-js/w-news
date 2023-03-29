import { useRef } from 'react'

function PublisherItem({id, name, description, url}) {
    const descriptionRef = useRef();

  return (
    <div className={`py-3 border rounded-md group transition-all h-full flex flex-col items-center justify-center`}>
        <span className="">{name}</span>
        <div ref={descriptionRef} className="hidden transition-all overflow-hidden max-w-md group-hoveranimate-maximize">{description}</div>

    </div>
  )
}

export default PublisherItem