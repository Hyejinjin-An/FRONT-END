// 자동완성으로 import 가능
import axios from "axios";

// axios.get("https://pokeapi.co/api/v2/pokemon/1").then( res => { console.log(res.data) })
// PS C:\Users\USER\TECH_UP> node 'c:\Users\USER\TECH_UP\src\react_study\ex10_axios\ex01_basic.js'
// {
//   abilities: [
//     { ability: [Object], is_hidden: false, slot: 1 },
//     { ability: [Object], is_hidden: true, slot: 3 }
//   ],
//   base_experience: 64,
//   cries: {
//     latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
//     legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg'
//   },
//   forms: [
//     {
//       name: 'bulbasaur',
//       url: 'https://pokeapi.co/api/v2/pokemon-form/1/'
//     }
//   ],
//   game_indices: [
//     { game_index: 153, version: [Object] },
//     { game_index: 153, version: [Object] },
//     { game_index: 153, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] },
//     { game_index: 1, version: [Object] }
//   ],
//   height: 7,
//   held_items: [],
//   id: 1,
//   is_default: true,
//   location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
//   name: 'bulbasaur',
//   order: 1,
//   past_abilities: [ { abilities: [Array], generation: [Object] } ],
//   past_stats: [ { generation: [Object], stats: [Array] } ],
//   past_types: [],
//   species: {
//     name: 'bulbasaur',
//     url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
//   },
//   sprites: {
//     back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',        
//     back_female: null,
//     back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',    
//     back_shiny_female: null,
//     front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
//     front_female: null,
//     front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',        
//     front_shiny_female: null,
//     other: {
//       dream_world: [Object],
//       home: [Object],
//       'official-artwork': [Object],
//       showdown: [Object]
//     },
//     versions: {
//       'generation-i': [Object],
//       'generation-ii': [Object],
//       'generation-iii': [Object],
//       'generation-iv': [Object],
//       'generation-ix': [Object],
//       'generation-v': [Object],
//       'generation-vi': [Object],
//       'generation-vii': [Object],
//       'generation-viii': [Object]
//     }
//   },
//   stats: [
//     { base_stat: 45, effort: 0, stat: [Object] },
//     { base_stat: 49, effort: 0, stat: [Object] },
//     { base_stat: 49, effort: 0, stat: [Object] },
//     { base_stat: 65, effort: 1, stat: [Object] },
//     { base_stat: 65, effort: 0, stat: [Object] },
//     { base_stat: 45, effort: 0, stat: [Object] }
//   ],
//   types: [ { slot: 1, type: [Object] }, { slot: 2, type: [Object] } ],
//   weight: 69
// }

export async function getPokemon(id) {
  try 
  {
    // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // const resKr = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const [res, speciesRes] = await Promise.all(
      [
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      ]
    ) 

    const data = res.data;
    const speciesData = speciesRes.data;

    const result = 
    {
      name: data.name,
      koName: speciesData.names.find( n => n.language.name === 'ko')?.name,
      types: data.types?.map(t => t.type.name), // 배열로 추출
    //image: data.sprites.front_default,
      image: data.sprites.other["official-artwork"].front_default,
      moves: data.moves.map(m => m.move.name) // 기술 전체
    };

    return result;
  } 
  catch (err) 
  {
    console.error(err);
  }
}

// 실행 
const res = await getPokemon(1); // top-level await 지원 환경이라 가능
console.log(res);

// 결과
// {
//   name: 'bulbasaur',
//   koName: '이상해씨',
//   types: [ 'grass', 'poison' ],
//   image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
//   moves: [
//     'razor-wind',    'swords-dance',   'cut',          'bind',
//     'vine-whip',     'headbutt',       'tackle',       'body-slam',
//     'take-down',     'double-edge',    'growl',        'strength',
//     'mega-drain',    'leech-seed',     'growth',       'razor-leaf',
//     'solar-beam',    'poison-powder',  'sleep-powder', 'petal-dance',
//     'string-shot',   'toxic',          'rage',         'mimic',
//     'double-team',   'defense-curl',   'light-screen', 'reflect',
//     'bide',          'sludge',         'skull-bash',   'amnesia',
//     'flash',         'rest',           'substitute',   'snore',
//     'curse',         'protect',        'sludge-bomb',  'mud-slap',
//     'outrage',       'giga-drain',     'endure',       'charm',
//     'false-swipe',   'swagger',        'fury-cutter',  'attract',
//     'sleep-talk',    'return',         'frustration',  'safeguard',
//     'sweet-scent',   'synthesis',      'hidden-power', 'sunny-day',
//     'rock-smash',    'facade',         'nature-power', 'helping-hand',
//     'ingrain',       'knock-off',      'secret-power', 'weather-ball',
//     'grass-whistle', 'bullet-seed',    'magical-leaf', 'natural-gift',
//     'worry-seed',    'seed-bomb',      'energy-ball',  'leaf-storm',
//     'power-whip',    'captivate',      'grass-knot',   'venoshock',
//     'acid-spray',    'round',          'echoed-voice', 'grass-pledge',
//     'work-up',       'grassy-terrain', 'confide',      'grassy-glide',
//     'tera-blast',    'trailblaze'
//   ]
// }