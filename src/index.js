import emotes from "./emotes/emotes";
import hooks from "./hooks";
import utils from "./utils";

hooks.init();

let emotePrefix = "!";

function playEmote(username, emoteName) {
    const emote = emotes[emoteName];
    const playerId = utils.getPlayerIdByName(username);
    const animator = hooks.noa.entities.getState(playerId, "animator");
    const time = utils.frameTime / emote.Nr;
    
    animator.startAnimation(emote, time);
}

const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;

            if (node.classList?.contains("TextFromServer")) {
                handleMessage(node);
            }

            const nested = node.querySelector?.(".TextFromServer");
            if (nested) {
                handleMessage(nested);
            }
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

function handleMessage(element) {
    const parts = element.querySelectorAll(".IndividualText");
    const username = parts[0]?.textContent?.trim();
    const message = parts[2]?.textContent?.trim();

    if (username && message?.startsWith(emotePrefix)) {
        const emoteName = message.substring(emotePrefix.length).trim();
        playEmote(username, emoteName);
    }
}