/////////////////
// * GLOBALS * //
/////////////////
// #region GLOBALS
/**
 * The list of all audio files to preload.
 * @type {string[]}
 */
const wAudio = [
	// Main content interactions
	'assets/audio/Thunderstrike.webm',
	'assets/audio/The_Wizardium_Choose_Only_The_Anointed.webm',

	// Sonus Arcana section
	'assets/audio/Sonus_Arcana_Regnat.webm',

	// Sanctum modals and hovers
	'assets/audio/Topazurum_modal.webm',
	'assets/audio/Topazurum_hover.webm',
	'assets/audio/Rubynar_modal.webm',
	'assets/audio/Rubynar_hover.webm',
	'assets/audio/Sapphiraz_modal.webm',
	'assets/audio/Sapphiraz_hover.webm',
	'assets/audio/Onyxara_modal.webm',
	'assets/audio/Onyxara_hover.webm',

	// Rune input interactions
	'assets/audio/Rune_Typing.webm',
	'assets/audio/Rune_Error_No_Rune_Offered.webm',
	'assets/audio/Rune_Error_The_Offered_Rune_Is_Unworthy.webm',
	'assets/audio/Rune_Success_One_Of_Us.webm',

	// Covenant Oath section
	'assets/audio/Swear_Your_Oath.webm',

	// Pact Sanctio section
	'assets/audio/Sanctify_The_Pact.webm',

	// Rune ritual
	'assets/audio/Rune-01-Fehu.webm',
	'assets/audio/Rune-02-Uruz.webm',
	'assets/audio/Rune-03-Thurisaz.webm',
	'assets/audio/Rune-04-Ansuz.webm',
	'assets/audio/Rune-05-Raido.webm',
	'assets/audio/Rune-06-Kenaz.webm',
	'assets/audio/Rune-07-Gebo.webm',
	'assets/audio/Rune-08-Wunjo.webm',
	'assets/audio/Rune-09-Hagalaz.webm',
	'assets/audio/Rune-10-Nauthiz.webm',
	'assets/audio/Rune-11-Isa.webm',
	'assets/audio/Rune-12-Jera.webm',
	'assets/audio/Rune-13-Eihwaz.webm',
	'assets/audio/Rune-14-Perthro.webm',
	'assets/audio/Rune-15-Algiz.webm',
	'assets/audio/Rune-16-Sowilo.webm',
	'assets/audio/Rune-17-Tiwaz.webm',
	'assets/audio/Rune-18-Berkano.webm',
	'assets/audio/Rune-19-Ehwaz.webm',
	'assets/audio/Rune-20-Mannaz.webm',
	'assets/audio/Rune-21-Laguz.webm',
	'assets/audio/Rune-22-Ingwaz.webm',
	'assets/audio/Rune-23-Dagaz.webm',
	'assets/audio/Rune-24-Othala.webm',
	'assets/audio/Runic_Ritual_01_Circle_Formation.webm',
	'assets/audio/Runic_Ritual_02_Seismic_Shake_Impact.webm',
	'assets/audio/Runic_Ritual_03_Final_Resonance.webm',

	// Prove Your Worth link
	'assets/audio/Prove_Your_Worth.webm',

	// Altar and modal interactions
	'assets/audio/Altar_Guide.webm',
	'assets/audio/Banish.webm',
	'assets/audio/Fade_Lost_Wanderer.webm'
];

/**
 * Array of rune objects with properties for name, meaning, symbol, audio, and optional key/sanctum data.
 * @typedef {Object} wRunes
 * @property {string} symbol - The Unicode character for the rune.
 * @property {string} name - The name of the rune.
 * @property {string} meaning - The meaning or concept associated with the rune.
 * @property {string} audio - The path to the audio file played during the rune's animation.
 * @property {boolean} [key] - Indicates if the rune is a key rune, triggering special styling.
 * @property {string} [sanctum] - The sanctum associated with key runes, used for glow class.
 * @property {number} [offsetX] - The horizontal offset in pixels applied via `translateX` to center the rune glyph in the `.rune-reveal-container`.
 */
/** @type {wRunes[]} */
const wRunes = [
	{ symbol: "ᚠ", name: "Fehu",     meaning: "Wealth",     audio: "assets/audio/Rune-01-Fehu.webm", offsetX: 6.0 },
	{ symbol: "ᚢ", name: "Uruz",     meaning: "Strength",   audio: "assets/audio/Rune-02-Uruz.webm", key: true, sanctum: "topaz" },
	{ symbol: "ᚦ", name: "Thurisaz", meaning: "Force",      audio: "assets/audio/Rune-03-Thurisaz.webm", offsetX: 10.0 },
	{ symbol: "ᚨ", name: "Ansuz",    meaning: "Wisdom",     audio: "assets/audio/Rune-04-Ansuz.webm", offsetX: 8.0, key: true, sanctum: "ruby" },
	{ symbol: "ᚱ", name: "Raido",    meaning: "Journey",    audio: "assets/audio/Rune-05-Raido.webm", offsetX: 4.0 },
	{ symbol: "ᚲ", name: "Kenaz",    meaning: "Knowledge",  audio: "assets/audio/Rune-06-Kenaz.webm", offsetX: -6.0 },
	{ symbol: "ᚷ", name: "Gebo",     meaning: "Gift",       audio: "assets/audio/Rune-07-Gebo.webm" },
	{ symbol: "ᚹ", name: "Wunjo",    meaning: "Joy",        audio: "assets/audio/Rune-08-Wunjo.webm", offsetX: 10.0 },
	{ symbol: "ᚺ", name: "Hagalaz",  meaning: "Disruption", audio: "assets/audio/Rune-09-Hagalaz.webm" },
	{ symbol: "ᚾ", name: "Nauthiz",  meaning: "Need",       audio: "assets/audio/Rune-10-Nauthiz.webm" },
	{ symbol: "ᛁ", name: "Isa",      meaning: "Stillness",  audio: "assets/audio/Rune-11-Isa.webm" },
	{ symbol: "ᛃ", name: "Jera",     meaning: "Harvest",    audio: "assets/audio/Rune-12-Jera.webm" },
	{ symbol: "ᛇ", name: "Eihwaz",   meaning: "Endurance",  audio: "assets/audio/Rune-13-Eihwaz.webm" },
	{ symbol: "ᛈ", name: "Perthro",  meaning: "Fate",       audio: "assets/audio/Rune-14-Perthro.webm" },
	{ symbol: "ᛉ", name: "Algiz",    meaning: "Protection", audio: "assets/audio/Rune-15-Algiz.webm" },
	{ symbol: "ᛋ", name: "Sowilo",   meaning: "Success",    audio: "assets/audio/Rune-16-Sowilo.webm", key: true, sanctum: "sapphire" },
	{ symbol: "ᛏ", name: "Tiwaz",    meaning: "Justice",    audio: "assets/audio/Rune-17-Tiwaz.webm" },
	{ symbol: "ᛒ", name: "Berkano",  meaning: "Growth",     audio: "assets/audio/Rune-18-Berkano.webm" },
	{ symbol: "ᛖ", name: "Ehwaz",    meaning: "Union",      audio: "assets/audio/Rune-19-Ehwaz.webm" },
	{ symbol: "ᛗ", name: "Mannaz",   meaning: "Humanity",   audio: "assets/audio/Rune-20-Mannaz.webm" },
	{ symbol: "ᛚ", name: "Laguz",    meaning: "Intuition",  audio: "assets/audio/Rune-21-Laguz.webm", offsetX: 6.0 },
	{ symbol: "ᛜ", name: "Ingwaz",   meaning: "Potential",  audio: "assets/audio/Rune-22-Ingwaz.webm" },
	{ symbol: "ᛞ", name: "Dagaz",    meaning: "Clarity",    audio: "assets/audio/Rune-23-Dagaz.webm" },
	{ symbol: "ᛟ", name: "Othala",   meaning: "Legacy",     audio: "assets/audio/Rune-24-Othala.webm", key: true, sanctum: "veiled" }
];

/**
 * Configuration for sanctum-specific settings.
 * @typedef {Object.<string, {audioSrc: string, hoverAudioSrc: string, latinPhrase: string}>} wSanctum
 * @property {string} audioSrc - The path to the audio file for the sanctum modal.
 * @property {string} hoverAudioSrc - The path to the audio file for the sanctum hover effect.
 * @property {string} latinPhrase - The Latin phrase associated with the sanctum.
 */
/** @type {wSanctum} */
const wSanctum = {
	Topazurum: {
		audioSrc: 'assets/audio/Topazurum_modal.webm',
		hoverAudioSrc: 'assets/audio/Topazurum_hover.webm',
		latinPhrase: 'Aurea Clavis Splendet'
	},
	Rubynar: {
		audioSrc: 'assets/audio/Rubynar_modal.webm',
		hoverAudioSrc: 'assets/audio/Rubynar_hover.webm',
		latinPhrase: 'Sapientia Flamma Divina'
	},
	Sapphiraz: {
		audioSrc: 'assets/audio/Sapphiraz_modal.webm',
		hoverAudioSrc: 'assets/audio/Sapphiraz_hover.webm',
		latinPhrase: 'Lux Etherea Imperat'
	},
	Onyxara: {
		audioSrc: 'assets/audio/Onyxara_modal.webm',
		hoverAudioSrc: 'assets/audio/Onyxara_hover.webm',
		latinPhrase: 'Umbra Mysteria Vocat'
	}
};

