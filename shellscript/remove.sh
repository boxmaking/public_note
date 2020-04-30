TRASH_DIR="/home/pengshao/.trash"

for i in $*; do
    STAMP=`date +%s`
    fileName=`basename $i`

    #移动文件到.trash/
    mv $i ${TRASH_DIR}/${fileName}

    
done
