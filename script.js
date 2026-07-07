const academicPolicy = `前提: 学生本人が考えてレポートを書くための支援として答えてください。完成文をそのまま提出できる形で代筆するのではなく、考え方、構成、改善点、確認すべき観点を中心に示してください。事実情報や引用は必ず信頼できる資料で確認するよう促してください。`;

const builtInTemplates = [
  {
    id: "topic-narrow",
    category: "topic",
    title: "テーマを絞る",
    description: "広いテーマから、レポートで扱える問いへ小さくします。",
    tags: ["テーマ", "問い", "焦点化"],
    fields: [
      { id: "className", label: "授業名・分野", type: "input", placeholder: "例: 情報社会論、心理学、日本史" },
      { id: "broadTheme", label: "気になっているテーマ", type: "textarea", placeholder: "例: 生成AIと大学生の学習、SNSと孤独感" },
      { id: "interest", label: "自分が特に気になる点", type: "textarea", placeholder: "例: 便利さだけでなく、学習力が下がる可能性も気になる" },
      { id: "limits", label: "条件・文字数", type: "input", placeholder: "例: 2000字、授業資料を1つ以上使う" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の情報をもとに、学生レポートで扱いやすいテーマへ絞る相談に乗ってください。

授業名・分野: ${v.className}
気になっているテーマ:
${v.broadTheme}

自分が特に気になる点:
${v.interest}

条件・文字数: ${v.limits}

出力してほしいこと:
1. レポート向きのテーマ案を5つ
2. それぞれの「問い」の形
3. 書きやすさ、調べやすさ、注意点
4. 一番おすすめの案と理由`
  },
  {
    id: "research-question",
    category: "topic",
    title: "問いと仮説を作る",
    description: "レポートの中心になる問い、仮説、主張の候補を作ります。",
    tags: ["問い", "仮説", "主張"],
    fields: [
      { id: "topic", label: "選んだテーマ", type: "input", placeholder: "例: 生成AIは大学生の学習にどう影響するか" },
      { id: "materials", label: "使えそうな資料・授業内容", type: "textarea", placeholder: "例: 第5回の授業資料、文科省の資料、ニュース記事" },
      { id: "position", label: "今の自分の考え", type: "textarea", placeholder: "例: 使い方によっては理解を助けるが、丸写しは危険だと思う" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次のテーマについて、レポートの問いと仮説を一緒に整理してください。

選んだテーマ: ${v.topic}
使えそうな資料・授業内容:
${v.materials}

今の自分の考え:
${v.position}

出力してほしいこと:
1. レポートの問いを3案
2. それぞれの仮説
3. 反対意見や別の見方
4. どの資料を確認するとよいか
5. 主張を強くしすぎない書き方の例`
  },
  {
    id: "outline",
    category: "outline",
    title: "構成を作る",
    description: "序論・本論・結論の流れを作ります。",
    tags: ["構成", "序論", "本論"],
    fields: [
      { id: "title", label: "仮タイトル", type: "input", placeholder: "例: 生成AIが大学生の学習に与える影響" },
      { id: "question", label: "レポートの問い", type: "textarea", placeholder: "例: 生成AIは学習の理解を深めるのか、それとも妨げるのか" },
      { id: "claim", label: "今の主張・結論の方向", type: "textarea", placeholder: "例: 適切な使い方なら理解を助けるが、使い方のルールが必要" },
      { id: "wordCount", label: "文字数", type: "input", placeholder: "例: 1600字、3000字" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の内容で、学生レポートの構成案を作ってください。

仮タイトル: ${v.title}
レポートの問い:
${v.question}

今の主張・結論の方向:
${v.claim}

文字数: ${v.wordCount}

出力してほしいこと:
1. 序論・本論・結論の役割
2. 各段落に書く内容
3. 段落ごとの目安文字数
4. 途中で入れるべき根拠や資料
5. ありがちな脱線ポイント`
  },
  {
    id: "paragraph-plan",
    category: "outline",
    title: "段落の役割を決める",
    description: "各段落で何を言うか、論理の順番を整えます。",
    tags: ["段落", "論理", "流れ"],
    fields: [
      { id: "outline", label: "今の構成メモ", type: "textarea", placeholder: "例: 序論で問題提起、本論1でメリット、本論2でリスク..." },
      { id: "weakPoint", label: "不安なところ", type: "textarea", placeholder: "例: 本論の順番が自然か、結論が弱い気がする" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の構成メモを見て、段落ごとの役割と論理の流れを整理してください。

今の構成メモ:
${v.outline}

不安なところ:
${v.weakPoint}

出力してほしいこと:
1. 段落ごとの役割
2. 順番を入れ替えた方がよい箇所
3. 足りない根拠
4. つなぎの文で意識すること
5. 改善後の構成案`
  },
  {
    id: "research-keywords",
    category: "research",
    title: "調査キーワードを作る",
    description: "資料探しに使う検索語と調べる観点を出します。",
    tags: ["調査", "検索", "資料"],
    fields: [
      { id: "topic", label: "調べたいテーマ", type: "textarea", placeholder: "例: SNS利用と大学生の孤独感の関係" },
      { id: "sourceType", label: "探したい資料", type: "input", placeholder: "例: 論文、白書、新聞記事、授業資料" },
      { id: "knownWords", label: "すでに知っている言葉", type: "textarea", placeholder: "例: ソーシャルメディア、孤独感、メンタルヘルス" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次のレポートテーマについて、資料探しのキーワードと調査観点を作ってください。

調べたいテーマ:
${v.topic}

探したい資料: ${v.sourceType}
すでに知っている言葉:
${v.knownWords}

出力してほしいこと:
1. 日本語の検索キーワード
2. 英語の検索キーワード
3. 組み合わせ検索の例
4. 信頼できる資料を見分ける観点
5. 検索後にメモすべき項目`
  },
  {
    id: "source-notes",
    category: "research",
    title: "資料メモを整理する",
    description: "読んだ資料を、レポートに使いやすいメモへ整えます。",
    tags: ["資料", "メモ", "要点"],
    fields: [
      { id: "sourceInfo", label: "資料情報", type: "textarea", placeholder: "例: 著者、タイトル、公開年、URL、授業資料名" },
      { id: "notes", label: "読んで分かったこと", type: "textarea", placeholder: "例: AI利用者は増えているが、学習目的によって効果が違う..." },
      { id: "relation", label: "自分のテーマとの関係", type: "textarea", placeholder: "例: 生成AIのメリットとリスクの両方を説明する根拠に使えそう" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の資料メモを、レポートに使いやすい形へ整理してください。

資料情報:
${v.sourceInfo}

読んで分かったこと:
${v.notes}

自分のテーマとの関係:
${v.relation}

出力してほしいこと:
1. 資料の要点
2. レポートで使えそうな根拠
3. 自分の主張とつなげる方法
4. 追加で確認すべき点
5. 引用するときに注意すること`
  },
  {
    id: "intro-support",
    category: "draft",
    title: "序論の書き方を相談する",
    description: "問題提起、問い、構成予告を作るための質問文です。",
    tags: ["序論", "問題提起", "導入"],
    fields: [
      { id: "topic", label: "テーマ", type: "input", placeholder: "例: 大学生の生成AI利用" },
      { id: "question", label: "問い", type: "textarea", placeholder: "例: 生成AIは大学生の学習にどのような影響を与えるのか" },
      { id: "background", label: "背景として書きたいこと", type: "textarea", placeholder: "例: 生成AIが身近になり、授業や課題で使う学生が増えている" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の情報をもとに、レポートの序論を書くための考え方を教えてください。

テーマ: ${v.topic}
問い:
${v.question}

背景として書きたいこと:
${v.background}

出力してほしいこと:
1. 序論に入れる要素
2. 書き出しの方向性を3案
3. 問いの示し方
4. 本論へのつなげ方
5. そのまま提出する文章ではなく、自分で書くための骨組み`
  },
  {
    id: "body-support",
    category: "draft",
    title: "本論の根拠を組み立てる",
    description: "主張、根拠、説明、資料の使い方を整えます。",
    tags: ["本論", "根拠", "説明"],
    fields: [
      { id: "claim", label: "段落で言いたいこと", type: "textarea", placeholder: "例: 生成AIは理解を深める補助として使える" },
      { id: "evidence", label: "使いたい根拠・資料", type: "textarea", placeholder: "例: 授業資料、アンケート結果、論文の要点" },
      { id: "example", label: "具体例", type: "textarea", placeholder: "例: 分からない用語を質問して理解を確認する使い方" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の内容をもとに、本論の段落を組み立てる方法を教えてください。

段落で言いたいこと:
${v.claim}

使いたい根拠・資料:
${v.evidence}

具体例:
${v.example}

出力してほしいこと:
1. 主張、根拠、説明、まとめの順番
2. 根拠の弱いところ
3. 具体例を入れる位置
4. 反対意見を入れるならどこか
5. 自分で文章化するための段落メモ`
  },
  {
    id: "conclusion-support",
    category: "draft",
    title: "結論を整理する",
    description: "結論で何を言うか、主張を締める流れを作ります。",
    tags: ["結論", "まとめ", "主張"],
    fields: [
      { id: "question", label: "レポートの問い", type: "textarea", placeholder: "例: 生成AIは大学生の学習にどのような影響を与えるのか" },
      { id: "mainPoints", label: "本論で述べたこと", type: "textarea", placeholder: "例: メリット、リスク、使い方のルール" },
      { id: "finalClaim", label: "最終的に言いたいこと", type: "textarea", placeholder: "例: 生成AIは補助として有効だが、考える過程を省かない使い方が必要" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の情報をもとに、レポートの結論を整理してください。

レポートの問い:
${v.question}

本論で述べたこと:
${v.mainPoints}

最終的に言いたいこと:
${v.finalClaim}

出力してほしいこと:
1. 結論に入れる順番
2. 問いへの答え方
3. 本論の要点のまとめ方
4. 今後の課題を入れる場合の注意点
5. 結論が弱く見える表現と改善案`
  },
  {
    id: "report-proofread",
    category: "revision",
    title: "レポートを添削する",
    description: "論理、読みやすさ、レポートらしさを確認します。",
    tags: ["添削", "論理", "表現"],
    fields: [
      { id: "draft", label: "添削したい文章", type: "textarea", placeholder: "ここにレポート本文や段落を貼り付けます" },
      { id: "rubric", label: "評価基準・先生の指示", type: "textarea", placeholder: "例: 授業内容を踏まえる、参考文献を2つ以上使う" },
      { id: "concern", label: "不安な点", type: "textarea", placeholder: "例: 主張が弱い、文章が話し言葉っぽい、根拠が足りない" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次のレポート文を添削してください。完成文の代筆ではなく、改善の方向と修正例を示してください。

添削したい文章:
${v.draft}

評価基準・先生の指示:
${v.rubric}

不安な点:
${v.concern}

出力してほしいこと:
1. 良い点
2. 論理が弱い箇所
3. レポートらしくない表現
4. 修正例
5. 自分で直すためのチェックリスト`
  },
  {
    id: "logic-check",
    category: "revision",
    title: "論理のつながりを確認する",
    description: "主張と根拠がつながっているかを見ます。",
    tags: ["論理", "主張", "根拠"],
    fields: [
      { id: "claim", label: "主張", type: "textarea", placeholder: "例: 生成AIは学習理解を深める補助として使える" },
      { id: "reasons", label: "理由・根拠", type: "textarea", placeholder: "例: 用語説明、要約、復習に使えるため" },
      { id: "counter", label: "反対意見・不安点", type: "textarea", placeholder: "例: 依存すると自分で考えなくなる可能性がある" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の主張と根拠のつながりを確認してください。

主張:
${v.claim}

理由・根拠:
${v.reasons}

反対意見・不安点:
${v.counter}

出力してほしいこと:
1. 主張と根拠がつながっているか
2. 飛躍している部分
3. 追加するとよい説明
4. 反対意見への答え方
5. より説得力のある主張への直し方`
  },
  {
    id: "citation-check",
    category: "citation",
    title: "引用と参考文献を確認する",
    description: "引用・要約・参考文献の扱いを確認します。",
    tags: ["引用", "参考文献", "出典"],
    fields: [
      { id: "source", label: "使いたい資料情報", type: "textarea", placeholder: "例: 著者、タイトル、URL、公開年、出版社など" },
      { id: "useText", label: "レポート内で使いたい内容", type: "textarea", placeholder: "例: この調査では大学生のAI利用率が高いと述べられている" },
      { id: "style", label: "指定された形式", type: "input", placeholder: "例: 指定なし、APA風、先生の指定フォーマット" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

次の資料をレポートで使うとき、引用・要約・参考文献の注意点を確認してください。

使いたい資料情報:
${v.source}

レポート内で使いたい内容:
${v.useText}

指定された形式: ${v.style}

出力してほしいこと:
1. 直接引用と要約のどちらが向いているか
2. 引用するときの注意点
3. 参考文献に必要な情報
4. 不足している情報
5. 形式は最終的に授業指示で確認すること`
  },
  {
    id: "ai-use-disclosure",
    category: "citation",
    title: "AI利用を確認する",
    description: "AIを使った範囲を、先生に説明できる形へ整理します。",
    tags: ["AI利用", "提出前", "確認"],
    fields: [
      { id: "usedFor", label: "AIを使った作業", type: "textarea", placeholder: "例: テーマ案、構成相談、文章の添削" },
      { id: "notUsedFor", label: "自分で行った作業", type: "textarea", placeholder: "例: 資料を読んだ、主張を決めた、本文を書いた" },
      { id: "rule", label: "授業のルール", type: "textarea", placeholder: "例: AI利用可、利用した場合は書く、明記なし" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

レポートでAIを使った範囲を、授業のルールに合わせて確認したいです。

AIを使った作業:
${v.usedFor}

自分で行った作業:
${v.notUsedFor}

授業のルール:
${v.rule}

出力してほしいこと:
1. AI利用として明記した方がよい範囲
2. 自分の作業として説明できる範囲
3. 先生に確認すべき点
4. AI利用の説明文の例
5. ルールが不明な場合の安全な対応`
  },
  {
    id: "image-observation",
    category: "image",
    title: "画像から情報を読み取る",
    description: "写真や図をAIに見てもらい、レポートに使える観察点を整理します。",
    tags: ["画像", "観察", "判別"],
    fields: [
      { id: "imageFile", label: "AIに見せたい画像", type: "image", placeholder: "画像を選択" },
      { id: "reportTopic", label: "レポートテーマ", type: "textarea", placeholder: "例: 街中のバリアフリー設備について" },
      { id: "focus", label: "特に見てほしい点", type: "textarea", placeholder: "例: 設備の種類、利用しやすさ、問題点" },
      { id: "context", label: "画像の状況", type: "textarea", placeholder: "例: 駅の入口付近で撮影した写真。授業のフィールドワークで使う。" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

この質問文と一緒に画像を添付します。添付画像を見て、レポート作成に使える観察点を整理してください。

画像情報:
${v.imageFile}

レポートテーマ:
${v.reportTopic}

特に見てほしい点:
${v.focus}

画像の状況:
${v.context}

出力してほしいこと:
1. 画像から確認できる事実
2. 判別できそうなこと
3. 画像だけでは断定できないこと
4. レポートで使えそうな観察メモ
5. 追加で確認・撮影・調査すべき点`
  },
  {
    id: "chart-image-analysis",
    category: "image",
    title: "グラフ画像を読み取る",
    description: "グラフや表の画像から、傾向や注意点を整理します。",
    tags: ["グラフ", "表", "読み取り"],
    fields: [
      { id: "imageFile", label: "グラフ・表の画像", type: "image", placeholder: "画像を選択" },
      { id: "reportQuestion", label: "レポートの問い", type: "textarea", placeholder: "例: 若者のSNS利用時間は生活習慣に影響しているのか" },
      { id: "chartInfo", label: "分かっている情報", type: "textarea", placeholder: "例: 総務省の資料、2025年の調査、年代別の比較" },
      { id: "need", label: "読み取りたいこと", type: "textarea", placeholder: "例: 一番大きい差、増減傾向、レポートで使える根拠" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

この質問文と一緒にグラフまたは表の画像を添付します。添付画像を読み取り、レポートで使える形に整理してください。

画像情報:
${v.imageFile}

レポートの問い:
${v.reportQuestion}

分かっている情報:
${v.chartInfo}

読み取りたいこと:
${v.need}

出力してほしいこと:
1. グラフ・表から読み取れる主な傾向
2. 数値や比較で注目すべき点
3. レポートの根拠として使えそうな内容
4. 読み取りで注意すべき限界
5. 出典や元データで確認すべきこと`
  },
  {
    id: "document-image-notes",
    category: "image",
    title: "資料画像をメモ化する",
    description: "プリント、板書、スクリーン画像をレポート用メモにします。",
    tags: ["資料画像", "板書", "メモ"],
    fields: [
      { id: "imageFile", label: "資料・板書の画像", type: "image", placeholder: "画像を選択" },
      { id: "className", label: "授業名・分野", type: "input", placeholder: "例: 情報社会論" },
      { id: "purpose", label: "この資料を使う目的", type: "textarea", placeholder: "例: 授業で扱ったAI活用の注意点をレポートに入れたい" },
      { id: "knownText", label: "読み取れている文字・内容", type: "textarea", placeholder: "例: 自分で読める範囲のキーワードやメモ" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

この質問文と一緒に資料画像を添付します。画像内の文字や内容を確認し、レポート作成用のメモに整理してください。

画像情報:
${v.imageFile}

授業名・分野: ${v.className}

この資料を使う目的:
${v.purpose}

自分で読み取れている文字・内容:
${v.knownText}

出力してほしいこと:
1. 画像から読み取れる内容
2. レポートで使えそうなキーワード
3. 授業内容とのつなげ方
4. 読み取りが不確かな部分
5. 必ず元資料で確認すべき点`
  },
  {
    id: "image-classification",
    category: "image",
    title: "画像の種類や状態を判別する",
    description: "対象物や状態をAIに見分けてもらうための質問文を作ります。",
    tags: ["分類", "状態", "判別"],
    fields: [
      { id: "imageFile", label: "判別したい画像", type: "image", placeholder: "画像を選択" },
      { id: "target", label: "判別したいもの", type: "input", placeholder: "例: 植物の種類、機械の状態、掲示物の内容" },
      { id: "choices", label: "候補・分類したい種類", type: "textarea", placeholder: "例: 正常/異常、Aタイプ/Bタイプ、危険/安全" },
      { id: "reason", label: "判別結果を何に使うか", type: "textarea", placeholder: "例: レポートの観察結果として使う。断定ではなく可能性として整理したい。" }
    ],
    build: (v) => `${academicPolicy}
${v.tone}、${v.length}

この質問文と一緒に画像を添付します。添付画像を見て、対象の種類や状態を判別してください。

画像情報:
${v.imageFile}

判別したいもの: ${v.target}

候補・分類したい種類:
${v.choices}

判別結果を使う目的:
${v.reason}

出力してほしいこと:
1. 最も可能性が高い判別結果
2. そう考える理由
3. 他に考えられる可能性
4. 画像だけでは判断できない点
5. レポートでは断定せずに書くための表現例`
  }
];

const customTemplateStorageKey = "ai-helper-custom-templates";

const state = {
  selectedId: builtInTemplates[0].id,
  category: "all",
  query: "",
  customTemplates: loadCustomTemplates()
};

const templateList = document.querySelector("#templateList");
const dynamicFields = document.querySelector("#dynamicFields");
const selectedTitle = document.querySelector("#selectedTitle");
const output = document.querySelector("#promptOutput");
const toneSelect = document.querySelector("#toneSelect");
const lengthSelect = document.querySelector("#lengthSelect");
const searchInput = document.querySelector("#templateSearch");
const copyStatus = document.querySelector("#copyStatus");
const customTemplateForm = document.querySelector("#customTemplateForm");
const customTitle = document.querySelector("#customTitle");
const customDescription = document.querySelector("#customDescription");
const customFields = document.querySelector("#customFields");
const customInstruction = document.querySelector("#customInstruction");
const customStatus = document.querySelector("#customStatus");

function loadCustomTemplates() {
  try {
    const saved = JSON.parse(localStorage.getItem(customTemplateStorageKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((template) => template && template.id && template.title && Array.isArray(template.fields));
  } catch {
    return [];
  }
}

function saveCustomTemplates() {
  localStorage.setItem(customTemplateStorageKey, JSON.stringify(state.customTemplates));
}

function getTemplates() {
  return [...builtInTemplates, ...state.customTemplates];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getSelectedTemplate() {
  return getTemplates().find((template) => template.id === state.selectedId) || builtInTemplates[0];
}

function renderTemplates() {
  const query = state.query.trim().toLowerCase();
  const visibleTemplates = getTemplates().filter((template) => {
    const inCategory = state.category === "all" || template.category === state.category;
    const searchable = `${template.title} ${template.description} ${template.tags.join(" ")}`.toLowerCase();
    return inCategory && searchable.includes(query);
  });

  templateList.innerHTML = "";

  if (visibleTemplates.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "該当するテンプレートがありません。検索語を変えてみてください。";
    templateList.append(empty);
    return;
  }

  visibleTemplates.forEach((template) => {
    const button = document.createElement("button");
    const safeTitle = escapeHtml(template.title);
    const safeDescription = escapeHtml(template.description);
    button.type = "button";
    button.className = `template-card${template.id === state.selectedId ? " is-active" : ""}`;
    button.dataset.templateId = template.id;
    button.innerHTML = `
      <span class="template-card-header">
        <h3>${safeTitle}</h3>
        ${template.isCustom ? `<span class="delete-template-button" data-delete-template="${escapeHtml(template.id)}" title="削除" aria-label="${safeTitle}を削除">×</span>` : ""}
      </span>
      <p>${safeDescription}</p>
      <span class="tag-row">${template.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</span>
    `;
    templateList.append(button);
  });
}

function renderFields() {
  const template = getSelectedTemplate();
  selectedTitle.textContent = template.title;
  dynamicFields.innerHTML = "";

  template.fields.forEach((field) => {
    const block = document.createElement(field.type === "image" ? "div" : "label");
    block.className = "field-block";
    if (field.type === "image") {
      block.innerHTML = `
        <span class="field-label">${escapeHtml(field.label)}</span>
        <input class="image-input" type="file" accept="image/*" data-field="${escapeHtml(field.id)}" data-image-input />
        <div class="image-preview is-empty" data-image-preview>
          <span>画像を選ぶとここにプレビューが表示されます。</span>
        </div>
      `;
      dynamicFields.append(block);
      return;
    }

    const inputTag = field.type === "textarea" ? "textarea" : "input";
    block.innerHTML = `
      <span class="field-label">${escapeHtml(field.label)}</span>
      <${inputTag} class="text-field" data-field="${escapeHtml(field.id)}" placeholder="${escapeHtml(field.placeholder || "")}"></${inputTag}>
    `;
    dynamicFields.append(block);
  });

  dynamicFields.querySelectorAll("[data-image-input]").forEach((input) => {
    input.addEventListener("change", handleImageSelection);
  });
}

function collectValues() {
  const values = {
    tone: toneSelect.value,
    length: lengthSelect.value
  };

  dynamicFields.querySelectorAll("[data-field]").forEach((field) => {
    if (field.type === "file") {
      values[field.dataset.field] = field.dataset.imageInfo || "画像未選択";
      return;
    }

    values[field.dataset.field] = field.value.trim() || "未入力";
  });

  return values;
}

function updateOutput() {
  const template = getSelectedTemplate();
  output.value = template.build(collectValues());
}

function selectTemplate(id) {
  state.selectedId = id;
  renderTemplates();
  renderFields();
  updateOutput();
  copyStatus.textContent = "";
}

templateList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-template]");
  if (deleteButton) {
    event.stopPropagation();
    deleteCustomTemplate(deleteButton.dataset.deleteTemplate);
    return;
  }

  const card = event.target.closest("[data-template-id]");
  if (!card) return;
  selectTemplate(card.dataset.templateId);
});

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderTemplates();
  });
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderTemplates();
});

document.querySelector("#promptForm").addEventListener("input", updateOutput);
toneSelect.addEventListener("change", updateOutput);
lengthSelect.addEventListener("change", updateOutput);

document.querySelector("#copyButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(output.value);
    copyStatus.textContent = "コピーしました。AIの入力欄に貼り付けて使えます。";
  } catch {
    output.select();
    document.execCommand("copy");
    copyStatus.textContent = "コピーしました。";
  }
});

document.querySelector("#clearButton").addEventListener("click", () => {
  dynamicFields.querySelectorAll("[data-field]").forEach((field) => {
    field.value = "";
    if (field.type === "file") {
      field.dataset.imageInfo = "";
    }
  });
  resetImagePreviews();
  updateOutput();
  copyStatus.textContent = "";
});

function handleImageSelection(event) {
  const input = event.currentTarget;
  const file = input.files && input.files[0];
  const preview = input.closest(".field-block").querySelector("[data-image-preview]");

  if (!file) {
    input.dataset.imageInfo = "";
    preview.className = "image-preview is-empty";
    preview.innerHTML = "<span>画像を選ぶとここにプレビューが表示されます。</span>";
    updateOutput();
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const image = new Image();
    image.addEventListener("load", () => {
      const sizeKb = Math.max(1, Math.round(file.size / 1024));
      input.dataset.imageInfo = `添付予定の画像: ${file.name}（${image.naturalWidth}x${image.naturalHeight}px、約${sizeKb}KB）`;
      preview.className = "image-preview";
      preview.innerHTML = `
        <img src="${reader.result}" alt="選択した画像のプレビュー" />
        <p>${escapeHtml(file.name)} / ${image.naturalWidth}x${image.naturalHeight}px</p>
      `;
      updateOutput();
    });
    image.src = reader.result;
  });
  reader.readAsDataURL(file);
}

function resetImagePreviews() {
  dynamicFields.querySelectorAll("[data-image-preview]").forEach((preview) => {
    preview.className = "image-preview is-empty";
    preview.innerHTML = "<span>画像を選ぶとここにプレビューが表示されます。</span>";
  });
}

customTemplateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = customTitle.value.trim();
  const description = customDescription.value.trim();
  const instruction = customInstruction.value.trim();
  const fieldNames = customFields.value
    .split(/\r?\n/)
    .map((field) => field.trim())
    .filter(Boolean);

  if (!title || !instruction || fieldNames.length === 0) {
    customStatus.textContent = "名前、入力欄名、指示文を入力してください。";
    return;
  }

  const id = `custom-${Date.now()}`;
  const fields = fieldNames.map((label, index) => ({
    id: `customField${index + 1}`,
    label,
    type: "textarea",
    placeholder: `${label}を入力します`
  }));

  const customTemplate = {
    id,
    category: "custom",
    title,
    description: description || "自分で作ったテンプレートです。",
    tags: ["自作", "保存済み"],
    fields,
    instruction,
    isCustom: true,
    build: (v) => buildCustomPrompt(customTemplate, v)
  };

  state.customTemplates.push(customTemplate);
  saveCustomTemplates();
  customTemplateForm.reset();
  customStatus.textContent = "保存しました。自作カテゴリから使えます。";
  state.category = "custom";
  document.querySelectorAll("[data-category]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.category === "custom");
  });
  selectTemplate(id);
});

function buildCustomPrompt(template, values) {
  const filledFields = template.fields
    .map((field) => `${field.label}: ${values[field.id] || "未入力"}`)
    .join("\n");

  return `${academicPolicy}
${template.instruction}
${values.tone}、${values.length}

入力内容:
${filledFields}

レポート作成に使いやすい形で、考え方、確認点、次に自分が行う作業を示してください。`;
}

function deleteCustomTemplate(id) {
  const target = state.customTemplates.find((template) => template.id === id);
  if (!target) return;

  const canDelete = window.confirm(`「${target.title}」を削除しますか？`);
  if (!canDelete) return;

  state.customTemplates = state.customTemplates.filter((template) => template.id !== id);
  saveCustomTemplates();

  if (state.selectedId === id) {
    state.selectedId = builtInTemplates[0].id;
  }

  renderTemplates();
  renderFields();
  updateOutput();
  customStatus.textContent = "削除しました。";
}

state.customTemplates = state.customTemplates.map((template) => ({
  ...template,
  build: (v) => buildCustomPrompt(template, v)
}));

renderTemplates();
renderFields();
updateOutput();
