# -*- coding: utf-8 -*-
"""元素列表、辅助函数、剩余元素生成"""

# 元素列表 (z, symbol, name_cn, name_en, category)
ELEMENT_LIST = [
    (1,'H','氢','Hydrogen','非金属'),(2,'He','氦','Helium','稀有气体'),
    (3,'Li','锂','Lithium','碱金属'),(4,'Be','铍','Beryllium','碱土金属'),
    (5,'B','硼','Boron','类金属'),(6,'C','碳','Carbon','非金属'),
    (7,'N','氮','Nitrogen','非金属'),(8,'O','氧','Oxygen','非金属'),
    (9,'F','氟','Fluorine','卤素'),(10,'Ne','氖','Neon','稀有气体'),
    (11,'Na','钠','Sodium','碱金属'),(12,'Mg','镁','Magnesium','碱土金属'),
    (13,'Al','铝','Aluminium','后过渡金属'),(14,'Si','硅','Silicon','类金属'),
    (15,'P','磷','Phosphorus','非金属'),(16,'S','硫','Sulfur','非金属'),
    (17,'Cl','氯','Chlorine','卤素'),(18,'Ar','氩','Argon','稀有气体'),
    (19,'K','钾','Potassium','碱金属'),(20,'Ca','钙','Calcium','碱土金属'),
    (21,'Sc','钪','Scandium','过渡金属'),(22,'Ti','钛','Titanium','过渡金属'),
    (23,'V','钒','Vanadium','过渡金属'),(24,'Cr','铬','Chromium','过渡金属'),
    (25,'Mn','锰','Manganese','过渡金属'),(26,'Fe','铁','Iron','过渡金属'),
    (27,'Co','钴','Cobalt','过渡金属'),(28,'Ni','镍','Nickel','过渡金属'),
    (29,'Cu','铜','Copper','过渡金属'),(30,'Zn','锌','Zinc','过渡金属'),
    (31,'Ga','镓','Gallium','后过渡金属'),(32,'Ge','锗','Germanium','类金属'),
    (33,'As','砷','Arsenic','类金属'),(34,'Se','硒','Selenium','非金属'),
    (35,'Br','溴','Bromine','卤素'),(36,'Kr','氪','Krypton','稀有气体'),
    (37,'Rb','铷','Rubidium','碱金属'),(38,'Sr','锶','Strontium','碱土金属'),
    (39,'Y','钇','Yttrium','过渡金属'),(40,'Zr','锆','Zirconium','过渡金属'),
    (41,'Nb','铌','Niobium','过渡金属'),(42,'Mo','钼','Molybdenum','过渡金属'),
    (43,'Tc','锝','Technetium','过渡金属'),(44,'Ru','钌','Ruthenium','过渡金属'),
    (45,'Rh','铑','Rhodium','过渡金属'),(46,'Pd','钯','Palladium','过渡金属'),
    (47,'Ag','银','Silver','过渡金属'),(48,'Cd','镉','Cadmium','过渡金属'),
    (49,'In','铟','Indium','后过渡金属'),(50,'Sn','锡','Tin','后过渡金属'),
    (51,'Sb','锑','Antimony','类金属'),(52,'Te','碲','Tellurium','类金属'),
    (53,'I','碘','Iodine','卤素'),(54,'Xe','氙','Xenon','稀有气体'),
    (55,'Cs','铯','Cesium','碱金属'),(56,'Ba','钡','Barium','碱土金属'),
    (57,'La','镧','Lanthanum','镧系'),(58,'Ce','铈','Cerium','镧系'),
    (59,'Pr','镨','Praseodymium','镧系'),(60,'Nd','钕','Neodymium','镧系'),
    (61,'Pm','钷','Promethium','镧系'),(62,'Sm','钐','Samarium','镧系'),
    (63,'Eu','铕','Europium','镧系'),(64,'Gd','钆','Gadolinium','镧系'),
    (65,'Tb','铽','Terbium','镧系'),(66,'Dy','镝','Dysprosium','镧系'),
    (67,'Ho','钬','Holmium','镧系'),(68,'Er','铒','Erbium','镧系'),
    (69,'Tm','铥','Thulium','镧系'),(70,'Yb','镱','Ytterbium','镧系'),
    (71,'Lu','镥','Lutetium','镧系'),(72,'Hf','铪','Hafnium','过渡金属'),
    (73,'Ta','钽','Tantalum','过渡金属'),(74,'W','钨','Tungsten','过渡金属'),
    (75,'Re','铼','Rhenium','过渡金属'),(76,'Os','锇','Osmium','过渡金属'),
    (77,'Ir','铱','Iridium','过渡金属'),(78,'Pt','铂','Platinum','过渡金属'),
    (79,'Au','金','Gold','过渡金属'),(80,'Hg','汞','Mercury','过渡金属'),
    (81,'Tl','铊','Thallium','后过渡金属'),(82,'Pb','铅','Lead','后过渡金属'),
    (83,'Bi','铋','Bismuth','后过渡金属'),(84,'Po','钋','Polonium','后过渡金属'),
    (85,'At','砹','Astatine','卤素'),(86,'Rn','氡','Radon','稀有气体'),
    (87,'Fr','钫','Francium','碱金属'),(88,'Ra','镭','Radium','碱土金属'),
    (89,'Ac','锕','Actinium','锕系'),(90,'Th','钍','Thorium','锕系'),
    (91,'Pa','镤','Protactinium','锕系'),(92,'U','铀','Uranium','锕系'),
    (93,'Np','镎','Neptunium','锕系'),(94,'Pu','钚','Plutonium','锕系'),
    (95,'Am','镅','Americium','锕系'),(96,'Cm','锔','Curium','锕系'),
    (97,'Bk','锫','Berkelium','锕系'),(98,'Cf','锎','Californium','锕系'),
    (99,'Es','锿','Einsteinium','锕系'),(100,'Fm','镄','Fermium','锕系'),
    (101,'Md','钔','Mendelevium','锕系'),(102,'No','锘','Nobelium','锕系'),
    (103,'Lr','铹','Lawrencium','锕系'),
    (104,'Rf','𬬻','Rutherfordium','过渡金属'),(105,'Db','𬭊','Dubnium','过渡金属'),
    (106,'Sg','𬭳','Seaborgium','过渡金属'),(107,'Bh','𬭛','Bohrium','过渡金属'),
    (108,'Hs','𬭶','Hassium','过渡金属'),(109,'Mt','鿏','Meitnerium','过渡金属'),
    (110,'Ds','𫟼','Darmstadtium','过渡金属'),(111,'Rg','𬬭','Roentgenium','过渡金属'),
    (112,'Cn','鎶','Copernicium','过渡金属'),(113,'Nh','鉨','Nihonium','后过渡金属'),
    (114,'Fl','𫓧','Flerovium','后过渡金属'),(115,'Mc','镆','Moscovium','后过渡金属'),
    (116,'Lv','𫟷','Livermorium','后过渡金属'),(117,'Ts','鿬','Tennessine','卤素'),
    (118,'Og','鿫','Oganesson','稀有气体'),
]