/**
 * Centralized state object for managing global mutable variables.
 * @typedef {Object} wState
 * @property {HTMLAudioElement|null} introAudio - Stores the intro audio element.
 * @property {HTMLAudioElement|null} modalAudio - Stores the current modal audio element.
 * @property {HTMLAudioElement|null} effectAudio - Stores audio for footer or other effects.
 * @property {HTMLAudioElement|null} hoverAudio - Stores audio for hover effects.
 * @property {HTMLAudioElement|null} anointedAudio - Stores audio for chooses anointed audio.
 * @property {boolean} isPactSanctified - Stores the state of the pact.
 * @property {boolean} isAltarStarting - Stores the state of the altar initialization.
 * @property {boolean} isAnimationPlaying - Stores the state of the animation playback.
 * @property {boolean} isRuneAnimationActive - Stores the state of the rune animation playback.
 * @property {boolean} animationRuneProgress - Indicates whether a rune animation sequence is currently in progress.
 * @property {number} animationRuneCurrentIndex - Tracks the index of the current rune in the animation sequence.
 * @property {number|null} animationRuneTimeout - Stores the timeout ID for rune animation transitions.
 * @property {Function|null} animationRuneSkipListener - Stores the mousemove event listener for the rune skip container.
 * @property {Function|null} altarMouseListener - Stores the mousemove event listener for the main altar.
 */
/** @global @type {wState} */
const wState = {
	introAudio: null,
	modalAudio: null,
	effectAudio: null,
	hoverAudio: null,
	anointedAudio: null,

	isPactSanctified: false,
	isAltarStarting: true,
	isAnimationPlaying: false,
	isRuneAnimationActive: false,

	animationRuneProgress: false,
	animationRuneCurrentIndex: 0,
	animationRuneTimeout: null,
	animationRuneSkipListener: null,

	altarMouseListener: null
};
// #endregion GLOBALS


/////////////////////////
// * UTILITY HELPERS * //
/////////////////////////
// #region UTILITY HELPERS
/**
 * Handles mousemove events to show/hide elements (altar or skip container) based on cursor position.
 * @param {HTMLElement} element - The element to toggle visibility for (altar or skip container).
 * @param {boolean} [ignoreAnimation=false] - If true, ignores animation states (wState.isAnimationPlaying or wState.animationRuneProgress) to keep element interactive.
 * @returns {(event: MouseEvent) => void | undefined} The mousemove event handler, or undefined if element is invalid or altar is starting.
 */
function initAltarMouseMove(element, ignoreAnimation = false) {
	if (!element || wState.isAltarStarting) return;
	const handler = (event) => {
		const hitAreaX = window.innerWidth - 250;
		const hitAreaY = window.innerHeight - 150;
		// Force offscreen during animations (unless ignored), even if mouse is in hit area
		element.classList.toggle(
			'offscreen', !(event.clientX > hitAreaX && event.clientY > hitAreaY) ||
			(!ignoreAnimation && (wState.isAnimationPlaying || wState.animationRuneProgress))
		);
	};

	document.addEventListener('mousemove', handler);
	return handler; // Return handler for removal
}

/**
 * Initializes and appends an error div to the modal content.
 * @returns {HTMLDivElement} The created error div.
 */
function initErrorDiv() {
	const errorDiv = document.createElement('div');

	errorDiv.id = 'modal-rune-error';
	errorDiv.className = 'error';
	errorDiv.style.display = 'none';
	document.querySelector('.modal-content').appendChild(errorDiv);

	return errorDiv;
}

/**
 * Initializes an IntersectionObserver to detect visible sections by their IDs.
 * Adds/removes a 'visible-section' class to sections when they intersect the viewport.
 * This focuses glow effects on the user's current view, reducing scattered animations.
 * @returns {IntersectionObserver} The initialized observer.
 */
function initSectionObserver() {
	const visibleSections = new Set();

	// Observe all preface and paragraph elements
	const paragraphs = document.querySelectorAll('.text-preface, .text-paragraph');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible-section');
					visibleSections.add(entry.target);
				} else {
					entry.target.classList.remove('visible-section');
					visibleSections.delete(entry.target);
				}
			});
		},
		{
			root: null, // Use viewport as root
			threshold: 0.5 // Increase to 50% visibility for more focused "current" sections
		}
	);

	// Observe all relevant paragraphs
	paragraphs.forEach(paragraph => observer.observe(paragraph));

	// Clean up observer on unload
	window.addEventListener('pagehide', () => {
		observer.disconnect();
	});

	return observer;
}

/**
 * Recursively fades an element and its children, skipping the ignore element and its descendants.
 * @param {Element} el - The element to fade.
 * @param {Element} ignore - The element (container) to skip.
 */
function fadeElement(el, ignore) {
	if (el === ignore || ignore.contains(el)) {
		return;
	}

	if (el.contains(ignore)) {
		// Don't fade this el (ancestor), but recurse children
		Array.from(el.children).forEach(child => fadeElement(child, ignore));
		return;
	}

	// Fade leaf/non-ancestor
	el.dataset.faded = 'true';
	el.style.transition = 'opacity 1s ease-out';
	el.style.opacity = '0';
}

/**
 * Selects modal buttons with fallbacks.
 * @returns {Object} Object containing invoke and banish buttons.
 */
function getModalButtons() {
	return {
		invokeButton: queryElement('.modal-button.aetherium') || queryElement('.modal-button:not(.light)'),
		banishButton: queryElement('.modal-button.light') || queryElement('.modal-button', document, 1)
	};
}

/**
 * Safely queries a DOM element and caches it, supporting single or indexed elements.
 * @param {string} selector - The CSS selector.
 * @param {Element} [context=document] - The context element to query from.
 * @param {number} [index] - Optional index for selecting from multiple elements.
 * @returns {Element|null} The queried element or null.
 */
const queryElement = (() => {
	const cache = new Map();

	return (selector, context = document, index) => {
		const cacheKey = index !== undefined ? `${selector}:${index}` : selector;

		if (!cache.has(cacheKey)) {
			if (index !== undefined) {
				const elements = context.querySelectorAll(selector);
				cache.set(cacheKey, elements[index] || null);
			} else {
				cache.set(cacheKey, context.querySelector(selector));
			}
		}

		return cache.get(cacheKey);
	};
})();

/**
 * Processes a text node, wrapping each word and letter in specified elements for custom animations or styling.
 * Preserves leading/trailing spaces and handles non-empty text nodes.
 * @param {Text} textNode - The text node to process.
 * @param {Element} parent - The parent element containing the text node.
 * @param {Object} [options] - Configuration options for customization.
 * @param {string} [options.wordElement='span'] - The element type for word containers (e.g., 'span', 'div').
 * @param {string} [options.letterElement='span'] - The element type for letter containers (e.g., 'span', 'div').
 * @param {string} [options.wordClass=''] - The class name for word elements.
 * @param {string} [options.letterClass=''] - The class name for letter elements.
 * @param {string} [options.splitPattern='\\s+'] - Regex pattern for splitting words (default: one or more whitespace characters).
 * @param {Object.<string, string>} [options.wordAttributes={}] - Key-value pairs of attributes to apply to word elements.
 * @param {Object.<string, string>} [options.letterAttributes={}] - Key-value pairs of attributes to apply to letter elements.
 * @returns {void}
 * @throws {Error} If textNode is not a Text node or parent is not an Element.
 */
function processTextNode(textNode, parent, options = {}) {
	if (!(textNode instanceof Text)) throw new Error('textNode must be a Text node');
	if (!(parent instanceof Element)) throw new Error('parent must be an Element');

	const {
		wordElement = 'span',
		letterElement = 'span',
		wordClass = '',
		letterClass = '',
		splitPattern = '\\s+',
		wordAttributes = {},
		letterAttributes = {}
	} = options;

	const fullText = textNode.textContent;
	const trimmed = fullText.trim();
	if (!trimmed) return;

	const words = trimmed.split(new RegExp(splitPattern));
	const spanContainer = document.createDocumentFragment();

	words.forEach((word, index) => {
		if (!word) return;

		const wordEl = document.createElement(wordElement);
		if (wordClass) wordEl.className = wordClass;
		Object.entries(wordAttributes).forEach(([key, value]) => wordEl.setAttribute(key, value));

		word.split('').forEach(letter => {
			const letterEl = document.createElement(letterElement);
			if (letterClass) letterEl.className = letterClass;
			Object.entries(letterAttributes).forEach(([key, value]) => letterEl.setAttribute(key, value));
			letterEl.textContent = letter;
			wordEl.appendChild(letterEl);
		});

		spanContainer.appendChild(wordEl);
		if (index < words.length - 1) {
			spanContainer.appendChild(document.createTextNode(' '));
		}
	});

	// Preserve leading/trailing spaces
	const leadingSpace = fullText.substring(0, fullText.indexOf(trimmed[0]));
	const trailingSpace = fullText.substring(fullText.lastIndexOf(words[words.length - 1]) + words[words.length - 1].length);
	const fullFragment = document.createDocumentFragment();

	if (leadingSpace) fullFragment.appendChild(document.createTextNode(leadingSpace));
	fullFragment.appendChild(spanContainer);
	if (trailingSpace) fullFragment.appendChild(document.createTextNode(trailingSpace));
	textNode.replaceWith(fullFragment);
}

