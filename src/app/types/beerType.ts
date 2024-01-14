export interface IBeerEntity {
    id: number;
    name: string;
    description: string;
    image_url: string;
    abv: number, // крепость
    ibu: number, // горечь
    first_brewed: string,
    food_pairing: string[],
    brewers_tips: string,
    ingredients: {
        malt: { name: string }[],
        hops: { name: string }[],
        yeast: string
    },
    inFavorite?: boolean
}