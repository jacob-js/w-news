import moment from 'moment'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import changeRoute from '../../helpers/changeRoute';

function ArticleCard({publishedAt, title, content, urlToImage, id}) {
  const navigate = useNavigate();

  return (
    <div className='space-y-5 border p-5 rounded-md hover:shadow-md transition-all duration-500 cursor-pointer' onClick={() =>changeRoute(navigate, `/article/${id}`)}>
        <img src={urlToImage} alt={title} className="rounded-md" />
        <div className="text-gray-500">{moment(publishedAt).format("ll")}</div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-gray-500">{content?.length > 128 ? content.substring(0, 128) + "...": content}</div>
    </div>
  )
}

export default ArticleCard