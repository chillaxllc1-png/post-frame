import { redirect } from "next/navigation";
import { canGoDisplay, resetAll } from "../_routeFlags";

export default function DisplayPage(props: {
    originalText?: string;
    sliceA?: string;
    sliceB?: string;
    sliceC?: string;
    gapAxis?: string;
    gapContext?: string;
    gapBranch?: string;
    hasBreakerTag?: boolean;
}) {
    // 実行時のみ判定（ビルド時には走らない）
    if (!canGoDisplay) {
        redirect("/");
    }

    // 初回表示後は即無効化
    resetAll();

    const {
        originalText,
        sliceA,
        sliceB,
        sliceC,
        gapAxis,
        gapContext,
        gapBranch,
        hasBreakerTag,
    } = props;

    return (
        <main>
            <section data-section="input-target">
                <header>
                    <h2>［入力された対象］</h2>
                </header>

                <p data-role="fixed-note">
                    ※ 以下は、観測対象として配置された原文です
                    （評価・判定・解釈は行いません）
                </p>

                <div data-role="original-content">
                    {originalText}
                </div>
            </section>

            <section data-section="discussion-slices">
                <header>
                    <h2>［観測された議論断面］</h2>
                </header>

                {sliceA && (
                    <div data-slice="A">
                        <h3>断面A</h3>
                        <div data-role="slice-content">{sliceA}</div>
                    </div>
                )}

                {sliceB && (
                    <div data-slice="B">
                        <h3>断面B</h3>
                        <div data-role="slice-content">{sliceB}</div>
                    </div>
                )}

                {sliceC && (
                    <div data-slice="C">
                        <h3>断面C</h3>
                        <div data-role="slice-content">{sliceC}</div>
                    </div>
                )}
            </section>

            <section data-section="gap-points">
                <header>
                    <h2>［ズレ発生ポイント］</h2>
                </header>

                <ul>
                    {gapAxis && (
                        <li data-gap="axis">
                            <span>観測軸</span>
                            <div data-role="gap-content">{gapAxis}</div>
                        </li>
                    )}

                    {gapContext && (
                        <li data-gap="context">
                            <span>前提文脈</span>
                            <div data-role="gap-content">{gapContext}</div>
                        </li>
                    )}

                    {gapBranch && (
                        <li data-gap="branch">
                            <span>解釈が分岐した位置</span>
                            <div data-role="gap-content">{gapBranch}</div>
                        </li>
                    )}
                </ul>
            </section>

            <section data-section="structure-tags">
                <header>
                    <h2>［構造タグ］</h2>
                </header>

                <ul>
                    {hasBreakerTag && (
                        <li data-tag="breaker-check">
                            ◻ ブレーカーチェック対象
                        </li>
                    )}
                </ul>
            </section>
        </main>
    );
}