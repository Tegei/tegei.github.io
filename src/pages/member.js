import * as React from "react";
import {
  Box,
  Badge,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { getMembers } from "../components/getMember";
import "../static/member.css";
import { StaticImage } from "gatsby-plugin-image";

const textColor = "#C44FC4";

const Content = ({ tag, content }) => {
  return (
    <>
      <Flex align="baseline" mt={2}>
        <Badge width={14} colorScheme="blackAlpha" color="gray.600">
          {tag}
        </Badge>
        <Text ml={2} fontSize="sm" fontWeight="bold" color={textColor}>
          {content}
        </Text>
      </Flex>
    </>
  );
};

const MemberImage = ({ path }) => {
  return (
    <Image
      boxSize="200px"
      borderRadius="md"
      src={
        "https://raw.githubusercontent.com/Tegei/tegei.github.io/main/images/" +
        path
      }
      alt={
        "https://raw.githubusercontent.com/Tegei/tegei.github.io/main/images/" +
        path
      }
      width={200}
      aspectRatio={1 / 1}
    />
  );
};

const MemberModal = ({ member, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="5" maxW="320px" borderRadius="md" borderWidth="1px">
          <ModalHeader>{member.name}</ModalHeader>

          <MemberImage path={member.imagePath} />

          {Object.keys(member).map((key) => {
            return (
              <>
                {key !== "imagePath" && (
                  <Content tag={key} content={member[key]} />
                )}
              </>
            );
          })}

          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

const ShowMember = ({ member }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      ml={5}
      mr={5}
      mt={5}
      p="5"
      maxW="320px"
      borderRadius="md"
      borderWidth="1px"
      backgroundColor="whiteAlpha.800"
      onClick={onOpen}
    >
      <MemberImage path={member.imagePath} />
      <Content tag="name" content={member.name} />
      <MemberModal member={member} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

const ShowMemberList = () => {
  const [members, setMember] = React.useState([]);
  React.useEffect(() => {
    getMembers().then((obj) => {
      setMember(obj);
    });
  }, []);
  return (
    <>
      {members.length > 0 && (
        <Wrap>
          {members.map((member) => {
            return (
              <>
                {member.free !== undefined && (
                  <WrapItem>
                    <ShowMember member={member} />
                  </WrapItem>
                )}
              </>
            );
          })}
        </Wrap>
      )}
    </>
  );
};

const Header = () => {
  return (
    <a href="/">
      <Flex
        as="header"
        top={0}
        width="100%"
        shadow="sm"
        py={4}
        px={8}
        backgroundColor="twitter.100"
      >
        <StaticImage height={100} src="../images/tegei_title_black.png" />
      </Flex>
    </a>
  );
};

const Footer = () => {
  return (
    <Flex
      as="footer"
      top={0}
      mt={20}
      width="100%"
      shadow="sm"
      py={4}
      px={8}
      backgroundColor="twitter.300"
      style={{ position: "relative", bottom: 0 }}
      color="white"
    >
      © 2022 手芸同好会
      <br />
      製作者:朱雀匠
    </Flex>
  );
};

const MemberPage = () => {
  return (
    <>
      <Header />
      <Text ml={2} fontSize="sm" fontWeight="bold" color={"gray.700"}>
        詳しい情報はメンバーをクリック!
      </Text>
      <ShowMemberList />
      <Footer />
    </>
  );
};

export default MemberPage;
