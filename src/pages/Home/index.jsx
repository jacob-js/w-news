import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleCard from '../../commons/ArticleCard'
import Skeletons from '../../commons/Skeletons'
import Wrapper from '../../partials/Wrapper'
import { getArticles } from '../../redux/features/articles'

function Home() {
    const dispatch = useDispatch();
    const {data, loading} = useSelector(state => state.articles.articles);

    useEffect(() =>{
        dispatch(getArticles(12))
    }, []);

  return (
    <Wrapper>
        <div className='mt-14'>
            <div className="text-4xl sm:text-5xl font-bold">The world's latest news</div>
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

export default Home