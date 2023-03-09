require("./LightTextfield.css");
var $9E8Zr$reactjsxruntime = require("react/jsx-runtime");
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

$parcel$export(module.exports, "default", () => $4f02f266504ee787$export$2e2bcd8739ae039);


var $24a5123f37d03349$exports = {};

$parcel$export($24a5123f37d03349$exports, "textFieldDefault", () => $24a5123f37d03349$export$f79d0bf1c9a6b37d, (v) => $24a5123f37d03349$export$f79d0bf1c9a6b37d = v);
$parcel$export($24a5123f37d03349$exports, "animacaoClosing", () => $24a5123f37d03349$export$b3d00dc989154e0, (v) => $24a5123f37d03349$export$b3d00dc989154e0 = v);
$parcel$export($24a5123f37d03349$exports, "animacaoOpening", () => $24a5123f37d03349$export$e671861e36a6512f, (v) => $24a5123f37d03349$export$e671861e36a6512f = v);
$parcel$export($24a5123f37d03349$exports, "textField", () => $24a5123f37d03349$export$c54b92c0bb02ba64, (v) => $24a5123f37d03349$export$c54b92c0bb02ba64 = v);
var $24a5123f37d03349$export$f79d0bf1c9a6b37d;
var $24a5123f37d03349$export$b3d00dc989154e0;
var $24a5123f37d03349$export$e671861e36a6512f;
var $24a5123f37d03349$export$c54b92c0bb02ba64;
$24a5123f37d03349$export$f79d0bf1c9a6b37d = `cnb5MW_textFieldDefault`;
$24a5123f37d03349$export$b3d00dc989154e0 = `cnb5MW_animacaoClosing`;
$24a5123f37d03349$export$b3d00dc989154e0;
$24a5123f37d03349$export$e671861e36a6512f = `cnb5MW_animacaoOpening`;
$24a5123f37d03349$export$e671861e36a6512f;
$24a5123f37d03349$export$c54b92c0bb02ba64 = `cnb5MW_textField`;


const $4f02f266504ee787$var$LightTextfield = (props)=>{
    const colors = [
        "lightblue",
        "lightgreen",
        "lightpurple",
        "lightyellow",
        "lightred",
        "dark"
    ];
    return /*#__PURE__*/ (0, $9E8Zr$reactjsxruntime.jsx)("input", {
        type: props.type === "password" ? "password" : "text",
        className: props.variant === "outline" ? (0, (/*@__PURE__*/$parcel$interopDefault($24a5123f37d03349$exports))).textField : (0, (/*@__PURE__*/$parcel$interopDefault($24a5123f37d03349$exports))).textFieldDefault,
        ...props,
        color: colors.includes(props.color) ? props.color : "lightblue",
        placeholder: props.label
    });
};
var $4f02f266504ee787$export$2e2bcd8739ae039 = $4f02f266504ee787$var$LightTextfield;


//# sourceMappingURL=LightTextfield.js.map
