(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,a,t){e.exports=t(356)},176:function(e,a,t){},356:function(e,a,t){"use strict";t.r(a);var n,r,l,i,o,c,d,s,u,m=t(0),h=t.n(m),p=t(31),g=t.n(p),b=(t(176),t(17)),f=t(18),v=t(20),E=t(19),C=t(21),O=t(164),j=t.n(O),y=t(165),w=t.n(y),S=t(117),k=t.n(S),D=t(60),I=t.n(D),$=t(158),N=t.n($),x=t(167),M=t.n(x),A=t(166),F=t.n(A),B=t(32),R=t(75),Q=t(93),T=t.n(Q),q=t(94),W=t.n(q),V=t(37),H=t.n(V),G=t(84),L=t.n(G),J=t(86),K=t.n(J),P=t(24),X=t.n(P),z=t(85),U=t.n(z),Y=t(59),Z=t.n(Y),_=t(87),ee=t.n(_),ae=t(88),te=t.n(ae),ne=t(61),re=t.n(ne),le=t(44),ie=t.n(le),oe=t(89),ce=t.n(oe),de=t(91),se=t.n(de),ue=t(90),me=t.n(ue),he=t(33),pe=t.n(he),ge=t(42),be=t.n(ge),fe=t(80),ve=t.n(fe),Ee=t(78),Ce=t.n(Ee),Oe=t(79),je=t.n(Oe),ye=t(43),we=t.n(ye),Se=t(82),ke=t.n(Se),De=t(81),Ie=t.n(De),$e=t(22),Ne=t(27),xe=t(29),Me=t(157),Ae=Object(Me.a)(n||(n=Object(xe.a)(["\n  mutation deleteMovie($id: ID) {\n    deleteMovie(id: $id) {\n      id\n    }\n  }\n"]))),Fe=Object(Me.a)(r||(r=Object(xe.a)(["\n  query moviesQuery($name: String) {\n    movies(name: $name) {\n      id\n      name\n      genre\n      rate\n      watched\n      director {\n        id\n        name\n      }\n    }\n  }\n"]))),Be=Object(Ne.b)(Ae,{props:function(e){var a=e.mutate;return{deleteMovie:function(e){return a({variables:e,refetchQueries:[{query:Fe,variables:{name:""}}]})}}}}),Re=Object($e.a)(Be)(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).handleDelete=function(){var e=t.props,a=e.id,n=e.handleClose;(0,e.deleteMovie)(a),n()},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props,a=e.open,t=e.handleClose;return h.a.createElement(be.a,{open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},h.a.createElement(we.a,{id:"alert-dialog-title"},"Are you sire that you want to delete element?"),h.a.createElement(Ce.a,null,h.a.createElement(je.a,{id:"alert-dialog-description"},"If you click 'Confirm' this element will be removed from data base.")),h.a.createElement(ve.a,null,h.a.createElement(pe.a,{onClick:t,color:"primary"},h.a.createElement(Ie.a,null)," Cancel"),h.a.createElement(pe.a,{onClick:this.handleDelete,color:"primary",autoFocus:!0},h.a.createElement(ke.a,null)," Confirm")))}}]),a}(h.a.Component)),Qe=t(48),Te=t.n(Qe),qe=t(83),We=t.n(qe),Ve=t(25),He=Object($e.a)(Object(Ve.withStyles)(function(e){return{search:{position:"relative",width:"100%"},searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{paddingTop:2*e.spacing.unit,paddingRight:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,paddingLeft:10*e.spacing.unit}}}))(function(e){function a(){return Object(b.a)(this,a),Object(v.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.name,n=e.handleSearch,r=e.handleChange;return h.a.createElement("div",{className:a.search},h.a.createElement("div",{className:a.searchIcon},h.a.createElement(We.a,null)),h.a.createElement(Te.a,{onChange:r("name"),onKeyPress:function(e){return n(e)},value:t,placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput}}))}}]),a}(h.a.Component)),Ge=Object(Ne.b)(Fe,{options:function(e){var a=e.name;return{variables:{name:void 0===a?"":a}}}}),Le=Object($e.a)(Object(Ve.withStyles)(function(e){return{searchRoot:{marginBottom:3*e.spacing.unit,minHeight:6*e.spacing.unit,display:"flex"},root:{width:"100%",overflowX:"auto"}}}),Ge)(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={anchorEl:null,openDialog:!1,name:""},t.handleChange=function(e){return function(a){t.setState(Object(B.a)({},e,a.target.value))}},t.handleSearch=function(e){var a=t.props.data,n=t.state.name;13===e.charCode&&a.fetchMore({variables:{name:n},updateQuery:function(e,a){return a.fetchMoreResult}})},t.handleDialogOpen=function(){t.setState({openDialog:!0})},t.handleDialogClose=function(){t.setState({openDialog:!1})},t.handleClick=function(e,a){var n=e.currentTarget;t.setState({anchorEl:n,data:a})},t.handleClose=function(){t.setState({anchorEl:null})},t.handleEdit=function(){t.props.onOpen(t.state.data),t.handleClose()},t.handleDelete=function(){t.handleDialogOpen(),t.handleClose()},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.anchorEl,n=a.openDialog,r=a.data,l=void 0===r?{}:r,i=a.name,o=this.props,c=o.classes,d=o.data,s=void 0===d?{}:d;console.log(s);var u=s.movies,m=void 0===u?[]:u;return h.a.createElement(h.a.Fragment,null,h.a.createElement(H.a,null,h.a.createElement(He,{name:i,handleChange:this.handleChange,handleSearch:this.handleSearch})),h.a.createElement(Re,{open:n,handleClose:this.handleDialogClose,id:l.id}),h.a.createElement(H.a,{className:c.root},h.a.createElement(L.a,null,h.a.createElement(U.a,null,h.a.createElement(Z.a,null,h.a.createElement(X.a,null,"Name"),h.a.createElement(X.a,null,"Genre"),h.a.createElement(X.a,{align:"right"},"Rate"),h.a.createElement(X.a,null,"Director"),h.a.createElement(X.a,null,"Watched"),h.a.createElement(X.a,{align:"right"}))),h.a.createElement(K.a,null,m.map(function(a){return h.a.createElement(Z.a,{key:a.id},h.a.createElement(X.a,{component:"th",scope:"row"},a.name),h.a.createElement(X.a,null,a.genre),h.a.createElement(X.a,{align:"right"},a.rate),h.a.createElement(X.a,null,a.director.name),h.a.createElement(X.a,null,h.a.createElement(ee.a,{checked:a.watched,disabled:!0})),h.a.createElement(X.a,{align:"right"},h.a.createElement(h.a.Fragment,null,h.a.createElement(re.a,{color:"inherit",onClick:function(t){return e.handleClick(t,a)}},h.a.createElement(te.a,null)),h.a.createElement(ce.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:e.handleClose},h.a.createElement(ie.a,{onClick:e.handleEdit},h.a.createElement(me.a,null)," Edit"),h.a.createElement(ie.a,{onClick:e.handleDelete},h.a.createElement(se.a,null)," Delete")))))})))))}}]),a}(h.a.Component)),Je=t(56),Ke=t.n(Je),Pe=t(111),Xe=t.n(Pe),ze=t(114),Ue=t.n(ze),Ye=t(113),Ze=t.n(Ye),_e=t(163),ea=t.n(_e),aa=t(112),ta=t.n(aa),na=t(92),ra=t.n(na),la=Object(Me.a)(l||(l=Object(xe.a)(["\n  mutation addMovie($name: String!, $genre: String!, $watched: Boolean!, $rate: Int, $directorId: ID) {\n    addMovie(name: $name, genre: $genre, watched: $watched, rate: $rate, directorId: $directorId) {\n      name\n    }\n  }\n"]))),ia=Object(Me.a)(i||(i=Object(xe.a)(["\n  mutation updateMovie($id: ID, $name: String!, $genre: String!, $watched: Boolean!, $rate: Int, $directorId: ID) {\n    updateMovie(id: $id, name: $name, genre: $genre, watched: $watched, rate: $rate, directorId: $directorId) {\n      name\n    }\n  }\n"]))),oa=Object(Me.a)(o||(o=Object(xe.a)(["\n  query directorsQuery($name: String) {\n    directors(name: $name) {\n      id\n      name\n    }\n  }\n"]))),ca=Object($e.a)(Object(Ne.b)(la,{props:function(e){var a=e.mutate;return{addMovie:function(e){return a({variables:e,refetchQueries:[{query:Fe,variables:{name:""}}]})}}}}),Object(Ne.b)(ia,{props:function(e){var a=e.mutate;return{updateMovie:function(e){return a({variables:e,refetchQueries:[{query:Fe,variables:{name:""}}]})}}}}),Object(Ne.b)(oa,{options:function(e){var a=e.name;return{variables:{name:void 0===a?"":a}}}})),da=Object($e.a)(Object(Ve.withStyles)(function(e){return{container:{padding:2*e.spacing.unit},title:{paddingBottom:0},textField:{width:"100%"},formControl:{minWidth:120},formControlSelect:{marginTop:2*e.spacing.unit,width:"100%"},wrapper:{marginTop:2*e.spacing.unit,display:"flex",justifyContent:"space-between"},button:{minWidth:100}}}),ca)(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).handleClose=function(){t.props.onClose()},t.handleSave=function(){var e=t.props,a=e.selectedValue,n=e.onClose,r=e.addMovie,l=e.updateMovie,i=a.id,o=a.name,c=a.genre,d=a.rate,s=a.directorId,u=a.watched;i?l({id:i,name:o,genre:c,rate:Number(d),directorId:s,watched:Boolean(u)}):r({name:o,genre:c,rate:Number(d),directorId:s,watched:Boolean(u)}),n()},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.data,n=void 0===t?{}:t,r=a.classes,l=a.open,i=a.handleChange,o=a.handleSelectChange,c=a.handleCheckboxChange,d=a.selectedValue,s=void 0===d?{}:d,u=s.name,m=s.genre,p=s.rate,g=s.directorId,b=s.watched,f=n.directors,v=void 0===f?[]:f;return h.a.createElement(be.a,{onClose:this.handleClose,open:l,"aria-labelledby":"simple-dialog-title"},h.a.createElement(we.a,{className:r.title,id:"simple-dialog-title"},"Movie information"),h.a.createElement("form",{className:r.container,noValidate:!0,autoComplete:"off"},h.a.createElement(Ke.a,{id:"outlined-name",label:"Name",className:r.textField,value:u,onChange:i("name"),margin:"normal",variant:"outlined"}),h.a.createElement(Ke.a,{id:"outlined-genre",label:"Genre",className:r.textField,value:m,onChange:i("genre"),margin:"normal",variant:"outlined"}),h.a.createElement(Ke.a,{id:"outlined-rate",label:"Rate",value:p,onChange:i("rate"),type:"number",className:r.textField,margin:"normal",variant:"outlined"}),h.a.createElement(Ze.a,{variant:"outlined",className:r.formControlSelect},h.a.createElement(ta.a,{ref:function(a){e.InputLabelRef=a},htmlFor:"outlined-age-simple"},"Director"),h.a.createElement(Ue.a,{value:g,onChange:o,input:h.a.createElement(Xe.a,{name:"directorId",id:"outlined-director",labelWidth:57})},v.map(function(e){return h.a.createElement(ie.a,{key:e.id,value:e.id},e.name)}))),h.a.createElement("div",{className:r.wrapper},h.a.createElement(ea.a,{control:h.a.createElement(ee.a,{checked:b,onChange:c("watched"),value:"watched"}),label:"Watched movie"}),h.a.createElement(pe.a,{onClick:this.handleSave,variant:"contained",color:"primary",className:r.button},h.a.createElement(ra.a,null)," Save"))))}}]),a}(h.a.Component)),sa=Object($e.a)(Object(Ve.withStyles)(function(e){return{wrapper:{position:"relative",minHeight:"calc(100vh - 24px * 2 - 72px)"},fab:{position:"absolute",bottom:0,right:0}}}))(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,name:"",genre:"",watched:!1,rate:0,directorId:""},t.handleClickOpen=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.setState(Object(R.a)({open:!0},e,{directorId:e.director?e.director.id:""}))},t.handleClose=function(){t.setState({name:"",genre:"",watched:!1,rate:0,directorId:"",open:!1})},t.handleSelectChange=function(e){var a=e.target;t.setState(Object(B.a)({},a.name,a.value))},t.handleCheckboxChange=function(e){return function(a){var n=a.target;t.setState(Object(B.a)({},e,n.checked))}},t.handleChange=function(e){return function(a){var n=a.target;t.setState(Object(B.a)({},e,n.value))}},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.id,n=a.name,r=a.genre,l=a.watched,i=a.rate,o=a.directorId,c=a.open,d=this.props.classes;return h.a.createElement(h.a.Fragment,null,h.a.createElement(da,{handleChange:this.handleChange,handleSelectChange:this.handleSelectChange,handleCheckboxChange:this.handleCheckboxChange,selectedValue:{id:t,name:n,genre:r,watched:l,rate:i,directorId:o},open:c,onClose:this.handleClose}),h.a.createElement("div",{className:d.wrapper},h.a.createElement(Le,{onOpen:this.handleClickOpen,onClose:this.handleClose}),h.a.createElement(T.a,{onClick:function(){return e.handleClickOpen()},color:"primary","aria-label":"Add",className:d.fab},h.a.createElement(W.a,null))))}}]),a}(h.a.Component)),ua=Object(Me.a)(c||(c=Object(xe.a)(["\n  mutation deleteDirector($id: ID) {\n    deleteDirector(id: $id) {\n      id\n    }\n  }\n"]))),ma=Object(Me.a)(d||(d=Object(xe.a)(["\n  query directorsQuery($name: String) {\n    directors(name: $name) {\n      id\n      name\n      age\n      movies {\n        id\n        name\n      }\n    }\n  }\n"]))),ha=Object(Ne.b)(ua,{props:function(e){var a=e.mutate;return{deleteDirector:function(e){return a({variables:e,refetchQueries:[{query:ma,variables:{name:""}}]})}}}}),pa=Object($e.a)(ha)(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).handleDelete=function(){var e=t.props,a=e.id,n=e.handleClose;(0,e.deleteDirector)(a),n()},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props,a=e.open,t=e.handleClose;return h.a.createElement(be.a,{open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},h.a.createElement(we.a,{id:"alert-dialog-title"},"Are you sire that you want to delete element?"),h.a.createElement(Ce.a,null,h.a.createElement(je.a,{id:"alert-dialog-description"},"If you click 'Confirm' this element will be removed from data base.")),h.a.createElement(ve.a,null,h.a.createElement(pe.a,{onClick:t,color:"primary"},h.a.createElement(Ie.a,null)," Cancel"),h.a.createElement(pe.a,{onClick:this.handleDelete,color:"primary",autoFocus:!0},h.a.createElement(ke.a,null)," Confirm")))}}]),a}(h.a.Component)),ga=Object(Ne.b)(ma,{options:function(e){var a=e.name;return{variables:{name:void 0===a?"":a}}}}),ba=Object($e.a)(Object(Ve.withStyles)(function(e){return{searchRoot:{marginBottom:3*e.spacing.unit,minHeight:6*e.spacing.unit,display:"flex"},root:{width:"100%",overflowX:"auto"}}}),ga),fa=Object($e.a)(Object(Ve.withStyles)(function(e){return{search:{position:"relative",width:"100%"},searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{paddingTop:2*e.spacing.unit,paddingRight:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,paddingLeft:10*e.spacing.unit}}}))(function(e){function a(){return Object(b.a)(this,a),Object(v.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.handleChange,n=e.handleSearch,r=e.name;return h.a.createElement("div",{className:a.search},h.a.createElement("div",{className:a.searchIcon},h.a.createElement(We.a,null)),h.a.createElement(Te.a,{onChange:t("name"),onKeyPress:function(e){return n(e)},value:r,placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput}}))}}]),a}(h.a.Component)),va=ba(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={anchorEl:null,openDialog:!1,name:""},t.handleChange=function(e){return function(a){t.setState(Object(B.a)({},e,a.target.value))}},t.handleSearch=function(e){var a=t.props.data,n=t.state.name;13===e.charCode&&a.fetchMore({variables:{name:n},updateQuery:function(e,a){return a.fetchMoreResult}})},t.handleDialogOpen=function(){t.setState({openDialog:!0})},t.handleDialogClose=function(){t.setState({openDialog:!1})},t.handleClick=function(e,a){var n=e.currentTarget;t.setState({anchorEl:n,data:a})},t.handleClose=function(){t.setState({anchorEl:null})},t.handleEdit=function(e){t.props.onOpen(t.state.data),t.handleClose()},t.handleDelete=function(){t.handleDialogOpen(),t.handleClose()},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.anchorEl,n=a.openDialog,r=a.data,l=void 0===r?{}:r,i=a.name,o=this.props,c=o.classes,d=o.data,s=(void 0===d?{}:d).directors,u=void 0===s?[]:s;return h.a.createElement(h.a.Fragment,null,h.a.createElement(H.a,null,h.a.createElement(fa,{name:i,handleChange:this.handleChange,handleSearch:this.handleSearch})),h.a.createElement(pa,{open:n,handleClose:this.handleDialogClose,id:l.id}),h.a.createElement(H.a,{className:c.root},h.a.createElement(L.a,null,h.a.createElement(U.a,null,h.a.createElement(Z.a,null,h.a.createElement(X.a,null,"Name"),h.a.createElement(X.a,{align:"right"},"Age"),h.a.createElement(X.a,null,"Movies"),h.a.createElement(X.a,null))),h.a.createElement(K.a,null,u.map(function(a){return h.a.createElement(Z.a,{key:a.id},h.a.createElement(X.a,{component:"th",scope:"row"},a.name),h.a.createElement(X.a,{align:"right"},a.age),h.a.createElement(X.a,null,a.movies.map(function(e,a){return h.a.createElement("div",{key:e.name},"".concat(a+1,". "),e.name)})),h.a.createElement(X.a,{align:"right"},h.a.createElement(h.a.Fragment,null,h.a.createElement(re.a,{color:"inherit",onClick:function(t){return e.handleClick(t,a)}},h.a.createElement(te.a,null)),h.a.createElement(ce.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:e.handleClose},h.a.createElement(ie.a,{onClick:function(){return e.handleEdit(a)}},h.a.createElement(me.a,null)," Edit"),h.a.createElement(ie.a,{onClick:e.handleDelete},h.a.createElement(se.a,null)," Delete")))))})))))}}]),a}(h.a.Component)),Ea=Object(Me.a)(s||(s=Object(xe.a)(["\n  mutation addDirector($name: String!, $age: Int!) {\n   addDirector(name: $name, age: $age) { name } \n   }\n"]))),Ca=Object(Me.a)(u||(u=Object(xe.a)(["\n  mutation updateDirector($id: ID, $name: String!, $age: Int!) {\n    updateDirector(id: $id, name: $name, age: $age) {\n      name\n    }\n  }\n"]))),Oa=Object($e.a)(Object(Ne.b)(Ea,{props:function(e){var a=e.mutate;return{addDirector:function(e){return a({variables:e,refetchQueries:[{query:ma,variables:{name:""}}]})}}}}),Object(Ne.b)(Ca,{props:function(e){var a=e.mutate;return{updateDirector:function(e){return a({variables:e,refetchQueries:[{query:ma,variables:{name:""}}]})}}}})),ja=Object($e.a)(Object(Ve.withStyles)(function(e){return{container:{padding:2*e.spacing.unit},title:{paddingBottom:0},textField:{width:"100%"},formControl:{margin:e.spacing.unit,minWidth:120},wrapper:{marginTop:2*e.spacing.unit,display:"flex",justifyContent:"flex-end"},button:{minWidth:100,minHeight:48}}}),Oa)(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).handleClose=function(){t.props.onClose()},t.handleSave=function(){var e=t.props,a=e.selectedValue,n=e.onClose,r=e.addDirector,l=e.updateDirector,i=a.id,o=a.name,c=a.age;i?l({id:i,name:o,age:Number(c)}):r({name:o,age:Number(c)}),n()},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,n=e.handleChange,r=e.selectedValue,l=void 0===r?{}:r,i=l.name,o=l.age;return h.a.createElement(be.a,{onClose:this.handleClose,open:t,"aria-labelledby":"simple-dialog-title"},h.a.createElement(we.a,{className:a.title,id:"simple-dialog-title"},"Director information"),h.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},h.a.createElement(Ke.a,{id:"outlined-name",label:"Name",className:a.textField,value:i,onChange:n("name"),margin:"normal",variant:"outlined"}),h.a.createElement(Ke.a,{id:"outlined-rate",label:"Age",className:a.textField,value:o,onChange:n("age"),type:"number",margin:"normal",variant:"outlined"}),h.a.createElement("div",{className:a.wrapper},h.a.createElement(pe.a,{onClick:this.handleSave,variant:"contained",color:"primary",className:a.button},h.a.createElement(ra.a,null)," Save"))))}}]),a}(h.a.Component)),ya=Object($e.a)(Object(Ve.withStyles)(function(e){return{wrapper:{position:"relative",minHeight:"calc(100vh - 24px * 2 - 72px)"},fab:{position:"absolute",bottom:0,right:0}}}))(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,name:"",age:0},t.handleClickOpen=function(e){t.setState(Object(R.a)({open:!0},e))},t.handleClose=function(){t.setState({name:"",age:0,id:null,open:!1})},t.handleChange=function(e){return function(a){var n=a.target;t.setState(Object(B.a)({},e,n.value))}},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.age,r=a.id,l=a.open,i=this.props.classes;return h.a.createElement(h.a.Fragment,null,h.a.createElement(ja,{handleChange:this.handleChange,selectedValue:{name:t,age:n,id:r},open:l,onClose:this.handleClose}),h.a.createElement("div",{className:i.wrapper},h.a.createElement(va,{onOpen:this.handleClickOpen,onClose:this.handleClose}),h.a.createElement(T.a,{onClick:function(){return e.handleClickOpen(null)},color:"primary","aria-label":"Add",className:i.fab},h.a.createElement(W.a,null))))}}]),a}(h.a.Component)),wa=Object($e.a)(Object(Ve.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:"#212121"}}},{withTheme:!0})),Sa=function(e){var a=e.children,t=e.dir;return h.a.createElement(I.a,{component:"div",dir:t,style:{padding:24}},a)},ka=wa(function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t.handleChangeIndex=function(e){t.setState({value:e})},t}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.theme,n=this.state.value;return h.a.createElement("div",{className:a.root},h.a.createElement(j.a,{position:"static"},h.a.createElement(w.a,{variant:"fullWidth",value:n,onChange:this.handleChange},h.a.createElement(k.a,{label:"Movies",icon:h.a.createElement(F.a,null)}),h.a.createElement(k.a,{label:"Directors",icon:h.a.createElement(M.a,null)}))),h.a.createElement(N.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:n,onChangeIndex:this.handleChangeIndex},h.a.createElement(Sa,{dir:t.direction},h.a.createElement(sa,null)),h.a.createElement(Sa,{dir:t.direction},h.a.createElement(ya,null))))}}]),a}(h.a.Component)),Da=t(110),Ia=t.n(Da),$a=t(168),Na=t.n($a),xa=t(109),Ma=t.n(xa),Aa=Object(Ve.createMuiTheme)({typography:{useNextVariants:!0,color:"#fff"},palette:{type:"dark",primary:{main:"#E535AB"},secondary:Na.a,error:Ma.a,contrastThreshold:3,tonalOffset:.2,contrastText:"#fff"}}),Fa=t(36),Ba=t(55),Ra=new Fa.a({cache:new Ba.a,uri:"http://localhost:3005/graphql"}),Qa=function(e){function a(){return Object(b.a)(this,a),Object(v.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(C.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return h.a.createElement(Ne.a,{client:Ra},h.a.createElement(Ia.a,{theme:Aa},h.a.createElement(ka,null)))}}]),a}(m.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(h.a.createElement(Qa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,2,1]]]);
//# sourceMappingURL=main.3060dadb.chunk.js.map