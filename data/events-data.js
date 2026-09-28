// events-data.js
// 赛事数据文件 — 由自动化脚本更新，也可手动编辑
// 网页版 (calendar.html) 和移动版 (mobile.html) 均引用此文件
// 更新时间: 2026-09-28
// 覆盖范围：广东（主体）+ 周边省份（福建/广西/湖南/江西/海南/香港，note 以 🌏周边 标注）
// 信源：最酷 zuicool / 朗途体育 / 第一赛道 / 赛客Geexek / 政府门户 / 官方微信公众号
// 规则：仅保留比赛日 >= 2026-09-28 的赛事；月份待定用 YYYY-MM-00 占位

window.EVENTS = [
  // === 2026年10月 ===
  {id:52, name:"2026国际垂直马拉松巡回赛珠海珠峰科创中心站", date:"2026-10-17", type:"roadrun",  city:"珠海",   loc:"斗门·珠峰科创中心（井岸镇珠峰大道）",        deadline:"2026-10-08 12:00",  link:"https://zuicool.com/event/26289", source:"最酷", note:"垂直马拉松·楼宇登高"},
  {id:53, name:"2026广东（连山）越野赛",                     date:"2026-10-18", type:"trailrun", city:"清远",   loc:"连山壮族瑶族自治县·连山文化广场",            deadline:"2026-09-30 18:00",  link:"https://zuicool.com/event/85856", source:"最酷", note:"🔴即将截止"},
  {id:54, name:"“霞客行·双世遗”FHFN·2026泰宁山水漫跑",       date:"2026-10-24", type:"roadrun",  city:"三明",   loc:"福建 三明市 泰宁县 市民广场（县政府广场）",  deadline:"2026-10-08 18:00",  link:"https://zuicool.com/event/81560", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:158, name:"2026户外特工·广州山野小勇士赛岭头站",       date:"2026-10-24", type:"familyrun", city:"广州",   loc:"黄埔区·黄埔红岭头红茶创意园",                deadline:"待公布",            link:"https://mp.weixin.qq.com/s/hf1xFbQWnQl12B9P_57PMg", source:"广州山野挑战赛", note:"🧒亲子/青少年·山野探索10km+山野同行6km·约300人"},
  {id:55, name:"2026上杭中央红色交通线越野赛（溪口站）",     date:"2026-10-25", type:"trailrun", city:"龙岩",   loc:"福建 龙岩市 上杭县 溪口镇厚德公园",          deadline:"2026-09-20 16:00",  link:"https://zuicool.com/event/79725", source:"最酷·0927", note:"🌏周边｜报名已截止"},
  {id:56, name:"嘉华2026巽寮湾半岛跑山赛",                   date:"2026-10-25", type:"trailrun", city:"惠州",   loc:"惠东·金海湾嘉华度假酒店沙滩（近磨子石公园）", deadline:"2026-09-30 23:59",  link:"https://zuicool.com/event/20967", source:"最酷", note:"🔴即将截止"},
  {id:57, name:"“霞路相逢 双世泰马”2026泰宁半程马拉松",      date:"2026-10-25", type:"marathon", city:"三明",   loc:"福建 三明市 泰宁县 市民广场（县政府广场）",  deadline:"2026-09-16 17:00",  link:"https://zuicool.com/event/96681", source:"最酷·0927", note:"🌏周边｜报名已截止"},
  {id:58, name:"2026广东环云开山越野赛",                     date:"2026-10-25", type:"trailrun", city:"茂名",   loc:"信宜·平塘镇马安村广场 / 钱排镇李花谷",       deadline:"2026-09-30 23:59",  link:"https://zuicool.com/event/45459", source:"最酷", note:"🔴即将截止"},
  {id:59, name:"2026户外特工第八届广州山野挑战赛岭头站",     date:"2026-10-25", type:"trailrun", city:"广州",   loc:"黄埔·红岭头红茶创意园岭头古村",             deadline:"2026-10-05 23:59",  link:"https://zuicool.com/event/88659", source:"最酷"},
  {id:60, name:"2026福建宁德屏南第六届“茶盐古道”40公里荒野挑战赛", date:"2026-10-25", type:"trailrun", city:"宁德", loc:"福建 宁德市 屏南县 寿山乡寿山村文化广场",    deadline:"2026-10-10 18:00",  link:"https://zuicool.com/event/62777", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:61, name:"2026中国田径协会10公里精英赛（泉州·丰泽）",   date:"2026-10-25", type:"roadrun",  city:"泉州",   loc:"福建 泉州市 丰泽区 井十洲城",                deadline:"2026-10-07 18:00",  link:"https://zuicool.com/event/14503", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:62, name:"2026第五届福建太姥山洞道穿越挑战赛",         date:"2026-10-25", type:"trailrun", city:"宁德",   loc:"福建 宁德市 福鼎市 太姥山景区",              deadline:"2026-10-12 18:00",  link:"https://zuicool.com/event/93721", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:63, name:"2026 WSE 10KM OPEN 顺德站",                 date:"2026-10-25", type:"roadrun",  city:"佛山",   loc:"顺德区·德胜滨水运动公园",                    deadline:"2026-10-15 23:59",  link:"https://zuicool.com/event/80786", source:"最酷"},
  {id:159, name:"2026年广东（清城）第四届横渡北江活动",       date:"2026-10-25", type:"openwater", city:"清远",   loc:"清城区·北江（凤城广场→江滨公园众乐广场 约1600m）", deadline:"先报先得",          link:"https://mp.weixin.qq.com/s/JaKu8iZ0Qo8d_p16Bxhk4g", source:"广东动人/省冬泳协会", note:"畅游组1.6km ¥138·约2500人·10/11 00:00后不可退费"},
  {id:64, name:"2026 WSE 10KM OPEN 惠州站",                 date:"2026-10-31", type:"roadrun",  city:"惠州",   loc:"惠城区·惠州桃花源园区",                      deadline:"2026-10-19 23:59",  link:"https://zuicool.com/event/39137", source:"最酷"},
  {id:65, name:"2026香港狂野 HK WILD",                      date:"2026-10-31", type:"trailrun", city:"香港",   loc:"中国香港 大埔头游乐场",                      deadline:"2026-09-30 23:59",  link:"https://zuicool.com/event/59206", source:"最酷·0927", note:"🌏周边｜香港"},
  {id:66, name:"2026江湖禅道明月山超级山径赛",               date:"2026-10-31", type:"trailrun", city:"宜春",   loc:"江西 宜春市 袁州区 明月山温泉风景名胜区",     deadline:"2026-10-01 23:59",  link:"https://zuicool.com/event/32422", source:"最酷·0927", note:"🌏周边｜江西"},
  {id:67, name:"2026 Salt南香山越野训练赛",                  date:"2026-10-31", type:"trailrun", city:"广州",   loc:"增城区·永宁街道 南香山森林公园",             deadline:"2026-10-25 23:59",  link:"https://zuicool.com/event/48445", source:"最酷", note:"Salt盐团系列"},
  {id:68, name:"2026桂平半程马拉松",                         date:"2026-10-00", type:"marathon", city:"贵港",   loc:"广西 贵港市 桂平市",                          deadline:"待公布",            link:"https://zuicool.com/event/27066", source:"最酷·0927", note:"🌏周边｜日期待公布"},

  // === 2026年11月 ===
  {id:164, name:"2026广东万里碧道·肇庆砚阳湖铁人三项赛",     date:"2026-11-00", type:"triathlon", city:"肇庆",   loc:"肇庆新区·砚阳湖公园",                          deadline:"待公布",            link:"https://www.ctsa.org.cn/",                  source:"铁三赛历（待官宣）", note:"未正式官宣，往年11月下旬举办；关注肇庆市文广旅体局" },
  {id:69, name:"元炁山泉2026广州羊城挑战赛",                 date:"2026-11-01", type:"roadrun",  city:"广州",   loc:"番禺·岭南印象园东门",                        deadline:"2026-10-17 14:00",  link:"https://zuicool.com/event/22005", source:"最酷", note:"路跑/趣味赛"},
  {id:70, name:"2026美的顺德半程马拉松",                     date:"2026-11-01", type:"marathon", city:"佛山",   loc:"顺德区·北滘门广场",                          deadline:"2026-08-31 22:00",  link:"https://zuicool.com/event/42968", source:"最酷", note:"报名已截止"},
  {id:71, name:"2026第三届肇庆100越野赛",                    date:"2026-11-07", type:"trailrun", city:"肇庆",   loc:"鼎湖区·鼎湖山",                              deadline:"待公布",            link:"https://zuicool.com/event/63760", source:"最酷"},
  {id:72, name:"2026中山翠亨新区半程马拉松",                 date:"2026-11-08", type:"marathon", city:"中山",   loc:"中山·翠亨新区",                              deadline:"待公布",            link:"https://zuicool.com/event/37616", source:"最酷/官宣", note:"已官宣定档，报名即将启动"},
  {id:73, name:"2026阳山秦汉古道·莫六公山野赛",              date:"2026-11-08", type:"trailrun", city:"清远",   loc:"阳山县·阳城镇水口文化广场",                  deadline:"2026-09-30 23:59",  link:"https://zuicool.com/event/94101", source:"最酷", note:"🔴即将截止"},
  {id:74, name:"2026环跑粤径越野联赛廉江站",                 date:"2026-11-08", type:"trailrun", city:"湛江",   loc:"廉江市·塘蓬镇上山民族村（33号风车公路）",     deadline:"2026-10-07 12:00",  link:"https://zuicool.com/event/63443", source:"最酷"},
  {id:75, name:"2026广州黄埔越野赛",                         date:"2026-11-08", type:"trailrun", city:"广州",   loc:"黄埔区·长岭国家登山健身步道",                deadline:"2026-10-08 18:00",  link:"https://zuicool.com/event/36940", source:"最酷"},
  {id:76, name:"2026 WSE 10KM OPEN 广州站",                 date:"2026-11-14", type:"roadrun",  city:"广州",   loc:"花都区·花都湖湿地公园",                      deadline:"2026-11-02 23:59",  link:"https://zuicool.com/event/62889", source:"最酷"},
  {id:77, name:"“农行杯”第十七届穿越丹霞山50公里徒步赛",     date:"2026-11-14", type:"trailrun", city:"韶关",   loc:"仁化县·丹霞山南门（阅丹公路）",              deadline:"待公布",            link:"https://m.51sai.com/16446/des",   source:"我要赛/韶关文旅", note:"徒步·穿越43km/欢乐组/亲子组"},
  {id:78, name:"2026黄埔知识城越野赛暨户外特工广州山野挑战赛知识城站", date:"2026-11-15", type:"trailrun", city:"广州", loc:"黄埔区·九龙坊古村文创街区",              deadline:"2026-10-11 23:59",  link:"https://zuicool.com/event/81550", source:"最酷"},
  {id:79, name:"2026环丹霞山自行车赛",                       date:"2026-11-15", type:"cycling",  city:"韶关",   loc:"仁化县·丹霞山",                              deadline:"待公布",            link:"https://zuicool.com/events",      source:"韶关文旅/官宣", note:"已定档，报名待公布"},
  {id:80, name:"2026桂林马拉松",                             date:"2026-11-15", type:"marathon", city:"桂林",   loc:"广西 桂林市 桂林中心广场",                    deadline:"2026-09-29 18:00",  link:"https://zuicool.com/event/90278", source:"最酷·0927", note:"🌏周边｜🔴即将截止"},
  {id:81, name:"长沙银行·2026长沙马拉松",                    date:"2026-11-15", type:"marathon", city:"长沙",   loc:"湖南 长沙市 杜甫江阁",                        deadline:"2026-08-11 17:00",  link:"https://zuicool.com/event/47412", source:"最酷·0927", note:"🌏周边｜报名已截止"},
  {id:82, name:"2026宁都欢乐跑",                             date:"2026-11-21", type:"roadrun",  city:"赣州",   loc:"江西 赣州市 宁都县 宁都体育中心",             deadline:"2026-10-10 23:59",  link:"https://zuicool.com/event/59237", source:"最酷·0927", note:"🌏周边｜江西"},
  {id:83, name:"2026崇义100越野赛",                          date:"2026-11-21", type:"trailrun", city:"赣州",   loc:"江西 赣州市 崇义县 三立广场",                 deadline:"待公布",            link:"https://zuicool.com/event/46856", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:84, name:"第九届漓江越野跑",                           date:"2026-11-21", type:"trailrun", city:"桂林",   loc:"广西 桂林市 阳朔县 兴坪古镇",                 deadline:"2026-09-30 23:59",  link:"https://zuicool.com/event/14689", source:"最酷·0927", note:"🌏周边｜🔴即将截止"},
  {id:85, name:"2026武夷山马拉松",                           date:"2026-11-22", type:"marathon", city:"南平",   loc:"福建 南平市 武夷山市 武夷广场",               deadline:"2026-09-30 18:00",  link:"https://zuicool.com/event/98513", source:"最酷·0927", note:"🌏周边｜🔴即将截止"},
  {id:86, name:"2026 WSE 10KM OPEN 珠海站",                 date:"2026-11-22", type:"roadrun",  city:"珠海",   loc:"香洲区·格力海岸公园",                        deadline:"2026-11-10 13:00",  link:"https://zuicool.com/event/39209", source:"最酷"},
  {id:87, name:"2026佛山市环两江稻田马拉松",                 date:"2026-11-22", type:"marathon", city:"佛山",   loc:"高明区·苏村（高明体育中心）",                deadline:"2026-10-16 18:00",  link:"https://zuicool.com/event/84669", source:"最酷"},
  {id:88, name:"2026 MERRELL厦门山海越野赛",                 date:"2026-11-22", type:"trailrun", city:"厦门",   loc:"福建 厦门市 思明区 “一国两制”沙滩",           deadline:"2026-10-15 17:30",  link:"https://zuicool.com/event/12955", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:89, name:"霞路相逢·三山五岳 拓路者2026南岳衡山越野赛",  date:"2026-11-22", type:"trailrun", city:"衡阳",   loc:"湖南 衡阳市 南岳区 万寿广场",                 deadline:"2026-10-20 17:00",  link:"https://zuicool.com/event/80201", source:"最酷·0927", note:"🌏周边｜湖南"},
  {id:90, name:"2026防城港马拉松",                           date:"2026-11-22", type:"marathon", city:"防城港", loc:"广西 防城港市 港口区 北部湾海洋文化公园",     deadline:"2026-10-14 16:00",  link:"https://zuicool.com/event/19686", source:"最酷·0927", note:"🌏周边｜广西"},
  {id:91, name:"2026福建永定土楼半程马拉松",                 date:"2026-11-22", type:"marathon", city:"龙岩",   loc:"福建 龙岩市 永定区 湖坑土楼风情街",           deadline:"2026-10-31 18:00",  link:"https://zuicool.com/event/46431", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:92, name:"拓路者2026闽侯县白沙趣野山径赛暨榄橙美食体验季", date:"2026-11-22", type:"trailrun", city:"福州", loc:"福建 福州市 闽侯县 白沙镇白沙市民公园",      deadline:"2026-09-25 22:00",  link:"https://zuicool.com/event/67809", source:"最酷·0927", note:"🌏周边｜报名已截止"},
  {id:93, name:"2026湖南江永半程马拉松",                     date:"2026-11-22", type:"marathon", city:"永州",   loc:"湖南 永州市 江永县",                          deadline:"待公布",            link:"https://zuicool.com/event/33167", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:94, name:"2026 FUGA训练赛东莞年度总决赛",              date:"2026-11-22", type:"trailrun", city:"东莞",   loc:"大岭山森林公园主入口",                        deadline:"2026-11-10 23:59",  link:"https://zuicool.com/event/35462", source:"最酷"},
  {id:95, name:"2026宁都红色半程马拉松",                     date:"2026-11-22", type:"marathon", city:"赣州",   loc:"江西 赣州市 宁都县 宁都体育中心",             deadline:"2026-10-09 23:59",  link:"https://zuicool.com/event/71328", source:"最酷·0927", note:"🌏周边｜江西"},
  {id:96, name:"2026德文厦门工学院奥林匹克跑赛",             date:"2026-11-22", type:"roadrun",  city:"厦门",   loc:"福建 厦门市 集美区 厦门工学院一号田径场",     deadline:"2026-08-31 23:59",  link:"https://zuicool.com/event/97787", source:"最酷·0927", note:"🌏周边｜报名已截止"},
  {id:97, name:"2026海南东方半程马拉松",                     date:"2026-11-22", type:"marathon", city:"东方",   loc:"海南 东方市 东方市文化广场东门",              deadline:"2026-09-30 17:00",  link:"https://zuicool.com/event/33386", source:"最酷·0927", note:"🌏周边｜🔴即将截止"},
  {id:160, name:"第十二届广州户外运动节登山健身大会·白云50跑山赛", date:"2026-11-22", type:"trailrun", city:"广州", loc:"白云区·帽峰山森林公园",                      deadline:"2026-10-30 17:00",  link:"https://mp.weixin.qq.com/s/WYOsdE7vQGmDdQANmo5uXA", source:"朗途体育", note:"20km¥369/10km¥269/6km登高¥99·ITRA精英免费通道"},
  {id:161, name:"2026广东万里碧道·汕尾品清湖铁人三项赛",     date:"2026-11-22", type:"triathlon", city:"汕尾",   loc:"汕尾市·品清湖（红树林沙滩）",                  deadline:"先报先得",          link:"https://mp.weixin.qq.com/s?__biz=MzA3MjEwMjA0NA==&mid=2653153128&idx=1&sn=a4ca90b65fa6eb67931e25d5402defea", source:"第一赛道", note:"9/15 10:00开报·额满即止·中国大陆最大滨海潟湖游泳赛道"},
  {id:98, name:"2026亚太越野跑锦标赛",                       date:"2026-11-24", type:"trailrun", city:"南平",   loc:"福建 南平市 武夷山市",                        deadline:"待公布",            link:"https://zuicool.com/event/70870", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:99, name:"2026第十一届大武夷超级山径赛",               date:"2026-11-28", type:"trailrun", city:"南平",   loc:"福建 南平市 武夷山市 三姑度假区月映武夷剧场", deadline:"2026-05-10 23:59",  link:"https://zuicool.com/event/35539", source:"最酷·0927", note:"🌏周边｜报名已截止"},
  {id:100, name:"2026贺州姑婆山越野赛",                      date:"2026-11-28", type:"trailrun", city:"贺州",   loc:"广西 贺州市 平桂区 姑婆山旅游度假区",         deadline:"2026-11-05 23:59",  link:"https://zuicool.com/event/72712", source:"最酷·0927", note:"🌏周边｜广西"},
  {id:101, name:"2026广东从化一百越野赛",                    date:"2026-11-28", type:"trailrun", city:"广州",   loc:"从化区·良口镇生态设计小镇（共青路）",         deadline:"2026-10-10 23:59",  link:"https://zuicool.com/event/54272", source:"最酷", note:"广州从化一百系列"},
  {id:102, name:"2026井冈山越野赛",                          date:"2026-11-28", type:"trailrun", city:"吉安",   loc:"江西 吉安市 井冈山市 井冈山景区游客服务中心", deadline:"2026-10-20 23:59",  link:"https://zuicool.com/event/94253", source:"最酷·0927", note:"🌏周边｜江西"},
  {id:103, name:"2026仙艺杯·仙游马拉松",                    date:"2026-11-29", type:"marathon", city:"莆田",   loc:"福建 莆田市 仙游县 中国古典公益博览城",       deadline:"2026-10-08 17:00",  link:"https://zuicool.com/event/40740", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:104, name:"2026 WSE 10KM OPEN 海口站",                date:"2026-11-29", type:"roadrun",  city:"海口",   loc:"海南 海口市 龙华区 FUNBAY自在湾",             deadline:"2026-11-15 13:00",  link:"https://zuicool.com/event/46010", source:"最酷·0927", note:"🌏周边｜海南"},
  {id:105, name:"2026陵水半程马拉松",                        date:"2026-11-29", type:"marathon", city:"陵水",   loc:"海南 陵水黎族自治县",                         deadline:"待公布",            link:"https://zuicool.com/event/83352", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:106, name:"2026 TianYue天岳幕阜山·绿水青山越野挑战赛",  date:"2026-11-29", type:"trailrun", city:"岳阳",   loc:"湖南 岳阳市 平江县 天岳幕阜山游客服务中心",   deadline:"2026-10-05 17:00",  link:"https://zuicool.com/event/29105", source:"最酷·0927", note:"🌏周边｜湖南"},
  {id:107, name:"2026婺源马拉松",                            date:"2026-11-29", type:"marathon", city:"上饶",   loc:"江西 上饶市 婺源县",                          deadline:"待公布",            link:"https://zuicool.com/event/41904", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:108, name:"2026中国田径大众达标系列赛暨“极速宝安”城市超跑", date:"2026-11-29", type:"roadrun", city:"深圳", loc:"宝安区·宝安体育中心体育场",                  deadline:"2026-11-15 18:00",  link:"https://zuicool.com/event/46913", source:"最酷", note:"田协大众达标系列赛"},
  {id:109, name:"2026肇庆马拉松",                            date:"2026-11-29", type:"marathon", city:"肇庆",   loc:"端州区·七星岩牌坊广场",                      deadline:"2026-10-23 18:00",  link:"https://zuicool.com/event/38648", source:"最酷", note:"抽签11月上旬"},
  {id:110, name:"2026阳江海陵岛马拉松",                      date:"2026-11-29", type:"marathon", city:"阳江",   loc:"江城区·海陵岛",                              deadline:"待公布",            link:"https://zuicool.com/event/37382", source:"最酷", note:"报名未启动"},
  {id:111, name:"龙江岁月·2026漳州半程马拉松",               date:"2026-11-29", type:"marathon", city:"漳州",   loc:"福建 漳州市 龙海区 漳州市博物馆",             deadline:"2026-10-16 18:00",  link:"https://zuicool.com/event/28718", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:112, name:"2026惠州马拉松",                            date:"2026-11-29", type:"marathon", city:"惠州",   loc:"惠州市",                                      deadline:"待公布",            link:"https://zuicool.com/event/65090", source:"最酷", note:"A类·暂定11/29，报名未启动"},
  {id:162, name:"仙乐健康·2026第八届汕头南澳越野挑战赛（澳野）", date:"2026-11-29", type:"trailrun", city:"汕头",  loc:"南澳县·后宅镇祥云广场（南澳岛，广东唯一海岛县）", deadline:"2026-10-31 23:59",  link:"https://mp.weixin.qq.com/s/j3EwqY-JA6XY6q_2K1hmLg", source:"赛客Geexek/汕头铁三协会", note:"望霞40km/观澜28km/逐秋10km·ITRA认证·1800人·早鸟10/8止"},
  {id:113, name:"2026东莞松山湖马拉松",                      date:"2026-11-00", type:"marathon", city:"东莞",   loc:"东莞松山湖",                                  deadline:"待公布",            link:"https://zuicool.com/event/11596", source:"最酷", note:"日期待公布"},
  {id:114, name:"2026虎门半程马拉松",                        date:"2026-11-00", type:"marathon", city:"东莞",   loc:"东莞虎门",                                    deadline:"待公布",            link:"https://zuicool.com/event/96969", source:"最酷", note:"A类·日期待公布"},
  {id:115, name:"2026揭阳马拉松",                            date:"2026-11-00", type:"marathon", city:"揭阳",   loc:"揭阳市",                                      deadline:"待公布",            link:"https://zuicool.com/event/95805", source:"最酷", note:"日期待公布"},
  {id:116, name:"2026百色半程马拉松",                        date:"2026-11-00", type:"marathon", city:"百色",   loc:"广西 百色市",                                  deadline:"待公布",            link:"https://zuicool.com/event/98749", source:"最酷·0927", note:"🌏周边｜日期待公布"},

  // === 2026年12月 ===
  {id:117, name:"2026 NORTHLAND诺诗兰阳朔100徒步越野赛",     date:"2026-12-05", type:"trailrun", city:"桂林",   loc:"广西 桂林市 阳朔县 阳朔旅游停车场",           deadline:"2026-06-19 23:59",  link:"https://zuicool.com/event/63199", source:"最酷·0927", note:"🌏周边｜报名已截止"},
  {id:118, name:"2026深圳马拉松 🥇",                         date:"2026-12-06", type:"marathon", city:"深圳",   loc:"福田区·深圳市民中心",                        deadline:"2026-09-28 17:00",  link:"https://zuicool.com/event/79945", source:"最酷", note:"🔴今日17:00预报名截止，抽签10/16-10/22缴费"},
  {id:119, name:"2026广州玩野白云50越野赛",                  date:"2026-12-06", type:"trailrun", city:"广州",   loc:"白云区·白云山西门广场",                      deadline:"2026-10-30 18:00",  link:"https://zuicool.com/event/97297", source:"最酷"},
  {id:120, name:"2026温氏食材云浮新兴半程马拉松",            date:"2026-12-06", type:"marathon", city:"云浮",   loc:"新兴县·惠能广场",                            deadline:"2026-08-05 10:25",  link:"https://zuicool.com/event/57234", source:"最酷", note:"报名已截止"},
  {id:121, name:"2026泉州晋江马拉松",                        date:"2026-12-06", type:"marathon", city:"泉州",   loc:"福建 泉州市 晋江市",                          deadline:"待公布",            link:"https://zuicool.com/event/10951", source:"最酷·0927", note:"🌏周边｜C类·报名未启动"},
  {id:122, name:"2026盈趣科技厦门海沧半程马拉松",            date:"2026-12-06", type:"marathon", city:"厦门",   loc:"福建 厦门市 海沧区 兴港路角嵩路路口",         deadline:"2026-10-08 17:00",  link:"https://zuicool.com/event/80430", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:123, name:"2026澄迈半程马拉松",                        date:"2026-12-06", type:"marathon", city:"澄迈",   loc:"海南 澄迈县 老城科技新城管理委员会",          deadline:"2026-09-30 17:00",  link:"https://zuicool.com/event/89590", source:"最酷·0927", note:"🌏周边｜🔴即将截止"},
  {id:124, name:"2026珠海马拉松",                            date:"2026-12-06", type:"marathon", city:"珠海",   loc:"珠海市",                                      deadline:"待公布",            link:"https://zuicool.com/event/80085", source:"最酷", note:"已定档12/6，报名未公布"},
  {id:125, name:"2026湛江半程马拉松赛",                      date:"2026-12-06", type:"marathon", city:"湛江",   loc:"霞山区·湛江时代广场（海滨大道南）",          deadline:"2026-10-28 18:00",  link:"https://zuicool.com/event/71394", source:"最酷", note:"新增收录"},
  {id:163, name:"2026广东万里碧道·佛山三水云东海铁人三项赛", date:"2026-12-06", type:"triathlon", city:"佛山",   loc:"三水区·云东海国家湿地公园",                    deadline:"待公布",            link:"https://www.foshan.gov.cn/zwgk/zwdt/wqdt/ssq/content/post_7224638.html", source:"佛山市政府/官宣", note:"已定档12/6（云铁3.0），报名未公布"},
  {id:126, name:"2026琼海博鳌马拉松",                        date:"2026-12-12", type:"marathon", city:"琼海",   loc:"海南 琼海市",                                  deadline:"待公布",            link:"https://zuicool.com/event/25040", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:127, name:"2026冲峰赛-广州香雪站",                     date:"2026-12-12", type:"trailrun", city:"广州",   loc:"黄埔区·萝岗香雪公园",                        deadline:"2026-09-30 18:00",  link:"https://zuicool.com/event/41338", source:"最酷", note:"🔴即将截止"},
  {id:128, name:"2026丹霞山马拉松",                          date:"2026-12-12", type:"marathon", city:"韶关",   loc:"仁化县·丹霞山",                              deadline:"待公布",            link:"https://zuicool.com/event/68035", source:"最酷/韶关文旅", note:"已定档12/12，报名未启动"},
  {id:129, name:"2026宁德马拉松",                            date:"2026-12-12", type:"marathon", city:"宁德",   loc:"福建 宁德市",                                  deadline:"待公布",            link:"https://zuicool.com/event/44039", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:130, name:"2026 WSE 10KM OPEN 桂林站",                date:"2026-12-13", type:"roadrun",  city:"桂林",   loc:"广西 桂林市 秀峰区 张家村傩文化展示馆",       deadline:"2026-11-30 23:59",  link:"https://zuicool.com/event/35270", source:"最酷·0927", note:"🌏周边｜广西"},
  {id:131, name:"2026武夷山马拉松（12/13场）",               date:"2026-12-13", type:"marathon", city:"南平",   loc:"福建 南平市 武夷山市",                        deadline:"待公布",            link:"https://zuicool.com/events",      source:"官方/0927", note:"🌏周边｜官方定档12/13，与11/22场为不同赛事"},
  {id:132, name:"第七届福州永泰大青云越野赛",                 date:"2026-12-19", type:"trailrun", city:"福州",   loc:"福建 福州市 永泰县 赤壁景区",                 deadline:"2026-08-28 23:59",  link:"https://zuicool.com/event/96146", source:"最酷·0927", note:"🌏周边｜报名已截止"},
  {id:133, name:"2026深圳南山半程马拉松",                    date:"2026-12-20", type:"marathon", city:"深圳",   loc:"南山区",                                      deadline:"待公布",            link:"https://zuicool.com/event/98403", source:"最酷", note:"已定档12/20，报名未公布"},
  {id:134, name:"2026特步厦门环东半程马拉松",                date:"2026-12-20", type:"marathon", city:"厦门",   loc:"福建 厦门市 同安区 美峰体育公园",             deadline:"2026-10-06 10:00",  link:"https://zuicool.com/event/62623", source:"最酷·0927", note:"🌏周边｜福建"},
  {id:135, name:"2026广汽丰田广州马拉松赛 🥇",               date:"2026-12-20", type:"marathon", city:"广州",   loc:"天河区·天河体育中心",                        deadline:"2026-09-11 18:00",  link:"https://zuicool.com/event/16059", source:"最酷", note:"报名已截止（9/2-9/11），12/20开跑"},
  {id:136, name:"2026年福建闽侯第十二届五虎山越野赛",        date:"2026-12-20", type:"trailrun", city:"福州",   loc:"福建 福州市 闽侯县 五虎山国家森林公园东入口", deadline:"待公布",            link:"https://zuicool.com/event/15267", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:137, name:"2026柳州半程马拉松",                        date:"2026-12-20", type:"marathon", city:"柳州",   loc:"广西 柳州市",                                  deadline:"待公布",            link:"https://zuicool.com/event/12477", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:138, name:"2026海南儋州马拉松",                        date:"2026-12-20", type:"marathon", city:"儋州",   loc:"海南 儋州市 洋浦滨海文化广场",                deadline:"2026-10-30 23:59",  link:"https://zuicool.com/event/89955", source:"最酷·0927", note:"🌏周边｜海南"},
  {id:139, name:"2026江门马拉松",                            date:"2026-12-20", type:"marathon", city:"江门",   loc:"蓬江区·五邑华侨广场",                        deadline:"2026-10-31 18:00",  link:"https://zuicool.com/event/18807", source:"最酷"},
  {id:140, name:"2026汕头马拉松",                            date:"2026-12-20", type:"marathon", city:"汕头",   loc:"海滨路粤东信息大厦路段",                      deadline:"2026-09-28 20:00",  link:"https://zuicool.com/event/91761", source:"最酷", note:"🔴今日20:00报名截止"},
  {id:141, name:"2026南宁马拉松",                            date:"2026-12-20", type:"marathon", city:"南宁",   loc:"广西 南宁市 青秀区 民族广场",                 deadline:"待公布",            link:"https://zuicool.com/event/86520", source:"最酷·0927", note:"🌏周边｜报名多次延期，仍未启动"},
  {id:142, name:"2026 FUGA深圳100跑山赛暨TORX®中国站",       date:"2026-12-25", type:"trailrun", city:"深圳",   loc:"盐田区·大梅沙海滨公园大草坪",                deadline:"2026-09-07 10:01",  link:"https://zuicool.com/event/13375", source:"最酷", note:"报名已截止"},
  {id:143, name:"2026橘子洲红色半程马拉松",                  date:"2026-12-26", type:"marathon", city:"长沙",   loc:"湖南 长沙市 岳麓区",                          deadline:"待公布",            link:"https://zuicool.com/event/90926", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:144, name:"2026梅州马拉松",                            date:"2026-12-27", type:"marathon", city:"梅州",   loc:"梅州市",                                      deadline:"待公布",            link:"https://zuicool.com/event/70360", source:"最酷", note:"报名未启动"},
  {id:145, name:"2026漳州华安土楼半程马拉松",                date:"2026-12-27", type:"marathon", city:"漳州",   loc:"福建 漳州市 华安县",                          deadline:"待公布",            link:"https://zuicool.com/event/93888", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:146, name:"2026横琴人寿保险横琴马拉松",                date:"2026-12-27", type:"marathon", city:"珠海",   loc:"横琴粤澳深度合作区",                          deadline:"2026-09-12 22:00",  link:"https://zuicool.com/event/23165", source:"最酷", note:"报名已截止"},
  {id:147, name:"2026河源万绿湖马拉松",                      date:"2026-12-27", type:"marathon", city:"河源",   loc:"河源市·万绿湖",                              deadline:"待公布",            link:"https://zuicool.com/event/37587", source:"最酷", note:"报名未启动"},
  {id:148, name:"2026 WSE 10KM OPEN 佛山站",                date:"2026-12-27", type:"roadrun",  city:"佛山",   loc:"南海区·文翰湖公园",                          deadline:"2026-12-15 13:00",  link:"https://zuicool.com/event/76264", source:"最酷"},
  {id:149, name:"2026莆田马拉松",                            date:"2026-12-27", type:"marathon", city:"莆田",   loc:"福建 莆田市",                                  deadline:"待公布",            link:"https://zuicool.com/event/26381", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:150, name:"2026海口马拉松",                            date:"2026-12-27", type:"marathon", city:"海口",   loc:"海南 海口市",                                  deadline:"待公布",            link:"https://zuicool.com/event/83246", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:151, name:"2026海南（三亚）马拉松",                    date:"2026-12-27", type:"marathon", city:"三亚",   loc:"海南 三亚市",                                  deadline:"待公布",            link:"https://zuicool.com/event/46298", source:"最酷·0927", note:"🌏周边｜报名未启动"},
  {id:152, name:"2026左海·福州马拉松",                      date:"2026-12-27", type:"marathon", city:"福州",   loc:"福建 福州市 鼓楼区 五一广场",                 deadline:"2026-09-19 17:00",  link:"https://zuicool.com/event/76249", source:"最酷·0927", note:"🌏周边｜报名已截止（抽签缴费）"},
  {id:153, name:"2026黄埔马拉松",                            date:"2026-12-31", type:"marathon", city:"广州",   loc:"黄埔区",                                      deadline:"待公布",            link:"https://zuicool.com/event/58617", source:"最酷", note:"部分来源称12/27，报名未启动"},
  {id:154, name:"2026赣州马拉松",                            date:"2026-12-00", type:"marathon", city:"赣州",   loc:"江西 赣州市",                                  deadline:"待公布",            link:"https://zuicool.com/event/98495", source:"最酷·0927", note:"🌏周边｜日期待公布"},
  {id:155, name:"2026玉林马拉松",                            date:"2026-12-00", type:"marathon", city:"玉林",   loc:"广西 玉林市",                                  deadline:"待公布",            link:"https://zuicool.com/event/58057", source:"最酷·0927", note:"🌏周边｜日期待公布"},

  // === 2027年1月 ===
  {id:156, name:"2027万和顺德容桂马拉松",                    date:"2027-01-03", type:"marathon", city:"佛山",   loc:"顺德区·容桂街道海骏达城",                    deadline:"2026-09-30 18:00",  link:"https://zuicool.com/event/60915", source:"最酷", note:"🔴即将截止"},
  {id:157, name:"渣打香港马拉松2027",                        date:"2027-01-17", type:"marathon", city:"香港",   loc:"中国香港",                                    deadline:"2026-09-20 23:59",  link:"https://www.hkmarathon.com",      source:"官方/0927", note:"🌏周边｜公众抽签已截止"},

  // === 日期待官宣（月份已定档） ===
  {id:165, name:"2026广东万里碧道·东莞南城碧玉湖铁人三项赛", date:"2026-12-00", type:"triathlon", city:"东莞",   loc:"南城街道·水濂山碧玉湖（东莞小九寨沟）",        deadline:"待公布",            link:"https://www.dg.gov.cn/dgncjd/gkmlpt/content/4/4487/post_4487161.html", source:"东莞市政府（待官宣）", note:"未正式官宣，2025年12/28举办过；关注东莞市铁人三项运动协会"}
];