/**
 * Restores the altar's default state and reattaches mousemove listener.
 * @param {HTMLElement} altar - The altar element to restore.
 */
function restoreAltar(altar) {
	if (!altar) return;

	altar.style.transition = 'transform 0.2s ease, right 0.5s ease';
	altar.classList.add('offscreen');
	altar.classList.remove('disabled');

	wState.altarMouseListener = initAltarMouseMove(altar);
}

/**
 * Resets container and word styles without restoring opacities.
 * @param {Element} container - The container to reset.
 * @param {NodeList} words - The words to reset.
 * @param {string} [animatingClass] - Optional class to remove from the container.
 */
function resetContainer(container, words, animatingClass) {
	container.style.position = '';
	container.style.top = '';
	container.style.left = '';
	container.style.transform = '';
	container.style.zIndex = '';
	container.style.opacity = '';
	container.style.transition = '';

	if (animatingClass) container.classList.remove(animatingClass);

	words.forEach(word => {
		word.style.opacity = '';
		word.style.color = '';
		word.style.fontSize = '';
		word.style.transition = '';
		word.style.animation = '';
	});
}

/**
 * Restores opacities, background, and audio.
 * @param {Element} body - The body element to reset.
 * @param {boolean} wasPlaying - Whether to resume background audio.
 */
function restoreOpacities(body, wasPlaying) {
	document.querySelectorAll('[data-faded]').forEach(el => {
		el.style.transition = 'opacity 1s ease-in';
		el.style.opacity = '';
		delete el.dataset.faded;
	});

	body.style.transition = 'background-color 1s ease-in';
	body.style.backgroundColor = '';
	body.style.animation = '';

	restoreAltar(document.getElementById('altar'));

	if (wasPlaying) {
		queryElement('#wizardium-soundtrack').play().catch(err => console.error('Failed to resume background audio:', err));
	}
}
// #endregion UTILITY HELPERS


//////////////////////////
// * AUDIO MANAGEMENT * //
//////////////////////////
// #region AUDIO MANAGEMENT
/**
 * Initializes preloading an array of audio files in batches to avoid overwhelming browser connection limits.
 * @param {string[]} audioUrls - Array of audio file URLs to preload. Must contain valid, non-empty strings.
 * @param {number} [batchSize=10] - Number of files to preload in each batch.
 * @param {number} [batchDelay=100] - Delay between batches in milliseconds.
 * @param {number} [maxRetries=3] - Maximum retry attempts per audio file.
 * @param {number} [maxTotalRetries=20] - Maximum total retry attempts across all files.
 * @throws {Error} If audioUrls is not an array or contains invalid URLs.
 */
async function initPreloadAudio(audioUrls, batchSize = 10, batchDelay = 100, maxRetries = 3, maxTotalRetries = 20) {
	if (!Array.isArray(audioUrls) || audioUrls.some(url => !url || typeof url !== 'string')) {
		throw new Error('audioUrls must be an array of non-empty strings');
	}

	const uniqueUrls = [...new Set(audioUrls)]; // Deduplicate URLs
	let totalRetries = 0;
	let index = 0;
	const retries = {};

	while (index < uniqueUrls.length && totalRetries < maxTotalRetries) {
		const batch = uniqueUrls.slice(index, index + batchSize);
		const batchPromises = batch.map(async url => {
			try {
				await fetch(url, { mode: 'no-cors' });
				console.log(`Preloaded audio: ${url}`);
			}
			catch (err) {
				console.error(`Failed to preload audio: ${url}`, err);
				retries[url] = (retries[url] || 0) + 1;
				if (retries[url] >= maxRetries || totalRetries >= maxTotalRetries) return;

				totalRetries++;
				const retryDelay = 1000 * 2 ** (retries[url] - 1);
				await new Promise(resolve => setTimeout(resolve, retryDelay));

				try {
					await fetch(url, { mode: 'no-cors' });
					console.log(`Retried and preloaded audio: ${url}`);
				} catch (err) {
					console.error(`Retry failed for audio: ${url}`, err);
				}
			}
		});

		await Promise.all(batchPromises);
		await new Promise(resolve => setTimeout(resolve, batchDelay));
		index += batchSize;
	}
}

/**
 * Smoothly transitions an audio element's volume to a target value over a specified duration.
 * @param {HTMLAudioElement} audio - The audio element to adjust.
 * @param {number} targetVolume - The target volume (0.0 to 1.0).
 * @param {number} [duration=500] - The duration of the fade in milliseconds.
 */
function fadeAudio(audio, targetVolume, duration = 1000) {
	const steps = 20;
	const stepTime = duration / steps;
	const volumeStep = (targetVolume - audio.volume) / steps;
	let currentStep = 0;

	const interval = setInterval(() => {
		if (currentStep >= steps) {
			clearInterval(interval);
			audio.volume = targetVolume;
			return;
		}
		audio.volume = Math.max(0, Math.min(1, audio.volume + volumeStep));
		currentStep++;
	}, stepTime);
}

/**
 * Plays an audio file with specified volume and handles errors.
 * @param {string} src - The audio file source URL.
 * @param {number} [volume=1.0] - The volume level (0.0 to 1.0).
 * @param {boolean} [suppressErrorLog=false] - The console.error log will be suppressed.
 * @returns {HTMLAudioElement|null} The created audio element or null if invalid.
 */
function playAudio(src, volume = 1.0, suppressErrorLog = false) {
	if (!src || typeof src !== 'string') {
		console.error('Invalid audio source provided');
		return null;
	}

	const audio = new Audio(src);

	audio.volume = volume;
	audio.play().catch(err => {
		if (!suppressErrorLog) {
			console.error(`Failed to play audio ${src}:`, err);
		}
	});

	return audio;
}

/**
 * Stops and removes an audio element, resetting its reference.
 * @param {HTMLAudioElement|null} audio - The audio element to stop.
 * @returns {null} Always returns null.
 */
function stopAudio(audio) {
	if (!audio) return null;

	audio.pause();
	audio.remove();

	return null;
}

/**
 * Stops all active audio tracks (modal, effect, hover) and resets their references.
 * @returns {void}
 */
function stopAllAudio() {
	wState.introAudio = stopAudio(wState.introAudio);
	wState.modalAudio = stopAudio(wState.modalAudio);
	wState.effectAudio = stopAudio(wState.effectAudio);
	wState.hoverAudio = stopAudio(wState.hoverAudio);
	wState.anointedAudio = stopAudio(wState.anointedAudio);
}

/**
 * Toggles the background audio playback and updates UI.
 * @param {Event} event - The triggering event.
 */
function toggleAudio(event) {
	event.stopPropagation();
	const audio = queryElement('#wizardium-soundtrack');
	const player = queryElement('#altar');
	const toggleButton = queryElement('#toggle-button');

	if (audio.paused) {
		audio.play().then(() => {
			player.classList.remove('paused');
			player.classList.add('playing');
			toggleButton.textContent = 'Quiet Arcana';
		}).catch(err => console.error('Background audio play failed:', err));

		return;
	}

	audio.pause();
	player.classList.remove('playing');
	player.classList.add('paused');
	toggleButton.textContent = 'Evoke Arcana';
}
// #endregion AUDIO MANAGEMENT


////////////////////////
// * VISUAL EFFECTS * //
////////////////////////
// #region VISUAL EFFECTS
/**
 * Animates words with specified timings, setting opacity to 1, changing color, and applying optional animations.
 * @param {NodeList} words - The words to animate.
 * @param {number[]} timings - Array of millisecond delays for each word.
 * @param {string} color - CSS color variable for the words (e.g., 'var(--light)').
 * @param {string} [animations=''] - Optional CSS animation string to apply (e.g., 'text-blink-karaoke 0.5s ease-in-out 1').
 * @param {Element} [body] - Optional body element for background animations (e.g., 'ui-background-pulse').
 */
function effectAnimateWords(words, timings, color, animations = '', body) {
	words.forEach((word, index) => {
		setTimeout(() => {
			word.style.opacity = '1';
			word.style.color = color;

			if (animations) word.style.animation = animations;
			if (body && animations.includes('ui-background-pulse')) {
				body.style.animation = `ui-background-pulse 0.5s ease-in-out 1`;
			}

			setTimeout(() => {
				word.style.animation = '';
				if (body) body.style.animation = '';
			}, 500);
		}, timings[index]);
	});
}

/**
 * Applies a background pulse animation to the body element at specified timings.
 * @param {Element} body - The body element to apply the animation to.
 * @param {number[]} timings - Array of millisecond delays for each pulse.
 */
function effectBackgroundPulse(body, timings) {
	timings.forEach(time => {
		setTimeout(() => {
			body.style.animation = 'ui-background-pulse 0.5s ease-in-out 1';
			setTimeout(() => {
				body.style.animation = '';
			}, 500);
		}, time);
	});
}

/**
 * Applies a glow animation to the letters of a given word with random timings.
 * @param {HTMLElement} word - The word element containing .intro-letter spans.
 * @returns {number} The total animation duration for the word in milliseconds.
 */
