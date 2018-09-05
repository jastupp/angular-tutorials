"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(m_x, m_y) {
        this.m_x = m_x;
        this.m_y = m_y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.m_x + ", Y: " + this.m_y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.m_x;
        },
        set: function (value) {
            this.m_x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
