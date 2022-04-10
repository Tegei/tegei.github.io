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
  Image
} from "@chakra-ui/react";
import { getMembers } from "../components/getMember";
import "../static/member.css";

const textColor = "#C44FC4";

const Content = ({ tag, content }) => {
  return (
    <>
      <Flex align="baseline" mt={2}>
        <Badge width={14} colorScheme="blackAlpha" color="gray.600">
          {tag}
        </Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color={textColor}
        >
          {content}
        </Text>
      </Flex>
    </>
  );
};

const MemberModal = ({ member, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="5" maxW="320px" borderRadius="md" borderWidth="1px">
          <ModalHeader>{member.name}</ModalHeader>

          <Box boxSize="200px">
            <Image
              src={"https://raw.githubusercontent.com/Tegei/tegei.github.io/main/images/"+member.imagePath}
              alt="icon"
              width={200}
              aspectRatio={1 / 1}
            />
          </Box>
          {Object.keys(member).map((key) => {
            return <Content tag={key} content={member[key]} />;
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
      <Box boxSize="200px">
        <Image
          src="../images/icon.jpg"
          alt="icon"
          width={200}
          aspectRatio={1 / 1}
        />
      </Box>
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

const IndexPage = () => {
  return (
    <>
      <ShowMemberList />
    </>
  );
};

export default IndexPage;
