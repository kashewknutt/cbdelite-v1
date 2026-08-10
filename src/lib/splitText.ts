export interface SplitTextResult {
  words: HTMLElement[];
  chars: HTMLElement[];
}

/**
 * Free alternative to GSAP's paid SplitText plugin. Wraps each word (and
 * optionally each character) of a container's text in overflow-hidden spans
 * so GSAP can animate yPercent/opacity per span for a clip-reveal effect.
 */
export function splitText(
  container: HTMLElement,
  options: { chars?: boolean } = {},
): SplitTextResult {
  const { chars = false } = options;
  const words: HTMLElement[] = [];
  const charEls: HTMLElement[] = [];
  const text = container.textContent ?? '';

  container.textContent = '';

  text.split(' ').forEach((word, i, arr) => {
    const wordOuter = document.createElement('span');
    wordOuter.className = 'split-word';
    wordOuter.style.display = 'inline-block';
    wordOuter.style.overflow = 'hidden';
    wordOuter.style.verticalAlign = 'top';

    const wordInner = document.createElement('span');
    wordInner.className = 'split-word-inner';
    wordInner.style.display = 'inline-block';
    wordInner.style.willChange = 'transform';

    if (chars) {
      [...word].forEach((char) => {
        const charOuter = document.createElement('span');
        charOuter.style.display = 'inline-block';
        charOuter.style.overflow = 'hidden';
        charOuter.style.verticalAlign = 'top';

        const charInner = document.createElement('span');
        charInner.className = 'split-char';
        charInner.style.display = 'inline-block';
        charInner.style.willChange = 'transform';
        charInner.textContent = char;

        charOuter.appendChild(charInner);
        wordInner.appendChild(charOuter);
        charEls.push(charInner);
      });
    } else {
      wordInner.textContent = word;
    }

    wordOuter.appendChild(wordInner);
    container.appendChild(wordOuter);
    words.push(wordInner);

    if (i < arr.length - 1) {
      container.appendChild(document.createTextNode(' '));
    }
  });

  return { words, chars: charEls };
}
