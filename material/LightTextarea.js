require("./LightTextarea.css");
var $jzejR$reactjsxruntime = require("react/jsx-runtime");
require("react");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $3e6e5507d54a429c$export$2e2bcd8739ae039);


var $2aa86b6987ee7e47$exports = {};

$parcel$export($2aa86b6987ee7e47$exports, "textArea", () => $2aa86b6987ee7e47$export$d72b0b1d2d0e0735, (v) => $2aa86b6987ee7e47$export$d72b0b1d2d0e0735 = v);
$parcel$export($2aa86b6987ee7e47$exports, "textAreaDefault", () => $2aa86b6987ee7e47$export$dac4cac4d2c4d379, (v) => $2aa86b6987ee7e47$export$dac4cac4d2c4d379 = v);
$parcel$export($2aa86b6987ee7e47$exports, "animacaoOpening", () => $2aa86b6987ee7e47$export$e671861e36a6512f, (v) => $2aa86b6987ee7e47$export$e671861e36a6512f = v);
$parcel$export($2aa86b6987ee7e47$exports, "animacaoClosing", () => $2aa86b6987ee7e47$export$b3d00dc989154e0, (v) => $2aa86b6987ee7e47$export$b3d00dc989154e0 = v);
var $2aa86b6987ee7e47$export$d72b0b1d2d0e0735;
var $2aa86b6987ee7e47$export$dac4cac4d2c4d379;
var $2aa86b6987ee7e47$export$e671861e36a6512f;
var $2aa86b6987ee7e47$export$b3d00dc989154e0;
$2aa86b6987ee7e47$export$d72b0b1d2d0e0735 = `_6mlr8q_textArea`;
$2aa86b6987ee7e47$export$dac4cac4d2c4d379 = `_6mlr8q_textAreaDefault`;
$2aa86b6987ee7e47$export$e671861e36a6512f = `_6mlr8q_animacaoOpening`;
$2aa86b6987ee7e47$export$e671861e36a6512f;
$2aa86b6987ee7e47$export$b3d00dc989154e0 = `_6mlr8q_animacaoClosing`;
$2aa86b6987ee7e47$export$b3d00dc989154e0;


const $3e6e5507d54a429c$var$LightTextarea = (props)=>{
    const colors = [
        "lightblue",
        "lightgreen",
        "lightpurple",
        "lightyellow",
        "lightred",
        "dark"
    ];
    return /*#__PURE__*/ (0, $jzejR$reactjsxruntime.jsx)("textarea", {
        className: props.variant === "outline" ? (0, (/*@__PURE__*/$parcel$interopDefault($2aa86b6987ee7e47$exports))).textArea : (0, (/*@__PURE__*/$parcel$interopDefault($2aa86b6987ee7e47$exports))).textAreaDefault,
        ...props,
        color: colors.includes(props.color) ? props.color : "lightblue",
        placeholder: props.label
    });
};
var $3e6e5507d54a429c$export$2e2bcd8739ae039 = $3e6e5507d54a429c$var$LightTextarea;


//# sourceMappingURL=LightTextarea.js.map
