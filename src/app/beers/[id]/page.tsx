'use client';
import { addCommas } from "@/app/utils/addCommas";
import { IBeerEntity } from "../../types/beerType";
import {
    Image,
    Box,
    Text,
    Card,
    Stack,
    CardBody,
    Heading,
    Spinner
} from "@chakra-ui/react";
import { AddToFavoriteListButton } from "@/app/components/addToFavoriteListButton/addToFavoriteListButton";
import { useState, useEffect } from "react";
import "./styles.css";
import { appStore } from "@/app/store";

const getData = async (id: number): Promise<IBeerEntity[]> => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    return response.json()
}

type Props = {
    params: {
        id: number
    }
}

const BeerItemPage = ({ params: { id } }: Props) => {
    const [data, setData] = useState<IBeerEntity>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getData(id);
            const adaptedValue = appStore.getUpdatedBeerItem(response[0]);
            setData(adaptedValue);
        };

        fetchData();
    }, [id]);

    if (!data) {
        return (
            <div className="loader-wrapper">
                <div className="loader">
                    <Spinner size="xl" />
                </div>
            </div>

        );
    }

    const { name, image_url, description, abv, ibu, first_brewed, food_pairing, brewers_tips, ingredients: { hops, malt, yeast } } = data;
    return (
        <div>
            <Card
                p={8}
                justifyContent={'center'}
            >
                <Stack direction={'row'}>
                    <Box
                        overflow={'hidden'}
                        w={400}
                        h={450}
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
                <AddToFavoriteListButton beerEntity={data} />
            </Card>
        </div>
    )
}

export default BeerItemPage