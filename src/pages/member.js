import * as React from "react";
import { Box, Flex, Badge, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

// Sample card from Airbnb

function AirbnbExample({ name }) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6" h="100px">
        {name}
      </Box>
    </Box>
  );
}

const IndexPage = () => {
  const list = ["aa", "天才たかかつ", "sdasdasds"];
  return (
    <>
      {list.map((v) => {
        return <AirbnbExample name={v} />;
      })}
    </>
  );
};

export default IndexPage;