function effectGlowWordLetters(word) {
	const letters = word.querySelectorAll('.intro-letter');
	if (!letters.length) return 0;

	// Shorter random total word animation duration (1s to 2.5s)
	const animationDuration = Math.random() * 1500 + 1000; // Adjusted for faster cycles
	// Random base delay per letter, with 20% variance
	const baseDelayPerLetter = animationDuration / (letters.length * 1.5);
	// Random per-letter animation duration (0.6s to 1.2s)
	const letterDurations = Array.from(letters).map(() => Math.random() * 600 + 600);

	let totalDelay = 0;
	letters.forEach((letter, index) => {
		// Add 20% random variance to delay (-20% to +20%)
		const delayVariance = baseDelayPerLetter * (Math.random() * 0.4 - 0.2);
		const letterDelay = baseDelayPerLetter + delayVariance;
		setTimeout(() => {
			letter.style.animation = `text-arcana-glow ${letterDurations[index]}ms ease-in-out 1`;
			setTimeout(() => {
				letter.style.animation = '';
			}, letterDurations[index]);
		}, totalDelay);
		totalDelay += letterDelay;
	});

	return animationDuration;
}

/**
 * Scales words to 100% larger and applies a blink effect after a delay.
 * @param {NodeList} words - The words to scale and blink.
 * @param {number} scaleDelay - Delay before scaling in milliseconds.
 * @param {Element} [body] - Optional body element for background pulse animation.
 */
function effectScaleAndBlink(words, scaleDelay, body) {
	setTimeout(() => {
		words.forEach(word => {
			word.style.fontSize = '2em';
		});

		setTimeout(() => {
			words.forEach(word => {
				word.style.animation = 'text-blink-karaoke 0.5s ease-in-out 1';
			});
			if (body) {
				body.style.animation = `ui-background-pulse 0.5s ease-in-out 1`;
			}
		}, 500);

	}, scaleDelay);
}

/**
 * Centers a container in the viewport and initializes its words at 50% opacity and 50% larger size.
 * @param {Element} container - The container to center.
 * @param {NodeList} words - The words to initialize.
 * @param {string} [animatingClass] - Optional class to add to the container to prevent text wrapping.
 */
function effectSiteCentered(container, words, animatingClass) {
	container.style.position = 'fixed';
	container.style.top = '50%';
	container.style.left = '50%';
	container.style.transform = 'translate(-50%, -50%)';
	container.style.zIndex = '3000';
	container.style.opacity = '1';
	container.style.transition = 'opacity 1s ease-out';

	if (animatingClass) container.classList.add(animatingClass);

	words.forEach(word => {
		word.style.opacity = '0.5';
		word.style.color = 'var(--light)';
		word.style.transition = 'opacity 0.5s ease, font-size 0.5s ease, color 0.5s ease';
		word.style.fontSize = '1.5em';
	});

	const rect = container.getBoundingClientRect();
	const scrollY = rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2);
	window.scrollTo({ top: scrollY, behavior: 'smooth' });
}

/**
 * Fades out all elements except the specified container and sets the body background to dark.
 * @param {Element} container - The container to keep visible.
 * @returns {boolean} Whether the background audio was playing before being stopped.
 */
function effectSiteFadeOut(container) {
	const { body } = document;
	const backgroundAudio = queryElement('#wizardium-soundtrack');
	const wasPlaying = !backgroundAudio.paused;
	const altar = queryElement('#altar');

	stopAllAudio();

	Array.from(body.children).forEach(child => fadeElement(child, container));

	body.style.transition = 'background-color 1s ease-out';
	body.style.backgroundColor = 'var(--dark-background)';
	altar.classList.add('disabled');

	return wasPlaying;
}
// #endregion VISUAL EFFECTS


///////////////////
// * ANIMATION * //
///////////////////
// #region ANIMATION
/**
* Animates the logo swap effect by overlaying a new logo that fades in and out.
* @param {Event} event - The click event
* @param {number} swapDuration - The duration of the alternative logo swap.
*/
function animationLogoSwap(event, swapDuration) {
	if (event) event.preventDefault();

	const logo = document.getElementById('main-logo');
	const container = logo.parentElement;

	// Remove any existing overlay
	let overlay = container.querySelector('.logo-overlay');
	if (overlay) overlay.remove();

	// Create new overlay
	overlay = document.createElement('img');
	overlay.src = 'assets/images/The-Wizardium-Main-Logo-Light.svg';
	overlay.className = 'logo-overlay';
	overlay.width = logo.width;
	overlay.style.height = `${logo.height}px`;
	container.appendChild(overlay);

	// Reset animation state
	overlay.style.opacity = '0';
	overlay.src = 'assets/images/The-Wizardium-Main-Logo-Light.svg';
	overlay.style.transform = 'translateX(-50%) scale(1)';
	logo.style.transform = 'scale(1)';

	// Animate with the new duration
	setTimeout(() => {
		overlay.style.opacity = '1';
		overlay.style.transform = 'translateX(-50%) scale(1.15)';
		logo.style.transform = 'scale(1.15)';

		setTimeout(() => {
			overlay.style.opacity = '0';
			overlay.style.transform = 'translateX(-50%) scale(1)';
			logo.style.transform = 'scale(1)';
		}, swapDuration);
	}, 10);
}

/**
 * Animates a lightning flash effect and plays thunder audio, chaining a callback if provided.
 * @param {Event|null} event - The triggering event, if any.
 * @param {Function} [callback] - Optional callback to execute after the effect.
 */
function animationLightningFlash(event, callback) {
	const flash = document.createElement('div');

	Object.assign(flash, {
		id: 'lightning-flash',
		style: `
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: var(--light);
			z-index: 2000;
			animation: overlay-lightning-flash 0.5s ease-out forwards;
		`
	});

	document.body.appendChild(flash);
	setTimeout(() => flash.remove(), 500);

	// Handle Logo animation and behavior
	setTimeout(() => animationLogoSwap(event, 10500), 100);

	wState.effectAudio = stopAudio(wState.introAudio);
	wState.effectAudio = stopAudio(wState.effectAudio);
	wState.effectAudio = playAudio('assets/audio/Thunderstrike.webm', 0.8);

	if (callback) {
		wState.effectAudio.onended = callback;
	}
	else if (event?.target.closest('#main-logo') || event?.target.closest('h2.aetherium') || event?.target.closest('img.logo-animated')) {
		wState.effectAudio.onended = () => {
			wState.anointedAudio = stopAudio(wState.anointedAudio);
			wState.anointedAudio = playAudio('assets/audio/The_Wizardium_Choose_Only_The_Anointed.webm');
		};
	}
}

/**
 * Animates the void effect: fades out the entire site, plays Banish audio, shows a ripple animation,
 * fades the site back in, and executes a callback to play additional audio.
 * @param {Function} [callback] - Optional callback to execute after the effect.
 */
function animationVoidEffect(callback) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		if (callback) callback();
		return;
	}

	const { body } = document;
	const backgroundAudio = queryElement('#wizardium-soundtrack');
	const wasPlaying = !backgroundAudio.paused;

	// Fade out the entire site, including modals
	const allElements = document.body.querySelectorAll('body > *');
	allElements.forEach(el => {
		el.style.transition = 'opacity 1s ease-out';
		el.style.opacity = '0';
	});
	body.style.transition = 'background-color 1s ease-out';
	body.style.backgroundColor = 'var(--dark-background)';

	// Stop all audio except post-effect audio
	stopAllAudio();

	// Create and append void overlay
	const overlay = document.createElement('div');
	overlay.className = 'void-overlay';
	document.body.appendChild(overlay);

	// Create ripple
	const ripple = document.createElement('div');
	ripple.className = 'void-ripple';
	overlay.appendChild(ripple);

	// Play Banish audio
	wState.effectAudio = playAudio('assets/audio/Banish.webm');

	// Fade out audio towards the end
	setTimeout(() => {
		const fadeStep = 0.1;
		const fadeInterval = setInterval(() => {
			if (wState.effectAudio && wState.effectAudio.volume > 0) {
				wState.effectAudio.volume = Math.max(0, wState.effectAudio.volume - fadeStep);
			} else {
				clearInterval(fadeInterval);
				wState.effectAudio = stopAudio(wState.effectAudio);
			}
		}, 100);
	}, 1500);

	// Restore site and trigger callback after 2.5s
	setTimeout(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });

		allElements.forEach(el => {
			el.style.transition = 'opacity 1s ease-in';
			el.style.opacity = '1';
		});
		body.style.transition = 'background-color 1s ease-in';
		body.style.backgroundColor = '';

		if (wasPlaying) {
			backgroundAudio.play().catch(err => console.error('Failed to resume background audio:', err));
		}

		overlay.remove();

		if (callback) {
			wState.effectAudio = callback();
			animationLogoSwap(null, 6000);
		}
	}, 2500);
}

/**
 * Wraps letters in text paragraphs and animates random words letters sequentially with a violet glow effect and random timings,
 * only in sections currently in the viewport.
 */
