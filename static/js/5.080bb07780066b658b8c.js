webpackJsonp([5],{"1aad":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("yawU"),n={name:"Sales",components:{DrugList:a("t3oH").a,ListFilterBar:l.a},data:function(){return{filters:[{type:"input",fieldName:"approvalNumber",label:"资产目录",clearable:!0},{type:"input",fieldName:"commonName",label:"通用名",clearable:!0},{type:"input",fieldName:"pharmacy",label:"药房",clearable:!0},{type:"timePickerRange",fieldName:"createTime",label:"导入时间"}]}},methods:{handleSearch:function(e){console.log(e)}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("ListFilterBar",{attrs:{filters:this.filters,clearable:!1},on:{onFilter:this.handleSearch}}),this._v(" "),t("DrugList",{ref:"drugList"})],1)},staticRenderFns:[]};var i=a("VU/8")(n,r,!1,function(e){a("yGd7")},"data-v-07160be0",null);t.default=i.exports},FDbh:function(e,t){},t3oH:function(e,t,a){"use strict";var l={name:"DrugList",extends:a("5CZb").a,props:{showPrice:{type:Boolean,default:!1}},mounted:function(){},methods:{queryData:function(){}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.dataSource}},[a("el-table-column",{attrs:{prop:"title",label:"批准文号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"通用名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"规格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"药房"}}),e._v(" "),e.showPrice?a("el-table-column",{attrs:{prop:"title",label:"价格"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"销量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"导入时间"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.ppage,"page-sizes":[10,20,50],"page-size":e.pnumber,layout:"total, prev, pager, next, sizes",total:e.total},on:{"size-change":e.handlePageSizeChange,"current-change":e.handlePageChange,"update:currentPage":function(t){e.ppage=t},"update:current-page":function(t){e.ppage=t}}})],1)],1)},staticRenderFns:[]};var r=a("VU/8")(l,n,!1,function(e){a("FDbh")},"data-v-9cbf7236",null);t.a=r.exports},yGd7:function(e,t){}});
//# sourceMappingURL=5.080bb07780066b658b8c.js.map