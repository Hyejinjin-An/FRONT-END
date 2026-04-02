import { Badge, HStack, Icon, Text } from "@chakra-ui/react";
import { getTypeConfig } from "../config/pokemonTypes";

export default function TypeBadge({typeName}) {
  const typeConfig = getTypeConfig(typeName);
  return (
    <Badge
      colorPalette={typeConfig.color}
      bgColor={typeConfig.bgColor}
      color={typeConfig.color}
      px={2}
      py={1}
      borderRadius='full'
      fontSize='sm'
      fontWeight='semibold'
    >
      <HStack>
        <Icon as={typeConfig.icon} w={3} h={3}/>
        <Text textTransform="uppercase">{typeConfig.displayName}</Text>
      </HStack>
    </Badge>
  )
}