import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Leftframe from './../components/sections/homepage/Leftframe'
import Centerframe from './../components/sections/homepage/Centerframe'
import Rightframe from './../components/sections/homepage/Rightframe'
import Loginbox from '../components/utils/Loginbox'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hate Company</title>
        <meta name="description" content="Hate Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <div className='col-xl-11 px-3 mx-auto'>
            <div className='row'>
              <div className='col-xl-3'>
                <Leftframe />
              </div>
              <div className='col-xl'>
                <Centerframe />
              </div>
              <div className='col-xl-3'>
                <Rightframe />
              </div>
            </div>
          </div>
          <Loginbox />
      </Layout>
    </>
  )
}
