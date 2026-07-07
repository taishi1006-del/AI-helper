const builtInTemplates = [
  {
    id: "email",
    category: "writing",
    title: "メール文を作る",
    description: "相手に失礼なく、用件が伝わるメールを作ります。",
    tags: ["連絡", "依頼", "返信"],
    fields: [
      { id: "recipient", label: "相手", type: "input", placeholder: "例: 先生、上司、取引先の担当者" },
      { id: "purpose", label: "伝えたいこと", type: "textarea", placeholder: "例: 面談の日程を相談したい" },
      { id: "details", label: "入れたい情報", type: "textarea", placeholder: "例: 希望日は7月10日か11日、オンライン希望" }
    ],
    build: (v) => `あなたは文章作成の補助者です。
${v.tone}、${v.length}

次の条件でメール文を作ってください。
相手: ${v.recipient}
伝えたいこと: ${v.purpose}
入れたい情報: ${v.details}

件名もあわせて提案してください。`
  },
  {
    id: "summary",
    category: "study",
    title: "文章を要約する",
    description: "長い文章を読みやすく整理してもらう依頼文を作ります。",
    tags: ["要約", "読解", "整理"],
    fields: [
      { id: "text", label: "要約したい文章", type: "textarea", placeholder: "ここに文章を貼り付けます" },
      { id: "goal", label: "要約の目的", type: "input", placeholder: "例: 授業の復習、会議内容の確認" }
    ],
    build: (v) => `次の文章を要約してください。
${v.tone}、${v.length}

要約の目的: ${v.goal}

文章:
${v.text}

重要なポイントを箇条書きにして、最後に一言で結論を書いてください。`
  },
  {
    id: "explain",
    category: "study",
    title: "わかりやすく説明してもらう",
    description: "難しい言葉や仕組みを、初心者向けに説明してもらいます。",
    tags: ["説明", "勉強", "初心者"],
    fields: [
      { id: "topic", label: "知りたいこと", type: "input", placeholder: "例: 生成AI、著作権、Excelの関数" },
      { id: "level", label: "自分の理解度", type: "input", placeholder: "例: ほとんど知らない、名前だけ聞いたことがある" }
    ],
    build: (v) => `${v.topic}について説明してください。
${v.tone}、${v.length}

私の理解度: ${v.level}

専門用語はできるだけ使わず、使う場合は意味も説明してください。
最後に、覚えておくべきポイントを3つにまとめてください。`
  },
  {
    id: "idea",
    category: "idea",
    title: "アイデアを出す",
    description: "企画、発表、制作物の案を広げます。",
    tags: ["企画", "発想", "案出し"],
    fields: [
      { id: "theme", label: "テーマ", type: "input", placeholder: "例: 学内イベント、AI活用、地域PR" },
      { id: "audience", label: "対象者", type: "input", placeholder: "例: 大学生、初心者、地域の人" },
      { id: "conditions", label: "条件", type: "textarea", placeholder: "例: 予算は少なめ、1週間で準備、5分発表" }
    ],
    build: (v) => `${v.theme}について、アイデアを出してください。
${v.tone}、${v.length}

対象者: ${v.audience}
条件: ${v.conditions}

実現しやすい案を5つ出し、それぞれの良い点と注意点も書いてください。`
  },
  {
    id: "plan",
    category: "work",
    title: "作業手順を作る",
    description: "やることを順番に分け、迷わず進められる形にします。",
    tags: ["手順", "計画", "タスク"],
    fields: [
      { id: "task", label: "やりたいこと", type: "input", placeholder: "例: アンケート結果をまとめる" },
      { id: "deadline", label: "期限や目安", type: "input", placeholder: "例: 明日の17時まで、2時間以内" },
      { id: "resources", label: "使えるもの", type: "textarea", placeholder: "例: Excel、資料、過去のメモ" }
    ],
    build: (v) => `${v.task}を進めるための作業手順を作ってください。
${v.tone}、${v.length}

期限や目安: ${v.deadline}
使えるもの: ${v.resources}

最初に全体の流れを示し、そのあと具体的な手順を番号付きで書いてください。`
  },
  {
    id: "rewrite",
    category: "correction",
    title: "文章を直す",
    description: "読みやすく、自然な表現に整えてもらいます。",
    tags: ["推敲", "添削", "言い換え"],
    fields: [
      { id: "original", label: "直したい文章", type: "textarea", placeholder: "ここに文章を入力します" },
      { id: "target", label: "誰に向けた文章か", type: "input", placeholder: "例: 先生、同級生、お客様" }
    ],
    build: (v) => `次の文章を読みやすく直してください。
${v.tone}、${v.length}

誰に向けた文章か: ${v.target}

元の文章:
${v.original}

直した文章のあとに、どこを改善したかも短く説明してください。`
  },
  {
    id: "proofread",
    category: "correction",
    title: "文章を添削する",
    description: "誤字、わかりにくさ、言い回しをチェックしてもらいます。",
    tags: ["添削", "誤字", "改善"],
    fields: [
      { id: "draft", label: "添削したい文章", type: "textarea", placeholder: "ここに文章を貼り付けます" },
      { id: "purpose", label: "文章の目的", type: "input", placeholder: "例: レポート、メール、発表原稿、SNS投稿" },
      { id: "focus", label: "特に見てほしい点", type: "textarea", placeholder: "例: 敬語、読みやすさ、説得力、誤字脱字" }
    ],
    build: (v) => `次の文章を添削してください。
${v.tone}、${v.length}

文章の目的: ${v.purpose}
特に見てほしい点: ${v.focus}

添削したい文章:
${v.draft}

次の順番で答えてください。
1. 修正後の文章
2. 直した理由
3. さらに良くするためのアドバイス`
  },
  {
    id: "honorific",
    category: "correction",
    title: "文全体を敬語にする",
    description: "カジュアルな文章を、失礼のない敬語に変えます。",
    tags: ["敬語", "丁寧語", "ビジネス"],
    fields: [
      { id: "casualText", label: "敬語にしたい文章", type: "textarea", placeholder: "例: 明日これ見てくれる？" },
      { id: "recipient", label: "相手", type: "input", placeholder: "例: 先生、上司、取引先、お客様" },
      { id: "scene", label: "使う場面", type: "input", placeholder: "例: メール、チャット、資料、口頭で伝える" }
    ],
    build: (v) => `次の文章全体を、自然で失礼のない敬語にしてください。
${v.tone}、${v.length}

相手: ${v.recipient}
使う場面: ${v.scene}

元の文章:
${v.casualText}

硬すぎる表現は避け、相手に伝わりやすい文章にしてください。
必要であれば、より丁寧な版と少しやわらかい版の2案を出してください。`
  },
  {
    id: "tone-change",
    category: "correction",
    title: "文章の印象を変える",
    description: "同じ内容を、やわらかい・丁寧・説得力のある表現に変えます。",
    tags: ["言い換え", "印象", "表現"],
    fields: [
      { id: "text", label: "変えたい文章", type: "textarea", placeholder: "ここに文章を入力します" },
      { id: "impression", label: "変えたい印象", type: "input", placeholder: "例: やわらかく、前向きに、説得力を出す" },
      { id: "avoid", label: "避けたい表現", type: "input", placeholder: "例: きつい言い方、長すぎる文章、専門用語" }
    ],
    build: (v) => `次の文章の意味は変えずに、印象を変えて書き直してください。
${v.tone}、${v.length}

変えたい印象: ${v.impression}
避けたい表現: ${v.avoid}

元の文章:
${v.text}

書き直した文章を3案出し、それぞれの印象の違いも短く説明してください。`
  },
  {
    id: "question",
    category: "question",
    title: "質問文を作る",
    description: "わからないことをAIに聞きやすい形にします。",
    tags: ["質問", "相談", "確認"],
    fields: [
      { id: "problem", label: "困っていること", type: "textarea", placeholder: "例: レポートの書き出しが思いつかない" },
      { id: "tried", label: "すでに試したこと", type: "textarea", placeholder: "例: テーマを調べた、メモを作った" }
    ],
    build: (v) => `次の困りごとについて相談に乗ってください。
${v.tone}、${v.length}

困っていること:
${v.problem}

すでに試したこと:
${v.tried}

原因の整理、次に試すこと、具体例の順番で答えてください。`
  },
  {
    id: "compare-question",
    category: "question",
    title: "比較して質問する",
    description: "複数の選択肢を比べて、判断材料を出してもらいます。",
    tags: ["比較", "選択", "判断"],
    fields: [
      { id: "options", label: "比べたいもの", type: "textarea", placeholder: "例: A案とB案、ExcelとGoogleスプレッドシート" },
      { id: "criteria", label: "大事にしたい条件", type: "textarea", placeholder: "例: 初心者でも使いやすい、費用が少ない、短時間でできる" },
      { id: "context", label: "状況", type: "textarea", placeholder: "例: 授業の発表で使う、チームで作業する" }
    ],
    build: (v) => `次の選択肢を比較して、どちらがよいか考える材料を出してください。
${v.tone}、${v.length}

比べたいもの:
${v.options}

大事にしたい条件:
${v.criteria}

状況:
${v.context}

表で比較し、最後におすすめと理由をわかりやすく書いてください。`
  },
  {
    id: "step-question",
    category: "question",
    title: "手順を聞く",
    description: "やりたいことを、順番に教えてもらう質問文を作ります。",
    tags: ["手順", "やり方", "初心者"],
    fields: [
      { id: "goal", label: "やりたいこと", type: "input", placeholder: "例: Googleフォームでアンケートを作る" },
      { id: "environment", label: "使っている環境", type: "input", placeholder: "例: Windows、スマホ、Excel、Google Chrome" },
      { id: "experience", label: "自分の経験", type: "input", placeholder: "例: 初めて使う、少しだけ使ったことがある" }
    ],
    build: (v) => `${v.goal}のやり方を、初心者向けに順番に教えてください。
${v.tone}、${v.length}

使っている環境: ${v.environment}
自分の経験: ${v.experience}

最初に全体の流れを示し、そのあと1つずつ作業手順を書いてください。
途中で失敗しやすいポイントも教えてください。`
  },
  {
    id: "trouble-question",
    category: "question",
    title: "原因を相談する",
    description: "うまくいかない原因と次に試すことを聞きます。",
    tags: ["困りごと", "原因", "解決"],
    fields: [
      { id: "issue", label: "起きている問題", type: "textarea", placeholder: "例: コピーした文章の改行が崩れる" },
      { id: "when", label: "いつ起きるか", type: "input", placeholder: "例: 保存したあと、送信したあと、スマホで見たとき" },
      { id: "tried", label: "試したこと", type: "textarea", placeholder: "例: ブラウザを変えた、再読み込みした" }
    ],
    build: (v) => `次の問題の原因と解決方法を一緒に考えてください。
${v.tone}、${v.length}

起きている問題:
${v.issue}

いつ起きるか: ${v.when}

試したこと:
${v.tried}

考えられる原因を3つ挙げ、確認方法と次に試すことを順番に教えてください。`
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
    const block = document.createElement("label");
    block.className = "field-block";
    const inputTag = field.type === "textarea" ? "textarea" : "input";
    block.innerHTML = `
      <span class="field-label">${field.label}</span>
      <${inputTag} class="text-field" data-field="${field.id}" placeholder="${field.placeholder || ""}"></${inputTag}>
    `;
    dynamicFields.append(block);
  });
}

function collectValues() {
  const values = {
    tone: toneSelect.value,
    length: lengthSelect.value
  };

  dynamicFields.querySelectorAll("[data-field]").forEach((field) => {
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
  });
  updateOutput();
  copyStatus.textContent = "";
});

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

  return `${template.instruction}
${values.tone}、${values.length}

入力内容:
${filledFields}

目的に合わせて、読みやすく使いやすい形で答えてください。`;
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
