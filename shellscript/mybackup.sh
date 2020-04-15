#!/bin/bash

#建立我的临时文件夹
mkdir ~/mybackup-temp
mkdir ~/mybackup-temp/linux-config
#拷贝数据到我的~/mybackup-temp文件夹下

cp -r ~/.emacs.d/ ~/mybackup-temp

cp -r ~/lifenote/ ~/mybackup-temp

cp -r ~/psnote_public/ ~/mybackup-temp

cp -r ~/note_site/ ~/mybackup-temp

#拷贝linux需要的配置文件

cp -r /etc/wgetrc ~/mybackup-temp/linux-config

cp -r /etc/apt/sources.list  ~/mybackup-temp/linux-config

cp -r ~/.bashrc  ~/mybackup-temp/linux-config/bashrc

cp -r ~/.gitconfig  ~/mybackup-temp/linux-config/gitconfig



#将~/mybackup-temp文件夹内的文件打包
tar -czvf ~/'Nutstore Files'/dropbox/Dropbox/debianbackup/emacs-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/.emacs.d/ 

tar -czvf ~/'Nutstore Files'/dropbox/Dropbox/debianbackup/lifenote-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/lifenote/

tar -czvf ~/'Nutstore Files'/dropbox/Dropbox/debianbackup/psnote_public-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/psnote_public/ 

tar -czvf ~/'Nutstore Files'/dropbox/Dropbox/debianbackup/note_site-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/note_site/

tar -czvf ~/'Nutstore Files'/dropbox/Dropbox/debianbackup/linux-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/linux-config/


#将****文件夹打包
#tar -czvf ~/'Nutstore Files'/dropbox/Dropbox/debianbackup/****-backup-$(date +%Y%m%d-%H%M).tar.gz ~/mybackup-temp/****

#删除临时文件夹
rm -rf ~/mybackup-temp/

#删除文件夹下超过3天的文件
find ~/'Nutstore Files'/dropbox/Dropbox/debianbackup/ -mtime +3 -name "*.tar.gz" -exec rm -rf {} \;

#再备份以下防止云盘误删文件

cp ~/'Nutstore Files'/dropbox/Dropbox/debianbackup/*.tar.gz ~/backup.tmp/
find ~/backup.tmp/ -mtime +12 -name "*.tar.gz" -exec rm -rf {} \;
