/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Box, Flex, Text, useTheme } from "@100mslive/react-ui";
import Password from "../components/Password.jsx";

function ErrorPage({ error }) {
  const themeType = useTheme().themeType;
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        size: "100%",
        color: "$textPrimary",
        backgroundColor: "$bgPrimary",
      }}
    >
      <Box css={{ position: "relative", overflow: "hidden", r: "$3" }}>
        <img
          src={
            themeType === "dark"
              ? require("../images/error-bg-dark.svg")
              : require("../images/error-bg-light.svg")
          }
          alt="Home Background"
          width={1200}
          height={200}
        />
        {window.location.hostname === "localhost" ? (
          <Flex
            align="center"
            direction="column"
            css={{ position: "absolute", size: "100%", top: "33.33%", left: 0 }}
          >
            <image
              src="{../images/viccci.png}"
              alt="logo"
              width={30}
              height={40}
            />
            <Text variant="h3">Web 3 Factory</Text>
            <Text
              variant="body1"
              css={{ margin: "1.75rem", textAlign: "center" }}
            >
              {
                "A real time video conference platform built for business meetings and educational events.. "
              }
              <br />
              <br />
              <Password />
            </Text>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <footer class="footer">Created By Viccci Protcol</footer>
          </Flex>
        ) : (
          <Flex
            align="center"
            direction="column"
            height={200}
            css={{ position: "absolute", size: "100%", top: "33.33%", left: 0 }}
          >
            <Text variant="h2">404</Text>
            <Text variant="h4" css={{ mt: "1.75rem" }}>
              {error}
            </Text>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}

ErrorPage.displayName = "ErrorPage";

export default ErrorPage;
