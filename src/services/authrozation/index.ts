class AuthorizationService {
    public static get instance() {
        return new AuthorizationService();
    }

    getToken() {
        return new Promise((resolve) => setTimeout(() => resolve('123456'), 5000));
    }
}

export default Object.freeze(AuthorizationService.instance);
