declare enum COMPANY_INFORMATION {
    NAME = "Dating App",
    ID = 1,
    DESCRIPTION = "Dating App bruh"
}
declare enum LEVELS {
    ADMIN = 1,
    USER = 2
}
declare enum PASSWORD_RESET_STATUS {
    ACTIVE = 1,
    INACTIVE = 0
}
declare const _default: {
    COMPANY_INFORMATION: typeof COMPANY_INFORMATION;
    LEVELS: typeof LEVELS;
    PASSWORD_RESET_STATUS: typeof PASSWORD_RESET_STATUS;
    USER: {
        USER_VERIFIED: {
            VERIFIED: number;
            NO_VERIFIED: number;
        };
    };
    NOTIFICATIONS: {
        STATUS: {
            READED: number;
            UNREADED: number;
        };
    };
    PER_PAGE: number;
    PER_PAGE_WEB: number;
    ACTIONS: {
        MAIN: number;
        NO_MAIN: number;
    };
    MODULES: {
        PROFILE: string;
        RECIPES: string;
    };
    MATCHES: {
        STAND_BY: number;
        REJECTED: number;
        ACCEPTED: number;
        BLOCKED: number;
    };
    REPORTED_USERS: {
        RECEIVED: number;
        IN_PROCESS: number;
        REJECTED: number;
        ACCEPTED: number;
        FINISHED: number;
    };
};
export default _default;
