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
#电子电路 playlist="https://www.youtube.com/playlist?list=PLpsrnaNcZIbk0I2XP3Tme7_9eH70qnf79"
#c语言教程-temp playlist="https://www.youtube.com/playlist?list=PLY_qIufNHc293YnIjVeEwNDuqGo8y2Emx"
#artistic-son-nkife-temp
playlist="https://www.youtube.com/playlist?list=PL3uNOeI85OO5WgViMrcV1gYU8eMie4bYQ"
#playlist=""
#playlist=""
#playlist=""
youtube-dl -citf best  ${playlist} 



