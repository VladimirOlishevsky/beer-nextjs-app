'use client';
import { appStore } from "@/app/store";
import { IBeerEntity } from "@/app/types/beerType";
import {
    Button,
    Flex,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";

interface IAddToFavoriteListButtonProps {
    beerEntity: IBeerEntity
}

export const AddToFavoriteListButton = ({ beerEntity }: IAddToFavoriteListButtonProps) => {
    const toast = useToast();
    const [state, setState] = useState(beerEntity.inFavorite);
    appStore.controlAddToFavorite = () => setState(!state)
    return (
        <Flex w={'100%'} justify={'end'} >
            <Button
                w={'max-content'}
                variant='solid'
                colorScheme='teal'
                size='sm'
                isDisabled={appStore.checkIsInFavoriteList(beerEntity.id) || state}
                onClick={(e) => {
                    setState(true);
                    appStore.setBeersToFavorite(beerEntity);
                    toast({
                        title: `Successfully added to favorites!`,
                        status: 'success',
                        position: 'top',
                        isClosable: true,
                    })
                }}
            >
                add to favorite
            </Button>
        </Flex>
    )
}