// 类型配置（与日历页同步）
window.TYPE_CONFIG = {
  triathlon:  {label:"铁人三项", color:"#2196F3", cls:"triathlon"},
  openwater:  {label:"公开水域", color:"#00BCD4", cls:"openwater"},
  trailrun:   {label:"越野跑",   color:"#4CAF50", cls:"trailrun"},
  familyrun:  {label:"亲子跑",   color:"#FF9800", cls:"familyrun"},
  marathon:   {label:"马拉松",   color:"#F44336", cls:"marathon"},
  cycling:    {label:"骑行",     color:"#9C27B0", cls:"cycling"},
  roadrun:    {label:"路跑",     color:"#E91E63", cls:"roadrun"},
  orienteering:{label:"定向",     color:"#795548", cls:"orient"}
};

// 举办城市（广东主体 + 周边省区，用于日历页城市筛选）
window.CITY_LIST = ["广州","深圳","佛山","肇庆","韶关","清远","珠海","惠州","梅州","云浮","阳江","中山","东莞","河源","汕头","汕尾","江门","揭阳","茂名","湛江","厦门","泉州","福州","莆田","三明","龙岩","宁德","南平","漳州","桂林","贺州","柳州","南宁","玉林","百色","防城港","贵港","长沙","衡阳","岳阳","永州","南昌","赣州","宜春","上饶","吉安","海口","三亚","儋州","澄迈","琼海","陵水","东方","香港"];

// 省外城市：日历页城市筛选里合并为一个「省外」选项（这些城市不单独出筛选项）
window.OUT_PROVINCE_CITIES = ["厦门","泉州","福州","莆田","三明","龙岩","宁德","南平","漳州","桂林","贺州","柳州","南宁","玉林","百色","防城港","贵港","长沙","衡阳","岳阳","永州","南昌","赣州","宜春","上饶","吉安","海口","三亚","儋州","澄迈","琼海","陵水","东方","香港"];

// 兼容旧变量名
window.TYPE_MAP = window.TYPE_CONFIG;
