// 文档地址：https://nodejs.cn/en/learn/asynchronous-work/asynchronous-flow-control

function getSong() {
    let _song = "";
    for (let i = 100; i > 0; i--) {
        _song += `${i} beers on the wall, you take one down and pass it around, ${i - 1} bottles of beer on the wall\n`;
        
        if(i === 1) {
            _song += "Hey let's get some more beer";
        }
    }
    return _song;
}

function singSong(_song) {
    if(!_song) throw new Error("song is '' empty.");
    console.log(_song);
}

const song = getSong();
singSong(song);