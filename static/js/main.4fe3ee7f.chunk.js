(this.webpackJsonpmoviewishlist=this.webpackJsonpmoviewishlist||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(4),c=s.n(a),i=s(3),l=s(5),o=s(6),r=s(8),d=s(7),h=s(0);var j=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"shadow p-2 my-2 col-sm-9",children:e.value}),Object(h.jsx)("button",{className:"btn btn-danger my-2 col-sm-2 offse-1",onClick:function(){e.sendData(e.id)},children:"X"})]})},m=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={items:[],text:""},e.handleChange=function(t){e.setState({text:t.target.value})},e.handleAdd=function(t){if(""!==e.state.text){var s=[].concat(Object(i.a)(e.state.items),[e.state.text]);e.setState({items:s,text:""})}},e.handleDelete=function(t){console.log("Deleted",t);var s=Object(i.a)(e.state.items);console.log("Olditems",s);var n=s.filter((function(e,s){return s!==t}));console.log("Newitems",n),e.setState({items:n})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"container-fluid my-5",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-sm-6 mx-auto text-white shadow-lg p-3",children:[Object(h.jsx)("h2",{className:"text-center",children:" Movie Wish List "}),Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-9",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Write movie to watch Here",value:this.state.text,onChange:this.handleChange})}),Object(h.jsx)("div",{className:"col-2",children:Object(h.jsx)("button",{className:"btn btn-warning px-5 font-weight-bold",onClick:this.handleAdd,children:"Add"})})]}),Object(h.jsx)("div",{className:"conatiner",children:Object(h.jsx)("ul",{className:"list-unstyled row m-5",children:this.state.items.map((function(t,s){return Object(h.jsx)(j,{id:s,value:t,sendData:e.handleDelete},s)}))})})]})]})})})}}]),s}(n.Component);s(14);c.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4fe3ee7f.chunk.js.map