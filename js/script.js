// コーディング規約などによってdata属性が使えない場合があるため、セレクタは定数として保持しておく
const NAV_SEL = '[data-nav]';
const TRIGGER_SEL = '[data-nav-trigger]';
const OVERLAY_SEL = '[data-nav-overlay]';

const OPEN_CLASS = 'is-open';

const nav = document.querySelector(`${NAV_SEL}`);
const trigger = document.querySelector(`${TRIGGER_SEL}`);
const overlay = document.querySelector(`${OVERLAY_SEL}`);
const navAnchors = nav.querySelectorAll('a');

// ナビを開閉する関数
const toggleNav = () => {
	nav.classList.toggle(OPEN_CLASS);
	trigger.classList.toggle(OPEN_CLASS);
	overlay.classList.toggle(OPEN_CLASS);
}

// ハンバーガーボタンをクリックしたとき
trigger.addEventListener('click', () => {
	toggleNav();
});

// オーバーレイをクリックしたとき
overlay.addEventListener('click', () => {
	if (nav.classList.contains(OPEN_CLASS)) {
		toggleNav();
	}
});

// ページ内リンクのとき閉じる
navAnchors.forEach(anchor => {
	anchor.addEventListener('click', () => {
		if (nav.classList.contains(OPEN_CLASS)) {
			toggleNav();
		}
	})
});

// オーバーレイにフォーカスが当たるとハンバーガーボタンににフォーカスを戻す
overlay.addEventListener('focus', () => {
	trigger.focus();
})
