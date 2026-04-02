import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";

export default function Ex01_Box()
{
    const cardBg = useColorModeValue('white', 'blue.800')

    return (
    <>
      <Box p={6} bg={cardBg} rounded="md">
        <Text>Box는 기본 컨테이너</Text>
      </Box>
      <Box p={6} bg={{base: 'green.500', _dark:'red.500'}} rounded="md">
        <Text>Box는 가장 기본 컨테이너입니다.</Text>
      </Box>
    </>
  );
}