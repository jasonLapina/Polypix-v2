import { Box, Center, Heading, Text } from "@chakra-ui/react";
import ComponentLayout from "@/components/Shared/Layout/ComponentLayout";
import Footer from "@/components/Shared/Layout/Footer";
function about() {
  return (
    <>
      <Box bgColor='secondary' color='white' pb='200px'>
        <Center mb='40px' h='100vh' w='100%' bgColor='secondaryDark'>
          <Heading fontSize='56px'>ABOUT US</Heading>
        </Center>
        <ComponentLayout>
          <Text mb='40px'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolor, laboriosam reprehenderit perferendis qui harum exercitationem
            error rem ex aliquam nisi! Aliquam, debitis. A aliquid consequuntur
            voluptatum expedita dolore alias. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id amet sed nemo necessitatibus minus
            quas a inventore provident dolore veritatis voluptate beatae
            possimus iusto recusandae, tempore illo, quisquam dolorem
            voluptatem!
          </Text>
          <Text mb='40px'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolor, laboriosam reprehenderit perferendis qui harum exercitationem
            error rem ex aliquam nisi! Aliquam, debitis. A aliquid consequuntur
            voluptatum expedita dolore alias. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id amet sed nemo necessitatibus minus
            quas a inventore provident dolore veritatis voluptate beatae
            possimus iusto recusandae, tempore illo, quisquam dolorem
            voluptatem! possimus iusto recusandae, tempore illo, quisquam
            dolorem voluptatem!
          </Text>
          <Text mb='40px'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolor, laboriosam reprehenderit perferendis qui harum exercitationem
            error rem ex aliquam nisi! Aliquam, debitis. A aliquid consequuntur
            voluptatum expedita dolore alias. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Similique sunt placeat nostrum,
            repudiandae fugiat obcaecati excepturi quisquam? error rem ex
            aliquam nisi! Aliquam, debitis. A aliquid consequuntur voluptatum
            expedita dolore alias. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Similique sunt placeat nostrum, repudiandae fugiat
            obcaecati excepturi quisquam?
          </Text>
          <Text mb='40px'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolor, laboriosam reprehenderit perferendis qui harum exercitationem
            error rem ex aliquam nisi! Aliquam, debitis. A aliquid consequuntur
            voluptatum expedita dolore alias. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Similique sunt placeat nostrum,
            repudiandae fugiat obcaecati excepturi quisquam?
          </Text>
          <Text mb='40px'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolor, laboriosam reprehenderit perferendis qui harum exercitationem
            error rem ex aliquam nisi! Aliquam, debitis. A aliquid consequuntur
            voluptatum expedita dolore alias.
          </Text>
        </ComponentLayout>
      </Box>
      <Footer />
    </>
  );
}

export default about;
