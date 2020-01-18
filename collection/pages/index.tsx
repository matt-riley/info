import React, { Fragment } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

// const TOTALS = gql`
//   query totals {

//   }
// `

// export interface Artists {
//   id: string;
//   description: string;
//   name: string;
// }

// const ARTISTS = gql`
//   query artists {
//     music {
//       collection {
//         artists{
//           id
//           name
//           description
//         }
//       }
//     }
//   }
// `

const RELEASES = gql`
  query releases {
    music {
      collection {
        releases {
          id
          title
          country
          genres
          artists {
            id
            name
            description
          }
        }
      }
    }
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(RELEASES)
  if (loading) {
    return <p>LOADING...</p>
  }
  
  if (error) {
    <p>Error: {JSON.stringify(error)}</p>
  }
  
  // const artists: Artists[] = data.music.collection.artists;
  const releases = data.music.collection.releases;
  return(
    <Fragment>
      {/* <h1>Artists</h1>
      <ul>
        {artists.sort((a, b) => (a.name > b.name) ? 1 : -1).map((artist: { id: string; name: string; }) => {
          return <li key={`artist_${artist.id}`}>{artist.name}</li>
        })}
      </ul> */}
      <h1>Releases</h1>
      <ul>
        {releases.sort((a,b) => (a.title > b.title) ? 1 : -1).map((release) => {
          return <li key={`release_${release.id}`}>{release.title} by {release.artists[0].name}</li>
        }) }
      </ul>
    </Fragment>
  )
}

export default Home
