"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(m_count, m_selected) {
        this.m_count = m_count;
        this.m_selected = m_selected;
    }
    LikeComponent.prototype.onClick = function () {
        this.m_count += this.m_selected ? -1 : 1;
        this.m_selected = !this.m_selected;
    };
    Object.defineProperty(LikeComponent.prototype, "count", {
        get: function () {
            return this.m_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "selected", {
        get: function () {
            return this.m_selected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
