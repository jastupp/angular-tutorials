import { LikeComponent } from "./LikeComponent";

let component = new LikeComponent(10, true);
component.onClick();
console.log(`QlikesCount: ${component.count}, isSelected: ${component.selected}`);