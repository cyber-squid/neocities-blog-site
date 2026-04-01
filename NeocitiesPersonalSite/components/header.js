// a class meant to represent a potential html element with some script features. in this case it'll be our banner and all that
class PageHeader extends HTMLElement {

    // called when the element is created
    connectedCallback() {
        this.innerHTML =`
                <header style="font-family:Tomorrow, sans-serif;">
        <div style="max-width:100%; margin:0; padding-top:90px; background-image:url(images/kirby-block-bkg.png); background-size:contain;">

            <img src="images/stardust-refsheet-border-top.png" style="width:75%; height:200px; position:absolute; top:0; pointer-events:none;" />

            <img src="images/space-dragon-logo.png" style="width:380px; height:160px; position:absolute; top:3%; padding-left:1%; pointer-events:none;" />

            <div class="header-footer-info">
                <ul style="max-width:100%; margin:0%; padding-left:30%; padding-right:5%; display:flex; justify-content:flex-end; flex-wrap:wrap; gap:10%; color:white;">
                    <li><a href="file:///C:/Users/RazerBlade15/source/repos/NeocitiesPersonalSite/NeocitiesPersonalSite/homepage.html">Home</a></li>
                    <li><a href="file:///C:/Users/RazerBlade15/source/repos/NeocitiesPersonalSite/NeocitiesPersonalSite/art-things.html">My Art</a></li>
                    <li>Other Hobbies</li>
                    <li><a href="file:///C:/Users/RazerBlade15/source/repos/NeocitiesPersonalSite/NeocitiesPersonalSite/personal-collections.html">Stuff Collections</a></li>
                    <li><a href="https://pencilpuffs-art.carrd.co/">Commissions!</a></li>
                </ul>
            </div>

        </div>
    </header>`
            ;
    }
}

// defines the <> tags for the element, which i ended up going with <page-header>
customElements.define('page-header', PageHeader);


class UpdatesSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

                <div class="navigational-info-box" style="margin-top: 30px;">

                    <div class="header-for-nav-box">
                        <h3>Updates</h3>
                    </div>

                    <div style="padding: 2%; height:150px; overflow:auto;">

                        <h4>- 31/03/26 -</h4>
                        <p style="font-size:13.5px">Wrote up the rest of the sitemap (for now), and working on reformatting the code so I have more CSS classes and less copy pasting.</p>
                        <br/>
                        <h4>- 30/03/26 -</h4>
                        <p style="font-size:13.5px">I FORGOT TO WRITE UPDATES NOOOO,, today I managed to actually finally get the "haeder and footer I don't need to copy-paste" working though! Also started writing the sitemap</p>
                        <h4>- 26/03/26 -</h4>
                        <p style="font-size:13.5px">Added scrollbar to updates, section at bottom of home for stamps! AND BLINKIES SCROLLING! There is an issue with a gap that I did a silly fix for, not sure if there's a proper one?'</p>
                        <br />
                        <h4>- 25/03/26 -</h4>
                        <p style="font-size:13.5px">Added footer section, changed scrollbars and put together a Starfy cursor. :3 I think my next goal is adding scroll to updates and blinkies, and getting a guestbook up.</p>
                        <br />
                        <h4>- 24/03/26 -</h4>
                        <p style="font-size:13.5px">Wrote up a to-do list for all the stuff on the site I'd like to eventually add. Tried to use js to generate the header and footer so I don't have to copypaste the HTML for every little change, but failed...</p>
                        <br />
                        <h4>- 23/03/26 -</h4>
                        <p style="font-size:13.5px">Working on site layout still. Added a section for current games, and blinkies! (manually...) TODO: Is it possible to automate these?! </p>
                    </div>

                </div>
        `;
    }

}

customElements.define('updates-section', UpdatesSection);