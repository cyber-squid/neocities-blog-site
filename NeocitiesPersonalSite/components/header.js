// a class meant to represent a potential html element with some script features. in this case it'll be our banner and all that
class PageHeader extends HTMLElement {

    // called when the element is created
    connectedCallback() {
        this.innerHTML =`
                <header style="font-family:Tomorrow, sans-serif;">
        <div style="max-width:100%; margin:0; padding-top:90px; background-image:url(images/kirby-block-bkg.png); background-size:contain;">

            <img src="images/stardust-refsheet-border-top.png" style="width:75%; height:200px; position:absolute; top:0; pointer-events:none;" />

            <img src="images/space-dragon-logo.png" style="width:380px; height:160px; position:absolute; top:3%; padding-left:1%; pointer-events:none;" />

            <div style="max-width: 100%; padding: 0.7%; margin: 0%; margin-top: 2%; background-color: #0c335c; ">
                <ul style="max-width:100%; margin:0%; padding-left:30%; padding-right:5%; display:flex; justify-content:flex-end; flex-wrap:wrap; gap:10%; color:white;">
                    <li><a href="file:///C:/Users/RazerBlade15/source/repos/NeocitiesPersonalSite/NeocitiesPersonalSite/homepage.html">Home</a></li>
                    <li><a href="file:///C:/Users/RazerBlade15/source/repos/NeocitiesPersonalSite/NeocitiesPersonalSite/art-things.html">My Art</a></li>
                    <li>Other Hobbies</li>
                    <li><a href="file:///C:/Users/RazerBlade15/source/repos/NeocitiesPersonalSite/NeocitiesPersonalSite/personal-collections.html">Stuff Collections</a></li>
                    <li>Commissions!</li>
                </ul>
            </div>

        </div>
    </header>`
            ;
    }
}

// defines the <> tags for the element, which i ended up going with <page-header>
customElements.define('page-header', PageHeader);
