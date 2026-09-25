const projects = [
  {
    "id": "forklift",
    "number": "01",
    "category": "AUTONOMY / CONTROL",
    "filters": [
      "autonomy",
      "integration"
    ],
    "title": "지게차 Sim-to-Real · 주행 제어",
    "summary": "시뮬레이션에서 검증한 자율주행 소프트웨어를 실차에 적용하고 주행을 개선했습니다.",
    "tags": [
      "Isaac Sim",
      "ROS 2 / Nav2",
      "NMPC"
    ],
    "sections": [
      [
        "개발 경험",
        "시뮬레이션과 ROS 2 기반 주행 소프트웨어를 연동하고 실제 장비에 적용했습니다."
      ],
      [
        "문제 해결",
        "실제 구동 특성을 고려한 NMPC를 구현하고, 연산 부담을 줄이기 위한 최적화와 실차 검증을 진행했습니다."
      ],
      [
        "시스템 평가",
        "센서 비교 평가와 odometry 구성을 포함해 자율주행 시스템의 동작을 점검하고 개선했습니다."
      ]
    ]
  },
  {
    "id": "rc",
    "number": "02",
    "category": "ROBOTICS / INTEGRATION",
    "filters": [
      "integration",
      "autonomy"
    ],
    "title": "RC car 자율주행 테스트 플랫폼",
    "summary": "펌웨어부터 센서·구동부·주행 소프트웨어까지 연결한 실험 플랫폼을 구축했습니다.",
    "tags": [
      "Firmware",
      "CAN",
      "ROS 2"
    ],
    "sections": [
      [
        "개발 경험",
        "플랫폼에 맞게 MCU firmware를 수정하고 통신 인터페이스와 센서·구동부를 ROS 2 시스템에 통합했습니다."
      ],
      [
        "활용",
        "Mapping·navigation 실험을 위한 플랫폼을 구축하고 후속 로봇학습 실험에도 활용했습니다."
      ]
    ]
  },
  {
    "id": "act",
    "number": "03",
    "category": "PHYSICAL AI / LEARNING",
    "filters": [
      "learning"
    ],
    "title": "ACT 모방학습의 실로봇 적용",
    "summary": "직접 통합한 플랫폼에서 데이터 수집·모델 학습·실기 실행을 연결했습니다.",
    "tags": [
      "LeRobot",
      "ACT",
      "Imitation Learning"
    ],
    "sections": [
      [
        "개발 경험",
        "모방학습용 데이터를 수집하고 LeRobot 기반 ACT 모델을 학습했습니다."
      ],
      [
        "실기 적용",
        "학습한 정책을 실제 RC car에서 실행하며 데이터 수집부터 로봇 동작까지 연결하는 과정을 경험했습니다."
      ]
    ]
  },
  {
    "id": "manipulator",
    "number": "04",
    "category": "VISION / MANIPULATION",
    "filters": [
      "vision"
    ],
    "title": "로봇팔 비전 기반 제어",
    "summary": "카메라 보정과 로봇 제어를 연결해 시각 타깃을 추종하는 프로그램을 개발했습니다.",
    "tags": [
      "Calibration",
      "Hand–eye",
      "Robot API"
    ],
    "sections": [
      [
        "개발 경험",
        "로봇 API 연동, 카메라 왜곡 보정, hand–eye calibration 프로그램을 구현했습니다."
      ],
      [
        "시스템 통합",
        "영상에서 관측한 타깃 정보를 로봇팔 동작에 연결하는 비전 기반 추종 프로그램을 개발했습니다."
      ]
    ]
  },
  {
    "id": "amr",
    "number": "05",
    "category": "EMBEDDED / MOTOR CONTROL",
    "filters": [
      "integration",
      "autonomy"
    ],
    "title": "AMR 모터 제어 드라이버",
    "summary": "AMR 구동을 위한 통신·모터 제어 드라이버를 개발했습니다.",
    "tags": [
      "CANopen",
      "Motor Control",
      "AMR"
    ],
    "sections": [
      [
        "개발 경험",
        "CANopen 기반 모터 제어 드라이버 프로그램을 구현했습니다."
      ],
      [
        "검증",
        "모터와 플랫폼을 연동하고 실제 구동을 확인했습니다."
      ]
    ]
  }
];
const grid=document.querySelector('#project-grid'),dialog=document.querySelector('#project-dialog');let returnFocus=null;
function render(filter='all'){
 const shown=projects.filter(p=>filter==='all'||p.filters.includes(filter));
 grid.innerHTML=shown.map(p=>`<article class="project-card"><button class="overview-card" data-project="${p.id}" aria-label="${p.title} 개요 보기"><span class="eyebrow">${p.category}</span><span class="overview-number">${p.number}</span><span class="overview-open">프로젝트 개요 ↗</span></button><div class="card-info"><div class="card-title"><h3>${p.title}</h3><button data-project="${p.id}" aria-label="${p.title} 개요 보기">↗</button></div><p>${p.summary}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div></article>`).join('');
 document.querySelector('#filter-status').textContent=`프로젝트 ${shown.length}개`;
}
function openProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;returnFocus=document.activeElement;
 document.querySelector('#dialog-content').innerHTML=`<h2 id="dialog-title">${p.title}</h2><p class="intro">${p.summary}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="detail-grid overview-detail">${p.sections.map(([h,t])=>`<section><h3>${h}</h3><p>${t}</p></section>`).join('')}</div>`;
 dialog.showModal();document.body.style.overflow='hidden';document.querySelector('#close-dialog').focus();
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)openProject(b.dataset.project)});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.filter)}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';returnFocus?.focus()});
render();