function animationArcanaTextGlow() {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	const textParagraphs = document.querySelectorAll('.text-preface, .text-paragraph');

	textParagraphs.forEach(paragraph => {
		Array.from(paragraph.childNodes).forEach(node => {
			if (node.nodeType === Node.TEXT_NODE && node.textContent) {
				processTextNode(node, paragraph, {
					wordClass: 'intro-word',
					letterClass: 'intro-letter'
				});
			}
			else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('text-nobreak')) {
				Array.from(node.childNodes)
				.filter(child => child.nodeType === Node.TEXT_NODE && child.textContent)
				.forEach(textNode => processTextNode(textNode, node, {
					wordClass: 'intro-word',
					letterClass: 'intro-letter'
				}));
			}
		});
	});

	// Initialize section observer
	initSectionObserver();

	// Start glow loop
	const glowLoop = () => {
		// Get words only from visible sections
		const visibleSections = document.querySelectorAll('.visible-section');
		const visibleWords = Array.from(visibleSections).reduce((acc, section) => {
			const wordsInSection = section.querySelectorAll('.intro-word');
			return [...acc, ...wordsInSection];
		}, []);

		// If no visible words, retry after a short delay
		if (!visibleWords.length) {
			setTimeout(glowLoop, 500);
			return;
		}

		// Select a random word from visible sections
		const randomIndex = Math.floor(Math.random() * visibleWords.length);
		const word = visibleWords[randomIndex];
		const animationDuration = effectGlowWordLetters(word);

		// Schedule next glow with reduced pause for higher frequency
		setTimeout(glowLoop, animationDuration + 200);
	}

	// Start the glow loop
	setTimeout(glowLoop, 1);

	// Add click event listeners for words
	document.querySelectorAll('.intro-word').forEach(word => {
		word.addEventListener('click', () => effectGlowWordLetters(word));
	});
}

/**
 * Animates the Sonus Arcana Regnat phrase: fades the site to dark background, centers the Latin phrase,
 * animates words (Sonus, Arcana, Regnat) with opacity and color changes at 0s, 0.75s, 1.5s,
 * scales words 100% larger at 4.5s, applies a white-to-violet blink at 5s, and restores the site at 7.5s.
 */
function animationSonusPhrase() {
	if (wState.isAnimationPlaying) return;
	wState.isAnimationPlaying = true;

	const { body } = document;
	const container = queryElement('.sonus-container');
	const words = container.querySelectorAll('.sonus-word');
	const wasPlaying = effectSiteFadeOut(container, words);

	setTimeout(() => {
		wState.effectAudio = playAudio('assets/audio/Sonus_Arcana_Regnat.webm');
		effectSiteCentered(container, words);
		effectAnimateWords(words, [0, 750, 1500], 'var(--light)');
		effectScaleAndBlink(words, 4500);
		setTimeout(() => {
			wState.effectAudio = playAudio('assets/audio/Blink.webm');
		}, 5000);

		setTimeout(() => {
			words.forEach(word => {
				word.style.fontSize = '';
				word.style.transition = 'font-size 0.5s ease';
			});
			setTimeout(() => {
				resetContainer(container, words);
				restoreOpacities(body, wasPlaying);
				wState.isAnimationPlaying = false;
			}, 1000);
		}, 5500);

	}, 1000);
}

/**
 * Animates the Covenant Oath phrase: fades the site, centers the Latin phrase, animates words
 * (Iura, Sacramentum, Confoederationis, Wizardii) with opacity, color, and blink at 0s, 0.65s, 1.85s, 3.8s,
 * scales words 100% larger at 9s, blinks at 9.5s, scrolls to Covenant section at 10s, and restores the site at 11s.
 */
function animationCovenantOathPhrase() {
	if (wState.isAnimationPlaying) return;
	wState.isAnimationPlaying = true;

	const { body } = document;
	const container = queryElement('.oath-container');
	const words = container.querySelectorAll('.oath-word');
	const wasPlaying = effectSiteFadeOut(container);

	if (!wState.isPactSanctified) {
		const runeTable = queryElement('.rune-table');
		const details = queryElement('details');
		runeTable.style.transition = 'opacity 1s ease-out';
		runeTable.style.opacity = '0';
		details.style.transition = 'opacity 1s ease-out';
		details.style.opacity = '0';
		details.open = false;
	}

	setTimeout(() => {
		wState.effectAudio = playAudio('assets/audio/Swear_Your_Oath.webm');
		effectSiteCentered(container, words, 'animating');
		effectAnimateWords(words, [0, 650, 1850, 3800], 'var(--aetherium)', 'text-blink-karaoke 0.5s ease-in-out 1');
		effectScaleAndBlink(words, 9000);
		setTimeout(() => {
			wState.effectAudio = playAudio('assets/audio/Blink.webm');
		}, 9500);

		setTimeout(() => {
			queryElement('#CovenantOfTheWizardium').scrollIntoView({ behavior: 'smooth' });
			setTimeout(() => {
			resetContainer(container, words, 'animating');
			restoreOpacities(body, wasPlaying);
			wState.isAnimationPlaying = false;
			}, 1000);
		}, 10000);
	}, 1000);
}

/**
 * Animates the Pact Sanctio phrase: fades the site, centers the Latin phrase, animates words
 * (Ego, Anima, Pactum, Sanctio, Divum, Spectat) with opacity, color, blink, shake, and glow
 * at 0s, 0.65s, 1.2s, 1.8s, 2.6s, 3.2s with background white pulse, scales words 100% larger at 10.5s,
 * blinks with background white pulse at 11s, scrolls to Codex section at 11.5s, and restores the site
 * with rune table at 12.5s.
 */
function animationPactSanctioPhrase() {
	if (wState.isAnimationPlaying) return;
	wState.isAnimationPlaying = true;

	const { body } = document;
	const container = queryElement('.pact-container');
	const words = container.querySelectorAll('.pact-word');
	const runeTable = queryElement('.rune-table');
	const details = queryElement('details');
	const wasPlaying = effectSiteFadeOut(container);

	runeTable.style.transition = 'opacity 1s ease-out';
	runeTable.style.opacity = '0';
	details.style.transition = 'opacity 1s ease-out';
	details.style.opacity = '0';

	setTimeout(() => {
		wState.effectAudio = playAudio('assets/audio/Sanctify_The_Pact.webm');
		effectSiteCentered(container, words, 'animating');
		effectAnimateWords(words, [0, 650, 1200, 1800, 2600, 3200], 'var(--aetherium)', 'text-blink-karaoke 0.5s ease-in-out 1, text-shake 0.5s ease-in-out 1, text-glow-pulse 0.5s ease-in-out 1');
		effectBackgroundPulse(body, [0, 650, 1200, 1800, 2600, 3200]);
		effectScaleAndBlink(words, 9500, body);

		setTimeout(() => {
			if (!wState.isPactSanctified) {
				details.open = true;
				wState.isPactSanctified = true;
			}
			document.querySelector('#CodexOfRunicSeals').scrollIntoView({ behavior: 'smooth' });

			setTimeout(() => {
				resetContainer(container, words, 'animating');
				window.pendingWasPlaying = wasPlaying;
				animationRuneTableReveal();
				wState.isAnimationPlaying = false;
			}, 1000);
		}, 11500);

	}, 1000);
}

/**
 * Animates the rune introduction effect, updating symbol, name, and meaning, and playing audio.
 * @returns {void}
 */
function animationRuneIntroduction() {
	if (!wState.isRuneAnimationActive) return;

	if (wState.animationRuneCurrentIndex >= wRunes.length) {
		// Clear the final rune before triggering climax
		const symbol = document.querySelector('.rune-symbol');
		const textContainer = document.querySelector('.rune-text');
		symbol.classList.remove('active');
		textContainer.classList.remove('active');
		symbol.textContent = '';
		textContainer.querySelector('.rune-name').textContent = '';
		textContainer.querySelector('.rune-meaning').textContent = '';
		// Trigger climax
		animationRuneClimax();
		return;
	}

	const rune = wRunes[wState.animationRuneCurrentIndex];
	const symbol = document.querySelector('.rune-symbol');
	const nameElement = document.querySelector('.rune-name');
	const meaningElement = document.querySelector('.rune-meaning');
	const textContainer = document.querySelector('.rune-text');

	// Remove active classes to reset state
	symbol.classList.remove('active');
	textContainer.classList.remove('active');

	// Set content
	symbol.textContent = rune.symbol;
	nameElement.textContent = rune.name;
	meaningElement.textContent = rune.meaning;

	// Clear any previous glow classes and reset transform
	symbol.className = 'rune-symbol';
	// Set the offsetX using CSS custom property
	if (rune.offsetX) {
		symbol.style.setProperty('--offset-x', `${rune.offsetX}px`);
	} else {
		symbol.style.setProperty('--offset-x', '0');
	}
	textContainer.className = 'rune-text';

	// Add special classes for key runes
	if (rune.key) {
		symbol.classList.add('key-rune', `${rune.sanctum}-glow`);
		textContainer.classList.add(`${rune.sanctum}-glow`);
	}

	// Play audio
	wState.effectAudio = playAudio(rune.audio);

	// Force a reflow before adding active class
	void symbol.offsetWidth;
	void textContainer.offsetWidth;

	// Activate animation
	setTimeout(() => {
		if (!wState.isRuneAnimationActive) return;
		symbol.classList.add('active');
		textContainer.classList.add('active');
	}, 1);

	// Schedule next rune
	wState.animationRuneTimeout = setTimeout(() => {
		wState.animationRuneCurrentIndex++;
		animationRuneIntroduction();
	}, 1750); // 100ms delay + 750ms fade-in + 900ms display
}

/**
 * Triggers the climactic rune circle animation with sequential rune appearances, lightning, and ripple effects.
 * @returns {void}
 */
