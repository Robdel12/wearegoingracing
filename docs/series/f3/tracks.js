import React from 'react';

let tracks = [
  {
    name: 'Charlotte Motor Speedway',
    configs: [
      {
        name: 'Roval - 2018',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/charlotte/2018/roval/track_map.jpg'
      },
      {
        name: 'Legends Oval - 2018',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/charlotte/2018/legendsoval/track_map.jpg'
      },
      {
        name: 'Legends RC Long - 2018',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/charlotte/2018/legendsrclong/track_map.jpg'
      },
      {
        name: 'Legends RC Medium - 2018',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/charlotte/2018/legendsrcmed/track_map.jpg'
      },
      {
        name: 'Legends RC Short - 2018',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/charlotte/2018/legendsrcshort/track_map.jpg'
      },
      {
        name: 'Oval - 2018',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/charlotte/2018/oval/track_map.jpg'
      },
      {
        name: 'Roval Long - 2018',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/charlotte/2018/rovallong/track_map.jpg'
      },
      {
        name: 'Roval',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/charlotte/2018/roval-2019/track_map.jpg'
      }
    ]
  },
  {
    name: 'Circuit de Barcelona Catalunya',
    configs: [
      {
        name: 'Grand Prix',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/barcelona/gp/track_map.jpg'
      },
      {
        name: 'National',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/barcelona/national/track_map.jpg'
      },
      {
        name: 'Club',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/barcelona/club/track_map.jpg'
      },
      {
        name: 'Moto',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/barcelona/moto/track_map.jpg'
      },
      {
        name: 'Historic',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/barcelona/historic/track_map.jpg'
      }
    ]
  },
  {
    name: 'Circuit de Spa-Francorchamps',
    configs: [
      {
        name: 'Grand Prix Pits',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/spa/tle_tmap_spa_gp.jpg'
      },
      {
        name: 'Classic Pits',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/spa/tle_tmap_spa_classic.jpg'
      },
      {
        name: 'Endurance',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/spa/tle_tmap_spa_classic.jpg'
      }
    ]
  },
  {
    name: 'Circuit of the Americas',
    configs: [
      {
        name: 'Grand Prix',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/cota/gp/track_map.jpg'
      },
      {
        name: 'East',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/cota/east/track_map.jpg'
      },
      {
        name: 'West',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/cota/west/track_map.jpg'
      }
    ]
  },
  {
    name: 'Lime Rock Park',
    configs: [
      {
        name: 'Classic',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/limerockpark/2019/classic/track_map.jpg'
      },
      {
        name: 'Grand Prix',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/limerockpark/2019/gp/track_map.jpg'
      },
      {
        name: 'Chicanes',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/limerockpark/2019/chicanes/track_map.jpg'
      },
      {
        name: 'West Bend Chicane',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/limerockpark/2019/chicanewestb/track_map.jpg'
      }
    ]
  },
  {
    name: 'Okayama International Circuit',
    configs: [
      {
        name: 'Full Course',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/okayama/tle_tmap_oka_full.jpg'
      },
      {
        name: 'Short',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/okayama/tle_tmap_oka_short.jpg'
      }
    ]
  },
  {
    name: 'Sebring International Raceway',
    configs: [
      {
        name: 'International',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/sebring/tle_tmap_sir_international.jpg'
      },
      {
        name: 'Modified',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/sebring/tle_tmap_sir_modified.jpg'
      },
      {
        name: 'Club',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/sebring/tle_tmap_sir_test.jpg'
      }
    ]
  },
  {
    name: 'Silverstone Circuit - 2011',
    configs: [
      {
        name: 'Grand Prix',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/silverstone/tle_tmap_sc_grandprix.jpg'
      },
      {
        name: 'Historical Grand Prix',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/silverstone/tle_tmap_sc_historical.jpg'
      },
      {
        name: 'International',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/silverstone/tle_tmap_sc_international.jpg'
      },
      {
        name: 'National',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/silverstone/tle_tmap_sc_national.jpg'
      },
      {
        name: 'Southern',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/silverstone/tle_tmap_sc_southern.jpg'
      }
    ]
  },
  {
    name: 'Suzuka International Racing Course',
    configs: [
      {
        name: 'Grand Prix',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/suzuka/tle_tmap_grandprix_spr.jpg'
      },
      {
        name: 'Moto',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/suzuka/tle_tmap_moto_spr.jpg'
      },
      {
        name: 'East',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/suzuka/tle_tmap_east_spr.jpg'
      },
      {
        name: 'West',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/suzuka/tle_tmap_west_spr.jpg'
      },
      {
        name: 'West w/chicane',
        map:
          'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/suzuka/tle_tmap_westchicane_spr.jpg'
      }
    ]
  },
  {
    name: 'WeatherTech Raceway at Laguna Seca',
    configs: [
      {
        name: 'Full Course',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/lagunaseca/track_map.jpg'
      },
      {
        name: 'School',
        map: 'https://d3bxz2vegbjddt.cloudfront.net/members/member_images/tracks/lagunaseca/track_map.jpg'
      }
    ]
  }
];

// let selectedTracks = [
//   'Brands Hatch',
//   'Charlotte Motor Speedway',
//   'Circuit de Barcelona Catalunya',
//   'Circuit de Spa-Francorchamps',
//   'Circuit of the Americas',
//   'Lime Rock Park',
//   'Okayama International Circuit',
//   'Sebring International Raceway',
//   'Silverstone Circuit - 2011',
//   'Suzuka International Racing Course',
//   'Tsukuba Circuit',
//   'WeatherTech Raceway at Laguna Seca'
// ];

export default function Tracks() {
  return (
    <div>
      {tracks.map(track => (
        <div key={track.name}>
          <h3>{track.name}</h3>
          Configs:
          <ul>
            {track.configs.map(config => (
              <li>
                {config.name}
                <br />
                <img src={config.map} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
