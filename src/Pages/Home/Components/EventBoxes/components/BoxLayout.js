import { keyframes } from "@emotion/react";
import { Box, Container, Text } from "@chakra-ui/react";

function BoxLayout(props) {

  const scrollUp = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(-100%);
    }
  `;

  return (
    <Container w="375px" border="1px solid rgba(255, 255, 255, 0.711)" p={0}>
      <Box w="100%" bg="#034C7F" py="10px" color="white" borderTopRadius={10}>
        <Text fontWeight="700" ml="10px" fontSize="18px">
          {props.title}
        </Text>
      </Box>

      <Box  border='1px solid #DADCE0' p="10px" overflow="hidden" position="relative" h='450px' borderBottomRadius='10'>
        <Box
          position="absolute"
          animation={`${scrollUp} 20s linear infinite`}
          css={{
            '&:hover': {
              animationPlayState: 'paused',
              cursor: 'pointer',
            }
          }}
          width="100%"
          ml='-18px'
        >
          {props.component}

        </Box>
      </Box>
    </Container>
  );
}

export default BoxLayout;
