import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../../commons/Title';
import getPublishers from '../../../redux/actions/publishers/getPublishers';
import PublisherItem from './PublisherItem.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from 'swiper';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import useWindowWidth from '../../../hooks/useWindowWidth';

function Publishers() {
    const {data, loading} = useSelector(state => state.publishers.publishers);
    const dispatch = useDispatch();
    const swiper = useRef();
    const [isPrevDisabled, setIsPrevDisabled] = useState(true)
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const windowWidth = useWindowWidth();

    useEffect(() =>{
        dispatch(getPublishers())
    }, []);

    useEffect(() =>{
        (() =>{
            if(swiper.current){
                setIsPrevDisabled(swiper.current.swiper.isBeginning);
                setIsNextDisabled(data.length < 6)
            }
        })()
    }, [swiper.current, data]);

    const handleSlideChange = (isBeginning, isEnd) =>{
        setIsPrevDisabled(isBeginning);
        setIsNextDisabled(isEnd)
    };

    return (
        <div className='my-14 overflow-hidden'>
            <div className="flex justify-between items-center mb-10">
                <Title text="Publishers" />
                <div className="flex gap-5">
                    <button disabled={isPrevDisabled} className={`cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400 text-black`} onClick={() =>swiper.current.swiper?.slidePrev()}>
                        <AiOutlineLeft />
                    </button>
                    <button disabled={isNextDisabled} className={`cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400 text-black`} onClick={() =>swiper.current.swiper?.slideNext()}>
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
            <Swiper
                slidesPerView={windowWidth <= 400 ? 2: windowWidth <= 900 ? 4: 6}
                grid={{
                  rows: 1,
                }}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Navigation]}
                ref={swiper}
                onReachBeginning={() =>{}}
                onReachEnd={() =>{}}
                className="grow"
                onSlideChange={slide =>handleSlideChange(slide.isBeginning, slide.isEnd)}
            >
                {data.slice(10).map(publisher =><SwiperSlide key={publisher.id}><PublisherItem {...publisher} /></SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default Publishers