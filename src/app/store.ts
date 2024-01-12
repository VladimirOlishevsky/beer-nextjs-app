import { makeObservable, makeAutoObservable, action, computed, toJS } from "mobx";
import { IBeerEntity } from "./types/beerType";

interface IAppStoreState {
    favoriteBeers: IBeerEntity[]
}

class AppStore {
    state: IAppStoreState = {
        favoriteBeers: []
    };

    constructor() {
        makeAutoObservable(this.state);
        makeObservable(this, {
            setBeersToFavorite: action,
        });
    }

    setBeersToFavorite = (value: IBeerEntity): void => {
        this.state.favoriteBeers = [...this.state.favoriteBeers, value];
    };

    removeBeersFromFavorite = (id: number): void => {
        this.state.favoriteBeers = this.state.favoriteBeers.filter(el => el.id !== id);
    };

    get getFavoritesBeerList() {
        return this.state.favoriteBeers
    }
}


export const appStore = new AppStore();