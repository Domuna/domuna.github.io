'use strict';
document.documentElement.classList.add('js-enhanced');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
function closeMenu(){menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','打开导航菜单');mobileNav.hidden=true;}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'关闭导航菜单':'打开导航菜单');mobileNav.hidden=!open;});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>640)closeMenu();},{passive:true});
const progress = document.getElementById('scrollProgress');
let scheduled=false;
function drawProgress(){const d=document.documentElement;const extent=Math.max(1,d.scrollHeight-window.innerHeight);progress.style.width=`${Math.min(100,window.scrollY/extent*100)}%`;scheduled=false;}
window.addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(drawProgress);scheduled=true;}},{passive:true});drawProgress();
const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window && !prefersReducedMotion){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:'0px 0px 70px 0px'});document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));}else{document.querySelectorAll('.reveal').forEach(item=>item.classList.add('is-visible'));}
const filters=[...document.querySelectorAll('.filter')];const projects=[...document.querySelectorAll('.project-card')];
filters.forEach(button=>button.addEventListener('click',()=>{const type=button.dataset.filter;filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});let visible=0;projects.forEach(card=>{const show=type==='all'||card.dataset.categories.split(' ').includes(type);card.hidden=!show;if(show)visible++;});document.getElementById('emptyResults').hidden=visible>0;}));
const caseStudies={
 agent:{title:'AI Data Analysis Agent',subtitle:'AI 驱动的数据探索与对话式可视化平台',tags:['Python','Streamlit','Pandas','DeepSeek API','Plotly'],problem:'常见探索性数据分析任务需要手动处理文件、生成统计摘要并编写图表。该项目尝试把这些操作整合成更直观的交互式工作流。',solution:'通过 CSV 上传、统计摘要、LLM 分析报告与自然语言生成图表，将用户的问题与数据可视化串联起来。',evidence:'公开仓库提供代码、README、需求文档和已有运行截图。后续将补充适用于求职展示的真实演示视频。',status:'已公开代码；在线 Demo 尚未开放，公开部署前需要完成安全检查。',repo:'https://github.com/Domuna/AI-Data-Analysis-Agent'},
 ecommerce:{title:'E-commerce Behavior Analysis',subtitle:'电商用户行为、转化漏斗与价值分层分析',tags:['Python','SQL','Power BI','RFM','Data Analytics'],problem:'单纯浏览大量用户行为日志，很难理解流量在各个阶段的转化情况，以及不同用户群体的价值差异。',solution:'以电商用户行为数据为基础，结合清洗、SQL 分析、转化漏斗、RFM 用户分层及 Power BI 看板，形成业务观察。',evidence:'公开仓库包含说明文档、Python 脚本和 Power BI 项目文件。具体结论和统计口径以公开代码及后续复核为准。',status:'已公开仓库；后续补充经过审核的真实分析图表。',repo:'https://github.com/Domuna/ecommerce-behavior-analysis'},
 campus:{title:'Campus QA Data Analysis',subtitle:'校园问答文本挖掘与问题分类',tags:['Python','TF-IDF','KMeans','Logistic Regression','NLP'],problem:'校园问答文本具有自由表达、主题多样、难以直接汇总等特点，需要借助特征抽取和模型识别潜在的问题类型。',solution:'围绕文本特征提取、聚类与分类等方法，探索校园问题的结构、类别与行为模式。',evidence:'公开仓库包含数据处理和机器学习相关项目说明。这里展示的是数据挖掘项目，不冒充已上线的 RAG 产品。',status:'已公开仓库；运行结果与指标将在后续补充。',repo:'https://github.com/Domuna/Campus-QA-Data-Analysis'}
};
const caseGalleries={
 agent:[{src:'./assets/agent-visualization.png',title:'自然语言生成 Plotly 图表'},{src:'./assets/agent-data-preview.png',title:'CSV 上传与数据探查'},{src:'./assets/agent-report.png',title:'AI 数据分析报告'}],
 ecommerce:[{src:'./assets/ecommerce-funnel.png',title:'大盘流量与转化漏斗'},{src:'./assets/ecommerce-products.png',title:'商品运营看板'},{src:'./assets/ecommerce-audience.png',title:'用户画像与商品效能'}],
 campus:[{src:'./assets/campus-categories.png',title:'问答类型分布统计'},{src:'./assets/campus-time.png',title:'问答时间趋势分析'}]
};
const dialog=document.getElementById('projectDialog');const body=document.getElementById('dialogBody');const closeDialog=document.getElementById('closeDialog');
function safeText(s){const node=document.createElement('span');node.textContent=s;return node.innerHTML;}
function openProject(key){const data=caseStudies[key];if(!data)return;const casePageLinks={agent:'ai-data-analysis-agent',ecommerce:'ecommerce-behavior-analysis',campus:'campus-qa-data-analysis'};const fullCaseLink=casePageLinks[key]?'<a class="dialog-case-link" href="./projects/'+casePageLinks[key]+'/">阅读完整项目案例 / Read full case study ↗</a>':'';const galleryMarkup=(caseGalleries[key]||[]).map(img=>`<figure><a href="${img.src}" target="_blank" rel="noopener noreferrer" aria-label="查看原始截图：${safeText(img.title)}"><img src="${img.src}" alt="${safeText(img.title)}" loading="lazy"></a><figcaption>${safeText(img.title)} · 实际项目截图</figcaption></figure>`).join('');body.innerHTML=`<div class="dialog-body"><h2 id="dialogTitle">${safeText(data.title)}</h2><p class="dialog-sub">${safeText(data.subtitle)}</p><div class="dialog-tags">${data.tags.map(t=>`<span>${safeText(t)}</span>`).join('')}</div><h3>THE PROBLEM / 背景</h3><p>${safeText(data.problem)}</p><h3>THE SOLUTION / 方案</h3><p>${safeText(data.solution)}</p><h3>ACTUAL OUTPUT / 真实运行结果</h3><div class="dialog-gallery">${galleryMarkup}</div>${fullCaseLink}<h3>THE EVIDENCE / 当前素材</h3><p>${safeText(data.evidence)}</p><h3>PROJECT STATUS / 项目状态</h3><p>${safeText(data.status)}</p><a class="dialog-repo" href="${data.repo}" target="_blank" rel="noopener noreferrer">查看 GitHub 源码 ↗</a><p class="dialog-warning">本页截图来自公开项目仓库，在线 Demo 尚未开放；运行结论请以仓库中的说明和代码为准。</p></div>`;dialog.showModal();closeDialog.focus();}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project)));
closeDialog.addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
