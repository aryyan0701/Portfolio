import{j as e,T as d,r as c,a,S as m,P as h,A as p,b as g,R as x,B as y}from"./vendor.223f03d4.js";const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}};u();var f="/portfolio/assets/my2.263df1ae.jpg";function v(){return e(d,{options:{strings:["Frontend Developer","React Developer","Tech Enthusiast","Open Source Contributor"],autoStart:!0,loop:!0,deleteSpeed:50}})}const b=["https://www.instagram.com/_aaaryaan__/","https://github.com/aryyan0701","https://www.linkedin.com/in/aryan-kadam-568083204/","https://twitter.com/aaryyan_"],N=()=>{const i=c.exports.useRef(null),t=()=>{i.current.scrollIntoView({behavior:"smooth"})},r=["logo-instagram","logo-github","logo-linkedin","logo-twitter"];return a("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:f,alt:"",className:"md:w-2/3 h-auto object-cover"})}),e("div",{className:"flex-1",children:a("div",{className:"md:text-left text-center",children:[a("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[a("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Aryan Kadam"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:e(v,{})}),e("button",{className:"btn-primary mt-8",onClick:t,children:"Contact Me"}),e("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:r==null?void 0:r.map((s,n)=>e("a",{href:b[n],target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-white cursor-pointer ",children:e("ion-icon",{name:s})},s))})]})}),e("div",{ref:i})]})},w=()=>e("section",{id:"about",className:"py-10 text-white",children:a("div",{className:"text-center mt-8",children:[a("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),e("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:e("div",{className:"p-2",children:a("div",{className:"text-gray-300 my-3",children:[a("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:["I am a 3rd year B.Tech. software engineer student now a days seeking an internship opportunity in this field by applying and enhancing my technical skills and gaining practical experience.",e("br",{}),"As a frontend developer with a focus on React and Next.js, I transform static designs into dynamic, responsive, and high-performance web applications. With a keen eye for detail, I work to create user interfaces that not only meet but exceed modern standards of interactivity and aesthetics.",e("br",{}),"My passion lies in building robust and scalable user interfaces. Leveraging the power of React components and the seamless navigation capabilities of Next.js, I create immersive and performant web experiences that adapt to every device."]}),e("div",{className:"flex mt-10 items-center gap-7",children:[{text:"Completed Projects",count:"10"}].map(t=>a("div",{children:[a("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:[t.count,e("span",{className:"text-cyan-600",children:"+"})," "]}),e("span",{className:"md:text-base text-xs",children:t.text})]},t.text))}),e("br",{}),e("br",{}),e("a",{href:"./src/assets/Resume.pdf",download:!0,children:e("button",{className:"btn-primary",children:"Download CV"})})]})})})]})}),k=()=>{const i=[{name:"HTML",logo:"logo-html5",level:"Intermediate",count:70},{name:"CSS",logo:"logo-css3",level:"Intermediate",count:70},{name:"JAVASCRIPT",logo:"logo-javascript",level:"Intermediate",count:70},{name:"TYPESCRIPT",logo:"logo-typescript",level:"Beginner",count:35},{name:"PYTHON",logo:"logo-python",level:"Intermediate",count:55},{name:"REACT JS",logo:"logo-react",level:"Intermediate",count:60},{name:"GITHUB",logo:"logo-github",level:"Intermediate",count:75},{name:"FIREBASE",logo:"logo-firebase",level:"Beginner",count:40},{name:"NODE JS",logo:"logo-nodejs",level:"Beginner",count:40}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:a("div",{className:"mt-8 text-gray-100 text-center",children:[a("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-8 flex-wrap",children:i==null?void 0:i.map((t,r)=>a("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 rounded-xl",children:[e("p",{className:"text-xl mb-2",children:t.name}),e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${t.count}%,#ddd ${t.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:t.logo,children:" "})})}),e("p",{className:"text-xl mt-3",children:t.level})]},r))})]})})};var j="/portfolio/assets/project-1.145b4c6d.png",S="/portfolio/assets/project-2.f28daa68.jpg",T="/portfolio/assets/project-3.67ce4912.jpg",_="/portfolio/assets/project-4.a2278e01.png",C="/portfolio/assets/project-5.b57d62f1.png",I="/portfolio/assets/project-6.b6c56367.png",M="/portfolio/assets/project-7.fcabbc3e.png";const A=()=>a("section",{id:"projects",className:"py-10 text-white",children:[a("div",{className:"text-center",children:[a("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My Works"})]}),e("br",{}),e("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:e("div",{className:"lg:w-12/13 w-full h-full",children:e(m,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[h,p],children:[{img:S,name:"Netflix Clone",github_link:"https://github.com/aryyan0701/Netflix_Clone"},{img:T,name:"Currency converter",github_link:"https://github.com/aryyan0701/Currency_converter"},{img:j,name:"Type Verse (Check your typing speed)",github_link:"https://github.com/aryyan0701/type_verse",live_link:"https://aryyan0701.github.io/type_verse/"},{img:_,name:"React login/signup Form",github_link:"https://github.com/aryyan0701/React-form",live_link:"https://demo-signin-up-page.netlify.app/"},{img:I,name:"To-do List",github_link:"https://github.com/aryyan0701/Todo-list",live_link:"https://tik-take-tooo.netlify.app/"},{img:C,name:"Tic Tac Toe Game",github_link:"https://github.com/aryyan0701/Tic_Tac_toe",live_link:"https://tik-take-tooo.netlify.app/"},{img:M,name:"My Personal Work",github_link:"https://github.com/aryyan0701/My_work",live_link:"https://aryyan0701.github.io/My_work/"}].map((t,r)=>e(g,{children:a("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:t.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:t.name}),a("div",{className:"flex gap-3",children:[e("a",{href:t.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:t.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},r))})})})]}),B=()=>e("section",{id:"contact",className:"py-10 px-3 text-white",children:a("div",{className:"text-center mt-8",children:[a("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),a("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[a("form",{className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",placeholder:"Your Name"}),e("input",{type:"Email",placeholder:"Your Email Address"}),e("textarea",{placeholder:"Your Message",rows:10}),e("button",{className:"btn-primary w-fit",children:"Send Message"})]}),e("div",{className:"flex flex-col  gap-7 ",children:[{logo:"mail",text:"aryankadam071@gmail.com"},{logo:"call-outline",text:"+91 9328552388"},{logo:"location",text:"Navsari-396445, Gujarat, India"}].map((t,r)=>a("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:t.logo})}),e("p",{className:"md:text-base text-sm  break-words",children:t.text})]},r))})]})]})}),E=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2024 Aryan Kadam.All Rights reserved."}),P=()=>{const[i,t]=c.exports.useState(!1),[r,s]=c.exports.useState(!1),n=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"},{name:"EDUCATION",link:"#education"},{name:"CONTACT",link:"#contact"}];return c.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?t(!0):t(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${i?"bg-white/60  text-gray-900":"text-white"}`,children:a("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:a("h4",{className:"text-4xl uppercase font-bold",children:["A",e("span",{className:"text-cyan-600",children:"ry"}),"a",e("span",{className:"text-cyan-600",children:"n"})]})}),e("div",{className:` ${i?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:n==null?void 0:n.map((l,o)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:l==null?void 0:l.link,children:l==null?void 0:l.name})},o))})}),e("div",{onClick:()=>s(!r),className:`z-[999]  ${r?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${r?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:n==null?void 0:n.map((l,o)=>e("li",{onClick:()=>s(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:l==null?void 0:l.link,children:l==null?void 0:l.name})},o))})})]})})},R=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("ion-icon",{name:"chatbubble-ellipses"})}),O=()=>a("div",{id:"education",className:"flex flex-col items-center py-10",children:[e("div",{className:"text-4xl font-semibold text-primary mt-8",children:a("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Education"})]})}),e("div",{className:"text-xl text-center max-w-lg text-secondary mt-4 mb-2",children:"My educational details are as follows"}),e("div",{className:"h-fit w-full p-4 bg-slate-700 ",children:[{logo:"logo-play",degree:"Bachelor of Technology in Information Technology",institution:"Bhgawan Mahavir University, Surat",grades:"CGPA: 7.58",year:"2021-present",desc:"I am currently pursuing a Bachelor's degree in Information Technology at Bhgawan Mahavir University, Suart."},{logo:"logo-play",degree:"GSEB(XII)-HSC",institution:"Bhaktashram Ashramshala, Navsari",grades:"Grade: 70.1%",year:"2020-2021",desc:"I completed my class 12 high school education at Bhaktashram Ashramshala, Navsari, where I studied Science with PCM."}].map((t,r)=>a("div",{className:"relative mb-6",children:[a("div",{className:"flex items-center mb-4",children:[e("ion-icon",{name:t.play}),e("div",{className:"text-xl font-semibold",children:t.degree})]}),e("div",{className:"text-lg text-gray-400",children:t.institution}),e("div",{className:"text-lg text-gray-400",children:t.grades}),e("div",{className:"text-lg text-gray-400",children:t.year}),e("div",{className:"text-lg text-gray-400 pt-2",children:t.desc})]},r))})]}),L=()=>a("div",{children:[e(P,{}),e(R,{}),e(N,{}),e(w,{}),e(k,{}),e(A,{}),e(O,{}),e(B,{}),e(E,{})]});x.render(e(y,{children:e(L,{})}),document.getElementById("root"));
