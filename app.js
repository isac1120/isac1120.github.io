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
    "summary": "실차 응답을 step test와 주행 기록으로 분석하고, 맞춤 NMPC로 사행과 목표 도달 문제를 해결했습니다.",
    "tags": [
      "Isaac Sim",
      "ROS 2 / Nav2",
      "NMPC"
    ],
    "sections": [
      [
        "Sim-to-Real",
        "Isaac Sim의 센서·Action Graph와 ROS 2 주행 스택을 연동하고, 주행 구성을 비교한 뒤 센서·모터 드라이버를 연결해 실차에 적용했습니다."
      ],
      [
        "문제와 원인 분석",
        "TEB에서는 사행이 발생했고, 대안인 RPP에서는 목표 위치·자세 도달이 어긋났습니다. 서로 다른 목표 속도를 입력하는 전진 step test를 수행하고, rosbag의 목표·실제 속도를 그래프로 비교해 구동 응답 특성을 분석했습니다."
      ],
      [
        "차량에 맞춘 NMPC",
        "분석한 구동 특성을 고려하는 NMPC를 구현했습니다. 적용 후 실시한 주행 테스트에서 사행과 목표 위치·자세 도달 문제를 해결했습니다."
      ],
      [
        "온보드 연산 최적화",
        "Python 기반 solver 관련 구현을 C++로 옮기고, 고정값으로 처리할 수 있는 항목을 정리해 불필요한 최적화 변수를 줄였습니다. 다른 프로그램과 함께 동작하도록 연산 부담을 낮췄습니다."
      ],
      [
        "센서 평가",
        "센서 비교 평가와 odometry 구성을 통해 주행 시스템을 개선했습니다."
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
        "하드웨어에 맞춘 펌웨어 수정",
        "서로 다른 키트와 보드를 조합하는 과정에서 펌웨어의 서보 설정과 실제 장착 모터가 일치하지 않아 동작하지 않는 문제를 확인했습니다. 실제 하드웨어에 맞게 펌웨어를 수정하고, CAN 통신과 센서·구동부를 ROS 2 주행 시스템에 통합했습니다."
      ],
      [
        "주행 실험에서 학습 플랫폼으로",
        "실장비를 다른 개발에 사용하는 동안에도 주행 실험을 이어갈 수 있도록 구축했습니다. Mapping·navigation에서 모방학습 데이터 수집과 정책 실행까지 활용 범위를 확장했습니다."
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
    "title": "단일 ACT 정책으로 접근·정렬·복귀",
    "summary": "여섯 배치 유형의 시연 데이터를 구성하고, 하나의 ACT 모델로 명령에 따른 접근·정렬과 복귀를 구현했습니다.",
    "tags": [
      "LeRobot",
      "ACT",
      "Imitation Learning"
    ],
    "sections": [
      [
        "과제 설계",
        "컨테이너 내부의 파레트 적재 상황을 모사한 RC car 환경에서, 가장 앞줄의 왼쪽 대상을 우선하는 접근·정렬 과제와 시작 지점 복귀 과제를 시험했습니다. 포킹 전 정렬 동작을 모사한 실험입니다."
      ],
      [
        "데이터와 단일 정책",
        "대상의 수와 위치가 다른 여섯 배치 유형별로 시연 데이터를 수집하고 LeRobot 기반 ACT 모델을 학습했습니다. 하나의 모델에 0/1 명령으로 과제를 지정해 접근·정렬과 복귀를 실행했습니다."
      ],
      [
        "관측 입력 구성 개선",
        "속도 정보를 관측 입력에 포함했을 때 미세한 편향이 나타나면 그 상태가 계속 유지되는 현상이 있었습니다. 해당 속도 정보를 제외하고 RGB 영상 기반으로 관측 구성을 변경한 뒤 의도한 동작을 확인했습니다. 과제는 0/1 명령으로 구분했습니다."
      ],
      [
        "실기 조건에 맞춘 모델 선택",
        "SmolVLA와 ACT를 시험했습니다. 사용한 온보드 환경에서는 SmolVLA의 실행 속도가 과제 수행에 충분하지 않았고, ACT에서는 실행 가능한 속도와 실제 동작을 확인했습니다."
      ],
      [
        "실기 실행",
        "직접 통합한 RC car에서 데이터 수집·정책 학습·명령별 동작 실행을 연결했습니다. 영상은 학습 데이터를 구성한 여섯 배치 유형에서의 접근·정렬과 복귀 사례입니다."
      ]
    ],
    "media": [
      "act-case-a-four-targets-approach",
      "act-case-b-front-right-approach",
      "act-case-d-two-targets-approach",
      "act-case-a-four-targets-return",
      "act-case-b-front-right-return",
      "act-case-c-front-left-approach",
      "act-case-c-front-left-return",
      "act-case-d-two-targets-return",
      "act-case-e-single-right-approach",
      "act-case-e-single-right-return",
      "act-case-f-single-left-approach",
      "act-case-f-single-left-return"
    ],
    "labels": [
      "A · 4개 배치 · 접근·정렬",
      "B · 앞줄 왼쪽 없음 · 접근·정렬",
      "D · 뒤쪽 2개 · 접근·정렬",
      "A · 4개 배치 · 복귀",
      "B · 앞줄 왼쪽 없음 · 복귀",
      "C · 앞줄 오른쪽 없음 · 접근·정렬",
      "C · 앞줄 오른쪽 없음 · 복귀",
      "D · 뒤쪽 2개 · 복귀",
      "E · 오른쪽 1개 · 접근·정렬",
      "E · 오른쪽 1개 · 복귀",
      "F · 왼쪽 1개 · 접근·정렬",
      "F · 왼쪽 1개 · 복귀"
    ],
    "portrait": true,
    "featuredCount": 4
  },
  {
    "id": "manipulator",
    "number": "04",
    "category": "VISION / MANIPULATION",
    "filters": [
      "vision"
    ],
    "title": "로봇팔 비전 기반 제어",
    "summary": "왜곡 보정·좌표 변환·보정 데이터를 검증하고, 카메라와 로봇 제어를 연결해 AprilTag 추종을 구현했습니다.",
    "tags": [
      "Calibration",
      "Hand–eye",
      "Robot API"
    ],
    "sections": [
      [
        "개발 범위",
        "로봇 API와 카메라를 연동하고 Scaramuzza 기반 왜곡 보정, hand–eye calibration, AprilTag 추종 프로그램을 구현했습니다."
      ],
      [
        "기준 구현과 비교한 왜곡 보정",
        "왜곡 보정에서 비정상적인 결과가 나타나, 정상 동작하는 MATLAB 구현과 파라미터를 비교했습니다. 확인한 차이를 반영해 보정 결과를 개선했습니다."
      ],
      [
        "좌표 변환과 보정 데이터 검증",
        "좌표계 정의와 변환 행렬의 적용 순서를 점검해 변환 오류를 수정했습니다. 남아 있는 실측 위치 차이는 체스보드 보정 이미지의 정확성과 다양성을 개선해 줄였습니다."
      ],
      [
        "실시간 추종으로 연결",
        "보정한 카메라의 AprilTag 관측을 로봇팔 제어에 연결했습니다. 태그를 정면으로 바라보며 일정 거리를 유지하도록 추종하는 프로그램을 개발했습니다."
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
function videoOptions(p){const button=(l,i)=>`<button data-video="${i}" aria-pressed="false">${l}</button>`;if(!p.featuredCount)return p.labels.map(button).join('');return p.labels.slice(0,p.featuredCount).map(button).join('')+`<details class="more-cases"><summary>배치별 추가 영상 보기</summary><div class="video-options">${p.labels.slice(p.featuredCount).map((l,i)=>button(l,i+p.featuredCount)).join('')}</div></details>`;}
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
Object.assign(descriptions,{"act-case-a-four-targets-approach":"A · 4개 배치 · 접근·정렬 · 원본 전체 5.7초 · 원속도","act-case-a-four-targets-return":"A · 4개 배치 · 복귀 · 원본 전체 7.0초 · 원속도","act-case-b-front-right-approach":"B · 앞줄 왼쪽 없음 · 접근·정렬 · 원본 전체 5.3초 · 원속도","act-case-b-front-right-return":"B · 앞줄 왼쪽 없음 · 복귀 · 원본 전체 6.0초 · 원속도","act-case-c-front-left-approach":"C · 앞줄 오른쪽 없음 · 접근·정렬 · 원본 전체 5.0초 · 원속도","act-case-c-front-left-return":"C · 앞줄 오른쪽 없음 · 복귀 · 원본 전체 6.5초 · 원속도","act-case-d-two-targets-approach":"D · 뒤쪽 2개 · 접근·정렬 · 원본 전체 6.9초 · 원속도","act-case-d-two-targets-return":"D · 뒤쪽 2개 · 복귀 · 원본 전체 8.4초 · 원속도","act-case-e-single-right-approach":"E · 오른쪽 1개 · 접근·정렬 · 원본 전체 6.7초 · 원속도","act-case-e-single-right-return":"E · 오른쪽 1개 · 복귀 · 원본 전체 8.4초 · 원속도","act-case-f-single-left-approach":"F · 왼쪽 1개 · 접근·정렬 · 원본 전체 7.1초 · 원속도","act-case-f-single-left-return":"F · 왼쪽 1개 · 복귀 · 원본 전체 8.0초 · 원속도"});
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
 dialog.querySelectorAll('[data-video]').forEach(b=>{const active=Number(b.dataset.video)===index;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
}
function openProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;
 returnFocus=document.activeElement;
 document.querySelector('#dialog-content').innerHTML=`<h2 id="dialog-title">${p.title}</h2><p class="intro">${p.summary}</p><div class="tags">${p.tags.map(x=>`<span>${x}</span>`).join('')}</div><div class="video-stage"><video controls playsinline preload="none">브라우저가 영상을 지원하지 않습니다.</video></div><p class="video-caption" aria-live="polite"></p><div class="video-options" role="group" aria-label="프로젝트 영상 선택">${videoOptions(p)}</div><div class="detail-grid">${p.sections.map(([h,t])=>`<section><h3>${h}</h3><p>${t}</p></section>`).join('')}</div><a class="detail-link" target="_blank" rel="noopener" href="">현재 영상 별도 열기 ↗</a>`;
 setVideo(p,0);dialog.querySelectorAll('[data-video]').forEach(b=>b.addEventListener('click',()=>setVideo(p,Number(b.dataset.video))));
 dialog.showModal();document.body.style.overflow='hidden';document.querySelector('#close-dialog').focus();
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)openProject(b.dataset.project)});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.filter)}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{dialog.querySelector('video')?.pause();document.body.style.overflow='';returnFocus?.focus()});
render();
