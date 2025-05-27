"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COMPANY_INFORMATION;
(function (COMPANY_INFORMATION) {
    COMPANY_INFORMATION["NAME"] = "Dating App";
    COMPANY_INFORMATION[COMPANY_INFORMATION["ID"] = 1] = "ID";
    COMPANY_INFORMATION["DESCRIPTION"] = "Dating App bruh";
})(COMPANY_INFORMATION || (COMPANY_INFORMATION = {}));
var LEVELS;
(function (LEVELS) {
    LEVELS[LEVELS["ADMIN"] = 1] = "ADMIN";
    LEVELS[LEVELS["USER"] = 2] = "USER";
})(LEVELS || (LEVELS = {}));
var PASSWORD_RESET_STATUS;
(function (PASSWORD_RESET_STATUS) {
    PASSWORD_RESET_STATUS[PASSWORD_RESET_STATUS["ACTIVE"] = 1] = "ACTIVE";
    PASSWORD_RESET_STATUS[PASSWORD_RESET_STATUS["INACTIVE"] = 0] = "INACTIVE";
})(PASSWORD_RESET_STATUS || (PASSWORD_RESET_STATUS = {}));
exports.default = {
    COMPANY_INFORMATION,
    LEVELS,
    PASSWORD_RESET_STATUS,
    USER: {
        USER_VERIFIED: {
            VERIFIED: 1,
            NO_VERIFIED: 0
        }
    },
    NOTIFICATIONS: {
        STATUS: {
            READED: 1,
            UNREADED: 0
        }
    },
    PER_PAGE: 30,
    PER_PAGE_WEB: 10,
    ACTIONS: {
        MAIN: 1,
        NO_MAIN: 0
    },
    MODULES: {
        PROFILE: '/dashboard/profile',
        RECIPES: '/recipes'
    },
    MATCHES: {
        STAND_BY: 1,
        REJECTED: 2,
        ACCEPTED: 3,
        BLOCKED: 4
    },
    REPORTED_USERS: {
        RECEIVED: 1,
        IN_PROCESS: 2,
        REJECTED: 3,
        ACCEPTED: 4,
        FINISHED: 5
    }
};
//# sourceMappingURL=constants.js.map