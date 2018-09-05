"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent_1 = require("./LikeComponent");
var component = new LikeComponent_1.LikeComponent(10, true);
component.onClick();
console.log("QlikesCount: " + component.count + ", isSelected: " + component.selected);
