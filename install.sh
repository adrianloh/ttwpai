SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"

SRC=${SCRIPTPATH}/Startup
ln -fs $SRC /Applications/Adobe\ Illustrator\ CC\ 2018/Startup\ Scripts
echo $SRC

SRC=${SCRIPTPATH}/Scripts
echo $SRC
ln -fs $SRC /Applications/Adobe\ Illustrator\ CC\ 2018/Presets.localized/en_US/Scripts
