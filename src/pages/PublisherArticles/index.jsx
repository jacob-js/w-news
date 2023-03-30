import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Title from '../../commons/Title'
import Wrapper from '../../partials/Wrapper'

function PublisherArticles() {
    const params = useParams();
    const location = useLocation();

  return (
    <Wrapper>
        <div className="mt-14 pb-14">
            <Title text={location.state?.name} withBackIcon />
        </div>
    </Wrapper>
  )
}

export default PublisherArticles