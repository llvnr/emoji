import Config from "../module.js"

function Accueil(doc, options){

    // LOAD CSS 
        let cssNormalService = document.getElementById('cssNormalService')
        cssNormalService.href = '/css/module/style.css';
        let cssResponsiveService = document.getElementById('cssResponsiveService')
        cssResponsiveService.href = '/css/module/responsive.css';
    // LOAD CSS 

    let searchTimer
    let ShellEJXContainerHTML

    let ContainerPrincipaleContent = document.getElementById("ShellBody");
    ContainerPrincipaleContent.innerHTML = ""

    let cadreService = document.createElement('div')
    cadreService.classList.add('cadre__service')
        {
            // let logoServiceHTML = document.createElement('img')
            // logoServiceHTML.classList.add('cadre__service_logo')
            // logoServiceHTML.src = options.logo
            // cadreService.append(logoServiceHTML)
            // let titleHTML = document.createElement('h2')
            // titleHTML.innerText = options.app
            // cadreService.append(titleHTML)
            let descriptionHTML = document.createElement('small')
            descriptionHTML.innerText = Config.description
            cadreService.append(descriptionHTML)
            
        }
    ContainerPrincipaleContent.append(cadreService)

    let ShellEJXSearchHTML = document.createElement("input")
    ShellEJXSearchHTML.classList.add("ShellEJX__search")
    ContainerPrincipaleContent.append(ShellEJXSearchHTML)

    let containerHTML = document.createElement('div')
    containerHTML.classList.add('container__application-emojix')

        ShellEJXSearchHTML.addEventListener('input', function(e) {

            let newValue = e.target.value

            clearTimeout(searchTimer);

            ShellEJXContainerHTML.innerHTML = ""

            searchTimer = setTimeout(() => {

                getEmoji()
                .then(emoji => {
                    for (const key in emoji){
                        if(emoji.hasOwnProperty(key)){
                            let keyAsString = key.toString()

                            if(keyAsString.includes(newValue)){

                                let ShellEJXCardHTML = document.createElement("div")
                                ShellEJXCardHTML.classList.add("ShellEJX__card")
        
                                    let ShellEJXCardEmojiHTML = document.createElement("div")
                                    ShellEJXCardEmojiHTML.classList.add("ShellEJX__card-emoji")
                                    ShellEJXCardEmojiHTML.innerText = emoji[key]
                                    ShellEJXCardHTML.append(ShellEJXCardEmojiHTML)
        
                                    let ShellEJXCardNameHTML = document.createElement("div")
                                    ShellEJXCardNameHTML.classList.add("ShellEJX__card-name")
                                    ShellEJXCardNameHTML.innerText = key
                                    ShellEJXCardHTML.append(ShellEJXCardNameHTML)
        
                                ShellEJXContainerHTML.append(ShellEJXCardHTML)
        
                                ShellEJXCardHTML.addEventListener("click", function() {
        
                                    copyToClipboard(emoji[key]);
                                    copyUtilisation(emoji[key])
                                    .then(result => {
                                        // console.log(result)
        
                                        gtag('event', 'service_emojix', {
                                            'emoji': emoji[key],
                                            'description': key
                                        })
        
                                        alert('Copié !')
                                    })
                                    .catch(err => {
                                        alert(err)
                                    })
        
                                })

                            }

                        }
                    }
                })
                .catch(err => {
                    alert(err)
                })

                // emoji.forEach(element => {
                //     if(element.description.includes(newValue)){

                //         // console.log(element)

                //         let ShellEJXCardHTML = document.createElement("div")
                //         ShellEJXCardHTML.classList.add("ShellEJX__card")
        
                //             let ShellEJXCardEmojiHTML = document.createElement("div")
                //             ShellEJXCardEmojiHTML.classList.add("ShellEJX__card-emoji")
                //             ShellEJXCardEmojiHTML.innerText = element.emoji 
                //             ShellEJXCardHTML.append(ShellEJXCardEmojiHTML)
        
                //             let ShellEJXCardNameHTML = document.createElement("div")
                //             ShellEJXCardNameHTML.classList.add("ShellEJX__card-name")
                //             ShellEJXCardNameHTML.innerText = element.description 
                //             ShellEJXCardHTML.append(ShellEJXCardNameHTML)
        
                //         ShellEJXContainerHTML.append(ShellEJXCardHTML)

                //         ShellEJXCardHTML.addEventListener("click", function() {

                //             copyToClipboard(element.emoji);
                //             copyUtilisation(element.emoji)
                //             .then(result => {
                //                 // console.log(result)
                //                 alert('Copié !')
                //             })
                //             .catch(err => {
                //                 alert(err)
                //             })
        
                //         })

                //     }
    
                // });

                // console.log(e.target.value)
            }, 1000);

        })

        ShellEJXContainerHTML = document.createElement("div")
        ShellEJXContainerHTML.classList.add("ShellEJX__container")

            // console.log(emoji.length)

            getEmoji()
            .then(emoji => {
                for (const key in emoji){
                    if(emoji.hasOwnProperty(key)){

                        let ShellEJXCardHTML = document.createElement("div")
                        ShellEJXCardHTML.classList.add("ShellEJX__card")

                            let ShellEJXCardEmojiHTML = document.createElement("div")
                            ShellEJXCardEmojiHTML.classList.add("ShellEJX__card-emoji")
                            ShellEJXCardEmojiHTML.innerText = emoji[key]
                            ShellEJXCardHTML.append(ShellEJXCardEmojiHTML)

                            let ShellEJXCardNameHTML = document.createElement("div")
                            ShellEJXCardNameHTML.classList.add("ShellEJX__card-name")
                            ShellEJXCardNameHTML.innerText = key
                            ShellEJXCardHTML.append(ShellEJXCardNameHTML)

                        ShellEJXContainerHTML.append(ShellEJXCardHTML)

                        ShellEJXCardHTML.addEventListener("click", function() {

                            copyToClipboard(emoji[key]);
                            copyUtilisation(emoji[key])
                            .then(result => {
                                // console.log(result)

                                gtag('event', 'service_emojix', {
                                    'emoji': emoji[key],
                                    'description': key
                                })

                                alert('Copié !')
                            })
                            .catch(err => {
                                alert(err)
                            })

                        })
                    }
                }
            })
            .catch(err => {
                alert(err)
            })

            // emoji.forEach(element => {
                


            // });

        containerHTML.append(ShellEJXContainerHTML)

    ContainerPrincipaleContent.append(containerHTML)

    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    async function copyUtilisation(emoji) {

        const response = await fetch('/api/emojix/utilisation', {
            method: "POST",
            body: JSON.stringify({
              emoji: emoji
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        return data;

    }

    async function getEmoji() {

        const response = await fetch('/api/emojix/all', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        return data;

    }

}

export default Accueil;