EMAP = {sym: {'z':z,'cn':cn,'en':en,'cat':cat} for z,sym,cn,en,cat in ELEMENT_LIST}

# === 辅助函数 ===
def tb(publisher, grade, chapter, section, kps):
    return {'publisher':publisher,'grade':grade,'chapter':chapter,'section':section,'knowledgePoints':kps}

def ep(point, freq, diff):
    return {'point':point,'frequency':freq,'difficulty':diff}

def exp(name, obj, mats, proc, phen, safety, diff, dur):
    return {'name':name,'objective':obj,'materials':mats,'procedure':proc,
            'expectedPhenomena':phen,'safetyNotes':safety,'difficulty':diff,'duration':dur}

def mc(mis, cor):
    return {'misconception':mis,'correction':cor}

def dl(j, s, u, c):
    return {'junior':j,'senior':s,'university':u,'competition':c}

def gen_superheavy(sym, z, cn):
    """超重元素(104-118)简化数据"""
    return {
        'textbookAlignment': [tb('人教版','高三选择性必修2','第一章 原子结构与元素的性质','第二节 元素周期律',
               ['超重元素的合成','核稳定性','稳定岛假说'])],
        'examPoints': [ep(f'{cn}({sym})为人造放射性元素，半衰期极短，中学阶段不作要求','低频','基础')],
        'experiments': [],
        'mnemonics': [f'"{cn}为人造元素，半衰期极短，中学不作要求"'],
        'misconceptions': [mc(f'认为{cn}在自然界中大量存在',
               f'{cn}为人造放射性元素，通过核反应合成，半衰期极短(毫秒至秒级)，自然界中不存在')],
        'difficultyLevels': dl('初中：不作要求','高中：了解为人造放射性元素，半衰期极短',
            f'大学：{cn}的合成方法、核反应方程式、衰变方式',f'竞赛：{cn}的核壳模型理论，稳定岛假说')
    }

