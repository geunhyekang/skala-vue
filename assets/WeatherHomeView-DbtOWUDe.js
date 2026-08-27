import{a as e,d as t,i as n,n as r,o as i,s as a,t as o,u as s}from"./progressspinner-OP3iSC4w.js";import{D as c,E as l,H as u,M as d,N as f,O as p,S as m,T as h,a as g,c as _,ct as v,f as y,j as ee,l as b,o as x,p as S,q as C,r as w,s as T,st as E,w as D,x as te,y as O}from"./runtime-core.esm-bundler-D5tguDwq.js";import{n as k,r as A,t as j}from"./ripple-Cccf6mzG.js";import{A as M,i as N,k as P,n as ne,t as re}from"./index-ObP7eG1R.js";import{t as ie}from"./basecomponent-BD9f5KJv.js";import{t as F}from"./configStore-DtLDJJau.js";var ae={class:`section-heading-row`},oe={class:`section-heading`},se={key:0},ce={class:`weather-grid`},I={__name:`BaseDashboardCard`,props:{title:{type:String,required:!0}},setup(e){return(t,n)=>(m(),b(`section`,null,[x(`div`,ae,[x(`h2`,oe,v(e.title),1),t.$slots.actions?(m(),b(`div`,se,[h(t.$slots,`actions`)])):_(``,!0)]),x(`div`,ce,[h(t.$slots,`default`)])]))}},le={class:`chat-search`},ue=[`value`],L={__name:`SearchBar`,props:{searchQuery:{type:String,default:``}},emits:[`update-query`],setup(e,{emit:t}){let n=t;function r(e){n(`update-query`,e.target.value)}return(t,n)=>(m(),b(`div`,le,[x(`input`,{value:e.searchQuery,type:`text`,placeholder:`검색할 도시 이름을 입력해보세요`,onInput:r},null,40,ue),n[0]||=x(`button`,{class:`send-btn`,type:`button`,"aria-label":`검색`},[x(`i`,{class:`pi pi-search`})],-1)]))}},R=[`aria-label`],z={class:`weather-row-name`},B={class:`weather-row-temp`},V={class:`weather-tags`},H={key:0,class:`weather-tag hot`},U={key:1,class:`weather-tag cool`},de={key:2,class:`weather-tag humid`},W={__name:`WeatherCard`,props:{city:{type:Object,required:!0}},emits:[`click-detail`],setup(t,{emit:r}){let a=t,o=r,s=F(),c=g(()=>n(a.city.temp,s.unit));function l(){o(`click-detail`,{id:a.city.id,name:a.city.name,status:a.city.status})}function u(){s.toggleFavorite(a.city.id)}return(n,r)=>(m(),b(`div`,{class:`weather-tile`,onClick:l},[x(`button`,{class:E([`favorite-toggle`,{active:C(s).isFavorite(t.city.id)}]),"aria-label":C(s).isFavorite(t.city.id)?`즐겨찾기 해제`:`즐겨찾기 추가`,onClick:M(u,[`stop`])},v(C(s).isFavorite(t.city.id)?`★`:`☆`),11,R),x(`div`,z,v(t.city.name),1),x(`div`,B,v(c.value)+v(C(s).unitSymbol),1),x(`div`,V,[C(e)(t.city)?(m(),b(`span`,H,`🔥 더움 (25도 이상)`)):(m(),b(`span`,U,`❄ 선선함 (25도 미만)`)),C(i)(t.city)?(m(),b(`span`,de,`💧 습도 높음 (`+v(t.city.humidity)+`%)`,1)):_(``,!0)])]))}},fe=re({__name:`UnitToggler`,setup(e){let t=F();return(e,n)=>(m(),b(`button`,{class:`unit-pill`,onClick:n[0]||=(...e)=>C(t).toggleUnit&&C(t).toggleUnit(...e)},v(C(t).unit===`celsius`?`섭씨(°C)`:`화씨(°F)`)+` · 단위변경 `,1))}},[[`__scopeId`,`data-v-6de96b2c`]]),pe={class:`promo-card`},me={class:`promo-title`},he={class:`promo-sub`},ge={__name:`StatusBanner`,props:{favoriteCount:{type:Number,default:0},averageTemp:{type:Number,default:0}},setup(e){return(t,n)=>(m(),b(`div`,pe,[x(`div`,null,[x(`div`,me,`⭐ 즐겨찾기 `+v(e.favoriteCount)+`개`,1),x(`div`,he,`현재 평균 기온 `+v(e.averageTemp)+`°C 기준`,1)]),S(fe)]))}},G={name:`TimesIcon`,extends:k};function _e(e){return xe(e)||be(e)||ye(e)||ve()}function ve(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(e,t){if(e){if(typeof e==`string`)return K(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}function be(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function xe(e){if(Array.isArray(e))return K(e)}function K(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Se(e,t,n,r,i,a){return m(),b(`svg`,O({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),_e(t[0]||=[x(`path`,{d:`M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z`,fill:`currentColor`},null,-1)]),16)}G.render=Se;var Ce=N.extend({name:`message`,style:`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),we={name:`BaseMessage`,extends:ie,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Ce,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function q(e){"@babel/helpers - typeof";return q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},q(e)}function J(e,t,n){return(t=Te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e){var t=Ee(e,`string`);return q(t)==`symbol`?t:t+``}function Ee(e,t){if(q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Y={name:`Message`,extends:we,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return A(J(J({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:j},components:{TimesIcon:G}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Z(Object(n),!0).forEach(function(t){De(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function De(e,t,n){return(t=Oe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oe(e){var t=ke(e,`string`);return X(t)==`symbol`?t:t+``}function ke(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ae=[`data-p`],$=[`data-p`],je=[`data-p`],Me=[`aria-label`,`data-p`],Ne=[`data-p`];function Pe(e,t,n,r,i,a){var o=l(`TimesIcon`),s=c(`ripple`);return m(),T(P,O({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:d(function(){return[i.visible?(m(),b(`div`,O({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":a.dataP},e.ptm(`root`)),[x(`div`,O({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?h(e.$slots,`container`,{key:0,closeCallback:a.close}):(m(),b(`div`,O({key:1,class:e.cx(`content`),"data-p":a.dataP},e.ptm(`content`)),[h(e.$slots,`icon`,{class:E(e.cx(`icon`))},function(){return[(m(),T(p(e.icon?`span`:null),O({class:[e.cx(`icon`),e.icon],"data-p":a.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(m(),b(`div`,O({key:0,class:e.cx(`text`),"data-p":a.dataP},e.ptm(`text`)),[h(e.$slots,`default`)],16,je)):_(``,!0),e.closable?f((m(),b(`button`,O({key:1,class:e.cx(`closeButton`),"aria-label":a.closeAriaLabel,type:`button`,onClick:t[0]||=function(e){return a.close(e)},"data-p":a.dataP},Q(Q({},e.closeButtonProps),e.ptm(`closeButton`))),[h(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(m(),b(`i`,O({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":a.dataP},e.ptm(`closeIcon`)),null,16,Ne)):(m(),T(o,O({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":a.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,Me)),[[s]]):_(``,!0)],16,$))],16)],16,Ae)):_(``,!0)]}),_:3},16)}Y.render=Pe;var Fe={class:`hero-banner`},Ie={key:0,class:`flex justify-content-center my-6`},Le={key:0,class:`add-city-prompt grid-full`},Re=[`disabled`],ze={key:0,style:{color:`#eb4c3f`,"font-size":`0.85rem`,"margin-top":`8px`}},Be={__name:`WeatherHomeView`,setup(e){let n=ne(),i=F(),c=r(),l=u([]),f=u(!0),p=u(null),h=u(``),E=u(!1),O=u(null);te(async()=>{try{l.value=await s(c.cities)}catch{p.value=`날씨 데이터를 불러오지 못했습니다.`}finally{f.value=!1}});let k=g(()=>l.value.filter(e=>a(e,h.value))),A=g(()=>l.value.filter(e=>i.isFavorite(e.id))),j=g(()=>{if(k.value.length===0)return 0;let e=k.value.reduce((e,t)=>e+t.temp,0);return Math.round(e/k.value.length*10)/10});ee(()=>{console.log(`[watchEffect 자동 호출] 현재 검색어 '${h.value}'에 매칭되는 데이터를 필터링`)});function M(e){h.value=e,O.value=null}function N({id:e}){n.push(`/weather/`+e)}async function P(){let e=h.value.trim();if(e){E.value=!0,O.value=null;try{let n=await t(e),r=c.addCity(n.name,n.query);l.value.push({id:r,name:n.name,temp:n.temp,status:n.status,humidity:n.humidity}),h.value=``}catch{O.value=`'${e}' 지역을 찾을 수 없어요. 영문 도시명으로 검색해보세요. (예: Tokyo)`}finally{E.value=!1}}}return(e,t)=>(m(),b(`div`,null,[x(`div`,Fe,[t[0]||=x(`div`,{class:`hero-emoji`},`🌤️`,-1),t[1]||=x(`div`,{class:`hero-title`},[y(` 궁금한 지역 날씨,`),x(`br`),x(`span`,{class:`hero-highlight`},`한 번에`),y(` 검색해보세요 `)],-1),t[2]||=x(`div`,{class:`hero-sub`},`등록된 도시를 검색하거나, 영문 도시명으로 새 지역을 추가해보세요`,-1),S(L,{"search-query":h.value,onUpdateQuery:M},null,8,[`search-query`])]),S(ge,{"favorite-count":C(i).favoriteCount,"average-temp":j.value},null,8,[`favorite-count`,`average-temp`]),f.value?(m(),b(`div`,Ie,[S(C(o))])):p.value?(m(),T(C(Y),{key:1,severity:`error`,closable:!1,class:`mb-4`},{default:d(()=>[y(v(p.value),1)]),_:1})):(m(),b(w,{key:2},[S(I,{title:`⭐ 즐겨찾기한 지역`},{default:d(()=>[A.value.length>0?(m(!0),b(w,{key:0},D(A.value,e=>(m(),T(W,{key:e.id,city:e,onClickDetail:N},null,8,[`city`]))),128)):(m(),T(C(Y),{key:1,severity:`info`,closable:!1,class:`grid-full`},{default:d(()=>[...t[3]||=[y(` 아직 즐겨찾기한 지역이 없어요. 카드의 ☆ 버튼을 눌러 추가해보세요. `,-1)]]),_:1}))]),_:1}),S(I,{title:`📋 지역별 날씨 현황`},{default:d(()=>[(m(!0),b(w,null,D(k.value,e=>(m(),T(W,{key:e.id,city:e,onClickDetail:N},null,8,[`city`]))),128)),k.value.length===0&&h.value.trim()?(m(),b(`div`,Le,[x(`p`,null,`'`+v(h.value)+`' 지역이 목록에 없어요.`,1),t[4]||=x(`p`,{style:{color:`var(--toss-text-secondary)`,"font-size":`0.82rem`,"margin-top":`4px`}},` 새 지역은 영문 도시명으로 검색해야 정확히 추가돼요. (예: Tokyo, Paris) `,-1),x(`button`,{class:`pill-button-primary`,style:{width:`auto`,padding:`10px 20px`,"margin-top":`8px`},disabled:E.value,onClick:P},v(E.value?`검색 중...`:`${h.value} 추가하기`),9,Re),O.value?(m(),b(`p`,ze,v(O.value),1)):_(``,!0)])):_(``,!0)]),_:1})],64))]))}};export{Be as default};