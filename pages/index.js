import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../components/layout/Layout'
import Leftframe from './../components/sections/homepage/Leftframe'
import Centerframe from './../components/sections/homepage/Centerframe'
import Rightframe from './../components/sections/homepage/Rightframe'

const inter = Inter({ subsets: ['latin'] })

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
          <div className='col-lg-11 p-0 mx-auto'>
            <div className='row'>
              <div className='col-lg-3'>
                <Leftframe />
              </div>
              <div className='col-lg'>
                <Centerframe />
              </div>
              <div className='col-lg-3'>
                <Rightframe />
              </div>
            </div>
          </div>
      </Layout>
    </>
  )
}
