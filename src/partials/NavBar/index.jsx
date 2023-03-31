import { Button, Input } from '@mui/joy'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Wrapper from '../Wrapper'
import { useDispatch, useSelector } from 'react-redux';
import { filterArticles, setFilterKeyWord } from '../../redux/features/articles';

function NavBar() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filterKeyword = useSelector(state => state.articles.filterKeyword);
  
  const handleSearchValueChange =  e =>{
    const {value} = e.target;
    dispatch(setFilterKeyWord(value));
    dispatch(filterArticles({query: value}))
  }

  return (
    <Wrapper>
      <div className='flex justify-between items-center py-5 sm:py-10'>
          <div className={`cursor-pointer ${showMobileSearch ? 'hidden sm:block': ''}`} onClick={() =>navigate('/')}>
              <img src="/logo.png" alt="" className='w-12' />
          </div>
          <div className="hidden sm:block">
            <Input startDecorator={<AiOutlineSearch />} value={filterKeyword} onChange={handleSearchValueChange} placeholder='Enter a keyword to filter' variant="soft" size="lg" className="w-80" />
          </div>
          {
            showMobileSearch ?
            <div className="block sm:hidden w-full animate-grow">
              <Input startDecorator={<AiOutlineSearch />} value={filterKeyword} onChange={handleSearchValueChange} placeholder='Enter a keyword to filter' variant="soft" fullWidth autoFocus onBlur={() =>setShowMobileSearch(false)} />
            </div>:
            <div className="block sm:hidden">
              <Button variant="soft" color='neutral' onClick={() =>setShowMobileSearch(true)}><AiOutlineSearch /></Button>
            </div>
          }
      </div>
    </Wrapper>
  )
};

function withNavBar(Component){
  return <>
    <NavBar />
    <Component />
  </>
}

export default withNavBar;