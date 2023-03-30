import { useNavigate } from 'react-router-dom';

function PublisherItem({id, name}) {
    const navigate = useNavigate();

  return (
    <div className="py-3 border rounded-md group transition-all h-full flex flex-col items-center justify-center cursor-pointer" onClick={() =>navigate(`/publisher/${id}`, {state: {name}})}>{name}</div>
  )
}

export default PublisherItem