import{t as e}from"./axios-ac3PEbwT.js";import{S as t,l as n,o as r,y as i}from"./runtime-core.esm-bundler-D5tguDwq.js";import{O as a,i as o}from"./index-QcXrSSHz.js";import{t as s}from"./basecomponent-CpIxTQzh.js";var c=e.create({baseURL:`https://api.openweathermap.org/data/2.5`,params:{appid:`5dc0d3558961f26f77b3e208eac9d8fc`,units:`metric`,lang:`kr`}});async function l(e){let{data:t}=await c.get(`/weather`,{params:{q:e}});return t}async function u(e){let{data:t}=await c.get(`/forecast`,{params:{q:e}});return t}function d(e){return{Clear:`맑음`,Clouds:`구름`,Rain:`비`,Drizzle:`비`,Thunderstorm:`뇌우`,Snow:`눈`,Mist:`안개`,Haze:`안개`,Fog:`안개`}[e]??e}function f(e){return new Date(e*1e3).toLocaleTimeString(`ko-KR`,{hour:`2-digit`,minute:`2-digit`})}async function p(e){return await Promise.all(e.map(async e=>{let t=await l(e.query);return{id:e.id,name:e.name,temp:Math.round(t.main.temp),status:d(t.weather[0].main),humidity:t.main.humidity}}))}async function m(e){if(!e)return null;let t=await l(e.query);return{region:e.name,temp:Math.round(t.main.temp),feelsLike:Math.round(t.main.feels_like),tempMin:Math.round(t.main.temp_min),tempMax:Math.round(t.main.temp_max),humidity:t.main.humidity,windSpeed:t.wind.speed,sunrise:f(t.sys.sunrise),sunset:f(t.sys.sunset)}}async function h(e){return e?(await u(e.query)).list.slice(0,4).map(e=>({time:e.dt_txt,temp:Math.round(e.main.temp),status:d(e.weather[0].main)})):[]}async function g(e){let t=await l(e);return{name:t.name,query:e,temp:Math.round(t.main.temp),status:d(t.weather[0].main),humidity:t.main.humidity}}function _(e){return e.temp>=25}function v(e){return typeof e.humidity==`number`&&e.humidity>=70}function y(e,t){return!t.trim()||e.name.includes(t)}function b(e,t){return t===`fahrenheit`?Math.round(e*9/5+32):e}var x=[{id:`city_01`,name:`서울`,query:`Seoul,KR`},{id:`city_02`,name:`수원`,query:`Suwon,KR`},{id:`city_03`,name:`부산`,query:`Busan,KR`},{id:`city_04`,name:`제주`,query:`Jeju,KR`}],S=a(`city`,{state:()=>({cities:[...x]}),getters:{findById:e=>t=>e.cities.find(e=>e.id===t)},actions:{addCity(e,t){let n=`city_custom_${Date.now()}`;return this.cities.push({id:n,name:e,query:t}),n}}}),C=o.extend({name:`progressspinner`,style:`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,classes:{root:`p-progressspinner`,spin:`p-progressspinner-spin`,circle:`p-progressspinner-circle`}}),w={name:`ProgressSpinner`,extends:{name:`BaseProgressSpinner`,extends:s,props:{strokeWidth:{type:String,default:`2`},fill:{type:String,default:`none`},animationDuration:{type:String,default:`2s`}},style:C,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},T=[`fill`,`stroke-width`];function E(e,a,o,s,c,l){return t(),n(`div`,i({class:e.cx(`root`),role:`progressbar`},e.ptmi(`root`)),[(t(),n(`svg`,i({class:e.cx(`spin`),viewBox:`25 25 50 50`,style:l.svgStyle},e.ptm(`spin`)),[r(`circle`,i({class:e.cx(`circle`),cx:`50`,cy:`50`,r:`20`,fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:`10`},e.ptm(`circle`)),null,16,T)],16))],16)}w.render=E;export{v as a,h as c,_ as i,p as l,S as n,y as o,b as r,m as s,w as t,g as u};