/**
 * P6 教学资源数据 — 独立数据文件
 * 加载方式：<script src="data/p6-education.js"></script>
 *
 * 数据来源:
 *   人教版高中化学教材(2019版) / 鲁科版高中化学教材
 *   近5年全国卷及各省市高考化学真题
 *   中国化学奥林匹克竞赛大纲
 *   教学经验积累与常见学生 misconception 研究
 */

const P6_EDUCATION = {};

P6_EDUCATION['H'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第三节 物质的量",
      "knowledgePoints": [
        "物质的量",
        "摩尔质量",
        "气体摩尔体积",
        "阿伏加德罗常数"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第三节 化学中常用的物理量——物质的量",
      "knowledgePoints": [
        "物质的量",
        "摩尔质量",
        "气体摩尔体积"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "氢气的实验室制法(Zn+H₂SO₄)及收集方法",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "氢气作为清洁能源的反应原理及能量变化",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "氢键对物质性质(熔沸点、密度)的影响",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "氧化还原反应中氢的化合价变化",
      "frequency": "高频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "氢气的制取与验纯",
      "objective": "掌握实验室制取氢气的方法及验纯操作",
      "materials": [
        "锌粒",
        "稀硫酸(1:4)",
        "试管",
        "导管",
        "水槽",
        "集气瓶"
      ],
      "procedure": [
        "在试管中加入少量锌粒",
        "加入适量稀硫酸",
        "用排水法收集气体",
        "用拇指堵住管口移近火焰验纯",
        "点燃氢气观察火焰颜色"
      ],
      "expectedPhenomena": "锌粒表面产生大量气泡；纯净氢气燃烧发出轻微\"噗\"声火焰呈淡蓝色；不纯氢气发出尖锐爆鸣声",
      "safetyNotes": [
        "必须验纯后再点燃",
        "使用稀硫酸而非稀盐酸",
        "锌粒用量不宜过多",
        "保持通风"
      ],
      "difficulty": "基础",
      "duration": "15分钟"
    }
  ],
  "mnemonics": [
    "氢的化合价：\"氢一价，常见+1，金属氢化物中-1\"",
    "氢气验纯口诀：\"噗噗声纯，尖锐声不纯\"",
    "氢键记忆：\"F、O、N三种元素，与氢成键生氢键\""
  ],
  "misconceptions": [
    {
      "misconception": "认为氢气与所有金属反应都生成-1价氢化物",
      "correction": "只有与活泼金属(Na、Ca等)反应时氢才表现为-1价，形成离子型氢化物如NaH"
    },
    {
      "misconception": "认为氢键是化学键",
      "correction": "氢键属于分子间作用力，比化学键弱得多(约1/10)，但比普通范德华力强"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解氢气是最轻的气体，能燃烧生成水，实验室用锌和稀硫酸制取",
    "senior": "高中：掌握氢气的制法、性质，理解氢键及其对物质性质的影响，了解氢能源",
    "university": "大学：氢原子轨道理论，氢键本质(σ-hole理论)，氢能源与燃料电池，金属氢",
    "competition": "竞赛：氢原子光谱与玻尔模型，类氢离子，氢的超导性理论，正氢与仲氢"
  }
};

P6_EDUCATION['He'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第四章 物质结构 元素周期律",
      "section": "第一节 原子结构与元素周期表",
      "knowledgePoints": [
        "核外电子排布",
        "稀有气体电子构型",
        "周期表位置"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第一节 元素与物质的分类",
      "knowledgePoints": [
        "元素分类",
        "稀有气体性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "氦的电子排布(1s²)与稳定结构",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "稀有气体在周期表中的位置及性质递变",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "氦气在飞艇和潜水中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "氦气密度演示(氦气球)",
      "objective": "观察氦气比空气轻的性质，对比氢气的安全性",
      "materials": [
        "氦气钢瓶",
        "气球",
        "细线"
      ],
      "procedure": [
        "将气球充入氦气",
        "松手观察气球上升",
        "与充空气的气球对比"
      ],
      "expectedPhenomena": "充氦气的气球明显上浮，且不会燃烧爆炸(对比氢气)",
      "safetyNotes": [
        "不要吸入大量氦气",
        "避免气球飞入高空"
      ],
      "difficulty": "基础",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"稀有气体最外层满，化学性质极稳定\"",
    "\"氦氖氩氪氙氡，惰性气体六兄弟\"",
    "\"氦只两电子就满足，1s²构型最稳定\""
  ],
  "misconceptions": [
    {
      "misconception": "认为稀有气体完全不反应",
      "correction": "稀有气体化学性质极不活泼，但在特定条件下可形成化合物(如XeF₂、XeF₄、XeF₆、KrF₂等)"
    },
    {
      "misconception": "认为氦的最外层电子数为8",
      "correction": "氦只有1个电子层(K层)，最多容纳2个电子，1s²已达稳定结构，不要求8电子"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解氦气是稀有气体，化学性质极不活泼，比空气轻",
    "senior": "高中：掌握氦的电子排布(1s²)与稳定结构关系，理解稀有气体在周期表中的地位",
    "university": "大学：氦的超流体性(He-II)，液氦在低温物理中的应用，氦的量子效应",
    "competition": "竞赛：氦的能级结构，超流相变理论，氦-3与氦-4的差异"
  }
};

P6_EDUCATION['Li'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第一节 钠及其化合物",
      "knowledgePoints": [
        "碱金属通性",
        "锂与钠的性质比较"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第二节 研究物质性质的方法和程序",
      "knowledgePoints": [
        "碱金属递变规律",
        "锂的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "碱金属元素性质的递变规律(锂→钠→钾)",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "锂电池的工作原理",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "锂与水反应的现象",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "锂与水反应",
      "objective": "观察锂与水反应的现象，比较碱金属活泼性",
      "materials": [
        "金属锂",
        "烧杯",
        "水",
        "酚酞试液",
        "镊子",
        "滤纸"
      ],
      "procedure": [
        "在烧杯中加入水和几滴酚酞",
        "用镊子取一小块锂吸干煤油",
        "将锂投入水中",
        "观察现象"
      ],
      "expectedPhenomena": "锂浮在水面上缓慢移动，逐渐溶解，溶液变红(碱性)，不如钠剧烈",
      "safetyNotes": [
        "锂用量要少(绿豆大小)",
        "操作时佩戴护目镜",
        "远离易燃物"
      ],
      "difficulty": "基础",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"锂钠钾铷铯钫，活泼性依次增强\"",
    "\"碱金属，价+1，遇水生碱放氢气\"",
    "\"锂最轻，保煤油，遇水反应较温和\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锂比钠活泼",
      "correction": "碱金属活泼性从Li到Cs递增，锂最不活泼(但Li⁺/Li标准电极电势最负，因水合能大)"
    },
    {
      "misconception": "认为锂电池是一次电池",
      "correction": "锂离子电池是可充电的二次电池，利用Li⁺在正负极间嵌入/脱嵌工作"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解锂是活泼金属，能与水反应",
    "senior": "高中：掌握碱金属递变规律，理解锂的性质在碱金属中的位置",
    "university": "大学：锂的配位化学，锂电池电化学，有机锂试剂",
    "competition": "竞赛：Li⁺/Li电极电势最负的热力学分析，锂的晶体结构"
  }
};

P6_EDUCATION['Be'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "对角线规则",
        "碱土金属性质"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构",
      "section": "第二节 元素周期表与元素周期律",
      "knowledgePoints": [
        "对角线规则",
        "铍与铝的相似性"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "对角线规则(Be-Al相似性)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "铍的化合物两性",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "碱土金属性质递变",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"对角线规则：锂镁似，铍铝似，硼硅似\"",
    "\"铍铝两性相似，氢氧化物都是两性\""
  ],
  "misconceptions": [
    {
      "misconception": "认为Be(OH)₂是碱性氢氧化物",
      "correction": "Be(OH)₂是两性氢氧化物，既能溶于酸也能溶于强碱，与Al(OH)₃相似"
    },
    {
      "misconception": "认为碱土金属都很容易与水反应",
      "correction": "Be和Mg与冷水反应缓慢，Ca/Sr/Ba反应较剧烈，活泼性递增"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铍的位置及对角线规则，知道Be(OH)₂的两性",
    "university": "大学：铍的配位化学，铍的毒性，铍铝合金",
    "competition": "竞赛：对角线规则的理论解释(电荷半径比)，铍的共价性"
  }
};

P6_EDUCATION['B'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第三章 铁金属材料",
      "section": "第一节 铁及其化合物(扩展:无机非金属材料)",
      "knowledgePoints": [
        "硼及其化合物",
        "无机非金属材料"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第四节 硫酸(扩展:硼酸)",
      "knowledgePoints": [
        "硼酸性质",
        "缺电子化合物"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "硼酸(H₃BO₃)的性质和用途",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "硼的缺电子特征",
      "frequency": "低频",
      "difficulty": "困难"
    },
    {
      "point": "硼砂珠试验",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [
    {
      "name": "硼酸的性质实验",
      "objective": "了解硼酸的弱酸性和用途",
      "materials": [
        "硼酸",
        "试管",
        "水",
        "蓝色石蕊试纸",
        "甘油"
      ],
      "procedure": [
        "在试管中加水溶解少量硼酸",
        "用蓝色石蕊试纸测试",
        "加入甘油后再次测试酸性强弱"
      ],
      "expectedPhenomena": "硼酸溶液使蓝色石蕊试纸变红(弱酸性)；加入甘油后酸性增强(形成络合物)",
      "safetyNotes": [
        "硼酸有毒避免误食",
        "操作后洗手"
      ],
      "difficulty": "中等",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"硼是缺电子，三中心两电子键\"",
    "\"硼酸是一元弱酸，不是三元酸(接受OH⁻而非给出H⁺)\""
  ],
  "misconceptions": [
    {
      "misconception": "认为硼酸是三元酸",
      "correction": "硼酸是一元弱酸，它不是给出质子而是接受OH⁻形成B(OH)₄⁻，是一元Lewis酸"
    },
    {
      "misconception": "认为所有非金属氧化物都是酸性氧化物",
      "correction": "B₂O₃是酸性氧化物，但某些非金属氧化物(如CO、NO)是不成盐氧化物"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解硼在周期表中的位置，知道硼酸是弱酸",
    "university": "大学：硼的缺电子化学，硼烷化学，硼氮六环",
    "competition": "竞赛：三中心两电子键，硼烷的Wade规则，硼的簇合物化学"
  }
};

P6_EDUCATION['C'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第三章 铁金属材料(扩展:无机非金属材料)",
      "section": "第三节 无机非金属材料",
      "knowledgePoints": [
        "碳的氧化物",
        "碳酸盐",
        "无机非金属材料"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第一节 碳的多样性",
      "knowledgePoints": [
        "碳的同素异形体",
        "碳的氧化物",
        "碳酸盐"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "CO₂与CO的性质对比及鉴别",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "碳酸钠与碳酸氢钠的性质对比",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "碳的同素异形体(金刚石、石墨、石墨烯、C₆₀)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "CO₂的实验室制法及检验",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "温室效应与碳循环",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "CO₂的制取与性质",
      "objective": "掌握CO₂的实验室制法，验证其性质",
      "materials": [
        "大理石",
        "稀盐酸",
        "启普发生器",
        "试管",
        "澄清石灰水",
        "紫色石蕊试液",
        "蜡烛",
        "烧杯"
      ],
      "procedure": [
        "在启普发生器中用大理石与稀盐酸反应制取CO₂",
        "将CO₂通入澄清石灰水",
        "将CO₂通入紫色石蕊试液",
        "将CO₂倒入放有高低蜡烛的烧杯中"
      ],
      "expectedPhenomena": "大理石表面有气泡；澄清石灰水变浑浊(CaCO₃↓)；石蕊试液变红(碳酸)；下层蜡烛先熄灭(密度比空气大)",
      "safetyNotes": [
        "使用稀盐酸而非稀硫酸(避免CaSO₄覆盖阻止反应)",
        "注意通风",
        "不要将CO₂直接吸入"
      ],
      "difficulty": "基础",
      "duration": "15分钟"
    }
  ],
  "mnemonics": [
    "\"CO₂使石灰水变浑，过量又变清：先沉淀后溶解\"",
    "\"纯碱苏打Na₂CO₃，小苏打NaHCO₃；纯碱热稳强，小苏打受热分解\"",
    "\"金刚石硬导电差，石墨软能导电；同素异形体，结构定性质\"",
    "\"碳的化合价：+4最稳定，+2有还原性(CO)\""
  ],
  "misconceptions": [
    {
      "misconception": "认为CO₂能使所有石蕊试液褪色",
      "correction": "CO₂使石蕊变红(生成碳酸)，但不能使其褪色；能使石蕊褪色的是Cl₂、SO₂等"
    },
    {
      "misconception": "认为金刚石和石墨的化学性质不同",
      "correction": "二者是同素异形体，化学性质相似(都能燃烧生成CO₂)，但物理性质差异大"
    },
    {
      "misconception": "认为Na₂CO₃受热易分解",
      "correction": "Na₂CO₃热稳定性很强，受热不分解；NaHCO₃受热易分解(2NaHCO₃→Na₂CO₃+H₂O+CO₂)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：掌握碳的单质性质、CO和CO₂的性质、碳酸盐的检验",
    "senior": "高中：掌握碳的同素异形体、Na₂CO₃与NaHCO₃对比、碳的氧化物反应规律",
    "university": "大学：有机化学的基础元素，碳的杂化轨道理论，碳簇化学，石墨烯",
    "competition": "竞赛：碳的成键理论，C₆₀的对称性，碳纳米管，有机合成化学"
  }
};

P6_EDUCATION['N'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第五章 化工生产中的重要非金属元素",
      "section": "第二节 氮及其化合物",
      "knowledgePoints": [
        "氮气与氮的固定",
        "氨气与铵盐",
        "硝酸",
        "氮氧化物"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第三节 氮的循环",
      "knowledgePoints": [
        "氮的固定",
        "氨气",
        "硝酸",
        "氮氧化物"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "NH₃的喷泉实验原理及性质",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "HNO₃的强氧化性(与Cu反应)",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "NO与NO₂的性质及转化",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "铵盐的性质及NH₄⁺的检验",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "氮的固定(工业合成氨)",
      "frequency": "中频",
      "difficulty": "中等"
    }
  ],
  "experiments": [
    {
      "name": "氨气的喷泉实验",
      "objective": "验证氨气的溶解性和水溶液的碱性",
      "materials": [
        "圆底烧瓶",
        "带导管胶塞",
        "烧杯",
        "酚酞试液",
        "氨气"
      ],
      "procedure": [
        "在干燥圆底烧瓶中收集满干燥氨气",
        "烧瓶口塞上带玻璃管和滴管的胶塞",
        "挤压滴管使少量水进入烧瓶",
        "打开止水夹观察现象"
      ],
      "expectedPhenomena": "烧杯中的水(含酚酞)通过玻璃管喷入烧瓶，形成红色喷泉(NH₃极易溶于水，溶液呈碱性)",
      "safetyNotes": [
        "氨气有刺激性气味需在通风橱中操作",
        "烧瓶必须干燥",
        "氨气要收集满"
      ],
      "difficulty": "中等",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"N₂三键很牢固，氮的固定不容易\"",
    "\"喷泉实验：氨溶水，压减小，水上升，成喷泉\"",
    "\"硝酸强氧化性：浓硝酸出NO₂，稀硝酸出NO\"",
    "\"铵盐检验：加碱加热，红色石蕊变蓝\""
  ],
  "misconceptions": [
    {
      "misconception": "认为N₂化学性质活泼",
      "correction": "N₂分子中有N≡N三键，键能很大(946 kJ/mol)，化学性质很稳定，常温下不易反应"
    },
    {
      "misconception": "认为硝酸与金属反应都放出H₂",
      "correction": "硝酸是强氧化性酸，与金属反应不会生成H₂，浓硝酸生成NO₂，稀硝酸生成NO"
    },
    {
      "misconception": "认为NO₂和N₂O₄是同一种物质",
      "correction": "NO₂(棕色)和N₂O₄(无色)是不同物质，存在可逆转化2NO₂⇌N₂O₄"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解空气主要成分含氮气(78%)，氮气化学性质不活泼",
    "senior": "高中：掌握NH₃、HNO₃、NO、NO₂的性质，理解氮的循环和工业合成氨",
    "university": "大学：氮的分子轨道理论，配位化学(N₂配体)，硝酸的机理",
    "competition": "竞赛：N₂的配位活化，NO作为信号分子，偶氮化合物，氮族系统化学"
  }
};

P6_EDUCATION['O'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第一节 钠及其化合物(扩展:氧化还原)",
      "knowledgePoints": [
        "氧气性质",
        "氧化还原反应",
        "燃烧"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第二节 研究物质性质的方法和程序",
      "knowledgePoints": [
        "氧气的性质",
        "氧化性"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "氧气的制取方法(实验室与工业)",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "氧化还原反应的概念及配平",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "O₃与O₂的性质对比",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "过氧化氢(H₂O₂)的性质和应用",
      "frequency": "中频",
      "difficulty": "中等"
    }
  ],
  "experiments": [
    {
      "name": "氧气的制取与性质检验",
      "objective": "掌握实验室制取氧气的方法及氧气性质检验",
      "materials": [
        "KMnO₄",
        "试管",
        "导管",
        "集气瓶",
        "水槽",
        "带火星木条"
      ],
      "procedure": [
        "在试管中加入KMnO₄",
        "加热收集氧气(排水法)",
        "用带火星的木条检验"
      ],
      "expectedPhenomena": "KMnO₄受热分解产生氧气；带火星木条复燃",
      "safetyNotes": [
        "试管口放棉花防止KMnO₄进入导管",
        "先撤导管后停止加热(防止倒吸)"
      ],
      "difficulty": "基础",
      "duration": "15分钟"
    }
  ],
  "mnemonics": [
    "\"氧的化合价：-2最常见，过氧化物中-1\"",
    "\"制氧方法：加热高锰酸钾，加热氯酸钾(二氧化锰催化)，分解过氧化氢\"",
    "\"带火星木条复燃——氧气的特征检验\""
  ],
  "misconceptions": [
    {
      "misconception": "认为O₃和O₂是同一种物质",
      "correction": "O₃(臭氧)和O₂是同素异形体，结构不同、性质不同，O₃的氧化性更强"
    },
    {
      "misconception": "认为H₂O₂中氧为-2价",
      "correction": "H₂O₂是过氧化物，O为-1价，既有氧化性又有还原性"
    },
    {
      "misconception": "认为所有燃烧都需要氧气",
      "correction": "燃烧不一定需要氧气，如Mg能在CO₂中燃烧，Na能在Cl₂中燃烧"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：掌握氧气的性质、制法和用途，了解燃烧和灭火",
    "senior": "高中：深入理解氧化还原反应，掌握O₃和H₂O₂的性质，了解环境保护(臭氧层)",
    "university": "大学：分子轨道理论(O₂的三线态)，氧的配位化学，活性氧物种(ROS)",
    "competition": "竞赛：O₂的分子轨道理论，单线态氧，臭氧的结构与共振，超氧化物"
  }
};

P6_EDUCATION['F'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第二节 氯及其化合物(扩展:卤素)",
      "knowledgePoints": [
        "卤素递变",
        "氟的特殊性"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第二节 氯及其化合物(扩展:卤族元素)",
      "knowledgePoints": [
        "卤素性质递变",
        "氟的特性"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "卤素单质氧化性强弱顺序",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "HF的特殊性质(弱酸、腐蚀玻璃)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "氟化物的应用(含氟牙膏、特氟龙)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"卤素氧化性：F>Cl>Br>I，非金属性依次减弱\"",
    "\"HF弱酸腐蚀玻璃，能与SiO₂反应\"",
    "\"氟最活泼，没有正价，只有-1价\""
  ],
  "misconceptions": [
    {
      "misconception": "认为HF是强酸",
      "correction": "HF是弱酸(Ka≈6.6×10⁻⁴)，因F⁻与HF形成强氢键缔合，且H-F键能大"
    },
    {
      "misconception": "认为氟有正化合价",
      "correction": "氟是电负性最大的元素(4.0)，只有-1价，没有正价(其他卤素有+1、+3、+5、+7价)"
    },
    {
      "misconception": "认为卤素都能与水反应生成HX和HXO",
      "correction": "F₂与水反应生成O₂和HF(2F₂+2H₂O→4HF+O₂)，不能生成HFO"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解氟是卤素，化学性质非常活泼",
    "senior": "高中：掌握卤素递变规律，了解HF的特殊性和F₂的强氧化性",
    "university": "大学：氟的有机化学(C-F键)，氟化试剂，惰性气体氟化物",
    "competition": "竞赛：F₂的制备电解原理，氟化氢的缔合，有机氟化学"
  }
};

P6_EDUCATION['Ne'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第四章 物质结构 元素周期律",
      "section": "第一节 原子结构与元素周期表",
      "knowledgePoints": [
        "稀有气体",
        "电子排布",
        "周期表位置"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第一节 元素与物质的分类",
      "knowledgePoints": [
        "元素分类",
        "稀有气体"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "稀有气体的电子构型与稳定性",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "氖气在霓虹灯中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "稀有气体在周期表中的地位",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "霓虹灯发光演示",
      "objective": "观察稀有气体放电发光现象",
      "materials": [
        "氖气放电管",
        "高压电源"
      ],
      "procedure": [
        "将氖气放电管接通高压电源",
        "观察发光颜色"
      ],
      "expectedPhenomena": "氖气放电发出橙红色光",
      "safetyNotes": [
        "高压电源危险由教师操作",
        "不要触碰电极"
      ],
      "difficulty": "基础",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"氦氖氩氪氙氡，零族元素全填满\"",
    "\"霓虹灯里充氖气，通电发出红橙光\""
  ],
  "misconceptions": [
    {
      "misconception": "认为稀有气体完全没有用途",
      "correction": "稀有气体有广泛用途：He(飞艇)、Ne(霓虹灯)、Ar(保护气)、Kr/Xe(光源)、Rn(医疗)"
    },
    {
      "misconception": "认为稀有气体的最外层都是8电子",
      "correction": "He最外层只有2个电子(1s²)，其余稀有气体最外层为8电子(ns²np⁶)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解氖气是稀有气体，常用于霓虹灯",
    "senior": "高中：掌握稀有气体的电子构型与稳定性的关系",
    "university": "大学：稀有气体放电光谱，氖的激光器",
    "competition": "竞赛：稀有气体的能级跃迁，Ne-Cu激光原理"
  }
};

P6_EDUCATION['Na'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第一节 钠及其化合物",
      "knowledgePoints": [
        "钠的物理性质",
        "钠的化学性质(与水/氧气反应)",
        "钠的氧化物",
        "碳酸钠与碳酸氢钠"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第二节 研究物质性质的方法和程序",
      "knowledgePoints": [
        "钠的性质",
        "钠与水反应",
        "钠的氧化物"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钠与水反应的现象和原理",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "Na₂O与Na₂O₂的对比",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "钠的冶炼(电解熔融NaCl)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "Na₂CO₃与NaHCO₃的性质对比",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "焰色试验(钠的黄色火焰)",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "钠的燃烧",
      "objective": "观察钠在空气中燃烧的现象，理解钠的化学活泼性",
      "materials": [
        "金属钠",
        "石棉网",
        "酒精灯",
        "镊子",
        "小刀",
        "滤纸"
      ],
      "procedure": [
        "用镊子取一小块钠用滤纸吸干表面煤油",
        "用小刀切去氧化层切取绿豆大小钠粒",
        "将钠粒置于石棉网上加热至燃烧",
        "观察燃烧现象和产物颜色"
      ],
      "expectedPhenomena": "钠先熔化成小球然后剧烈燃烧，产生黄色火焰，生成淡黄色固体(Na₂O₂)",
      "safetyNotes": [
        "钠用量要少(绿豆大小)",
        "操作时佩戴护目镜",
        "远离水源和易燃物",
        "产物有强氧化性避免接触皮肤"
      ],
      "difficulty": "基础",
      "duration": "10分钟"
    },
    {
      "name": "钠与水反应",
      "objective": "观察钠与水反应的现象，理解碱金属的活泼性",
      "materials": [
        "金属钠",
        "烧杯",
        "水",
        "酚酞试液",
        "镊子",
        "滤纸"
      ],
      "procedure": [
        "在烧杯中加入水和几滴酚酞",
        "用镊子取绿豆大小钠粒吸干煤油",
        "将钠投入水中",
        "观察现象"
      ],
      "expectedPhenomena": "钠浮在水面上(密度小)熔化成小球(熔点低)四处游动(产生气体推动)发出嘶嘶声溶液变红(生成NaOH)",
      "safetyNotes": [
        "钠用量必须少(绿豆大小)",
        "佩戴护目镜",
        "烧杯口不要对着人"
      ],
      "difficulty": "基础",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "钠的化合价只有+1价：\"钠一价，钾一价，钠钾银氢正一价\"",
    "钠的保存：\"钠保煤油中，防氧又防水\"",
    "钠与水反应口诀：\"浮、熔、游、响、红\"——浮在水面上、熔化成小球、四处游动、发出响声、溶液变红(加酚酞)",
    "\"纯碱苏打Na₂CO₃，小苏打NaHCO₃；纯碱热稳强，小苏打受热分解\""
  ],
  "misconceptions": [
    {
      "misconception": "认为Na₂O₂中氧的化合价是-2",
      "correction": "Na₂O₂中过氧根O₂²⁻中氧为-1价，Na₂O₂既含-1价氧又可表现氧化性和还原性"
    },
    {
      "misconception": "认为钠与盐溶液反应会置换出金属",
      "correction": "钠与盐溶液反应时先与水反应生成NaOH和H₂，NaOH再与盐反应，不会直接置换金属"
    },
    {
      "misconception": "认为钠在空气中燃烧生成Na₂O",
      "correction": "钠在空气中燃烧(加热)生成Na₂O₂(淡黄色)，常温下缓慢氧化才生成Na₂O(白色)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解钠是活泼金属，能与水反应生成氢气",
    "senior": "高中：掌握钠的结构、性质、制备、用途，理解碱金属的递变规律",
    "university": "大学：s区元素系统化学，钠的配位化学，有机钠化合物",
    "competition": "竞赛：钠的晶体结构(体心立方)，焰色测试原理，钠的生物化学"
  }
};

P6_EDUCATION['Mg'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第三章 铁金属材料",
      "section": "第二节 铝及其化合物(扩展:镁)",
      "knowledgePoints": [
        "镁的性质",
        "镁的燃烧"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第四节 硫酸(扩展:镁的性质)",
      "knowledgePoints": [
        "镁与酸反应",
        "镁的燃烧"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镁在空气中燃烧的产物(MgO和Mg₃N₂)",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "镁与CO₂反应(燃烧性能)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "镁的冶炼(电解熔融MgCl₂)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "Mg(OH)₂的性质",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "镁在空气中燃烧",
      "objective": "观察镁燃烧的现象，理解镁的活泼性",
      "materials": [
        "镁条",
        "酒精灯",
        "坩埚钳",
        "石棉网"
      ],
      "procedure": [
        "用砂纸打磨镁条去除氧化膜",
        "用坩埚钳夹住镁条",
        "在酒精灯上点燃",
        "置于石棉网上方燃烧"
      ],
      "expectedPhenomena": "镁条剧烈燃烧发出耀眼白光，生成白色固体(主要MgO，少量Mg₃N₂)",
      "safetyNotes": [
        "不可直视强光(损伤眼睛)",
        "佩戴护目镜",
        "远离易燃物"
      ],
      "difficulty": "基础",
      "duration": "5分钟"
    },
    {
      "name": "镁在CO₂中燃烧",
      "objective": "证明镁的强还原性，能夺取CO₂中的氧",
      "materials": [
        "镁条",
        "集气瓶",
        "CO₂气体",
        "坩埚钳",
        "酒精灯"
      ],
      "procedure": [
        "收集一瓶CO₂气体",
        "点燃镁条",
        "将燃烧的镁条伸入CO₂集气瓶中"
      ],
      "expectedPhenomena": "镁在CO₂中继续燃烧，瓶壁出现黑白固体(MgO白色和C黑色)",
      "safetyNotes": [
        "佩戴护目镜",
        "集气瓶口不要对着人"
      ],
      "difficulty": "中等",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"镁条燃烧耀白光，生成白色氧化镁\"",
    "\"镁能夺氧灭CO₂，说明还原性极强\"",
    "\"镁在空气中燃烧：白烟白光生成MgO，还有少量Mg₃N₂\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镁在空气中燃烧只生成MgO",
      "correction": "镁在空气中燃烧主要生成MgO，但同时生成少量Mg₃N₂(氮化镁)，因N₂占空气78%"
    },
    {
      "misconception": "认为CO₂不能支持燃烧",
      "correction": "CO₂一般不支持燃烧，但活泼金属(如Mg)能在CO₂中燃烧夺取其中的氧"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解镁是活泼金属，能在空气中燃烧发出白光",
    "senior": "高中：掌握镁的化学性质(与O₂、CO₂、酸、水反应)，理解镁的冶炼",
    "university": "大学：镁的配位化学，格氏试剂(有机镁)，镁生物化学(叶绿素)",
    "competition": "竞赛：格氏试剂的反应机理，镁的晶体结构，镁合金材料"
  }
};

P6_EDUCATION['Al'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第三章 铁金属材料",
      "section": "第二节 铝及其化合物",
      "knowledgePoints": [
        "铝的性质",
        "氧化铝",
        "氢氧化铝的两性",
        "明矾"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第二节 铝及其化合物(扩展)",
      "knowledgePoints": [
        "铝的两性",
        "Al(OH)₃",
        "铝的冶炼"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "Al₂O₃和Al(OH)₃的两性",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "铝与强碱溶液反应",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "铝热反应(铝作还原剂)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "铝的冶炼(电解熔融Al₂O₃)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "明矾的净水原理",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "氢氧化铝的两性实验",
      "objective": "验证Al(OH)₃既能溶于酸又能溶于强碱",
      "materials": [
        "AlCl₃溶液",
        "NaOH溶液",
        "稀盐酸",
        "试管"
      ],
      "procedure": [
        "在试管中加入AlCl₃溶液",
        "逐滴加入NaOH溶液至产生白色沉淀",
        "将沉淀分装两支试管",
        "一支加盐酸一支加NaOH溶液"
      ],
      "expectedPhenomena": "先产生白色絮状沉淀；加盐酸沉淀溶解；加NaOH沉淀也溶解(两性)",
      "safetyNotes": [
        "NaOH有腐蚀性",
        "注意滴加速度"
      ],
      "difficulty": "中等",
      "duration": "10分钟"
    },
    {
      "name": "铝热反应",
      "objective": "观察铝粉与氧化铁的铝热反应",
      "materials": [
        "铝粉",
        "氧化铁粉",
        "镁条",
        "氯酸钾",
        "坩埚",
        "沙子"
      ],
      "procedure": [
        "将铝粉和氧化铁粉按比例混合",
        "放在坩埚中(底部铺沙子)",
        "上面放镁条和少量氯酸钾",
        "点燃镁条引发反应"
      ],
      "expectedPhenomena": "剧烈反应发出耀眼光芒，放出大量热，有铁水滴落",
      "safetyNotes": [
        "反应剧烈佩戴护目镜",
        "周围无易燃物",
        "坩埚底部铺沙子",
        "远离人群"
      ],
      "difficulty": "困难",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"铝是两性金属，与酸与碱都反应\"",
    "\"Al(OH)₃两性：溶于酸成Al³⁺，溶于碱成AlO₂⁻\"",
    "\"铝热反应：铝粉还原金属氧化物，放出大量热\"",
    "\"电解铝：熔融Al₂O₃，冰晶石降熔点\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铝与NaOH反应产生Al₂O₃",
      "correction": "铝与NaOH溶液反应生成NaAlO₂(偏铝酸钠)和H₂，不是Al₂O₃"
    },
    {
      "misconception": "认为Al₂O₃只能与酸反应",
      "correction": "Al₂O₃是两性氧化物，既能与酸反应(生成Al³⁺)也能与强碱反应(生成AlO₂⁻)"
    },
    {
      "misconception": "认为铝很不活泼",
      "correction": "铝实际上很活泼，但表面形成致密Al₂O₃薄膜阻止进一步反应，所以常温下看似稳定"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解铝是轻金属，用途广泛(铝合金)",
    "senior": "高中：掌握铝的两性、Al(OH)₃的两性、铝热反应、铝的冶炼",
    "university": "大学：铝的配位化学，铝有机化合物，铝的晶体结构(FCC)",
    "competition": "竞赛：铝的Lewis酸性，铝的配合物[AlF₆]³⁻，铝热力学"
  }
};

P6_EDUCATION['Si'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第三章 铁金属材料(扩展:无机非金属材料)",
      "section": "第三节 无机非金属材料",
      "knowledgePoints": [
        "硅单质",
        "二氧化硅",
        "硅酸盐",
        "硅芯片"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第一节 碳的多样性(扩展:硅)",
      "knowledgePoints": [
        "硅的性质",
        "硅酸盐工业"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "SiO₂的性质(与碱反应、与HF反应)",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "硅酸盐的组成与表示方法",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "硅的制取(碳还原SiO₂)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "硅与NaOH溶液反应",
      "frequency": "中频",
      "difficulty": "中等"
    }
  ],
  "experiments": [
    {
      "name": "氢氟酸腐蚀玻璃(演示)",
      "objective": "了解HF与SiO₂的反应",
      "materials": [
        "玻璃片",
        "氢氟酸(稀)",
        "蜡",
        "毛刷"
      ],
      "procedure": [
        "在玻璃片上涂蜡并刻字",
        "在刻痕处滴加稀氢氟酸",
        "放置一段时间后洗净",
        "刮去蜡层观察"
      ],
      "expectedPhenomena": "玻璃刻痕处被腐蚀出现字迹(SiO₂+4HF→SiF₄↑+2H₂O)",
      "safetyNotes": [
        "氢氟酸有剧毒和强腐蚀性",
        "必须在通风橱中由教师演示",
        "佩戴防护手套和护目镜"
      ],
      "difficulty": "困难",
      "duration": "20分钟"
    }
  ],
  "mnemonics": [
    "\"硅是半导体，芯片离不了\"",
    "\"SiO₂不溶于水，但能和HF反应腐蚀玻璃\"",
    "\"硅酸盐用氧化物形式表示：如Na₂SiO₃写作Na₂O·SiO₂\""
  ],
  "misconceptions": [
    {
      "misconception": "认为SiO₂能与水反应生成硅酸",
      "correction": "SiO₂不溶于水也不与水直接反应，硅酸由硅酸盐与酸反应制取"
    },
    {
      "misconception": "认为SiO₂是分子晶体",
      "correction": "SiO₂是原子晶体(共价晶体)，由Si和O以共价键形成三维网状结构，不是SiO₂分子"
    },
    {
      "misconception": "认为玻璃和水晶成分完全不同",
      "correction": "普通玻璃主要成分含硅酸盐，水晶主要成分是SiO₂，两者都含硅"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解硅是半导体材料，广泛用于电子工业",
    "senior": "高中：掌握SiO₂的性质、硅酸盐的表示、硅的制取和用途",
    "university": "大学：硅的半导体物理，硅有机化学，硅酸盐材料科学",
    "competition": "竞赛：硅的能带结构，硅烷化学，沸石分子筛"
  }
};

P6_EDUCATION['P'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第五章 化工生产中的重要非金属元素",
      "section": "第二节 氮及其化合物(扩展:磷)",
      "knowledgePoints": [
        "白磷与红磷",
        "磷酸",
        "磷肥"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第三节 氮的循环(扩展:磷)",
      "knowledgePoints": [
        "磷的同素异形体",
        "磷酸盐"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "白磷与红磷的性质对比",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "白磷的保存(保存在水中)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "磷酸的性质(三元中强酸)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "白磷分子结构(P₄正四面体)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [
    {
      "name": "白磷与红磷的燃烧对比",
      "objective": "比较白磷和红磷的着火点",
      "materials": [
        "白磷",
        "红磷",
        "铁片",
        "酒精灯"
      ],
      "procedure": [
        "在铁片两端分别放少量白磷和红磷",
        "加热铁片中部",
        "观察哪种先燃烧"
      ],
      "expectedPhenomena": "白磷先燃烧(着火点约40°C)，红磷后燃烧(着火点约240°C)",
      "safetyNotes": [
        "白磷有剧毒且易燃",
        "操作必须由教师进行",
        "佩戴护目镜和手套",
        "准备好灭火器材"
      ],
      "difficulty": "中等",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"白磷红磷同素异形体，白磷毒低燃红磷高\"",
    "\"白磷保水不保油，红磷安全易存放\"",
    "\"磷酸三元中强酸，可形成三种盐\""
  ],
  "misconceptions": [
    {
      "misconception": "认为白磷应保存在煤油中",
      "correction": "白磷不溶于水且密度比水大，保存在水中即可(隔绝空气)"
    },
    {
      "misconception": "认为白磷和红磷是不同元素",
      "correction": "白磷和红磷是磷的同素异形体，由同种元素组成但结构不同"
    },
    {
      "misconception": "认为白磷分子是P₂",
      "correction": "白磷分子是P₄，四个P原子构成正四面体结构"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解白磷和红磷是同素异形体，白磷着火点低",
    "senior": "高中：掌握白磷与红磷的性质差异、磷酸的性质、磷肥",
    "university": "大学：磷的配位化学，磷有机化学，磷的生化(ATP、DNA)",
    "competition": "竞赛：P₄的分子对称性，磷叶立德(Wittig试剂)，多磷酸"
  }
};

P6_EDUCATION['S'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第五章 化工生产中的重要非金属元素",
      "section": "第三节 硫及其化合物",
      "knowledgePoints": [
        "硫单质",
        "二氧化硫",
        "硫酸",
        "硫酸盐"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第四节 硫及其化合物",
      "knowledgePoints": [
        "硫的性质",
        "SO₂",
        "浓硫酸"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "SO₂的漂白性与可逆性",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "浓硫酸的强氧化性(与Cu反应)",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "SO₂与CO₂的鉴别",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "硫酸的工业制法(接触法)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "SO₂的环保问题(酸雨)",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "SO₂的漂白性实验",
      "objective": "验证SO₂的漂白性及其可逆性",
      "materials": [
        "SO₂气体",
        "品红溶液",
        "试管",
        "酒精灯"
      ],
      "procedure": [
        "将SO₂通入品红溶液",
        "观察溶液颜色变化",
        "加热褪色后的溶液",
        "观察颜色变化"
      ],
      "expectedPhenomena": "品红溶液褪色(漂白)；加热后又变红(漂白可逆)",
      "safetyNotes": [
        "SO₂有毒有刺激性需在通风橱中操作",
        "加热时注意防止暴沸"
      ],
      "difficulty": "中等",
      "duration": "10分钟"
    },
    {
      "name": "浓硫酸与铜反应",
      "objective": "验证浓硫酸的强氧化性",
      "materials": [
        "浓硫酸",
        "铜片",
        "试管",
        "导管",
        "品红溶液",
        "NaOH溶液"
      ],
      "procedure": [
        "在试管中加入铜片和浓硫酸",
        "加热",
        "将产生的气体通入品红溶液",
        "尾气用NaOH吸收"
      ],
      "expectedPhenomena": "铜片溶解溶液变蓝(CuSO₄)产生有刺激性气味气体(SO₂)使品红褪色",
      "safetyNotes": [
        "浓硫酸有强腐蚀性",
        "加热时小心暴沸",
        "SO₂有毒需尾气处理",
        "在通风橱中操作"
      ],
      "difficulty": "中等",
      "duration": "15分钟"
    }
  ],
  "mnemonics": [
    "\"SO₂漂白可逆，品红先褪加热复\"",
    "\"浓硫酸三大特性：吸水、脱水、强氧化\"",
    "\"稀硫酸出H₂，浓硫酸出SO₂(与金属反应)\"",
    "\"硫的化合价：-2、0、+4、+6，氧化还原全参与\""
  ],
  "misconceptions": [
    {
      "misconception": "认为SO₂漂白原理与Cl₂相同",
      "correction": "SO₂漂白是与有色物质化合生成无色化合物(可逆)；Cl₂漂白是氧化破坏色素(不可逆)"
    },
    {
      "misconception": "认为稀硫酸也能与铜反应",
      "correction": "稀硫酸不能与铜反应(铜排在H后)；浓硫酸因强氧化性可与铜反应"
    },
    {
      "misconception": "认为SO₂和CO₂都能使品红褪色",
      "correction": "只有SO₂能使品红褪色，CO₂不能，这是鉴别SO₂和CO₂的方法之一"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解硫的单质性质，知道硫酸是强酸",
    "senior": "高中：掌握SO₂的性质(漂白、还原性)、浓硫酸的特性、硫酸工业制法",
    "university": "大学：硫的含氧酸系统化学，硫的配位化学，二硫键",
    "competition": "竞赛：硫的杂化轨道，多硫化物，硫的价态互变"
  }
};

P6_EDUCATION['Cl'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第二节 氯及其化合物",
      "knowledgePoints": [
        "氯气的性质",
        "氯气的制法",
        "漂白粉",
        "卤素递变"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第二节 氯及其化合物",
      "knowledgePoints": [
        "氯气性质",
        "氯水成分",
        "漂白粉原理"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "氯气的实验室制法(MnO₂+浓HCl)",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "氯水的成分及漂白原理",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "氯气与金属反应(Cu、Fe)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "漂白粉的制备和漂白原理",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "卤素离子的检验(AgNO₃+HNO₃)",
      "frequency": "高频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "氯气的实验室制取与性质",
      "objective": "掌握氯气的制取方法和性质检验",
      "materials": [
        "MnO₂",
        "浓盐酸",
        "圆底烧瓶",
        "分液漏斗",
        "导管",
        "集气瓶",
        "NaOH溶液"
      ],
      "procedure": [
        "在圆底烧瓶中加入MnO₂",
        "通过分液漏斗滴加浓盐酸",
        "加热收集氯气(向上排空气法)",
        "尾气用NaOH溶液吸收"
      ],
      "expectedPhenomena": "产生黄绿色气体(氯气)；有刺激性气味",
      "safetyNotes": [
        "必须在通风橱中操作",
        "尾气必须用NaOH吸收",
        "佩戴护目镜和口罩"
      ],
      "difficulty": "中等",
      "duration": "20分钟"
    },
    {
      "name": "氯水的漂白性实验",
      "objective": "验证氯水的漂白原理",
      "materials": [
        "新制氯水",
        "干燥氯气",
        "湿润红纸条",
        "干燥红纸条",
        "集气瓶"
      ],
      "procedure": [
        "将干燥红纸条放入干燥Cl₂中",
        "将湿润红纸条放入干燥Cl₂中",
        "对比两者是否褪色"
      ],
      "expectedPhenomena": "干燥红纸条不褪色；湿润红纸条褪色(说明起漂白作用的是HClO而非Cl₂)",
      "safetyNotes": [
        "氯气有毒在通风橱中操作",
        "实验后妥善处理"
      ],
      "difficulty": "中等",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"氯气黄绿有毒，溶于水生氯水\"",
    "\"氯水三分：Cl₂、HClO、H⁺/Cl⁻\"",
    "\"漂白粉：Cl₂+2Ca(OH)₂→Ca(ClO)₂+CaCl₂+2H₂O\"",
    "\"卤素检验：AgNO₃加稀硝酸，白色AgCl、淡黄AgBr、黄色AgI\""
  ],
  "misconceptions": [
    {
      "misconception": "认为氯气本身有漂白性",
      "correction": "氯气没有漂白性，真正起漂白作用的是氯气与水反应生成的HClO(强氧化性)"
    },
    {
      "misconception": "认为铁在氯气中燃烧生成FeCl₂",
      "correction": "氯气氧化性强，铁在氯气中燃烧生成FeCl₃(不是FeCl₂)"
    },
    {
      "misconception": "认为可以用排水法收集氯气",
      "correction": "氯气能溶于水(且与水反应)，不能用排水法收集，应用向上排空气法"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解氯气是有毒气体，溶于水生成盐酸和次氯酸",
    "senior": "高中：掌握氯气的制法、性质、氯水成分、漂白粉原理、卤素递变",
    "university": "大学：氯的有机化学，氯化反应机理，氯的配位化学",
    "competition": "竞赛：氯的含氧酸系列，氯的电极电势图，卤素互化物"
  }
};

P6_EDUCATION['Ar'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第四章 物质结构 元素周期律",
      "section": "第一节 原子结构与元素周期表",
      "knowledgePoints": [
        "稀有气体",
        "周期表位置",
        "电子构型"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第一节 元素与物质的分类",
      "knowledgePoints": [
        "元素分类",
        "稀有气体应用"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "氩气作为保护气(焊接、灯泡)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "稀有气体的化学惰性",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "氩的电子构型(3s²3p⁶)",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"氩气作保护，焊接充灯泡\"",
    "\"稀有气体最外层满，化学性质极稳定\"",
    "\"零族不参与反应，周期表里最安静\""
  ],
  "misconceptions": [
    {
      "misconception": "认为氩气比空气轻",
      "correction": "氩气密度比空气大(约1.78 g/L vs 空气1.29 g/L)，所以可用作保护气下沉覆盖"
    },
    {
      "misconception": "认为灯泡中充氮气更好",
      "correction": "灯泡中充氩气更好，因为Ar完全惰性且导热性低，能延长灯丝寿命"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解氩气是稀有气体，常用作保护气",
    "senior": "高中：掌握稀有气体的电子构型与惰性的关系，了解其应用",
    "university": "大学：氩离子激光器，氩气保护焊原理，Ar的配位化合物",
    "competition": "竞赛：稀有气体的电离能与激发态，ArF准分子激光器"
  }
};

P6_EDUCATION['K'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第一节 钠及其化合物(扩展:碱金属)",
      "knowledgePoints": [
        "碱金属递变",
        "钾的性质",
        "焰色试验"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第二节 研究物质性质的方法和程序",
      "knowledgePoints": [
        "碱金属递变规律",
        "焰色试验"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钾与水反应(比钠更剧烈)",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "焰色试验(钾的紫色，透过蓝色钴玻璃)",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "钾肥的作用",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "碱金属性质递变规律",
      "frequency": "高频",
      "difficulty": "中等"
    }
  ],
  "experiments": [
    {
      "name": "钾与水反应(对比钠)",
      "objective": "观察钾与水反应，比较与钠的活泼性差异",
      "materials": [
        "金属钾",
        "烧杯",
        "水",
        "酚酞",
        "镊子",
        "滤纸",
        "蓝色钴玻璃"
      ],
      "procedure": [
        "在烧杯中加水加酚酞",
        "取绿豆大小钾粒吸干煤油",
        "将钾投入水中",
        "通过蓝色钴玻璃观察火焰颜色"
      ],
      "expectedPhenomena": "钾浮在水面剧烈反应，燃烧产生紫色火焰(透过蓝色钴玻璃)，溶液变红，比钠更剧烈",
      "safetyNotes": [
        "钾用量必须极少(绿豆大小)",
        "佩戴护目镜",
        "远离易燃物",
        "钾比钠更活泼注意安全"
      ],
      "difficulty": "中等",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"钠黄钾紫锂红，焰色试验辨金属\"",
    "\"观察钾的紫色需透过蓝色钴玻璃(滤去钠的黄光)\"",
    "\"钾比钠更活泼，遇水燃烧更剧烈\""
  ],
  "misconceptions": [
    {
      "misconception": "认为观察钾的焰色不需要蓝色钴玻璃",
      "correction": "钾中常含微量钠杂质，钠的黄色火焰会遮盖钾的紫色，需透过蓝色钴玻璃滤去黄光"
    },
    {
      "misconception": "认为钾与钠的活泼性相同",
      "correction": "钾比钠更活泼(原子半径更大电子更容易失去)，与水反应更剧烈甚至爆炸"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解钾是活泼金属，能与水反应",
    "senior": "高中：掌握碱金属递变规律、焰色试验操作，了解钾肥",
    "university": "大学：钾的生物化学(Na/K泵)，钾的配位化学",
    "competition": "竞赛：焰色试验的原子光谱原理，碱金属系统化学"
  }
};

P6_EDUCATION['Ca'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第四章 物质结构 元素周期律",
      "section": "第二节 元素周期律(扩展:碱土金属)",
      "knowledgePoints": [
        "碱土金属递变",
        "钙的性质"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第二节 研究物质性质的方法和程序(扩展)",
      "knowledgePoints": [
        "钙的性质",
        "Ca(OH)₂"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "CaCO₃与Ca(HCO₃)₂的转化(喀斯特地貌)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "钙的焰色(砖红色)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "硬水软化原理",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "Ca(OH)₂的性质(石灰水)",
      "frequency": "高频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "石灰水的性质实验",
      "objective": "验证Ca(OH)₂的性质和CO₂检验方法",
      "materials": [
        "澄清石灰水",
        "CO₂发生装置",
        "试管"
      ],
      "procedure": [
        "将CO₂通入澄清石灰水",
        "观察现象",
        "继续通入CO₂",
        "观察变化",
        "加热溶液"
      ],
      "expectedPhenomena": "先变浑浊(CaCO₃↓)→继续通CO₂变澄清(Ca(HCO₃)₂)→加热又变浑浊(分解出CaCO₃)",
      "safetyNotes": [
        "CO₂无毒但注意通风",
        "加热防止暴沸"
      ],
      "difficulty": "基础",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"石灰石高温分解：CaCO₃→CaO+CO₂\"",
    "\"CO₂通入石灰水：先浑后清再加热又浑\"",
    "\"钙的焰色砖红色，钾紫钠黄各不同\""
  ],
  "misconceptions": [
    {
      "misconception": "认为CaCO₃能溶于水",
      "correction": "CaCO₃难溶于水，但能溶于含CO₂的水(生成可溶的Ca(HCO₃)₂)，这是喀斯特地貌形成的原因"
    },
    {
      "misconception": "认为澄清石灰水通入过量CO₂会一直浑浊",
      "correction": "先浑浊(生成CaCO₃)继续通CO₂变澄清(生成Ca(HCO₃)₂)"
    },
    {
      "misconception": "认为Ca(HCO₃)₂受热不分解",
      "correction": "Ca(HCO₃)₂受热易分解：Ca(HCO₃)₂→CaCO₃+H₂O+CO₂(水垢形成原理)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解钙的常见化合物(CaCO₃、CaO、Ca(OH)₂)及转化",
    "senior": "高中：掌握CaCO₃与Ca(HCO₃)₂的转化、硬水软化、焰色试验",
    "university": "大学：钙的生物化学(骨骼牙齿)，钙的配位化学，钙信号",
    "competition": "竞赛：钙的晶体结构，生物矿化机制，钙调蛋白"
  }
};

P6_EDUCATION['Sc'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "d区元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钪作为过渡金属的特征",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "钪铝合金的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钪是第一个过渡金属，d区开头元素\"",
    "\"钪钇镧系稀土族，性质相似难分离\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钪是主族元素",
      "correction": "钪是d区过渡金属，电子构型[Ar]3d¹4s²"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钪是过渡金属位于d区",
    "university": "大学：钪的配位化学，钪铝合金材料",
    "competition": "竞赛：钪的电子构型与氧化态，钪的配合物"
  }
};

P6_EDUCATION['Ti'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "钛合金"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "TiO₂的用途(白色颜料、光催化)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "钛合金的性质(轻、强、耐腐蚀)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "钛的冶炼(Kroll法)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钛被称为太空金属，轻而强度高\"",
    "\"TiO₂做白色颜料，还能光催化降解污染物\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钛很活泼",
      "correction": "钛表面形成致密氧化膜(TiO₂)常温下化学性质稳定耐腐蚀"
    },
    {
      "misconception": "认为TiO₂是有色物质",
      "correction": "TiO₂是白色固体是最好的白色颜料(钛白粉)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钛是过渡金属钛合金有优良性能",
    "university": "大学：钛的配位化学钛冶金(Kroll法)TiO₂光催化",
    "competition": "竞赛：Ti的氧化态化学(+2/+3/+4)钛的配合物TiCl₄"
  }
};

P6_EDUCATION['V'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "钒的氧化态",
        "V₂O₅催化"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "V₂O₅在接触法制硫酸中的催化作用",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "钒的多氧化态(+2/+3/+4/+5)颜色",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"V₂O₅催化SO₂→SO₃，接触法制硫酸\"",
    "\"钒有多种氧化态，颜色丰富紫蓝绿黄\""
  ],
  "misconceptions": [
    {
      "misconception": "认为接触法制硫酸的催化剂是Pt",
      "correction": "现代工业用V₂O₅作催化剂(早期曾用Pt但Pt价格高且易中毒)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解V₂O₅是接触法制硫酸的催化剂",
    "university": "大学：钒的配位化学钒的生物化学",
    "competition": "竞赛：钒的氧化态与颜色V₂O₅的催化机理"
  }
};

P6_EDUCATION['Cr'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "铬的氧化态",
        "K₂Cr₂O₇"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "K₂Cr₂O₇的强氧化性",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "Cr³⁺与CrO₄²⁻/Cr₂O₇²⁻的转化(酸碱性影响)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "铬的焰色和颜色",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "铬酸根与重铬酸根的转化",
      "objective": "观察酸碱性对CrO₄²⁻和Cr₂O₇²⁻平衡的影响",
      "materials": [
        "K₂CrO₄溶液",
        "H₂SO₄溶液",
        "NaOH溶液",
        "试管"
      ],
      "procedure": [
        "在K₂CrO₄溶液中加酸",
        "观察颜色变化",
        "再加碱",
        "观察颜色变化"
      ],
      "expectedPhenomena": "加酸：黄色(CrO₄²⁻)→橙色(Cr₂O₇²⁻)；加碱：橙色→黄色",
      "safetyNotes": [
        "铬酸盐有毒且有致癌性",
        "避免接触皮肤",
        "废液集中处理"
      ],
      "difficulty": "中等",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"铬酸根黄，重铬酸根橙，酸变橙碱变黄\"",
    "\"Cr⁶⁺价强氧化，Cr³⁺绿色稳定\"",
    "\"K₂Cr₂O₇氧化酒精，用于酒驾检测(原理)\""
  ],
  "misconceptions": [
    {
      "misconception": "认为CrO₄²⁻和Cr₂O₇²⁻是不同元素的离子",
      "correction": "二者是同一平衡的不同形态：2CrO₄²⁻+2H⁺⇌Cr₂O₇²⁻+H₂O"
    },
    {
      "misconception": "认为Cr⁶⁺对人体无害",
      "correction": "Cr⁶⁺有剧毒且致癌(Cr³⁺毒性较低)，工业废水必须处理达标"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铬的氧化态及K₂Cr₂O₇的氧化性",
    "university": "大学：铬的配位化学镀铬工艺Cr³⁺的配合物",
    "competition": "竞赛：铬的电极电势图Cr³⁺的配合物颜色同多酸"
  }
};

P6_EDUCATION['Mn'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第一节 钠及其化合物(扩展:制氧催化剂)",
      "knowledgePoints": [
        "MnO₂催化制氧",
        "锰的氧化态"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "MnO₂在制氧中的催化作用",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "KMnO₄的强氧化性",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "锰的多氧化态(+2/+4/+6/+7)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [
    {
      "name": "KMnO₄的氧化性实验",
      "objective": "观察KMnO₄与不同还原剂的反应",
      "materials": [
        "KMnO₄溶液",
        "Na₂SO₃溶液",
        "稀H₂SO₄",
        "试管"
      ],
      "procedure": [
        "在酸性KMnO₄溶液中加入Na₂SO₃溶液",
        "观察颜色变化"
      ],
      "expectedPhenomena": "紫色KMnO₄褪色，被还原为无色Mn²⁺(酸性条件下)",
      "safetyNotes": [
        "KMnO₄有强氧化性避免接触皮肤",
        "废液处理"
      ],
      "difficulty": "中等",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"MnO₂催化KClO₃制氧，黑色粉末是催化剂\"",
    "\"KMnO₄紫颜色，强氧化剂褪色快\"",
    "\"锰的氧化态多：+2、+4、+6、+7，颜色各不同\""
  ],
  "misconceptions": [
    {
      "misconception": "认为MnO₂是反应物",
      "correction": "在KClO₃制氧反应中MnO₂是催化剂，反应前后质量和化学性质不变"
    },
    {
      "misconception": "认为KMnO₄在所有条件下还原产物相同",
      "correction": "酸性还原为Mn²⁺(无色)中性还原为MnO₂(棕色沉淀)碱性还原为K₂MnO₄(绿色)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解MnO₂是制氧气的催化剂",
    "senior": "高中：掌握MnO₂催化制氧KMnO₄的氧化性",
    "university": "大学：锰的配位化学锰的生物化学(光合作用)",
    "competition": "竞赛：锰的电极电势图Mn中心配合物多酸化学"
  }
};

P6_EDUCATION['Fe'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第三章 铁金属材料",
      "section": "第一节 铁及其化合物",
      "knowledgePoints": [
        "铁的性质",
        "铁的氧化物",
        "铁的氢氧化物",
        "Fe²⁺与Fe³⁺的转化",
        "铁的检验"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第四节 铁及其化合物(扩展)",
      "knowledgePoints": [
        "铁的性质",
        "铁离子检验",
        "氧化还原"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "Fe²⁺与Fe³⁺的相互转化",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "Fe³⁺的检验(KSCN法)",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "铁与稀硝酸反应(产物分析)",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "铁的氧化物(FeO/Fe₂O₃/Fe₃O₄)对比",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "铁的冶炼(高炉炼铁)",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "Fe²⁺与Fe³⁺的转化与检验",
      "objective": "掌握铁离子的检验方法和转化条件",
      "materials": [
        "FeCl₂溶液",
        "FeCl₃溶液",
        "KSCN溶液",
        "氯水",
        "铁粉",
        "试管"
      ],
      "procedure": [
        "在FeCl₂溶液中加KSCN(无现象)",
        "滴加氯水(变红Fe²⁺→Fe³⁺)",
        "在FeCl₃溶液中加铁粉(红色褪去Fe³⁺→Fe²⁺)",
        "再加KSCN验证"
      ],
      "expectedPhenomena": "Fe²⁺加KSCN无颜色变化；加氯水后变血红色(Fe³⁺+SCN⁻)；加铁粉后红色褪去",
      "safetyNotes": [
        "氯水有刺激性气味和强氧化性",
        "在通风处操作"
      ],
      "difficulty": "中等",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"Fe³⁺遇SCN⁻变血红，是检验铁离子的特征反应\"",
    "\"亚铁不稳定，暴露空气中易被氧化为铁\"",
    "\"铁与强氧化剂(Cl₂、HNO₃)生成Fe³⁺，与弱氧化剂(S、HCl)生成Fe²⁺\"",
    "\"高炉炼铁：Fe₂O₃+3CO→2Fe+3CO₂\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铁与所有酸反应都生成Fe²⁺",
      "correction": "铁与非氧化性酸(HCl稀H₂SO₄)反应生成Fe²⁺；与强氧化性酸(HNO₃浓H₂SO₄)反应生成Fe³⁺"
    },
    {
      "misconception": "认为Fe₃O₄中Fe的化合价为+3",
      "correction": "Fe₃O₄可写作FeO·Fe₂O₃含+2价和+3价铁(1:1)是混合价态氧化物"
    },
    {
      "misconception": "认为KSCN遇Fe²⁺也显色",
      "correction": "KSCN只与Fe³⁺反应显血红色，与Fe²⁺不显色，这是区分Fe²⁺和Fe³⁺的方法"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解铁是常见金属，能与酸反应生成氢气，生铁和钢的区别",
    "senior": "高中：掌握Fe²⁺/Fe³⁺转化、铁离子检验、铁的氧化物、铁的冶炼",
    "university": "大学：铁的配位化学，铁的生物化学(血红蛋白)，铁磁性",
    "competition": "竞赛：铁的配合物(phen、bipy)，铁的电极电势，过渡金属化学"
  }
};

P6_EDUCATION['Co'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "钴的配合物"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钴的配合物(CoCl₂变色硅胶)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "钴在合金中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钴的配合物颜色丰富，CoCl₂干燥蓝色潮湿粉红\"",
    "\"变色硅胶含钴盐，吸水变红烘干变蓝\""
  ],
  "misconceptions": [
    {
      "misconception": "认为变色硅胶变红是因为发生了化学反应",
      "correction": "变色硅胶含CoCl₂，无水时蓝色(CoCl₂)吸水后变粉红色(CoCl₂·6H₂O)，是配位数变化而非化学反应"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钴是过渡金属CoCl₂可作变色硅胶",
    "university": "大学：钴的配位化学维生素B₁₂钴的催化",
    "competition": "竞赛：钴的配合物异构体Co³⁺的配位化学"
  }
};

P6_EDUCATION['Ni'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "镍的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镍在合金中的应用(不锈钢、镍氢电池)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "Ni作为催化剂(加氢反应)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镍是不锈钢组分，抗腐蚀能力强\"",
    "\"镍做催化剂，加氢反应常用到\""
  ],
  "misconceptions": [
    {
      "misconception": "认为不锈钢不含镍",
      "correction": "不锈钢主要含Cr和Ni，Cr提供耐腐蚀性Ni改善韧性和加工性能"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镍是过渡金属用于不锈钢和电池",
    "university": "大学：镍的配位化学镍催化剂镍氢电池",
    "competition": "竞赛：Ni的配合物催化加氢机理"
  }
};

P6_EDUCATION['Cu'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第三章 铁金属材料",
      "section": "第一节 铁及其化合物(扩展:铜)",
      "knowledgePoints": [
        "铜的性质",
        "铜的化合物",
        "电解精炼铜"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第四节 铁及其化合物(扩展:铜)",
      "knowledgePoints": [
        "铜的性质",
        "CuSO₄"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铜与浓硫酸/稀硝酸/浓硝酸反应",
      "frequency": "高频",
      "difficulty": "中等"
    },
    {
      "point": "Cu²⁺的焰色(绿色)和溶液颜色(蓝色)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "铜的电解精炼原理",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "CuSO₄·5H₂O的性质(胆矾)",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "铜与浓硝酸反应",
      "objective": "观察铜与浓硝酸的反应，理解硝酸的强氧化性",
      "materials": [
        "铜片",
        "浓硝酸",
        "试管",
        "导管",
        "NaOH溶液"
      ],
      "procedure": [
        "在试管中放入铜片",
        "加入少量浓硝酸",
        "观察现象",
        "尾气用NaOH吸收"
      ],
      "expectedPhenomena": "铜片溶解溶液变蓝(Cu(NO₃)₂)产生红棕色气体(NO₂)",
      "safetyNotes": [
        "浓硝酸有强腐蚀性",
        "NO₂有毒",
        "在通风橱中操作",
        "尾气处理"
      ],
      "difficulty": "中等",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"铜不与稀盐酸/稀硫酸反应(排在H后)\"",
    "\"铜遇浓硫酸加热生SO₂，遇稀硝酸生NO，遇浓硝酸生NO₂\"",
    "\"CuSO₄溶液蓝色，胆矾晶体蓝色，无水CuSO₄白色(遇水变蓝可检验水)\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铜能与稀盐酸反应生成H₂",
      "correction": "铜在金属活动性顺序中排在H后，不能与非氧化性酸反应放出H₂"
    },
    {
      "misconception": "认为无水CuSO₄是蓝色的",
      "correction": "无水CuSO₄是白色粉末，遇水形成[Cu(H₂O)₄]²⁺后才显蓝色，可用于检验水"
    },
    {
      "misconception": "认为铜与硝酸反应放出H₂",
      "correction": "硝酸是氧化性酸与铜反应不生成H₂，浓硝酸生成NO₂稀硝酸生成NO"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解铜是红色金属，导电性好，不被磁铁吸引",
    "senior": "高中：掌握铜与酸反应规律、CuSO₄性质、铜的电解精炼",
    "university": "大学：铜的配位化学，铜的生物化学(蓝铜蛋白)，铜冶金",
    "competition": "竞赛：Cu²⁺的配合物(氨配合物)，铜的电极电势，过渡金属"
  }
};

P6_EDUCATION['Zn'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第三节 物质的量(扩展:锌制氢)",
      "knowledgePoints": [
        "锌与酸反应制氢",
        "锌的性质"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第一章 认识化学科学",
      "section": "第二节 研究物质性质的方法和程序(扩展)",
      "knowledgePoints": [
        "锌的性质",
        "锌的化合物"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锌与酸反应制取氢气",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "Zn的两性(与强碱反应)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "锌锰干电池的工作原理",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "锌与酸反应制氢气",
      "objective": "掌握实验室制取氢气的原理",
      "materials": [
        "锌粒",
        "稀硫酸",
        "试管",
        "导管",
        "水槽",
        "集气瓶"
      ],
      "procedure": [
        "在试管中加入锌粒",
        "加入稀硫酸",
        "用排水法收集气体",
        "用拇指堵住管口验纯"
      ],
      "expectedPhenomena": "锌粒表面产生大量气泡，生成氢气",
      "safetyNotes": [
        "必须验纯后再点燃",
        "使用稀硫酸而非稀盐酸"
      ],
      "difficulty": "基础",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"锌是两性金属，与酸与强碱都反应生氢气\"",
    "\"实验室制氢气：Zn+H₂SO₄→ZnSO₄+H₂↑\"",
    "\"干电池用锌筒做负极，碳棒做正极\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锌只能与酸反应生成氢气",
      "correction": "锌是两性金属，既能与酸反应也能与强碱反应生成H₂"
    },
    {
      "misconception": "认为锌与稀盐酸反应生成ZnCl₂和H₂O",
      "correction": "锌与稀盐酸反应生成ZnCl₂和H₂(Zn+2HCl→ZnCl₂+H₂↑)不生成水"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解锌能与酸反应生成氢气，用于实验室制氢",
    "senior": "高中：掌握锌的两性、锌在原电池中的应用",
    "university": "大学：锌的配位化学，锌的生物化学(锌指蛋白)",
    "competition": "竞赛：锌的两性热力学分析，锌的配合物"
  }
};

P6_EDUCATION['Ga'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镓的性质",
        "熔点低"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镓的低熔点(29.8°C，手心可融化)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镓在半导体中的应用(GaAs)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镓的熔点低，手心可融化\"",
    "\"砷化镓是半导体，LED和芯片都用它\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镓是液体金属",
      "correction": "镓的熔点为29.8°C，常温下是固体，但在手心温度下可融化成液体"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镓的低熔点特性",
    "university": "大学：镓的半导体化学GaAs材料",
    "competition": "竞赛：镓的对角线关系镓的配合物"
  }
};

P6_EDUCATION['Ge'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锗的性质",
        "半导体"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锗作为半导体材料",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锗在周期表中的位置(金属-非金属过渡)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"硅锗是半导体，电子工业两兄弟\"",
    "\"锗是早期半导体材料，后多被硅取代\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锗是金属",
      "correction": "锗是类金属(半金属)，具有半导体的性质，位于金属和非金属的边界"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锗是半导体材料",
    "university": "大学：锗的半导体物理锗的有机化学",
    "competition": "竞赛：锗的能带结构锗的配合物"
  }
};

P6_EDUCATION['As'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "砷的性质",
        "砷的毒性"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "砷的毒性及环境污染",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "砷化镓(GaAs)半导体",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"砷有毒，砒霜As₂O₃\"",
    "\"砷在周期表介于金属与非金属之间\""
  ],
  "misconceptions": [
    {
      "misconception": "认为砷是金属",
      "correction": "砷是类金属，化学性质介于金属和非金属之间"
    },
    {
      "misconception": "认为砒霜是单质砷",
      "correction": "砒霜是三氧化二砷(As₂O₃)不是单质砷"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解砷有毒砒霜的主要成分是As₂O₃",
    "university": "大学：砷的配位化学砷的有机化学",
    "competition": "竞赛：砷的氧化态化学砷的配合物"
  }
};

P6_EDUCATION['Se'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "硒的性质",
        "硒的生物作用"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "硒的半导体性质(光导性)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "硒的生物化学(必需微量元素)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"硒是人体必需微量元素，缺乏导致克山病\"",
    "\"硒有光电效应，用于复印机和太阳能电池\""
  ],
  "misconceptions": [
    {
      "misconception": "认为硒对人体完全有害",
      "correction": "硒是人体必需微量元素(适量有益)，但过量有毒(硒中毒)"
    },
    {
      "misconception": "认为硒是非金属完全没有金属性",
      "correction": "硒是类金属，既有非金属性也有一定的金属性"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解硒是类金属是人体必需微量元素",
    "university": "大学：硒的配位化学硒的生物化学(谷胱甘肽过氧化物酶)",
    "competition": "竞赛：硒的同素异形体硒的半导体物理"
  }
};

P6_EDUCATION['Br'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第二节 氯及其化合物(扩展:卤素)",
      "knowledgePoints": [
        "卤素递变",
        "溴的性质",
        "溴水"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第二节 氯及其化合物(扩展:卤族元素)",
      "knowledgePoints": [
        "卤素性质递变",
        "溴水"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "卤素单质氧化性递变(F>Cl>Br>I)",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "溴水的颜色及褪色反应",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "溴的萃取(用CCl₄或汽油)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "Br⁻的检验(AgNO₃+HNO₃，淡黄色沉淀)",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "卤素单质间的置换反应",
      "objective": "验证卤素氧化性强弱顺序",
      "materials": [
        "溴水",
        "碘化钾溶液",
        "氯水",
        "四氯化碳",
        "试管"
      ],
      "procedure": [
        "在KI溶液中加入溴水",
        "观察颜色变化并用CCl₄萃取",
        "在NaBr溶液中加入氯水",
        "用CCl₄萃取观察颜色"
      ],
      "expectedPhenomena": "加溴水后溶液变黄棕(析出I₂)CCl₄层显紫色；加氯水后析出Br₂ CCl₄层显橙红色",
      "safetyNotes": [
        "溴水有腐蚀性避免接触皮肤",
        "CCl₄有毒注意通风"
      ],
      "difficulty": "中等",
      "duration": "10分钟"
    }
  ],
  "mnemonics": [
    "\"卤素颜色渐深：Cl₂黄绿、Br₂红棕、I₂紫黑\"",
    "\"卤素氧化性：F>Cl>Br>I，可置换\"",
    "\"溴是唯一常温液态非金属\"",
    "\"萃取用CCl₄，溴在有机层显橙红\""
  ],
  "misconceptions": [
    {
      "misconception": "认为溴可以保存在橡胶塞瓶中",
      "correction": "溴能腐蚀橡胶，应保存在玻璃塞(磨口)瓶中，不能用橡胶塞"
    },
    {
      "misconception": "认为溴水褪色一定是发生了氧化还原反应",
      "correction": "溴水褪色原因多样：可能是氧化还原(如与SO₂反应)、加成(如与烯烃反应)、萃取(物理过程)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：掌握卤素递变规律、溴水褪色原理、萃取操作",
    "university": "大学：溴的有机化学，溴化反应机理",
    "competition": "竞赛：卤素电极电势图，卤素互化物"
  }
};

P6_EDUCATION['Kr'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第四章 物质结构 元素周期律",
      "section": "第一节 原子结构与元素周期表",
      "knowledgePoints": [
        "稀有气体",
        "电子构型"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "稀有气体化合物的可能性(XeF₂等)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "氪在光源中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"氪可用于特种光源，如矿灯和机场跑道灯\"",
    "\"稀有气体也能形成化合物(如KrF₂)\""
  ],
  "misconceptions": [
    {
      "misconception": "认为稀有气体绝对不能形成化合物",
      "correction": "虽然稀有气体极不活泼，但Kr和Xe在特殊条件下可形成化合物(如KrF₂、XeF₂、XeF₄、XeF₆)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解氪是稀有气体",
    "university": "大学：氪的氟化物氪灯原理",
    "competition": "竞赛：稀有气体化合物结构KrF₂的氧化性"
  }
};

P6_EDUCATION['Rb'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第一节 钠及其化合物(扩展:碱金属)",
      "knowledgePoints": [
        "碱金属递变",
        "铷的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "碱金属递变规律(Li→Cs活泼性递增)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "铷的光电效应",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铷比钾更活泼，遇水爆炸\"",
    "\"铷有光电效应，用于光电管\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铷和钾的性质差异不大",
      "correction": "铷比钾更活泼得多，与水反应剧烈爆炸，必须小心处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铷是碱金属活泼性比钾更强",
    "university": "大学：铷的光谱学铷原子钟",
    "competition": "竞赛：碱金属系统化学铷的原子物理"
  }
};

P6_EDUCATION['Sr'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "碱土金属递变",
        "锶的焰色"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锶的焰色(洋红色)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "碱土金属性质递变",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锶的焰色洋红色，用于烟花\"",
    "\"钙砖红、锶洋红、钡黄绿\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锶的焰色与钙相同",
      "correction": "钙焰色为砖红色，锶焰色为洋红色(深红色)，颜色不同"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锶的焰色用于烟花",
    "university": "大学：锶的配位化学锶铁氧体",
    "competition": "竞赛：碱土金属系统化学焰色光谱分析"
  }
};

P6_EDUCATION['Y'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钇属于稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "钇钡铜氧高温超导体",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钇属稀土，YBCO高温超导\"",
    "\"钪钇镧系，稀土三兄弟\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钇是镧系元素",
      "correction": "钇不是镧系元素，但性质与镧系相似，常归类为稀土元素"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钇是稀土元素",
    "university": "大学：钇的配位化学YBCO超导体",
    "competition": "竞赛：稀土元素分离化学钇的配合物"
  }
};

P6_EDUCATION['Zr'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "锆的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锆的耐腐蚀性(核反应堆包壳材料)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "二氧化锆(ZrO₂)的性质",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锆耐腐蚀，核反应堆包壳用\"",
    "\"二氧化锆硬度高，可做人造宝石\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锆是稀有元素",
      "correction": "锆在地壳中含量不低(约0.016%)比铜还多，但提取困难"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锆是过渡金属耐腐蚀",
    "university": "大学：锆的配位化学核工业材料",
    "competition": "竞赛：锆铪分离锆的配合物"
  }
};

P6_EDUCATION['Nb'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铌的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铌在超导合金中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "铌铁合金的性质",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铌钽共生，性质相似难分离\"",
    "\"铌锡合金超导好，低温电阻零\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铌是主族元素",
      "correction": "铌是d区过渡金属，电子构型[Kr]4d⁴5s¹"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铌是过渡金属",
    "university": "大学：铌的超导化学铌的合金",
    "competition": "竞赛：铌钽化学铌的配合物"
  }
};

P6_EDUCATION['Mo'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "钼的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钼的生物化学(固氮酶成分)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "钼合金的耐高温性",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钼是固氮酶成分，生物固氮离不开\"",
    "\"钼合金耐高温，用于航空航天\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钼对人体完全有害",
      "correction": "钼是人体必需微量元素，是固氮酶和多种酶的成分"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钼是过渡金属",
    "university": "大学：钼的生物化学(固氮酶)钼的配位化学",
    "competition": "竞赛：钼的多酸化学MoS₂结构"
  }
};

P6_EDUCATION['Tc'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "人造元素",
        "放射性"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锝是第一个人造元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "Tc-99m在医学显像中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锝是人造元素，医学显像Tc-99m\"",
    "\"锝是第一个全人工合成的元素\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锝在自然界中存在",
      "correction": "锝是第一个人造元素(1937年合成)，地球上几乎没有天然锝"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锝是人造放射性元素",
    "university": "大学：锝的核医学(Tc-99m显像)",
    "competition": "竞赛：锝的配位化学锝的核化学"
  }
};

P6_EDUCATION['Ru'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铂族金属"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钌在催化中的应用(Grubbs催化剂)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钌是铂族金属，催化烯烃复分解\"",
    "\"钌电阻温度系数稳定，用于标准电阻\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钌是贵金属就不活泼",
      "correction": "钌虽然属于铂族贵金属，但在某些条件下具有催化活性"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：钌的催化化学(Grubbs催化剂)",
    "competition": "竞赛：钌的配位化学烯烃复分解反应"
  }
};

P6_EDUCATION['Rh'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铂族金属"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铑在汽车尾气催化转化器中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铑催化尾气净化，CO和NOx变无害\"",
    "\"铑是铂族贵金属，价格极高\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铑只是装饰材料",
      "correction": "铑最重要的工业用途是汽车尾气催化转化器中的催化剂"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：铑的催化化学铑的配合物",
    "competition": "竞赛：铑的均相催化Wilkinson催化剂"
  }
};

P6_EDUCATION['Pd'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铂族金属",
        "储氢材料"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钯的吸氢能力(储氢材料)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "钯催化(有机合成中的偶联反应)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钯能吸氢八百倍，储氢材料数第一\"",
    "\"钯催化偶联反应，有机合成很重要\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钯只能做装饰品",
      "correction": "钯最重要的用途是催化(汽车尾气、有机合成)和储氢，不只是首饰"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：钯的催化化学(Suzuki偶联Heck反应)钯的储氢",
    "competition": "竞赛：钯的配合物偶联反应机理"
  }
};

P6_EDUCATION['Ag'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第二节 氯及其化合物(扩展:银盐检验)",
      "knowledgePoints": [
        "银盐检验",
        "卤化银"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第二节 氯及其化合物(扩展:银盐)",
      "knowledgePoints": [
        "AgNO₃检验卤素",
        "银的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "AgNO₃检验卤素离子(白/淡黄/黄沉淀)",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "银的化学性质(与硫反应变黑)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "卤化银的感光性",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "卤素离子的检验",
      "objective": "用AgNO₃溶液检验Cl⁻、Br⁻、I⁻",
      "materials": [
        "AgNO₃溶液",
        "稀HNO₃",
        "NaCl溶液",
        "NaBr溶液",
        "KI溶液",
        "试管"
      ],
      "procedure": [
        "在三支试管中分别加入NaCl、NaBr、KI溶液",
        "先加稀HNO₃酸化",
        "再滴加AgNO₃溶液",
        "观察沉淀颜色"
      ],
      "expectedPhenomena": "Cl⁻→白色沉淀(AgCl)；Br⁻→淡黄色沉淀(AgBr)；I⁻→黄色沉淀(AgI)",
      "safetyNotes": [
        "AgNO₃有腐蚀性",
        "避光保存"
      ],
      "difficulty": "基础",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"银盐检验：白色AgCl、淡黄AgBr、黄色AgI\"",
    "\"银遇硫变黑，形成Ag₂S\"",
    "\"AgBr用于胶卷，AgI用于人工降雨\"",
    "\"银是导电导热最好的金属\""
  ],
  "misconceptions": [
    {
      "misconception": "认为银不与任何酸反应",
      "correction": "银不能与稀盐酸/稀硫酸反应(排在H后)，但能溶于硝酸(氧化性酸)和浓硫酸"
    },
    {
      "misconception": "认为银器变黑是氧化银",
      "correction": "银器变黑主要是与空气中的含硫化合物(如H₂S)反应生成Ag₂S，不是Ag₂O"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解银是贵金属，导电性最好",
    "senior": "高中：掌握AgNO₃检验卤素离子、卤化银的感光性",
    "university": "大学：银的配位化学，银纳米粒子，银的生物化学",
    "competition": "竞赛：银的配合物[Ag(NH₃)₂]⁺，银镜反应，难溶盐Ksp"
  }
};

P6_EDUCATION['Cd'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "镉的毒性"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镉的毒性(痛痛病)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镍镉电池的工作原理",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镉有毒，污染水源致痛痛病\"",
    "\"镍镉电池可充电，但镉污染需注意\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镉中毒只影响肺部",
      "correction": "镉中毒主要影响肾脏和骨骼(痛痛病/骨痛病)，导致骨质疏松和骨折"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镉是过渡金属有毒",
    "university": "大学：镉的配位化学镉的毒理学",
    "competition": "竞赛：镉的配合物镉的电极电势"
  }
};

P6_EDUCATION['In'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "后过渡金属",
        "铟的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铟锡氧化物(ITO)导电玻璃",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铟锡氧化物做导电玻璃，触摸屏离不了\"",
    "\"铟柔软可弯曲，类似铅\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铟是稀有元素无应用",
      "correction": "铟广泛应用于ITO导电玻璃(触摸屏、液晶屏)和半导体"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：铟的半导体化学ITO材料",
    "competition": "竞赛：铟的配位化学"
  }
};

P6_EDUCATION['Sn'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "后过渡金属",
        "锡的性质",
        "锡疫"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第四节 铁及其化合物(扩展:合金)",
      "knowledgePoints": [
        "锡的性质",
        "青铜",
        "焊锡"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锡的同素异形体(白锡/灰锡，锡疫)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "锡铅合金(焊锡)的性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "Sn²⁺的还原性",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锡有同素异形体：白锡常态、灰锡低温(锡疫)\"",
    "\"青铜是铜锡合金，人类最早使用的合金\"",
    "\"锡的化合价：+2和+4，+2有还原性\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锡在任何温度下都稳定",
      "correction": "锡在低温(<13°C)下会转变为灰锡(粉末状)，称为\"锡疫\""
    },
    {
      "misconception": "认为锡和铅是同一种金属",
      "correction": "锡和铅是不同的金属元素，但性质相近，常用于合金(焊锡)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解锡是金属，青铜是铜锡合金",
    "senior": "高中：了解锡的同素异形体和合金性质",
    "university": "大学：锡的有机化学(有机锡)，锡的配位化学",
    "competition": "竞赛：锡的同素异形体转变Sn²⁺/Sn⁴⁺电极电势"
  }
};

P6_EDUCATION['Sb'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "类金属",
        "锑的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锑在合金中的应用(铅锑合金)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "三氧化二锑(Sb₂O₃)的阻燃性",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锑是类金属，冷胀热缩\"",
    "\"锑用于阻燃剂和铅蓄电池\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锑是金属",
      "correction": "锑是类金属，导电性差，性脆，位于金属和非金属的边界"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锑是类金属",
    "university": "大学：锑的配位化学锑的有机化学",
    "competition": "竞赛：锑的氧化态化学"
  }
};

P6_EDUCATION['Te'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "类金属",
        "碲的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "碲在太阳能电池(CdTe)中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"碲是类金属，太阳能电池用CdTe\"",
    "\"硫硒碲，氧族非金属性递减\""
  ],
  "misconceptions": [
    {
      "misconception": "认为碲是非金属",
      "correction": "碲是类金属，性质介于金属和非金属之间"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：碲的半导体化学碲化镉太阳能电池",
    "competition": "竞赛：氧族元素系统化学"
  }
};

P6_EDUCATION['I'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第二节 氯及其化合物(扩展:卤素)",
      "knowledgePoints": [
        "卤素递变",
        "碘的性质",
        "碘的升华"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高一必修第一册",
      "chapter": "第三章 自然界中的元素",
      "section": "第二节 氯及其化合物(扩展:卤族元素)",
      "knowledgePoints": [
        "碘的性质",
        "碘与淀粉的反应"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "碘的升华现象",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "碘遇淀粉变蓝(检验碘)",
      "frequency": "高频",
      "difficulty": "基础"
    },
    {
      "point": "I⁻的还原性(被Cl₂/Br₂置换)",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "碘缺乏症与加碘盐",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [
    {
      "name": "碘的升华与凝华",
      "objective": "观察碘的升华现象",
      "materials": [
        "碘晶体",
        "烧杯",
        "表面皿",
        "酒精灯",
        "铁架台"
      ],
      "procedure": [
        "在烧杯中放少量碘晶体",
        "烧杯口盖表面皿(加冷水)",
        "微热烧杯底部",
        "观察现象"
      ],
      "expectedPhenomena": "碘晶体受热直接变成紫色蒸气(升华)，蒸气遇冷在表面皿底部凝华成晶体",
      "safetyNotes": [
        "碘蒸气有毒注意通风",
        "避免直接吸入"
      ],
      "difficulty": "基础",
      "duration": "5分钟"
    }
  ],
  "mnemonics": [
    "\"碘遇淀粉变蓝色，检验碘的特征反应\"",
    "\"碘能升华不熔化，紫色蒸气好认它\"",
    "\"卤素氧化性：Cl₂>Br₂>I₂，可置换\"",
    "\"加碘盐含KIO₃，防止碘缺乏症\""
  ],
  "misconceptions": [
    {
      "misconception": "认为碘遇淀粉变蓝是化学反应",
      "correction": "碘与淀粉形成包合物而显蓝色，属于物理过程(超分子化学)，不是化学反应"
    },
    {
      "misconception": "认为加碘盐中加的是单质碘",
      "correction": "加碘盐中加的是碘酸钾(KIO₃)，不是单质碘(I₂)，因KIO₃更稳定"
    },
    {
      "misconception": "认为碘不能与金属反应",
      "correction": "碘能与活泼金属反应生成碘化物，如2Na+I₂→2NaI"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解碘是紫黑色固体，能升华，遇淀粉变蓝",
    "senior": "高中：掌握卤素递变、碘的升华、I⁻的还原性",
    "university": "大学：碘的配位化学，碘的生物化学(甲状腺素)",
    "competition": "竞赛：卤素电极电势图，碘量法分析化学"
  }
};

P6_EDUCATION['Xe'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第四章 物质结构 元素周期律",
      "section": "第一节 原子结构与元素周期表",
      "knowledgePoints": [
        "稀有气体",
        "氙的化合物"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构",
      "section": "第二节 元素周期表与元素周期律",
      "knowledgePoints": [
        "稀有气体化合物",
        "XeF₂"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "稀有气体化合物的发现(XeF₂、XeF₄、XeF₆)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "氙灯的高亮度特性",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "Xe的电子构型与成键",
      "frequency": "低频",
      "difficulty": "困难"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"氙可形成化合物：XeF₂、XeF₄、XeF₆\"",
    "\"稀有气体不惰性，氙氟化合物打破旧观念\"",
    "\"氙灯亮度高，用于探照灯和汽车大灯\""
  ],
  "misconceptions": [
    {
      "misconception": "认为稀有气体绝对不反应",
      "correction": "Xe在高温高压下能与F₂反应生成XeF₂、XeF₄、XeF₆等化合物，这打破了\"稀有气体不反应\"的旧观念"
    },
    {
      "misconception": "认为氙在空气中含量很高",
      "correction": "氙在空气中含量极低(约0.000009%)，是最稀有的稳定稀有气体"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解氙是稀有气体，能形成化合物",
    "university": "大学：氙的化合物化学，氙的配合物",
    "competition": "竞赛：稀有气体化合物的结构(VSEPR理论)，氙的氧化态"
  }
};

P6_EDUCATION['Cs'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高一必修第一册",
      "chapter": "第二章 海水中的重要元素——钠和氯",
      "section": "第一节 钠及其化合物(扩展:碱金属)",
      "knowledgePoints": [
        "碱金属递变",
        "铯的性质",
        "原子钟"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铯是最活泼的金属(稳定碱金属中)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "铯原子钟(时间标准)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "碱金属光电效应",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铯是最活泼金属，遇水剧烈爆炸\"",
    "\"铯原子钟最精确，定义一秒的基准\"",
    "\"碱金属递变：锂钠钾铷铯，活泼性依次增\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铯是最活泼的金属元素",
      "correction": "铯是自然界最活泼的金属，但钫(Fr)理论上更活泼(因钫有放射性实际很少研究)"
    },
    {
      "misconception": "认为铯原子钟利用的是化学反应",
      "correction": "铯原子钟利用的是铯-133原子的电磁辐射频率(跃迁频率)，不是化学反应"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铯是最活泼的碱金属，用于原子钟",
    "university": "大学：铯的光谱学，原子钟原理",
    "competition": "竞赛：碱金属系统化学，铯的电极电势"
  }
};

P6_EDUCATION['Ba'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "碱土金属",
        "钡的焰色",
        "BaSO₄"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "BaSO₄的医学应用(钡餐透视)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "钡的焰色(黄绿色)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "Ba²⁺的毒性(可溶性钡盐有毒)",
      "frequency": "中频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钡餐用BaSO₄，不溶所以无毒\"",
    "\"可溶性钡盐有毒，BaCO₃/BaCl₂切忌食入\"",
    "\"钡的焰色黄绿色，钙砖红锶洋红\""
  ],
  "misconceptions": [
    {
      "misconception": "认为所有钡盐都有毒",
      "correction": "不溶性BaSO₄无毒(不被吸收)可用于\"钡餐\"医学透视；但可溶性钡盐(BaCl₂、BaCO₃)有剧毒"
    },
    {
      "misconception": "认为BaCO₃无毒因为不溶于水",
      "correction": "BaCO₃虽不溶于水但溶于胃酸(HCl)生成可溶性BaCl₂，所以有毒"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解BaSO₄用于钡餐，可溶性钡盐有毒",
    "university": "大学：钡的配位化学，钡的临床应用",
    "competition": "竞赛：碱土金属系统化学，难溶盐Ksp"
  }
};

P6_EDUCATION['La'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "稀土元素",
        "f区元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镧系元素在周期表中的位置(f区)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "稀土元素的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镧系十五种元素，57到71排成行\"",
    "\"镧系收缩影响大，后续元素半径小\"",
    "\"稀土不是土，是镧系加钪钇\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镧系元素是主族元素",
      "correction": "镧系元素属于f区，电子填充在4f轨道，不是主族元素"
    },
    {
      "misconception": "认为稀土元素很稀少",
      "correction": "稀土元素在地壳中总含量不低(比铜还多)，但分布分散、提取困难"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镧系元素位于f区，属于稀土",
    "university": "大学：镧系化学，镧系收缩，稀土分离",
    "competition": "竞赛：镧系收缩理论，f轨道电子排布"
  }
};

P6_EDUCATION['Ce'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "铈的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铈的+3和+4氧化态",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "铈在抛光粉中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铈有两氧化态+3和+4，+4是强氧化剂\"",
    "\"铈抛光粉用于玻璃抛光\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镧系元素只有+3价",
      "correction": "大多数镧系元素主要呈+3价，但Ce可呈+4价(Ce⁴⁺是强氧化剂)，Eu和Yb可呈+2价"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铈是镧系元素",
    "university": "大学：铈的氧化还原化学Ce⁴⁺分析化学",
    "competition": "竞赛：镧系异常氧化态铈的配合物"
  }
};

P6_EDUCATION['Pr'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镨是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系收缩现象",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镨属镧系稀土，f区元素\"",
    "\"镧系收缩：原子半径逐渐减小\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镨是主族元素",
      "correction": "镨是镧系元素，电子填充在4f轨道"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镨是镧系稀土元素",
    "university": "大学：镨的配位化学稀土应用",
    "competition": "竞赛：镧系收缩理论镨的光谱"
  }
};

P6_EDUCATION['Nd'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钕是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系收缩现象",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "钕铁硼永磁体(NdFeB)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钕属镧系稀土，f区元素\"",
    "\"镧系收缩：原子半径逐渐减小\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钕是主族元素",
      "correction": "钕是镧系元素，电子填充在4f轨道"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钕是镧系稀土元素",
    "university": "大学：钕的配位化学稀土应用",
    "competition": "竞赛：镧系收缩理论钕的光谱"
  }
};

P6_EDUCATION['Pm'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钷是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系收缩现象",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钷属镧系稀土，f区元素\"",
    "\"镧系收缩：原子半径逐渐减小\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钷是主族元素",
      "correction": "钷是镧系元素，电子填充在4f轨道"
    },
    {
      "misconception": "认为钷有稳定同位素",
      "correction": "钷是唯一没有稳定同位素的镧系元素，所有同位素都有放射性"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钷是镧系稀土元素",
    "university": "大学：钷的配位化学稀土应用",
    "competition": "竞赛：镧系收缩理论钷的光谱"
  }
};

P6_EDUCATION['Sm'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钐是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系收缩现象",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钐属镧系稀土，f区元素\"",
    "\"镧系收缩：原子半径逐渐减小\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钐是主族元素",
      "correction": "钐是镧系元素，电子填充在4f轨道"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钐是镧系稀土元素",
    "university": "大学：钐的配位化学稀土应用",
    "competition": "竞赛：镧系收缩理论钐的光谱"
  }
};

P6_EDUCATION['Eu'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铕是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系收缩现象",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "铕的+2价(荧光材料)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铕属镧系稀土，f区元素\"",
    "\"镧系收缩：原子半径逐渐减小\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铕是主族元素",
      "correction": "铕是镧系元素，电子填充在4f轨道"
    },
    {
      "misconception": "认为铕只有+3价",
      "correction": "铕可呈+2价(Eu²⁺)用于荧光粉和防伪标识"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铕是镧系稀土元素",
    "university": "大学：铕的配位化学稀土应用",
    "competition": "竞赛：镧系收缩理论铕的光谱"
  }
};

P6_EDUCATION['Gd'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钆是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系收缩现象",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "钆在核磁共振造影剂中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钆属镧系稀土，f区元素\"",
    "\"镧系收缩：原子半径逐渐减小\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钆是主族元素",
      "correction": "钆是镧系元素，电子填充在4f轨道"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钆是镧系稀土元素",
    "university": "大学：钆的配位化学稀土应用",
    "competition": "竞赛：镧系收缩理论钆的光谱"
  }
};

P6_EDUCATION['Tb'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铽是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系元素的磁性",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铽属镧系稀土，4f电子填充\"",
    "\"镧系性质相似，分离需用萃取或离子交换\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铽是主族元素",
      "correction": "铽是镧系元素，属f区"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铽是镧系稀土元素",
    "university": "大学：铽的配位化学稀土材料",
    "competition": "竞赛：铽的光谱项镧系磁化学"
  }
};

P6_EDUCATION['Dy'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镝是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系元素的磁性",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镝属镧系稀土，4f电子填充\"",
    "\"镧系性质相似，分离需用萃取或离子交换\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镝是主族元素",
      "correction": "镝是镧系元素，属f区"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镝是镧系稀土元素",
    "university": "大学：镝的配位化学稀土材料",
    "competition": "竞赛：镝的光谱项镧系磁化学"
  }
};

P6_EDUCATION['Ho'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钬是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系元素的磁性",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钬属镧系稀土，4f电子填充\"",
    "\"镧系性质相似，分离需用萃取或离子交换\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钬是主族元素",
      "correction": "钬是镧系元素，属f区"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钬是镧系稀土元素",
    "university": "大学：钬的配位化学稀土材料",
    "competition": "竞赛：钬的光谱项镧系磁化学"
  }
};

P6_EDUCATION['Er'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铒是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系元素的磁性",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铒属镧系稀土，4f电子填充\"",
    "\"镧系性质相似，分离需用萃取或离子交换\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铒是主族元素",
      "correction": "铒是镧系元素，属f区"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铒是镧系稀土元素",
    "university": "大学：铒的配位化学稀土材料",
    "competition": "竞赛：铒的光谱项镧系磁化学"
  }
};

P6_EDUCATION['Tm'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铥是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系元素的磁性",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铥属镧系稀土，4f电子填充\"",
    "\"镧系性质相似，分离需用萃取或离子交换\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铥是主族元素",
      "correction": "铥是镧系元素，属f区"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铥是镧系稀土元素",
    "university": "大学：铥的配位化学稀土材料",
    "competition": "竞赛：铥的光谱项镧系磁化学"
  }
};

P6_EDUCATION['Yb'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镱是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系元素的磁性",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镱属镧系稀土，4f电子填充\"",
    "\"镧系性质相似，分离需用萃取或离子交换\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镱是主族元素",
      "correction": "镱是镧系元素，属f区"
    },
    {
      "misconception": "认为镱只有+3价",
      "correction": "镱可呈+2价(Eu²⁺和Yb²⁺)，+2价较稳定"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镱是镧系稀土元素",
    "university": "大学：镱的配位化学稀土材料",
    "competition": "竞赛：镱的光谱项镧系磁化学"
  }
};

P6_EDUCATION['Lu'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "镧系元素",
        "f区元素",
        "稀土元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镥是镧系稀土元素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镧系元素的磁性",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镥属镧系稀土，4f电子填充\"",
    "\"镧系性质相似，分离需用萃取或离子交换\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镥是主族元素",
      "correction": "镥是镧系元素，属f区"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镥是镧系稀土元素",
    "university": "大学：镥的配位化学稀土材料",
    "competition": "竞赛：镥的光谱项镧系磁化学"
  }
};

P6_EDUCATION['Hf'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "镧系收缩影响"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铪锆分离困难(镧系收缩导致半径相近)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "铪在核反应堆控制棒中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铪锆因镧系收缩，半径相近难分离\"",
    "\"铪吸收中子能力强，用于核控制棒\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铪和锆是同一种元素",
      "correction": "铪和锆是不同元素，但因镧系收缩导致原子半径几乎相同，化学性质极为相似，分离困难"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铪是过渡金属",
    "university": "大学：铪锆分离化学核工业材料",
    "competition": "竞赛：镧系收缩效应铪的配合物"
  }
};

P6_EDUCATION['Ta'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "钽的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钽的耐腐蚀性和生物相容性",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "钽电容器的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钽极耐腐蚀，王水也难溶\"",
    "\"钽电容体积小容量大\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钽不耐腐蚀",
      "correction": "钽具有极强的耐腐蚀性，除HF和发烟硫酸外几乎不与任何酸反应"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：钽的配位化学钽冶金",
    "competition": "竞赛：钽铌化学钽的配合物"
  }
};

P6_EDUCATION['W'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "钨的性质",
        "熔点最高"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钨是熔点最高的金属(3422°C)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "钨在灯丝中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "碳化钨(WC)的硬度",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钨熔点最高金属，灯丝离不了它\"",
    "\"碳化钨硬如金刚石，用于切削工具\"",
    "\"钨的密度大，与金相近\""
  ],
  "misconceptions": [
    {
      "misconception": "认为灯丝材料是铂",
      "correction": "白炽灯灯丝材料是钨(W)不是铂；钨因熔点最高(3422°C)能承受高温发光"
    },
    {
      "misconception": "认为钨的化学符号是Wu或T",
      "correction": "钨的化学符号是W，来自德语Wolfram(钨的德文名)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钨是熔点最高的金属用于灯丝",
    "university": "大学：钨的配位化学钨冶金碳化钨",
    "competition": "竞赛：钨的多酸化学钨的合金"
  }
};

P6_EDUCATION['Re'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铼的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铼是最后发现的稳定元素(1925年)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "铼铂合金在航空发动机中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铼是最后发现的天然元素\"",
    "\"铼铂合金耐高温，航空发动机涡轮片\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铼是人造元素",
      "correction": "铼是天然存在的元素，只是发现较晚(1925年)，因在地壳中含量极低且分布分散"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：铼的配位化学铼催化剂",
    "competition": "竞赛：铼的氧化态化学Re₂Cl₈²⁻结构"
  }
};

P6_EDUCATION['Os'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铂族金属",
        "密度最大"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锇是密度最大的元素(22.59 g/cm³)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锇毒性(OsO₄挥发有毒)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锇密度最大，是最重的元素\"",
    "\"OsO₄挥发有毒，使用需小心\""
  ],
  "misconceptions": [
    {
      "misconception": "认为金的密度最大",
      "correction": "锇是密度最大的元素(22.59 g/cm³)，比金(19.32 g/cm³)还大"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：锇的配位化学锇的毒理",
    "competition": "竞赛：铂族金属化学OsO₄的结构"
  }
};

P6_EDUCATION['Ir'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铂族金属"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铱的耐腐蚀性(最耐腐蚀的金属之一)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "铱在地层中的异常(恐龙灭绝证据)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铱最耐腐蚀，王水也不能溶\"",
    "\"地层铱异常，恐龙灭绝的证据\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铱可以被王水溶解",
      "correction": "铱是少数不能被王水溶解的金属之一，耐腐蚀性极强"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：不作要求",
    "university": "大学：铱的配位化学铱催化",
    "competition": "竞赛：铂族金属化学"
  }
};

P6_EDUCATION['Pt'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铂的催化",
        "铂电极"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构",
      "section": "第二节 元素周期表与元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "铂族金属"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铂作为催化剂(催化转化器、燃料电池)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "铂电极在电解中的应用",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "铂的耐腐蚀性(不溶于单一酸)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铂是贵金属，催化性能最出众\"",
    "\"铂电极惰性好，电解常用它\"",
    "\"铂溶于王水，生成H₂PtCl₆\"",
    "\"铂族金属：钌铑钯锇铱铂\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铂完全不溶于任何酸",
      "correction": "铂不溶于单一酸(盐酸、硝酸、硫酸)，但溶于王水(浓盐酸:浓硝酸=3:1)"
    },
    {
      "misconception": "认为铂只是贵金属首饰",
      "correction": "铂最重要的用途是催化剂(汽车尾气、燃料电池)和电极材料，不只是首饰"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解铂是贵金属",
    "senior": "高中：了解铂的催化性和耐腐蚀性，铂电极的应用",
    "university": "大学：铂的配位化学，铂催化剂(Ziegler-Natta)，铂类药物(顺铂)",
    "competition": "竞赛：铂的配合物，PtCl₆²⁻的结构，均相催化"
  }
};

P6_EDUCATION['Au'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "金的性质"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构",
      "section": "第二节 元素周期表与元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "贵金属"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "金的化学稳定性(不与单一酸反应)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "金溶于王水(HCl:HNO₃=3:1)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "金的焰色试验(金色火焰)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"真金不怕火炼，化学性质极稳定\"",
    "\"金溶于王水：3HCl+HNO₃→AuCl₃+NO↑+2H₂O\"",
    "\"金是延展性最好的金属\"",
    "\"金在化合物中常见+1和+3价\""
  ],
  "misconceptions": [
    {
      "misconception": "认为金不与任何物质反应",
      "correction": "金化学性质很稳定，但能溶于王水(浓盐酸与浓硝酸3:1混合)，也能与氰化物反应"
    },
    {
      "misconception": "认为金的化学符号是Au来自英语Gold",
      "correction": "金的符号Au来自拉丁语Aurum(光辉的黎明)，不是英语Gold"
    },
    {
      "misconception": "认为金只有0价",
      "correction": "金在化合物中可呈+1价和+3价，如AuCl₃、HAuCl₄(氯金酸)"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解金是贵金属，化学性质稳定",
    "senior": "高中：了解金的化学稳定性，溶于王水",
    "university": "大学：金的配位化学，金纳米粒子，金的络合物",
    "competition": "竞赛：金的配合物[Au(CN)₂]⁻，金的标准电极电势"
  }
};

P6_EDUCATION['Hg'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "汞的性质",
        "汞的毒性"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构",
      "section": "第二节 元素周期表与元素周期律",
      "knowledgePoints": [
        "过渡金属",
        "液态金属"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "汞是常温下唯一液态金属",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "汞的毒性(水俣病)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "汞齐(汞的合金)的性质",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "汞的化合物(HgS、HgCl₂)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"汞是唯一常温液态金属\"",
    "\"汞蒸气有毒，温度计打碎要小心处理\"",
    "\"汞齐是汞的合金，银汞齐用于补牙\"",
    "\"HgS朱红色，用于颜料(朱砂)\""
  ],
  "misconceptions": [
    {
      "misconception": "认为汞可以随意接触",
      "correction": "汞蒸气有剧毒，能通过呼吸道进入人体，损伤神经系统(水俣病)"
    },
    {
      "misconception": "认为汞的化学符号是Hg来自英语Mercury",
      "correction": "汞的符号Hg来自拉丁语Hydrargyrum(液态银)，不是英语Mercury"
    },
    {
      "misconception": "认为温度计打碎后汞可以扫掉即可",
      "correction": "汞打碎后需用硫粉覆盖处理(Hg+S→HgS)使汞转化为不挥发的硫化汞，不能简单扫除"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解汞是液态金属，温度计常用",
    "senior": "高中：掌握汞的化学性质、毒性及处理方法",
    "university": "大学：汞的配位化学，汞的毒理学，有机汞",
    "competition": "竞赛：汞的配合物，汞的电极电势"
  }
};

P6_EDUCATION['Tl'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "后过渡金属",
        "铊的毒性"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铊的毒性(脱发、神经损伤)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "铊在电子材料中的应用",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铊有毒，脱发是中毒症状\"",
    "\"铊在周期表中与铝同族\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铊是无毒金属",
      "correction": "铊有剧毒，能导致脱发和神经系统损伤，是知名毒物之一"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铊有毒",
    "university": "大学：铊的配位化学铊的毒理学",
    "competition": "竞赛：铊的氧化态化学"
  }
};

P6_EDUCATION['Pb'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "后过渡金属",
        "铅的性质",
        "铅的毒性"
      ]
    },
    {
      "publisher": "鲁科版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构",
      "section": "第二节 元素周期表与元素周期律",
      "knowledgePoints": [
        "后过渡金属",
        "铅蓄电池"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铅蓄电池的工作原理",
      "frequency": "中频",
      "difficulty": "中等"
    },
    {
      "point": "铅的毒性(儿童血铅)",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "铅的氧化物(PbO/PbO₂/Pb₃O₄)",
      "frequency": "低频",
      "difficulty": "中等"
    },
    {
      "point": "铅在合金中的应用(焊锡、蓄电池)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铅蓄电池：Pb做负极PbO₂做正极，硫酸做电解液\"",
    "\"铅有毒，儿童尤其敏感，避免接触\"",
    "\"铅的化合价：+2和+4，+2更稳定\"",
    "\"Pb₃O₄(铅丹)可写作PbO·PbO₂，混合价态\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铅蓄电池是一次电池",
      "correction": "铅蓄电池是二次电池(可充电)，放电时Pb+PbO₂+2H₂SO₄→2PbSO₄+2H₂O"
    },
    {
      "misconception": "认为铅对人体无害",
      "correction": "铅有毒性，尤其影响儿童神经系统发育，已禁用含铅汽油和含铅涂料"
    },
    {
      "misconception": "认为Pb₃O₄中铅的化合价相同",
      "correction": "Pb₃O₄可写作2PbO·PbO₂，含+2价和+4价铅"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：了解铅是重金属，有毒",
    "senior": "高中：掌握铅蓄电池原理、铅的氧化物性质",
    "university": "大学：铅的配位化学，铅的毒理学，铅冶金",
    "competition": "竞赛：铅蓄电池电化学，铅的配合物"
  }
};

P6_EDUCATION['Bi'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "后过渡金属",
        "铋的性质"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铋的低毒性和可降解性(替代铅)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "铋的氧化铋(Bi₂O₃)的性质",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铋低毒可替代铅，用于环保弹药\"",
    "\"铋的晶体呈彩虹色\"",
    "\"铋是稳定元素中最后一个(83号)\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铋和铅一样有毒",
      "correction": "铋的毒性远低于铅，被称为\"绿色金属\"，可用于替代铅"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铋是后过渡金属低毒",
    "university": "大学：铋的配位化学铋的医药应用(胃药)",
    "competition": "竞赛：铋的氧化态化学"
  }
};

P6_EDUCATION['Po'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "后过渡金属",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钋的强放射性(居里夫人发现)",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "钋的毒性(极毒)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钋是放射性元素，居里夫人发现的\"",
    "\"钋极毒，微量即可致命\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钋是稳定的金属",
      "correction": "钋是强放射性元素，所有同位素都不稳定，由居里夫人于1898年发现"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钋是放射性元素",
    "university": "大学：钋的核化学放射性衰变",
    "competition": "竞赛：钋的α衰变放射性系列"
  }
};

P6_EDUCATION['At'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "卤素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "砹是稀有放射性卤素",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "卤素递变到砹",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"砹是卤素，地壳中最少的元素\"",
    "\"砹有强放射性，半衰期极短\""
  ],
  "misconceptions": [
    {
      "misconception": "认为砹是稳定的卤素",
      "correction": "砹是强放射性元素，地壳中含量极少(约28克)，是地壳中最稀少的元素"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解砹是放射性卤素",
    "university": "大学：砹的核化学",
    "competition": "竞赛：卤素系统化学"
  }
};

P6_EDUCATION['Rn'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "稀有气体",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "氡的放射性与室内污染",
      "frequency": "中频",
      "difficulty": "基础"
    },
    {
      "point": "稀有气体中唯一的放射性元素",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"氡是稀有气体唯一的天然放射性元素\"",
    "\"地下室氡气浓度高，需注意通风\"",
    "\"氡来自铀/镭的衰变\""
  ],
  "misconceptions": [
    {
      "misconception": "认为氡气无害",
      "correction": "氡气有放射性，长期吸入会增加肺癌风险，是仅次于吸烟的第二大肺癌诱因"
    },
    {
      "misconception": "认为稀有气体都是非放射性的",
      "correction": "氡(Rn)是天然放射性稀有气体，所有同位素都具有放射性"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解氡是放射性稀有气体，注意室内污染",
    "university": "大学：氡的核化学，放射性衰变系列",
    "competition": "竞赛：稀有气体系统化学，氡的衰变"
  }
};

P6_EDUCATION['Fr'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "碱金属递变",
        "钫的性质",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钫是放射性元素，半衰期较短",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "碱金属递变规律(钫理论最活泼)",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钫有放射性，半衰期短\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钫是稳定的常见元素",
      "correction": "钫具有强放射性，半衰期短，在自然界中极少"
    },
    {
      "misconception": "认为钫可以大量获得研究",
      "correction": "钫半衰期极短(约22分钟)，自然界中极微量，无法大量研究"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钫是放射性碱金属",
    "university": "大学：钫的核化学，放射性衰变",
    "competition": "竞赛：钫的电子结构，放射性系列"
  }
};

P6_EDUCATION['Ra'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "碱土金属递变",
        "镭的性质",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镭是放射性元素，半衰期较短",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "镭的放射性与居里夫人发现",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镭有放射性，半衰期短\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镭是稳定的常见元素",
      "correction": "镭具有强放射性，半衰期短，在自然界中极少"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镭是放射性碱土金属",
    "university": "大学：镭的核化学，放射性衰变",
    "competition": "竞赛：镭的电子结构，放射性系列"
  }
};

P6_EDUCATION['Ac'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锕的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锕属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锕可以像普通金属一样使用",
      "correction": "锕具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锕为放射性锕系元素",
    "university": "大学：锕的核化学，衰变类型",
    "competition": "竞赛：锕的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Th'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钍的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钍属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钍可以像普通金属一样使用",
      "correction": "钍具有强放射性，钍燃料循环中的核材料，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钍为放射性锕系元素",
    "university": "大学：钍的核化学，衰变类型",
    "competition": "竞赛：钍的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Pa'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镤的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镤属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镤可以像普通金属一样使用",
      "correction": "镤具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镤为放射性锕系元素",
    "university": "大学：镤的核化学，衰变类型",
    "competition": "竞赛：镤的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['U'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铀的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铀属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铀可以像普通金属一样使用",
      "correction": "铀具有强放射性，用于核燃料(U-235裂变)，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铀为放射性锕系元素",
    "university": "大学：铀的核化学，衰变类型",
    "competition": "竞赛：铀的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Np'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镎的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镎属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镎可以像普通金属一样使用",
      "correction": "镎具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镎为放射性锕系元素",
    "university": "大学：镎的核化学，衰变类型",
    "competition": "竞赛：镎的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Pu'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钚的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钚属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钚可以像普通金属一样使用",
      "correction": "钚具有强放射性，用于核武器和核燃料(Pu-239)，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钚为放射性锕系元素",
    "university": "大学：钚的核化学，衰变类型",
    "competition": "竞赛：钚的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Am'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镅的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镅属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镅可以像普通金属一样使用",
      "correction": "镅具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镅为放射性锕系元素",
    "university": "大学：镅的核化学，衰变类型",
    "competition": "竞赛：镅的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Cm'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锔的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锔属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锔可以像普通金属一样使用",
      "correction": "锔具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锔为放射性锕系元素",
    "university": "大学：锔的核化学，衰变类型",
    "competition": "竞赛：锔的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Bk'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锫的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锫属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锫可以像普通金属一样使用",
      "correction": "锫具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锫为放射性锕系元素",
    "university": "大学：锫的核化学，衰变类型",
    "competition": "竞赛：锫的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Cf'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锎的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锎属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锎可以像普通金属一样使用",
      "correction": "锎具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锎为放射性锕系元素",
    "university": "大学：锎的核化学，衰变类型",
    "competition": "竞赛：锎的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Es'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锿的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锿属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锿可以像普通金属一样使用",
      "correction": "锿具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锿为放射性锕系元素",
    "university": "大学：锿的核化学，衰变类型",
    "competition": "竞赛：锿的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Fm'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镄的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镄属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镄可以像普通金属一样使用",
      "correction": "镄具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解镄为放射性锕系元素",
    "university": "大学：镄的核化学，衰变类型",
    "competition": "竞赛：镄的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Md'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "钔的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"钔属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为钔可以像普通金属一样使用",
      "correction": "钔具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解钔为放射性锕系元素",
    "university": "大学：钔的核化学，衰变类型",
    "competition": "竞赛：钔的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['No'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "锘的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"锘属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为锘可以像普通金属一样使用",
      "correction": "锘具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解锘为放射性锕系元素",
    "university": "大学：锘的核化学，衰变类型",
    "competition": "竞赛：锘的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Lr'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "锕系元素",
        "f区元素",
        "放射性元素"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "铹的放射性及核性质",
      "frequency": "低频",
      "difficulty": "基础"
    },
    {
      "point": "锕系元素的电子构型(5f填充)",
      "frequency": "低频",
      "difficulty": "中等"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"铹属锕系，放射性，需特殊防护\""
  ],
  "misconceptions": [
    {
      "misconception": "认为铹可以像普通金属一样使用",
      "correction": "铹具有强放射性，半衰期较短，具有强放射性，需在专用设施中处理"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解铹为放射性锕系元素",
    "university": "大学：铹的核化学，衰变类型",
    "competition": "竞赛：铹的电子结构(5f)，锕系收缩"
  }
};

P6_EDUCATION['Rf'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𬬻(Rf)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𬬻为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𬬻在自然界中大量存在",
      "correction": "𬬻为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𬬻的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𬬻的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Db'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𬭊(Db)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𬭊为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𬭊在自然界中大量存在",
      "correction": "𬭊为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𬭊的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𬭊的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Sg'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𬭳(Sg)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𬭳为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𬭳在自然界中大量存在",
      "correction": "𬭳为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𬭳的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𬭳的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Bh'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𬭛(Bh)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𬭛为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𬭛在自然界中大量存在",
      "correction": "𬭛为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𬭛的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𬭛的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Hs'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𬭶(Hs)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𬭶为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𬭶在自然界中大量存在",
      "correction": "𬭶为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𬭶的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𬭶的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Mt'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "鿏(Mt)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"鿏为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为鿏在自然界中大量存在",
      "correction": "鿏为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：鿏的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：鿏的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Ds'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𫟼(Ds)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𫟼为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𫟼在自然界中大量存在",
      "correction": "𫟼为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𫟼的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𫟼的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Rg'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𬬭(Rg)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𬬭为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𬬭在自然界中大量存在",
      "correction": "𬬭为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𬬭的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𬬭的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Cn'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "鎶(Cn)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"鎶为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为鎶在自然界中大量存在",
      "correction": "鎶为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：鎶的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：鎶的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Nh'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "鉨(Nh)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"鉨为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为鉨在自然界中大量存在",
      "correction": "鉨为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：鉨的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：鉨的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Fl'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𫓧(Fl)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𫓧为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𫓧在自然界中大量存在",
      "correction": "𫓧为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𫓧的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𫓧的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Mc'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "镆(Mc)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"镆为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为镆在自然界中大量存在",
      "correction": "镆为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：镆的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：镆的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Lv'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "𫟷(Lv)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"𫟷为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为𫟷在自然界中大量存在",
      "correction": "𫟷为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：𫟷的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：𫟷的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Ts'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "鿬(Ts)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"鿬为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为鿬在自然界中大量存在",
      "correction": "鿬为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：鿬的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：鿬的核壳模型理论，稳定岛假说"
  }
};

P6_EDUCATION['Og'] = {
  "textbookAlignment": [
    {
      "publisher": "人教版",
      "grade": "高三选择性必修2",
      "chapter": "第一章 原子结构与元素的性质",
      "section": "第二节 元素周期律",
      "knowledgePoints": [
        "超重元素的合成",
        "核稳定性",
        "稳定岛假说"
      ]
    }
  ],
  "examPoints": [
    {
      "point": "鿫(Og)为人造放射性元素，半衰期极短，中学阶段不作要求",
      "frequency": "低频",
      "difficulty": "基础"
    }
  ],
  "experiments": [],
  "mnemonics": [
    "\"鿫为人造元素，半衰期极短，中学不作要求\""
  ],
  "misconceptions": [
    {
      "misconception": "认为鿫在自然界中大量存在",
      "correction": "鿫为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在"
    }
  ],
  "difficultyLevels": {
    "junior": "初中：不作要求",
    "senior": "高中：了解为人造放射性元素，半衰期极短",
    "university": "大学：鿫的合成方法、核反应方程式、衰变方式",
    "competition": "竞赛：鿫的核壳模型理论，稳定岛假说"
  }
};

if (typeof window !== 'undefined') {
  window.P6_EDUCATION = P6_EDUCATION;
}