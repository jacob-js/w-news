import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import ArticleCard from '../../commons/ArticleCard';
import Skeletons from '../../commons/Skeletons';
import Title from '../../commons/Title'
import Wrapper from '../../partials/Wrapper'
import getArticlesByPublisher from '../../redux/actions/articles/getArticlesByPublisher';

function PublisherArticles() {
    const params = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const {data, loading} = useSelector(state => state.articles.articlesByPublisher);

    useEffect(() =>{
      dispatch(getArticlesByPublisher(params.id))
    }, [])

  return (
    <Wrapper>
        <div className="mt-14 pb-14">
            <Title text={location.state?.name} withBackIcon />
            <div className="grid sm:grid-cols-3 gap-10 mt-16">
                {
                    loading ?
                    <Skeletons count={9} />:
                    data.map((article, index) =><ArticleCard {...article} key={index} />)
                }
            </div>
        </div>
    </Wrapper>
  )
}

export default PublisherArticles