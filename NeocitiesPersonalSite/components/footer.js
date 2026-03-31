class PageFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `<footer style = "font-family:'Tomorrow', sans-serif; position:relative;">
            <img src = "images/stardust-refsheet-border-bottom.png" style = "width:32%; height:105px; bottom:0; right:0; position:absolute; pointer-events:none;"/>
            <h5 style="position: absolute; pointer-events: none; right:3%; bottom:40%;">links to other things</h5>

        <div style="max-width: 100%; padding: 1% 0%; margin: 0%; background-color: #0c335c; font-size:14px;">
            <div style="max-width:100%; margin:0%; padding-left:2%; padding-right: 35%; padding-top:12px; display:flex; justify-content:space-between; align-items:bottom; flex-wrap:wrap; gap:10%; color:white;">
                <em style="max-width:45%;">No generative AI in any way, shape or form was used in the making of this site or its content and assets.</em>
                <h4 style="align-self:self-end;">SquidInkarus | 2026</h4>
                <p></p>
            </div>
        </div>

    </footer>`
            ;
    }
}

customElements.define("page-footer", PageFooter);