#!/bin/bash

#URL=""
#URL=""
#URL=""
#URL=""
#URL=""
#URL=""
#URL=""
#youtube-dl -f best ${URL} --external-downloader aria2c --external-downloader-args "-x 16 -k 1M"
#youtube-dl -f best ${URL} --external-downloader aria2c --external-downloader-args "-x 16 "

#批量下载
#youtube-dl -c -i -a video_url.txt


#查看支持网站列表
#youtube-dl --list-extractors



#下载youtube播放列表
#电子电路 #playlist="https://www.youtube.com/playlist?list=PLpsrnaNcZIbk0I2XP3Tme7_9eH70qnf79"
#c语言教程-temp #playlist="https://www.youtube.com/playlist?list=PLY_qIufNHc293YnIjVeEwNDuqGo8y2Emx"
#artistic-son-nkife-temp#playlist="https://www.youtube.com/playlist?list=PL3uNOeI85OO5WgViMrcV1gYU8eMie4bYQ"

#salvik-tely-csgo-knife
playlist="https://www.youtube.com/playlist?list=PLoMYuVm4uducpAs5oMt5RIDdAe40BbAOp"

#salvik-custom-knife
#playlist="https://www.youtube.com/playlist?list=PLoMYuVm4udufkeHggidNf_efTQI-CipXR"

#salivik-JAPANESE KNIVES
#playlist="https://www.youtube.com/playlist?list=PLoMYuVm4uducJ4pOQsv4v1B2SU2kJMCXm"

#awe me-recent upload
#playlist="https://www.youtube.com/playlist?list=PLUUGFk1wE5OFjtAkK-YT8-xIinPl-J0Wb"

#avmake-knife
#playlist="https://www.youtube.com/playlist?list=PLwnDryJ3YYJT7VXLaCchu6ZjG1H9aVK45"
#avmake-fun-pro
#playlist="https://www.youtube.com/playlist?list=PLwnDryJ3YYJT7qePRGB9IT30Y49yblvcH"

#make-it-extreme
#playlist="https://www.youtube.com/playlist?list=PLgXx5D-u4k4iLwym_J40EeAIbTkxJfbA9"
##make-it-extreme-how-to-make
#playlist="https://www.youtube.com/playlist?list=PLgXx5D-u4k4jxzB2SdIgxwXjjY9vIWgko&pbjreload=101"

#make in poland all
#playlist="https://www.youtube.com/playlist?list=PLtp0qX2WkOnVCzOicISW2uOdyyLEcfKdr"

#The other Finnish guy-diy-tools
#playlist="https://www.youtube.com/playlist?list=PLALEzF7YE8jK7LDOeF0TwFj02DCsR6361"


#Scott Turner-diy-all
#playlist="https://www.youtube.com/playlist?list=PLeZ7YqfvgMc0VCJjtKixWgSO9I0qc0cCj"


#TheMetalRaymond diy tool
#playlist="https://www.youtube.com/playlist?list=PLdyZkLBbY2DbrBjKkdaB8pKRirtphcIwB"


#Torbjörn Åhman
#playlist="https://www.youtube.com/playlist?list=PLxTbEbyiv6g4TqGERC1oQ4X6rxp9ioCOQ"

#伝統工芸 青山スクエア 
#playlist="https://www.youtube.com/playlist?list=PLrV_BP5Fb2nHjABJ9jF06LhpR9VSCmKGb"

#基地base
#playlist="https://www.youtube.com/playlist?list=PLOd7JttKoK9gTQsrUGUIkrmoTCw9gaoi5"

#青蛙品魔戒
#playlist="https://www.youtube.com/playlist?list=PLg45KLfneaCQXaCXZz9aOvrgEhisYWzUB"
#星战
#playlist="https://www.youtube.com/playlist?list=PLg45KLfneaCQVWqoPhxtSUBYNPHSgTKQY"
#哈比人
#playlist="https://www.youtube.com/playlist?list=PLg45KLfneaCS_jbeV2Hn0Tqrp6s9quSMh"
#哈利波特-temp
#playlist="https://www.youtube.com/playlist?list=PLg45KLfneaCTXxacXI9WEZ_26lid_D6YU"

#youtube赚钱
#playlist="https://www.youtube.com/playlist?list=PLwwPq48LW7z9mDJUYi-guT9hcVVwls1UX"
#google赚钱
#playlist="https://www.youtube.com/playlist?list=PLwwPq48LW7z9VPcRWJDr1NiOGo8lub8il"
#ig赚钱
#playlist="https://www.youtube.com/playlist?list=PLwwPq48LW7z_yhXNSvejohJahgsMuhO9G"

#pre教程
#playlist="https://www.youtube.com/playlist?list=PLwwPq48LW7z-SmRdfCS-0A1cq3KF7-RSx&pbjreload=101"
#职人工厂-update-temp
#playlist="https://www.youtube.com/watch?v=m3l0jOMQ1cw&list=PLBQxWBmydvh-bKEHVcK4ChhsWB7Mtd6Zv"
#日本巡礼
#playlist="https://www.youtube.com/playlist?list=PLBQxWBmydvh_GdpHOMwJpqyQ-J1qlRFeA"


#playlist=""
#playlist=""
#playlist=""


youtube-dl -citf best  ${playlist} 



