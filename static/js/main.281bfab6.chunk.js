(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/github.2fb3d4c6.svg"},22:function(e,t,n){e.exports=n(57)},28:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(19),s=n.n(o),r=(n(28),n(3)),l=n(6),c=n(7),u=n(9),m=n(8),g=n(10),h=n(20),d=n.n(h),f=(n(49),function(e){var t=e.changeRoute,n=e.isSignedIn,a=e.route;return i.a.createElement("nav",{className:"Navigation"},i.a.createElement("p",{className:"Navigation-brand"},"QoQtails"),n?i.a.createElement("div",{className:"Navigation-buttons"},"home"===a?i.a.createElement("button",{className:"Navigation-button",onClick:function(){return t("savedQoqtails")}},"My Qoqtails"):i.a.createElement("button",{className:"Navigation-button",onClick:function(){return t("home")}},"Home"),i.a.createElement("button",{className:"Navigation-button",onClick:function(){return t("signin")}},"Sign Out")):i.a.createElement("div",{className:"Navigation-buttons"},i.a.createElement("button",{className:"Navigation-button",onClick:function(){return t("signin")}},"Sign In"),i.a.createElement("button",{className:"Navigation-button",onClick:function(){return t("register")}},"Register")))}),q=(n(50),function(e){var t=e.route,n=e.changeRoute,a=e.onPasswordChange,o=e.onUsernameChange,s=e.submitSignIn,r=e.signInUrl,l=e.registerUrl,c=e.signInError,u=e.handleKeyDown,m="signin"===t?"Sign In":"Register",g="signin"===t?"Don't have an account yet?":"Already have an account?",h="signin"===t?"register":"signin",d="signin"===t?r:l;return i.a.createElement("div",{className:"Signin"},i.a.createElement("div",{className:"Signin-form"},i.a.createElement("h1",{className:"Signin-title"},m),c.length?i.a.createElement("p",{className:"Signin-error"},c):null,i.a.createElement("div",{className:"Signin-input-container"},i.a.createElement("input",{className:"Signin-input",type:"text",placeholder:"username...",onChange:o,onKeyDown:u})),i.a.createElement("div",{className:"Signin-input-container"},i.a.createElement("input",{className:"Signin-input",type:"password",placeholder:"password...",onChange:a,onKeyDown:u})),i.a.createElement("button",{className:"Signin-submit",onClick:function(){return s(d)},type:"submit"},m),i.a.createElement("p",{onClick:function(){return n(h)},className:"Signin-changeroute"},g)))}),p=(n(51),function(e){var t=e.onInputChange;return i.a.createElement("div",{className:"SearchForm"},i.a.createElement("input",{className:"SearchForm-input",type:"text",placeholder:"Just start typing...",onChange:t}))}),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={disabled:!1},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handler",value:function(){var e=this,t=this.props.action();if(t&&Promise.resolve(t))return this.setState({disabled:!0}),t.then(function(){return e.setState({disabled:!1})}).catch(function(){return e.setState({disabled:!1})})}},{key:"attrs",value:function(){return{children:this.props.name,type:"button",role:"button",onClick:this.handler.bind(this),disabled:this.state.disabled,className:this.props.cssClass}}},{key:"render",value:function(){return i.a.createElement("button",this.attrs())}}]),t}(a.Component),E=(n(52),function(e){var t=e.qoqtail,n=e.saveQoqtail,a=e.user,o=e.deleteQoqtail;return i.a.createElement("div",{className:"Qoqtail"},i.a.createElement("h2",{className:"Qoqtail-title"},t.name),i.a.createElement("div",{className:"Qoqtail-container"},i.a.createElement("div",{className:"Qoqtail-image"},i.a.createElement("img",{src:t.image,alt:t.name})),i.a.createElement("div",{className:"Qoqtail-ingredients"},t.ingredients.map(function(e,t){return e[0]&&e[0].length?i.a.createElement("div",{key:t,className:"Qoqtail-ingredient-container"},i.a.createElement("div",{className:"Qoqtail-ingredient"},e[0]),e[1].length&&"\n"!==e[1]?i.a.createElement("div",{className:"Qoqtail-measure"},e[1]):null):null})),i.a.createElement("p",null,t.instructions),i.a.createElement("div",{className:"Qoqtail-glass"},"Serve: ",t.glass),a.qoqtails&&a.qoqtails.length&&a.qoqtails.some(function(e){return e.id===t.id})?i.a.createElement(v,{name:"Delete",cssClass:"Qoqtail-button",action:function(){return o(t.id)}}):i.a.createElement(v,{name:"Save",cssClass:"Qoqtail-button",action:function(){return n(t.id,t.name)}})))}),b=(n(53),function(e){var t=e.data,n=e.saveQoqtail,a=e.user,o=e.deleteQoqtail;return i.a.createElement("div",{className:"ListResults"},null===t?i.a.createElement("h2",{className:"ListResults-error"},"Sorry, nothing found"):t.map(function(e){return i.a.createElement(E,{key:e.id,qoqtail:e,saveQoqtail:n,user:a,deleteQoqtail:o})}))}),N=(n(54),function(e){var t=e.saveQoqtail,n=e.deleteQoqtail,a=e.user,o=e.onSelectChange;return i.a.createElement("div",{className:"MyQoqtails"},a.currentQoqtail&&a.currentQoqtail.id?i.a.createElement("div",null,i.a.createElement("select",{className:"MyQoqtails-select",onChange:o},a.qoqtails.map(function(e){return i.a.createElement("option",{key:e.id,value:e.id},e.name)})),i.a.createElement(E,{qoqtail:a.currentQoqtail,user:a,deleteQoqtail:n,saveQoqtail:t})):i.a.createElement("h2",{className:"MyQoqtails-error"},"You have no saves yet!"))}),S=(n(55),n(21)),Q=n.n(S),y=function(){return i.a.createElement("footer",{className:"Footer"},i.a.createElement("span",{className:"Footer-helper"}),i.a.createElement("a",{href:"https://github.com/Korka13/qoqtails"},i.a.createElement("img",{src:Q.a,alt:"Chech it on GitHub"})))},w=(n(56),"https://qoqtails-api.herokuapp.com/"),C="getqoqtailbyid/",I="searchqoqtailbyname/",j="addqoqtail/",k="deleteqoqtail/",O="signin/",U="register/",R="wakeup/",P=null,D={route:"signin",signInUsername:"",signInPassword:"",isSignedIn:!1,signInError:"",results:[],user:{id:"",username:"",qoqtails:[],currentQoqtail:{},joined:""}},K=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).wakeUp=function(){fetch(w+R).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},e.loadUser=function(t){e.setState({user:{id:t.id,username:t.username,qoqtails:t.qoqtails}}),t.qoqtails&&t.qoqtails.length&&e.getQoqtail(t.qoqtails[0].id)},e.onUsernameChange=function(t){e.setState({signInUsername:t.target.value})},e.onPasswordChange=function(t){e.setState({signInPassword:t.target.value})},e.handleKeyDown=function(t){13===t.which&&("signin"===e.state.route?e.submitSignIn(O):"register"===e.state.route&&e.submitSignIn(U))},e.submitSignIn=function(t){fetch(w+t,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.state.signInUsername,password:e.state.signInPassword})}).then(function(e){return e.json()}).then(function(t){t.id?(e.loadUser(t),e.changeRoute("home")):t.msg&&e.setState({signInError:t.msg})})},e.getQoqtail=function(t){fetch(w+C+t).then(function(e){return e.json()}).then(function(t){e.setState(function(e){return{user:Object(r.a)({},e.user,{currentQoqtail:t[0]})}})}).catch(function(e){return console.log(e)})},e.onInputChange=function(t){var n=t.target.value;n=(n=(n=n.replace(/^\s+/,"")).replace(/\//g,"")).replace(/\\/g,""),clearTimeout(P),P=setTimeout(function(){e.searchQoqtail(I,n)},200)},e.onSelectChange=function(t){e.getQoqtail(t.target.value)},e.searchQoqtail=function(t,n){n.length>0?fetch(w+t+n).then(function(e){return e.json()}).then(function(t){e.setState({results:t})}).catch(function(e){return console.log(e)}):e.setState({results:[]})},e.changeRoute=function(t){"home"!==t&&"savedQoqtails"!==t?e.setState({isSignedIn:!1}):"home"!==t&&"savedQoqtails"!==t||e.setState({isSignedIn:!0}),e.setState(function(e){return Object(r.a)({},e,{route:t,results:[],signInError:""})})},e.saveQoqtail=function(t,n){return new Promise(function(a){fetch(w+j,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id,qoqtailId:t,name:n})}).then(function(e){return e.json()}).then(function(t){e.setState(function(e){return{user:Object(r.a)({},e.user,{qoqtails:t})}}),e.getQoqtail(t[0].id)}).then(function(){return a()}).catch(function(e){return console.log(e)})})},e.deleteQoqtail=function(t){return new Promise(function(n){fetch(w+k,{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id,qoqtailId:t})}).then(function(e){return e.json()}).then(function(t){t.length?e.getQoqtail(t[0].id):e.setState(function(e){return{user:Object(r.a)({},e.user,{currentQoqtail:{}})}}),e.setState(function(e){return{user:Object(r.a)({},e.user,{qoqtails:t})}})}).then(function(){return n()}).catch(function(e){return console.log(e)})})},e.state=D,e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.wakeUp()}},{key:"render",value:function(){var e=this.state,t=e.route,n=e.user,a=e.results,o=e.isSignedIn,s=e.signInError,r=this.changeRoute,l=this.onInputChange,c=this.loadUser,u=this.saveQoqtail,m=this.deleteQoqtail,g=this.onPasswordChange,h=this.onUsernameChange,v=this.submitSignIn,E=this.onSelectChange,S=this.handleKeyDown;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"page-container"},i.a.createElement("div",{className:"content-wrap"},i.a.createElement(f,{changeRoute:r,isSignedIn:o,route:t}),"home"===t?i.a.createElement("div",null,i.a.createElement(p,{onInputChange:l}),i.a.createElement(b,{data:a,saveQoqtail:u,user:n,deleteQoqtail:m})):"savedQoqtails"===t?i.a.createElement(N,{user:n,deleteQoqtail:m,saveQoqtail:u,onSelectChange:E}):i.a.createElement(q,{changeRoute:r,loadUser:c,route:t,onPasswordChange:g,onUsernameChange:h,submitSignIn:v,signInUrl:O,registerUrl:U,signInError:s,handleKeyDown:S}),i.a.createElement(d.a,null,i.a.createElement("span",{style:{color:"white"}},"\ufe3f"))),i.a.createElement(y,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.281bfab6.chunk.js.map