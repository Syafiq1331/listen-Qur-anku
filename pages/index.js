import Head from 'next/head'
import { Inter } from '@next/font/google'
import Audio from './Audio'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ datas }) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto fontPrimary">
          <h1
            className='text-4xl mt-10 mb-6 text-center font-bold'
          >Listen Qur'anku</h1>
          <p
            className='text-center mb-10'
          >Written by
            <a
              className='text-blue-500'
              href='https://github.com/Syafiq1331'
            > Syafiq Rizky Fauzi
            </a>
          </p>
          <div
            className='flex flex-wrap justify-center items-center gap-x-4 gap-y-2'
          >
            {
              datas.map((data, index) => {
                return (
                  <Audio
                    key={index}
                    ayat={data.jumlah_ayat}
                    name={data.nama}
                    audio={data.audio}
                    diturukan={data.tempat_turun}
                  />
                )
              })
            }
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://equran.id/api/surat');
  const data = await res.json();

  return {
    props: {
      datas: data
    }
  }
}