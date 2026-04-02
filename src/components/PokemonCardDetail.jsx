import { useEffect, useState } from "react";
import { getPokemonDetails } from "../api/pokeAPI";
import { Box, Button, Heading, HStack, Image, Progress, Tabs, Text } from "@chakra-ui/react";
import TypeBadge from "./TypeBadge";

export default function PokemonDetail({ id, onPrev, onNext }) 
{
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonDetails(id);
      setPokemon(data);
    }
    fetchData();
  }, [id]);

  if (!pokemon) return <Text>로딩중...</Text>;

  return (
    <Box maxW="500px" mx="auto" mt={10}>
        {/* 이름 */}
        <Heading textAlign="center" mb={4}>
        {pokemon.koName} ({pokemon.name})
        </Heading>

        {/* 이미지 */}
        <Image src={pokemon.image} mx="auto" />

        {/* 타입 */}
        <HStack justify="center" mt={3}>
        {pokemon.types.map((t, i) => (
            <TypeBadge key={i} typeName={t} />
        ))}
        </HStack>

        {/* Tabs */}
        <Tabs.Root defaultValue="info" mt={6}>
            <Tabs.List>
                <Tabs.Trigger value="info">정보</Tabs.Trigger>
                <Tabs.Trigger value="moves">기술</Tabs.Trigger>
                <Tabs.Trigger value="stats">능력치</Tabs.Trigger>
            </Tabs.List>

            {/* 정보 */}
            <Tabs.Content value="info">
                <Text mt={4}>키: {pokemon.height}</Text>
                <Text>몸무게: {pokemon.weight}</Text>
            </Tabs.Content>

            {/* 기술 */}
            <Tabs.Content value="moves">
                <Box maxH="200px" overflowY="scroll" mt={4}>
                {pokemon.moves.map((move, idx) => (
                    <Text key={idx}>{move}</Text>
                ))}
                </Box>
            </Tabs.Content>

            {/* 능력치 */}
            <Tabs.Content value="stats">
                <Box mt={4}>
                {pokemon.stats?.map((stat, idx) => (
                    <Box key={idx} mb={3}>
                        <Text>{stat.name}</Text>
                        <Progress.Root value={stat.value}>
                            <Progress.Track>
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                    </Box>
                ))}
                </Box>
            </Tabs.Content>
        </Tabs.Root>

        {/* 이전 / 다음 버튼 */}
        <HStack justify="center" mt={6}>
            <Button onClick={onPrev} isDisabled={id === 1}>
                이전
            </Button>
            <Button onClick={onNext} isDisabled={id === 151}>
                다음
            </Button>
        </HStack>
    </Box>
  );
}