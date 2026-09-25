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
    ],
    "media": [
      "01-forklift-nmpc-field",
      "02-forklift-nmpc-rviz",
      "03-forklift-isaac-sim",
      "04-forklift-sim-rviz",
      "05-forklift-teleoperation"
    ],
    "labels": [
      "NMPC 실차 주행",
      "NMPC RViz",
      "Isaac Sim",
      "시뮬레이션 RViz",
      "원격조종"
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
    ],
    "media": [
      "06-rc-car-system-teleoperation"
    ],
    "labels": [
      "통합 플랫폼 원격조종"
    ],
    "portrait": true
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
    ],
    "media": [
      "07-rc-car-act-imitation-learning"
    ],
    "labels": [
      "ACT 실기 실험"
    ],
    "portrait": true
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
    ],
    "media": [
      "08-manipulator-calibration-vision"
    ],
    "labels": [
      "로봇팔·보정 화면"
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
    ],
    "media": [
      "11-amr-navigation-field",
      "09-amr-canopen-motor-bench",
      "10-amr-motor-driver-platform",
      "12-amr-navigation-return",
      "13-amr-waypoint-monitor"
    ],
    "labels": [
      "AMR 실내 주행",
      "모터 벤치",
      "플랫폼 구동부",
      "추가 주행 시점",
      "Waypoint 화면"
    ]
  }
];
const descriptions={
'01-forklift-nmpc-field':'실차 주행 · 원본 00:40–01:40 발췌 · 원속도',
'02-forklift-nmpc-rviz':'RViz 모니터링 · 원본 00:05–00:50 · 실차 영상과 별도 기록',
'03-forklift-isaac-sim':'Isaac Sim · 원본 00:10–00:55 · 시뮬레이션 영상',
'04-forklift-sim-rviz':'시뮬레이션 RViz · 원본 00:15–01:00',
'05-forklift-teleoperation':'원격조종 · 원본 전체 약 73초',
'06-rc-car-system-teleoperation':'원격조종 · 약 25초 전체 · 원속도',
'07-rc-car-act-imitation-learning':'ACT 실기 실험 · 약 21초 전체 · 원속도',
'08-manipulator-calibration-vision':'로봇팔·카메라·보정 화면 · 약 28초 전체',
'09-amr-canopen-motor-bench':'모터 벤치 테스트 · 약 7초 전체',
'10-amr-motor-driver-platform':'플랫폼 구동부 · 약 4초 전체',
'11-amr-navigation-field':'AMR 실내 주행 · 약 50초 전체',
'12-amr-navigation-return':'AMR 실내 주행 · 원본 01:20–02:15 발췌',
'13-amr-waypoint-monitor':'Waypoint 편집·주행 화면 · 원본 00:10–00:55'};
const grid=document.querySelector('#project-grid'),dialog=document.querySelector('#project-dialog');
let returnFocus=null;
function render(filter='all'){
 const shown=projects.filter(p=>filter==='all'||p.filters.includes(filter));
 grid.innerHTML=shown.map(p=>`<article class="project-card"><button class="card-media ${p.portrait?'portrait':''}" data-project="${p.id}" aria-label="${p.title} 상세 및 영상 보기"><img src="media/${p.media[0]}.jpg" alt="${p.title} 프로젝트 영상 장면" loading="lazy" width="1280" height="720"><span class="card-category">${p.category}</span><span class="card-play" aria-hidden="true">▶</span></button><div class="card-info"><span class="card-number">PROJECT ${p.number}</span><div class="card-title"><h3>${p.title}</h3><button data-project="${p.id}" aria-label="${p.title} 상세 보기">↗</button></div><p>${p.summary}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div></article>`).join('');
 document.querySelector('#filter-status').textContent=`프로젝트 ${shown.length}개`;
}
function setVideo(p,index){
 const id=p.media[index],v=dialog.querySelector('video');v.pause();
 v.poster=`media/${id}.jpg`;v.src=`media/${id}.mp4${id==='05-forklift-teleoperation'?'?v=original':''}`;
 v.replaceChildren();
 v.setAttribute('aria-label',p.labels[index]);v.load();
 dialog.querySelector('.video-caption').textContent=descriptions[id];
 dialog.querySelector('.detail-link').href=`media/${id}.mp4`;
 dialog.querySelectorAll('[data-video]').forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-pressed',String(i===index))});
}
function openProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;
 returnFocus=document.activeElement;
 document.querySelector('#dialog-content').innerHTML=`<h2 id="dialog-title">${p.title}</h2><p class="intro">${p.summary}</p><div class="tags">${p.tags.map(x=>`<span>${x}</span>`).join('')}</div><div class="video-stage"><video controls playsinline preload="none">브라우저가 영상을 지원하지 않습니다.</video></div><p class="video-caption" aria-live="polite"></p><div class="video-options" role="group" aria-label="프로젝트 영상 선택">${p.labels.map((l,i)=>`<button data-video="${i}" aria-pressed="false">${l}</button>`).join('')}</div><div class="detail-grid">${p.sections.map(([h,t])=>`<section><h3>${h}</h3><p>${t}</p></section>`).join('')}</div><a class="detail-link" target="_blank" rel="noopener" href="">현재 영상 별도 열기 ↗</a>`;
 setVideo(p,0);dialog.querySelectorAll('[data-video]').forEach(b=>b.addEventListener('click',()=>setVideo(p,Number(b.dataset.video))));
 dialog.showModal();document.body.style.overflow='hidden';document.querySelector('#close-dialog').focus();
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)openProject(b.dataset.project)});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.filter)}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{dialog.querySelector('video')?.pause();document.body.style.overflow='';returnFocus?.focus()});
render();
