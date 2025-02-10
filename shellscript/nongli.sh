#!/bin/bash

# 获取当前日期
current_date=$(date +"%Y-%m-%d")

# 使用 wget 命令获取当天的农历日期，并且静默过程
response=$(wget -qO- "https://www.36jxs.com/api/Commonweal/almanac?sun=${current_date}")

# 解析农历日期
lunar_GregorianDateTime=$(echo $response | grep -o '"GregorianDateTime":"[^"]*' | grep -o '[^"]*$')
lunar_month=$(echo $response | grep -o '"LMonth":"[^"]*' | grep -o '[^"]*$')
lunar_day=$(echo $response | grep -o '"LDay":"[^"]*' | grep -o '[^"]*$')
lunar_year=$(echo $response | grep -o '"LYear":"[^"]*' | grep -o '[^"]*$')
lunar_tiangany=$(echo $response | grep -o '"TianGanDiZhiYear":"[^"]*' | grep -o '[^"]*$')
lunar_tianganm=$(echo $response | grep -o '"TianGanDiZhiMonth":"[^"]*' | grep -o '[^"]*$')
lunar_tiangand=$(echo $response | grep -o '"TianGanDiZhiDay":"[^"]*' | grep -o '[^"]*$')
lunar_shenwei=$(echo $response | grep -o '"ShenWei":"[^"]*' | grep -o '[^"]*$')
lunar_monthname=$(echo $response | grep -o '"LMonthName":"[^"]*' | grep -o '[^"]*$')




echo " $lunar_GregorianDateTime $lunar_monthname $lunar_month $lunar_day $lunar_year $lunar_tiangany $lunar_tianganm $lunar_tiangand $lunar_shenwei"
