/**
 * 提取并显示元素详情，然后增强它
 * 运行: node extract-and-enhance-26.js
 */

const fs = require('fs');

// 读取文件
const content = fs.readFileSync('data/element-details.js', 'utf8');

console.log('🔍 提取元素26（铁）的详情...\n');

// 方法：找到 ELEMENT_DETAILS[26] = ` 和下一个 `; 之间的内容
const startMarker = "ELEMENT_DETAILS[26] = `";
const startIndex = content.indexOf(startMarker);

if (startMarker === -1) {
  console.log('❌ 未找到元素26的详情');
  process.exit(1);
}

// 从 startIndex + startMarker.length 开始，找到配对的反引号
let backtickCount = 0;
let i = startIndex + startMarker.length;
let detailStart = i;

while (i < content.length) {
  if (content[i] === '`') {
    // 检查是否是转义的反引号
    if (i > 0 && content[i-1] === '\\') {
      i++;
      continue;
    }
    backtickCount++;
    if (backtickCount === 1) {
      // 这是开始的反引号，已经过去了
      detailStart = i + 1;
      i++;
      continue;
    } else if (backtickCount === 2) {
      // 这是结束的反引号
      var detailEnd = i;
      break;
    }
  }
  i++;
}

if (!detailEnd) {
  console.log('❌ 无法找到结束的反引号');
  process.exit(1);
}

const currentDetail = content.substring(detailStart, detailEnd);
console.log('✅ 找到元素26的详情：\n');
console.log(currentDetail);
console.log('\n✅ 详情长度：' + currentDetail.length + ' 字符\n');

// 检查是否包含必需章节
const required = ['发现与发展史', '物理性质', '化学性质', '应用与原理', '注意事项', '发展前景'];
console.log('📋 章节检查：');
required.forEach(section => {
  const hasIt = currentDetail.includes(section);
  console.log(`  ${hasIt ? '✅' : '❌'} ${section}`);
});

console.log('\n💡 下一步：增强此详情，添加更多化学方程式和应用');
