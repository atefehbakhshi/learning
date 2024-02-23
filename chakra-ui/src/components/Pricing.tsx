import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="2px 2px 4px 0 rgba(0, 0, 0, 0.2)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#f0eafb" p="60px">
            <Text fontSize="2xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]} mt="4">
              $329
            </Heading>
            <Text color="#171923" fontSize="lg" fontWeight="medium" mt="2">
              bill just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="24px">
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="lg" bg="#fff">
            <Text textAlign="left">
              Access these features when you get this pricing package business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <ListItem>Internal calling and messaging API</ListItem>
              <ListItem>Internal calling and messaging API</ListItem>
              <ListItem>Internal calling and messaging API</ListItem>
              <ListItem>Internal calling and messaging API</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
