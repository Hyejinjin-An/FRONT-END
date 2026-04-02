import axios from "axios";


export async function getPokemon(id) 
{
  try 
  {
    const [res, speciesRes] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    ])
      
    const data = res.data;
    const speciesData = speciesRes.data;
    
    const result = {
      name: data.name,
      koName: speciesData.names.find(n=> n.language.name ==='ko')?.name,
      types: data.types?.map(t=>t.type.name),
      image: data.sprites.other["official-artwork"].front_default,
      moves: data.moves.map(m=>m.move.name)
    }
    // console.log(result)
    return result;
  } 
  catch (err) 
  {
    console.error(err)
  }
}

export async function getPokemonDetails(id) 
{
  try {
    const [res, speciesRes] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    ]);

    const data = res.data;
    const speciesData = speciesRes.data;

    return {
      name: data.name,
      koName: speciesData.names.find(n => n.language.name === 'ko')?.name,
      image: data.sprites.other["official-artwork"].front_default,
      types: data.types.map(t => t.type.name),

      // ⭐ 추가 정보
      height: data.height,
      weight: data.weight,

      // ⭐ 능력치
      stats: data.stats.map(s => ({
        name: s.stat.name,
        value: s.base_stat
      })),

      // ⭐ 기술
      moves: data.moves.map(m => m.move.name),

      // ⭐ 설명 (한국어)
      description:
        speciesData.flavor_text_entries.find(
          f => f.language.name === "ko"
        )?.flavor_text || "설명 없음"
    };

  } catch (err) {
    console.error(err);
  }
}