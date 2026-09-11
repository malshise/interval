"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Calculator Tabs
    =========================== */

    const tabs =
        document.querySelectorAll(".calculator-tab");

    const panels =
        document.querySelectorAll(".calculator-panel");

    function openCalculatorTab(targetName) {

        tabs.forEach((tab) => {
            const isActive =
                tab.dataset.target === targetName;

            tab.classList.toggle("active", isActive);

            tab.setAttribute(
                "aria-selected",
                String(isActive)
            );
        });

        panels.forEach((panel) => {
            const isActive =
                panel.dataset.panel === targetName;

            panel.hidden = !isActive;
        });
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            openCalculatorTab(tab.dataset.target);

            const url =
                new URL(window.location.href);

            url.searchParams.set(
                "tab",
                tab.dataset.target
            );

            history.replaceState(
                null,
                "",
                url
            );
        });
    });

    const requestedTab =
        new URLSearchParams(
            window.location.search
        ).get("tab");

    const validTabs = [
        "interval",
        "restriction",
        "drug"
    ];

    openCalculatorTab(
        validTabs.includes(requestedTab)
            ? requestedTab
            : "interval"
    );

    /* この下に今の treatments・intervalData・
       restrictionData・drugData をそのまま置く */
});

  const treatments = [{"label": "フォトフェイシャル", "beforeKey": "フォトアクネ", "afterKey": "フォトアクネ"}, {"label": "アクネフォト", "beforeKey": "フォトアクネ", "afterKey": "フォトアクネ"}, {"label": "ハイドラジェントル", "beforeKey": "ハイドラララドクター", "afterKey": "ハイドラ"}, {"label": "ララドクター", "beforeKey": "ハイドラララドクター", "afterKey": "ハイドラ"}, {"label": "ケアシス", "beforeKey": "ケアシス", "afterKey": "ケアシス"}, {"label": "HIFUドット", "beforeKey": "ハイフ(ドット)", "afterKey": "ハイフ(ドット)"}, {"label": "HIFUリニア", "beforeKey": "ハイフ(リニア)", "afterKey": "ハイフ(リニア)"}, {"label": "医療脱毛（顔）", "beforeKey": "脱毛(顔)", "afterKey": "脱毛(顔)"}, {"label": "医療脱毛（体）", "beforeKey": "脱毛(体)", "afterKey": "脱毛(体)"}, {"label": "ピコフラクショナル", "beforeKey": "ピコトーニングフラクショナル", "afterKey": "ピコトーニングフラクショナル"}, {"label": "ピコトーニング", "beforeKey": "ピコトーニングフラクショナル", "afterKey": "ピコトーニングフラクショナル"}, {"label": "ピコスポット", "beforeKey": "シミ取り(ピコスポット)", "afterKey": "シミ取り(ピコスポット)"}, {"label": "ダーマペン", "beforeKey": "ダーマペン", "afterKey": "ダーマペン"}, {"label": "ハイコックス", "beforeKey": "ハイコックスメソガン(水光注射)", "afterKey": "ハイコックスメソガン(水光注射)"}, {"label": "メソガン", "beforeKey": "ハイコックスメソガン(水光注射)", "afterKey": "ハイコックスメソガン(水光注射)"}, {"label": "マッサージピール・アマルフィーピール", "beforeKey": "マッサージピールララドクター", "afterKey": "マッサージララドクター"}, {"label": "ミラノリピール（顔）", "beforeKey": "ミラノ(顔)サリチル酸ピール", "afterKey": "ミラノ(顔)サリチル酸"}, {"label": "サリチル酸ピール", "beforeKey": "ミラノ(顔)サリチル酸ピール", "afterKey": "ミラノ(顔)サリチル酸"}, {"label": "ミラノリピール（体）", "beforeKey": "ミラノ(体)", "afterKey": "ミラノ(体)"}, {"label": "ボトックス", "beforeKey": "ボトックス", "afterKey": "BTX"}, {"label": "ヒアルロン酸・肌育注射", "beforeKey": "ヒアルロン酸肌育注射(Dr.注射)", "afterKey": "ヒアルロン酸肌育注射(Dr.注射)"}, {"label": "Fat Xcore", "beforeKey": "カベリンＦａｔＸcore", "afterKey": "カベリンＦａｔＸcore"}, {"label": "ショートスレッド", "beforeKey": "ショートスレッド", "afterKey": "ショートスレッド"}, {"label": "ポテンツァダイヤモンド", "beforeKey": "ダイヤモンド", "afterKey": "ダイヤモンド"}, {"label": "ポテンツァ", "beforeKey": "ポテンツァCP/A/S", "afterKey": "ポテCP/A/S"}, {"label": "リバースピール", "beforeKey": "リバースピール", "afterKey": "リバースピール"}, {"label": "デンシティ", "beforeKey": "デンシティ", "afterKey": "デンシティ"}, {"label": "ローマピンク（体）", "beforeKey": "ローマピンク(体)", "afterKey": "ローマピンク(体)"}, {"label": "ローマピンク（唇）", "beforeKey": "ローマピンク(唇)", "afterKey": "ローマピンク(唇)"}];
  const intervalData = {"フォトアクネ": {"フォトアクネ": "1M", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "1M", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "1M", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "2W", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "2W", "ポテCP/A/S": "1M", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ハイドラララドクター": {"フォトアクネ": "即日", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "即日", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "即日", "ハイコックスメソガン(水光注射)": "即日", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "即日", "ポテCP/A/S": "即日", "リバースピール": "2W", "デンシティ": "即日", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ケアシス": {"フォトアクネ": "即日", "ハイドラ": "即日", "ケアシス": "即日", "ハイフ(ドット)": "即日", "ハイフ(リニア)": "即日", "脱毛(顔)": "即日", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "即日", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "即日", "ハイコックスメソガン(水光注射)": "即日", "マッサージララドクター": "即日", "ミラノ(顔)サリチル酸": "即日", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "即日", "ポテCP/A/S": "即日", "リバースピール": "即日", "デンシティ": "即日", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ハイフ(ドット)": {"フォトアクネ": "即日", "ハイドラ": "即日", "ケアシス": "即日", "ハイフ(ドット)": "3M", "ハイフ(リニア)": "2W", "脱毛(顔)": "即日", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "即日", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "即日", "ハイコックスメソガン(水光注射)": "即日", "マッサージララドクター": "即日", "ミラノ(顔)サリチル酸": "即日", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "即日", "ポテCP/A/S": "即日", "リバースピール": "即日", "デンシティ": "※2 即日", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ハイフ(リニア)": {"フォトアクネ": "即日", "ハイドラ": "即日", "ケアシス": "即日", "ハイフ(ドット)": "即日", "ハイフ(リニア)": "2W", "脱毛(顔)": "即日", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "即日", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "即日", "ハイコックスメソガン(水光注射)": "即日", "マッサージララドクター": "即日", "ミラノ(顔)サリチル酸": "即日", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "即日", "ポテCP/A/S": "即日", "リバースピール": "即日", "デンシティ": "即日", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "脱毛(顔)": {"フォトアクネ": "1M", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "1M", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "2W", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "1M", "ハイコックスメソガン(水光注射)": "1M", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "2W", "ポテCP/A/S": "1M", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1M"}, "脱毛(体)": {"フォトアクネ": "要確認", "ハイドラ": "要確認", "ケアシス": "要確認", "ハイフ(ドット)": "要確認", "ハイフ(リニア)": "要確認", "脱毛(顔)": "要確認", "脱毛(体)": "2M", "ピコトーニングフラクショナル": "要確認", "シミ取り(ピコスポット)": "要確認", "ダーマペン": "要確認", "ハイコックスメソガン(水光注射)": "要確認", "マッサージララドクター": "要確認", "ミラノ(顔)サリチル酸": "要確認", "ミラノ(体)": "1M", "BTX": "要確認", "ヒアルロン酸肌育注射(Dr.注射)": "要確認", "カベリンＦａｔＸcore": "要確認", "ショートスレッド": "要確認", "ダイヤモンド": "要確認", "ポテCP/A/S": "要確認", "リバースピール": "要確認", "デンシティ": "要確認", "ローマピンク(体)": "1M", "ローマピンク(唇)": "1M"}, "ピコトーニングフラクショナル": {"フォトアクネ": "2W", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "2W", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "2W", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "2W", "ポテCP/A/S": "2W", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "シミ取り(ピコスポット)": {"フォトアクネ": "避けて即日", "ハイドラ": "避けて即日", "ケアシス": "避けて即日", "ハイフ(ドット)": "避けて即日", "ハイフ(リニア)": "避けて即日", "脱毛(顔)": "避けて即日", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "避けて即日", "シミ取り(ピコスポット)": "3～6M", "ダーマペン": "避けて即日", "ハイコックスメソガン(水光注射)": "避けて即日", "マッサージララドクター": "避けて即日", "ミラノ(顔)サリチル酸": "避けて即日", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "避けて即日", "ポテCP/A/S": "避けて即日", "リバースピール": "避けて即日", "デンシティ": "避けて即日", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ダーマペン": {"フォトアクネ": "2W", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "2W", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "2W", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "1W", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "2W", "ダイヤモンド": "2W", "ポテCP/A/S": "2W", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ハイコックスメソガン(水光注射)": {"フォトアクネ": "2W", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "2W", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "2W", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "1W", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "2W", "ダイヤモンド": "2W", "ポテCP/A/S": "2W", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "マッサージピールララドクター": {"フォトアクネ": "即日", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "即日", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "即日", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "2W", "ポテCP/A/S": "2W", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ミラノ(顔)サリチル酸ピール": {"フォトアクネ": "即日", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "即日", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "即日", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "2W", "ポテCP/A/S": "2W", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ミラノ(体)": {"フォトアクネ": "要確認", "ハイドラ": "要確認", "ケアシス": "要確認", "ハイフ(ドット)": "要確認", "ハイフ(リニア)": "要確認", "脱毛(顔)": "要確認", "脱毛(体)": "1M", "ピコトーニングフラクショナル": "要確認", "シミ取り(ピコスポット)": "要確認", "ダーマペン": "要確認", "ハイコックスメソガン(水光注射)": "要確認", "マッサージララドクター": "要確認", "ミラノ(顔)サリチル酸": "要確認", "ミラノ(体)": "1M", "BTX": "要確認", "ヒアルロン酸肌育注射(Dr.注射)": "要確認", "カベリンＦａｔＸcore": "要確認", "ショートスレッド": "要確認", "ダイヤモンド": "要確認", "ポテCP/A/S": "要確認", "リバースピール": "要確認", "デンシティ": "要確認", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ボトックス": {"フォトアクネ": "2W", "ハイドラ": "2W", "ケアシス": "2W", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "2W", "シミ取り(ピコスポット)": "2W", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "2W", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "3M", "ヒアルロン酸肌育注射(Dr.注射)": "※1ヒアル即日 肌育部位被る ところは1W", "カベリンＦａｔＸcore": "即日 エラ2W", "ショートスレッド": "即日", "ダイヤモンド": "2W", "ポテCP/A/S": "2W", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "即日"}, "ヒアルロン酸肌育注射(Dr.注射)": {"フォトアクネ": "2W", "ハイドラ": "2W", "ケアシス": "2W", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "2W", "シミ取り(ピコスポット)": "2W", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "2W", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "※1ヒアル即日 肌育部位被る ところは1W", "ヒアルロン酸肌育注射(Dr.注射)": "Dr判断", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "肌育即日 ヒアル2W", "ダイヤモンド": "2W", "ポテCP/A/S": "2W", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "即日 ※唇ヒアル のみ1M"}, "カベリンＦａｔＸcore": {"フォトアクネ": "1W", "ハイドラ": "1W", "ケアシス": "1W", "ハイフ(ドット)": "1W", "ハイフ(リニア)": "1W", "脱毛(顔)": "1W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "1W", "シミ取り(ピコスポット)": "1W", "ダーマペン": "1W", "ハイコックスメソガン(水光注射)": "1W", "マッサージララドクター": "1W", "ミラノ(顔)サリチル酸": "1W", "ミラノ(体)": "要確認", "BTX": "即日 エラ注意", "ヒアルロン酸肌育注射(Dr.注射)": "1W", "カベリンＦａｔＸcore": "1W", "ショートスレッド": "1W", "ダイヤモンド": "1W", "ポテCP/A/S": "1W", "リバースピール": "1W", "デンシティ": "1W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "即日"}, "ショートスレッド": {"フォトアクネ": "1M", "ハイドラ": "1M", "ケアシス": "1M", "ハイフ(ドット)": "1M", "ハイフ(リニア)": "1M", "脱毛(顔)": "1M", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "1M", "シミ取り(ピコスポット)": "1M", "ダーマペン": "1M", "ハイコックスメソガン(水光注射)": "1M", "マッサージララドクター": "1M", "ミラノ(顔)サリチル酸": "1M", "ミラノ(体)": "2W", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "肌育は即日 ヒアル部位被る ところは2W", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "1M", "ダイヤモンド": "1M", "ポテCP/A/S": "1M", "リバースピール": "1M", "デンシティ": "1M", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "即日"}, "ダイヤモンド": {"フォトアクネ": "即日", "ハイドラ": "即日", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "即日", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "即日", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "即日", "ハイコックスメソガン(水光注射)": "即日", "マッサージララドクター": "即日", "ミラノ(顔)サリチル酸": "即日", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "2W", "ポテCP/A/S": "即日", "リバースピール": "即日", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ポテンツァCP/A/S": {"フォトアクネ": "1M", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "1M", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "2W", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "1W", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "2W", "ダイヤモンド": "2W", "ポテCP/A/S": "1M", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "リバースピール": {"フォトアクネ": "2W", "ハイドラ": "2W", "ケアシス": "即日", "ハイフ(ドット)": "2W", "ハイフ(リニア)": "2W", "脱毛(顔)": "2W", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "2W", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "2W", "ハイコックスメソガン(水光注射)": "2W", "マッサージララドクター": "2W", "ミラノ(顔)サリチル酸": "2W", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "2W", "ポテCP/A/S": "2W", "リバースピール": "2W", "デンシティ": "2W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "デンシティ": {"フォトアクネ": "即日", "ハイドラ": "即日", "ケアシス": "即日", "ハイフ(ドット)": "1M", "ハイフ(リニア)": "2W", "脱毛(顔)": "即日", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "即日", "シミ取り(ピコスポット)": "避けて即日", "ダーマペン": "即日", "ハイコックスメソガン(水光注射)": "即日", "マッサージララドクター": "即日", "ミラノ(顔)サリチル酸": "即日", "ミラノ(体)": "要確認", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "即日", "ダイヤモンド": "即日", "ポテCP/A/S": "即日", "リバースピール": "即日", "デンシティ": "3M", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "1W"}, "ローマピンク(体)": {"フォトアクネ": "要確認", "ハイドラ": "要確認", "ケアシス": "要確認", "ハイフ(ドット)": "要確認", "ハイフ(リニア)": "要確認", "脱毛(顔)": "要確認", "脱毛(体)": "1M", "ピコトーニングフラクショナル": "要確認", "シミ取り(ピコスポット)": "要確認", "ダーマペン": "要確認", "ハイコックスメソガン(水光注射)": "要確認", "マッサージララドクター": "要確認", "ミラノ(顔)サリチル酸": "要確認", "ミラノ(体)": "要確認", "BTX": "要確認", "ヒアルロン酸肌育注射(Dr.注射)": "要確認", "カベリンＦａｔＸcore": "要確認", "ショートスレッド": "要確認", "ダイヤモンド": "要確認", "ポテCP/A/S": "要確認", "リバースピール": "要確認", "デンシティ": "要確認", "ローマピンク(体)": "要相談", "ローマピンク(唇)": "要確認"}, "ローマピンク(唇)": {"フォトアクネ": "1W", "ハイドラ": "1W", "ケアシス": "1W", "ハイフ(ドット)": "1W", "ハイフ(リニア)": "1W", "脱毛(顔)": "1M", "脱毛(体)": "即日", "ピコトーニングフラクショナル": "1W", "シミ取り(ピコスポット)": "1W", "ダーマペン": "1W", "ハイコックスメソガン(水光注射)": "1W", "マッサージララドクター": "1W", "ミラノ(顔)サリチル酸": "1W", "ミラノ(体)": "即日", "BTX": "即日", "ヒアルロン酸肌育注射(Dr.注射)": "即日 ※唇ヒアル のみ1M", "カベリンＦａｔＸcore": "即日", "ショートスレッド": "1W", "ダイヤモンド": "1W", "ポテCP/A/S": "1W", "リバースピール": "1W", "デンシティ": "1W", "ローマピンク(体)": "要確認", "ローマピンク(唇)": "要相談"}};
  // ===== 他院・当院未取り扱い施術の追加 =====

  // 既存の施術ルールと同じ間隔として扱うもの
  const sameIntervalAliases = [
    { label:"ポテダイヤ", key:"ダイヤモンド" },
    { label:"ドット", key:"ハイフ(ドット)" },
    { label:"リニア", key:"ハイフ(リニア)" },

    { label:"ボルニューマ", key:"デンシティ" },
    { label:"オリジオX", key:"デンシティ" },
    { label:"ザーフ", key:"デンシティ" },

    { label:"サーマジェン", key:"ダイヤモンド" },
    { label:"シルファームX", key:"ダイヤモンド" },
    { label:"オンダリフト", key:"ダイヤモンド" },
    { label:"ソフウェーブ", key:"ダイヤモンド" },

    { label:"ウルセラ", key:"ハイフ(ドット)" },
    { label:"ウルトラフォーマー", key:"ハイフ(ドット)" },

    { label:"インモード", key:"ハイフ(リニア)" },

    { label:"LDM", key:"ケアシス" },

    { label:"ジェネシス", key:"フォトアクネ" },
    { label:"Vビーム", key:"フォトアクネ" },
    { label:"ルビフラ", key:"フォトアクネ" },
    { label:"アビクリア", key:"フォトアクネ" }
  ];

  // 施術から1ヶ月空けるもの
  const oneMonthTreatments = [
    "キュアジェット",
    "サブシジョン",
    "トライフィル"
  ];

  // 重複しないように施術リストへ追加
  function addTreatmentIfMissing(label, beforeKey, afterKey){
    const exists = treatments.some(item => item.label === label);
    if(!exists){
      treatments.push({
        label: label,
        beforeKey: beforeKey,
        afterKey: afterKey
      });
    }
  }

  // 同一間隔扱いの施術を追加
  sameIntervalAliases.forEach(item => {
    addTreatmentIfMissing(item.label, item.key, item.key);
  });

  // 1ヶ月空ける施術を追加
  oneMonthTreatments.forEach(label => {
    addTreatmentIfMissing(label, label, label);

    if(!intervalData[label]){
      intervalData[label] = {};
    }

    // その施術を先に受けた場合 → 何を後に受けても1ヶ月
    treatments.forEach(treatment => {
      intervalData[label][treatment.afterKey] = "1M";
    });

    // その施術を後に受ける場合 → 何を先に受けても1ヶ月
    Object.keys(intervalData).forEach(beforeKey => {
      intervalData[beforeKey][label] = "1M";
    });

    // 同じ施術同士も1ヶ月
    intervalData[label][label] = "1M";
  });
  const beforeSelect = document.getElementById('beforeTreatment');
  const afterSelect = document.getElementById('afterTreatment');
  const resultBox = document.getElementById('resultBox');
  const resultText = document.getElementById('resultText');
  const resultNote = document.getElementById('resultNote');

  function addOptions(select, type){
    treatments.forEach(item => {
      const option = document.createElement('option');
      option.value = item.label;
      option.textContent = item.label;
      option.dataset.key = type === 'before' ? item.beforeKey : item.afterKey;
      select.appendChild(option);
    });
  }

  function formatInterval(value){
    const v = String(value || '').trim();
    if(!v || v === '要確認') return '要確認です';
    if(v === '即日') return '即日施術可能です';
    if(v === '避けて即日') return '同日でも可能ですが、照射部位を避けてください';
    if(v.includes('要相談')) return '要相談です';
    if(v.includes('M')) return v.replace(/M/g,'ヶ月') + 'の施術間隔が必要です';
    if(v.includes('W')) return v.replace(/W/g,'週間') + 'の施術間隔が必要です';
    return v + ' の確認が必要です';
  }

  function getSelectedKey(select){
    return select.options[select.selectedIndex]?.dataset.key || '';
  }

  function updateResult(){
    const beforeLabel = beforeSelect.value;
    const afterLabel = afterSelect.value;
    const beforeKey = getSelectedKey(beforeSelect);
    const afterKey = getSelectedKey(afterSelect);

    resultBox.className = 'result-box is-neutral';

    if(!beforeLabel || !afterLabel){
      resultText.textContent = '施術を選択してください';
      resultNote.textContent = '先に受ける施術・後に受ける施術の両方を選択してください。';
      return;
    }

    const value = intervalData[beforeKey]?.[afterKey] || '要確認';
    resultText.textContent = formatInterval(value);
    resultNote.textContent = `先：${beforeLabel} ／ 後：${afterLabel}`;

    if(value === '即日'){
      resultBox.className = 'result-box';
    }else if(String(value).includes('要') || value === '要確認'){
      resultBox.className = 'result-box is-danger';
    }else{
      resultBox.className = 'result-box is-warning';
    }
  }

  addOptions(beforeSelect, 'before');
  addOptions(afterSelect, 'after');
  beforeSelect.addEventListener('change', updateResult);
  afterSelect.addEventListener('change', updateResult);

  const restrictionData = {
    "外科オペ": {
      "糸": {
        result: "1ヶ月空けてください",
        note: "感覚異常がある場合は、その部位は避けてください。"
      },
      "二重": {
        result: "即日可能です",
        note: "ただし内出血がある場合は避けてください。"
      },
      "鼻": {
        result: "1ヶ月空けてください",
        note: "感覚異常がある場合は、その部位は避けてください。"
      },
      "くまとり（脱脂）": {
        result: "1ヶ月空けてください",
        note: "内出血がある場合は避けてください。"
      },
      "脂肪注入": {
        result: "1ヶ月空けてください",
        note: "感覚異常がある場合は、その部位は避けてください。"
      },
      "脂肪吸引": {
        result: "1ヶ月空けてください",
        note: "感覚異常がある場合は、その部位は避けてください。"
      },
      "骨切り": {
        result: "3ヶ月空けてください",
        note: "感覚異常がある場合は、その部位は避けてください。"
      }
    },

    "アートメイク": {
      "眉": {
        result: "前後3週間不可です",
        note: "期間が空いていない場合は、こめかみ〜額を避けてください。"
      },
      "リップ": {
        result: "前後3週間不可です",
        note: "期間が空いていない場合は、鼻下と顎を避けてください。"
      }
    },

    "脱毛(医療以外)": {
      "エステ・家庭用脱毛器": {
        result: "前後2週間空けてください",
        note: "ローマピンク後は1ヵ月（皮むけや乾燥著明であれば避ける） "
      },
      "毛抜き": {
        result: "1ヶ月空けてください",
        note: "毛抜き後は脱毛効果に影響する可能性があります。\n施術前後1ヶ月は毛抜きを控えてください。"
      },
  
    },

    "エステ・美顔器": {
      "エステ施術": {
        result: "2週間空けてください",
        note: "施術前後の肌状態により現場確認してください。"
      },
      "美顔器：施術前": {
        result: "前日まで可能です",
        note: "当日は避けるのが安心です。"
      },
      "美顔器：施術後": {
        result: "1週間後から可能です",
        note: "医師施術後は2週間後からです。"
      }
    },

    "点滴": {
      "エクソソーム × VC": {
        result: "3日空けてください",
        note: "エクソソームとVCの組み合わせのみ注意してください。"
      },
      "その他": {
        result: "混ぜてOKです",
        note: "基本的には同日可能です。"
      }
    }
  };

  const restrictionCategory = document.getElementById("restrictionCategory");
  const restrictionItem = document.getElementById("restrictionItem");
  const restrictionResultBox = document.getElementById("restrictionResultBox");
  const restrictionResultText = document.getElementById("restrictionResultText");
  const restrictionResultNote = document.getElementById("restrictionResultNote");


  restrictionCategory.innerHTML = '<option value="">選択してください</option>';

  Object.keys(restrictionData).forEach(function(category){
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    restrictionCategory.appendChild(option);
  });

  restrictionCategory.addEventListener("change", function(){
    const selectedCategory = restrictionCategory.value;

    restrictionItem.innerHTML = '<option value="">選択してください</option>';
    restrictionResultBox.className = "result-box is-neutral";
    restrictionResultText.textContent = "項目を選択してください";
    restrictionResultNote.textContent = "カテゴリ・項目を選択すると、必要な間隔が表示されます。";

    if(!selectedCategory) return;

    Object.keys(restrictionData[selectedCategory]).forEach(function(item){
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      restrictionItem.appendChild(option);
    });
  });

  restrictionItem.addEventListener("change", function(){
    const selectedCategory = restrictionCategory.value;
    const selectedItem = restrictionItem.value;

    if(!selectedCategory || !selectedItem){
      restrictionResultBox.className = "result-box is-neutral";
      restrictionResultText.textContent = "項目を選択してください";
      restrictionResultNote.textContent = "カテゴリ・項目を選択すると、必要な間隔が表示されます。";
      return;
    }

    const rule = restrictionData[selectedCategory][selectedItem];

    restrictionResultText.textContent = rule.result;
    restrictionResultNote.textContent = rule.note;

    if(rule.result.includes("即日") || rule.result.includes("OK") || rule.result.includes("可能")){
      restrictionResultBox.className = "result-box";
    }else if(rule.result.includes("不可") || rule.result.includes("要")){
      restrictionResultBox.className = "result-box is-danger";
    }else{
      restrictionResultBox.className = "result-box is-warning";
    }
  });

//薬剤//

document.addEventListener("DOMContentLoaded", () => {
  const drugData = {
    "水光注射": {
      "スキンボトックス": [
        { menu:"スキンボトックス全顔", amount:"ボツラックス50単位" },
        { menu:"スキンボトックス全顔＋首", amount:"ボツラックス70単位" }
      ],
      "リジュラン": [
        { menu:"リジュラン全顔", amount:"リジュラン2ml ※リジュランスキンブースター" },
        { menu:"リジュランダブル全顔", amount:"リジュラン4ml ※リジュランスキンブースター" },
        { menu:"リジュラン全顔＋首", amount:"要確認" }
      ],
      "ジュベルック": [
        { menu:"ジュベルック全顔", amount:"ジュベルック1ml" },
        { menu:"ジュベルックダブル全顔", amount:"ジュベルック2ml" },
        { menu:"ジュベルック全顔＋首", amount:"要確認" }
      ],
      "スネコス": [
        { menu:"スネコス全顔", amount:"スネコス2ml" },
        { menu:"スネコス全顔＋首", amount:"要確認" }
      ],
      "デイリーオリジナル": [
        { menu:"デイリーオリジナル全顔", amount:"リジュラン1ml＋ジュベルック1ml" },
        { menu:"デイリーオリジナルダブル全顔", amount:"リジュラン2ml＋ジュベルック2ml" },
        { menu:"デイリーオリジナル全顔＋首", amount:"要確認" }
      ],
      "エクソソーム": [
        { menu:"エクソソーム全顔", amount:"エクソソーム1ml" },
        { menu:"エクソソーム全顔＋首", amount:"要確認" }
      ],
      "ACRS": [
        { menu:"ACRS全顔", amount:"原液4ml" }
      ]
    },

    "ポテンツァ": {
      "BENEV": [
        { menu:"BENEV", amount:"3.5ml" }
      ],
      "マックーム": [
        { menu:"マックーム", amount:"3ml（新宿は2ml）" }
      ],
      "リジュラン": [
        { menu:"リジュラン", amount:"2ml" }
      ],
      "ジュベルック": [
        { menu:"ジュベルック", amount:"2ml" }
      ],
      "ボトックスアラガン": [
        { menu:"ボトックスアラガン", amount:"1.5ml" }
      ],
      "エクソソーム": [
        { menu:"エクソソーム", amount:"1ml" }
      ],
      "スネコス": [
        { menu:"スネコス", amount:"2ml" }
      ],
      "デイリースペシャル": [
        { menu:"デイリースペシャル", amount:"マックーム3ml＋エクソソーム1ml（新宿は2ml）" }
      ],
      "デイリープレミアム": [
        { menu:"デイリープレミアム", amount:"ジュベルック2ml＋エクソソーム1ml" }
      ],
      "ジュベルック×リジュラン": [
        { menu:"ジュベルック×リジュラン", amount:"ジュベルック1ml＋リジュラン1ml" }
      ],
      "ジュベルック×マックーム": [
        { menu:"ジュベルック×マックーム", amount:"ジュベルック1ml＋マックーム1ml" }
      ],
      "リジュラン×ボトックス": [
        { menu:"リジュラン×ボトックス", amount:"リジュラン2cc＋ボツラックス0.5cc" }
      ]
    }
  };

  const drugTreatment = document.getElementById("drugTreatment");
  const drugName = document.getElementById("drugName");
  const drugResultList = document.getElementById("drugResultList");
  const drugResultBox = document.getElementById("drugResultBox");

  Object.keys(drugData).forEach(treatment => {
    const option = document.createElement("option");
    option.value = treatment;
    option.textContent = treatment;
    drugTreatment.appendChild(option);
  });

  drugTreatment.addEventListener("change", function(){
    const selectedTreatment = drugTreatment.value;

    drugName.innerHTML = '<option value="">選択してください</option>';
    drugResultList.textContent = "薬剤を選択すると、使用量が表示されます。";

    if(!selectedTreatment) return;

    Object.keys(drugData[selectedTreatment]).forEach(drug => {
      const option = document.createElement("option");
      option.value = drug;
      option.textContent = drug;
      drugName.appendChild(option);
    });
  });

  drugName.addEventListener("change", function(){
    const selectedTreatment = drugTreatment.value;
    const selectedDrug = drugName.value;

    if(!selectedTreatment || !selectedDrug){
      drugResultList.textContent = "施術・薬剤を選択すると、使用量が表示されます。";
      return;
    }

    const items = drugData[selectedTreatment][selectedDrug];

    drugResultList.innerHTML = items.map(item => `
      <div class="drug-result-item">
        <strong>${item.menu}</strong>
        <span>${item.amount}</span>
      </div>
    `).join("");
  });
});
