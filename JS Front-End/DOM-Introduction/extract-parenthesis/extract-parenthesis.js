function extract(targetElId) {
    const targetEl = document.getElementById(targetElId);
    const content = targetEl.textContent;

    const pattern = /\(.+?\)/g;
    const matches = content.match(pattern);

    const formattedMatches = matches.map(match => match.substring(1, match.length - 1));

    return formattedMatches.join('; ');
}