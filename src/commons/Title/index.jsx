import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import changeRoute from '../../helpers/changeRoute';

function Title({text, withBackIcon, onBack}) {
  const navigate = useNavigate();

  return <div className="text-3xl sm:text-5xl font-bold flex items-center gap-5">
    {withBackIcon && <FiArrowLeft onClick={() =>onBack ? onBack(): changeRoute(navigate, -1)} className="cursor-pointer" />} {text}
  </div>
}

export default Title