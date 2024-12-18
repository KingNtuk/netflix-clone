import React from 'react'
import Main from '../Component/Main'
import Rows from '../Component/Rows'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main />
        <Rows rowId='1' title="Trending" fetchUrl={requests.requestTrending}  />
        <Rows rowId='2' title="Popular" fetchUrl={requests.requestPopular}  />
        <Rows rowId='3' title="TV" fetchUrl={requests.requestTv}  />
        <Rows rowId='4' title="Cartoons" fetchUrl={requests.requestPage}  />
    </>
  )
}

export default Home
