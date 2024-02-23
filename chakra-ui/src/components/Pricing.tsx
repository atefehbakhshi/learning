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
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-256px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="2px 2px 4px 0 rgba(0, 0, 0, 0.2)"
    >
      <Flex>
        <Box bg="#f0eafb" p="60px">
          <Text fontSize="24px" fontWeight="800">
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="60px" mt="16px">
            $329
          </Heading>
          <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">
            bill just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">
            Get Started
          </Button>
        </Box>
        <Box p="60px" fontSize="18px" bg="#fff">
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
  );
};

export default Pricing;
