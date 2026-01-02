import { observable, action, computed } from 'mobx';

export class AccountStore {
    constructor(private goToSettings: () => void) {}

    readonly initialized = Promise.resolve();

    @observable
    private user = {
        email: undefined as string | undefined,
        featureFlags: [] as string[]
    };

    @computed get userEmail() {
        return this.user.email;
    }

    @computed get userSubscription() {
        return undefined as any;
    }

    @computed get isLoggedIn() {
        return false;
    }

    @computed get featureFlags() {
        return [];
    }

    @computed get isPaidUser() {
        return false;
    }

    @computed get isPastDueUser() {
        return false;
    }

    @computed get userHasSubscription() {
        return false;
    }

    @computed get mightBePaidUser() {
        return false;
    }

    @observable
    modal: 'login' | 'pick-a-plan' | 'post-checkout' | undefined;

    @observable
    subscriptionPlans: any;

    @observable
    isAccountUpdateInProcess = false;

    @computed get canManageSubscription() {
        return false;
    }

    @action.bound
    getPro(source: string) {
    }

    @action.bound
    setSelectedPlan(plan: any) {
    }

    @action.bound
    logIn() {
        return Promise.resolve();
    }

    @action.bound
    cancelLogin() {
        this.modal = undefined;
    }

    @action.bound
    cancelCheckout() {
        this.modal = undefined;
    }

    @action.bound
    logOut() {
    }

    @action.bound
    cancelSubscription() {
        return Promise.resolve();
    }

    @action.bound
    finalizeLogin(email: string) {
        return Promise.resolve();
    }
}
