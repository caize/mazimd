"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pages_1 = require("../../models/pages");
const createError_1 = require("../../utils/createError");
const config_1 = require("../../config");
function default_1(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const fork_id = ctx.query.fork_id;
        if (typeof fork_id === 'undefined') {
            return ctx.render('pages/new/index', {
                cdn_origin: config_1.default.cdn_origin,
            });
        }
        return yield new Promise((resolve, reject) => {
            pages_1.getPageFromId(fork_id, (err, data) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    return reject(createError_1.default(400, err));
                yield ctx.render('pages/new/index', {
                    cdn_origin: config_1.default.cdn_origin,
                    md_content: data.content
                });
                return resolve();
            }));
        });
    });
}
exports.default = default_1;
;
