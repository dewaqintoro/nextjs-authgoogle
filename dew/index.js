import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

import LoginDew from './login';


const Index = () => {

  // useEffect(() => {
  //   console.log('window.innerHeight', window.innerHeight);
  // })

  return (
    // <>
    //   <Examples />
    //   <Link href="/show-redux-state">
    //     <a>Click to see current Redux State</a>
    //   </Link>
    // </>
    <div className="loginku">
      <LoginDew/>
    </div>
  )
}

export default Index
