import {
  Stack,
  Image,
  Box,
  Icon,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
} from '@chakra-ui/react'
import { MdAccountCircle, MdOutlineBolt } from 'react-icons/md'

export const Talk = () => (
  <Stack width="1280px" height="832px" maxWidth="100%" background="#FFFFFF">
    <Stack justify="flex-start" align="center" spacing="50px">
      <Stack justify="flex-start" align="flex-start" spacing="10px">
        <Image />
        <Stack direction="row" justify="center" align="center" spacing="10px">
          <Box
            borderRadius="10px"
            width="800px"
            height="100px"
            maxWidth="100%"
            background="white"
            boxShadow="dark-lg"
          />
          <Icon>
            <Text
              fontFamily="Inter"
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="16px"
              color="black"
            >
              私
            </Text>
            <Icon as={MdAccountCircle} />
          </Icon>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justify="center"
        align="center"
        spacing="10px"
        width="870px"
        height="100px"
        maxWidth="100%"
      >
        <Icon as={MdOutlineBolt} />
        <Box
          borderRadius="10px"
          width="800px"
          alignSelf="stretch"
          maxWidth="100%"
          background="#E5E5E5"
          boxShadow="dark-lg"
        />
      </Stack>
    </Stack>
    <InputGroup size="lg">
      <Input placeholder="入力..." size="lg" />
      <InputRightAddon background="rgba(0, 191, 255, 0.8)">
        <Icon />
      </InputRightAddon>
    </InputGroup>
  </Stack>
)