function animationRuneClimax() {
	if (!wState.isRuneAnimationActive) return;

	const backgroundAudio = queryElement('#wizardium-soundtrack');

	// Dim background audio to 50% if playing
	fadeAudio(backgroundAudio, 0.25, 1000);

	// Create the rune circle container
	const circleContainer = document.createElement('div');
	circleContainer.className = 'rune-circle-container';
	document.body.appendChild(circleContainer);

	// Dynamic radius calculation
	const fontSize = 20;
	const maxDiameter = Math.min(window.innerWidth, window.innerHeight) * 0.66;
	const radius = Math.min(350, maxDiameter / 2 - fontSize / 2);

	circleContainer.style.width = `${2 * radius}px`;
	circleContainer.style.height = `${2 * radius}px`;

	// Create all rune elements in a perfect circle
	const totalRunes = wRunes.length;

	wRunes.forEach((rune, index) => {
		const angle = (index / totalRunes) * 2 * Math.PI - Math.PI / 2;
		const x = radius + Math.cos(angle) * radius - 15;
		const y = radius + Math.sin(angle) * radius - 15;
		const runeElement = document.createElement('div');
		runeElement.className = 'rune-circle-symbol';
		runeElement.textContent = rune.symbol;
		runeElement.style.left = `${x}px`;
		runeElement.style.top = `${y}px`;
		runeElement.style.width = '30px';
		runeElement.style.height = '30px';
		runeElement.style.lineHeight = '30px';
		runeElement.style.textAlign = 'center';
		runeElement.style.opacity = '0';
		runeElement.style.fontSize = `${fontSize}px`;

		if (rune.key) {
			runeElement.classList.add('key-rune', `${rune.sanctum}-glow`);
		}

		circleContainer.appendChild(runeElement);
	});

	// Play circle formation audio
	wState.effectAudio = playAudio('assets/audio/Runic_Ritual_01_Circle_Formation.webm');

	// Calculate timings for enhanced sequence
	const summonDuration = totalRunes * 100; // 100ms per rune
	const lightningDelay = summonDuration + 300; // Brief pause after circle forms
	const rippleDuration = totalRunes * 150; // 150ms per rune for ripple

	// Activate the circle container
	setTimeout(() => {
		if (!wState.isRuneAnimationActive) return;
		circleContainer.classList.add('active');

		// Summon runes in sequence to white (100ms per rune)
		const runeElements = circleContainer.querySelectorAll('.rune-circle-symbol');
		runeElements.forEach((rune, index) => {
			setTimeout(() => {
				if (!wState.isRuneAnimationActive) return;
				rune.style.transition = 'opacity 0.5s ease-in-out';
				rune.style.opacity = '1';
				rune.classList.add('active');
			}, index * 100);
		});

		// After all runes are summoned, trigger seismic shake
		setTimeout(() => {
			if (!wState.isRuneAnimationActive) return;
			// Add seismic shake to all runes
			runeElements.forEach(rune => {
				rune.classList.add('seismic-shake');
			});

			// Play lightning impact audio
			wState.effectAudio = playAudio('assets/audio/Runic_Ritual_02_Seismic_Shake_Impact.webm');

			// Remove shake effect
			setTimeout(() => {
				if (!wState.isRuneAnimationActive) return;
				runeElements.forEach(rune => {
					rune.classList.remove('seismic-shake');
				});
			}, 500);

			// After shake, trigger violet pulse ripple effect
			setTimeout(() => {
				if (!wState.isRuneAnimationActive) return;
				// Sequential ripple effect
				runeElements.forEach((rune, index) => {
					setTimeout(() => {
						if (!wState.isRuneAnimationActive) return;
						rune.classList.add('ripple-effect');

						// Return to original size after pulse
						setTimeout(() => {
							if (!wState.isRuneAnimationActive) return;
							rune.classList.remove('ripple-effect');
							rune.classList.add('ripple-complete');
						}, 500);
					}, index * 150);
				});

				// After ripple completes, trigger final circle resonance
				setTimeout(() => {
					if (!wState.isRuneAnimationActive) return;
					// Play final resonance audio
					wState.effectAudio = playAudio('assets/audio/Runic_Ritual_03_Final_Resonance.webm');

					// All runes pulse together then fade and scale out
					runeElements.forEach(rune => {
						rune.classList.add('final-circle-resonance');
					});

					// Enhanced finale - scale out and fade
					setTimeout(() => {
						if (!wState.isRuneAnimationActive) return;
						circleContainer.classList.add('rune-circle-finale');
						setTimeout(() => {
							if (!wState.isRuneAnimationActive) return;
							circleContainer.remove();
							animationRuneSkip();
							// Restore background audio volume
							fadeAudio(backgroundAudio, 0.5, 1000);
						}, 2000);
					}, 1000);
				}, rippleDuration + 2000);
			}, 500); // Lightning impact delay
		}, lightningDelay);
	}, 100);
}

/**
 * Skips the rune animation instantly, clearing timeouts, stopping audio, and restoring the site.
 * @returns {void}
 */
function animationRuneSkip() {
	// Clear any pending timeouts
	if (wState.animationRuneTimeout) {
		clearTimeout(wState.animationRuneTimeout);
	}

	wState.isRuneAnimationActive = false; // Set flag to halt any pending animations

	// Remove overlay, climax and skip container
	const overlay = document.querySelector('.rune-overlay');
	const skipContainer = document.querySelector('.rune-skip-altar');
	const circleContainer = document.querySelector('.rune-circle-container');
	if (circleContainer) {
		circleContainer.remove();
	}

	if (overlay) {
		overlay.remove();
	}

	if (skipContainer) {
		skipContainer.remove();
	}

	// Remove mousemove listener
	if (wState.animationRuneSkipListener) {
		document.removeEventListener('mousemove', wState.animationRuneSkipListener);
		wState.animationRuneSkipListener = null;
	}
	// Restore the site
	const { body } = document;
	const runeTable = document.querySelector('.rune-table');
	const details = document.querySelector('details');

	// Make sure rune table is visible
	if (runeTable) {
		runeTable.style.opacity = '1';
	}

	if (details) {
		details.style.opacity = '1';
		details.open = true;
	}

	// Reset all elements to visible state
	const allElements = document.body.querySelectorAll('body > *');
	allElements.forEach(el => {
		el.style.transition = 'opacity 1s ease-in';
		el.style.opacity = '1';
	});

	body.style.transition = 'background-color 1s ease-in';
	body.style.backgroundColor = '';
	body.style.animation = '';

	restoreAltar(document.getElementById('altar'));

	// Stop all audio and resume background audio if it was playing
	stopAllAudio();
	const backgroundAudio = document.querySelector('#wizardium-soundtrack');
	if (backgroundAudio && !backgroundAudio.paused) {
		backgroundAudio.play().catch(err => console.error('Failed to resume background audio:', err));
	}

	restoreOpacities(document.body, window.pendingWasPlaying || false);
	delete window.pendingWasPlaying;

	wState.animationRuneProgress = false;
}

/**
 * Animates the rune table reveal animation, creating an overlay and sequentially displaying runes.
 * @returns {void}
 */
function animationRuneTableReveal() {
	if (wState.animationRuneProgress) return;

	// Check if user prefers reduced motion
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		animationRuneSkip();
		return;
	}

	wState.animationRuneProgress = true;
	wState.isRuneAnimationActive = true; // Activate the rune animation flag

	// Create overlay
	const overlay = document.createElement('div');
	overlay.className = 'rune-overlay';
	document.body.appendChild(overlay);

	// Create rune reveal container
	const container = document.createElement('div');
	container.className = 'rune-reveal-container';
	overlay.appendChild(container);

	// Create symbol element
	const symbol = document.createElement('div');
	symbol.className = 'rune-symbol';
	container.appendChild(symbol);

	// Create text container
	const textContainer = document.createElement('div');
	textContainer.className = 'rune-text';
	container.appendChild(textContainer);

	// Create name element
	const nameElement = document.createElement('div');
	nameElement.className = 'rune-name';
	textContainer.appendChild(nameElement);

	// Create meaning element
	const meaningElement = document.createElement('div');
	meaningElement.className = 'rune-meaning';
	textContainer.appendChild(meaningElement);

	// Create skip container and button styled like the altar
	const skipContainer = document.createElement('div');
	skipContainer.className = 'altar rune-skip-altar offscreen'; // Start offscreen like altar
	const skipButton = document.createElement('button');
	skipButton.className = 'altar-button';
	skipButton.textContent = 'Skip Animation';
	skipButton.addEventListener('click', animationRuneSkip);
	skipContainer.appendChild(skipButton);
	overlay.appendChild(skipContainer);

	// Initialize mousemove for skip container
	wState.animationRuneSkipListener = initAltarMouseMove(skipContainer, true);

	// Activate overlay
	setTimeout(() => {
		overlay.classList.add('active');
		// Start the sequence
		wState.animationRuneCurrentIndex = 0;
		animationRuneIntroduction();
	}, 500);

	// Dim the background
	effectSiteFadeOut(overlay);
}
// #endregion ANIMATION


//////////////////////////
// * MODAL MANAGEMENT * //
//////////////////////////
// #region MODAL MANAGEMENT
/**
 * Opens a sanctum modal with specified settings and plays associated audio.
 * @param {string} sanctum - The sanctum name (e.g., 'Topazurum').
 * @param {string} rune - The expected rune input.
 * @param {string} colorClass - The CSS color class for styling.
 * @param {string} url - The URL to redirect to on success.
 */
