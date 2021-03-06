import createTags from "./createTags.js";
export default function createHtml(data, targetElement) {
    const element = document.querySelector(targetElement);
    element.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        element.innerHTML += `<div class="result">
                                        <h4>${data[i].name}</h4>
                                        <p>Birthday: <b>${data[i].birthday}</b></p>
                                        <p>Nickname: <b>${data[i].nickname}</b></p>
                                        <div>Occupations:                                         
                                            ${createTags(data[i].occupation)}
                                        </div>
                                    </div>`;
    }
}