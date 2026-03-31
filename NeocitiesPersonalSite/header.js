const header = document.createElement('template');

header.innerHTML =
    <header style="font-family:Tomorrow, sans-serif;">
    <div style="max-width:100%; margin:0; padding-top:6%; background-image:url(images/crystal-bkg.jpg);">

        <img src="images/stardust-refsheet-border-top.png" style="width:75%; height:27%; position:absolute; top:0; pointer-events:none;" />

        <img src="images/space-dragon-logo.png" style="width:25%; height:20%; position:absolute; top:3%; padding-left:1%; pointer-events:none;" />

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
    </header >
    ;

// a class meant to represent a potential html element with some script features. in this case it'll be our banner and all that
class PageHeader extends HTMLElement() {

    // all classes need constructors!
    constructor() {
        // just call the extended class' constructor
        super();
    }

    // called when the element is created
    connectedCallback() {

    }
}

// defines the <> tags for the element, which i ended up going with <page-header>
customElements.define('page-header', PageHeader)