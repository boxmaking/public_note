# -*- coding: utf-8 -*-
"""主生成模块: 合并所有数据并生成 compounds.js"""

import os, re, sys

# 确保能导入同目录下的数据模块
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

SUB_MAP = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')

def sub(s):
    return ''.join(ch.translate(SUB_MAP) if ch.isdigit() else ch for ch in s)

ELEMENTS = [
    (1,'H','氢'),(2,'He','氦'),(3,'Li','锂'),(4,'Be','铍'),(5,'B','硼'),
    (6,'C','碳'),(7,'N','氮'),(8,'O','氧'),(9,'F','氟'),(10,'Ne','氖'),
    (11,'Na','钠'),(12,'Mg','镁'),(13,'Al','铝'),(14,'Si','硅'),(15,'P','磷'),
    (16,'S','硫'),(17,'Cl','氯'),(18,'Ar','氩'),(19,'K','钾'),(20,'Ca','钙'),
    (21,'Sc','钪'),(22,'Ti','钛'),(23,'V','钒'),(24,'Cr','铬'),(25,'Mn','锰'),
    (26,'Fe','铁'),(27,'Co','钴'),(28,'Ni','镍'),(29,'Cu','铜'),(30,'Zn','锌'),
    (31,'Ga','镓'),(32,'Ge','锗'),(33,'As','砷'),(34,'Se','硒'),(35,'Br','溴'),
    (36,'Kr','氪'),(37,'Rb','铷'),(38,'Sr','锶'),(39,'Y','钇'),(40,'Zr','锆'),
    (41,'Nb','铌'),(42,'Mo','钼'),(43,'Tc','锝'),(44,'Ru','钌'),(45,'Rh','铑'),
    (46,'Pd','钯'),(47,'Ag','银'),(48,'Cd','镉'),(49,'In','铟'),(50,'Sn','锡'),
    (51,'Sb','锑'),(52,'Te','碲'),(53,'I','碘'),(54,'Xe','氙'),(55,'Cs','铯'),
    (56,'Ba','钡'),(57,'La','镧'),(58,'Ce','铈'),(59,'Pr','镨'),(60,'Nd','钕'),
    (61,'Pm','钷'),(62,'Sm','钐'),(63,'Eu','铕'),(64,'Gd','钆'),(65,'Tb','铽'),
    (66,'Dy','镝'),(67,'Ho','钬'),(68,'Er','铒'),(69,'Tm','铥'),(70,'Yb','镱'),
    (71,'Lu','镥'),(72,'Hf','铪'),(73,'Ta','钽'),(74,'W','钨'),(75,'Re','铼'),
    (76,'Os','锇'),(77,'Ir','铱'),(78,'Pt','铂'),(79,'Au','金'),(80,'Hg','汞'),
    (81,'Tl','铊'),(82,'Pb','铅'),(83,'Bi','铋'),(84,'Po','钋'),(85,'At','砹'),
    (86,'Rn','氡'),(87,'Fr','钫'),(88,'Ra','镭'),(89,'Ac','锕'),(90,'Th','钍'),
    (91,'Pa','镤'),(92,'U','铀'),(93,'Np','镎'),(94,'Pu','钚'),(95,'Am','镅'),
    (96,'Cm','锔'),(97,'Bk','锫'),(98,'Cf','锎'),(99,'Es','锿'),(100,'Fm','镄'),
    (101,'Md','钔'),(102,'No','锘'),(103,'Lr','铹'),
    (104,'Rf','鑪'),(105,'Db','𬭊'),(106,'Sg','𬭳'),(107,'Bh','𬭛'),(108,'Hs','𬭶'),
    (109,'Mt','鿏'),(110,'Ds','鐽'),(111,'Rg','鐭'),(112,'Cn','鎶'),(113,'Nh','鉨'),
    (114,'Fl','𫓧'),(115,'Mc','镆'),(116,'Lv','𫟷'),(117,'Ts','鿬'),(118,'Og','鿫')
]

def js_str(s):
    """转义字符串用于JS"""
    if not s:
        return ''
    return str(s).replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')

def gen_compound(comp):
    """生成单个化合物的JS代码"""
    nZ = comp[0]; nE = comp[1]; f = comp[2]; t = comp[3]; cat = comp[4]
    phys = comp[5]; chem = comp[6]; apps_str = comp[7]; saf = comp[8]
    sp = comp[9] if len(comp) > 9 else ''
    apps = []
    for a in apps_str.split('|'):
        if ':' in a:
            parts = a.split(':', 1)
            apps.append("{name:'%s',desc:'%s'}" % (js_str(parts[0]), js_str(parts[1])))
    apps_js = ','.join(apps)
    sp_js = ""
    if sp:
        sp_js = ",special:'%s'" % js_str(sp)
    return ("      {\n"
            "        nameZh:'%s',nameEn:'%s',formula:'%s',\n"
            "        type:'%s',category:'%s',\n"
            "        physProp:'%s',chemProp:'%s',\n"
            "        apps:[%s],safetyNote:'%s'%s\n"
            "      }") % (js_str(nZ), js_str(nE), sub(f),
                       js_str(t), js_str(cat),
                       js_str(phys), js_str(chem),
                       apps_js, js_str(saf), sp_js)

