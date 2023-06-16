import { Box, Text } from "@chakra-ui/react";

const FeaturedProperties = ({ featuredProperties }) => {
    return ( 
        <Box backgroundColor="teal.50">
          <Box maxWidth="1280px" margin="0 auto" color="grey.600" 
          paddingY={{base: "3rem", sm: "6rem"}}>
            <Text fontSize={{base: "3xl", sm: "4xl"}} 
            lineHeight="shorter" fontWeight="light" 
            paddingX="2rem" textAlign="center">Discover Our Featured Properties</Text>
            <Text fontSize="2xl" fontWeight="light" marginTop="1rem" marginBottom="3rem" paddingX="2rem" textAlign="center">A Selection Of Our Best Properties</Text>
            PROPERTY SLIDER featuredProperties
          </Box>
        </Box>
    );
};
 
export default FeaturedProperties;