import { Button, Grid, HStack, Text } from "@chakra-ui/react";
import PokemonCard from "../components/PokemonCard"
import { useState } from "react";

// export default function PokemonCards() {
//   return (
//     <Grid
//       templateColumns={
//         {
//           base: "repeat(1, 1fr)",
//           md: "repeat(3, 1fr)",
//           lg: "repeat(5, 1fr)",
//         }
//       }
//       rowGap={4}
//       columnGap={4}
//     >
//       {
//         Array.from({length: 151}, (_,i)=>i+1).map(id=>{
//           return <PokemonCard key={id} id={id}/>
//         }) 
//       }
//     </Grid>
//   )
// }

export default function PokemonCards() {
  const [page, setPage] = useState(1);
  const limit = 6;

  const pokemonIds = Array.from({ length: 151 }, (_, i) => i + 1);

  const totalPage = Math.ceil(pokemonIds.length / limit);
  const offset = (page - 1) * limit;
  const currentIds = pokemonIds.slice(offset, offset + limit);

  const maxVisible = 5;
  let start = Math.max(1, page - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end > totalPage) {
    end = totalPage;
    start = Math.max(1, end - maxVisible + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) 
  {
    pages.push(i);
  }

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {currentIds.map((id) => (
          <PokemonCard key={id} id={id} />
        ))}
      </Grid>

      <HStack justify="center" mt={6} wrap="wrap">
        {/* 이전 */}
        <Button
          size="sm"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          isDisabled={page === 1}
        >
          이전
        </Button>

        {/* 페이지 번호 */}
        {/* {Array.from(
          { length: Math.min(maxVisible, totalPage) },
          (_, i) => i + 1).map((p) => (
          <Button
            key={p}
            size="sm"
            onClick={() => setPage(p)}
            variant={p === page ? "solid" : "outline"}
          >
            {p}
          </Button>
        ))} */}
        {/* 페이지 번호 */}
        {pages.map((p) => (
          <Button
            key={p}
            size="sm"
            onClick={() => setPage(p)}
            variant={p === page ? "solid" : "outline"}
          >
            {p}
          </Button>
        ))}

        {/* ... 처리 */}
        {totalPage > maxVisible && (
          <>
            <Text>...</Text>
            <Button
              size="sm"
              onClick={() => setPage(totalPage)}
              variant={page === totalPage ? "solid" : "outline"}
            >
              {totalPage}
            </Button>
          </>
        )}

        {/* 다음 */}
        <Button
          size="sm"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPage))}
          isDisabled={page === totalPage}
        >
          다음
        </Button>
      </HStack>
    </>
  );
}