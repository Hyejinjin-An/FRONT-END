import PokemonCard from "./ex02_pokemonCard"

export function PokemonCards() {
    return (
    <div
      style={{
        display:"grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap:"16px"
      }}
    >
    {/* TODO - PokemonCard 9장을 배치하기 */}
    {
        // [1, 2, 56, 73, 235, 424, 234, 640, 134].map( (n) => {
        //     return <PokemonCard key={n} id={n}/>
        // })
        
        new Array(50).fill(0).map( (n, i) => {
            return <PokemonCard key={i} id={i+1}/>
        })
    }
    </div>
  )
}