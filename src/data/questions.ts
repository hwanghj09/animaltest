export interface Question {
  question: string;
  options: {
    text: string;
    animal: string;
  }[];
}

export const questions: Question[] = [
  {
    question: "가장 좋아하는 활동은 무엇인가요?",
    options: [
      { text: "친구와 수다 떨기", animal: "dog" },
      { text: "새로운 일에 도전하기", animal: "tiger" },
      { text: "조용히 산책하기", animal: "fox" },
      { text: "혼자 책 읽기", animal: "owl" },
      { text: "편안하게 낮잠 자기", animal: "cat" }
    ]
  },
  {
    question: "주말에는 무엇을 하나요?",
    options: [
      { text: "계획 세우기", animal: "tiger" },
      { text: "조용히 쉬기", animal: "owl" },
      { text: "사람들 만나기", animal: "dog" },
      { text: "재미있는 활동 즐기기", animal: "dolphin" },
      { text: "자연과 함께 시간 보내기", animal: "elephant" }
    ]
  },
  {
    question: "어떤 성격에 더 가깝나요?",
    options: [
      { text: "교활하고 영리한", animal: "fox" },
      { text: "침착하고 지혜로운", animal: "owl" },
      { text: "충직하고 친근한", animal: "dog" },
      { text: "용감하고 대담한", animal: "tiger" },
      { text: "독립적이고 우아한", animal: "cat" }
    ]
  },
  {
    question: "어떤 음식을 좋아하나요?",
    options: [
      { text: "건강한 채소와 과일", animal: "owl" },
      { text: "달콤한 간식", animal: "dog" },
      { text: "매운 음식", animal: "tiger" },
      { text: "풍부하고 고소한 음식", animal: "elephant" },
      { text: "가벼운 스낵", animal: "panda" }
    ]
  },
  {
    question: "힘들 때 주로 하는 행동은?",
    options: [
      { text: "조용히 혼자 생각하기", animal: "owl" },
      { text: "친구와 이야기하기", animal: "dog" },
      { text: "문제에 바로 맞서기", animal: "tiger" },
      { text: "숨고 관찰하기", animal: "fox" },
      { text: "휴식 취하기", animal: "panda" }
    ]
  },
  {
    question: "새로운 사람을 만날 때 당신은?",
    options: [
      { text: "관찰하며 신중하게 다가간다", animal: "owl" },
      { text: "먼저 다가가서 친해지려 한다", animal: "dog" },
      { text: "자신감 있게 주도한다", animal: "tiger" },
      { text: "조용하지만 호기심 많다", animal: "cat" },
      { text: "친근하고 사교적이다", animal: "dolphin" }
    ]
  },
  {
    question: "스트레스가 쌓이면 어떻게 하나요?",
    options: [
      { text: "책을 읽거나 명상한다", animal: "owl" },
      { text: "친구와 만나서 이야기한다", animal: "dog" },
      { text: "운동이나 활동으로 푼다", animal: "tiger" },
      { text: "숨거나 혼자만의 시간을 가진다", animal: "fox" },
      { text: "휴식과 놀이를 함께 즐긴다", animal: "panda" }
    ]
  },
  {
    question: "당신이 가장 중요하게 생각하는 가치는?",
    options: [
      { text: "지혜와 학습", animal: "owl" },
      { text: "충성심과 우정", animal: "dog" },
      { text: "용기와 도전", animal: "tiger" },
      { text: "영리함과 적응력", animal: "fox" },
      { text: "평화와 휴식", animal: "panda" }
    ]
  },
  {
    question: "휴가를 간다면 어떤 곳을 선호하나요?",
    options: [
      { text: "조용한 산속", animal: "owl" },
      { text: "가족이나 친구들과 함께하는 곳", animal: "dog" },
      { text: "모험과 액티비티가 많은 곳", animal: "tiger" },
      { text: "넓은 자연과 평화로운 공간", animal: "elephant" },
      { text: "바다나 강가에서 즐기는 시간", animal: "dolphin" }
    ]
  },
  {
    question: "어떤 영화 장르를 좋아하나요?",
    options: [
      { text: "다큐멘터리나 드라마", animal: "owl" },
      { text: "코미디나 가족 영화", animal: "dog" },
      { text: "액션이나 모험 영화", animal: "tiger" },
      { text: "미스터리나 스릴러", animal: "fox" },
      { text: "감동적이고 따뜻한 이야기", animal: "panda" }
    ]
  },
  {
    question: "당신의 꿈은 무엇인가요?",
    options: [
      { text: "지식과 지혜를 쌓는 것", animal: "owl" },
      { text: "사람들에게 사랑받는 것", animal: "dog" },
      { text: "위대한 일을 해내는 것", animal: "tiger" },
      { text: "영리하게 문제를 해결하는 것", animal: "fox" },
      { text: "편안하고 행복한 삶", animal: "panda" }
    ]
  },
  {
    question: "친구가 고민을 털어놓으면 어떻게 하나요?",
    options: [
      { text: "조언을 신중히 해준다", animal: "owl" },
      { text: "따뜻하게 위로해준다", animal: "dog" },
      { text: "함께 해결책을 찾아본다", animal: "tiger" },
      { text: "상황을 객관적으로 분석해준다", animal: "fox" },
      { text: "단순히 곁에서 있어준다", animal: "panda" }
    ]
  },
  {
    question: "팀 프로젝트에서 당신의 역할은?",
    options: [
      { text: "계획을 세우고 조율하는 역할", animal: "owl" },
      { text: "팀 분위기를 좋게 하는 역할", animal: "dog" },
      { text: "과감하게 추진하는 역할", animal: "tiger" },
      { text: "문제를 해결하는 역할", animal: "fox" },
      { text: "팀의 안정감을 주는 역할", animal: "elephant" }
    ]
  },
  {
    question: "가장 좋아하는 색은?",
    options: [
      { text: "파란색", animal: "owl" },
      { text: "노란색", animal: "dog" },
      { text: "빨간색", animal: "tiger" },
      { text: "주황색", animal: "fox" },
      { text: "초록색", animal: "elephant" }
    ]
  },
  {
    question: "어떤 스타일의 옷을 선호하나요?",
    options: [
      { text: "깔끔하고 단정한 옷", animal: "owl" },
      { text: "편안하고 친근한 옷", animal: "dog" },
      { text: "강렬하고 개성있는 옷", animal: "tiger" },
      { text: "멋스럽고 세련된 옷", animal: "fox" },
      { text: "자연친화적인 편안한 옷", animal: "elephant" }
    ]
  },
  {
    question: "성취감을 느낄 때는 언제인가요?",
    options: [
      { text: "문제를 해결했을 때", animal: "owl" },
      { text: "사람들과 좋은 관계를 유지할 때", animal: "dog" },
      { text: "도전에서 성공했을 때", animal: "tiger" },
      { text: "창의적인 아이디어를 냈을 때", animal: "fox" },
      { text: "무거운 책임을 완수했을 때", animal: "elephant" }
    ]
  },
  {
    question: "아침에 일어났을 때 당신은?",
    options: [
      { text: "조용히 하루 계획을 세운다", animal: "owl" },
      { text: "가족이나 친구와 인사한다", animal: "dog" },
      { text: "운동이나 활동으로 시작한다", animal: "tiger" },
      { text: "느긋하게 여유를 즐긴다", animal: "cat" },
      { text: "하루를 차분히 맞이한다", animal: "elephant" }
    ]
  },
  {
    question: "자기 자신을 동물에 비유한다면?",
    options: [
      { text: "부엉이처럼 지혜로운", animal: "owl" },
      { text: "강아지처럼 충직한", animal: "dog" },
      { text: "호랑이처럼 용감한", animal: "tiger" },
      { text: "여우처럼 영리한", animal: "fox" },
      { text: "코끼리처럼 든든한", animal: "elephant" }
    ]
  },
  {
    question: "휴식이 필요할 때 당신은?",
    options: [
      { text: "혼자 조용한 곳에 가서 쉰다", animal: "owl" },
      { text: "친구와 만나서 즐긴다", animal: "dog" },
      { text: "몸을 움직이며 스트레스를 푼다", animal: "tiger" },
      { text: "느긋하게 낮잠을 잔다", animal: "cat" },
      { text: "자연 속에서 편안함을 느낀다", animal: "elephant" }
    ]
  }
];
