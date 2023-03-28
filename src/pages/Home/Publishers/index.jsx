import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../../commons/Title';
import getPublishers from '../../../redux/actions/publishers/getPublishers';
import PublisherItem from './PublisherItem.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from 'swiper';

function Publishers() {
    const {data, loading} = useSelector(state => state.publishers.publishers);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPublishers())
    }, []);

    return (
        <div className='mt-14 overflow-hidden'>
            <Title text="Publishers" />
            {/* <div className="flex gap-5 shrink-0 items-center">
                {data.map(publisher =><PublisherItem {...publisher} key={publisher.id} />)}
            </div> */}
            <Swiper
                slidesPerView={6}
                grid={{
                  rows: 1,
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation
                modules={[Grid, Navigation]}
                className="mySwiper"
            >
                {data.map(publisher =><SwiperSlide key={publisher.id}><PublisherItem {...publisher} /></SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default Publishers