function modalUnveilSanctum(sanctum, rune, colorClass, url) {
	const backgroundAudio = queryElement('#wizardium-soundtrack');
	const wasPlaying = !backgroundAudio.paused;
	const player = queryElement('#altar');

	// Stop all active audio
	stopAllAudio();

	// Hide the altar
	player.classList.add('offscreen');

	// Play sanctum audio with lightning effect
	const config = wSanctum[sanctum];
	if (config?.audioSrc) {
		animationLightningFlash(null, () => {
			wState.modalAudio = playAudio(config.audioSrc);
		});
	}

	// Configure modal elements
	const modal = queryElement('#modal-rune');
	const sanctumName = queryElement('#modal-sanctum-name');
	const sanctumTitle = queryElement('#modal-sanctum-title');
	const runeInput = queryElement('#modal-rune-input');
	const { invokeButton, banishButton } = getModalButtons();
	const errorDiv = queryElement('#modal-rune-error') || initErrorDiv();

	sanctumName.textContent = sanctum;
	sanctumName.className = colorClass;
	sanctumTitle.textContent = config.latinPhrase;
	runeInput.className = `modal-input ${colorClass}`;
	runeInput.style.color = 'var(--light)';
	modal.style.display = 'flex';
	runeInput.focus();
	runeInput.disabled = false;
	runeInput.value = '';
	invokeButton.className = `modal-button ${colorClass}`;
	invokeButton.style.display = 'block';
	banishButton.className = 'modal-button light';
	banishButton.style.display = 'block';
	errorDiv.style.display = 'none';
	errorDiv.textContent = '';

	window.currentSanctum = { sanctum, rune, colorClass, url, wasPlaying };
}

/**
 * Handles the Onyxara sanctum denial modal.
 */
function modalDenyOnyx() {
	const backgroundAudio = queryElement('#wizardium-soundtrack');
	const wasPlaying = !backgroundAudio.paused;
	const player = queryElement('#altar');

	// Stop all active audio
	stopAllAudio();

	// Hide the altar
	player.classList.add('offscreen');

	animationLightningFlash(null, () => {
		wState.modalAudio = playAudio('assets/audio/Onyxara_modal.webm');
	});

	const modal = queryElement('#modal-rune');
	const sanctumName = queryElement('#modal-sanctum-name');
	const sanctumTitle = queryElement('#modal-sanctum-title');
	const runeInput = queryElement('#modal-rune-input');
	const { invokeButton, banishButton } = getModalButtons();
	const errorDiv = queryElement('#modal-rune-error') || initErrorDiv();

	sanctumName.textContent = 'Onyxara';
	sanctumName.className = 'veiled';
	sanctumTitle.textContent = wSanctum.Onyxara.latinPhrase;
	runeInput.className = 'modal-input light';
	runeInput.style.color = 'var(--light)';
	runeInput.value = '';
	runeInput.disabled = true;
	modal.style.display = 'flex';

	errorDiv.textContent = '';
	errorDiv.appendChild(Object.assign(document.createElement('div'), {
		textContent: `The Onyx Sanctum's seal remains unbroken.`
	}));
	errorDiv.appendChild(Object.assign(document.createElement('div'), {
		textContent: `"Only the worthy may unveil its secrets..."`
	}));
	errorDiv.style.display = 'block';

	invokeButton.className = 'modal-button aetherium';
	invokeButton.style.display = 'none';
	banishButton.className = 'modal-button light';
	banishButton.style.display = 'block';
	window.currentSanctum = { wasPlaying };
}

/**
 * Submits the rune input and handles success or failure.
 */
function modalSubmitRune() {
	const { sanctum, rune, url, wasPlaying } = window.currentSanctum || {};
	if (!sanctum || !rune) return;

	const runeInput = queryElement('#modal-rune-input');
	const input = runeInput.value.trim().toLowerCase();
	const errorDiv = queryElement('#modal-rune-error') || initErrorDiv();
	const modalContent = queryElement('.modal-content');
	const { invokeButton, banishButton } = getModalButtons();

	if (input === rune.toLowerCase()) {
		// Disable buttons and input to prevent further interaction
		invokeButton.disabled = true;
		banishButton.disabled = true;
		runeInput.disabled = true;

		// Temporarily disable Escape and Enter key listeners
		const originalEscapeListener = document.onkeydown;
		document.onkeydown = (event) => {
			if (event.key === 'Escape' || event.key === 'Enter') {
				event.preventDefault();
				return false;
			}
		};

		errorDiv.style.display = 'none';
		errorDiv.textContent = '';
		wState.modalAudio = stopAudio(wState.modalAudio);

		// Apply shake and rapid pulse effects
		modalContent.style.animation = 'modal-shake 0.5s ease-in-out 4, modal-success-pulse 0.3s ease-in-out 5';

		animationLightningFlash(null, () => {
			wState.effectAudio = playAudio('assets/audio/Rune_Success_One_Of_Us.webm');
			const backgroundAudio = queryElement('#wizardium-soundtrack');

			if (wasPlaying) {
				backgroundAudio.play().catch(err => console.error('Failed to resume background audio:', err));
			}

			setTimeout(() => {
				// Reset animations and key listeners before redirect
				modalContent.style.animation = 'modal-container-pulse 6s ease-in-out infinite';
				document.onkeydown = originalEscapeListener; // Restore key listener
				window.location.href = url;
			}, 4500); // 4 seconds for audio + 500ms leeway
		});

		return;
	}

	animationLightningFlash(null, () => {
		const errorAudioSrc = input ? 'assets/audio/Rune_Error_The_Offered_Rune_Is_Unworthy.webm' : 'assets/audio/Rune_Error_No_Rune_Offered.webm';
		wState.effectAudio = playAudio(errorAudioSrc);
	});

	errorDiv.textContent = '';
	errorDiv.appendChild(Object.assign(document.createElement('div'), {
		textContent: input ? `The rune "${input}" is unworthy!` : `No rune offered!`
	}));
	errorDiv.appendChild(Object.assign(document.createElement('div'), {
		textContent: `"Speak the true rune to break the seal of the ${sanctum} Sanctum."`
	}));
	errorDiv.style.display = 'block';
	runeInput.focus();
}

/**
 * Closes the rune modal and resets its state.
 */
function modalClose() {
	animationVoidEffect(() => {
		playAudio('assets/audio/Fade_Lost_Wanderer.webm');
	});

	const modal = queryElement('#modal-rune');
	const runeInput = queryElement('#modal-rune-input');
	const sanctumName = queryElement('#modal-sanctum-name');
	const sanctumTitle = queryElement('#modal-sanctum-title');
	const { invokeButton, banishButton } = getModalButtons();
	const errorDiv = queryElement('#modal-rune-error') || initErrorDiv();
	const { wasPlaying } = window.currentSanctum || {};

	setTimeout(() => {
		modalReset({ modal, runeInput, sanctumName, invokeButton, banishButton, errorDiv, sanctumTitle });
		wState.modalAudio = stopAudio(wState.modalAudio);
		window.currentSanctum = null;
		restoreAltar(document.getElementById('altar'));

		if (wasPlaying) {
			queryElement('#wizardium-soundtrack').play().catch(err => console.error('Failed to resume background audio:', err));
		}
	}, 2500);
}

/**
 * Resets modal elements to their default state.
 * @param {Object} elements - Modal elements to reset.
 */
function modalReset({ modal, runeInput, sanctumName, invokeButton, banishButton, errorDiv, sanctumTitle }) {
	modal.style.display = 'none';
	runeInput.value = '';
	runeInput.className = 'modal-input';
	runeInput.style.color = 'var(--light)';
	runeInput.disabled = false;
	sanctumName.className = '';
	sanctumTitle.textContent = '';
	invokeButton.className = 'modal-button aetherium';
	invokeButton.style.display = 'block';
	banishButton.className = 'modal-button light';
	banishButton.style.display = 'block';
	errorDiv.style.display = 'none';
	errorDiv.textContent = '';
}

/**
 * Opens the guide modal and plays associated audio.
 * @param {Event} event - The triggering event.
 */
function modalOpenGuide(event) {
	event.stopPropagation();
	stopAllAudio();

	animationLightningFlash(null, () => {
		wState.effectAudio = playAudio('assets/audio/Altar_Guide.webm');
	});

	queryElement('#modal-guide').style.display = 'flex';
}

/**
 * Closes the guide modal and plays banish audio.
 */
function modalCloseGuide() {
	animationVoidEffect(() => {
		playAudio('assets/audio/Fade_Lost_Wanderer.webm');
	});

	setTimeout(() => {
		queryElement('#modal-guide').style.display = 'none';
		restoreAltar(document.getElementById('altar'));
	}, 2500);
}
// #endregion MODAL MANAGEMENT


/////////////////////////
// * EVENT LISTENERS * //
/////////////////////////
/**
 * Initializes DOM elements for event listeners.
 * @returns {Object} Object containing references to DOM elements.
 */
function initDOMElements() {
	return {
		enterOverlay: queryElement('#enter-overlay'),
		header: queryElement('.header'),
		audio: queryElement('#wizardium-soundtrack'),
		player: queryElement('#altar'),
		toggleButton: queryElement('#toggle-button'),
		guideButton: queryElement('#guide-button'),
		body: document.body
	};
}

/**
 * Initializes a factory for starting the audio experience.
 * @param {Object} elements - DOM elements for the experience.
 * @returns {Function} The start audio experience handler.
 */
