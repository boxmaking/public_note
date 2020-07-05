#!/bin/bash

#建立我的临时文件夹
mkdir ~/mybackup-temp
mkdir ~/mybackup-temp/linux-config
#拷贝数据到我的~/mybackup-temp文件夹下

cp -r ~/.emacs.d/ ~/mybackup-temp/emacs.d

cp -r ~/lifenote/ ~/mybackup-temp

cp -r ~/public_note/ ~/mybackup-temp

cp -r ~/public_site/ ~/mybackup-temp

#拷贝linux需要的配置文件

cp -r ~/.wgetrc ~/mybackup-temp/linux-config/wgetrc

cp -r ~/.bashrc  ~/mybackup-temp/linux-config/bashrc

cp -r ~/.gitconfig  ~/mybackup-temp/linux-config/gitconfig

cp -r ~/.config/youtube-dl/ ~/mybackup-temp/linux-config/


#将~/mybackup-temp文件夹内的文件打包
tar -czvf ~/debianbackup/emacs-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/emacs.d

tar -czvf ~/debianbackup/lifenote-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/lifenote/

tar -czvf ~/debianbackup/public_note-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/public_note/ 

tar -czvf ~/debianbackup/public_site-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/public_site/

tar -czvf ~/debianbackup/linux-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/linux-config/




#删除临时文件夹
find ~/mybackup-temp/* -name "*"  -ok rm -rf  {} \;


#删除文件夹下超过3天的文件
find ~/debianbackup/ -mtime +5 -name "*.tar.gz" -exec  rm -rf  {} \;


#再备份以下防止云盘误删文件

cp ~/debianbackup/*.tar.gz ~/MEGA/debian-backup/
find ~/MEGA/debian-backup/ -mtime +5 -name "*.tar.gz" -exec rm -rf  {} \;



cp ~/debianbackup/*.tar.gz ~/temp/backup-temp/
find ~/temp/backup-temp/  -mtime +15 -name "*.tar.gz" -exec rm -rf {} \;
