import { Button } from '@mui/joy';
import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Wrapper from '../../partials/Wrapper';
import getArticles from '../../redux/actions/articles/getArticles';
import { getArticle } from '../../redux/features/articles';

function ArticleDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const {data, error} = useSelector(state => state.articles.article);
    const {data: articles, loading} = useSelector(state => state.articles.articles);

    useEffect(() =>{
        dispatch(getArticles(12))
    }, [])

    useEffect(() =>{
        if(articles.length) dispatch(getArticle(params.id));
    }, [params.id, articles]);

  return (
    <Wrapper>
        <div className="mt-14 flex gap-10 items-center">
            <img src={data.urlToImage} alt={data.title} className='rounded-md w-2/4' />
            <div className="flex flex-col gap-7 w-2/4">
                <div className="space-y-5">
                    <div className="text-gray-500">
                        <div className="">{moment(data.publishedAt).format("ll")}</div>
                        <div className="italic text-sm">Author: {data.author}</div>
                    </div>
                    <div className="text-3xl font-bold">{data.title}</div>
                </div>
                <div className="text-lg tracking-wide leading-7">{data.content}</div>
                <Button variant='soft' className='w-max' onClick={() =>window.open(data.url)}>Read More</Button>
            </div>
        </div>
    </Wrapper>
  )
}

export default ArticleDetails