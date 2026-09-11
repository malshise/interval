"use strict";

// CSVの原文を保持し、院の成分が空欄の場合のみ新宿院の内容を使用。
document.addEventListener("DOMContentLoaded", () => {
  const recipes = [
  {
    "name": "白玉点滴",
    "initial": "¥3,300",
    "regular": "¥4,500",
    "clinics": {
      "新宿院": "グルタチオン600㎎　1A\n50ml＝50㏄　600mg＝0.6㏄",
      "心斎橋院": "グルタチオン600㎎　1A\n50ml＝50㏄　600mg＝0.6㏄",
      "福岡院": "グルタチオン600㎎　1A\n50ml＝50㏄　600mg＝0.6㏄"
    }
  },
  {
    "name": "白玉点滴W",
    "initial": "¥4,500",
    "regular": "¥8,000",
    "clinics": {
      "新宿院": "グルタチオン600㎎　2A",
      "心斎橋院": "グルタチオン600㎎　2A",
      "福岡院": "グルタチオン600㎎　2A"
    }
  },
  {
    "name": "美白ビタミン点滴",
    "initial": "¥3,000",
    "regular": "¥4,800",
    "clinics": {
      "新宿院": "アスコルビン酸2g　1A\nクリストファン　1A\nトランサミン5％5ml　1A\nシーパラ　1A",
      "心斎橋院": "アスコルビン酸2g　1A\nクリストファン　1A\nトランサミン5％5ml　1A\nシーパラ　1A",
      "福岡院": "アスコルビン酸2g　1A\nクリストファン　1A\nトランサミン5％5ml　1A\nシーパラ　1A"
    }
  },
  {
    "name": "スペシャル美白・白玉点滴",
    "initial": "¥5,500",
    "regular": "¥8,000",
    "clinics": {
      "新宿院": "グルタチオン600mg　2A\nアスコルビン酸2g　1A\nクリストファン　1A\nトランサミン5％5ml　1A\nシーパラ　1A",
      "心斎橋院": "グルタチオン600mg　2A\nアスコルビン酸2g　1A\nクリストファン　1A\nトランサミン5％5ml　1A\nシーパラ　1A",
      "福岡院": "グルタチオン600mg　2A\nアスコルビン酸2g　1A\nクリストファン　1A\nトランサミン5％5ml　1A\nシーパラ　1A"
    }
  },
  {
    "name": "美肌・美白スペシャル点滴",
    "initial": "¥8,000",
    "regular": "¥13,000",
    "clinics": {
      "新宿院": "ハイプレミアミン　1P\nアスコルビン酸2g　2A\nクリストファン　1A\nビタメジン　1V\nシーパラ　1A\nパントール　1A\nビオチン1㎎　1A\n硫酸Mg　1ml",
      "心斎橋院": "ハイプレミアミン　1P\nアスコルビン酸2g　2A\nクリストファン　1A\nビタメジン　1V\nシーパラ　1A\nパントール　1A\nビオチン1㎎　1A\n硫酸Mg　1ml",
      "福岡院": "ハイプレミアミン　1P\nアスコルビン酸2g　2A\nクリストファン　1A\nビタメジン　1V\nシーパラ　1A\nパントール　1A\nビオチン1㎎　1A\n硫酸Mg　1ml"
    }
  },
  {
    "name": "肌荒れ点滴",
    "initial": "¥3,000",
    "regular": "¥4,800",
    "clinics": {
      "新宿院": "アスコルビン酸2g　1A\nビタメジン　1V\nパントール　1A\nシーパラ　1A\nビオチン1㎎　1A",
      "心斎橋院": "アスコルビン酸2g　1A\nビタメジン　1V\nパントール　1A\nシーパラ　1A\nビオチン1㎎　1A",
      "福岡院": "アスコルビン酸2g　1A\nビタメジン　1V\nパントール　1A\nシーパラ　1A\nビオチン1㎎　1A"
    }
  },
  {
    "name": "スペシャルニキビ点滴",
    "initial": "¥3,000",
    "regular": "¥6,000",
    "clinics": {
      "新宿院": "アスコルビン酸2g　2A\nクリストファン　1A\nピドキサール30㎎　1A\nフラビタン10㎎　1A\nパントール　1A\nシーパラ　1A\nビオチン1㎎　1A",
      "心斎橋院": "アスコルビン酸2g　2A\nクリストファン　1A\nピドキサール30㎎　1A\nフラビタン10㎎　1A\nパントール　1A\nシーパラ　1A\nビオチン1㎎　1A",
      "福岡院": "アスコルビン酸2g　2A\nクリストファン　1A\nピドキサール30㎎　1A\nフラビタン10㎎　1A\nパントール　1A\nシーパラ　1A\nビオチン1㎎　1A"
    }
  },
  {
    "name": "ダイエット点滴",
    "initial": "¥3,000",
    "regular": "¥6,000",
    "clinics": {
      "新宿院": "チオクト酸注25mg　4A\nエントミン200㎎　1A\n20％ブドウ糖（生食20ml1/2P）10ml\nフラビタン10㎎　1A\nピドキサール30㎎　1A\nシアノコバラミン1000㎍　1A",
      "心斎橋院": "チオクト酸注25mg　4A\nエントミン200㎎　1A\n20％ブドウ糖（生食20ml1/2P）10ml\nフラビタン10㎎　1A\nピドキサール30㎎　1A\nシアノコバラミン1000㎍　1A",
      "福岡院": "チオクト酸注25mg　4A\nエントミン200㎎　1A\n20％ブドウ糖（生食20ml1/2P）10ml\nフラビタン10㎎　1A\nピドキサール30㎎　1A\nシアノコバラミン1000㎍　1A"
    }
  },
  {
    "name": "疲労回復点滴",
    "initial": "¥3,500",
    "regular": "¥4,800",
    "clinics": {
      "新宿院": "ニチファーゲン　1P\nグルタチオン600㎎　1A\nシーパラ　1A\nビタメジン　1V",
      "心斎橋院": "ニチファーゲン　1P\nグルタチオン600㎎　1A\nシーパラ　1A\nビタメジン　1V",
      "福岡院": "ニチファーゲン　1P\nグルタチオン600㎎　1A\nシーパラ　1A\nビタメジン　1V"
    }
  },
  {
    "name": "高濃度ビタミンC点滴(12.5g)",
    "initial": "¥7,000",
    "regular": "¥14,900",
    "clinics": {
      "新宿院": "高濃度VC25g　1/2V（12.5g）硫酸Mg 5ml",
      "心斎橋院": "新宿と一緒？",
      "福岡院": "高濃度VC25g　1/2V（12.5g）硫酸Mg 5ml"
    }
  },
  {
    "name": "高濃度ビタミンC点滴(25g)",
    "initial": "¥10,000",
    "regular": "¥16,800",
    "clinics": {
      "新宿院": "高濃度VC25g　1/2V（12.5g）\"\n硫酸Mg 5ml",
      "心斎橋院": "高濃度VC25g　1/2V（12.5g）\"\n硫酸Mg 5ml",
      "福岡院": "高濃度VC25g　1/2V（12.5g）\"\n硫酸Mg 5ml"
    }
  },
  {
    "name": "DAILYスペシャル点滴",
    "initial": "¥9,000",
    "regular": "¥14,000",
    "clinics": {
      "新宿院": "高濃度VC25g　1/2V（12.5g）\n硫酸Mg　5ml\nクリストファン　1A\nビタメジン　1V\nパントール　1A\nハイプレアミン　1P\nニチファーゲン　1P",
      "心斎橋院": "高濃度VC25g　1/2V（12.5g）\n硫酸Mg　5ml\nクリストファン　1A\nビタメジン　1V\nパントール　1A\nハイプレアミン　1P\nニチファーゲン　1P",
      "福岡院": "高濃度VC25g　1/2V（12.5g）\n硫酸Mg　5ml\nクリストファン　1A\nビタメジン　1V\nパントール　1A\nハイプレアミン　1P\nニチファーゲン　1P"
    }
  },
  {
    "name": "デトックススペシャル点滴",
    "initial": "¥10,800",
    "regular": "¥15,000",
    "clinics": {
      "新宿院": "高濃度VC25g　1/2V（12.5g）\n硫酸Mg　5ml\n＋\n生食50ml　1B\nグルタチオン600㎎　2A",
      "心斎橋院": "高濃度VC25g　1/2V（12.5g）\n硫酸Mg　5ml\n＋\n生食50ml　1B\nグルタチオン600㎎　2A",
      "福岡院": "高濃度VC25g　1/2V（12.5g）\n硫酸Mg　5ml\n＋\n生食50ml　1B\nグルタチオン600㎎　2A"
    }
  },
  {
    "name": "NMN点滴",
    "initial": "¥20,000",
    "regular": "¥50,000",
    "clinics": {
      "新宿院": "NMN100mg",
      "心斎橋院": "NMN100mg",
      "福岡院": "NMN100mg"
    }
  },
  {
    "name": "エクソソーム点滴",
    "initial": "¥18,000",
    "regular": "¥39,800",
    "clinics": {
      "新宿院": "ステムサップ　1cc",
      "心斎橋院": "エクソソーム",
      "福岡院": "ステムサップ　1cc"
    }
  },
  {
    "name": "白玉注射",
    "initial": "¥1,800",
    "regular": "¥2,500",
    "clinics": {
      "新宿院": "グルタチオン600㎎　1/2Ａ（300㎎）",
      "心斎橋院": "グルタチオン600㎎",
      "福岡院": "グルタチオン300㎎"
    }
  },
  {
    "name": "白玉注射W",
    "initial": "¥3,000",
    "regular": "¥4,500",
    "clinics": {
      "新宿院": "グルタチオン600㎎　1A",
      "心斎橋院": "グルタチオン1200㎎",
      "福岡院": "グルタチオン1200㎎"
    }
  },
  {
    "name": "二日酔い予防注射",
    "initial": "¥1,800",
    "regular": "¥2,500",
    "clinics": {
      "新宿院": "ニチファーゲン　1/2P\nピドキサール30㎎　1A\nフラビタン10㎎　1A\nアスコルビン酸500㎎　1A",
      "心斎橋院": "ニチファーゲン　1/2P\nピドキサール30mg 1A\nフラビタン10mg 1A\n アスコル瓶酸500mg 1A",
      "福岡院": "ニチファーゲン　1/2P\nピドキサール30㎎　1A\nフラビタン10㎎　1A\nアスコルビン酸500㎎　1A"
    }
  },
  {
    "name": "にんにく注射",
    "initial": "¥1,800",
    "regular": "¥2,500",
    "clinics": {
      "新宿院": "アリナミンF25㎎　1A",
      "心斎橋院": "20％ブドウ糖10ml\r\nアリナミンF25ｍｇ　1A",
      "福岡院": "アリナミンF25㎎　1A"
    }
  },
  {
    "name": "プラセンタ注射",
    "initial": "¥500",
    "regular": "¥1,000",
    "clinics": {
      "新宿院": "ラエンネック　2Ａ",
      "心斎橋院": "ラエンネック　2Ａ",
      "福岡院": "ラエンネック　2Ａ"
    }
  }
];
  const clinic = document.getElementById("recipeClinic");
  const menu = document.getElementById("recipeMenu");
  const box = document.getElementById("recipeResultBox");
  const title = document.getElementById("recipeTitle");
  const price = document.getElementById("recipePrice");
  const ingredients = document.getElementById("recipeIngredients");

  recipes.forEach((recipe, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = recipe.name;
    menu.appendChild(option);
  });

  function updateRecipe() {
    const recipe = menu.value === "" ? null : recipes[Number(menu.value)];
    box.className = recipe ? "result-box" : "result-box is-neutral";
    title.textContent = recipe ? recipe.name + "（" + clinic.value + "）" : "メニューを選択してください";
    price.textContent = recipe ? "初回：" + recipe.initial + "　通常：" + recipe.regular : "";
    ingredients.textContent = recipe ? recipe.clinics[clinic.value] : "院・メニューを選択すると、成分と料金が表示されます。";
  }

  clinic.addEventListener("change", updateRecipe);
  menu.addEventListener("change", updateRecipe);

  // 既存のタブ切替処理を利用して、レシピへの直接リンクも復元する。
  if (new URLSearchParams(window.location.search).get("tab") === "recipe") {
    document.querySelector('[data-target="recipe"]').click();
  }
});
