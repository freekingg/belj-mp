"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  (_component_TnNavbar + _component_TnIcon)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      fixed: true,
      ["bg-color"]: "transparent",
      ["bottom-shadow"]: false,
      placeholder: false
    }),
    b: common_vendor.p({
      name: "location-fill"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa0de221"], ["__file", "/Users/kingking/king/my/belj-mp/src/home-page/company-location/index.vue"]]);
wx.createPage(MiniProgramPage);
