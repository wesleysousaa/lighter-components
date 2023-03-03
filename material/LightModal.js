require("./LightModal.css");
var $9celP$reactjsxruntime = require("react/jsx-runtime");

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

$parcel$export(module.exports, "default", () => $e4ca54d0b7afa564$export$2e2bcd8739ae039);

var $b32e7cd84d921379$exports = {};

$parcel$export($b32e7cd84d921379$exports, "aviso", () => $b32e7cd84d921379$export$76e88a136b351074, (v) => $b32e7cd84d921379$export$76e88a136b351074 = v);
$parcel$export($b32e7cd84d921379$exports, "modalArea", () => $b32e7cd84d921379$export$67193abf9f7b78c, (v) => $b32e7cd84d921379$export$67193abf9f7b78c = v);
$parcel$export($b32e7cd84d921379$exports, "modal", () => $b32e7cd84d921379$export$96e4b36520c26a2c, (v) => $b32e7cd84d921379$export$96e4b36520c26a2c = v);
var $b32e7cd84d921379$export$76e88a136b351074;
var $b32e7cd84d921379$export$67193abf9f7b78c;
var $b32e7cd84d921379$export$96e4b36520c26a2c;
$b32e7cd84d921379$export$76e88a136b351074 = `JX734W_aviso`;
$b32e7cd84d921379$export$67193abf9f7b78c = `JX734W_modalArea`;
$b32e7cd84d921379$export$96e4b36520c26a2c = `JX734W_modal`;


const $e4ca54d0b7afa564$var$LightModal = (props)=>{
    function closeWithModalAreaClick(e) {
        if (e.className.includes("modalArea")) props.onClose();
    }
    return /*#__PURE__*/ (0, $9celP$reactjsxruntime.jsx)((0, $9celP$reactjsxruntime.Fragment), {
        children: props.open && /*#__PURE__*/ (0, $9celP$reactjsxruntime.jsx)("div", {
            className: (0, (/*@__PURE__*/$parcel$interopDefault($b32e7cd84d921379$exports))).modalArea,
            value: props.open,
            onClick: (e)=>closeWithModalAreaClick(e.target),
            children: /*#__PURE__*/ (0, $9celP$reactjsxruntime.jsxs)("div", {
                className: (0, (/*@__PURE__*/$parcel$interopDefault($b32e7cd84d921379$exports))).modal,
                style: {
                    backgroundColor: props.bgColor
                },
                ...props,
                children: [
                    props.children && props.children,
                    !props.children && /*#__PURE__*/ (0, $9celP$reactjsxruntime.jsxs)((0, $9celP$reactjsxruntime.Fragment), {
                        children: [
                            /*#__PURE__*/ (0, $9celP$reactjsxruntime.jsx)("p", {
                                className: (0, (/*@__PURE__*/$parcel$interopDefault($b32e7cd84d921379$exports))).aviso,
                                children: "*Aten\xe7\xe3o, seu modal est\xe1 sem corpo"
                            }),
                            /*#__PURE__*/ (0, $9celP$reactjsxruntime.jsx)("h2", {
                                children: "Titulo do Modal"
                            }),
                            /*#__PURE__*/ (0, $9celP$reactjsxruntime.jsx)("p", {
                                children: "Descri\xe7\xe3o do modal"
                            }),
                            /*#__PURE__*/ (0, $9celP$reactjsxruntime.jsx)("h3", {
                                children: "Corpo"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
var $e4ca54d0b7afa564$export$2e2bcd8739ae039 = $e4ca54d0b7afa564$var$LightModal;


//# sourceMappingURL=LightModal.js.map
