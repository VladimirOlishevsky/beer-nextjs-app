import { makeObservable, makeAutoObservable, action } from "mobx";
import { IBeerEntity } from "./types/beerType";

interface IAppStoreState {
    favoriteBeers: Map<number, IBeerEntity>
}

class AppStore {
    state: IAppStoreState = {
        favoriteBeers: new Map<number, IBeerEntity>()
    };

    constructor() {
        makeAutoObservable(this.state);
        makeObservable(this, {
            setBeersToFavorite: action,
        });
    }

    setBeersToFavorite = (value: IBeerEntity): void => {
        value = { ...value, inFavorite: true };
        this.state.favoriteBeers = this.state.favoriteBeers.set(value.id, value) 
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