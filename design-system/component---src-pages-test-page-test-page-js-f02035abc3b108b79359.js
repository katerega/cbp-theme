(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{BJsU:function(e,a,t){},Dt0B:function(e,a,t){"use strict";var n=t("IRj2"),r=t("q1tI"),l=t.n(r),c=t("Wbzz"),o=function(e){e.title;return l.a.createElement("header",{className:"cbp-header"},l.a.createElement("a",{className:"cbp-header__skipnav",href:"#main-content"},"Skip to main content"),l.a.createElement("nav",{className:"cbp-header__main level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement(c.Link,{to:"/",className:"cbp-logo"},l.a.createElement("strong",null,"CBP")," ",l.a.createElement("span",null," Design System ")))),l.a.createElement("div",{className:"level-right"},l.a.createElement("a",{href:"#noId",className:"is-size-7"},"    Changelog")," ",l.a.createElement("a",{href:"https://github.com/US-CBP/cbp-theme",className:"is-size-7"},l.a.createElement("i",{className:"fab fa-github"}),"  View on Github"))))};o.defaultProps={siteTitle:""};var s=o;t("pIFo"),t("f3/d"),t("tUrg");var i=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={showDropdown:!1,categories:[{name:"Get Started",link:"/get-started/getStarted"},{name:"Foundation",subcategory:[{name:"Colors*",link:"/foundation/colors"},{name:"Iconography",link:"/foundation/iconography"},{name:"Interactivity",link:"/foundation/interactivity"},{name:"Layouts, Grid, Spacing",link:"/foundation/layouts"},{name:"Typography",link:"/foundation/typography"}]},{name:"Components",subcategory:[{name:"Tables",link:"/components/tables"}]},{name:"Patterns",subcategory:[{name:"Headers*",link:"/patterns/applicationHeaders"}]}]},a.menuList=function(){return a.state.categories.map((function(e){return l.a.createElement(l.a.Fragment,null,e.subcategory?l.a.createElement("span",{className:"cbp-heading-6"},e.name):l.a.createElement(c.Link,{to:e.link},l.a.createElement("span",{className:"cbp-heading-6"},e.name)),l.a.createElement("ul",{className:"menu-list"},e.subcategory&&e.subcategory.map((function(e){return l.a.createElement("li",null,l.a.createElement(c.Link,{to:e.link},l.a.createElement("span",{className:"menu-text cbp-body"},e.name)),void 0!==e.anchors||void 0!==e.anchors?l.a.createElement("ul",{style:{borderLeft:"solid 1px #4a4a4a"}},e.anchors.map((function(e){return l.a.createElement("li",{key:"."+e.name.replace(/\s/g,"")},l.a.createElement(c.Link,{to:e.id,key:"."+e.name.replace(/\s/g,"")+"-item"},l.a.createElement("span",{className:"menu-text sub-category"},e.name)))}))):null)}))),l.a.createElement("br",null))}))},a.toggleDropdown=function(e){e.preventDefault();var t=a.state.showDropdown;a.setState({showDropdown:!t})},a.handleClose=function(e){a.node&&!a.node.contains(e.target)&&a.setState({showDropdown:!1})},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){document.addEventListener("mousedown",this.handleClose)},r.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClose)},r.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("div",{className:"dropdown-container"},l.a.createElement("div",{ref:function(a){return e.node=a},className:"dropdown "+(this.state.showDropdown?"is-active":null)},l.a.createElement("div",{className:"dropdown-trigger"},l.a.createElement("button",{onClick:this.toggleDropdown,className:"button is-small","aria-haspopup":"true","aria-controls":"dropdown-menu"},l.a.createElement("span",null,"CBP Theme Version 2.0")," "," ",l.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"}))),l.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu"},l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("a",{href:"https://us-cbp.github.io/cbp-style-guide/docs/index.html",className:"dropdown-item cbp-body",target:"_blank",rel:"noopener noreferrer"},"CBP THEME VERSION 1.11.0"))))),l.a.createElement("aside",{className:"menu"},this.menuList())))},n}(r.Component);try{t("BJsU")}catch(m){console.log(m)}a.a=function(e){var a=e.children,t=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"cbp-ds-grid"},l.a.createElement(s,{siteTitle:t.site.siteMetadata.title}),l.a.createElement(i,null),l.a.createElement("section",{className:"cbp-content"},a)))}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"CBP Design System"}}}}')},OGtf:function(e,a,t){var n=t("XKFU"),r=t("eeVq"),l=t("vhPU"),c=/"/g,o=function(e,a,t,n){var r=String(l(e)),o="<"+a;return""!==t&&(o+=" "+t+'="'+String(n).replace(c,"&quot;")+'"'),o+">"+r+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(o),n(n.P+n.F*r((function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",t)}},cxHJ:function(e,a,t){},tUrg:function(e,a,t){"use strict";t("OGtf")("link",(function(e){return function(a){return e(this,"a","href",a)}}))},"z/gK":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n);t("Dt0B"),t("cxHJ");a.default=function(){return r.a.createElement("div",{className:"test cbp-grid"},r.a.createElement("section",{className:"cbp-col-full"},r.a.createElement("h1",{className:"cbp-heading-1 bottom-border"},"John Doe"),r.a.createElement("div",{className:"cbp-col-full back-to"},r.a.createElement("i",{class:"fas fa-arrow-left"}),"BACK TO MY ACCESS"),r.a.createElement("h3",{className:"cbp-col-full cbp-heading-4 duration"},r.a.createElement("span",{className:"cbp-circle green"},"1"),r.a.createElement("span",{className:"cbp-circle blue"},"2"),"Duration/Reason"),r.a.createElement("p",{className:"cbp-heading-5 cbp-spacing-small-bottom"},"For how long would you lorem, ipsum dolor sit amet consectetur adipisicing elit?"),r.a.createElement("p",null,"All roles access Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum laboriosam unde distinctio dolore doloribus."),r.a.createElement("div",{className:"input-elements"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-calendar-alt"}),r.a.createElement("input",{type:"text",placeholder:"07/13/2020"})),"to",r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-calendar-alt"}),r.a.createElement("input",{type:"text",placeholder:"07/13/2020"}))),r.a.createElement("b",{className:"top-margin"},"Approval Comments:"),r.a.createElement("p",null,"Here is a bunch of lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere praesentium minima placeat."),r.a.createElement("i",{className:"top-border top-margin"},"Required. 75/250 charaters remaining.")),r.a.createElement("footer",{className:"cbp-col-full"},r.a.createElement("button",{className:"cbp-button-text"},r.a.createElement("i",{className:"fas fa-times"}),"cancel"),r.a.createElement("button",{className:"cbp-button-text"},r.a.createElement("i",{className:"fas fa-arrow-left"}),"previous"),r.a.createElement("button",{className:"cbp-button-text active"},r.a.createElement("i",{className:"fas fa-paper-plane"}),"SUBMIT")))}}}]);
//# sourceMappingURL=component---src-pages-test-page-test-page-js-f02035abc3b108b79359.js.map