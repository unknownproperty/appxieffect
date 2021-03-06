import { action, observable, computed, runInAction, makeObservable } from 'mobx'


class UIStore {
    // `this` from rootstore passed to the constructor and we can 
    // assign it to a variable accessible in this class called 
    // `rootStore`. Therefore, we can access other store like 
    // useStore for e.g (this.rootStore.userStore)
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this)
    }

    //Loading Screen
    @observable loading = {
        "/login": true,
        "/": true,
        "/registration": true,
        "/resetpassword/email": true,
    }

    @action setLoading = (page) => {
        this.loading[page] = false
    }



}

export default UIStore;