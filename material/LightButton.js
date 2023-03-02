require("./LightButton.css");
var $jYUt7$reactjsxruntime = require("react/jsx-runtime");
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

$parcel$export(module.exports, "default", () => $e4976d6e5a26b825$export$2e2bcd8739ae039);


var $d5098a5e726fd2b1$exports = {};

$parcel$export($d5098a5e726fd2b1$exports, "button", () => $d5098a5e726fd2b1$export$2ba01fb71ed41cb6, (v) => $d5098a5e726fd2b1$export$2ba01fb71ed41cb6 = v);
var $d5098a5e726fd2b1$export$2ba01fb71ed41cb6;
$d5098a5e726fd2b1$export$2ba01fb71ed41cb6 = `J0eWgq_button`;


const $e4976d6e5a26b825$var$LightButton = (props)=>{
    const colors = [
        "lightblue",
        "lightgreen",
        "lightpurple",
        "lightyellow",
        "dark",
        "lightred"
    ];
    return /*#__PURE__*/ (0, $jYUt7$reactjsxruntime.jsx)("button", {
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($d5098a5e726fd2b1$exports))).button,
        color: colors.includes(props.color) ? props.color : "lightblue",
        children: props.label
    });
};
var $e4976d6e5a26b825$export$2e2bcd8739ae039 = $e4976d6e5a26b825$var$LightButton;


//# sourceMappingURL=LightButton.js.map