def gen_element_block(sym, name_zh, z, summary, compounds):
    """生成一个元素的完整JS块"""
    lines = []
    lines.append("/* %s. %s (%s, z=%d) */" % (z, name_zh, sym, z))
    lines.append("COMPOUNDS_DATA['%s'] = {" % sym)
    lines.append("  summary: '%s'," % js_str(summary))
    lines.append("  compounds: [")
    comp_list = []
    for comp in compounds:
        comp_list.append(gen_compound(comp))
    lines.append(',\n'.join(comp_list))
    lines.append("  ]")
    lines.append("};")
    return '\n'.join(lines)

def extract_existing_blocks(content, symbols):
    """从现有compounds.js中提取指定元素的完整数据块"""
    blocks = {}
    for sym in symbols:
        pattern = r"((/\*\s*=?\s*\*+\s*\n\s*\d+\.\s*.*?\*/\s*\n)?COMPOUNDS_DATA\['%s'\]\s*=\s*\{.*?\};)" % re.escape(sym)
        m = re.search(pattern, content, re.DOTALL)
        if m:
            blocks[sym] = m.group(1)
    return blocks

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(base_dir)
    data_dir = os.path.join(project_dir, 'data')
    output_file = os.path.join(data_dir, 'compounds.js')
    
    # 导入所有数据模块
    from data_part2 import P2
    from data_part3 import P3
    from data_part4 import P4
    from data_part5 import P5
    from data_part6 import P6
    from data_part7 import P7
    from data_part8 import P8
    
    ALL_DATA = P2 + P3 + P4 + P5 + P6 + P7 + P8
    
    # 构建符号到数据的映射
    data_map = {}
    for sym, summary, compounds in ALL_DATA:
        data_map[sym] = (summary, compounds)
    
    # 读取现有compounds.js，提取H和C的块
    existing_blocks = {}
    if os.path.exists(output_file):
        with open(output_file, 'r', encoding='utf-8') as f:
            existing_content = f.read()
        existing_blocks = extract_existing_blocks(existing_content, ['H', 'C'])
        print("提取到现有数据块: %s" % list(existing_blocks.keys()))
    
    # 生成JS文件
    header = """/**
 * 元素重要化合物与衍生物知识库（增强版 v2）
 * 每个元素对应一个对象，包含该元素的重要化合物/衍生物列表
 *
 * 数据模型字段：
 *   nameZh            - 中文名称
 *   nameEn            - 英文名称
 *   formula           - 化学式（支持 HTML 下标，如 H₂O）
 *   type              - 类型：'单质'|'氧化物'|'酸'|'碱'|'盐'|'有机物'|'配合物'|'合金'|'其他'
 *   category          - 分类标签（可选）：如 '同素异形体'|'无机物'|'高分子' 等
 *   physProp          - 物理性质（字符串）
 *   chemProp          - 化学性质（字符串）
 *   background        - 发现/历史背景（字符串或数组，可选）
 *   mechanism         - 作用原理/反应机理（字符串数组，可选）
 *   apps              - 主要应用（数组，每项含 name + desc 字符串）
 *   safetyNote        - 安全注意事项（字符串或数组，可选）
 *   emergencyHandling - 危机处理/应急处置（字符串，可选）
 *   special           - 特殊说明/趣味知识（字符串或数组，可选）
 */
var COMPOUNDS_DATA = {};

"""
    
    footer = """
/* ═══════════════════════════════════════
   导出
   ═══════════════════════════════════════ */
if (typeof window !== 'undefined') {
  window.COMPOUNDS_DATA = COMPOUNDS_DATA;
}
"""
    
    parts = [header]
    
    # 生成所有118个元素的数据
    missing = []
    for z, sym, name_zh in ELEMENTS:
        if sym in existing_blocks:
            # 使用现有数据块(H和C)
            parts.append(existing_blocks[sym])
            parts.append('\n\n')
        elif sym in data_map:
            summary, compounds = data_map[sym]
            block = gen_element_block(sym, name_zh, z, summary, compounds)
            parts.append(block)
            parts.append('\n\n')
        else:
            missing.append(sym)
            print("警告: 缺少元素 %s (%s) 的数据!" % (sym, name_zh))
    
    parts.append(footer)
    
    # 写入文件
    output = '\n'.join(parts) if isinstance(parts[0], str) else ''.join(str(p) for p in parts)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print("已生成: %s" % output_file)
    print("元素总数: %d" % len(ELEMENTS))
    if missing:
        print("缺少的元素: %s" % ', '.join(missing))
    else:
        print("所有118个元素均已覆盖!")

if __name__ == '__main__':
    main()
