require("./LightTextarea.css");
var $jzejR$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $jzejR$proptypes = require("prop-types");

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
var $2aa86b6987ee7e47$export$d72b0b1d2d0e0735;
var $2aa86b6987ee7e47$export$dac4cac4d2c4d379;
$2aa86b6987ee7e47$export$d72b0b1d2d0e0735 = `_6mlr8q_textArea`;
$2aa86b6987ee7e47$export$dac4cac4d2c4d379 = `_6mlr8q_textAreaDefault`;



const $3e6e5507d54a429c$var$colors = [
    "lightblue",
    "lightgreen",
    "lightpurple",
    "lightyellow",
    "lightred",
    "dark"
];
const $3e6e5507d54a429c$var$LightTextarea = (props)=>{
    return /*#__PURE__*/ (0, $jzejR$reactjsxruntime.jsx)("textarea", {
        className: props.variant === "outline" ? (0, (/*@__PURE__*/$parcel$interopDefault($2aa86b6987ee7e47$exports))).textArea : (0, (/*@__PURE__*/$parcel$interopDefault($2aa86b6987ee7e47$exports))).textAreaDefault,
        ...props,
        color: $3e6e5507d54a429c$var$colors.includes(props.color) ? props.color : "lightblue",
        placeholder: props.label
    });
};
$3e6e5507d54a429c$var$LightTextarea.propTypes = {
    variant: (0, ($parcel$interopDefault($jzejR$proptypes))).oneOf([
        "outline",
        "default"
    ]),
    color: (0, ($parcel$interopDefault($jzejR$proptypes))).oneOf($3e6e5507d54a429c$var$colors),
    label: (0, ($parcel$interopDefault($jzejR$proptypes))).string
};
var $3e6e5507d54a429c$export$2e2bcd8739ae039 = $3e6e5507d54a429c$var$LightTextarea;


//# sourceMappingURL=LightTextarea.js.map
