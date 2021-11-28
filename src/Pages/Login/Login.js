import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  return (
    <Center className="login" p={8}>
      <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
        {/* Google */}
        <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
          <Center>
            <Text onClick={signInUsingGoogle}>Sign in with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
};

export default Login;
