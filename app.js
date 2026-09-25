const projects = [
  {
    "id": "forklift",
    "number": "01",
    "category": "AUTONOMY / CONTROL",
    "filters": [
      "autonomy",
      "integration"
    ],
    "title": "지게차, Sim-to-Real에서 NMPC까지",
    "summary": "시뮬레이션과 실차 사이의 구동 지연을 분석하고, 로봇에 맞는 제어기를 구현했습니다.",
    "tags": [
      "Isaac Sim",
      "ROS 2 / Nav2",
      "NMPC",
      "Jetson"
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
    ],
    "sections": [
      [
        "문제",
        "시뮬레이션에서 선정한 TEB를 실차에 적용한 뒤 사행이 발생했습니다. 명령 입력부터 실제 반응 시작까지의 dead time을 원인으로 파악했고, RPP를 검토한 뒤 목표 위치·자세 도달 성능을 개선하기 위해 맞춤 제어기를 구현했습니다."
      ],
      [
        "판단과 구현",
        "지게차의 운동 특성과 dead time을 반영하는 NMPC를 구현했습니다. Jetson에서 다른 프로그램과 함께 실행할 수 있도록 연산 부담을 줄이고 실차 주행을 검증했습니다."
      ],
      [
        "시뮬레이션 검증",
        "기존 지게차 에셋에 센서와 Action Graph를 구성하고 ROS 2/Nav2를 연결했습니다. AMCL 기반 위치 추정 및 SLAM Toolbox·Cartographer·RTAB-Map 구성을 소형/대형 맵에서 비교해 RTAB-Map을 선택했습니다."
      ],
      [
        "실기 및 센서 선택",
        "실차 센서·모터 드라이버를 연동해 주행을 검증했습니다. 센서 정확도를 비교한 뒤 odometry의 translation은 motor encoder, rotation은 ZED IMU를 사용하도록 구성했습니다."
      ],
      [
        "모터별 dead time",
        "구동 모터 약 0.8초, 조향 모터 약 0.4초의 dead time을 고려했습니다. 이는 명령 입력부터 반응 시작까지의 시간이며, 반응 이후 목표값을 따라가는 lag와 구분됩니다."
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
    "summary": "MCU에서 Nav2까지. 지게차와 유사한 센서 구성으로 개발·검증 플랫폼을 구축했습니다.",
    "tags": [
      "MCU Firmware",
      "CAN",
      "ZED / LiDAR",
      "ROS 2"
    ],
    "media": [
      "06-rc-car-system-teleoperation"
    ],
    "labels": [
      "통합 플랫폼 원격조종"
    ],
    "portrait": true,
    "sections": [
      [
        "문제",
        "지게차가 파레트 상하차 개발에 사용되는 동안에도 주행 안정화와 비교 실험을 이어갈 독립적인 플랫폼이 필요했습니다."
      ],
      [
        "구현",
        "서로 다른 키트와 보드를 조합하고 MCU firmware를 수정했습니다. MCU 프로토콜에 맞는 CAN 모터 드라이버 프로그램을 구현하고 ZED·LiDAR, 센서 드라이버와 ROS 2 노드를 통합했습니다."
      ],
      [
        "결과",
        "Mapping과 navigation이 가능한 테스트 플랫폼을 구축했습니다. 동일 플랫폼을 후속 LeRobot 데이터 수집과 ACT 실험에 활용했습니다."
      ],
      [
        "플랫폼 구동",
        "ZED·LiDAR와 컴퓨팅 장치를 탑재한 RC car의 원격조종 구동 영상입니다."
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
    "title": "ACT 모방학습을 실제 RC car로",
    "summary": "직접 통합한 플랫폼으로 데이터를 수집하고, 학습한 정책을 실기에서 실행했습니다.",
    "tags": [
      "LeRobot",
      "ACT",
      "Imitation Learning"
    ],
    "media": [
      "07-rc-car-act-imitation-learning"
    ],
    "labels": [
      "ACT 실기 실험"
    ],
    "portrait": true,
    "sections": [
      [
        "목표",
        "자율주행 테스트 플랫폼을 학습 기반 제어 실험으로 확장했습니다."
      ],
      [
        "구현",
        "RC car를 활용해 LeRobot용 demonstration dataset을 구성하고 ACT 모델을 학습했습니다. 학습한 모델을 실제 플랫폼에서 실행하는 실험을 진행했습니다."
      ],
      [
        "결과",
        "데이터 수집 → ACT 학습 → 실제 RC car 실행으로 이어지는 파이프라인을 구성했습니다. 통합 플랫폼 위에서 학습한 정책을 실행하며 로봇학습 적용을 실험했습니다."
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
    "title": "카메라 보정에서 로봇팔 추종까지",
    "summary": "어안 영상 보정, hand–eye calibration, AprilTag 인식을 로봇 제어와 연결했습니다.",
    "tags": [
      "Scaramuzza",
      "Hand–eye",
      "AprilTag",
      "Robot API"
    ],
    "media": [
      "08-manipulator-calibration-vision"
    ],
    "labels": [
      "로봇팔·보정 화면"
    ],
    "sections": [
      [
        "목표",
        "로봇팔에 부착한 어안 카메라의 영상과 로봇 좌표를 연결하고, 인식한 타깃을 실제 로봇 동작으로 추종하도록 구성했습니다."
      ],
      [
        "보정 파이프라인",
        "로봇 API와 연동한 제어 프로그램으로 로봇팔을 움직이며 체스보드 영상을 수집했습니다. Scaramuzza 모델 기반 왜곡 보정 프로그램과 hand–eye calibration 프로그램을 구현했습니다."
      ],
      [
        "추종 제어",
        "실시간 AprilTag 관측을 로봇팔 제어에 연결해 타깃 정면에서 일정 거리를 유지하며 따라가도록 하는 프로그램을 개발했습니다."
      ],
      [
        "시스템 연동",
        "실물 로봇팔의 동작과 카메라 원영상·체스보드·왜곡 보정 화면을 함께 확인할 수 있습니다."
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
    "title": "AMR CANopen 모터 제어",
    "summary": "모터 단품 구동에서 플랫폼 주행까지, 통신과 제어의 연결을 검증했습니다.",
    "tags": [
      "CANopen",
      "Motor Driver",
      "AMR"
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
    ],
    "sections": [
      [
        "개발 범위",
        "AMR 모터 제어를 위한 CANopen 드라이버 프로그램을 개발했습니다."
      ],
      [
        "벤치와 플랫폼",
        "모터 단품 및 배선·프레임 구성이 보이는 영상과 AMR 플랫폼의 실내 주행 기록을 함께 정리했습니다."
      ],
      [
        "실내 주행 기록",
        "실내 공간을 이동하는 AMR과 별도 waypoint 화면에서 지도 위 위치가 바뀌는 모습을 확인할 수 있습니다."
      ]
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
