// 預設學生資料 - 所有人開啟網站都會看到這些資料
const DEFAULT_STUDENT_DATA = [
  {
    "id": "id-1775980254609-cr4be5r6t",
    "district": "豐濱鄉",
    "village": "新社村",
    "scores": { "A": 0, "B": 0, "C": 0, "D": 2 },
    "total": 2,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T07:50:54.609Z"
  },
  {
    "id": "id-1775980296115-apahd5r42",
    "district": "新城鄉",
    "village": "佳林村",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 1 },
    "total": 2,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T07:51:36.115Z"
  },
  {
    "id": "id-1775980347950-dpaz5y6wl",
    "district": "花蓮市",
    "village": "主和里",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 0 },
    "total": 1,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T07:52:27.950Z"
  },
  {
    "id": "id-1775980423724-2ivv8zqpp",
    "district": "花蓮市",
    "village": "主勤里",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 1 },
    "total": 2,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T07:53:43.725Z"
  },
  {
    "id": "id-1775980471784-cougga15f",
    "district": "吉安鄉",
    "village": "仁和村",
    "scores": { "A": 1, "B": 1, "C": 0, "D": 2 },
    "total": 4,
    "riskLevel": "中風險",
    "timestamp": "2026-04-12T07:54:31.784Z"
  },
  {
    "id": "id-1775980512552-v9hqobpmv",
    "district": "鳳林鎮",
    "village": "鳳智里",
    "scores": { "A": 0, "B": 1, "C": 1, "D": 0 },
    "total": 2,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T07:55:12.553Z"
  },
  {
    "id": "id-1775980537765-5yla5j9l7",
    "district": "吉安鄉",
    "village": "光華村",
    "scores": { "A": 0, "B": 0, "C": 0, "D": 0 },
    "total": 0,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T07:55:37.765Z"
  },
  {
    "id": "id-1775980576906-10iy0ecjb",
    "district": "壽豐鄉",
    "village": "豐山村",
    "scores": { "A": 1, "B": 1, "C": 0, "D": 0 },
    "total": 2,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T07:56:16.906Z"
  },
  {
    "id": "id-1775980742492-c6w0gh98t",
    "district": "花蓮市",
    "village": "主安里",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 0 },
    "total": 1,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T07:59:02.492Z"
  },
  {
    "id": "id-1775980809946-2ktffccau",
    "district": "花蓮市",
    "village": "民孝里",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 0 },
    "total": 1,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:00:09.946Z"
  },
  {
    "id": "id-1775980835071-bhv49o2iw",
    "district": "壽豐鄉",
    "village": "溪口村",
    "scores": { "A": 1, "B": 0, "C": 0, "D": 1 },
    "total": 2,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:00:35.071Z"
  },
  {
    "id": "id-1775980899050-ucbaz0qho",
    "district": "花蓮市",
    "village": "主力里",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 0 },
    "total": 1,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:01:39.050Z"
  },
  {
    "id": "id-1775980933665-i5wq86gtj",
    "district": "花蓮市",
    "village": "民意里",
    "scores": { "A": 1, "B": 1, "C": 1, "D": 1 },
    "total": 4,
    "riskLevel": "中風險",
    "timestamp": "2026-04-12T08:02:13.665Z"
  },
  {
    "id": "id-1775980956229-pdhs29w1d",
    "district": "吉安鄉",
    "village": "南華村",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 0 },
    "total": 1,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:02:36.229Z"
  },
  {
    "id": "id-1775981058453-95f4b2yz2",
    "district": "花蓮市",
    "village": "民享里",
    "scores": { "A": 0, "B": 1, "C": 1, "D": 2 },
    "total": 4,
    "riskLevel": "中風險",
    "timestamp": "2026-04-12T08:04:18.453Z"
  },
  {
    "id": "id-1775981193864-7cdad8cds",
    "district": "吉安鄉",
    "village": "宜昌村",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 2 },
    "total": 3,
    "riskLevel": "中風險",
    "timestamp": "2026-04-12T08:06:33.864Z"
  },
  {
    "id": "id-1775981213734-mdtv2aexw",
    "district": "吉安鄉",
    "village": "仁和村",
    "scores": { "A": 1, "B": 1, "C": 0, "D": 1 },
    "total": 3,
    "riskLevel": "中風險",
    "timestamp": "2026-04-12T08:06:53.734Z"
  },
  {
    "id": "id-1775981239720-dma92g3gj",
    "district": "鳳林鎮",
    "village": "林榮里",
    "scores": { "A": 0, "B": 1, "C": 1, "D": 1 },
    "total": 3,
    "riskLevel": "中風險",
    "timestamp": "2026-04-12T08:07:19.720Z"
  },
  {
    "id": "id-1775981317684-rcdti3npo",
    "district": "花蓮市",
    "village": "國魂里",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 0 },
    "total": 1,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:08:37.684Z"
  },
  {
    "id": "id-1775981358958-ojicvx5hg",
    "district": "豐濱鄉",
    "village": "磯崎村",
    "scores": { "A": 0, "B": 2, "C": 0, "D": 0 },
    "total": 2,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:09:18.958Z"
  },
  {
    "id": "id-1775981375220-01att7kdi",
    "district": "吉安鄉",
    "village": "北昌村",
    "scores": { "A": 0, "B": 0, "C": 0, "D": 0 },
    "total": 0,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:09:35.220Z"
  },
  {
    "id": "id-1775981408175-7z9p4poir",
    "district": "花蓮市",
    "village": "國風里",
    "scores": { "A": 0, "B": 0, "C": 0, "D": 0 },
    "total": 0,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:10:08.175Z"
  },
  {
    "id": "id-1775981435847-lit8e2kc7",
    "district": "新城鄉",
    "village": "嘉里村",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 2 },
    "total": 3,
    "riskLevel": "中風險",
    "timestamp": "2026-04-12T08:10:35.847Z"
  },
  {
    "id": "id-1775981462917-6rduq3sm9",
    "district": "花蓮市",
    "village": "國治里",
    "scores": { "A": 0, "B": 1, "C": 0, "D": 0 },
    "total": 1,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:11:02.917Z"
  },
  {
    "id": "id-1775981489201-cbt8vrr5z",
    "district": "鳳林鎮",
    "village": "鳳禮里",
    "scores": { "A": 0, "B": 0, "C": 0, "D": 1 },
    "total": 1,
    "riskLevel": "低風險",
    "timestamp": "2026-04-12T08:11:29.201Z"
  }
];
