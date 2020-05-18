#!/bin/bash

#建立我的临时文件夹
mkdir ~/mybackup-temp
mkdir ~/mybackup-temp/linux-config
#拷贝数据到我的~/mybackup-temp文件夹下

cp -r ~/.emacs.d/ ~/mybackup-temp/emacs.d

cp -r ~/life-note/life-note-backup/ ~/mybackup-temp

cp -r ~/public_note/ ~/mybackup-temp

cp -r ~/public_site/ ~/mybackup-temp

#拷贝linux需要的配置文件

cp -r /etc/wgetrc ~/mybackup-temp/linux-config

cp -r /etc/apt/sources.list  ~/mybackup-temp/linux-config

cp -r ~/.bashrc  ~/mybackup-temp/linux-config/bashrc

cp -r ~/.gitconfig  ~/mybackup-temp/linux-config/gitconfig

cp -r ~/.config/youtube-dl/config ~/mybackup-temp/linux-config/config


#将~/mybackup-temp文件夹内的文件打包
tar -czvf ~/nutstorefiles/dropbox/Dropbox/debianbackup/emacs-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/emacs.d

tar -czvf ~/nutstorefiles/dropbox/Dropbox/debianbackup/life-note-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/life-note-backup/

tar -czvf ~/nutstorefiles/dropbox/Dropbox/debianbackup/public_note-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/public_note/ 

tar -czvf ~/nutstorefiles/dropbox/Dropbox/debianbackup/public_site-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/public_site/

tar -czvf ~/nutstorefiles/dropbox/Dropbox/debianbackup/linux-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/linux-config/




#删除临时文件夹
find ~/mybackup-temp/* -name "*"  -ok rm -rf  {} \;


#删除文件夹下超过3天的文件
find ~/nutstorefiles/dropbox/Dropbox/debianbackup/ -mtime +3 -name "*.tar.gz" -exec  rm -rf  {} \;

#再备份以下防止云盘误删文件

cp ~/nutstorefiles/dropbox/Dropbox/debianbackup/*.tar.gz ~/backup.tmp/
find ~/backup.tmp/ -mtime +5 -name "*.tar.gz" -exec rm -rf  {} \;



cp ~/nutstorefiles/dropbox/Dropbox/debianbackup/*.tar.gz ~/MEGA/debian-backup/
find ~/MEGA/debian-backup/  -mtime +5 -name "*.tar.gz" -exec rm -rf {} \;
