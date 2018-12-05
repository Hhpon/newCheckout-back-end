let express = require('express');

let app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        // res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

app.post("/checkout", function (req, res) {
    console.log(req.body);//打印前端请求的数据
    // let sum = req.body;
    var arr = [];
    arr[0] = '你是个注重细节的人，也会敏感地注意别人情绪的细节，所以你对他人是比较细致而有耐心的。只是有时候这种耐心用在自己身上却适得其反，你倒是对自己最容易没有耐心，有点逼自己达成目标。请记得时刻提醒自己，对自己好一点哦。';
    arr[1]='可以说你基本上对人对己都不太有耐心，比较不喜欢等待，也不喜欢别人磨叽。所以等红灯时，你总是急着第一个穿越。虽然有时候你这个特点，能让你比别人反应更快，也较有效率，但也会让你错过需要耐心的人和事。';
    arr[2]='你对别人会使用先隐忍，然后爆发的模式。一开始会用一些耐心，但不会太久，如果踏过你忍耐的底线，就会闹情绪了。你不喜欢别人急迫地对你说话，也不喜欢被逼着做事，这是因为你对自己的耐心倒是比较充足的。';
    arr[3]='你的耐心来源于你的内疚感，因为一旦你对别人急躁，你就会因自己沉不住气而自责，所以你会要求自己耐心一些。其实有的时候大可以放轻松一些，即使不是那么耐心，也是真实的性情表现哦。';
    arr[4]='你非常的友好，待人热情。是狂热的"聚会动物"， 哪里有刺激和有趣的活动，就出现在哪里，乐于成为人们注目的焦点，并享受来自于此的仰慕、认可和恭维。红色性格的人以快乐为导向。红色的你宁愿在与客户共进午餐时唠嗑，也不愿呆在办公室中工作。';
    arr[5]='你很擅长分析、持久稳固、是讲求系统性的人群，享受解决问题的乐趣，对实质的关注胜过形式，喜欢完美的过程并追求切实的结果。';
    arr[6]='你常常会被两个基本需求所驱使： 控制和目标。你是以目的为导向的野心家。当人们和形势都在你的掌控之下时，就是你的内心获得极度快感的时候。你想要完成许多事情，因此你从不把焦点集中在对达成最终结果毫无意义的事上面。';
    arr[7]='你是助人和富有教养的个体，是最以人际关系为导向的，是优秀的聆听者、非常投入的朋友和忠诚的职员。你的不拘小节使自己平易近人并且和蔼可亲。你发展着能互相帮助和相互依赖的人际关系网络，是绝好的公司团队成员（团队的合作者）。';
    arr[8]='你一直追逐梦想，有着不可思议的能力能够让别人和他一起实现梦想，有非常强的说服能力。一直寻求别人对自己的成就给予赞扬。同时你又是很有创意的人，思维敏捷。而你的劣势是，会被人认为是主观的、鲁莽的、易冲动的。';
    arr[9]='你是一个很好的问题解决者，但同时又是一个并不果断的决策者。当需要作决策时，往往为了收集数据耽误了时间，经常性被你引以为豪的口头禅是：“你不可能只掌握一半的数据就做出一项重要的决定吧。”然而你的劣势是，会被认为是有距离的、挑剔的，和严肃的。';
    arr[10]='你非常的友好，待人热情。是狂热的"聚会动物"， 哪里有刺激和有趣的活动，就出现在哪里，乐于成为人们注目的焦点，并享受来自于此的仰慕、认可和恭维。红色性格的人以快乐为导向。红色的你宁愿在与客户共进午餐时唠嗑，也不愿呆在办公室中工作。';

    function sendNum(arr){
        return arr[Math.round(Math.random())]
    }
    sendNum(arr);
    res.send(sendNum(arr));
    // loveWall.create(sum, function (err, docs) {
    //     console.log(docs);
    // })
    // loveWall.find(function (err, docs) {
    //     console.log(docs);
    //     res.send(sendNum(arr));
    // })
})


app.listen(3003, function () {
    console.log('服务器正在监听3000端口')
})