function initAudioExperienceFactory({ enterOverlay, header, audio, player, toggleButton, body }) {
	let isInitialDisplay = true;

	return function startAudioExperience(event) {
		if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
			return;
		}
		event.preventDefault();

		window.scrollTo(0, 0);
		enterOverlay.classList.add('hidden');

		setTimeout(() => {
			enterOverlay.style.display = 'none';
			body.classList.remove('overlay-active');
			header.classList.remove('hidden');

			if (!isInitialDisplay) return;

			player.classList.remove('offscreen');
			player.classList.add('blink');
			setTimeout(() => {
				player.classList.remove('blink');
				player.classList.add('offscreen');
				isInitialDisplay = false;
			}, 1500);

			// Init preload all remaining audio files
			initPreloadAudio(wAudio);

			// Play welcome audio only once and store it
			wState.introAudio = playAudio('assets/audio/Welcome_to_The_Wizardium.webm');

			// Start arcana text glow effect
			animationArcanaTextGlow();
		}, 500);

		audio.play().then(() => {
			player.classList.remove('paused');
			player.classList.add('playing');
			toggleButton.textContent = 'Quiet Arcana';
		}).catch(err => console.error('Background audio play failed:', err));

		const startEvents = ['click', 'touchstart', 'keydown'];
		startEvents.forEach(eventType => document.removeEventListener(eventType, startAudioExperience));
	};
}

/**
 * Initializes the initial UI state for the audio experience.
 * @param {Object} elements - DOM elements object.
 */
function initInitialUI(elements) {
	elements.enterOverlay.classList.remove('hidden');
	elements.header.classList.add('hidden');
	elements.body.classList.add('overlay-active');
	elements.audio.volume = 0.5;
}

/**
 * Initializes the altar animation and mouse move behavior.
 * @param {HTMLElement} player - The altar player element.
 */
function initAltarAnimation(player) {
	setTimeout(() => {
		player.classList.remove('offscreen');
		player.classList.add('blink');

		setTimeout(() => {
			player.classList.remove('blink');
			player.classList.add('offscreen');
			wState.isAltarStarting = false;
			wState.altarMouseListener = initAltarMouseMove(player);
		}, 1500);

	}, 500);
}

/**
 * Initializes click listener for the main logo.
 */
function initMainLogoListener() {
	const mainLogo = queryElement('#main-logo');
	mainLogo && mainLogo.addEventListener('click', animationLightningFlash);
}

/**
 * Initializes click listener for the Sonus Arcana container.
 */
function initSonusAnimationListener() {
	const sonusContainer = queryElement('.sonus-container');
	sonusContainer && sonusContainer.addEventListener('click', animationSonusPhrase);
}

/**
 * Initializes click listeners for sanctum links.
 */
function initSanctumLinksListener() {
	const sanctumLinks = document.querySelectorAll('.sanctum-link');

	sanctumLinks.forEach(link => {
		const { sanctum, rune, color, url } = link.dataset;

		// Click handler
		link.addEventListener('click', (event) => {
			event.preventDefault();
			if (sanctum === 'Onyxara') {
				modalDenyOnyx();
			} else {
				modalUnveilSanctum(sanctum, rune, color, url);
			}
		});

		// Hover handler
		link.addEventListener('mouseenter', () => {
			wState.hoverAudio = stopAudio(wState.hoverAudio);
			wState.hoverAudio = playAudio(wSanctum[sanctum].hoverAudioSrc, 0.8, true);
		});
		link.addEventListener('mouseleave', () => {
			wState.hoverAudio = stopAudio(wState.hoverAudio);
		});
	});
}

/**
 * Initializes rune input field interactions.
 */
function initRuneInputListener() {
	const runeInput = queryElement('#modal-rune-input');
	runeInput.addEventListener('input', () => {
		const { rune, colorClass } = window.currentSanctum || {};
		if (!rune || !colorClass) return;

		const input = runeInput.value.trim().toLowerCase();
		runeInput.style.color = input && rune.toLowerCase().startsWith(input) ? `var(--${colorClass})` : 'var(--light)';
	});

	runeInput.addEventListener('keydown', (event) => {
		if (!event.repeat) {
			playAudio('assets/audio/Rune_Typing.webm');
		}
		if (event.key === 'Enter') {
			modalSubmitRune();
		}
	});
}

/**
 * Initializes escape key handling for modals.
 */
function initEscapeKeyListener() {
	document.addEventListener('keydown', (event) => {
		if (event.key !== 'Escape') return;

		const runeModal = queryElement('#modal-rune');
		const guideModal = queryElement('#modal-guide');

		if (runeModal.style.display === 'flex') {
			modalClose();
		} else if (guideModal.style.display === 'flex') {
			modalCloseGuide();
		}
	});
}

/**
 * Initializes click listeners for modal buttons.
 */
function initModalButtonsListener() {
	const runeInvokeButton = queryElement('#modal-rune-invoke');
	const runeBanishButton = queryElement('#modal-rune-banish');
	const guideBanishButton = queryElement('#modal-guide-banish');

	runeInvokeButton && runeInvokeButton.addEventListener('click', modalSubmitRune);
	runeBanishButton && runeBanishButton.addEventListener('click', modalClose);
	guideBanishButton && guideBanishButton.addEventListener('click', modalCloseGuide);
}

/**
 * Initializes the codex details interaction.
 */
function initCodexDetailsListener() {
	const codexSummary = queryElement('details > summary');
	const codexDetails = queryElement('details');

	if (!codexSummary || !codexDetails) {
		return;
	}

	codexSummary.addEventListener('click', (e) => {
		if (wState.isPactSanctified) return;
		e.preventDefault();

		setTimeout(() => {
			codexDetails.open = false;
		}, 0);

		// Trigger oath animation to guide user
		animationCovenantOathPhrase();
	});
}

/**
 * Initializes click listener for the Covenant Oath container.
 */
function initOathAnimationListener() {
	const oathAction = ['#oath-container', '#oath-action-link'];

	oathAction.forEach(selector => {
		const oathActionLink = queryElement(selector);
		oathActionLink && oathActionLink.addEventListener('click', animationCovenantOathPhrase);
	});
}

/**
 * Initializes click listener for the Pact Sanctio container and link.
 */
function initPactAnimationListener() {
	const pactAction = ['#pact-container', '#pact-action-link'];

	pactAction.forEach(selector => {
		const element = queryElement(selector);
		if (!element) return;

		element.addEventListener('click', animationPactSanctioPhrase);
		element.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' || event.key === 'Space') {
				event.preventDefault();
				animationPactSanctioPhrase();
			}
		});
	});
}

/**
 * Initializes hover audio and smooth scroll for special rune links in the rune table.
 */
function initRuneTableLinksListener() {
	const runeLinks = document.querySelectorAll('.rune-table-link');

	runeLinks.forEach(link => {
		const { sanctum } = link.dataset;

		// Hover audio
		link.addEventListener('mouseenter', () => {
			wState.hoverAudio = stopAudio(wState.hoverAudio);
			wState.hoverAudio = playAudio(wSanctum[sanctum].hoverAudioSrc, 0.8, true);
		});
		link.addEventListener('mouseleave', () => {
			wState.hoverAudio = stopAudio(wState.hoverAudio);
		});

		// Click: smooth scroll to Sealed Chapters
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const target = document.querySelector('#ChroniclesOfTheSealedChapters');
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
}

/**
 * Initializes click listener for the Secret Inscription header.
 */
function initSecretInscriptionListener() {
	const secretInscription = queryElement('h2.aetherium.color-pulse.text-centered');
	secretInscription && secretInscription.addEventListener('click', animationLightningFlash);
}

/**
 * Initializes the "Prove Your Worth" link behavior.
 */
function initProveLinkListener() {
	const proveLink = queryElement('p > a[href="#ChroniclesOfTheSealedChapters"]');
	if (!proveLink) return;

	proveLink.addEventListener('click', (event) => {
		event.preventDefault();
		wState.effectAudio = stopAudio(wState.effectAudio);
		wState.effectAudio = playAudio('assets/audio/Prove_Your_Worth.webm');
		queryElement('#ChroniclesOfTheSealedChapters').scrollIntoView({ behavior: 'smooth' });
	});
}

/**
 * Initializes click listener for the footer logo.
 */
function initFooterLogoListener() {
	const footerLogo = queryElement('#footer-logo');
	if (!footerLogo) return;

	footerLogo.addEventListener('click', (event) => {
		animationLightningFlash(event);
		window.scrollTo({ top: 0, behavior: 'instant' });
	});
}

/**
 * Initializes all event listeners and UI elements on DOM content load.
 */
function initEventListeners() {
	const elements = initDOMElements();
	const startAudioExperience = initAudioExperienceFactory(elements);
	const startEvents = ['click', 'touchstart', 'keydown'];

	startEvents.forEach(event => document.addEventListener(event, startAudioExperience, { once: true }));
	elements.toggleButton.addEventListener('click', toggleAudio);
	elements.guideButton.addEventListener('click', modalOpenGuide);

	// * UI ELEMENTS * //
	initAltarAnimation(elements.player);
	initInitialUI(elements);
	initMainLogoListener();

	// * MAIN * //
	initSonusAnimationListener();
	initSanctumLinksListener();
	initRuneInputListener();
	initEscapeKeyListener();
	initModalButtonsListener();
	initCodexDetailsListener();
	initOathAnimationListener();
	initPactAnimationListener();
	initRuneTableLinksListener();

	// * FOOTER * //
	initSecretInscriptionListener();
	initProveLinkListener();
	initFooterLogoListener();
}

document.addEventListener('DOMContentLoaded', initEventListeners);
// #endregion EVENT LISTENERS
