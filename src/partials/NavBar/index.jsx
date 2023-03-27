import { Button, Input } from '@mui/joy'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Wrapper from '../Wrapper'

function NavBar() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <Wrapper>
      <div className='flex justify-between items-center py-5 sm:py-10'>
          <div className={showMobileSearch && 'hidden sm:block'}>
              <img src="/logo.png" alt="" className='w-12' />
          </div>
          <div className="hidden sm:block">
            <Input startDecorator={<AiOutlineSearch />} variant="soft" size="lg" className="w-80" />
          </div>
          {
            showMobileSearch ?
            <div className="block sm:hidden w-full animate-grow">
              <Input startDecorator={<AiOutlineSearch />} variant="soft" fullWidth autoFocus onBlur={() =>setShowMobileSearch(false)} />
            </div>:
            <div className="block sm:hidden">
              <Button variant="soft" color='neutral' onClick={() =>setShowMobileSearch(true)}><AiOutlineSearch /></Button>
            </div>
          }
      </div>
    </Wrapper>
  )
}

export default NavBar