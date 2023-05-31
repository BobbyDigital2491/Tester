import React from "react";
import { Box, Flex, Text } from "@100mslive/react-ui";
import PlaceholderBg from "../images/first_person.png";

export const FirstPersonDisplay = React.memo(() => {
  return (
    <Box
      css={{
        position: "relative",
        overflow: "hidden",
        w: "37.5rem",
        maxWidth: "80%",
        h: "100%",
        r: "$3",
        m: "0 auto",
        backgroundImage: `url(${PlaceholderBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "@md": {
          w: "100%",
          maxWidth: "unset",
        },
      }}
      data-testid="first_person_img"
    >
      <Flex
        align="center"
        direction="column"
        css={{
          position: "absolute",
          w: "100%",
          top: "33.33%",
          left: 0,
          textAlign: "center",
        }}
      >
        <ul>
          <Text color="white" variant="h4" css={{ "@md": { fontSize: "$md" } }}>
            Welcome to the Web 3 Factory
          </Text>
        </ul>
        <Text
          color="white"
          variant="h6"
          css={{ mt: "$4", "@md": { fontSize: "$sm" } }}
        >
          - Be proffessional
        </Text>
        <Text
          color="white"
          variant="h6"
          css={{ mt: "$2", "@md": { fontSize: "$sm" } }}
        >
          - Mute when not speaking
        </Text>
        <Text
          color="white"
          variant="h6"
          css={{ mt: "$2", "@md": { fontSize: "$sm" } }}
        >
          - Avoid interrupting
        </Text>
        <Text
          color="white"
          variant="h6"
          css={{ mt: "$2", "@md": { fontSize: "$sm" } }}
        >
          - Use chat or hand-raising features
        </Text>
        <Text
          color="white"
          variant="h6"
          css={{ mt: "$2", "@md": { fontSize: "$sm" } }}
        >
          - Respect others' opinions and perspectives
        </Text>
      </Flex>
    </Box>
  );
});
