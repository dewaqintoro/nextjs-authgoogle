import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../actions'
import Examples from '../components/examples'
import DewGoogleAuth from './google'
const Index = () => {

  return (
    <>
      {/* <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link> */}
      <div>
        <DewGoogleAuth/>
      </div>
    </>
  )
}

export default Index
