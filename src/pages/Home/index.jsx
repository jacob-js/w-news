import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleCard from '../../commons/ArticleCard'
import Skeletons from '../../commons/Skeletons'
import Title from '../../commons/Title'
import Wrapper from '../../partials/Wrapper'
import getArticles from '../../redux/actions/articles/getArticles'
import Publishers from './Publishers'
import { setFilterKeyWord } from '../../redux/features/articles'

function Home() {
    const dispatch = useDispatch();
    const {data, loading} = useSelector(state => state.articles.articles);
    const {data: filtered} = useSelector(state => state.articles.filtered);
    const filterKeyword = useSelector(state => state.articles.filterKeyword);

    useEffect(() =>{
        dispatch(getArticles(12))
    }, []);

  return (
    <Wrapper>
        <div className='mt-14'>
            <Title text={filterKeyword ? `Result for "${filterKeyword}" in articles`: "The world's latest news"} onBack={() =>dispatch(setFilterKeyWord(""))} withBackIcon={filterKeyword} />
            <div className="grid sm:grid-cols-3 gap-10 mt-16">
                {
                    loading ?
                    <Skeletons count={9} />:
                    (filterKeyword ? filtered: data).map((article, index) =><ArticleCard {...article} key={index} />)
                }
            </div>
            {
                !loading && !(filterKeyword ? filtered.length: data.length)&&
                <div className='flex justify-center p-10 flex-col items-center gap-5'>
                    <img src="/empty.svg" alt="No data!" className="w-32 object-center" />
                    <div className="text-gray-600 ml-3">No Data Found!</div>
                </div>
            }
        </div>
        <Publishers />
    </Wrapper>
  )
}

export default Home