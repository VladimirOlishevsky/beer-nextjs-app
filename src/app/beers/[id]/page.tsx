'use client';
import { IBeerEntity } from "../../types/beerType";
import {
    Image,
    Box,
    Text,
    Card,
    Stack,
    CardBody,
    Heading
} from "@chakra-ui/react";

// export async function generateStaticParams(id: number) {
//     const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`).then((res) => res.json())
   
//     return response
//   }

const getData = async (id: number): Promise<IBeerEntity[]> => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    return response.json()
}

type Props = {
    params: {
        id: number
    }
}

const addCommas = <T extends string | { name: string }>(input: T[]): string => {
    let result = "";

    for (const value of input) {
        result += typeof value === 'string' ? `${value}, ` : `${value.name}, `;
    }

    return result.slice(0, -2);
}

const BeerItemPage = async ({ params: { id } }: Props) => {
    const response = await getData(id);
    const { name, image_url, description, abv, ibu, first_brewed, food_pairing, brewers_tips, ingredients: { hops, malt, yeast } } = response[0];

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            p={8}
            justifyContent={'center'}
        >
            <Box
                overflow={'hidden'}
                w={400}
                h={600}
                display={'flex'}
                justifyContent={'center'}
            >
                <Image
                    maxWidth={'70%'}
                    objectFit={'contain'}
                    src={image_url}
                    alt={name}
                />
            </Box>
            <Stack>
                <CardBody w={500} p={0}>
                    <Heading size='md'>{name}</Heading>
                    <Box mt={5}>
                        <Box display={'flex'} gap={10} height={'max-content'}>
                            <Heading as={'h6'} size='s' width={150}>abv:</Heading>
                            <Text>{abv}</Text>
                        </Box>
                        <Box display={'flex'} gap={10} height={'max-content'}>
                            <Heading as={'h6'} size='s' width={150}>ibu:</Heading>
                            <Text>{ibu}</Text>
                        </Box>
                        <Box display={'flex'} gap={10} height={'max-content'}>
                            <Heading as={'h6'} size='s' width={150}>hops:</Heading>
                            <Text w={300}>{addCommas(hops)}</Text>
                        </Box>
                        <Box display={'flex'} gap={10} height={'max-content'}>
                            <Heading as={'h6'} size='s' width={150}>malt:</Heading>
                            <Text w={300}>{addCommas(malt)}</Text>
                        </Box>
                        <Box display={'flex'} gap={10} height={'max-content'}>
                            <Heading as={'h6'} size='s' width={150}>yeast:</Heading>
                            <Text w={300}>{yeast}</Text>
                        </Box>
                        <Box display={'flex'} gap={10} height={'max-content'}>
                            <Heading as={'h6'} size='s' width={150}>first brewed:</Heading>
                            <Text>{first_brewed}</Text>
                        </Box>
                        <Box display={'flex'} gap={10} height={'max-content'}>
                            <Heading as={'h6'} size='s' width={150}>food pairing:</Heading>
                            <Text w={300}>{addCommas(food_pairing)}</Text>
                        </Box>
                        <Box display={'flex'} gap={10} height={'max-content'}>
                            <Heading as={'h6'} size='s' width={150}>brewers tips:</Heading>
                            <Text w={300}>{brewers_tips}</Text>
                        </Box>
                        <Text py='2'>
                            {description}
                        </Text>
                    </Box>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default BeerItemPage