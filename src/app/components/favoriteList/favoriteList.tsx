'use client';
import { Box, HStack, Popover, Icon, Text, Flex, PopoverTrigger, PopoverContent, PopoverArrow, Image } from "@chakra-ui/react"
import FavoritesListIcon from '../../../../public/favoritesList.svg';
import "./styles.css";
import { appStore } from "@/app/store";
import { observer } from "mobx-react-lite";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

export const FavoriteList = observer(() => {

    console.log('appStore.getFavoritesBeerList', appStore.getFavoritesBeerList)
    return (
        <Popover>
            <PopoverTrigger>
                <Box
                    className="favorites-list-icon-wrapper"
                    as="div"
                    cursor="pointer"
                >
                    {Boolean(appStore.getFavoritesBeerList.length) && (
                        <div className="favorites-count">
                            {appStore.getFavoritesBeerList.length}
                        </div>)}
                    <FavoritesListIcon className="favorites-list-icon" />
                </Box>
            </PopoverTrigger>
            <PopoverContent w={300}>
                <PopoverArrow />
                <Flex color={'black'} gap={4} direction={'column'} p={4} maxHeight={400} overflow={'auto'}>
                    {appStore.getFavoritesBeerList.length
                        ? appStore.getFavoritesBeerList.map(el => (
                            <Flex key={el.id} gap={4} alignItems={'center'} justify={'space-between'}>
                                <HStack spacing='24px'>
                                    <Image
                                        maxWidth={30}
                                        objectFit={'contain'}
                                        src={el.image_url}
                                        alt={el.name}
                                    />
                                    <Text fontSize={16}>{el.name}</Text>
                                </HStack >
                                <Icon as={IoCloseSharp} className="close-icon" onClick={() => appStore.removeBeersFromFavorite(el.id)} />
                            </Flex>
                        )) : 'No content'}
                </Flex>
            </PopoverContent>
        </Popover>
    )
})