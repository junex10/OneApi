"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModule = exports.ProfileModule = exports.NotificationsModule = exports.AuthModule = void 0;
const auth_module_1 = require("./web/auth/auth.module");
Object.defineProperty(exports, "AuthModule", { enumerable: true, get: function () { return auth_module_1.AuthModule; } });
const notifications_module_1 = require("./web/notifications/notifications.module");
Object.defineProperty(exports, "NotificationsModule", { enumerable: true, get: function () { return notifications_module_1.NotificationsModule; } });
const profile_module_1 = require("./web/profile/profile.module");
Object.defineProperty(exports, "ProfileModule", { enumerable: true, get: function () { return profile_module_1.ProfileModule; } });
const home_module_1 = require("./web/home/home.module");
Object.defineProperty(exports, "HomeModule", { enumerable: true, get: function () { return home_module_1.HomeModule; } });
//# sourceMappingURL=index.js.map