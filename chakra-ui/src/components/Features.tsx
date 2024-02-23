import { Box, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { Home } from "../icons/Icon";
import { ElementType } from "react";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

export const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack as="li" spacing="6" {...rest}>
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8">
      <HStack px="12" spacing="5">
        <Feature icon={() => <Home color="#EF4823" />}>
          Lorem ipsum dolor sit amet.
        </Feature>
        <Feature icon={() => <Home color="#ae4789" />}>
          {" "}
          Lorem ipsum dolor sit amet.
        </Feature>
        <Feature icon={() => <Home color="#aa9823" />}>
          {" "}
          Lorem ipsum dolor sit amet.
        </Feature>
      </HStack>
    </Box>
  );
};

export default Features;
