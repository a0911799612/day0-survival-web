// DAY0 知識原型文案，查核日期：2026-10-16。
// 書籍每本三頁；短文適合 12–15 歲閱讀。sources 是逐項引用對照。
export const DAY0_CONTENT = {
  intro: {
    eyebrow: 'DAY ZERO · FIELD STATION',
    title: '當日常暫停，從這裡開始。',
    text: '走進帳篷，翻開手冊、轉動電視、觀察工具。練習在陌生環境中，做出讓自己更安全的第一個決定。',
    hint: '點擊發亮的物件，開始探索。',
    audience: '給 12–15 歲的求生入門探索'
  },
  principle: {
    title: '333 原則',
    subtitle: '記住優先順序，比記住時間更重要。',
    note: '「3 小時、3 天、3 週」是粗略的求生記憶口訣，不是安全期限，也不是每個人都能撐過的時間。環境、健康與裝備會改變風險；遇到危險應及早求援。',
    pages: [
      {
        id: 'shelter', number: '01', marker: '3 小時', category: '遮蔽與保暖',
        title: '先讓身體保持溫暖。',
        lead: '風、雨與濕衣物，會讓身體更快失去熱量。',
        body: '天氣轉壞時，先穿上雨衣與保暖層，尋找安全的遮風避雨處。準備保暖毯與備用衣物，比等到寒冷時再找方法更可靠。',
        steps: ['確認周圍沒有落石、溪水暴漲等危險。', '使用備用衣物、雨具與遮蔽物。', '告知同行者狀況，及早尋求協助。'],
        takeaway: '先避開眼前危險，再整理裝備。', sources: ['essentials', 'stop']
      },
      {
        id: 'water', number: '02', marker: '3 天', category: '安全飲水',
        title: '別等口渴，才想到水。',
        lead: '出發前準備飲水，也把臨時延誤算進去。',
        body: '活動與炎熱環境會增加水分流失。先確認現有的安全飲水與補給方式；自然水源需要適當處理，不能只憑看起來清澈就判定能喝。',
        steps: ['檢查飲用水與可用的補給點。', '使用自己已學會操作的合適淨水設備。', '水量不足時及早告知同行者並求援。'],
        takeaway: '記得準備與補充水，不把「3 天」當成可以等待的期限。', sources: ['essentials']
      },
      {
        id: 'food', number: '03', marker: '3 週', category: '糧食與體力',
        title: '保留體力，帶上備用糧。',
        lead: '可直接食用的備用糧，能應付行程延誤。',
        body: '準備適合自己的常溫食物，留意保存期限與過敏原。陌生的果實、野菜或菇類，不能靠外觀猜測是否安全。',
        steps: ['出發前準備額外食物。', '確認還有多少食物與飲水。', '不採摘、不試吃不明植物。'],
        takeaway: '不要為了找食物，離開已確認安全的待援位置。', sources: ['essentials', 'plants', 'stop']
      }
    ]
  },
  terrains: [
    {id: 'mountain', channel: '01', title: '高山', english: 'MOUNTAIN', mood: '風，帶走的不只是溫度。', focus: '天候與保暖', text: '出發前確認天氣與路線，準備雨具、保暖層及備用衣物。天氣惡化或身體不舒服時，告知隊友，及早調整行程。', action: '今天先記住：不舒服要說，不勉強向前。', sources: ['stop', 'essentials']},
    {id: 'forest', channel: '02', title: '森林', english: 'FOREST', mood: '停下來，才看得清方向。', focus: '迷途與待援', text: '發現迷路，先停下、思考、觀察、規劃。無法確認原路時，在安全處等待援助；不要沿溪谷亂走，也別獨自離隊。', action: '今天先記住：STOP，停下來重新判斷。', sources: ['stop']},
    {id: 'city', channel: '03', title: '城市', english: 'CITY', mood: '熟悉的街道，也需要新的判斷。', focus: '地震與避難', text: '在室內遇到地震，先趴下、掩護、穩住，保護頭頸。避開窗戶與容易倒下的家具；待搖晃停止，再依現場狀況與指示行動。', action: '今天先記住：保護頭頸，抓穩掩護。', sources: ['earthquake']},
    {id: 'ocean', channel: '04', title: '海洋', english: 'OCEAN', mood: '靠近海，也要懂得保持距離。', focus: '水域與求援', text: '親水活動選擇合法、有救生設備與人員的場所，留意天氣與同伴。看見有人落水，先大聲呼救、聯絡救援，切勿貿然下水。', action: '今天先記住：救人之前，先保護自己。', sources: ['waterSafety']}
  ],
  notebook: {
    title: '求生技能筆記', subtitle: '觀察、辨識，再行動。',
    pages: [
      {id: 'plants', number: '01', category: '植物觀察', title: '認識，不等於可以食用。', lead: '相似的葉片，可能藏著不同的風險。', body: '把觀察當成紀錄：看葉形、葉脈與生長位置。即使看起來像熟悉的蔬菜，也不要自行採摘、食用，或拿來盛裝食物。', steps: ['用照片與筆記記錄。', '與可靠的圖鑑或老師討論。', '不確定的植物，不採、不食。'], takeaway: '這本筆記幫你觀察環境，不作為可食植物判定工具。', sources: ['plants']},
      {id: 'snakes', number: '02', category: '蛇類觀察', title: '保持距離，就是最好的開始。', lead: '不靠近、不捕捉，也不要為了拍照追趕。', body: '若被蛇咬，保持冷靜、減少活動並儘速就醫。安全情況下記住外觀即可；不要切開、吸吮、冰敷傷口，或緊綁肢體。', steps: ['告知同行者並求援。', '取下可能因腫脹而卡住的飾品。', '交由醫療人員評估處理。'], takeaway: '不要為了辨認蛇種，延誤送醫。', sources: ['snakes']},
      {id: 'knots', number: '03', category: '繩結練習', title: '從桌面上的一條繩開始。', lead: '先觀察繩路，再練習整理與固定小物。', body: '在老師或熟悉操作的成人陪同下，用短繩練習。每次完成後檢查繩路是否正確；本頁的互動只供認識繩結，不能用來判定承重安全。', steps: ['讓繩子平放，辨認兩端。', '跟著示意整理繩路。', '解開後，再慢慢練習一次。'], takeaway: '勿將練習繩用於攀爬、垂降、綁人或救援。', sources: [], isActivityInstruction: true}
    ]
  },
  tools: [
    {id: 'flashlight', name: '手電筒', english: 'FLASHLIGHT', instruction: '按下開關，讓視線亮起來。', description: '照明能幫助你看清環境，也能發出求援訊號。出發前檢查電量，帶上備用電池。', actionLabel: '切換照明', takeaway: '看清楚，再移動。', sources: ['essentials']},
    {id: 'compass', name: '指南針', english: 'COMPASS', instruction: '轉動盤面，觀察方向標記。', description: '指南針需要搭配地圖與定位判斷。出發前先學會操作；知道北方在哪裡，並不代表知道出口在哪裡。', actionLabel: '轉動指南針', takeaway: '此為方向辨識示意，沒有讀取裝置的真實方位。', sources: ['essentials']},
    {id: 'rope', name: '繩索', english: 'CORD', instruction: '依序查看繩路，練習整理。', description: '從桌面固定小物的練習開始，操作時由老師或熟悉操作的成人陪同。不要用練習繩承載人體重量。', actionLabel: '查看下一步', takeaway: '互動示意不是攀爬或救援操作教學。', sources: [], isActivityInstruction: true},
    {id: 'whistle', name: '求生哨', english: 'WHISTLE', instruction: '按下按鈕，體驗呼救節奏。', description: '需要求援時，利用聲音讓附近的人注意到你。先確認自己位於安全的位置，再使用哨子呼救。', actionLabel: '試吹哨子', takeaway: '網頁音效只供體驗，不能代替真正的求援裝備。', sources: ['stop']}
  ],
  sources: [
    {id: 'essentials', organization: '美國國家公園管理局', title: 'Ten Essentials', url: 'https://www.nps.gov/articles/10essentials.htm?prId=0009'},
    {id: 'stop', organization: '內政部', title: '登山迷途勿驚慌！牢記 STOP 口訣並求援', url: 'https://www.moi.gov.tw/News_Content.aspx?n=2&s=260664'},
    {id: 'plants', organization: '衛生福利部食品藥物管理署', title: '「芋」防食品中毒撇步，不食不用不明植物', url: 'https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&id=t622217'},
    {id: 'snakes', organization: '臺中榮民總醫院', title: '一朝被蛇咬，照護知多少', url: 'https://ihealth.vghtc.gov.tw/media/774'},
    {id: 'earthquake', organization: '交通部中央氣象署', title: '互動式地震避難指南', url: 'https://scweb.cwa.gov.tw/webdata/PDF/Earthquake_precautions/'},
    {id: 'waterSafety', organization: '臺南市政府消防局', title: '救溺五步、防溺十招', url: 'https://119.tainan.gov.tw/News_Content.aspx?n=25516&s=7694517'}
  ],
  footer: '學會觀察，是準備的第一步。實際活動請與合適的成人或專業人員同行。'
};
