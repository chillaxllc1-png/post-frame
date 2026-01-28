"use client";

import { redirect, useRouter } from "next/navigation";
import { canGoCheckout, allowDisplay } from "../_routeFlags";

if (!canGoCheckout) {
    redirect("/");
}

export default function CheckoutPage() {
    const router = useRouter();

    function handleCheckoutExecute() {
        allowDisplay();
        router.push("/display");
    }

    return (
        <main>
            <section data-section="checkout-summary">
                <header>
                    <h2>［表示条件］</h2>
                </header>

                <ul>
                    <li data-item="price">
                        <span>価格</span>
                        <div>300円</div>
                    </li>

                    <li data-item="execution">
                        <span>対価</span>
                        <div>表示の実行</div>
                    </li>

                    <li data-item="restriction">
                        <span>制限</span>
                        <div>再表示不可</div>
                    </li>
                </ul>
            </section>

            <section data-section="checkout-action">
                <button
                    data-role="checkout-execute"
                    onClick={handleCheckoutExecute}
                >
                    ［300円で表示を実行］
                </button>
            </section>
        </main>
    );
}