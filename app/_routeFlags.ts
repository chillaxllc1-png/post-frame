// メモリ上のみ（永続化しない）
export let canGoCheckout = false;
export let canGoDisplay = false;

export function allowCheckout() {
    canGoCheckout = true;
}

export function allowDisplay() {
    canGoDisplay = true;
}

export function resetAll() {
    canGoCheckout = false;
    canGoDisplay = false;
}