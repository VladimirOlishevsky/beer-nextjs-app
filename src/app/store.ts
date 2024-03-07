import { makeObservable, makeAutoObservable, action } from "mobx";
import { IBeerEntity } from "./types/beerType";

interface IAppStoreState {
    favoriteBeers: Map<number, IBeerEntity>
    allBeers: Map<number, IBeerEntity>
}

class AppStore {
    state: IAppStoreState = {
        favoriteBeers: new Map<number, IBeerEntity>(),
        allBeers: new Map<number, IBeerEntity>()
    };
    resetAddToFavoriteButtonState = () => {};

    constructor() {
        makeAutoObservable(this.state);
        makeObservable(this, {
            setBeersToFavorite: action,
            removeBeersFromFavorite: action,
            setAllBeers: action
        });
    }

    setAllBeers = (values: IBeerEntity[]) => {
        values.forEach(el => {
            el = { ...el, inFavorite: false };
            this.state.allBeers.set(el.id, el)
        })

        console.log("this.state", this.state.allBeers)
    }
    
    getFromAllBeers = (id: number) => {
        console.log("id", id)
        const value = this.state.allBeers.get(Number(id));
        console.log("value", value)
        return value
    }

    setBeersToFavorite = (value: IBeerEntity): void => {
        value = { ...value, inFavorite: true };
        this.state.favoriteBeers = this.state.favoriteBeers.set(value.id, value) 
    };

    getUpdatedBeerItem = (value: IBeerEntity): IBeerEntity => {
        const storeValue = this.state.favoriteBeers.get(value.id);
        value = { ...value, inFavorite: storeValue?.inFavorite }
        return value
    };

    removeBeersFromFavorite = (id: number): void => {
        const res = this.state.favoriteBeers.get(id);
        if(res) {
            res.inFavorite = false
        }
        this.state.favoriteBeers.delete(id);
    };

    get getFavoritesBeerList(): IBeerEntity[] {
        return Array.from(this.state.favoriteBeers.values())
    }

    checkIsInFavoriteList = (id: number): boolean => {
        return this.state.favoriteBeers.has(id)
    }
}


export const appStore = new AppStore();