def gen_actinide(sym, z, cn, extra=''):
    """锕系元素(89-103)数据"""
    info = extra or '半衰期较短，具有强放射性'
    return {
        'textbookAlignment': [tb('人教版','高三选择性必修2','第一章 原子结构与元素的性质','第二节 元素周期律',
               ['锕系元素','f区元素','放射性元素'])],
        'examPoints': [ep(f'{cn}的放射性及核性质','低频','基础'),
                       ep('锕系元素的电子构型(5f填充)','低频','中等')],
        'experiments': [],
        'mnemonics': [f'"{cn}属锕系，放射性，需特殊防护"'],
        'misconceptions': [mc(f'认为{cn}可以像普通金属一样使用',
               f'{cn}具有强放射性，{info}，需在专用设施中处理')],
        'difficultyLevels': dl('初中：不作要求',f'高中：了解{cn}为放射性锕系元素',
            f'大学：{cn}的核化学，衰变类型',f'竞赛：{cn}的电子结构(5f)，锕系收缩')
    }

def gen_radioactive(sym, z, cn, cat, extra_exam=None, extra_mc=None):
    """放射性元素(Fr, Ra等)数据"""
    exams = [ep(f'{cn}是放射性元素，半衰期较短','低频','基础')]
    if extra_exam:
        exams.append(extra_exam)
    mcs = [mc(f'认为{cn}是稳定的常见元素',f'{cn}具有强放射性，半衰期短，在自然界中极少')]
    if extra_mc:
        mcs.append(extra_mc)
    return {
        'textbookAlignment': [tb('人教版','高三选择性必修2','第一章 原子结构与元素的性质','第二节 元素周期律',
               [f'{cat}递变',f'{cn}的性质','放射性元素'])],
        'examPoints': exams,
        'experiments': [],
        'mnemonics': [f'"{cn}有放射性，半衰期短"'],
        'misconceptions': mcs,
        'difficultyLevels': dl('初中：不作要求',f'高中：了解{cn}是放射性{cat}',
            f'大学：{cn}的核化学，放射性衰变',f'竞赛：{cn}的电子结构，放射性系列')
    }

def gen_remaining():
    """生成未被part1/2/3覆盖的元素数据(87-118)"""
    data = {}
    for z, sym, cn, en, cat in ELEMENT_LIST:
        if z < 87:
            continue
        if z >= 104:
            data[sym] = gen_superheavy(sym, z, cn)
        elif z >= 89:
            extra = ''
            if sym == 'U':
                extra = '用于核燃料(U-235裂变)'
            elif sym == 'Pu':
                extra = '用于核武器和核燃料(Pu-239)'
            elif sym == 'Th':
                extra = '钍燃料循环中的核材料'
            data[sym] = gen_actinide(sym, z, cn, extra)
        elif sym == 'Fr':
            data[sym] = gen_radioactive(sym, z, cn, '碱金属',
                ep('碱金属递变规律(钫理论最活泼)','低频','基础'),
                mc('认为钫可以大量获得研究','钫半衰期极短(约22分钟)，自然界中极微量，无法大量研究'))
        elif sym == 'Ra':
            data[sym] = gen_radioactive(sym, z, cn, '碱土金属',
                ep('镭的放射性与居里夫人发现','低频','基础'))
    return data
