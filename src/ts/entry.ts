
declare var window:Window;

namespace entry {
  // Entry pointの定義
  export function entry_point(): any {
    return say;
  }

  function say() {
    console.log("hello");
  }
}

// HTMLからEntry pointへアクセスできるように公開する
window.onload = entry.entry_point();
