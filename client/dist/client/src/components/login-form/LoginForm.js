"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
var react_1 = __importStar(require("react"));
require("./LoginForm.scss");
var material_1 = require("@mui/material");
var PasswordTextField_1 = require("../text-fields/password-textfield/PasswordTextField");
var UsernameTextField_1 = require("../text-fields/username-textfield/UsernameTextField");
var react_router_dom_1 = require("react-router-dom");
var secure_login_svg_1 = __importDefault(require("../../../img/secure_login.svg"));
var Google_1 = __importDefault(require("@mui/icons-material/Google"));
var axios_1 = __importDefault(require("axios"));
var LoginForm = function (_a) {
    var showSignup = _a.showSignup, handleRedirectToSignup = _a.handleRedirectToSignup, showTextFieldError = _a.showTextFieldError, setShowTextFieldError = _a.setShowTextFieldError, errorMessage = _a.errorMessage, setErrorMessage = _a.setErrorMessage, handleErrorAlert = _a.handleErrorAlert;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_1.useState)({
        username: '',
        password: '',
    }), loginValues = _b[0], setLoginValues = _b[1];
    var handleLoginChange = function (event) {
        var _a;
        setLoginValues(__assign(__assign({}, loginValues), (_a = {}, _a[event.target.name] = event.target.value, _a)));
    };
    var handleLogin = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, axios_1.default.post("/api/login", loginValues, {
                            withCredentials: true,
                        })];
                case 2:
                    response = _a.sent();
                    if (response.status === 200) {
                        setShowTextFieldError(false);
                        navigate("/search", { replace: true });
                    }
                    return [3, 4];
                case 3:
                    err_1 = _a.sent();
                    setErrorMessage('No matching username and password found.');
                    setShowTextFieldError(true);
                    handleErrorAlert();
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'login-form' },
            react_1.default.createElement("img", { src: secure_login_svg_1.default }),
            react_1.default.createElement("div", { className: 'login-form-card' },
                react_1.default.createElement(material_1.Paper, { component: 'form', elevation: 2, onSubmit: handleLogin, className: 'login-form-input' },
                    react_1.default.createElement(material_1.Typography, { variant: 'h6' }, "Log in"),
                    react_1.default.createElement(material_1.Button, { variant: 'contained', fullWidth: true, component: 'a', color: 'error', href: '/api/login/federated/google' },
                        react_1.default.createElement(Google_1.default, null),
                        react_1.default.createElement(material_1.Typography, { variant: 'button', align: 'right', sx: { marginLeft: '10px' } }, "Sign in with Google")),
                    react_1.default.createElement(material_1.Typography, { variant: 'h6' }, "or"),
                    react_1.default.createElement(UsernameTextField_1.UsernameTextField, { showSignup: showSignup, handleLoginChange: handleLoginChange }),
                    react_1.default.createElement(PasswordTextField_1.PasswordTextField, { showTextFieldError: showTextFieldError, showSignup: showSignup, errorMessage: errorMessage, handleLoginChange: handleLoginChange }),
                    react_1.default.createElement(material_1.Button, { "data-testid": 'login-btn', type: 'submit', fullWidth: true, variant: 'contained' }, "Log In"),
                    react_1.default.createElement(material_1.Stack, { direction: 'row' },
                        react_1.default.createElement(material_1.Typography, { className: 'login-form-account-text', variant: 'caption' },
                            "Don't have an account yet?",
                            ' '),
                        react_1.default.createElement(material_1.Button, { variant: 'text', onClick: handleRedirectToSignup },
                            react_1.default.createElement(material_1.Typography, { align: 'center', "data-testid": 'create-account-btn', className: 'login-form-text', variant: 'caption' }, "Create Account"))))))));
};
exports.LoginForm = LoginForm;
//# sourceMappingURL=LoginForm.js.map